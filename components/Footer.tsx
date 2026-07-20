import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-32" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-xs">
          <p className="font-semibold mb-3" style={{ fontFamily: "Lora, Georgia, serif" }}>Refferable</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            Posicionamiento en motores conversacionales. Ayudamos a marcas a aparecer en las respuestas de ChatGPT, Perplexity y Gemini.
          </p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Servicios</p>
            <Link href="/que-dice-chatgpt-de-tu-marca" className="link-underline text-sm" style={{ color: "var(--muted)" }}>Checker gratuito</Link>
            <Link href="/posicionamiento-conversacional" className="link-underline text-sm" style={{ color: "var(--muted)" }}>Cómo funciona</Link>
            <Link href="/digamoslo-claro" className="link-underline text-sm" style={{ color: "var(--muted)" }}>Digámoslo claro</Link>
            <Link href="/blog" className="link-underline text-sm" style={{ color: "var(--muted)" }}>Blog</Link>
            <Link href="/contacto" className="link-underline text-sm" style={{ color: "var(--muted)" }}>Contacto</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>Legal</p>
            <Link href="/aviso-legal" className="link-underline text-sm" style={{ color: "var(--muted)" }}>Aviso Legal</Link>
            <Link href="/privacidad" className="link-underline text-sm" style={{ color: "var(--muted)" }}>Privacidad</Link>
            <Link href="/cookies" className="link-underline text-sm" style={{ color: "var(--muted)" }}>Cookies</Link>
          </div>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
        © {new Date().getFullYear()} Refferable
      </div>
    </footer>
  );
}
