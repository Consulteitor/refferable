import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Diagnóstico gratuito",
  description: "Solicita un diagnóstico gratuito y descubre cómo aparece tu marca en los motores conversacionales.",
};

export default function Contacto() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--accent)" }}>Contacto</p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8" style={{ maxWidth: "680px" }}>
          Solicita un diagnóstico gratuito
        </h1>
        <p className="text-xl leading-relaxed" style={{ color: "var(--muted)", maxWidth: "520px", fontFamily: "Inter, sans-serif" }}>
          Cuéntanos qué hace tu empresa. Revisamos cómo aparece tu marca en los principales motores conversacionales y te enviamos un informe inicial sin coste.
        </p>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 max-w-4xl">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest mb-8" style={{ color: "var(--muted)" }}>Qué incluye</p>
            <ul className="flex flex-col gap-6">
              {[
                "Análisis de cómo aparece tu marca en ChatGPT, Perplexity y Gemini",
                "Identificación de señales que faltan o están mal configuradas",
                "Comparativa con 2–3 competidores directos",
                "Recomendaciones concretas de próximos pasos",
              ].map((item) => (
                <li key={item} className="flex gap-4 text-sm leading-relaxed" style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>
                  <span className="shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 rounded" style={{ backgroundColor: "var(--surface)" }}>
            <p className="font-semibold mb-2" style={{ fontFamily: "Lora, Georgia, serif" }}>Escríbenos directamente</p>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>
              Cuéntanos tu empresa, categoría y cualquier pregunta que tengas. Respondemos en menos de 48h.
            </p>
            <a
              href="mailto:hola@refferable.com?subject=Diagnóstico gratuito"
              className="inline-block w-full text-center px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)", fontFamily: "Inter, sans-serif" }}
            >
              Enviar email
            </a>
            <p className="text-xs mt-4 text-center" style={{ color: "var(--muted)" }}>
              hola@refferable.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
