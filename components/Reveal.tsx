"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Revela las secciones al entrar en el viewport (clase .is-visible).
 * Solo se arma si hay JS y el usuario no pide reduced-motion: sin ninguna de
 * las dos cosas, el CSS no oculta nada y la página es 100% estática.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll("main > section, main > article");
    if (elements.length === 0) return;

    document.documentElement.classList.add("reveal-armed");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-armed");
    };
  }, [pathname]);

  return null;
}
