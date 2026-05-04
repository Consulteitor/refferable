import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posicionamiento conversacional para motores de IA",
  description:
    "Cómo funciona el posicionamiento en ChatGPT, Perplexity y Gemini. Contexto, coherencia semántica y señales de autoridad.",
};

const pillars = [
  {
    title: "Contexto antes que keywords",
    desc: "La IA entiende significado y contexto, no palabras aisladas. Tu marca necesita estar asociada de forma clara a los problemas que resuelve.",
  },
  {
    title: "Coherencia semántica",
    desc: "Cuando una marca se define de formas contradictorias en distintos lugares, la IA tiene dificultades para interpretarla. Coherencia = confianza.",
  },
  {
    title: "Respuestas, no rankings",
    desc: "El objetivo no es competir por clics. Es ser incluido en la respuesta única que el asistente genera para el usuario.",
  },
  {
    title: "Autoridad distribuida",
    desc: "La IA no lee solo tu web. Utiliza señales distribuidas en múltiples fuentes fiables del ecosistema digital.",
  },
];

const steps = [
  {
    n: "01",
    title: "Análisis conversacional",
    desc: "Identificamos cómo está siendo (o no) mencionada tu marca cuando los usuarios preguntan a la IA por tu categoría.",
  },
  {
    n: "02",
    title: "Alineación semántica",
    desc: "Organizamos tu estructura de mensajes, páginas y FAQs para que la IA pueda interpretar con claridad quién eres y qué haces.",
  },
  {
    n: "03",
    title: "Señales de autoridad",
    desc: "Trabajamos la presencia contextual en fuentes relevantes para que los modelos te consideren una referencia fiable.",
  },
  {
    n: "04",
    title: "Seguimiento de presencia",
    desc: "Monitorizamos cómo evoluciona tu visibilidad en entornos conversacionales y ajustamos la estrategia.",
  },
];

export default function PosicionamientoConversacional() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium mb-4" style={{ color: "var(--accent)" }}>Cómo funciona</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Posicionamiento conversacional para motores de IA
        </h1>
        <p className="text-xl max-w-2xl" style={{ color: "var(--muted)" }}>
          ChatGPT, Perplexity y Gemini no muestran rankings. Deciden qué marcas mencionar.
          Esto es lo que cambia — y cómo trabajamos para que estés en esa respuesta.
        </p>
      </section>

      <section className="border-y py-16" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10">Los cuatro pilares</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="p-6 rounded-xl" style={{ border: "1px solid var(--border)" }}>
                <h3 className="font-semibold mb-3">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-12">El proceso</h2>
        <div className="flex flex-col gap-8 max-w-3xl">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-6">
              <span className="text-3xl font-bold shrink-0 w-12" style={{ color: "var(--border)" }}>{s.n}</span>
              <div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">
        <Link
          href="/contacto"
          className="inline-block px-8 py-4 rounded-lg font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Solicitar diagnóstico gratuito
        </Link>
      </section>
    </>
  );
}
