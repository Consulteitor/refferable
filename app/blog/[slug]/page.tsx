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
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const blocks = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-32">
        <Link
          href="/blog"
          className="text-sm inline-block mb-12 hover:opacity-60 transition-opacity"
          style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}
        >
          ← Volver al blog
        </Link>

        <p className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: "var(--accent)" }}>{post.category}</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] mb-6">{post.title}</h1>
        <p className="text-sm mb-16" style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>
          {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="flex flex-col gap-6">
          {blocks.map((block, i) => {
            if (block.startsWith("### ")) return (
              <h3 key={i} className="text-xl font-semibold mt-4">{block.replace("### ", "")}</h3>
            );
            if (block.startsWith("## ")) return (
              <h2 key={i} className="text-2xl font-semibold mt-6">{block.replace("## ", "")}</h2>
            );
            return (
              <p key={i} className="text-base leading-relaxed" style={{ color: "var(--muted)", fontFamily: "Inter, sans-serif" }}>
                {block}
              </p>
            );
          })}
        </div>
      </article>
    </>
  );
}
