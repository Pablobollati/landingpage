import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, mensaje } = body || {};

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { ok: false, error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    const mailUser = (process.env.MAIL_USER || "").trim();
    const mailPass = (process.env.MAIL_PASS || "").replace(/\s+/g, "");
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);

    if (!mailUser || !mailPass) {
      console.error("Faltan MAIL_USER o MAIL_PASS en variables de entorno.");
      return NextResponse.json(
        { ok: false, error: "Configuracion de correo incompleta en el servidor." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    await transporter.sendMail({
      from: `"Web Bollati" <${mailUser}>`,
      to: "info@bollatiabogados.com",
      replyTo: email,
      subject: `Nuevo contacto de ${nombre}`,
      text: `Nombre: ${nombre}
Email: ${email}
Telefono: ${telefono || "-"}

Mensaje:
${mensaje}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando mail", error);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}
