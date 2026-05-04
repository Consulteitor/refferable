import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de Cookies" };

export default function Cookies() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-24">
      <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>
      <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <p>Este sitio web no utiliza cookies de seguimiento ni de publicidad. Puede que el navegador utilice cookies técnicas estrictamente necesarias para el funcionamiento del sitio.</p>
        <p>No se comparte ningún dato con terceros a través de cookies. Si en el futuro se incorporaran cookies adicionales, esta política se actualizará con la información correspondiente.</p>
        <p>Para cualquier consulta: hola@refferable.com</p>
      </div>
    </div>
  );
}
