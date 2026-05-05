import Link from "next/link";

const services = [
  {
    n: "01",
    title: "Auditoría conversacional",
    desc: "Analizamos cómo menciona (o ignora) tu marca la IA cuando alguien pregunta por tu categoría, tus competidores o los problemas que resuelves. El punto de partida de cualquier estrategia AEO.",
  },
  {
    n: "02",
    title: "Estrategia de contenidos para IA",
    desc: "Rediseñamos mensajes, páginas y FAQs con la estructura semántica que los modelos de lenguaje necesitan para citarte. No es SEO tradicional: es arquitectura de contenido para motores conversacionales.",
  },
  {
    n: "03",
    title: "Señales de autoridad digital",
    desc: "Optimizamos tu huella digital distribuida: las señales externas que ChatGPT, Perplexity y Gemini usan para decidir si tu marca es una referencia fiable en su categoría.",
  },
  {
    n: "04",
    title: "Implementación y seguimiento",
    desc: "Acompañamos la ejecución y medimos la evolución de tu presencia conversacional. Detectamos en qué consultas apareces, en cuáles no, y ajustamos la estrategia.",
  },
];

const faqs = [
  {
    q: "¿Qué es el posicionamiento conversacional?",
    a: "El posicionamiento conversacional (también llamado AEO o Answer Engine Optimization) es la práctica de optimizar la presencia digital de una marca para que los modelos de lenguaje como ChatGPT, Perplexity o Gemini la citen como referencia cuando generan respuestas sobre su categoría.",
  },
  {
    q: "¿En qué se diferencia el AEO del SEO tradicional?",
    a: "El SEO optimiza para rankear en resultados de búsqueda donde el usuario elige entre varios enlaces. El AEO optimiza para ser la respuesta única que genera un motor conversacional. No compiten: son canales distintos que requieren estrategias distintas.",
  },
  {
    q: "¿Cómo decide ChatGPT o Perplexity qué marcas mencionar?",
    a: "Los modelos utilizan coherencia semántica, contexto distribuido en múltiples fuentes fiables y señales de autoridad. No leen solo tu web: sintetizan la huella digital completa de tu marca para decidir si eres una referencia citabable en una respuesta.",
  },
  {
    q: "¿Esto puede perjudicar mi posicionamiento en Google?",
    a: "No. Las prácticas de AEO son completamente compatibles con el SEO tradicional. En muchos casos se refuerzan mutuamente: un contenido bien estructurado para IA también es un contenido mejor para Google.",
  },
  {
    q: "¿Para qué tipo de empresas tiene más sentido?",
    a: "Para cualquier marca donde los clientes investigan antes de decidir: SaaS, servicios B2B, ecommerce especializado, consultoras, formación o productos con ciclo de decisión largo. Si tus clientes preguntan a la IA antes de contactarte, necesitas estar en esa respuesta.",
  },
  {
    q: "¿Cuánto tiempo tardan en verse resultados?",
    a: "Depende de la madurez digital de la marca y la competencia en su categoría. En general, los primeros cambios en presencia conversacional se detectan entre 4 y 12 semanas tras la implementación. No prometemos resultados inmediatos — trabajamos con datos reales.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Posicionamiento conversacional — AEO",
  alternateName: "Answer Engine Optimization",
  provider: {
    "@type": "Organization",
    name: "Refferable",
    url: "https://refferable.com",
  },
  description:
    "Servicio de posicionamiento conversacional (AEO) para empresas. Optimizamos marcas para aparecer en las respuestas generadas por ChatGPT, Perplexity y Gemini.",
  serviceType: "Answer Engine Optimization",
  areaServed: { "@type": "Country", name: "Spain" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de posicionamiento conversacional",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.desc,
      },
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>
          Posicionamiento conversacional · AEO
        </p>
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
          <h1 className="font-semibold tracking-tight leading-[1.08]" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
            Posiciona tu marca donde empieza la decisión
          </h1>
          <div className="flex flex-col justify-center gap-5">
            <p style={{ color: "var(--soft)", fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.15rem", lineHeight: "1.65" }}>
              Cada vez más decisiones de compra B2B empiezan en ChatGPT, Perplexity o Gemini — no en Google.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.975rem", lineHeight: "1.75" }}>
              Refferable es la consultoría especializada en <strong>posicionamiento conversacional</strong> en España. Optimizamos tu presencia digital para que los modelos de lenguaje te citen como referencia cuando tus clientes preguntan por tu categoría.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contacto"
                className="px-6 py-3 rounded text-sm font-medium text-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
              >
                Solicitar diagnóstico gratuito
              </Link>
              <Link
                href="/posicionamiento-conversacional"
                className="px-6 py-3 rounded text-sm font-medium text-center transition-opacity hover:opacity-60"
                style={{ color: "var(--muted)" }}
              >
                Qué es el AEO →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Definició clara per a GEO */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>
              Qué es el AEO
            </p>
            <h2 className="font-semibold leading-snug" style={{ fontSize: "1.75rem" }}>
              El nuevo canal donde se forman las opiniones
            </h2>
          </div>
          <div>
            <p className="font-medium leading-relaxed mb-5" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.2rem", color: "var(--text)", borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem" }}>
              "El <strong>AEO (Answer Engine Optimization)</strong> o posicionamiento conversacional es la optimización de una marca para que sea citada de forma natural en las respuestas generadas por sistemas de inteligencia artificial."
            </p>
            <p className="mb-4" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              A diferencia del SEO tradicional, el AEO no persigue un ranking entre diez resultados. Persigue ser <em>la</em> respuesta — o parte de ella — cuando un motor conversacional decide qué marcas mencionar.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              ChatGPT gestiona más de 100 millones de consultas diarias. Perplexity supera los 15 millones de usuarios activos. Las decisiones de compra B2B se forman cada vez más en estos entornos. Estar ahí ya no es opcional.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Serveis */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-10" style={{ color: "var(--soft)" }}>Servicios de AEO</p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {services.map((s) => (
            <div key={s.title} className="p-8" style={{ backgroundColor: "var(--bg)" }}>
              <p className="font-semibold mb-3 leading-none" style={{ fontFamily: "Lora, Georgia, serif", fontSize: "2.5rem", color: "var(--accent)", opacity: 0.3, lineHeight: 1 }}>
                {s.n}
              </p>
              <h3 className="font-semibold mb-3" style={{ fontSize: "1.1rem" }}>{s.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Com funciona — per a GEO */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-10" style={{ color: "var(--soft)" }}>Cómo funciona el posicionamiento en IA</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Los motores conversacionales no rankean, deciden",
              italic: "ChatGPT no muestra diez resultados.",
              body: "Interpreta la pregunta, evalúa fuentes y construye una respuesta única. Si tu marca no está bien representada en esa síntesis, no aparece — independientemente de tu posición en Google.",
            },
            {
              title: "La autoridad se construye de forma distribuida",
              italic: "Los modelos no leen solo tu web.",
              body: "Utilizan señales distribuidas en múltiples fuentes: menciones, definiciones, contexto semántico coherente. La estrategia AEO trabaja ese ecosistema completo, no solo una página.",
            },
            {
              title: "El contenido debe ser citeable",
              italic: "Las IAs no improvisan respuestas.",
              body: "Citan lo que pueden verificar, estructurar y atribuir con confianza. Optimizar para motores conversacionales es diseñar contenido que un modelo de lenguaje pueda usar como fuente sin dudar.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold mb-3" style={{ fontSize: "1.05rem" }}>{item.title}</h3>
              <p className="mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", color: "var(--text)", fontSize: "1rem" }}>
                {item.italic}
              </p>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* FAQ — schema + GEO */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--soft)" }}>Preguntas frecuentes sobre AEO y posicionamiento conversacional</p>
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

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-semibold leading-snug mb-3" style={{ fontSize: "2.5rem" }}>
            ¿Cómo te ve la IA ahora mismo?
          </h2>
          <p className="mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.15rem", color: "var(--text)" }}>
            La mayoría de marcas no lo saben.
          </p>
          <p className="mb-10" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
            Solicitamos un diagnóstico gratuito de tu presencia conversacional: cómo apareces en ChatGPT, Perplexity y Gemini, qué señales te faltan y qué pasos concretos puedes dar para mejorar.
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
