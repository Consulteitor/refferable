import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de Privacidad" };

export default function Privacidad() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-24">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
      <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        <p>Refferable se compromete a proteger la privacidad de los usuarios de este sitio web y a tratar los datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales.</p>
        <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>Datos que recogemos</h2>
        <p>Únicamente recogemos los datos que el usuario nos facilita voluntariamente a través del correo electrónico de contacto. No utilizamos formularios con almacenamiento de datos en servidor.</p>
        <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>Finalidad del tratamiento</h2>
        <p>Los datos facilitados se utilizan exclusivamente para responder a las consultas recibidas y, si el usuario lo ha solicitado, para el envío de información sobre nuestros servicios.</p>
        <h2 className="text-base font-semibold" style={{ color: "var(--text)" }}>Derechos del usuario</h2>
        <p>El usuario puede ejercer sus derechos de acceso, rectificación, supresión y oposición enviando un correo a hola@refferable.com.</p>
      </div>
    </div>
  );
}
