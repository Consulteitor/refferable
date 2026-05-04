import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digámoslo claro — Sin tecnicismos ni promesas vacías",
  description: "El posicionamiento conversacional explicado sin rodeos. Qué es, cómo funciona, qué no hacemos y cuándo tiene sentido.",
};

const faqs = [
  { q: "¿Esto es SEO?", a: "No exactamente. El SEO tradicional optimiza para que Google te muestre en sus rankings. Esto optimiza para que los sistemas de IA como ChatGPT te mencionen en sus respuestas. Son canales distintos con lógicas distintas." },
  { q: "¿Cómo decide la IA qué marcas mencionar?", a: "Utiliza fuentes públicas, contexto semántico, relaciones entre conceptos y señales de autoridad. No muestra anuncios ni tiene acuerdos comerciales con marcas. Si te menciona, es porque los modelos interpretan que eres una referencia relevante." },
  { q: "¿Refferable paga a las plataformas para aparecer?", a: "No. No compramos visibilidad ni tenemos acuerdos con ninguna plataforma. Trabajamos la presencia orgánica a través de contenido y estructura." },
  { q: "¿Esto puede perjudicar mi posicionamiento en Google?", a: "No. Las prácticas que aplicamos son completamente legítimas y alineadas con los principios de contenido de calidad. No usamos técnicas de spam ni manipulación de resultados." },
  { q: "¿Cuánto tiempo tardan en verse resultados?", a: "Normalmente se empiezan a detectar resultados en semanas o meses, dependiendo de la madurez digital de la marca y la competencia en su categoría. No prometemos resultados inmediatos." },
  { q: "¿Funciona para cualquier tipo de empresa?", a: "Funciona mejor para marcas con una propuesta clara y explicable. Especialmente útil en ecommerce, SaaS, servicios B2B y proyectos educativos donde los clientes investigan antes de decidir." },
  { q: "¿Qué pasa si la IA cambia cómo funciona?", a: "Los principios de claridad, coherencia y autoridad son estructurales en cualquier sistema que sintetice información. La táctica puede cambiar, pero la base no." },
];

export default function DigamosloClaro() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--accent)" }}>Sin rodeos</p>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8" style={{ maxWidth: "760px" }}>
          El posicionamiento conversacional explicado sin tecnicismos
        </h1>
        <p className="text-xl leading-relaxed" style={{ color: "var(--muted)", maxWidth: "560px", fontFamily: "Inter, sans-serif" }}>
          Ni promesas vacías ni jerga de marketing. Aquí explicamos qué hacemos, cómo funciona y cuándo tiene sentido contratarlo.
        </p>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-3xl p-10 rounded" style={{ backgroundColor: "var(--surface)" }}>
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>La definición sin adornos</p>
          <p className="text-xl leading-relaxed" style={{ fontFamily: "Lora, Georgia, serif" }}>
            "El posicionamiento conversacional es la optimización de una marca para que sea mencionada de forma natural dentro de respuestas generadas por sistemas de inteligencia artificial."
          </p>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs font-medium uppercase tracking-widest mb-10" style={{ color: "var(--muted)" }}>Las preguntas directas</p>
        <div className="flex flex-col divide-y max-w-3xl" style={{ borderColor: "var(--border)" }}>
          {faqs.map((f) => (
            <div key={f.q} className="py-8">
              <p className="font-semibold mb-3" style={{ fontFamily: "Lora, Georgia, serif" }}>{f.q}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">¿Tiene sentido para tu empresa?</h2>
        <p className="text-lg mb-10" style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>
          Cuéntanos qué haces y te decimos honestamente si podemos ayudarte.
        </p>
        <Link
          href="/contacto"
          className="inline-block px-7 py-3 rounded text-sm font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)", fontFamily: "Inter, sans-serif" }}
        >
          Hablar con nosotros
        </Link>
      </section>
    </>
  );
}
