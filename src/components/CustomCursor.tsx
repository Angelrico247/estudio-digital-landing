"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function onMouseMove(e: MouseEvent) {
      ringRef.current?.style.setProperty(
        "transform",
        `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      );
    }

    function onOver(e: MouseEvent) {
      const isInteractive = (e.target as HTMLElement)?.closest("a, button, [role='button'], input, textarea, select");
      ringRef.current?.classList.toggle("cursor-ring-active", !!isInteractive);
    }

    document.body.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return <div ref={ringRef} className="cursor-ring" aria-hidden />;
}
