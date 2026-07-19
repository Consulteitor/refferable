"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import type { FullReport, PartialScanResult, ScanInput } from "@/lib/geo/types";
import { buildQuestions, FREE_QUERIES } from "@/lib/geo/questions";
import { runQueries } from "@/lib/geo/scan";
import { buildReport } from "@/lib/geo/analysis";
import { consumeScanQuota } from "@/lib/geo/cache";

// Instancia perezosa: el constructor de Resend lanza si no hay clave, y en
// desarrollo sin RESEND_API_KEY el checker debe funcionar igualmente (sin emails).
function getResend(): Resend | null {
  return process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
}

export type CheckerState = {
  status: "idle" | "partial" | "full" | "error";
  message?: string;
  partial?: PartialScanResult;
  report?: FullReport;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseInput(formData: FormData): ScanInput | string {
  const brand = (formData.get("marca") as string)?.trim() ?? "";
  const web = (formData.get("web") as string)?.trim() ?? "";
  const category = (formData.get("categoria") as string)?.trim() ?? "";
  const competitors = [
    (formData.get("competidor1") as string)?.trim() ?? "",
    (formData.get("competidor2") as string)?.trim() ?? "",
  ].filter(Boolean);

  if (!brand || !category) {
    return "Necesitamos al menos el nombre de tu marca y tu categoría.";
  }
  if (brand.length > 80 || category.length > 120 || competitors.some((c) => c.length > 80)) {
    return "Alguno de los campos es demasiado largo.";
  }
  if (web && web.length > 200) {
    return "La URL de la web es demasiado larga.";
  }
  return { brand, web: web || undefined, category, competitors };
}

async function getClientIp(): Promise<string> {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
}

export async function runPartialScan(
  _prev: CheckerState,
  formData: FormData
): Promise<CheckerState> {
  const input = parseInput(formData);
  if (typeof input === "string") {
    return { status: "error", message: input };
  }

  const ip = await getClientIp();
  if (!consumeScanQuota(ip)) {
    return {
      status: "error",
      message:
        "Has alcanzado el límite de escaneos gratuitos por hoy. Si necesitas un análisis más profundo, escríbenos a hola@refferable.com.",
    };
  }

  try {
    const questions = buildQuestions(input);
    const freeResults = await runQueries(questions.slice(0, FREE_QUERIES), input);
    return {
      status: "partial",
      partial: {
        input,
        totalQuestions: questions.length,
        freeResults,
        mentionedInFree: freeResults.filter((r) => r.brandMentioned).length,
      },
    };
  } catch (err) {
    console.error("Checker scan error:", err);
    return {
      status: "error",
      message:
        "No hemos podido completar el escaneo ahora mismo. Vuelve a intentarlo en unos minutos o escríbenos a hola@refferable.com.",
    };
  }
}

export async function unlockFullReport(
  _prev: CheckerState,
  formData: FormData
): Promise<CheckerState> {
  const input = parseInput(formData);
  if (typeof input === "string") {
    return { status: "error", message: input };
  }

  const email = (formData.get("email") as string)?.trim() ?? "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "El email no parece válido." };
  }

  const ip = await getClientIp();
  if (!consumeScanQuota(ip)) {
    return {
      status: "error",
      message:
        "Has alcanzado el límite de escaneos gratuitos por hoy. Si necesitas un análisis más profundo, escríbenos a hola@refferable.com.",
    };
  }

  try {
    const questions = buildQuestions(input);
    const results = await runQueries(questions, input);
    const report = buildReport(input, results);

    // Los emails no deben tumbar el informe en pantalla si Resend falla.
    const resend = getResend();
    if (!resend) {
      console.warn("[checker] RESEND_API_KEY no definida — informe generado pero sin envío de emails.");
    }
    try {
      if (resend) await Promise.all([
        resend.emails.send({
          from: "Refferable <noreply@refferable.com>",
          to: email,
          subject: `Tu informe GEO: ${report.input.brand} — ${report.score}/100`,
          html: renderReportEmail(report),
        }),
        resend.emails.send({
          from: "Refferable <noreply@refferable.com>",
          to: "hola@refferable.com",
          replyTo: email,
          subject: `Lead checker — ${report.input.brand} (${report.score}/100)`,
          html: renderLeadEmail(report, email),
        }),
      ]);
    } catch (emailErr) {
      console.error("Checker email error:", emailErr);
    }

    return { status: "full", report };
  } catch (err) {
    console.error("Checker full report error:", err);
    return {
      status: "error",
      message:
        "No hemos podido generar el informe completo ahora mismo. Vuelve a intentarlo en unos minutos o escríbenos a hola@refferable.com.",
    };
  }
}

