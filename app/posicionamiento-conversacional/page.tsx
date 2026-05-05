import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qué es el Posicionamiento Conversacional y el AEO",
  description:
    "El posicionamiento conversacional (AEO — Answer Engine Optimization) es la optimización de marcas para aparecer en respuestas de ChatGPT, Perplexity y Gemini. Cómo funciona y cómo aplicarlo.",
  alternates: { canonical: "https://refferable.com/posicionamiento-conversacional" },
  openGraph: {
    title: "Posicionamiento Conversacional y AEO — Cómo funciona",
    description:
      "Guía completa sobre AEO (Answer Engine Optimization): qué es, en qué se diferencia del SEO, cómo deciden los modelos de IA qué marcas mencionar y cómo optimizar tu presencia conversacional.",
  },
};

const pillars = [
  {
    title: "Contexto semántico claro",
    desc: "Los modelos de lenguaje no procesan keywords — procesan significado. Tu marca necesita estar asociada de forma inequívoca a los problemas que resuelve, los sectores en los que opera y las preguntas que responde.",
  },
  {
    title: "Coherencia entre fuentes",
    desc: "Cuando una marca se describe de forma contradictoria en distintos canales, los modelos tienen dificultades para sintetizarla con confianza. La coherencia semántica distribuida es la base del AEO.",
  },
  {
    title: "Contenido citeable, no solo posicionable",
    desc: "El AEO no optimiza para rankear: optimiza para ser citado. El contenido debe tener la estructura, la especificidad y la autoridad necesarias para que un modelo de lenguaje lo use como fuente en una respuesta.",
  },
  {
    title: "Autoridad distribuida en el ecosistema",
    desc: "ChatGPT o Perplexity no evalúan una sola URL. Sintetizan señales de múltiples fuentes: menciones en medios, definiciones en directorios, citas en contenido de terceros. La estrategia AEO trabaja ese ecosistema.",
  },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico de presencia conversacional",
    desc: "Analizamos cómo te mencionan (o ignoran) ChatGPT, Perplexity y Gemini cuando alguien pregunta por tu categoría, tus competidores o los problemas que resuelves. Identificamos las brechas y su causa.",
  },
  {
    n: "02",
    title: "Arquitectura semántica",
    desc: "Rediseñamos la estructura de contenido de tu marca — páginas, FAQs, definiciones, descripciones de servicio — para que los modelos de lenguaje puedan interpretarte con precisión y sin ambigüedad.",
  },
  {
    n: "03",
    title: "Construcción de señales de autoridad",
    desc: "Trabajamos tu presencia contextual en fuentes relevantes: menciones, citas, definiciones externas. Las mismas señales que los modelos de IA usan para decidir si una marca es una referencia fiable.",
  },
  {
    n: "04",
    title: "Medición y ajuste continuo",
    desc: "Monitorizamos tu evolución en entornos conversacionales: en qué consultas apareces, con qué contexto, y frente a qué competidores. El AEO no es una acción puntual — es un canal que se gestiona.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Posicionamiento conversacional — AEO (Answer Engine Optimization)",
  provider: {
    "@type": "Organization",
    name: "Refferable",
    url: "https://refferable.com",
  },
  description:
    "Servicio especializado en AEO (Answer Engine Optimization) y GEO (Generative Engine Optimization). Optimizamos la presencia digital de marcas para que aparezcan como referencia en las respuestas de ChatGPT, Perplexity y Gemini.",
  serviceType: "Answer Engine Optimization",
  areaServed: { "@type": "Country", name: "Spain" },
};

