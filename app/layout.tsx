import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Refferable — Posicionamiento en motores conversacionales",
    template: "%s | Refferable",
  },
  description:
    "Ayudamos a empresas a aparecer como referencia en las respuestas de ChatGPT, Perplexity y otros buscadores conversacionales.",
  metadataBase: new URL("https://refferable.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
