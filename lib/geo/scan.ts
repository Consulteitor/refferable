import type { QueryResult, ScanInput } from "./types";
import { getEngine } from "./provider";
import { analyzeAnswer } from "./analysis";
import { getCachedAnswer, setCachedAnswer } from "./cache";

/**
 * Ejecuta una tanda de preguntas contra el motor activo, con cache por pregunta.
 * El desbloqueo del informe completo repite las 2 preguntas gratuitas: la cache
 * evita pagarlas dos veces.
 */
export async function runQueries(questions: string[], input: ScanInput): Promise<QueryResult[]> {
  const engine = getEngine();
  const ctx = { brand: input.brand, competitors: input.competitors };

  const answers = await Promise.all(
    questions.map(async (question) => {
      const cached = getCachedAnswer(question);
      if (cached) return cached;
      const answer = await engine.ask(question, ctx);
      setCachedAnswer(question, answer);
      return answer;
    })
  );

  return questions.map((question, i) => analyzeAnswer(question, answers[i], input));
}
