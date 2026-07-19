/**
 * Cache de respuestas y límite de escaneos por IP, en memoria de proceso.
 *
 * Limitación conocida (aceptada para v1): en Vercel cada instancia serverless
 * tiene su propia memoria, así que la cache y el contador son "por instancia".
 * Aun así cubren el caso más caro — el mismo usuario repitiendo el mismo scan
 * en la misma sesión (desbloqueo del informe completo reutiliza las 2 consultas
 * gratuitas) — y frenan el abuso básico. Si el checker crece: mover a KV/Upstash.
 */

const ANSWER_TTL_MS = 6 * 60 * 60 * 1000; // 6 horas
const MAX_SCANS_PER_IP_PER_DAY = 5;

type CacheEntry = { answer: string; expires: number };
const answerCache = new Map<string, CacheEntry>();

type IpEntry = { count: number; resetAt: number };
const ipCounts = new Map<string, IpEntry>();

function normalizeKey(question: string): string {
  return question.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim();
}

export function getCachedAnswer(question: string): string | null {
  const key = normalizeKey(question);
  const entry = answerCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expires) {
    answerCache.delete(key);
    return null;
  }
  return entry.answer;
}

export function setCachedAnswer(question: string, answer: string): void {
  // Poda simple para que el Map no crezca sin límite en instancias longevas.
  if (answerCache.size > 5000) {
    const now = Date.now();
    for (const [k, v] of answerCache) {
      if (now > v.expires) answerCache.delete(k);
    }
  }
  answerCache.set(normalizeKey(question), { answer, expires: Date.now() + ANSWER_TTL_MS });
}

/** true si la IP aún tiene escaneos disponibles hoy; consume uno si los tiene. */
export function consumeScanQuota(ip: string): boolean {
  const now = Date.now();
  const entry = ipCounts.get(ip);
  if (!entry || now > entry.resetAt) {
    ipCounts.set(ip, { count: 1, resetAt: now + 24 * 60 * 60 * 1000 });
    return true;
  }
  if (entry.count >= MAX_SCANS_PER_IP_PER_DAY) {
    return false;
  }
  entry.count += 1;
  return true;
}
