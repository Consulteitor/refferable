"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  runPartialScan,
  unlockFullReport,
  type CheckerState,
} from "@/app/actions/checker";
import type { QueryResult, ScanInput } from "@/lib/geo/types";

const initialState: CheckerState = { status: "idle" };

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.25rem",
  border: "1px solid var(--border)",
  backgroundColor: "var(--bg)",
  color: "var(--text)",
  fontSize: "0.9rem",
  fontFamily: "Inter, sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "0.5rem",
  color: "var(--muted)",
};

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p
      role="alert"
      className="text-sm px-4 py-3 rounded"
      style={{ color: "#c0392b", backgroundColor: "#fdf2f2", border: "1px solid #fbc8c8" }}
    >
      {message}
    </p>
  );
}

function MentionBadge({ result }: { result: QueryResult }) {
  if (result.brandMentioned) {
    return (
      <span
        className="inline-block text-xs font-medium px-2.5 py-1 rounded"
        style={{ backgroundColor: "#e6f4ea", color: "#1a7a3a", border: "1px solid #b7dfc3" }}
      >
        Apareces{result.brandPosition ? ` · posición ${result.brandPosition}` : ""}
      </span>
    );
  }
  return (
    <span
      className="inline-block text-xs font-medium px-2.5 py-1 rounded"
      style={{ backgroundColor: "#fdf2f2", color: "#c0392b", border: "1px solid #fbc8c8" }}
    >
      No apareces
    </span>
  );
}

function ResultCard({ result }: { result: QueryResult }) {
  const snippet =
    result.answer.length > 260 ? `${result.answer.slice(0, 260)}…` : result.answer;
  return (
    <li className="p-6 rounded" style={{ backgroundColor: "var(--surface)" }}>
      <p
        className="font-medium mb-3"
        style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.05rem" }}
      >
        {result.question}
      </p>
      <div className="mb-3 flex flex-wrap gap-2">
        <MentionBadge result={result} />
        {result.tone && (
          <span
            className="inline-block text-xs font-medium px-2.5 py-1 rounded capitalize"
            style={{ backgroundColor: "var(--bg)", color: "var(--muted)", border: "1px solid var(--border)" }}
          >
            Tono {result.tone}
          </span>
        )}
        {result.competitorsMentioned.map((c) => (
          <span
            key={c}
            className="inline-block text-xs px-2.5 py-1 rounded"
            style={{ backgroundColor: "var(--bg)", color: "var(--soft)", border: "1px solid var(--border)" }}
          >
            Cita a {c}
          </span>
        ))}
      </div>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: "1.7" }}>{snippet}</p>
    </li>
  );
}

/** Campos del escaneo original, re-enviados como hidden para el informe completo. */
function HiddenScanFields({ input }: { input: ScanInput }) {
  return (
    <>
      <input type="hidden" name="marca" value={input.brand} />
      <input type="hidden" name="web" value={input.web ?? ""} />
      <input type="hidden" name="categoria" value={input.category} />
      <input type="hidden" name="competidor1" value={input.competitors[0] ?? ""} />
      <input type="hidden" name="competidor2" value={input.competitors[1] ?? ""} />
    </>
  );
}

function ScoreBlock({ score, mentioned, total }: { score: number; mentioned: number; total: number }) {
  const verdict =
    score >= 70
      ? "Presencia sólida. Ahora toca controlarla."
      : score >= 40
        ? "Presencia irregular. Hay trabajo que hacer."
        : "Presencia débil. La IA apenas te tiene en cuenta.";
  return (
    <div className="p-8 rounded mb-8" style={{ backgroundColor: "var(--surface)" }}>
      <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--soft)" }}>
        Tu nota de presencia conversacional
      </p>
      <p className="font-semibold leading-none mb-2" style={{ fontFamily: "Lora, Georgia, serif", fontSize: "4rem" }}>
        {score}
        <span style={{ fontSize: "1.25rem", color: "var(--soft)" }}> / 100</span>
      </p>
      <div
        role="img"
        aria-label={`Nota ${score} sobre 100`}
        className="h-2 rounded-full mb-4 mt-4"
        style={{ backgroundColor: "var(--border)", maxWidth: "420px" }}
      >
        <div
          className="h-2 rounded-full"
          style={{ width: `${score}%`, backgroundColor: score >= 70 ? "#1a7a3a" : score >= 40 ? "#b8860b" : "#c0392b" }}
        />
      </div>
      <p className="mb-1" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic", fontSize: "1.05rem" }}>
        {verdict}
      </p>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
        La IA te menciona en {mentioned} de {total} preguntas típicas de comprador en tu categoría.
      </p>
    </div>
  );
}

