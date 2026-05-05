import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: {
    default: "Refferable — Consultoría de Posicionamiento Conversacional y AEO",
    template: "%s | Refferable",
  },
  description:
    "Refferable es la consultoría especializada en posicionamiento conversacional en España. Optimizamos marcas para aparecer en respuestas de ChatGPT, Perplexity y Gemini.",
  metadataBase: new URL("https://refferable.com"),
  keywords: [
    "posicionamiento conversacional",
    "AEO",
    "Answer Engine Optimization",
    "GEO",
    "Generative Engine Optimization",
    "SEO para ChatGPT",
    "aparecer en ChatGPT",
    "posicionamiento en Perplexity",
    "optimización IA generativa",
    "consultora posicionamiento IA",
  ],
  authors: [{ name: "Refferable" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://refferable.com",
    siteName: "Refferable",
    title: "Refferable — Consultoría de Posicionamiento Conversacional y AEO",
    description:
      "Optimizamos marcas para aparecer en las respuestas de ChatGPT, Perplexity y Gemini cuando sus clientes preguntan por su categoría.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refferable — Posicionamiento Conversacional y AEO",
    description:
      "Consultoría especializada en AEO (Answer Engine Optimization). Aparece en ChatGPT, Perplexity y Gemini.",
  },
  alternates: {
    canonical: "https://refferable.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Refferable",
  url: "https://refferable.com",
  logo: "https://refferable.com/logo.png",
  description:
    "Consultoría especializada en posicionamiento conversacional (AEO — Answer Engine Optimization) en España. Ayudamos a empresas a aparecer como referencia en las respuestas de ChatGPT, Perplexity y Gemini.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hola@refferable.com",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
  },
  areaServed: {
    "@type": "Country",
    name: "Spain",
  },
  knowsAbout: [
    "Posicionamiento conversacional",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "SEO para inteligencia artificial",
    "Optimización para ChatGPT",
    "Optimización para Perplexity",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Refferable",
  url: "https://refferable.com",
  description:
    "Consultoría de posicionamiento conversacional. Optimizamos marcas para aparecer en respuestas generadas por IA.",
  inLanguage: "es",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
