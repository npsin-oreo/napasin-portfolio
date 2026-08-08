"use client";

import { useEffect, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

const emptySubscribe = () => () => {};

// A soft olive circle that trails the cursor with a slight spring lag, fades
// out when the pointer rests, and swells over interactive elements (links,
// buttons). The native cursor is never hidden. Mouse-only (pointer: fine),
// disabled under reduced motion, and multiply-blended so it reads as a wash
// of ink on the paper rather than a glow.
export function CursorGlow() {
  const reduce = useReducedMotion();
  // Mouse-only devices; false during SSR.
  const finePointer = useSyncExternalStore(
    emptySubscribe,
    () => window.matchMedia("(pointer: fine)").matches,
    () => false
  );
  const enabled = finePointer && !reduce;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 35, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 350, damping: 35, mass: 0.5 });
  const scale = useSpring(1, { stiffness: 250, damping: 25 });
  const opacity = useSpring(0, { stiffness: 180, damping: 30 });

  useEffect(() => {
    if (!enabled) return;

    let idle: ReturnType<typeof setTimeout>;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      opacity.set(1);
      const interactive = (e.target as Element | null)?.closest?.("a, button, [role='button']");
      scale.set(interactive ? 2.2 : 1);
      clearTimeout(idle);
      idle = setTimeout(() => opacity.set(0), 1300);
    };
    const onLeave = () => opacity.set(0);
    const onDown = () => scale.set(0.8);
    const onUp = (e: MouseEvent) => {
      const interactive = (e.target as Element | null)?.closest?.("a, button, [role='button']");
      scale.set(interactive ? 2.2 : 1);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      clearTimeout(idle);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y, scale, opacity]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed -left-6 -top-6 z-[90] size-12 rounded-full bg-accent/[0.12] mix-blend-multiply blur-[6px]"
      style={{ x: sx, y: sy, scale, opacity }}
    />
  );
}
