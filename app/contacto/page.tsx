import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Diagnóstico conversacional gratuito",
  description:
    "Solicita un diagnóstico inicial de presencia conversacional y descubre cómo aparece tu marca en ChatGPT, Perplexity y Gemini.",
  alternates: { canonical: "https://refferable.com/contacto" },
};

export default function Contacto() {
  return (
    <>
      {/* Hero + Form above the fold */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: pitch */}
          <div className="md:pt-4">
            <p className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: "var(--accent)" }}>
              Diagnóstico gratuito
            </p>
            <h1
              className="font-semibold tracking-tight leading-[1.08] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Descubre cómo te ve la IA
            </h1>
            <p className="mb-8" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              La mayoría de marcas no saben cómo aparecen en ChatGPT, Perplexity o Gemini. El diagnóstico es el primer paso.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {[
                "Cómo aparece tu marca en los tres grandes motores conversacionales",
                "Qué dice la IA cuando alguien pregunta por tu categoría",
                "Comparativa con 2–3 competidores directos",
                "Qué señales te faltan y qué priorizar",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  <span className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>

            <p
              style={{
                fontFamily: "Lora, Georgia, serif",
                fontStyle: "italic",
                fontSize: "0.95rem",
                lineHeight: "1.7",
                color: "var(--muted)",
              }}
            >
              Si el AEO no encaja con tu empresa ahora mismo, te lo decimos también.
            </p>
          </div>

          {/* Right: form */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--soft)" }}>
              Cuéntanos
            </p>
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}
