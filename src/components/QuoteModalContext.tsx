"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import QuoteModal from "./QuoteModal";

export type QuotePreset = {
  /** Qué marca abre el cotizador: define las opciones y los colores. Por defecto, Development. */
  brand?: "development" | "creative";
  type?: "paquete" | "servicio";
  /** Si viene, el cotizador salta directo al paso del giro. */
  selection?: string;
};

type QuoteModalContextValue = {
  open: (preset?: QuotePreset) => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<QuotePreset | null>(null);

  return (
    <QuoteModalContext.Provider
      value={{
        open: (p) => {
          setPreset(p ?? null);
          setIsOpen(true);
        },
      }}
    >
      {children}
      <QuoteModal isOpen={isOpen} preset={preset} onClose={() => setIsOpen(false)} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error("useQuoteModal debe usarse dentro de QuoteModalProvider");
  return ctx;
}
