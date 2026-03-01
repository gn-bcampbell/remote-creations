"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "light" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast border border-brand-navy/10 bg-card text-brand-navy shadow-lg rounded-2xl font-body",
          description: "group-[.toast]:text-brand-teal/85",
          actionButton: "group-[.toast]:bg-brand-orange group-[.toast]:text-white",
          cancelButton: "group-[.toast]:bg-brand-navy/10 group-[.toast]:text-brand-navy"
        }
      }}
      {...props}
    />
  );
};

export { Toaster };
