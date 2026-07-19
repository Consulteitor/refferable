import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { sectors } from "@/lib/geo/sectors";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const base = "https://refferable.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/que-dice-chatgpt-de-tu-marca`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/posicionamiento-conversacional`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/digamoslo-claro`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const sectorRoutes: MetadataRoute.Sitemap = sectors.map((s) => ({
    url: `${base}/que-dice-chatgpt-de-tu-marca/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...sectorRoutes, ...blogRoutes];
}
