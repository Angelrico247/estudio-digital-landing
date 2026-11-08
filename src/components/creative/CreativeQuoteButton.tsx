"use client";

import type { ReactNode } from "react";
import { useQuoteModal } from "@/components/QuoteModalContext";

/** Botón que abre el cotizador (el mismo modal de Development) con los colores de Creative. */
export default function CreativeQuoteButton({
  type,
  selection,
  label,
  className,
  children,
}: {
  type: "paquete" | "servicio";
  selection: string;
  /** Texto visible del botón: el nombre accesible lo repite junto al paquete o servicio. */
  label: string;
  className: string;
  children: ReactNode;
}) {
  const { open } = useQuoteModal();

  return (
    <button
      type="button"
      aria-label={`${label} ${selection}`}
      onClick={() => open({ brand: "creative", type, selection })}
      className={className}
    >
      {children}
    </button>
  );
}
