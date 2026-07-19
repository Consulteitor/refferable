import type { FullReport, QueryResult, ScanInput, Tone } from "./types";

/** Normaliza para comparar: minúsculas y sin acentos. */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/** Índice de la primera mención de `name` en `text`, o -1. Exige límites de palabra. */
function firstMentionIndex(text: string, name: string): number {
  const haystack = normalize(text);
  const needle = normalize(name.trim());
  if (!needle) return -1;
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}($|[^\\p{L}\\p{N}])`, "u");
  const match = re.exec(haystack);
  return match ? match.index + match[1].length : -1;
}

const POSITIVE_WORDS = [
  "recomendable", "recomendada", "recomendado", "recomiendan", "lider", "lideres",
  "referente", "referencia", "destaca", "destacada", "destacado", "fiable",
  "solida", "solido", "buena reputacion", "bien valorada", "bien valorado",
  "popular", "reconocida", "reconocido", "excelente", "una de las mejores",
  "uno de los mejores", "valoraciones positivas", "opiniones positivas", "confianza",
];

const NEGATIVE_WORDS = [
  "quejas", "criticas", "critica", "problemas", "polemica", "polemicas",
  "mala reputacion", "mal valorada", "mal valorado", "opiniones negativas",
  "valoraciones negativas", "estafa", "denuncias", "poco fiable", "desconocida",
  "desconocido", "no es recomendable", "evitar", "dudosa", "dudoso",
];

/** Tono del entorno inmediato de la primera mención de la marca. */
function detectTone(answer: string, brand: string): Tone | null {
  const idx = firstMentionIndex(answer, brand);
  if (idx === -1) return null;
  const context = normalize(answer.slice(Math.max(0, idx - 200), idx + brand.length + 200));
  const positives = POSITIVE_WORDS.filter((w) => context.includes(w)).length;
  const negatives = NEGATIVE_WORDS.filter((w) => context.includes(w)).length;
  if (negatives > positives) return "negativo";
  if (positives > negatives) return "positivo";
  return "neutro";
}

/** Analiza una respuesta: mención, posición relativa entre marcas conocidas y tono. */
export function analyzeAnswer(question: string, answer: string, input: ScanInput): QueryResult {
  const brandIdx = firstMentionIndex(answer, input.brand);
  const competitorHits = input.competitors
    .map((name) => ({ name, idx: firstMentionIndex(answer, name) }))
    .filter((c) => c.idx !== -1);

  let brandPosition: number | null = null;
  if (brandIdx !== -1) {
    brandPosition = 1 + competitorHits.filter((c) => c.idx < brandIdx).length;
  }

  return {
    question,
    answer,
    brandMentioned: brandIdx !== -1,
    brandPosition,
    competitorsMentioned: competitorHits.map((c) => c.name),
    tone: detectTone(answer, input.brand),
  };
}

function buildRecommendations(input: ScanInput, results: QueryResult[]): string[] {
  const recs: string[] = [];
  const categoryResults = results.filter((r) => !normalize(r.question).includes(normalize(input.brand)));
  const brandResults = results.filter((r) => normalize(r.question).includes(normalize(input.brand)));
  const mentionedInCategory = categoryResults.filter((r) => r.brandMentioned).length;
  const mentionedInBrand = brandResults.filter((r) => r.brandMentioned).length;
  const negativeCount = results.filter((r) => r.tone === "negativo").length;
  const competitorLead = results.filter(
    (r) => r.brandMentioned && r.brandPosition !== null && r.brandPosition > 1
  ).length;
  const competitorsPresent = results.filter((r) => !r.brandMentioned && r.competitorsMentioned.length > 0).length;

  if (mentionedInCategory === 0 && categoryResults.length > 0) {
    recs.push(
      `La IA no te menciona en ninguna pregunta de categoría ("${categoryResults[0].question}"). Es el problema más grave y el más habitual: existes para quien ya te conoce, pero no entras en las respuestas donde se decide la compra. Necesitas contenido que asocie tu marca a la categoría de forma explícita y verificable.`
    );
  } else if (mentionedInCategory < categoryResults.length) {
    recs.push(
      `Apareces en ${mentionedInCategory} de ${categoryResults.length} preguntas de categoría. Hay hueco: revisa qué formulaciones te dejan fuera y crea contenido que responda exactamente a esas preguntas.`
    );
  }

  if (competitorsPresent > 0) {
    recs.push(
      `En ${competitorsPresent} respuesta${competitorsPresent > 1 ? "s" : ""} la IA cita a tus competidores y a ti no. Cada una de esas respuestas es una conversación de venta que empieza sin ti. Analiza qué señales tienen ellos (menciones externas, comparativas, directorios) que a ti te faltan.`
    );
  }

  if (competitorLead > 0) {
    recs.push(
      `Cuando apareces junto a competidores, no siempre eres la primera opción. El orden en una respuesta generada no es casual: refleja qué marca entiende mejor el modelo. Trabajar la claridad semántica de tu propuesta suele mover esa posición.`
    );
  }

  if (negativeCount > 0) {
    recs.push(
      `Hay ${negativeCount} respuesta${negativeCount > 1 ? "s" : ""} con tono negativo o dudoso alrededor de tu marca. Antes de invertir en visibilidad conviene entender qué fuentes alimentan esa percepción y corregirlas.`
    );
  }

  if (mentionedInBrand < brandResults.length && brandResults.length > 0) {
    recs.push(
      `Incluso preguntando directamente por tu marca, la IA no siempre tiene qué decir. Eso apunta a una huella digital escasa: pocas fuentes externas hablan de ti con la claridad suficiente para que un modelo pueda citarte.`
    );
  }

  if (recs.length === 0) {
    recs.push(
      `Tu presencia conversacional está por encima de la media: la IA te menciona con regularidad. El siguiente paso no es aparecer, es controlar cómo apareces — con qué descripción, junto a quién y en qué preguntas de más valor comercial todavía no entras.`
    );
  }

  recs.push(
    `Este informe es una foto automática con un motor de búsqueda conversacional. Un diagnóstico estratégico completo cruza varios motores, más preguntas y una lectura manual de tus señales — y termina en un plan de acción priorizado, no en una nota.`
  );

  return recs;
}

/** Nota 0-100: 60% tasa de mención, 20% posición frente a competidores, 20% tono. */
export function buildReport(input: ScanInput, results: QueryResult[]): FullReport {
  const mentioned = results.filter((r) => r.brandMentioned);
  const mentionRate = results.length > 0 ? mentioned.length / results.length : 0;

  const positionScores = mentioned
    .filter((r) => r.brandPosition !== null)
    .map((r) => 1 / (r.brandPosition as number));
  const positionScore =
    positionScores.length > 0
      ? positionScores.reduce((a, b) => a + b, 0) / positionScores.length
      : 0;

  const toneValues: number[] = mentioned
    .map((r) => (r.tone === "positivo" ? 1 : r.tone === "neutro" ? 0.6 : r.tone === "negativo" ? 0.2 : 0))
    .filter((v) => v > 0);
  const toneScore = toneValues.length > 0 ? toneValues.reduce((a, b) => a + b, 0) / toneValues.length : 0;

  const score = Math.round(100 * (0.6 * mentionRate + 0.2 * positionScore + 0.2 * toneScore));

  const competitorCounts = input.competitors.map((name) => ({
    name,
    count: results.filter((r) => r.competitorsMentioned.includes(name)).length,
  }));

  const toneTally: Record<Tone, number> = { positivo: 0, neutro: 0, negativo: 0 };
  for (const r of mentioned) {
    if (r.tone) toneTally[r.tone] += 1;
  }
  const dominantTone =
    mentioned.length === 0
      ? null
      : (Object.entries(toneTally).sort((a, b) => b[1] - a[1])[0][0] as Tone);

  return {
    input,
    results,
    score,
    mentionRate,
    mentionedCount: mentioned.length,
    competitorCounts,
    dominantTone,
    recommendations: buildRecommendations(input, results),
  };
}
