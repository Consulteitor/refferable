import fs from "fs";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const [key, ...rest] = line.split(":");
    if (key) meta[key.trim()] = rest.join(":").trim();
  }
  return { meta, content: match[2].trim() };
}

export function getAllPosts(): Omit<Post, "content">[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { meta, content } = parseFrontmatter(raw);
      const excerpt = content.replace(/#{1,6} .+\n?/g, "").trim().split("\n")[0].slice(0, 160);
      return {
        slug,
        title: meta.title ?? slug,
        date: meta.date ?? "",
        category: meta.category ?? "",
        excerpt,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { meta, content } = parseFrontmatter(raw);
  const excerpt = content.replace(/#{1,6} .+\n?/g, "").trim().split("\n")[0].slice(0, 160);
  return {
    slug,
    title: meta.title ?? slug,
    date: meta.date ?? "",
    category: meta.category ?? "",
    excerpt,
    content,
  };
}
