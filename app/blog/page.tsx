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
        <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--accent)" }}>Blog</p>
        <h1 className="text-5xl font-semibold tracking-tight leading-[1.1] mb-6">Posicionamiento en IA</h1>
        <p className="text-xl" style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>
          Artículos sobre cómo funciona la búsqueda conversacional y cómo preparar tu marca.
        </p>
      </section>

      <div className="border-t" style={{ borderColor: "var(--border)" }} />

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
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>{post.excerpt}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
