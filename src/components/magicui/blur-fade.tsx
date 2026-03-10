"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: number;
  taper?: number;
  scroll?: boolean;
  once?: boolean;
  viewportAmount?: number;
  viewportMargin?: string;
  inView?: boolean;
};

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.72,
  yOffset = 12,
  blur = 8,
  taper = 0.015,
  scroll = true,
  once = true,
  viewportAmount = 0.28,
  viewportMargin = "0px 0px -8% 0px",
  inView = true
}: BlurFadeProps) {
  const reduceMotion = useReducedMotion();
  const initialState = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: yOffset, filter: `blur(${blur}px)`, scale: 1 - taper };
  const revealState = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 };
  const exitState = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: yOffset / 2, filter: `blur(${Math.max(2, blur - 3)}px)`, scale: 1 - taper / 2 };
  const revealProps = scroll
    ? { whileInView: revealState, viewport: { once, amount: viewportAmount, margin: viewportMargin } }
    : { animate: revealState };

  return (
    <AnimatePresence>
      {inView ? (
        <motion.div
          initial={initialState}
          exit={exitState}
          transition={{ duration: reduceMotion ? 0.01 : duration, delay, ease: [0.16, 1, 0.3, 1] }}
          className={cn(className)}
          {...revealProps}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
