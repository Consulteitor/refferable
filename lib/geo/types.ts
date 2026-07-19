export type Tone = "positivo" | "neutro" | "negativo";

export type ScanInput = {
  brand: string;
  web?: string;
  category: string;
  competitors: string[];
};

export type QueryResult = {
  question: string;
  answer: string;
  brandMentioned: boolean;
  /** Posición de la marca entre las marcas analizadas que aparecen en la respuesta (1 = primera). Null si no aparece. */
  brandPosition: number | null;
  competitorsMentioned: string[];
  tone: Tone | null;
};

export type PartialScanResult = {
  input: ScanInput;
  totalQuestions: number;
  freeResults: QueryResult[];
  mentionedInFree: number;
};

export type FullReport = {
  input: ScanInput;
  results: QueryResult[];
  score: number;
  mentionRate: number;
  mentionedCount: number;
  competitorCounts: { name: string; count: number }[];
  dominantTone: Tone | null;
  recommendations: string[];
};

/**
 * Contrato de proveedor de motor conversacional.
 * v1: solo Perplexity (Sonar, siempre con búsqueda activa) + mock para desarrollo.
 * v2: añadir ChatGPT (web_search) o Gemini (grounding) = implementar esta interfaz.
 *
 * `ctx` existe solo para que el mock pueda fabricar respuestas realistas.
 * Un proveedor real NUNCA debe usar la marca para sesgar la consulta: se envía
 * la pregunta tal cual la haría un comprador.
 */
export interface AnswerEngine {
  name: string;
  ask(question: string, ctx: { brand: string; competitors: string[] }): Promise<string>;
}