export default function CheckerForm({ defaultCategory }: { defaultCategory?: string }) {
  const [scanState, scanAction, scanPending] = useActionState(runPartialScan, initialState);
  const [reportState, reportAction, reportPending] = useActionState(unlockFullReport, initialState);
  const partialHeadingRef = useRef<HTMLHeadingElement>(null);
  const reportHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (scanState.status === "partial") partialHeadingRef.current?.focus();
  }, [scanState]);

  useEffect(() => {
    if (reportState.status === "full") reportHeadingRef.current?.focus();
  }, [reportState]);

  // ---- Etapa 3: informe completo ----
  if (reportState.status === "full" && reportState.report) {
    const report = reportState.report;
    return (
      <div aria-live="polite">
        <h3
          ref={reportHeadingRef}
          tabIndex={-1}
          className="font-semibold mb-6"
          style={{ fontSize: "1.5rem", outline: "none" }}
        >
          Informe completo: {report.input.brand}
        </h3>
        <ScoreBlock score={report.score} mentioned={report.mentionedCount} total={report.results.length} />

        {report.competitorCounts.length > 0 && (
          <div className="mb-8">
            <h4 className="font-semibold mb-3" style={{ fontSize: "1.05rem" }}>
              Frente a tus competidores
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="text-sm" style={{ color: "var(--muted)" }}>
                <strong>{report.input.brand}</strong>: mencionada en {report.mentionedCount} de {report.results.length} respuestas
              </li>
              {report.competitorCounts.map((c) => (
                <li key={c.name} className="text-sm" style={{ color: "var(--muted)" }}>
                  <strong>{c.name}</strong>: mencionado en {c.count} de {report.results.length} respuestas
                </li>
              ))}
            </ul>
          </div>
        )}

        <h4 className="font-semibold mb-4" style={{ fontSize: "1.05rem" }}>
          Pregunta a pregunta
        </h4>
        <ul className="flex flex-col gap-4 mb-10 list-none p-0">
          {report.results.map((r) => (
            <ResultCard key={r.question} result={r} />
          ))}
        </ul>

        <h4 className="font-semibold mb-4" style={{ fontSize: "1.05rem" }}>
          Qué haríamos nosotros
        </h4>
        <ul className="flex flex-col gap-3 mb-10 pl-5 list-disc">
          {report.recommendations.map((rec) => (
            <li key={rec.slice(0, 40)} style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>
              {rec}
            </li>
          ))}
        </ul>

        <div className="p-8 rounded" style={{ backgroundColor: "var(--cta-bg)" }}>
          <h4 className="font-semibold mb-3" style={{ color: "var(--cta-text)", fontSize: "1.25rem" }}>
            Esto era la foto. Lo que vendemos es el plan.
          </h4>
          <p className="mb-6" style={{ color: "#c9c9c9", fontSize: "0.95rem", lineHeight: "1.75" }}>
            El informe que acabas de ver es automático y usa un solo motor. El Diagnóstico estratégico cruza varios
            motores, más preguntas y una lectura manual de tus señales, y termina en un plan de acción priorizado.
            Desde 490€, entrega en pocos días. Te hemos enviado este informe por email para que lo tengas a mano.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-6 py-3 rounded text-sm font-medium transition-opacity hover:opacity-85"
            style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
          >
            Pedir el Diagnóstico estratégico
          </Link>
        </div>
      </div>
    );
  }

  // ---- Etapa 2: resultado parcial + captura de email ----
  if (scanState.status === "partial" && scanState.partial) {
    const partial = scanState.partial;
    const locked = partial.totalQuestions - partial.freeResults.length;
    return (
      <div aria-live="polite">
        <h3
          ref={partialHeadingRef}
          tabIndex={-1}
          className="font-semibold mb-2"
          style={{ fontSize: "1.5rem", outline: "none" }}
        >
          Primer resultado: {partial.input.brand}
        </h3>
        <p className="mb-6" style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.75" }}>
          Hemos lanzado en directo las {partial.freeResults.length} primeras preguntas de comprador a un motor de IA
          con búsqueda activa. Te mencionan en <strong>{partial.mentionedInFree} de {partial.freeResults.length}</strong>.
        </p>

        <ul className="flex flex-col gap-4 mb-8 list-none p-0">
          {partial.freeResults.map((r) => (
            <ResultCard key={r.question} result={r} />
          ))}
        </ul>

        <div className="p-8 rounded" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
          <h4 className="font-semibold mb-2" style={{ fontSize: "1.15rem" }}>
            Quedan {locked} preguntas por analizar
          </h4>
          <p className="mb-5" style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: "1.7" }}>
            El informe completo añade las preguntas de opinión y comparación directa, tu nota de 0 a 100 y
            recomendaciones concretas. Es gratis: solo pedimos un email para enviártelo.
          </p>
          <form action={reportAction} className="flex flex-col gap-4">
            <HiddenScanFields input={partial.input} />
            <div>
              <label htmlFor="checker-email" style={labelStyle}>
                Tu email <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <input
                id="checker-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="tu@empresa.com"
                style={inputStyle}
              />
            </div>
            <ErrorMessage message={reportState.status === "error" ? reportState.message : undefined} />
            <button
              type="submit"
              disabled={reportPending}
              className="px-6 py-3.5 rounded text-sm font-medium transition-opacity"
              style={{
                backgroundColor: "var(--cta-bg)",
                color: "var(--cta-text)",
                opacity: reportPending ? 0.6 : 1,
                cursor: reportPending ? "not-allowed" : "pointer",
              }}
            >
              {reportPending ? "Analizando las preguntas restantes…" : "Desbloquear el informe completo gratis"}
            </button>
            <p className="text-xs" style={{ color: "var(--soft)" }}>
              Sin spam. Te enviamos el informe y, si encaja, una propuesta de siguiente paso. Nada más.
            </p>
          </form>
        </div>
      </div>
    );
  }

  // ---- Etapa 1: formulario inicial ----
  return (
    <form action={scanAction} className="flex flex-col gap-5" aria-describedby="checker-desc">
      <p id="checker-desc" className="sr-only">
        Introduce tu marca y categoría para comprobar si la IA te menciona. El escaneo es gratuito.
      </p>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="checker-marca" style={labelStyle}>
            Tu marca <span style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="checker-marca"
            name="marca"
            type="text"
            required
            maxLength={80}
            placeholder="Nombre de tu empresa o producto"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="checker-web" style={labelStyle}>
            Tu web (opcional)
          </label>
          <input
            id="checker-web"
            name="web"
            type="url"
            maxLength={200}
            placeholder="https://tuempresa.com"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="checker-categoria" style={labelStyle}>
          Tu categoría <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <input
          id="checker-categoria"
          name="categoria"
          type="text"
          required
          maxLength={120}
          defaultValue={defaultCategory}
          placeholder="software de facturación, clínica dental en Valencia…"
          style={inputStyle}
        />
        <p className="text-xs mt-2" style={{ color: "var(--soft)" }}>
          Escríbela como la buscaría un cliente, no como la describes tú.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="checker-comp1" style={labelStyle}>
            Competidor 1 (opcional)
          </label>
          <input id="checker-comp1" name="competidor1" type="text" maxLength={80} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="checker-comp2" style={labelStyle}>
            Competidor 2 (opcional)
          </label>
          <input id="checker-comp2" name="competidor2" type="text" maxLength={80} style={inputStyle} />
        </div>
      </div>

      <ErrorMessage message={scanState.status === "error" ? scanState.message : undefined} />

      <button
        type="submit"
        disabled={scanPending}
        className="w-full px-6 py-4 rounded text-sm font-medium transition-opacity"
        style={{
          backgroundColor: "var(--cta-bg)",
          color: "var(--cta-text)",
          opacity: scanPending ? 0.6 : 1,
          cursor: scanPending ? "not-allowed" : "pointer",
        }}
      >
        {scanPending ? "Preguntando a la IA en directo…" : "Comprobar gratis qué dice la IA"}
      </button>
      <p className="text-xs text-center" style={{ color: "var(--soft)" }}>
        Sin registro para el primer resultado. Sin tarjeta. Nunca.
      </p>
      {scanPending && (
        <p role="status" className="text-sm text-center" style={{ color: "var(--muted)" }}>
          Lanzando preguntas reales de comprador… suele tardar unos segundos.
        </p>
      )}
    </form>
  );
}
