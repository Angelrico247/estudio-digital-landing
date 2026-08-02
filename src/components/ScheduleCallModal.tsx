"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full rounded-md border border-line bg-card px-5 py-4 text-[15px] text-foreground outline-none transition-colors placeholder:text-secondary focus:border-primary";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const hours = [
  "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
];

export default function ScheduleCallModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!isOpen) return;
    setName("");
    setEmail("");
    setPhone("");
    setDay("");
    setHour("");
    setComment("");
    setStatus("idle");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    // overflow:hidden en el body no bloquea el scroll táctil en iOS Safari —
    // hay que fijar el body en su lugar para que solo el modal haga scroll.
    const scrollY = window.scrollY;
    const { body } = document;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  async function handleSubmit() {
    setStatus("sending");
    try {
      const res = await fetch("/api/agendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, day, hour, comment }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const canSubmit =
    name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    phone.trim().length > 0 &&
    day.length > 0 &&
    hour.length > 0;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div aria-hidden onClick={onClose} className="absolute inset-0 bg-dark/90 backdrop-blur-sm" />

      {/* El borde vive en el contenedor externo y el scroll en el interno: si van juntos,
          el borde se queda arriba y el contenido se desborda por debajo en móvil. */}
      <div className="border-gradient-brand relative flex max-h-[85dvh] w-full max-w-xl flex-col overflow-hidden rounded-md bg-card">
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 text-2xl leading-none text-secondary transition-colors hover:text-primary"
        >
          ×
        </button>

        <div className="overflow-y-auto p-8 sm:p-10">
          {status === "sent" ? (
            <div className="py-8 text-center">
              <h3 className="font-heading text-2xl font-bold uppercase text-foreground">¡Listo!</h3>
              <p className="mt-3 text-secondary">
                Recibimos tu solicitud para el <span className="text-primary">{day}</span> a las{" "}
                <span className="text-primary">{hour}</span>. Te confirmamos por correo, y
                haremos lo máximo posible por contactarte en ese horario.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="btn-fill font-heading mt-8 rounded-md border px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-foreground"
              >
                <span className="btn-fill-content">Cerrar</span>
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-center font-heading text-2xl font-bold uppercase text-foreground">
                Agenda una Llamada
              </h3>
              <p className="mt-2 text-center text-sm text-secondary">
                Elige día y horario, y te contactamos.
              </p>

              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClasses}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClasses}
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClasses}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className={`${inputClasses} ${day ? "text-foreground" : "text-secondary"}`}
                  >
                    <option value="" disabled>
                      Día
                    </option>
                    {days.map((d) => (
                      <option key={d} value={d} className="text-foreground">
                        {d}
                      </option>
                    ))}
                  </select>

                  <select
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                    className={`${inputClasses} ${hour ? "text-foreground" : "text-secondary"}`}
                  >
                    <option value="" disabled>
                      Hora
                    </option>
                    {hours.map((h) => (
                      <option key={h} value={h} className="text-foreground">
                        {h}
                      </option>
                    ))}
                  </select>
                </div>

                <p className="text-xs italic text-secondary">
                  (Se tratará lo máximo posible de poder contactarse al día y hora agendada.)
                </p>

                <textarea
                  placeholder="Comentario (opcional)"
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-400">
                  No pudimos enviar tu solicitud. Intenta de nuevo en unos segundos.
                </p>
              )}

              <button
                type="button"
                disabled={!canSubmit || status === "sending"}
                onClick={handleSubmit}
                className="btn-fill font-heading mt-8 w-full rounded-md border py-4 text-sm font-semibold uppercase tracking-[0.1em] text-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="btn-fill-content">
                  {status === "sending" ? "Enviando..." : "Agendar Llamada"}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
