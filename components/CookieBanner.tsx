"use client";

import { useReducer, useSyncExternalStore } from "react";
import Script from "next/script";
import Link from "next/link";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "refferable_cookie_consent";

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export default function CookieBanner() {
  // localStorage como store externo: en servidor "ssr" (no se renderiza nada),
  // en cliente el valor guardado o "undecided" (banner visible).
  const [, rerender] = useReducer((x: number) => x + 1, 0);
  const consent = useSyncExternalStore(
    subscribeToStorage,
    () => localStorage.getItem(CONSENT_KEY) ?? "undecided",
    () => "ssr"
  );
  const visible = consent === "undecided";

  const decide = (value: "accepted" | "rejected") => {
    localStorage.setItem(CONSENT_KEY, value);
    rerender();
  };

  const accept = () => decide("accepted");
  const reject = () => decide("rejected");

  return (
    <>
      {/* Google Analytics — solo se carga si el usuario acepta */}
      {consent === "accepted" && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* Banner — aparece hasta que el usuario decide */}
      {visible && (
        <div
          className="fixed left-0 right-0 z-50 px-4 py-3 md:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6
                     bottom-16 md:bottom-0"
          style={{
            backgroundColor: "var(--bg)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p className="text-xs flex-1 leading-relaxed" style={{ color: "var(--muted)" }}>
            Usamos Google Analytics para entender cómo se usa este sitio. Sin datos personales ni seguimiento entre webs.{" "}
            <Link href="/cookies" className="underline underline-offset-2 hover:opacity-70 transition-opacity">
              Política de cookies
            </Link>
          </p>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={reject}
              className="text-xs px-4 py-2 rounded border transition-opacity hover:opacity-70"
              style={{ borderColor: "var(--border)", color: "var(--muted)", backgroundColor: "var(--bg)" }}
            >
              Rechazar
            </button>
            <button
              onClick={accept}
              className="btn-dark text-xs px-4 py-2 font-medium"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
