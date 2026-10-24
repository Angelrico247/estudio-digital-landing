"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { pricingPlans, serviceOptions } from "@/data/site";
import { creativeConfig } from "@/data/creative-config";

const fieldClasses =
  "w-full border border-cr-line bg-white px-5 py-4 font-cr-body text-[15px] text-cr-ink outline-none transition-colors placeholder:text-cr-muted focus:border-cr-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cr-accent-ink";

const packageOptions = pricingPlans.map((plan) => `Paquete ${plan.name}`);

export default function CreativeContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const interestRef = useRef<HTMLSelectElement>(null);

  // Los botones "Cotizar paquete" apuntan a #contacto y traen el paquete en data-interest.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element).closest<HTMLAnchorElement>("a[data-interest]");
      if (link && interestRef.current) interestRef.current.value = link.dataset.interest ?? "";
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const interest = String(data.get("interes") ?? "");
    setStatus("sending");

    try {
      const res = await fetch("/api/cotizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: interest.startsWith("Paquete") ? "paquete" : "servicio",
          selection: interest,
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
      <div role="status" className="border border-cr-line bg-white p-10 text-center">
        <h3 className="font-cr-heading text-2xl font-extrabold uppercase text-cr-ink">¡Gracias por escribirnos!</h3>
        <p className="mt-3 font-cr-body text-base leading-relaxed text-cr-body">
          Recibimos tu mensaje y te contactaremos por correo en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="cr-nombre" className="sr-only">Nombre</label>
        <input id="cr-nombre" name="nombre" type="text" placeholder="Nombre" required autoComplete="name" className={fieldClasses} />
      </div>
      <div>
        <label htmlFor="cr-email" className="sr-only">Email</label>
        <input id="cr-email" name="email" type="email" placeholder="Email" required autoComplete="email" className={fieldClasses} />
      </div>
      <div>
        <label htmlFor="cr-interes" className="sr-only">¿Qué te interesa?</label>
        <select id="cr-interes" name="interes" ref={interestRef} required defaultValue="" className={fieldClasses}>
          <option value="" disabled>
            ¿Qué te interesa?
          </option>
          <optgroup label="Paquetes">
            {packageOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </optgroup>
          <optgroup label="Servicios">
            {serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </optgroup>
        </select>
      </div>
      <div>
        <label htmlFor="cr-mensaje" className="sr-only">Mensaje</label>
        <textarea id="cr-mensaje" name="mensaje" placeholder="Cuéntanos de tu proyecto" rows={5} required className={`${fieldClasses} resize-none`} />
      </div>

      <p className="font-cr-body text-xs leading-relaxed text-cr-muted">
        Al enviar aceptas el{" "}
        <Link href={creativeConfig.privacyUrl} target="_blank" className="text-cr-ink underline underline-offset-2">
          Aviso de Privacidad
        </Link>
        .
      </p>

      {status === "error" && (
        <p role="alert" className="font-cr-body text-sm text-red-700">
          No pudimos enviar tu mensaje. Intenta de nuevo en unos segundos.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-cr-ink px-9 py-4 font-cr-heading text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-cr-accent-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cr-accent-ink disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
