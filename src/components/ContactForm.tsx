"use client";

import { useState, type FormEvent } from "react";
import { devServiceOptions as serviceOptions } from "@/data/development";

const inputClasses =
  "w-full rounded-md border border-hairline bg-paper-card px-5 py-4 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-secondary focus:border-primary";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");

    try {
      const res = await fetch("/api/cotizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "servicio",
          selection: data.get("servicio"),
          name: data.get("nombre"),
          email: data.get("email"),
          message: data.get("mensaje"),
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="border-gradient-brand rounded-md bg-primary/10 p-8 text-center"
        style={{ ["--gb-width" as string]: "1px" }}
      >
        <h3 className="font-heading text-xl font-bold text-ink">¡Gracias por escribirnos!</h3>
        <p className="mt-2 text-ink-secondary">Recibimos tu mensaje y te contactaremos muy pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input name="nombre" type="text" placeholder="Nombre" required className={inputClasses} />
      <input name="email" type="email" placeholder="Email" required className={inputClasses} />
      <select name="servicio" required defaultValue="" className={inputClasses}>
        <option value="" disabled>
          ¿Qué necesitas?
        </option>
        {serviceOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <textarea
        name="mensaje"
        placeholder="Mensaje"
        rows={5}
        required
        className={`${inputClasses} resize-none`}
      />

      <p className="text-xs leading-relaxed text-ink-secondary">
        Al enviar aceptas el{" "}
        <a
          href="/aviso-de-privacidad"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2"
        >
          Aviso de Privacidad
        </a>
        .
      </p>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          No pudimos enviar tu mensaje. Intenta de nuevo en unos segundos.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-fill font-heading w-full rounded-md border py-4 text-sm font-semibold uppercase tracking-[0.1em] text-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span className="btn-fill-content">{status === "sending" ? "Enviando..." : "Enviar Mensaje"}</span>
      </button>
    </form>
  );
}
