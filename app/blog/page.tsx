import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Posicionamiento en IA",
  description:
    "Ideas, análisis y guías sobre cómo las marcas compiten por aparecer en respuestas de ChatGPT, Perplexity, Gemini y otros motores conversacionales.",
  alternates: { canonical: "https://refferable.com/blog" },
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--accent)" }}>Blog</p>
        <h1 className="text-5xl font-semibold tracking-tight leading-[1.1] mb-6">Posicionamiento en IA</h1>
        <p className="text-xl" style={{ color: "var(--muted)", maxWidth: "600px", lineHeight: "1.7" }}>
          Ideas, análisis y guías sobre cómo cambia la búsqueda, la recomendación y la decisión de compra. No hablamos de IA como moda. Hablamos de cómo preparar tu marca para donde empieza la decisión.
        </p>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* Posts */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col divide-y max-w-3xl" style={{ borderColor: "var(--border)" }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="py-10 block group"
            >
              <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>{post.category}</p>
              <h2 className="text-xl font-semibold mb-3 group-hover:opacity-70 transition-opacity">{post.title}</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{post.excerpt}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-semibold leading-snug mb-3" style={{ fontSize: "2rem" }}>
            ¿Cómo aparece tu marca mientras lees esto?
          </h2>
          <p className="mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.1rem", color: "var(--text)" }}>
            Tus clientes ya están preguntando a la IA por tu categoría.
          </p>
          <p className="mb-10" style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.75" }}>
            Hacemos un diagnóstico gratuito de tu presencia conversacional en ChatGPT, Perplexity y Gemini. Sin compromiso. Con datos reales.
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
