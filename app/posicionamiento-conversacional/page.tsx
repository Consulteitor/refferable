import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qué es el Posicionamiento Conversacional y el AEO",
  description:
    "El posicionamiento conversacional o AEO ayuda a las marcas a ser entendidas, citadas y recomendadas por motores de IA como ChatGPT, Perplexity y Gemini.",
  alternates: { canonical: "https://refferable.com/posicionamiento-conversacional" },
  openGraph: {
    title: "Posicionamiento Conversacional y AEO — Cómo funciona",
    description:
      "Qué es el AEO (Answer Engine Optimization), en qué se diferencia del SEO, cómo deciden los modelos de IA qué marcas citar y cómo optimizar tu presencia conversacional.",
  },
};

const pillars = [
  {
    title: "Contexto semántico claro",
    desc: "Los modelos de lenguaje no entienden tu marca por una keyword aislada. La entienden por contexto: qué haces, para quién, qué problemas resuelves, en qué categoría debes ser considerado. Sin ese contexto, la IA no sabe cómo presentarte.",
  },
  {
    title: "Coherencia entre fuentes",
    desc: "Si tu web dice una cosa, tus perfiles dicen otra y las menciones externas no refuerzan ninguna, la IA tendrá dificultades para sintetizarte con confianza. La coherencia distribuida no es opcional: es la base.",
  },
  {
    title: "Contenido citeable, no solo posicionable",
    desc: "El AEO no busca atraer clics. Busca construir contenido que pueda ser usado como fuente: claro, específico, atribuible, útil para responder preguntas reales. Un modelo no cita lo que no puede verificar.",
  },
  {
    title: "Autoridad distribuida en el ecosistema",
    desc: "Los motores conversacionales no evalúan una sola URL. Sintetizan señales de múltiples fuentes. Tu autoridad depende también de cómo apareces fuera de tu propia web: menciones, comparativas, directorios, contenido de terceros.",
  },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico de presencia conversacional",
    desc: "Analizamos cómo te mencionan —o ignoran— ChatGPT, Perplexity y Gemini cuando alguien pregunta por tu categoría, tus competidores o los problemas que resuelves. Es el punto de partida: sin datos reales, no hay estrategia.",
  },
  {
    n: "02",
    title: "Arquitectura semántica",
    desc: "Reordenamos y clarificamos el contenido clave de tu marca para que los modelos puedan entenderte sin ambigüedad: páginas, FAQs, definiciones, servicios, casos de uso y mensajes principales.",
  },
  {
    n: "03",
    title: "Construcción de señales de autoridad",
    desc: "Trabajamos tu presencia contextual en fuentes relevantes. No se trata solo de publicar más. Se trata de que tu marca aparezca en los lugares y contextos que refuerzan tu credibilidad como referencia en tu categoría.",
  },
  {
    n: "04",
    title: "Medición y ajuste continuo",
    desc: "Monitorizamos tu evolución: en qué consultas apareces, cómo te describe la IA, frente a qué competidores y qué gaps siguen abiertos. El canal conversacional se gestiona, no se improvisa.",
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

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>
          Posicionamiento conversacional · AEO · GEO
        </p>
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <div>
            <h1 className="font-semibold tracking-tight leading-[1.08] mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Qué es el posicionamiento conversacional y por qué ya afecta a tu negocio
            </h1>
            <p className="mb-5" style={{ color: "var(--muted)", maxWidth: "620px", fontSize: "1.1rem", lineHeight: "1.75" }}>
              El <strong>AEO (Answer Engine Optimization)</strong> es la disciplina que optimiza la presencia digital de una marca para que los modelos de lenguaje puedan entenderla, contextualizarla y citarla en sus respuestas.
            </p>
            <p style={{ color: "var(--muted)", maxWidth: "620px", fontSize: "1rem", lineHeight: "1.75" }}>
              Cuando un comprador pregunta a ChatGPT, Perplexity o Gemini por proveedores, alternativas o soluciones, la IA no le entrega una lista de enlaces. Le da una interpretación del mercado. La pregunta no es si deberías estar ahí. Es si ya estás.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:pt-4">
            <p style={{ color: "var(--soft)", fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", lineHeight: "1.65" }}>
              Tu competencia ya está apareciendo en respuestas donde tu marca no existe.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>
              Hacemos un diagnóstico inicial de tu presencia conversacional. Sin coste. Con datos reales.
            </p>
            <div className="flex flex-col gap-3 pt-1">
              <Link
                href="/contacto"
                className="px-6 py-3 rounded text-sm font-medium text-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
              >
                Solicitar diagnóstico gratuito
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Los cuatro pilares */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mb-10">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>Los cuatro pilares del AEO</p>
            <h2 className="font-semibold leading-snug" style={{ fontSize: "1.75rem" }}>
              En qué falla tu marca ante la IA
            </h2>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75", paddingTop: "0.25rem" }}>
            Si alguno de estos pilares es débil, la IA tiene dificultades para citarte con confianza. La mayoría de marcas presentan señales débiles en al menos dos de ellos — sin saberlo.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {pillars.map((p) => (
            <div key={p.title} className="p-8" style={{ backgroundColor: "var(--bg)" }}>
              <h3 className="font-semibold mb-3" style={{ fontSize: "1.1rem" }}>{p.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* SEO vs AEO */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>SEO vs AEO — cuadro comparativo</p>
        <p className="mb-8" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75", maxWidth: "600px" }}>
          No son enemigos. Son canales distintos con lógicas distintas. El error es tratarlos como si fueran lo mismo.
        </p>
        <div className="max-w-3xl overflow-x-auto">
          <div className="grid grid-cols-3 gap-px mb-px" style={{ backgroundColor: "var(--border)", minWidth: "560px" }}>
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
            ["Objetivo", "Rankear entre resultados", "Ser citado en una respuesta"],
            ["Canal", "Google, Bing", "ChatGPT, Perplexity, Gemini, Claude"],
            ["Usuario", "Busca y elige entre enlaces", "Pregunta y recibe una síntesis"],
            ["Métrica", "Posición, clics, CTR", "Menciones, contexto, cobertura de consultas"],
            ["Señales clave", "Keywords, backlinks, técnica", "Claridad semántica, autoridad distribuida, contenido citeable"],
            ["Riesgo", "Perder posiciones", "No formar parte de la respuesta"],
            ["Resultado", "Tráfico hacia tu web", "Presencia en la decisión inicial"],
          ].map(([aspecto, seo, aeo]) => (
            <div key={aspecto} className="grid grid-cols-3 gap-px mb-px" style={{ backgroundColor: "var(--border)", minWidth: "560px" }}>
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

      {/* Cómo trabajamos */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mb-12">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>Cómo trabajamos</p>
            <h2 className="font-semibold leading-snug" style={{ fontSize: "1.75rem" }}>
              Lo que hacemos cuando trabajamos con tu marca
            </h2>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75", paddingTop: "0.25rem" }}>
            No vendemos paquetes cerrados. Empezamos por entender dónde está tu marca en el ecosistema conversacional y construimos desde ahí. Cada empresa parte de un punto distinto.
          </p>
        </div>
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

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-semibold leading-snug mb-3" style={{ fontSize: "2rem" }}>
            ¿Cómo aparece tu marca en ChatGPT ahora mismo?
          </h2>
          <p className="mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", color: "var(--text)" }}>
            Puede que no aparezca. Puede que aparezca mal. Puede que tus competidores estén ocupando tu sitio.
          </p>
          <p className="mb-10" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
            El primer paso es saberlo. Hacemos un diagnóstico inicial sin coste: qué ve la IA cuando alguien pregunta por tu categoría, cómo te compara con la competencia y qué señales hay que corregir primero.
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
