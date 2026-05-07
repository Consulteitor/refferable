import Link from "next/link";

const services = [
  {
    n: "01",
    title: "Diagnóstico conversacional",
    desc: "Analizamos cómo aparece tu marca en ChatGPT, Perplexity y Gemini cuando alguien pregunta por tu categoría, tus competidores, tus casos de uso y los problemas que resuelves. Detectamos si la IA te cita, cómo te describe, frente a quién te compara y en qué consultas quedas fuera.",
  },
  {
    n: "02",
    title: "Análisis de brechas y visibilidad",
    desc: "Identificamos qué señales faltan para que tu marca sea entendida como una referencia: contenido débil, mensajes contradictorios, falta de menciones externas, poca claridad semántica o ausencia en fuentes relevantes. No entregamos una lista genérica. Entregamos una lectura clara de por qué la IA no te está dando el lugar que deberías ocupar.",
  },
  {
    n: "03",
    title: "Estrategia de contenido citeable",
    desc: "Rediseñamos páginas, definiciones, FAQs, casos de uso y mensajes clave para que los modelos de lenguaje puedan interpretar tu marca sin ambigüedad. No escribimos \"contenido para robots\". Creamos contenido útil, estructurado y atribuible que una IA puede usar como fuente fiable.",
  },
  {
    n: "04",
    title: "Señales de autoridad distribuida",
    desc: "Trabajamos la presencia de tu marca más allá de tu propia web: menciones, comparativas, perfiles, descripciones externas, contexto sectorial y fuentes que refuerzan tu autoridad. Los modelos no evalúan solo lo que dices de ti. Evalúan también lo que el ecosistema dice de ti.",
  },
  {
    n: "05",
    title: "Seguimiento y evolución",
    desc: "Medimos cómo cambia tu presencia conversacional: en qué preguntas apareces, con qué contexto, junto a qué competidores y con qué frecuencia. El AEO no es una acción puntual. Es un nuevo canal de visibilidad que hay que gestionar.",
  },
];

const problems = [
  {
    n: "01",
    title: "No apareces",
    desc: "La IA habla de tu mercado, pero tu marca no existe en la respuesta.",
  },
  {
    n: "02",
    title: "Apareces mal explicado",
    desc: "La IA te menciona, pero con una descripción pobre, incompleta o equivocada.",
  },
  {
    n: "03",
    title: "Aparecen tus competidores antes que tú",
    desc: "La IA entiende mejor a otros jugadores de tu categoría y los presenta como referencias.",
  },
];

const howItWorks = [
  {
    title: "No hay diez resultados",
    italic: "ChatGPT no muestra una lista para que el usuario elija.",
    body: "Construye una respuesta. Si tu marca no forma parte de esa síntesis, desapareces del momento de decisión.",
  },
  {
    title: "No basta con tener una buena web",
    italic: "Los modelos no leen solo tu página corporativa.",
    body: "Cruzan señales distribuidas: menciones, directorios, medios, comparativas, contenido propio, contenido de terceros y contexto semántico acumulado.",
  },
  {
    title: "La claridad gana",
    italic: "Si la IA no entiende qué haces, para quién lo haces y por qué eres relevante, no te va a recomendar.",
    body: "El posicionamiento conversacional empieza por reducir ambigüedad. Una marca confusa es difícil de citar.",
  },
  {
    title: "La autoridad debe poder verificarse",
    italic: "Las IAs necesitan confianza para mencionarte.",
    body: "Cuanto más clara, coherente y distribuida es tu huella digital, más fácil es que un modelo te considere una referencia en tu categoría.",
  },
];

const targetProfiles = [
  {
    title: "SaaS y tecnología B2B",
    desc: "Ciclos de compra largos, múltiples decisores, alta fase de investigación. El comprador llega ya con una opinión formada.",
  },
  {
    title: "Servicios profesionales y consultoría",
    desc: "La confianza es el activo principal. Si la IA no te menciona cuando alguien busca a quién contratar, no llegas a la conversación.",
  },
  {
    title: "Cualquier marca donde el cliente compara antes de decidir",
    desc: "Formación, ecommerce especializado, salud, finanzas, legal. Si tus clientes investigan antes de contactarte, la IA ya forma parte de tu funnel.",
  },
];

