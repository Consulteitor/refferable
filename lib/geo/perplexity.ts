import type { AnswerEngine } from "./types";

const API_URL = "https://api.perplexity.ai/chat/completions";

/**
 * Proveedor real: Perplexity API, modelo Sonar.
 * Sonar hace SIEMPRE búsqueda activa en la web — es la gracia: la respuesta
 * refleja señales de contenido reales y actuales, no el conocimiento congelado
 * del entrenamiento. Es exactamente lo que Refferable vende poder mejorar.
 *
 * La pregunta se envía tal cual, sin mencionar que estamos auditando una marca,
 * para no sesgar la respuesta.
 */
export const perplexityEngine: AnswerEngine = {
  name: "perplexity-sonar",

  async ask(question: string): Promise<string> {
    const apiKey = process.env.PERPLEXITY_API_KEY;
    if (!apiKey) {
      throw new Error("PERPLEXITY_API_KEY no está definida");
    }

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "sonar",
        messages: [
          {
            role: "system",
            content:
              "Responde en español de España, como a un comprador que está investigando antes de decidir. Sé concreto: nombra empresas, marcas o productos específicos cuando la pregunta lo pida. No inventes marcas.",
          },
          { role: "user", content: question },
        ],
        temperature: 0.2,
        max_tokens: 700,
      }),
      signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Perplexity API ${res.status}: ${body.slice(0, 200)}`);
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("Perplexity API: respuesta sin contenido");
    }
    return content;
  },
};
