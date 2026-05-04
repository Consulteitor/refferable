import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posicionamiento conversacional para motores de IA",
  description: "Cómo funciona el posicionamiento en ChatGPT, Perplexity y Gemini. Contexto, coherencia semántica y señales de autoridad.",
};

const pillars = [
  { title: "Contexto antes que keywords", desc: "La IA entiende significado y contexto, no palabras aisladas. Tu marca necesita estar asociada de forma clara a los problemas que resuelve." },
  { title: "Coherencia semántica", desc: "Cuando una marca se define de formas contradictorias en distintos lugares, la IA tiene dificultades para interpretarla. Coherencia es confianza." },
  { title: "Respuestas, no rankings", desc: "El objetivo no es competir por clics. Es ser incluido en la respuesta única que el asistente genera para el usuario." },
  { title: "Autoridad distribuida", desc: "La IA no lee solo tu web. Utiliza señales distribuidas en múltiples fuentes fiables del ecosistema digital." },
];

const steps = [
  { n: "01", title: "Análisis conversacional", desc: "Identificamos cómo está siendo (o no) mencionada tu marca cuando los usuarios preguntan a la IA por tu categoría." },
  { n: "02", title: "Alineación semántica", desc: "Organizamos tu estructura de mensajes, páginas y FAQs para que la IA pueda interpretar con claridad quién eres y qué haces." },
  { n: "03", title: "Señales de autoridad", desc: "Trabajamos la presencia contextual en fuentes relevantes para que los modelos te consideren una referencia fiable." },
  { n: "04", title: "Seguimiento de presencia", desc: "Monitorizamos cómo evoluciona tu visibilidad en entornos conversacionales y ajustamos la estrategia." },
];

export default function PosicionamientoConversacional() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--accent)" }}>Cómo funciona</p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8" style={{ maxWidth: "760px" }}>
          Posicionamiento conversacional para motores de IA
        </h1>
        <p className="text-xl leading-relaxed" style={{ color: "var(--muted)", maxWidth: "560px", fontFamily: "Inter, sans-serif" }}>
          ChatGPT, Perplexity y Gemini no muestran rankings. Deciden qué marcas mencionar. Esto es lo que cambia — y cómo trabajamos para que estés en esa respuesta.
        </p>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs font-medium uppercase tracking-widest mb-10" style={{ color: "var(--muted)" }}>Los cuatro pilares</p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {pillars.map((p) => (
            <div key={p.title} className="p-8" style={{ backgroundColor: "var(--bg)" }}>
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs font-medium uppercase tracking-widest mb-12" style={{ color: "var(--muted)" }}>El proceso</p>
        <div className="flex flex-col gap-12 max-w-3xl">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-8">
              <span className="text-2xl font-semibold shrink-0 w-10 pt-1" style={{ color: "var(--border)", fontFamily: "Lora, Georgia, serif" }}>{s.n}</span>
              <div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">¿Tiene sentido para tu empresa?</h2>
        <p className="text-lg mb-10" style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>
          Cuéntanos qué haces. Te decimos honestamente si podemos ayudarte y qué señales te faltan.
        </p>
        <Link
          href="/contacto"
          className="inline-block px-7 py-3 rounded text-sm font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)", fontFamily: "Inter, sans-serif" }}
        >
          Solicitar diagnóstico gratuito
        </Link>
      </section>
    </>
  );
}