const faqs = [
  {
    q: "¿Qué es el posicionamiento conversacional?",
    a: "El posicionamiento conversacional, también llamado AEO o Answer Engine Optimization, es la práctica de optimizar la presencia digital de una marca para que modelos como ChatGPT, Perplexity o Gemini puedan citarla como referencia cuando responden preguntas sobre una categoría, problema o solución.",
  },
  {
    q: "¿En qué se diferencia del SEO tradicional?",
    a: "El SEO busca aparecer en rankings de buscadores. El AEO busca aparecer dentro de respuestas generadas por IA. En SEO compites por clics. En AEO compites por ser parte de la recomendación. No se sustituyen: son canales distintos con señales y estrategias distintas.",
  },
  {
    q: "¿Cómo decide una IA qué marcas mencionar?",
    a: "Los modelos sintetizan señales de múltiples fuentes: contenido propio, menciones externas, coherencia semántica, autoridad percibida, contexto de categoría y claridad de posicionamiento. No se fijan solo en tu web.",
  },
  {
    q: "¿Se puede garantizar aparecer en ChatGPT?",
    a: "No. Y quien lo prometa está vendiendo humo. Lo que sí se puede hacer es mejorar sistemáticamente las señales que aumentan la probabilidad de que una IA entienda, cite y recomiende tu marca.",
  },
  {
    q: "¿Por qué debería importarle esto a un CEO?",
    a: "Porque tus clientes pueden estar formando opinión sobre tu categoría antes de entrar en tu web, antes de hablar con ventas y antes de ver tus campañas. Si la IA recomienda a otros y no a ti, pierdes consideración sin verlo en Analytics.",
  },
  {
    q: "¿Esto puede perjudicar mi SEO?",
    a: "No. Un buen trabajo de AEO suele reforzar el SEO porque exige contenido más claro, mejor estructurado y más útil. La diferencia está en el objetivo: no solo rankear, sino ser citado.",
  },
  {
    q: "¿Cuándo tiene sentido empezar?",
    a: "Cuando tu categoría ya aparece en respuestas de IA o cuando tus clientes usan IA para comparar soluciones. Esperar a que el canal esté maduro puede significar llegar tarde a una capa de decisión que se está formando ahora.",
  },
  {
    q: "¿Cuánto tardan en verse resultados?",
    a: "Depende de la madurez digital de la marca, la competencia y las señales existentes. Normalmente los primeros cambios detectables pueden observarse entre 4 y 12 semanas tras la implementación. No es inmediato. Es construcción de autoridad.",
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
            Haz que la IA entienda, cite y recomiende tu marca
          </h1>
          <div className="flex flex-col justify-center gap-5">
            <p style={{ color: "var(--soft)", fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.15rem", lineHeight: "1.65" }}>
              Tus clientes ya no investigan solo en Google. También preguntan a ChatGPT, Perplexity y Gemini antes de decidir.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.975rem", lineHeight: "1.75" }}>
              Si cuando preguntan por tu categoría la IA menciona a tus competidores y no a ti, tienes un problema nuevo. Refferable ayuda a marcas B2B a construir presencia en motores conversacionales. No compramos menciones. No prometemos magia. Trabajamos las señales que hacen que una IA pueda citarte con confianza.
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
                Entender el AEO →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Por qué importa */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>
              Por qué importa
            </p>
            <h2 className="font-semibold leading-snug" style={{ fontSize: "1.75rem" }}>
              La decisión empieza antes de que visiten tu web
            </h2>
          </div>
          <div>
            <p className="mb-5" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              Durante años, el juego era aparecer en Google. El usuario buscaba, comparaba resultados, abría varias pestañas y decidía.
            </p>
            <p className="mb-5" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              Ese comportamiento está cambiando. Ahora muchos compradores empiezan preguntando directamente a una IA:
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {[
                '"mejores herramientas para…"',
                '"alternativas a…"',
                '"qué empresa ofrece…"',
                '"proveedores recomendados de…"',
                '"qué solución encaja mejor para…"',
              ].map((q) => (
                <li key={q} className="flex gap-3 text-sm" style={{ color: "var(--muted)" }}>
                  <span style={{ color: "var(--accent)" }}>→</span>
                  <span style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic" }}>{q}</span>
                </li>
              ))}
            </ul>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              Y ahí no hay diez enlaces iguales esperando un clic. Hay una respuesta. Una síntesis. Una recomendación. Si tu marca no aparece en esa respuesta, no pierdes una posición. <strong>Pierdes la conversación.</strong>
            </p>
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Qué es el AEO */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>
              Qué es el AEO
            </p>
            <h2 className="font-semibold leading-snug" style={{ fontSize: "1.75rem" }}>
              SEO te ayuda a aparecer en buscadores. AEO te ayuda a aparecer en respuestas.
            </h2>
          </div>
          <div>
            <p className="font-medium leading-relaxed mb-5" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.2rem", color: "var(--text)", borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem" }}>
              "El <strong>AEO — Answer Engine Optimization</strong> es la optimización de la presencia digital de una marca para que los modelos de lenguaje puedan entenderla, contextualizarla y citarla como referencia cuando generan respuestas."
            </p>
            <p className="mb-4" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              El SEO tradicional optimiza para rankings. El AEO optimiza para ser parte de la respuesta. No se trata solo de poner más contenido en tu web. Se trata de construir un contexto digital claro, coherente y verificable alrededor de tu marca.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              Los modelos conversacionales sintetizan señales: tu web, menciones externas, definiciones, comparativas, contenido de terceros, estructura semántica, autoridad y consistencia. Si esas señales son débiles o contradictorias, la IA no tendrá motivos para mencionarte.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* El problema que resolvemos */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--soft)" }}>El problema que resolvemos</p>
        <h2 className="font-semibold leading-snug mb-6" style={{ fontSize: "1.75rem", maxWidth: "600px" }}>
          La mayoría de empresas no sabe cómo las ve la IA
        </h2>
        <p className="mb-10" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75", maxWidth: "600px" }}>
          Tu equipo puede estar invirtiendo en SEO, paid media, contenidos, marca y ventas. Pero si alguien pregunta a ChatGPT o Perplexity por tu categoría, puede pasar una de estas tres cosas:
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {problems.map((p) => (
            <div key={p.n} className="p-8" style={{ backgroundColor: "var(--bg)" }}>
              <p className="font-semibold mb-4 leading-none" style={{ fontFamily: "Lora, Georgia, serif", fontSize: "2.5rem", color: "var(--accent)", opacity: 0.3, lineHeight: 1 }}>
                {p.n}
              </p>
              <h3 className="font-semibold mb-3" style={{ fontSize: "1.05rem" }}>{p.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75", maxWidth: "600px" }}>
          En los tres casos, el problema no es solo técnico. Es comercial. Porque cada respuesta donde no apareces puede ser una decisión que empieza sin ti.
        </p>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Servicios */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>Servicios de AEO</p>
        <h2 className="font-semibold leading-snug mb-10" style={{ fontSize: "1.75rem" }}>Qué hacemos</h2>
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

      {/* Cómo funciona */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>Cómo funciona el posicionamiento en IA</p>
        <h2 className="font-semibold leading-snug mb-10" style={{ fontSize: "1.75rem" }}>Los motores conversacionales no rankean. Deciden.</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {howItWorks.map((item) => (
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

      {/* Para quién es */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>Para quién es</p>
        <h2 className="font-semibold leading-snug mb-6" style={{ fontSize: "1.75rem", maxWidth: "560px" }}>
          Tiene sentido si tus clientes investigan antes de decidir
        </h2>
        <p className="mb-10" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75", maxWidth: "600px" }}>
          Refferable está pensado para empresas donde la decisión de compra no es impulsiva.
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {targetProfiles.map((p) => (
            <div key={p.title} className="p-8" style={{ backgroundColor: "var(--bg)" }}>
              <h3 className="font-semibold mb-3" style={{ fontSize: "1.05rem" }}>{p.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* FAQ */}
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
            ¿Sabes qué dice la IA de tu empresa?
          </h2>
          <p className="mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.15rem", color: "var(--text)" }}>
            La mayoría de marcas no lo sabe. Y algunas preferirían no verlo.
          </p>
          <p className="mb-10" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
            Hacemos un diagnóstico inicial de tu presencia conversacional: cómo apareces en ChatGPT, Perplexity y Gemini, qué competidores ocupan espacio, qué señales te faltan y qué pasos concretos deberías priorizar.
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
