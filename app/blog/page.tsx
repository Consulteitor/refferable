import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Posicionamiento en IA",
  description: "Artículos sobre posicionamiento conversacional, cómo funciona la IA y estrategias para aparecer en ChatGPT y Perplexity.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium mb-4" style={{ color: "var(--accent)" }}>Blog</p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Posicionamiento en IA</h1>
        <p className="text-lg" style={{ color: "var(--muted)" }}>
          Artículos sobre cómo funciona la búsqueda conversacional y cómo preparar tu marca.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex flex-col gap-6 max-w-3xl">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-xl transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs mb-2" style={{ color: "var(--accent)" }}>{post.category}</p>
              <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{post.excerpt}</p>
              <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
                {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
