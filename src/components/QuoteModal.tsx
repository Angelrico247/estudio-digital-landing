"use client";

import { useEffect, useState } from "react";
import { niches } from "@/data/site";
import { devQuoteOptions } from "@/data/development";
import type { QuotePreset } from "./QuoteModalContext";

type Step = 0 | 1 | 2;
type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "w-full rounded-md border border-line bg-card px-5 py-4 text-[15px] text-foreground outline-none transition-colors placeholder:text-secondary focus:border-primary";

export default function QuoteModal({
  isOpen,
  preset,
  onClose,
}: {
  isOpen: boolean;
  preset: QuotePreset | null;
  onClose: () => void;
}) {
  const [step, setStep] = useState<Step>(0);
  const [selection, setSelection] = useState("");
  const [niche, setNiche] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!isOpen) return;
    setSelection(preset?.selection ?? "");
    setNiche("");
    setName("");
    setEmail("");
    setMessage("");
    setStatus("idle");
    setStep(preset ? 1 : 0);
  }, [isOpen, preset]);

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
      const res = await fetch("/api/cotizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "servicio", selection, niche, name, email, message }),
      });
      if (!res.ok) throw new Error("request failed");

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const canAdvanceStep0 = selection.trim().length > 0;
  const canAdvanceStep1 = niche.trim().length > 0;
  const canSubmit = name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const options = devQuoteOptions.map((value) => ({ value }));

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
              Recibimos tu solicitud. Te contactaremos por correo en menos de 24 horas.
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
          <>
            <div className="mb-8 flex items-center justify-center gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border font-heading text-sm font-semibold ${
                      i <= step ? "border-primary text-primary" : "border-line text-secondary"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {i < 2 && <span className={`h-px w-8 ${i < step ? "bg-primary" : "bg-line"}`} />}
                </div>
              ))}
            </div>

            {step === 0 && (
              <div>
                <h3 className="text-center font-heading text-2xl font-bold uppercase text-foreground">
                  ¿Qué te interesa cotizar?
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {options.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSelection(opt.value)}
                      className={`rounded-md border p-4 text-left transition-colors ${
                        selection === opt.value
                          ? "border-primary bg-primary/10"
                          : "border-line hover:border-primary/50"
                      }`}
                    >
                      <span
                        className={`block font-heading text-sm font-semibold uppercase tracking-[0.02em] ${
                          selection === opt.value ? "text-foreground" : "text-secondary"
                        }`}
                      >
                        {opt.value}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  disabled={!canAdvanceStep0}
                  onClick={() => setStep(1)}
                  className="btn-fill font-heading mt-8 w-full rounded-md border py-4 text-sm font-semibold uppercase tracking-[0.1em] text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <span className="btn-fill-content">Continuar</span>
                </button>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="text-center font-heading text-2xl font-bold uppercase text-foreground">
                  ¿Cuál es el giro de tu negocio?
                </h3>
                {selection && (
                  <p className="mt-2 text-center text-sm text-secondary">
                    Cotizando: <span className="text-primary">{selection}</span>
                  </p>
                )}

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {niches.map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setNiche(n)}
                      className={`rounded-md border p-4 text-left text-sm transition-colors ${
                        niche === n
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-line text-secondary hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="rounded-md border border-line px-8 py-4 font-heading text-sm font-semibold uppercase tracking-[0.1em] text-secondary transition-colors hover:text-foreground"
                  >
                    Atrás
                  </button>
                  <button
                    type="button"
                    disabled={!canAdvanceStep1}
                    onClick={() => setStep(2)}
                    className="btn-fill font-heading flex-1 rounded-md border py-4 text-sm font-semibold uppercase tracking-[0.1em] text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="btn-fill-content">Continuar</span>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-center font-heading text-2xl font-bold uppercase text-foreground">
                  Tus datos de contacto
                </h3>

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
                  <textarea
                    placeholder="Mensaje (opcional)"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <p className="mt-4 text-xs leading-relaxed text-secondary">
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
                  <p className="mt-4 text-sm text-red-400">
                    No pudimos enviar tu solicitud. Intenta de nuevo en unos segundos.
                  </p>
                )}

                <div className="mt-8 flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-md border border-line px-8 py-4 font-heading text-sm font-semibold uppercase tracking-[0.1em] text-secondary transition-colors hover:text-foreground"
                  >
                    Atrás
                  </button>
                  <button
                    type="button"
                    disabled={!canSubmit || status === "sending"}
                    onClick={handleSubmit}
                    className="btn-fill font-heading flex-1 rounded-md border py-4 text-sm font-semibold uppercase tracking-[0.1em] text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="btn-fill-content">
                      {status === "sending" ? "Enviando..." : "Enviar Cotización"}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        </div>
      </div>
    </div>
  );
}
