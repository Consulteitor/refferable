import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-semibold mb-2">Refferable</p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Posicionamiento en motores conversacionales.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: "var(--muted)" }}>
            Servicios
          </p>
          <Link href="/posicionamiento-conversacional" className="text-sm hover:opacity-80" style={{ color: "var(--muted)" }}>Cómo funciona</Link>
          <Link href="/digamoslo-claro" className="text-sm hover:opacity-80" style={{ color: "var(--muted)" }}>Digámoslo claro</Link>
          <Link href="/blog" className="text-sm hover:opacity-80" style={{ color: "var(--muted)" }}>Blog</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: "var(--muted)" }}>Legal</p>
          <Link href="/aviso-legal" className="text-sm hover:opacity-80" style={{ color: "var(--muted)" }}>Aviso Legal</Link>
          <Link href="/privacidad" className="text-sm hover:opacity-80" style={{ color: "var(--muted)" }}>Política de privacidad</Link>
          <Link href="/cookies" className="text-sm hover:opacity-80" style={{ color: "var(--muted)" }}>Política de cookies</Link>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
        © {new Date().getFullYear()} Refferable
      </div>
    </footer>
  );
}
