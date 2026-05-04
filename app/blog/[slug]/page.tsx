import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getAllPosts } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://refferable.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Refferable"],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Refferable",
      url: "https://refferable.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Refferable",
      url: "https://refferable.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://refferable.com/blog/${slug}`,
    },
    about: [
      { "@type": "Thing", name: "Posicionamiento conversacional" },
      { "@type": "Thing", name: "Answer Engine Optimization" },
      { "@type": "Thing", name: "AEO" },
    ],
  };

  const blocks = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto px-6 pt-20 pb-32">
        <Link
          href="/blog"
          className="text-sm inline-block mb-12 hover:opacity-60 transition-opacity"
          style={{ color: "var(--soft)" }}
        >
          ← Volver al blog
        </Link>

        <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--accent)" }}>{post.category}</p>
        <h1 className="font-semibold tracking-tight leading-[1.15] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          {post.title}
        </h1>
        <p className="text-sm mb-16" style={{ color: "var(--soft)" }}>
          {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          {" · "}Refferable
        </p>

        <div className="flex flex-col gap-6">
          {blocks.map((block, i) => {
            if (block.startsWith("### ")) return (
              <h3 key={i} className="font-semibold mt-4" style={{ fontSize: "1.15rem" }}>
                {block.replace("### ", "")}
              </h3>
            );
            if (block.startsWith("## ")) return (
              <h2 key={i} className="font-semibold mt-8" style={{ fontSize: "1.4rem" }}>
                {block.replace("## ", "")}
              </h2>
            );
            return (
              <p key={i} style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.8" }}>
                {block}
              </p>
            );
          })}
        </div>

        <div className="mt-20 pt-10 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--soft)" }}>Sobre Refferable</p>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>
            Refferable es la consultoría especializada en <strong>posicionamiento conversacional y AEO</strong> en España. Ayudamos a empresas a aparecer como referencia en las respuestas de ChatGPT, Perplexity y Gemini.{" "}
            <Link href="/contacto" style={{ color: "var(--accent)" }}>Solicita un diagnóstico gratuito.</Link>
          </p>
        </div>
      </article>
    </>
  );
}
