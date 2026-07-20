"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/posicionamiento-conversacional", label: "Cómo funciona" },
  { href: "/digamoslo-claro", label: "Digámoslo claro" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

const CHECKER_HREF = "/que-dice-chatgpt-de-tu-marca";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(247, 244, 238, 0.82)",
          backdropFilter: "blur(14px) saturate(1.4)",
          WebkitBackdropFilter: "blur(14px) saturate(1.4)",
          borderBottom: "1px solid rgba(227, 223, 215, 0.7)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-lg tracking-tight"
            style={{ fontFamily: "Lora, Georgia, serif", color: "var(--text)" }}
            onClick={() => setOpen(false)}
          >
            Refferable
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: pathname === href ? "var(--accent)" : "var(--muted)" }}
              >
                {label}
              </Link>
            ))}
            <Link href={CHECKER_HREF} className="btn-dark text-sm px-5 py-2 font-medium">
              ¿Qué dice la IA de ti?
            </Link>
          </nav>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className="block w-5 h-[1.5px] transition-all duration-200"
              style={{
                backgroundColor: "var(--text)",
                transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-200"
              style={{
                backgroundColor: "var(--text)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-200"
              style={{
                backgroundColor: "var(--text)",
                transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="md:hidden border-t"
            style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
          >
            <nav className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-1">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="py-3 text-base border-b transition-opacity hover:opacity-70"
                  style={{
                    color: pathname === href ? "var(--accent)" : "var(--text)",
                    borderColor: "var(--border)",
                  }}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href={CHECKER_HREF}
                className="btn-dark mt-4 py-3 text-sm font-medium text-center"
                onClick={() => setOpen(false)}
              >
                ¿Qué dice la IA de tu marca?
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
