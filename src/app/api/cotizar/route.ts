import nodemailer from "nodemailer";

type CotizarPayload = {
  type: "paquete" | "servicio";
  selection: string;
  niche: string;
  name: string;
  email: string;
  message: string;
};

function isValidPayload(data: unknown): data is CotizarPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    (d.type === "paquete" || d.type === "servicio") &&
    typeof d.selection === "string" &&
    d.selection.trim().length > 0 &&
    typeof d.niche === "string" &&
    d.niche.trim().length > 0 &&
    typeof d.name === "string" &&
    d.name.trim().length > 0 &&
    typeof d.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.message === "string"
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return Response.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const { type, selection, niche, name, email, message } = body;
  const tipoLabel = type === "paquete" ? "Paquete" : "Servicio";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Cotizador TWID" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nueva cotización — ${tipoLabel}: ${selection}`,
      text: [
        `${tipoLabel}: ${selection}`,
        `Nicho: ${niche}`,
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Mensaje: ${message || "(sin mensaje adicional)"}`,
      ].join("\n"),
    });
  } catch {
    return Response.json({ error: "No se pudo enviar el correo" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
