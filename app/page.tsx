import Link from "next/link";

const services = [
  {
    n: "01",
    title: "Auditoría conversacional",
    desc: "Analizamos cómo aparece tu marca (o no) cuando alguien pregunta a la IA por tu categoría, tus problemas o tus alternativas.",
  },
  {
    n: "02",
    title: "Estrategia de contenidos",
    desc: "Redefinimos mensajes, páginas y FAQs para alinearlos con la forma real en la que los usuarios preguntan a los asistentes de IA.",
  },
  {
    n: "03",
    title: "Señales de autoridad",
    desc: "Optimizamos la huella digital que los modelos usan como contexto: estructura, semántica y fuentes de confianza.",
  },
  {
    n: "04",
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
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>
          Posicionamiento conversacional
        </p>
        <h1 className="font-semibold tracking-tight leading-[1.08] mb-8" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", maxWidth: "820px" }}>
          Posiciona tu marca donde empieza la decisión
        </h1>
        <p className="mb-4" style={{ color: "var(--soft)", maxWidth: "560px", fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.25rem", lineHeight: "1.6" }}>
          Cada vez más decisiones empiezan en ChatGPT o Perplexity, no en Google.
        </p>
        <p className="mb-10" style={{ color: "var(--muted)", maxWidth: "520px", fontSize: "1.05rem" }}>
          Ayudamos a empresas a aparecer como referencia en esas respuestas, con coherencia, estructura y señales de autoridad que los modelos de IA puedan usar.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contacto"
            className="px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)", fontFamily: "Inter, sans-serif" }}
          >
            Solicitar diagnóstico gratuito
          </Link>
          <Link
            href="/posicionamiento-conversacional"
            className="px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-60"
            style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}
          >
            Ver cómo funciona →
          </Link>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Concepto — pull quote lateral */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>
              Por qué ahora
            </p>
            <h2 className="font-semibold leading-snug" style={{ fontSize: "1.75rem" }}>
              Hacemos que tu marca sea relevante para la IA
            </h2>
          </div>
          <div>
            <p className="font-medium leading-relaxed mb-4" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.2rem", color: "var(--text)", borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem" }}>
              "La forma de buscar está cambiando. Cada vez más decisiones empiezan dentro de interfaces conversacionales donde solo hay una respuesta, no diez enlaces."
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.7" }}>
              Refferable trabaja para que esa respuesta incluya tu marca — con coherencia, estructura y señales de autoridad que los modelos de IA puedan usar sin dudar.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Servicios con números grandes */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-10" style={{ color: "var(--soft)" }}>Qué hacemos</p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {services.map((s) => (
            <div key={s.title} className="p-8" style={{ backgroundColor: "var(--bg)" }}>
              <p className="font-semibold mb-3 leading-none" style={{ fontFamily: "Lora, Georgia, serif", fontSize: "2.5rem", color: "var(--border)", lineHeight: 1 }}>
                {s.n}
              </p>
              <h3 className="font-semibold mb-3" style={{ fontSize: "1.15rem" }}>{s.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Tres principis — tipografia variada */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-10" style={{ color: "var(--soft)" }}>Cómo lo entendemos</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Motor conversacional ≠ buscador",
              italic: "No muestra resultados.",
              body: "Interpreta preguntas, decide qué fuentes son fiables y construye una respuesta. Si tu marca no encaja ahí, no aparece.",
            },
            {
              title: "El SEO no ha muerto, ha cambiado de forma",
              italic: "Posicionar ya no es rankear páginas.",
              body: "Es ser entendido, citado y reutilizado por sistemas de IA. El objetivo ya no es el clic. Es la autoridad.",
            },
            {
              title: "Las IAs no improvisan",
              italic: "Las respuestas se basan en estructura, claridad y confianza.",
              body: "Optimizar para motores conversacionales es diseñar contenido que una IA pueda usar sin dudar.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold mb-3" style={{ fontSize: "1.05rem" }}>{item.title}</h3>
              <p className="mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", color: "var(--text)", fontSize: "1rem" }}>
                {item.italic}
              </p>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--soft)" }}>Preguntas frecuentes</p>
        <div className="flex flex-col divide-y max-w-3xl" style={{ borderColor: "var(--border)" }}>
          {faqs.map((f) => (
            <div key={f.q} className="py-7">
              <p className="font-medium mb-3" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.15rem" }}>
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
          <h2 className="font-semibold leading-snug mb-3" style={{ fontSize: "2.5rem" }}>
            ¿Quieres saber cómo te ve la IA?
          </h2>
          <p className="mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.15rem", color: "var(--text)" }}>
            Sin coste. Sin compromiso.
          </p>
          <p className="mb-10" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.7" }}>
            Revisamos cómo aparece tu marca en los principales motores conversacionales y te enviamos un informe con los puntos concretos a mejorar.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-7 py-3 rounded text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
          >
            Solicitar diagnóstico gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
