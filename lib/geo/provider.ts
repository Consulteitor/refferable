import type { AnswerEngine } from "./types";
import { perplexityEngine } from "./perplexity";
import { mockEngine } from "./mock";

/**
 * Selección de proveedor:
 * - GEO_PROVIDER=mock fuerza el mock (útil en desarrollo y CI).
 * - Sin PERPLEXITY_API_KEY se cae al mock con un aviso en consola.
 * - Con clave y sin override, Perplexity Sonar.
 *
 * v2 multi-motor: convertir esto en una lista de engines y agregar resultados.
 */
export function getEngine(): AnswerEngine {
  if (process.env.GEO_PROVIDER === "mock") {
    return mockEngine;
  }
  if (!process.env.PERPLEXITY_API_KEY) {
    console.warn(
      "[geo] PERPLEXITY_API_KEY no definida — usando proveedor mock. Añade la clave en .env.local o en Vercel para consultas reales."
    );
    return mockEngine;
  }
  return perplexityEngine;
}
