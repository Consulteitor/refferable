import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AEO sin tecnicismos — Preguntas reales sobre posicionamiento en IA",
  description:
    "Respuestas directas sobre AEO, posicionamiento conversacional, ChatGPT, Perplexity, Gemini y cómo las marcas pueden aparecer en respuestas de IA.",
  alternates: { canonical: "https://refferable.com/digamoslo-claro" },
};

const faqs = [
  {
    q: "¿El posicionamiento conversacional es lo mismo que el SEO?",
    a: "No. El SEO trabaja para que una web aparezca en resultados de búsqueda. El AEO trabaja para que una marca aparezca dentro de respuestas generadas por IA. Son canales relacionados, pero con señales, métricas y lógica distintas. Necesitan estrategias distintas.",
  },
  {
    q: "¿Por qué debería importarle esto a un CEO?",
    a: "Porque tus clientes pueden estar formando opinión sobre tu categoría antes de entrar en tu web, antes de hablar con ventas y antes de ver tus campañas. Si la IA recomienda a otros y no a ti, pierdes consideración sin verlo en Analytics. Es demanda invisible.",
  },
  {
    q: "¿Cómo decide ChatGPT o Perplexity qué marcas mencionar?",
    a: "A partir de señales públicas y contextuales: contenido propio, menciones externas, claridad del posicionamiento, autoridad percibida y coherencia entre fuentes. Si tu marca es difícil de entender o verificar para un modelo, tiene menos probabilidades de aparecer, independientemente de cuánto inviertas en otras cosas.",
  },
  {
    q: "¿Refferable paga a ChatGPT o Perplexity para que aparezcan sus clientes?",
    a: "No. No existe ese mecanismo — ninguna agencia puede comprar visibilidad orgánica en las respuestas de modelos de lenguaje. Trabajamos las señales que los modelos usan para decidir qué marcas son referencias fiables. No hay atajos.",
  },
  {
    q: "¿Se puede garantizar que mi marca aparezca?",
    a: "No. Y quien lo garantice no está siendo honesto. Los modelos toman sus propias decisiones de síntesis. Lo que sí se puede hacer es mejorar sistemáticamente las señales que aumentan la probabilidad de ser entendido y citado — y medirlo con datos reales.",
  },
  {
    q: "¿Trabajar el AEO puede perjudicar mi SEO?",
    a: "No. El AEO bien hecho suele reforzar el SEO porque exige contenido más claro, mejor estructurado y con más autoridad. Es la misma dirección: una marca más fácil de entender es más fácil de citar, y más fácil de rankear.",
  },
  {
    q: "¿Cuánto tarda en funcionar?",
    a: "Depende de la situación de partida. Algunas mejoras pueden detectarse en semanas. Otras requieren más tiempo porque dependen de señales externas, autoridad acumulada y consistencia. No es una campaña de pago que se activa y se apaga. Es construcción de presencia.",
  },
  {
    q: "¿Para qué empresas tiene sentido?",
    a: "Para empresas donde el cliente investiga antes de decidir: B2B, SaaS, consultoría, tecnología, formación, ecommerce especializado, salud, finanzas, legal. Si tus clientes comparan, preguntan y buscan referencias antes de contactarte, la IA ya forma parte de tu funnel aunque todavía no lo estés midiendo.",
  },
  {
    q: "¿Qué diferencia a Refferable de una agencia SEO que añade \"IA\" a su oferta?",
    a: "Que Refferable nace específicamente para trabajar esta capa. No tratamos el AEO como un extra dentro de un paquete SEO. Lo tratamos como un canal propio, con señales, métricas y lógica distinta. Es toda la diferencia.",
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

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Sin rodeos</p>
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
          <div>
            <h1 className="font-semibold tracking-tight leading-[1.08] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              AEO sin tecnicismos
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: "1.75", maxWidth: "520px" }}>
              Preguntas reales sobre cómo funciona el posicionamiento en ChatGPT, Perplexity y Gemini. Sin jerga de marketing. Sin promesas imposibles. Sin vender humo.
            </p>
          </div>
          <div style={{ fontFamily: "Lora, Georgia, serif" }}>
            <p style={{ fontStyle: "italic", fontSize: "1.1rem", lineHeight: "1.65", color: "var(--text)" }}>
              Si tienes dudas sobre si el AEO tiene sentido para tu empresa, es mejor resolverlas antes de decidir.
            </p>
            <p className="mt-4" style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
              Si después de leer esto crees que puede encajar, te hacemos un diagnóstico gratuito. Sin compromiso.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Definición */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="max-w-3xl p-10 rounded" style={{ backgroundColor: "var(--surface)" }}>
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--soft)" }}>La definición operativa</p>
          <p style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.2rem", lineHeight: "1.7", color: "var(--text)" }}>
            &quot;El <strong>AEO — Answer Engine Optimization</strong>{" "}consiste en optimizar la presencia digital de una marca para que los modelos de lenguaje puedan entenderla, citarla y recomendarla cuando responden preguntas sobre una categoría, problema o solución.&quot;
          </p>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* FAQs */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-10" style={{ color: "var(--soft)" }}>Preguntas frecuentes</p>
        <div className="flex flex-col divide-y max-w-3xl" style={{ borderColor: "var(--border)" }}>
          {faqs.slice(0, 5).map((f) => (
            <div key={f.q} className="py-8">
              <p className="font-medium mb-3" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.1rem" }}>
                {f.q}
              </p>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>{f.a}</p>
            </div>
          ))}
        </div>

        {/* Mid-page CTA inline */}
        <div className="max-w-3xl my-4 p-8 rounded" style={{ backgroundColor: "var(--surface)" }}>
          <p className="font-semibold mb-2" style={{ fontSize: "1.05rem" }}>
            ¿Quieres ver qué dice la IA de tu empresa ahora mismo?
          </p>
          <p className="mb-5" style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>
            Cuéntanos tu empresa y categoría. Revisamos cómo te describen ChatGPT, Perplexity y Gemini y te lo enviamos sin coste.
          </p>
          <Link
            href="/contacto"
            className="btn-dark inline-block px-6 py-3 text-sm font-medium"
          >
            Pedir diagnóstico gratuito
          </Link>
        </div>

        <div className="flex flex-col divide-y max-w-3xl" style={{ borderColor: "var(--border)" }}>
          {faqs.slice(5).map((f) => (
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

      {/* CTA final */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-semibold leading-snug mb-3" style={{ fontSize: "2rem" }}>
            Si has llegado hasta aquí, el siguiente paso es claro
          </h2>
          <p className="mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", color: "var(--text)" }}>
            Saber cómo te ve la IA es gratis. No saberlo tiene un coste.
          </p>
          <p className="mb-10" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
            Pedimos un diagnóstico inicial de tu presencia conversacional. Si hay oportunidad, te lo decimos. Si no la hay ahora mismo, también. Sin compromiso, sin rodeos.
          </p>
          <Link
            href="/contacto"
            className="btn-dark inline-block px-7 py-3 text-sm font-medium"
          >
            Solicitar diagnóstico gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
