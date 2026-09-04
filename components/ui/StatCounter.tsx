"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type StatCounterProps = {
  value: string; // ex: "9+", "3", "18+"
  label: string;
};

export function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [display, setDisplay] = useState(() => {
    if (numeric === null) return value;
    return prefersReducedMotion() ? String(numeric) : "0";
  });

  useEffect(() => {
    if (!isInView || numeric === null || prefersReducedMotion()) return;

    const controls = animate(0, numeric, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });

    return () => controls.stop();
  }, [isInView, numeric]);

  return (
    <div>
      <p ref={ref} className="text-2xl font-semibold tracking-tight md:text-3xl">
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
