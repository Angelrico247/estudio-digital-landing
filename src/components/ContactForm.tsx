"use client";

import { useState, type FormEvent } from "react";
import { serviceOptions } from "@/data/site";

const inputClasses =
  "w-full rounded-md border border-hairline bg-paper-card px-5 py-4 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-secondary focus:border-primary";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
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
          Tipo de servicio
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

      <button
        type="submit"
        className="btn-fill font-heading w-full rounded-md border py-4 text-sm font-semibold uppercase tracking-[0.1em] text-ink hover:text-white"
      >
        <span className="btn-fill-content">Enviar Mensaje</span>
      </button>
    </form>
  );
}
