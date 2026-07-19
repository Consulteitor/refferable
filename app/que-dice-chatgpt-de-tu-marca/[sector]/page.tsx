import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CheckerForm from "@/components/checker/CheckerForm";
import { getSector, sectors } from "@/lib/geo/sectors";

export function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector: slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return {
    title: sector.title,
    description: sector.description,
    alternates: { canonical: `https://refferable.com/que-dice-chatgpt-de-tu-marca/${sector.slug}` },
    openGraph: {
      title: sector.title,
      description: sector.description,
      url: `https://refferable.com/que-dice-chatgpt-de-tu-marca/${sector.slug}`,
      type: "website",
    },
  };
}

export default async function SectorCheckerPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector: slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: sector.title,
    url: `https://refferable.com/que-dice-chatgpt-de-tu-marca/${sector.slug}`,
    description: sector.description,
    isPartOf: {
      "@type": "WebSite",
      name: "Refferable",
      url: "https://refferable.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Hero + checker */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">
        <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>
          Checker gratuito · {sector.name}
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="font-semibold tracking-tight leading-[1.08] mb-6" style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}>
              {sector.h1}
            </h1>
            <p className="mb-8" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
              {sector.intro}
            </p>

            <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--soft)" }}>
              Preguntas que tu cliente ya hace a la IA
            </p>
            <ul className="flex flex-col gap-2 mb-8">
              {sector.exampleQuestions.map((q) => (
                <li key={q} className="flex gap-3 text-sm" style={{ color: "var(--muted)" }}>
                  <span aria-hidden="true" style={{ color: "var(--accent)" }}>→</span>
                  <span style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic" }}>{q}</span>
                </li>
              ))}
            </ul>

            <p style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.05rem", lineHeight: "1.65", color: "var(--text)", borderLeft: "2px solid var(--accent)", paddingLeft: "1.25rem" }}>
              {sector.stake}
            </p>
          </div>
          <div className="p-8 rounded" style={{ backgroundColor: "var(--surface)" }}>
            <h2 className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--soft)" }}>
              Compruébalo ahora
            </h2>
            <CheckerForm defaultCategory={sector.defaultCategory} />
          </div>
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Enlaces cruzados */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="max-w-2xl">
          <h2 className="font-semibold leading-snug mb-3" style={{ fontSize: "1.75rem" }}>
            ¿Tu sector es otro?
          </h2>
          <p className="mb-8" style={{ color: "var(--muted)", fontSize: "0.975rem", lineHeight: "1.75" }}>
            El checker funciona igual para cualquier categoría donde el cliente compara antes de decidir. Estos son los
            sectores donde más lo usan:
          </p>
          <ul className="flex flex-wrap gap-3 mb-10 list-none p-0">
            {sectors
              .filter((s) => s.slug !== sector.slug)
              .map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/que-dice-chatgpt-de-tu-marca/${s.slug}`}
                    className="inline-block text-sm px-4 py-2 rounded transition-opacity hover:opacity-70"
                    style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                href="/que-dice-chatgpt-de-tu-marca"
                className="inline-block text-sm px-4 py-2 rounded transition-opacity hover:opacity-70"
                style={{ border: "1px solid var(--border)", color: "var(--accent)" }}
              >
                Checker general →
              </Link>
            </li>
          </ul>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>
            Y si el resultado te deja preguntas, el{" "}
            <Link href="/contacto" style={{ color: "var(--accent)" }}>
              Diagnóstico estratégico
            </Link>{" "}
            (desde 490€) las responde con varios motores y un plan priorizado.
          </p>
        </div>
      </section>
    </>
  );
}
