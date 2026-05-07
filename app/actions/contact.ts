"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactForm(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nombre = (formData.get("nombre") as string)?.trim();
  const empresa = (formData.get("empresa") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const categoria = (formData.get("categoria") as string)?.trim();
  const mensaje = (formData.get("mensaje") as string)?.trim();

  if (!nombre || !empresa || !email || !mensaje) {
    return { status: "error", message: "Por favor completa todos los campos obligatorios." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "El email no parece válido." };
  }

  try {
    await resend.emails.send({
      from: "Refferable <noreply@refferable.com>",
      to: "hola@refferable.com",
      replyTo: email,
      subject: `Diagnóstico — ${empresa}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #111;">
          <h2 style="font-size: 1.25rem; margin-bottom: 1.5rem;">Nueva solicitud de diagnóstico</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; font-size: 0.85rem; color: #666; width: 120px;">Nombre</td>
              <td style="padding: 10px 0; font-size: 0.95rem;">${nombre}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; font-size: 0.85rem; color: #666;">Empresa</td>
              <td style="padding: 10px 0; font-size: 0.95rem;">${empresa}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; font-size: 0.85rem; color: #666;">Email</td>
              <td style="padding: 10px 0; font-size: 0.95rem;"><a href="mailto:${email}" style="color: #1B4FD8;">${email}</a></td>
            </tr>
            ${categoria ? `
            <tr style="border-bottom: 1px solid #e5e5e5;">
              <td style="padding: 10px 0; font-size: 0.85rem; color: #666;">Categoría</td>
              <td style="padding: 10px 0; font-size: 0.95rem;">${categoria}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 1.5rem;">
            <p style="font-size: 0.85rem; color: #666; margin-bottom: 0.5rem;">Mensaje</p>
            <p style="font-size: 0.95rem; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
          </div>
          <hr style="margin-top: 2rem; border: none; border-top: 1px solid #e5e5e5;" />
          <p style="margin-top: 1rem; font-size: 0.8rem; color: #999;">Enviado desde refferable.com/contacto</p>
        </div>
      `,
    });

    return { status: "success" };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      status: "error",
      message: "Hubo un problema al enviar el mensaje. Escríbenos directamente a hola@refferable.com",
    };
  }
}
