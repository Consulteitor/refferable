import type { AnswerEngine } from "./types";

/**
 * Proveedor mock para desarrollo y para cuando no hay PERPLEXITY_API_KEY.
 * Genera respuestas deterministas (mismo input → misma salida) que ejercitan
 * todos los caminos del análisis: mención sí/no, competidores, tono variable.
 * Se activa con GEO_PROVIDER=mock o automáticamente si falta la clave.
 */

function hash(text: string): number {
  let h = 0;
  for (let i = 0; i < text.length; i++) {
    h = (h * 31 + text.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

const GENERIC_PLAYERS = ["Nubaria", "Cloventis", "Grupo Ademar"];

export const mockEngine: AnswerEngine = {
  name: "mock",

  async ask(question: string, ctx: { brand: string; competitors: string[] }): Promise<string> {
    // Latencia pequeña para que la UI de carga sea visible en desarrollo.
    await new Promise((r) => setTimeout(r, 400 + (hash(question) % 600)));

    const h = hash(question + ctx.brand);
    const mentionBrand = h % 3 !== 0; // ~66% de las respuestas mencionan la marca
    const others = [...ctx.competitors, ...GENERIC_PLAYERS].slice(0, 3);
    const isBrandQuestion = question.toLowerCase().includes(ctx.brand.toLowerCase());

    const parts: string[] = [];

    if (isBrandQuestion) {
      if (mentionBrand || true) {
        // Las preguntas que nombran la marca siempre hablan de ella.
        const toneRoll = h % 4;
        if (toneRoll === 0) {
          parts.push(
            `Sobre ${ctx.brand} hay poca información disponible y algunas críticas por falta de transparencia en precios. No es una opción muy conocida en su mercado.`
          );
        } else if (toneRoll === 1) {
          parts.push(
            `${ctx.brand} es una empresa bien valorada en su sector, con opiniones positivas de clientes que destacan su fiabilidad y atención. Se la considera una opción recomendable.`
          );
        } else {
          parts.push(
            `${ctx.brand} opera en su categoría desde hace años. Ofrece servicios comparables a los de otros actores del mercado, sin diferencias muy marcadas según las fuentes consultadas.`
          );
        }
      }
      if (others.length > 0) {
        parts.push(
          `Entre sus alternativas habituales se citan ${others.join(", ")}, cada una con enfoques distintos.`
        );
      }
    } else {
      // Pregunta de categoría: lista de opciones donde la marca puede o no salir.
      const list = mentionBrand
        ? h % 2 === 0
          ? [ctx.brand, ...others]
          : [others[0], ctx.brand, ...others.slice(1)]
        : others;
      parts.push(
        `Si buscas opciones en esta categoría, las más citadas actualmente son: ${list
          .map((name, i) => `${i + 1}. ${name}`)
          .join("; ")}.`
      );
      if (mentionBrand && h % 2 !== 0) {
        parts.push(`${ctx.brand} destaca por su especialización, aunque ${others[0]} tiene más presencia de mercado.`);
      }
      parts.push(`La elección depende del presupuesto y del tipo de proyecto.`);
    }

    return `[RESPUESTA SIMULADA — modo mock, sin coste de API] ${parts.join(" ")}`;
  },
};
