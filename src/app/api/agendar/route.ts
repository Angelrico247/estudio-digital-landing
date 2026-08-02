import nodemailer from "nodemailer";

type AgendarPayload = {
  name: string;
  email: string;
  phone: string;
  day: string;
  hour: string;
  comment: string;
};

const VALID_DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

function isValidPayload(data: unknown): data is AgendarPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length > 0 &&
    typeof d.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.phone === "string" &&
    d.phone.trim().length > 0 &&
    typeof d.day === "string" &&
    VALID_DAYS.includes(d.day) &&
    typeof d.hour === "string" &&
    d.hour.trim().length > 0 &&
    typeof d.comment === "string"
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return Response.json({ error: "Datos inválidos" }, { status: 400 });
  }

  const { name, email, phone, day, hour, comment } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    // Aviso interno para el estudio, con reply-to al cliente para poder contestar directo.
    await transporter.sendMail({
      from: `"Agenda TWID" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nueva llamada agendada — ${day} ${hour}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Teléfono: ${phone}`,
        `Día: ${day}`,
        `Hora: ${hour}`,
        `Comentario: ${comment || "(sin comentario)"}`,
      ].join("\n"),
    });

    // Confirmación al cliente con el mismo aviso de disponibilidad que ve en el sitio.
    await transporter.sendMail({
      from: `"Two Worlds In Design" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Confirmación de tu llamada agendada — TWID",
      text: [
        `Hola ${name}, recibimos tu solicitud para agendar una llamada.`,
        "",
        `Día: ${day}`,
        `Hora: ${hour}`,
        "",
        "Se tratará lo máximo posible de poder contactarse al día y hora agendada.",
        "",
        "Si necesitas cambiar el horario, responde directamente a este correo.",
        "",
        "Two Worlds In Design",
      ].join("\n"),
    });
  } catch {
    return Response.json({ error: "No se pudo enviar el correo" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
