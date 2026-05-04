import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AEO sin tecnicismos — Preguntas reales sobre posicionamiento conversacional",
  description:
    "Respuestas directas a las preguntas más frecuentes sobre AEO, posicionamiento en ChatGPT y optimización para motores conversacionales. Sin jerga, sin promesas vacías.",
  alternates: { canonical: "https://refferable.com/digamoslo-claro" },
};

const faqs = [
  {
    q: "¿El posicionamiento conversacional es lo mismo que el SEO?",
    a: "No. El SEO optimiza para Google: trabaja keywords, backlinks y factores técnicos para rankear entre múltiples resultados. El AEO (Answer Engine Optimization) optimiza para motores conversacionales como ChatGPT o Perplexity, que no generan rankings — generan una respuesta única. Las señales que determinan si apareces son distintas: coherencia semántica, autoridad distribuida y contexto citeable.",
  },
  {
    q: "¿Cómo decide ChatGPT o Perplexity qué marcas mencionar?",
    a: "Los modelos de lenguaje sintetizan información de múltiples fuentes públicas. No tienen un sistema de anuncios ni acuerdos comerciales con marcas. Si te mencionan es porque el modelo interpreta que eres una referencia relevante y fiable en tu categoría — basándose en coherencia semántica, contexto distribuido y señales de autoridad que ha procesado durante su entrenamiento o en búsquedas en tiempo real.",
  },
  {
    q: "¿Refferable paga a ChatGPT o Perplexity para que aparezcan sus clientes?",
    a: "No. No existe ese mecanismo — ninguna agencia puede comprar visibilidad en las respuestas generadas por modelos de lenguaje. Lo que hacemos es optimizar las señales orgánicas que los modelos usan para decidir qué marcas son referencias fiables.",
  },
  {
    q: "¿Trabajar el AEO puede perjudicar mi SEO en Google?",
    a: "No. Las prácticas de AEO — contenido claro, bien estructurado, coherente y con autoridad — son exactamente lo que Google también valora. En la mayoría de casos, trabajar el posicionamiento conversacional mejora simultáneamente el SEO tradicional.",
  },
  {
    q: "¿Se puede garantizar que mi marca aparezca en ChatGPT?",
    a: "No, y cualquier agencia que lo garantice miente. Los modelos de lenguaje toman sus propias decisiones de síntesis. Lo que sí podemos hacer es optimizar sistemáticamente los factores que aumentan la probabilidad de ser citado — y medirlo con datos reales.",
  },
  {
    q: "¿Cuánto tiempo tardan en verse resultados de AEO?",
    a: "Depende de la madurez digital de la marca, la competencia en su categoría y el punto de partida. En términos generales, los primeros cambios detectables en presencia conversacional ocurren entre 4 y 12 semanas después de la implementación. No es inmediato — es un canal que se construye.",
  },
  {
    q: "¿Para qué tipo de empresas tiene más sentido el posicionamiento conversacional?",
    a: "Para empresas donde el cliente investiga antes de decidir: servicios B2B, SaaS, consultoras, ecommerce especializado, formación, salud, finanzas. Si el ciclo de decisión de tu cliente incluye una fase de búsqueda e investigación, esa fase ocurre cada vez más en entornos conversacionales.",
  },
  {
    q: "¿Qué diferencia a Refferable de una agencia SEO que ofrece 'optimización para IA'?",
    a: "La especialización. El AEO y el GEO (Generative Engine Optimization) tienen lógicas distintas al SEO tradicional: distintas señales, distintas métricas, distintas estrategias de contenido. Refferable se dedica exclusivamente a este canal — no es un servicio adicional añadido a un paquete SEO.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function DigamosloClaro() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Sin rodeos</p>
        <h1 className="font-semibold tracking-tight leading-[1.08] mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", maxWidth: "820px" }}>
          AEO y posicionamiento conversacional sin tecnicismos
        </h1>
        <p className="mb-4" style={{ color: "var(--muted)", maxWidth: "580px", fontSize: "1.1rem", lineHeight: "1.75" }}>
          Preguntas reales sobre cómo funciona el posicionamiento en ChatGPT, Perplexity y Gemini. Sin jerga de marketing, sin promesas imposibles.
        </p>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="max-w-3xl p-10 rounded" style={{ backgroundColor: "var(--surface)" }}>
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--soft)" }}>La definición operativa</p>
          <p style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.2rem", lineHeight: "1.7", color: "var(--text)" }}>
            "El <strong>AEO (Answer Engine Optimization)</strong> o posicionamiento conversacional es la optimización de una marca para que los modelos de lenguaje la citen como referencia en las respuestas que generan. Se distingue del SEO en que no persigue un ranking entre resultados, sino ser parte de la respuesta única que el asistente construye."
          </p>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-10" style={{ color: "var(--soft)" }}>Preguntas frecuentes</p>
        <div className="flex flex-col divide-y max-w-3xl" style={{ borderColor: "var(--border)" }}>
          {faqs.map((f) => (
            <div key={f.q} className="py-8">
              <p className="font-medium mb-3" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.1rem" }}>
                {f.q}
              </p>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-semibold leading-snug mb-3" style={{ fontSize: "2rem" }}>
            ¿Tiene sentido el AEO para tu empresa?
          </h2>
          <p className="mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", color: "var(--text)" }}>
            Cuéntanos qué haces y te lo decimos sin rodeos.
          </p>
          <p className="mb-10" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
            Si el AEO no encaja con tu negocio ahora mismo, te lo decimos también. Preferimos ser honestos a venderte algo que no necesitas.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-7 py-3 rounded text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
          >
            Hablar con nosotros
          </Link>
        </div>
      </section>
    </>
  );
}
