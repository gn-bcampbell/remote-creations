"use client";

import { useTheme } from "next-themes";

import { ShineBorder } from "@/components/magicui/shine-border";

type ThemedShineBorderProps = Omit<React.ComponentProps<typeof ShineBorder>, "shineColor"> & {
  lightShineColor?: string | string[];
  darkShineColor?: string | string[];
};

export function ThemedShineBorder({
  lightShineColor = "black",
  darkShineColor = "white",
  ...props
}: ThemedShineBorderProps) {
  const { resolvedTheme, theme } = useTheme();
  const currentTheme = resolvedTheme ?? theme;

  return <ShineBorder {...props} shineColor={currentTheme === "dark" ? darkShineColor : lightShineColor} />;
}
