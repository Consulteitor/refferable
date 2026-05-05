"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const pathname = usePathname();
  if (pathname === "/contacto") return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 px-4 py-3 z-40"
      style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <Link
        href="/contacto"
        className="block w-full py-3 rounded text-sm font-medium text-center transition-opacity hover:opacity-80"
        style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
      >
        Solicitar diagnóstico gratuito
      </Link>
    </div>
  );
}
