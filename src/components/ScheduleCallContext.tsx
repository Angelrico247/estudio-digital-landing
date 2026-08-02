"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import ScheduleCallModal from "./ScheduleCallModal";

type ScheduleCallContextValue = {
  open: () => void;
};

const ScheduleCallContext = createContext<ScheduleCallContextValue | null>(null);

export function ScheduleCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScheduleCallContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <ScheduleCallModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ScheduleCallContext.Provider>
  );
}

export function useScheduleCall() {
  const ctx = useContext(ScheduleCallContext);
  if (!ctx) throw new Error("useScheduleCall debe usarse dentro de ScheduleCallProvider");
  return ctx;
}
