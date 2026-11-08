"use client";

import type { ReactNode } from "react";
import { useQuoteModal } from "@/components/QuoteModalContext";

/** Botón que abre el cotizador (el mismo modal de Development) con los colores de Creative. */
export default function CreativeQuoteButton({
  type,
  selection,
  className,
  children,
}: {
  type: "paquete" | "servicio";
  selection: string;
  className: string;
  children: ReactNode;
}) {
  const { open } = useQuoteModal();

  return (
    <button type="button" onClick={() => open({ brand: "creative", type, selection })} className={className}>
      {children}
    </button>
  );
}
