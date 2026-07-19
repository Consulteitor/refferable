import type { ScanInput } from "./types";

/**
 * Genera las preguntas de comprador para un escaneo.
 * Las dos primeras son SIEMPRE preguntas de categoría (sin nombrar la marca):
 * son las que miden lo que de verdad importa — si la IA te saca cuando nadie
 * pregunta por ti. Esas dos son las del tramo gratuito.
 * Total: entre 5 y 8 según haya competidores o no.
 */
export function buildQuestions(input: ScanInput): string[] {
  const { brand, category, competitors } = input;
  const cat = category.trim();

  const questions: string[] = [
    `¿Cuáles son las mejores opciones de ${cat} en España?`,
    `¿Qué empresas o marcas de ${cat} me recomiendas?`,
    `¿Qué alternativas hay si busco ${cat}?`,
    `¿Qué opiniones hay sobre ${brand}?`,
    `¿Es fiable ${brand}? ¿Qué se sabe de esta marca?`,
  ];

  for (const competitor of competitors.slice(0, 2)) {
    questions.push(`¿Qué es mejor, ${brand} o ${competitor}?`);
  }

  questions.push(`¿Con quién compite ${brand} en el mercado de ${cat}?`);

  return questions;
}

/** Número de consultas en directo que se ejecutan sin pedir email. */
export const FREE_QUERIES = 2;
