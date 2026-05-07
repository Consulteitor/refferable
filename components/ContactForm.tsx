"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactForm, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-6 py-4 rounded text-sm font-medium transition-opacity"
      style={{
        backgroundColor: "var(--cta-bg)",
        color: "var(--cta-text)",
        opacity: pending ? 0.6 : 1,
        cursor: pending ? "not-allowed" : "pointer",
      }}
    >
      {pending ? "Enviando…" : "Solicitar diagnóstico gratuito"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.25rem",
    border: "1px solid var(--border)",
    backgroundColor: "var(--bg)",
    color: "var(--text)",
    fontSize: "0.9rem",
    fontFamily: "Inter, sans-serif",
    outline: "none",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 500,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    marginBottom: "0.5rem",
    color: "var(--muted)",
  };

  if (state.status === "success") {
    return (
      <div className="p-10 rounded text-center" style={{ backgroundColor: "var(--surface)" }}>
        <p
          className="font-semibold mb-3"
          style={{ fontFamily: "Lora, Georgia, serif", fontSize: "1.2rem" }}
        >
          Mensaje recibido
        </p>
        <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>
          Te respondemos en menos de 48h con una primera lectura de tu situación. Sin rodeos.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nombre" style={labelStyle}>
            Nombre <span style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="empresa" style={labelStyle}>
            Empresa <span style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            required
            autoComplete="organization"
            placeholder="Nombre de la empresa"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>
          Email <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tu@empresa.com"
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="categoria" style={labelStyle}>
          ¿A qué se dedica tu empresa?
        </label>
        <input
          id="categoria"
          name="categoria"
          type="text"
          placeholder="SaaS B2B, consultoría, ecommerce…"
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="mensaje" style={labelStyle}>
          Cuéntanos más <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder="¿Contra quién compites? ¿Qué te preocupa? ¿Qué quieres saber?"
          style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
        />
      </div>

      {state.status === "error" && (
        <p
          className="text-sm px-4 py-3 rounded"
          style={{
            color: "#c0392b",
            backgroundColor: "#fdf2f2",
            border: "1px solid #fbc8c8",
          }}
        >
          {state.message}
        </p>
      )}

      <SubmitButton pending={pending} />

      <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
        Sin compromiso. Si el AEO no encaja, te lo decimos también.
      </p>
    </form>
  );
}
