import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Blog posts: WordPress date URLs → new /blog/ URLs (301 permanent)
      {
        source: "/2025/12/15/que-es-posicionamiento-conversacional",
        destination: "/blog/que-es-posicionamiento-conversacional",
        permanent: true,
      },
      {
        source: "/2025/12/15/que-es-posicionamiento-conversacional/",
        destination: "/blog/que-es-posicionamiento-conversacional",
        permanent: true,
      },
      {
        source: "/2025/12/15/como-decide-la-ia-que-marcas-mencionar",
        destination: "/blog/como-decide-la-ia-que-marcas-mencionar",
        permanent: true,
      },
      {
        source: "/2025/12/15/como-decide-la-ia-que-marcas-mencionar/",
        destination: "/blog/como-decide-la-ia-que-marcas-mencionar",
        permanent: true,
      },
      {
        source: "/2025/12/15/seo-vs-posicionamiento-en-ia",
        destination: "/blog/seo-vs-posicionamiento-en-ia",
        permanent: true,
      },
      {
        source: "/2025/12/15/seo-vs-posicionamiento-en-ia/",
        destination: "/blog/seo-vs-posicionamiento-en-ia",
        permanent: true,
      },
      // WordPress category/tag pages → blog
      {
        source: "/category/:slug",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:slug",
        destination: "/blog",
        permanent: true,
      },
      // WordPress admin/feeds → home
      {
        source: "/wp-admin",
        destination: "/",
        permanent: false,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
