import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Diagnóstico gratuito",
  description: "Solicita un diagnóstico gratuito y descubre cómo aparece tu marca en los motores conversacionales.",
};

export default function Contacto() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium mb-4" style={{ color: "var(--accent)" }}>Contacto</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Solicita un diagnóstico gratuito
        </h1>
        <p className="text-xl max-w-2xl" style={{ color: "var(--muted)" }}>
          Cuéntanos qué hace tu empresa. Revisamos cómo aparece tu marca en los principales motores
          conversacionales y te enviamos un informe inicial sin coste.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
          <div>
            <h2 className="text-lg font-semibold mb-6">Qué incluye el diagnóstico</h2>
            <ul className="flex flex-col gap-4">
              {[
                "Análisis de cómo aparece tu marca en ChatGPT, Perplexity y Gemini",
                "Identificación de señales que faltan o están mal configuradas",
                "Comparativa con 2-3 competidores directos",
                "Recomendaciones concretas de próximos pasos",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm" style={{ color: "var(--muted)" }}>
                  <span style={{ color: "var(--accent)" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-xl" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
            <p className="font-medium mb-2">Escríbenos directamente</p>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
              Cuéntanos tu empresa, categoría y cualquier pregunta que tengas.
            </p>
            <a
              href="mailto:hola@refferable.com?subject=Diagnóstico gratuito"
              className="inline-block w-full text-center px-6 py-3 rounded-lg font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}
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
