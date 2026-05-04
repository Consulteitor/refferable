import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digámoslo claro — Sin tecnicismos ni promesas vacías",
  description:
    "El posicionamiento conversacional explicado sin rodeos. Qué es, cómo funciona, qué no hacemos y cuándo tiene sentido.",
};

const faqs = [
  {
    q: "¿Esto es SEO?",
    a: "No exactamente. El SEO tradicional optimiza para que Google te muestre en sus rankings. Esto optimiza para que los sistemas de IA como ChatGPT te mencionen en sus respuestas. Son canales distintos con lógicas distintas.",
  },
  {
    q: "¿Cómo decide la IA qué marcas mencionar?",
    a: "Utiliza fuentes públicas, contexto semántico, relaciones entre conceptos y señales de autoridad. No muestra anuncios ni tiene acuerdos comerciales con marcas. Si te menciona, es porque los modelos interpretan que eres una referencia relevante.",
  },
  {
    q: "¿Refferable paga a las plataformas para aparecer?",
    a: "No. No compramos visibilidad ni tenemos acuerdos con ninguna plataforma. Trabajamos la presencia orgánica a través de contenido y estructura.",
  },
  {
    q: "¿Esto puede perjudicar mi posicionamiento en Google?",
    a: "No. Las prácticas que aplicamos son completamente legítimas y alineadas con los principios de contenido de calidad. No usamos técnicas de spam ni manipulación de resultados.",
  },
  {
    q: "¿Cuánto tiempo tardan en verse resultados?",
    a: "Normalmente se empiezan a detectar resultados en semanas o meses, dependiendo de la madurez digital de la marca y la competencia en su categoría. No prometemos resultados inmediatos.",
  },
  {
    q: "¿Funciona para cualquier tipo de empresa?",
    a: "Funciona mejor para marcas con una propuesta clara y explicable. Especialmente útil en ecommerce, SaaS, servicios B2B y proyectos educativos donde los clientes investigan antes de decidir.",
  },
  {
    q: "¿Qué pasa si la IA cambia cómo funciona?",
    a: "Los principios de claridad, coherencia y autoridad son estructurales en cualquier sistema que sintetice información. La táctica puede cambiar, pero la base no.",
  },
];

export default function DigamosloClaro() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium mb-4" style={{ color: "var(--accent)" }}>Sin rodeos</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          El posicionamiento conversacional<br className="hidden md:block" /> explicado sin tecnicismos
        </h1>
        <p className="text-xl max-w-2xl" style={{ color: "var(--muted)" }}>
          Ni promesas vacías ni jerga de marketing. Aquí explicamos qué hacemos, cómo funciona y cuándo tiene sentido contratarlo.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-8">
        <div className="p-8 rounded-xl max-w-3xl" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
          <p className="font-medium mb-4">La definición sin adornos:</p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            El posicionamiento conversacional es la optimización de una marca para que sea mencionada de forma natural
            dentro de respuestas generadas por sistemas de inteligencia artificial.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10">Las preguntas directas</h2>
        <div className="flex flex-col gap-6 max-w-3xl">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <p className="font-medium mb-3">{f.q}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Tiene sentido para tu empresa?</h2>
        <p className="mb-8 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
          Cuéntanos qué haces y te decimos honestamente si podemos ayudarte.
        </p>
        <Link
          href="/contacto"
          className="inline-block px-8 py-4 rounded-lg font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Hablar con nosotros
        </Link>
      </section>
    </>
  );
}
