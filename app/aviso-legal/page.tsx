import type { Metadata } from "next";

export const metadata: Metadata = { title: "Aviso Legal" };

export default function AvisoLegal() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-24">
      <h1 className="text-3xl font-bold mb-8">Aviso Legal</h1>
      <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa que el presente sitio web es titularidad de Refferable.</p>
        <p>El acceso y uso de este sitio web implica la aceptación de las condiciones de uso establecidas en el presente aviso legal. El titular se reserva el derecho a modificar en cualquier momento la presentación y configuración del sitio web.</p>
        <p>Los contenidos del sitio web tienen finalidad informativa y no constituyen asesoramiento profesional de ningún tipo.</p>
        <p>Para cualquier consulta: hola@refferable.com</p>
      </div>
    </div>
  );
}
