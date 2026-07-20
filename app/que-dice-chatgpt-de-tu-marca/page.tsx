import type { Metadata } from "next";
import Link from "next/link";
import CheckerForm from "@/components/checker/CheckerForm";
import { sectors } from "@/lib/geo/sectors";

export const metadata: Metadata = {
  title: "¿Qué dice ChatGPT de tu marca? Compruébalo gratis",
  description:
    "Comprueba en segundos si ChatGPT, Perplexity y otros motores de IA mencionan tu marca cuando tus clientes preguntan por tu categoría. Checker gratuito, sin registro para el primer resultado.",
  alternates: { canonical: "https://refferable.com/que-dice-chatgpt-de-tu-marca" },
  openGraph: {
    title: "¿Qué dice ChatGPT de tu marca? Compruébalo gratis",
    description:
      "Lanzamos preguntas reales de comprador a un motor de IA con búsqueda activa y te decimos si tu marca aparece, en qué posición y con qué tono.",
    url: "https://refferable.com/que-dice-chatgpt-de-tu-marca",
    type: "website",
  },
};

const faqs = [
  {
    q: "¿Qué comprueba exactamente este checker?",
    a: "Lanza entre 5 y 8 preguntas reales de comprador — las que haría alguien investigando tu categoría — a un motor de IA con búsqueda activa, y analiza si tu marca aparece en las respuestas, en qué posición respecto a tus competidores y con qué tono. Las dos primeras preguntas se ejecutan en directo y ves el resultado sin registrarte.",
  },
  {
    q: "¿Es gratis de verdad?",
    a: "Sí, entero. Las dos primeras consultas no piden ni email. Para el informe completo, con la nota de 0 a 100 y las recomendaciones, pedimos un email para enviártelo. No hay versión de pago del checker ni la habrá: lo que vendemos es la consultoría, no el informe.",
  },
  {
    q: "¿Por qué usa búsqueda activa y no pregunta directamente al modelo?",
    a: "Porque son cosas distintas. Un modelo sin buscar responde con lo que memorizó en su entrenamiento, que solo cambia cuando lo reentrenan y no se puede influir con contenido nuevo. Con búsqueda activa, la respuesta refleja las señales reales que hay hoy publicadas sobre tu marca. Eso es lo que se puede medir, y lo único que se puede trabajar.",
  },
  {
    q: "¿El resultado es el mismo que vería un cliente en ChatGPT?",
    a: "Es una aproximación honesta, no una réplica exacta. Cada motor responde distinto y la misma pregunta puede variar entre sesiones. Lo que sí es estable es el patrón: si en preguntas típicas de tu categoría nunca apareces, o siempre aparecen antes tus competidores, ese patrón se repite en todos los motores.",
  },
  {
    q: "¿Qué hago si mi nota es baja?",
    a: "Primero, no entrar en pánico: es la situación de la mayoría de marcas, porque casi nadie ha trabajado todavía sus señales para IA. El informe incluye recomendaciones concretas por las que empezar. Si quieres un plan completo, el Diagnóstico estratégico (desde 490€) cruza varios motores y termina en acciones priorizadas.",
  },
  {
    q: "¿Guardáis mis datos o los de mi marca?",
    a: "Guardamos el email que nos das para enviarte el informe y las respuestas de las consultas durante unas horas, para no repetir llamadas idénticas. No vendemos datos ni hacemos listas para terceros. Si nos escribes para borrarlo, se borra.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Checker GEO de Refferable — ¿Qué dice ChatGPT de tu marca?",
  url: "https://refferable.com/que-dice-chatgpt-de-tu-marca",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  provider: { "@type": "Organization", name: "Refferable", url: "https://refferable.com" },
  description:
    "Herramienta gratuita que comprueba si los motores de IA con búsqueda activa mencionan una marca cuando los compradores preguntan por su categoría.",
};

const steps = [
  {
    n: "01",
    title: "Preguntas reales de comprador",
    desc: "Generamos entre 5 y 8 preguntas como las que hace tu cliente antes de decidir: mejores opciones de tu categoría, alternativas, opiniones sobre tu marca y comparaciones directas.",
  },
  {
    n: "02",
    title: "Un motor de IA con búsqueda activa",
    desc: "Cada pregunta se lanza tal cual a un motor que busca en la web antes de responder. Sin trucos ni prompts que te favorezcan: la misma respuesta que recibiría cualquiera.",
  },
  {
    n: "03",
    title: "Informe con nota y recomendaciones",
    desc: "Analizamos si apareces, en qué posición frente a tus competidores y con qué tono. El informe completo incluye una nota de 0 a 100 y por dónde empezar a mejorarla.",
  },
];

export default function CheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      {/* Hero + checker */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>
          Checker gratuito · Resultado en directo
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="font-semibold tracking-tight leading-[1.08] mb-6" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}>
              ¿Qué dice ChatGPT de tu marca?
            </h1>
            <p className="mb-5" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.15rem", lineHeight: "1.65", color: "var(--text)" }}>
              Tus clientes ya se lo están preguntando. Tú todavía no sabes la respuesta.
            </p>
            <p className="mb-8" style={{ color: "var(--muted)", fontSize: "0.975rem", lineHeight: "1.75" }}>
              Escribe tu marca y tu categoría. Lanzamos en directo preguntas reales de comprador a un motor de IA con
              búsqueda activa y te enseñamos si apareces, en qué posición y con qué tono. Sin registro para el primer
              resultado. Gratis, siempre.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "2 consultas en directo, resultado al momento",
                "Informe completo con nota de 0 a 100, también gratis",
                "Comparativa con hasta 2 competidores",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  <span className="shrink-0 mt-0.5" aria-hidden="true" style={{ color: "var(--accent)" }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel p-8">
            <h2 className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--soft)" }}>
              Compruébalo ahora
            </h2>
            <CheckerForm />
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Cómo funciona */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>Cómo funciona</p>
        <h2 className="font-semibold leading-snug mb-10" style={{ fontSize: "1.75rem" }}>
          Medimos lo que la IA responde, no lo que tú publicas
        </h2>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {steps.map((s) => (
            <div key={s.n} className="p-8 grid-cell">
              <p aria-hidden="true" className="cell-number font-semibold mb-4">
                {s.n}
              </p>
              <h3 className="font-semibold mb-3" style={{ fontSize: "1.05rem" }}>{s.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* La distinción técnica que nos importa */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>
              Por qué es distinto
            </p>
            <h2 className="font-semibold leading-snug" style={{ fontSize: "1.75rem" }}>
              Búsqueda activa, no memoria del modelo
            </h2>
          </div>
          <div>
            <p className="mb-5" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              Hay dos maneras de preguntarle a una IA por tu marca, y solo una sirve para algo. La primera es consultar
              el modelo &quot;en frío&quot;: responde con lo que memorizó durante su entrenamiento, una foto congelada que no
              puedes cambiar publiques lo que publiques.
            </p>
            <p className="mb-5" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              La segunda es lo que hace este checker: usar un motor que busca en la web en el momento de responder,
              igual que hacen Perplexity siempre y ChatGPT o Gemini cuando activan su búsqueda. Ahí la respuesta
              depende de las señales que existen hoy sobre tu marca — contenido, menciones, comparativas, autoridad.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              Esa diferencia importa porque las señales sí se pueden trabajar. Es literalmente a lo que nos dedicamos.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Por sector */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--soft)" }}>Por sector</p>
        <h2 className="font-semibold leading-snug mb-10" style={{ fontSize: "1.75rem" }}>
          Qué se juega tu sector en las respuestas de la IA
        </h2>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {sectors.map((s) => (
            <Link
              key={s.slug}
              href={`/que-dice-chatgpt-de-tu-marca/${s.slug}`}
              className="p-8 block group grid-cell"
            >
              <h3 className="font-semibold mb-3 group-hover:opacity-70 transition-opacity" style={{ fontSize: "1.05rem" }}>
                {s.name}
              </h3>
              <p className="mb-4" style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: "1.7" }}>{s.stake}</p>
              <span className="text-sm" style={{ color: "var(--accent)" }}>Comprobar mi marca →</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--soft)" }}>
          Preguntas frecuentes sobre el checker
        </p>
        <div className="flex flex-col divide-y max-w-3xl" style={{ borderColor: "var(--border)" }}>
          {faqs.map((f) => (
            <div key={f.q} className="py-7">
              <h3 className="font-medium mb-3" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.15rem" }}>
                {f.q}
              </h3>
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
            El checker es la foto. El plan es otra cosa.
          </h2>
          <p className="mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.15rem", color: "var(--text)" }}>
            Saber que no apareces es gratis. Saber qué hacer para aparecer es trabajo.
          </p>
          <p className="mb-10" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
            Si el resultado del checker te deja preguntas, el Diagnóstico estratégico las responde: análisis con varios
            motores, más preguntas de comprador, lectura manual de tus señales y un plan de acción priorizado. Desde
            490€, entrega en pocos días. Y si tu caso no lo justifica, te lo decimos antes de cobrarte nada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacto"
              className="btn-dark px-7 py-3 text-sm font-medium text-center"
            >
              Pedir el Diagnóstico estratégico
            </Link>
            <Link
              href="/posicionamiento-conversacional"
              className="link-quiet px-7 py-3 text-sm font-medium text-center"
            >
              Entender el AEO <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
