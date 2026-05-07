"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "refferable_cookie_consent";

export default function CookieBanner() {
  const [consent, setConsent] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    setConsent(stored);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setConsent("rejected");
    setVisible(false);
  };

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
              className="text-xs px-4 py-2 rounded font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