function renderReportEmail(report: FullReport): string {
  const { input, score, mentionedCount, results, recommendations } = report;
  const brand = escapeHtml(input.brand);

  const rows = results
    .map(
      (r) => `
        <tr style="border-bottom: 1px solid #e5e5e5;">
          <td style="padding: 10px 0; font-size: 0.9rem; vertical-align: top;">${escapeHtml(r.question)}</td>
          <td style="padding: 10px 0 10px 16px; font-size: 0.9rem; white-space: nowrap; vertical-align: top; color: ${
            r.brandMentioned ? "#1a7a3a" : "#c0392b"
          };">${r.brandMentioned ? `Apareces${r.brandPosition ? ` (${r.brandPosition}ª)` : ""}` : "No apareces"}</td>
        </tr>`
    )
    .join("");

  const recs = recommendations
    .map((r) => `<li style="margin-bottom: 0.75rem; font-size: 0.9rem; line-height: 1.6;">${escapeHtml(r)}</li>`)
    .join("");

  return `
    <div style="font-family: Georgia, serif; max-width: 600px; color: #111;">
      <h2 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Informe de presencia conversacional: ${brand}</h2>
      <p style="font-size: 0.9rem; color: #666; margin-bottom: 1.5rem;">Generado con preguntas reales de comprador respondidas por un motor de IA con búsqueda activa.</p>
      <div style="background: #F7F4EE; border: 1px solid #E3DFD7; border-radius: 4px; padding: 20px; margin-bottom: 1.5rem;">
        <p style="font-size: 2.5rem; margin: 0; font-weight: bold;">${score}<span style="font-size: 1rem; color: #666;">/100</span></p>
        <p style="font-size: 0.9rem; color: #666; margin: 0.25rem 0 0;">Te mencionan en ${mentionedCount} de ${results.length} preguntas típicas de tu categoría.</p>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">${rows}</table>
      <h3 style="font-size: 1.05rem; margin-bottom: 0.75rem;">Qué haríamos nosotros</h3>
      <ul style="padding-left: 1.25rem; margin-bottom: 1.5rem;">${recs}</ul>
      <div style="background: #111; border-radius: 4px; padding: 20px; margin-bottom: 1rem;">
        <p style="color: #fff; font-size: 0.95rem; margin: 0 0 0.75rem;">¿Quieres el análisis de verdad, con varios motores y un plan priorizado? El Diagnóstico estratégico parte de 490€.</p>
        <a href="https://refferable.com/contacto" style="color: #fff; font-size: 0.9rem; text-decoration: underline;">Hablar con Refferable →</a>
      </div>
      <p style="font-size: 0.8rem; color: #999;">Enviado desde refferable.com/que-dice-chatgpt-de-tu-marca · Este informe es automático y orientativo.</p>
    </div>
  `;
}

function renderLeadEmail(report: FullReport, email: string): string {
  const { input, score, mentionedCount, results } = report;
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; color: #111;">
      <h2 style="font-size: 1.25rem; margin-bottom: 1.5rem;">Nuevo lead del checker GEO</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #e5e5e5;">
          <td style="padding: 10px 0; font-size: 0.85rem; color: #666; width: 130px;">Email</td>
          <td style="padding: 10px 0; font-size: 0.95rem;"><a href="mailto:${escapeHtml(email)}" style="color: #1B4FD8;">${escapeHtml(email)}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #e5e5e5;">
          <td style="padding: 10px 0; font-size: 0.85rem; color: #666;">Marca</td>
          <td style="padding: 10px 0; font-size: 0.95rem;">${escapeHtml(input.brand)}</td>
        </tr>
        ${input.web ? `
        <tr style="border-bottom: 1px solid #e5e5e5;">
          <td style="padding: 10px 0; font-size: 0.85rem; color: #666;">Web</td>
          <td style="padding: 10px 0; font-size: 0.95rem;">${escapeHtml(input.web)}</td>
        </tr>` : ""}
        <tr style="border-bottom: 1px solid #e5e5e5;">
          <td style="padding: 10px 0; font-size: 0.85rem; color: #666;">Categoría</td>
          <td style="padding: 10px 0; font-size: 0.95rem;">${escapeHtml(input.category)}</td>
        </tr>
        ${input.competitors.length > 0 ? `
        <tr style="border-bottom: 1px solid #e5e5e5;">
          <td style="padding: 10px 0; font-size: 0.85rem; color: #666;">Competidores</td>
          <td style="padding: 10px 0; font-size: 0.95rem;">${input.competitors.map(escapeHtml).join(", ")}</td>
        </tr>` : ""}
        <tr style="border-bottom: 1px solid #e5e5e5;">
          <td style="padding: 10px 0; font-size: 0.85rem; color: #666;">Resultado</td>
          <td style="padding: 10px 0; font-size: 0.95rem;">${score}/100 — mencionada en ${mentionedCount}/${results.length} preguntas</td>
        </tr>
      </table>
      <p style="margin-top: 1.5rem; font-size: 0.8rem; color: #999;">Lead capturado en refferable.com/que-dice-chatgpt-de-tu-marca</p>
    </div>
  `;
}
