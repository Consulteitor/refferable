# Refferable

Consultoría de posicionamiento conversacional (AEO) en España — [refferable.com](https://refferable.com). Next.js 16 + TypeScript + Tailwind 4, desplegado en Vercel.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3001
npm run build
npm run lint
```

## Checker GEO (`/que-dice-chatgpt-de-tu-marca`)

Herramienta gratuita que comprueba si los motores de IA mencionan una marca cuando un comprador pregunta por su categoría. Flujo: formulario → 2 consultas en directo (resultado parcial sin email) → email → informe completo (5-8 consultas, nota 0-100, recomendaciones) enviado también por Resend, con aviso interno de lead a hola@refferable.com.

Arquitectura en `lib/geo/`:

- `provider.ts` — selección de motor. v1 solo Perplexity (Sonar, siempre con búsqueda activa). Para añadir ChatGPT/Gemini en v2: implementar la interfaz `AnswerEngine` de `types.ts` y agregarla aquí.
- `perplexity.ts` / `mock.ts` — proveedores real y simulado.
- `questions.ts` — genera las preguntas de comprador (las 2 primeras nunca nombran la marca; son el tramo gratuito).
- `analysis.ts` — detección de menciones, posición frente a competidores, tono y nota 0-100.
- `cache.ts` — cache de respuestas 6h + límite de 5 escaneos/IP/día (en memoria de proceso; si el checker crece, migrar a KV).
- `scan.ts` — orquestación.

Las Server Actions están en `app/actions/checker.ts` (mismo patrón que `contact.ts`).

## Variables de entorno

| Variable | Uso |
| --- | --- |
| `RESEND_API_KEY` | Envío de emails (contacto + informes del checker). Ya configurada en Vercel. |
| `PERPLEXITY_API_KEY` | Consultas reales del checker (modelo Sonar). Sin ella, el checker funciona en modo mock con un aviso en consola. |
| `GEO_PROVIDER` | Poner `mock` para forzar respuestas simuladas (desarrollo/pruebas, coste cero). |

### Activar la clave real de Perplexity

1. Crear la clave en <https://www.perplexity.ai/settings/api>.
2. En local: añadir `PERPLEXITY_API_KEY=pplx-...` a `.env.local` (y quitar `GEO_PROVIDER=mock` si está).
3. En producción: `vercel env add PERPLEXITY_API_KEY` (o desde el dashboard de Vercel) y redesplegar.

Las respuestas mock van prefijadas con `[RESPUESTA SIMULADA — modo mock...]` para que sea imposible confundirlas con datos reales.
