import Link from "next/link";

const services = [
  {
    title: "Auditoría conversacional",
    desc: "Analizamos cómo aparece tu marca (o no) cuando alguien pregunta a la IA por tu categoría, tus problemas o tus alternativas.",
  },
  {
    title: "Estrategia de contenidos",
    desc: "Redefinimos mensajes, páginas y FAQs para alinearlos con la forma real en la que los usuarios preguntan a los asistentes de IA.",
  },
  {
    title: "Señales de autoridad",
    desc: "Optimizamos la huella digital que los modelos usan como contexto: estructura, semántica y fuentes de confianza.",
  },
  {
    title: "Implementación y seguimiento",
    desc: "Acompañamos la ejecución y medimos cómo evoluciona tu presencia en entornos conversacionales.",
  },
];

const faqs = [
  {
    q: "¿Esto es solo una moda alrededor de la IA?",
    a: "No. El uso de asistentes conversacionales para informarse y comparar opciones está creciendo de forma estructural. No se trata de seguir una tendencia, sino de adaptarse a un nuevo canal donde ya se están tomando decisiones.",
  },
  {
    q: "¿En qué se diferencia del SEO tradicional?",
    a: "El SEO busca visibilidad en rankings con múltiples resultados. El posicionamiento conversacional busca ser parte de una respuesta única generada por la IA. No compiten: se complementan, pero requieren enfoques distintos.",
  },
  {
    q: "¿Cómo sabe la IA qué marcas recomendar?",
    a: "Los modelos utilizan contexto, coherencia semántica y señales de autoridad presentes en múltiples fuentes. No 'leen' solo tu web, sino el conjunto de huella digital que define cómo se entiende tu marca.",
  },
];

export default function Home() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <p className="text-sm font-medium mb-4" style={{ color: "var(--accent)" }}>
          Posicionamiento conversacional
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6" style={{ color: "var(--text)" }}>
          Posiciona tu marca en los<br className="hidden md:block" /> nuevos motores de búsqueda
        </h1>
        <p className="text-xl max-w-2xl mb-10" style={{ color: "var(--muted)" }}>
          Ayudamos a empresas a aparecer como referencia en las respuestas de ChatGPT, Perplexity y otros buscadores
          conversacionales cuando sus clientes hacen preguntas clave.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contacto"
            className="px-6 py-3 rounded-lg font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Solicitar diagnóstico gratuito
          </Link>
          <Link
            href="/posicionamiento-conversacional"
            className="px-6 py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--surface)", color: "var(--text)", border: "1px solid var(--border)" }}
          >
            Ver cómo funciona
          </Link>
        </div>
      </section>

      <section className="border-y py-16" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Hacemos que tu marca sea relevante para la IA</h2>
          <p className="text-lg max-w-3xl" style={{ color: "var(--muted)" }}>
            La forma de buscar está cambiando. Cada vez más decisiones empiezan dentro de interfaces conversacionales
            donde solo hay una respuesta, no diez enlaces. Refferable trabaja para que esa respuesta incluya tu marca.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-12">Qué hacemos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-xl"
              style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h3 className="font-semibold mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y py-16" style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Motor conversacional ≠ buscador</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Un motor conversacional no muestra resultados. Interpreta preguntas, decide qué fuentes son fiables
              y construye una respuesta. Si tu marca no encaja ahí, no aparece.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">El SEO no ha muerto, ha cambiado</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Posicionar ya no es rankear páginas. Es ser entendido, citado y reutilizado por sistemas de IA.
              El objetivo ya no es el clic. Es la autoridad.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Las IAs no improvisan</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Las respuestas no se generan al azar. Se basan en estructura, claridad, contexto y confianza.
              Optimizar para motores conversacionales es diseñar contenido que una IA pueda usar sin dudar.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-10">Preguntas frecuentes</h2>
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
        <h2 className="text-3xl font-bold mb-4">¿Quieres saber cómo te ve la IA?</h2>
        <p className="mb-8 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
          Solicita un diagnóstico gratuito y descubre cómo aparece tu marca en motores conversacionales,
          qué señales le faltan y qué puedes hacer para mejorar.
        </p>
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
