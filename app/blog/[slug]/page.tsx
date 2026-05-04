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
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <Link href="/blog" className="text-sm mb-8 inline-block hover:opacity-80" style={{ color: "var(--muted)" }}>
          ← Volver al blog
        </Link>
        <p className="text-sm font-medium mb-4" style={{ color: "var(--accent)" }}>{post.category}</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
        <p className="text-sm mb-12" style={{ color: "var(--muted)" }}>
          {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose-content flex flex-col gap-5">
          {paragraphs.map((block, i) => {
            if (block.startsWith("### ")) {
              return <h3 key={i} className="text-lg font-semibold mt-4">{block.replace("### ", "")}</h3>;
            }
            if (block.startsWith("## ")) {
              return <h2 key={i} className="text-xl font-bold mt-6">{block.replace("## ", "")}</h2>;
            }
            return (
              <p key={i} className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                {block}
              </p>
            );
          })}
        </div>
      </article>
    </>
  );
}
