"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/posicionamiento-conversacional", label: "Cómo funciona" },
  { href: "/digamoslo-claro", label: "Digámoslo claro" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight" style={{ fontFamily: "Lora, Georgia, serif", color: "var(--text)" }}>
          Refferable
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors"
              style={{ color: pathname === href ? "var(--accent)" : "var(--muted)" }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="text-sm px-5 py-2 rounded font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
          >
            Diagnóstico gratuito
          </Link>
        </nav>
      </div>
    </header>
  );
}
