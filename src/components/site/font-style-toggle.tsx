"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const STORAGE_KEY = "remote-creations-font-style";

const fontStyles = [
  { value: "default", label: "Fonts: Default System" },
  { value: "gallery", label: "Fonts: Gallery Modern" },
  { value: "friendly", label: "Fonts: Friendly Studio" },
  { value: "tech", label: "Fonts: Modern Tech" },
  { value: "editorial", label: "Fonts: Editorial Serif" },
  { value: "mono", label: "Fonts: Dev Mono" },
  { value: "outdoor", label: "Fonts: Outdoor / Human" },
  { value: "bold", label: "Fonts: Bold Display" },
  { value: "minimal", label: "Fonts: Minimal Clean" },
  { value: "retro-modern", label: "Fonts: Retro Modern" },
  { value: "playful-clean", label: "Fonts: Playful Clean" },
  { value: "reading", label: "Fonts: Reading Focus" }
] as const;

type FontStyle = (typeof fontStyles)[number]["value"];

function applyFontStyle(style: FontStyle) {
  if (typeof document === "undefined") return;

  if (style === "default") {
    document.documentElement.removeAttribute("data-font-style");
    return;
  }

  document.documentElement.setAttribute("data-font-style", style);
}

type FontStyleToggleProps = {
  className?: string;
};

export function FontStyleToggle({ className }: FontStyleToggleProps) {
  const [fontStyle, setFontStyle] = useState<FontStyle>("retro-modern");

  function onFontStyleChange(value: FontStyle) {
    setFontStyle(value);
    applyFontStyle(value);
    localStorage.setItem(STORAGE_KEY, value);
  }

  return (
    <label className={cn("hidden items-center md:flex", className)}>
      <span className="sr-only">Font style</span>
      <select
        aria-label="Select font style"
        value={fontStyle}
        onChange={(event) => onFontStyleChange(event.target.value as FontStyle)}
        className="h-9 rounded-full border border-brand-navy/20 bg-background px-3 text-xs text-brand-navy outline-none transition focus:border-brand-navy/40 focus:ring-2 focus:ring-brand-navy/20"
      >
        {fontStyles.map((style) => (
          <option key={style.value} value={style.value}>
            {style.label}
          </option>
        ))}
      </select>
    </label>
  );
}
