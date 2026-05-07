import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Diagnóstico conversacional gratuito",
  description:
    "Solicita un diagnóstico inicial de presencia conversacional y descubre cómo aparece tu marca en ChatGPT, Perplexity y Gemini.",
  alternates: { canonical: "https://refferable.com/contacto" },
};

const urgencyPoints = [
  {
    title: "El canal ya existe",
    desc: "Tus clientes ya están preguntando a la IA por tu categoría. La pregunta no es si deberías estar ahí. Es si ya estás — y cómo.",
  },
  {
    title: "Cada semana que pasa, alguien te sustituye",
    desc: "Los modelos aprenden de lo que leen. Si tus competidores están construyendo presencia conversacional y tú no, la brecha se amplía.",
  },
  {
    title: "El diagnóstico es el punto de partida",
    desc: "Sin saber dónde estás ahora, no hay estrategia posible. Por eso empezamos con datos reales, no con suposiciones.",
  },
];

export default function Contacto() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--accent)" }}>Diagnóstico gratuito</p>
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
          <div>
            <h1 className="font-semibold tracking-tight leading-[1.08] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Descubre cómo te ve la IA
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "var(--muted)", maxWidth: "520px", lineHeight: "1.7" }}>
              La mayoría de marcas llevan meses sin aparecer en motores conversacionales sin saberlo. El diagnóstico es el primer paso para cambiar eso.
            </p>
          </div>
          <div style={{ fontFamily: "Lora, Georgia, serif" }}>
            <p style={{ fontStyle: "italic", fontSize: "1.1rem", lineHeight: "1.65", color: "var(--text)" }}>
              "No sabemos cómo nos ve la IA" es la respuesta más frecuente cuando preguntamos.
            </p>
            <p className="mt-4" style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
              En 48h te decimos exactamente cómo aparece tu marca — o por qué no aparece.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Por qué ahora */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-10" style={{ color: "var(--soft)" }}>Por qué tiene sentido hacerlo ahora</p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {urgencyPoints.map((p) => (
            <div key={p.title} className="p-8" style={{ backgroundColor: "var(--bg)" }}>
              <h3 className="font-semibold mb-3" style={{ fontSize: "1.05rem" }}>{p.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Formulario */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 max-w-4xl">

          {/* Qué incluye */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-8" style={{ color: "var(--soft)" }}>Lo que recibirás</p>
            <p className="mb-6" style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>
              No es una auditoría de 80 páginas. Es una primera lectura clara de tu situación: dónde estás, quién te ha adelantado y qué deberías priorizar.
            </p>
            <ul className="flex flex-col gap-5 mb-8">
              {[
                "Cómo aparece tu marca en ChatGPT, Perplexity y Gemini",
                "Qué dice la IA cuando alguien pregunta por tu categoría",
                "Comparativa con 2–3 competidores directos",
                "Identificación de señales débiles o ausentes",
                "Recomendaciones concretas de próximos pasos",
              ].map((item) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  <span className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm" style={{ color: "var(--muted)", fontFamily: "Lora, Georgia, serif", fontStyle: "italic" }}>
              Si el AEO no encaja con tu empresa ahora mismo, te lo decimos también.
            </p>
          </div>

          {/* Formulario */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-8" style={{ color: "var(--soft)" }}>Cuéntanos</p>
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}
