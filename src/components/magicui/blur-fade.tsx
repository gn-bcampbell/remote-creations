"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BlurFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  inView?: boolean;
};

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.55,
  yOffset = 10,
  inView = true
}: BlurFadeProps) {
  return (
    <AnimatePresence>
      {inView ? (
        <motion.div
          initial={{ opacity: 0, y: yOffset, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: yOffset / 2, filter: "blur(4px)" }}
          transition={{ duration, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
          className={cn(className)}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