export default function PosicionamientoConversacional() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>
          Posicionamiento conversacional · AEO · GEO
        </p>
        <h1 className="font-semibold tracking-tight leading-[1.08] mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", maxWidth: "820px" }}>
          Qué es el posicionamiento conversacional y cómo funciona el AEO
        </h1>
        <p className="mb-5" style={{ color: "var(--muted)", maxWidth: "620px", fontSize: "1.1rem", lineHeight: "1.75" }}>
          El <strong>AEO (Answer Engine Optimization)</strong> o posicionamiento conversacional es la disciplina que optimiza la presencia de una marca para que los modelos de lenguaje — ChatGPT, Perplexity, Gemini — la citen como referencia al generar respuestas.
        </p>
        <p style={{ color: "var(--muted)", maxWidth: "620px", fontSize: "1rem", lineHeight: "1.75" }}>
          A diferencia del SEO, no compite por un ranking entre diez resultados. Compite por ser parte de una respuesta única que el asistente genera — y que el usuario toma como definitiva.
        </p>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-10" style={{ color: "var(--soft)" }}>Los cuatro pilares del AEO</p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {pillars.map((p) => (
            <div key={p.title} className="p-8" style={{ backgroundColor: "var(--bg)" }}>
              <h2 className="font-semibold mb-3" style={{ fontSize: "1.1rem" }}>{p.title}</h2>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Diferència SEO vs AEO — molt important per GEO */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--soft)" }}>SEO vs AEO — cuadro comparativo</p>
        <div className="max-w-3xl">
          <div className="grid grid-cols-3 gap-px mb-px" style={{ backgroundColor: "var(--border)" }}>
            <div className="p-4" style={{ backgroundColor: "var(--surface)" }}>
              <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--soft)" }}>Aspecto</p>
            </div>
            <div className="p-4" style={{ backgroundColor: "var(--surface)" }}>
              <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--soft)" }}>SEO tradicional</p>
            </div>
            <div className="p-4" style={{ backgroundColor: "var(--surface)" }}>
              <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--accent)" }}>AEO / Posicionamiento conversacional</p>
            </div>
          </div>
          {[
            ["Objetivo", "Rankear entre 10 resultados", "Ser citado en una respuesta única"],
            ["Canal", "Google, Bing", "ChatGPT, Perplexity, Gemini"],
            ["Métrica", "Posición, clics, CTR", "Menciones, contexto, frecuencia de cita"],
            ["Señales clave", "Backlinks, keywords, técnico", "Coherencia semántica, autoridad distribuida"],
            ["Resultado para el usuario", "Lista de enlaces para elegir", "Respuesta directa sin alternativas visibles"],
          ].map(([aspecto, seo, aeo]) => (
            <div key={aspecto} className="grid grid-cols-3 gap-px mb-px" style={{ backgroundColor: "var(--border)" }}>
              <div className="p-4" style={{ backgroundColor: "var(--bg)" }}>
                <p className="text-sm font-medium">{aspecto}</p>
              </div>
              <div className="p-4" style={{ backgroundColor: "var(--bg)" }}>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{seo}</p>
              </div>
              <div className="p-4" style={{ backgroundColor: "var(--bg)" }}>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{aeo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-12" style={{ color: "var(--soft)" }}>Cómo trabajamos el posicionamiento conversacional</p>
        <div className="flex flex-col gap-10 max-w-3xl">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-8">
              <span className="text-2xl font-semibold shrink-0 w-10 pt-1" style={{ fontFamily: "Lora, Georgia, serif", color: "var(--accent)", opacity: 0.3 }}>{s.n}</span>
              <div>
                <h3 className="font-semibold mb-2" style={{ fontSize: "1.05rem" }}>{s.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-semibold leading-snug mb-3" style={{ fontSize: "2rem" }}>
            ¿Cómo aparece tu marca en ChatGPT ahora mismo?
          </h2>
          <p className="mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", color: "var(--text)" }}>
            La mayoría de empresas no lo saben.
          </p>
          <p className="mb-10" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
            Hacemos un diagnóstico gratuito de tu presencia conversacional en ChatGPT, Perplexity y Gemini. Sin compromiso — con datos reales.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-7 py-3 rounded text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
          >
            Solicitar diagnóstico gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
