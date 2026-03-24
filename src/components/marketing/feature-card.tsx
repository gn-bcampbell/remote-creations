import type { ReactNode } from "react";

import type { AlpineIconName } from "@/content/site-content";
import { cn } from "@/lib/utils";

import { AlpineIcon } from "@/components/marketing/alpine-icon";
import { Card, CardContent } from "@/components/ui/card";

type FeatureCardProps = {
  icon: AlpineIconName;
  title: string;
  description: string;
  tone?: "default" | "dark" | "muted";
  align?: "left" | "center";
  chips?: string[];
  listItems?: string[];
  note?: string;
  quote?: string;
  footer?: ReactNode;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  tone = "default",
  align = "left",
  chips,
  listItems,
  note,
  quote,
  footer,
  className
}: FeatureCardProps) {
  const dark = tone === "dark";

  return (
    <Card
      className={cn(
        "relative h-full overflow-hidden border border-brand-navy/10 bg-white/90 backdrop-blur-sm",
        dark && "bg-brand-navy text-white",
        tone === "muted" && "bg-brand-sand/70",
        className
      )}
    >
      <div className="topo-pattern absolute inset-0 opacity-35" />
      <div className={cn("absolute right-5 top-5 opacity-8", dark ? "text-white" : "text-brand-navy")}>
        <AlpineIcon name={icon} className="h-20 w-20" />
      </div>
      <CardContent className={cn("relative flex h-full flex-col gap-6 p-8", align === "center" && "text-center")}>
        <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-2xl", dark ? "bg-white/12" : "bg-brand-sand text-brand-navy")}>
          <AlpineIcon name={icon} className="h-6 w-6" />
        </div>
        <div className="space-y-3">
          <h3 className={cn("font-heading text-3xl leading-tight", dark ? "text-white" : "text-brand-navy")}>{title}</h3>
          <p className={cn("text-sm leading-7 md:text-base", dark ? "text-white/72" : "text-brand-teal/82")}>{description}</p>
        </div>

        {chips?.length ? (
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className={cn(
                  "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
                  dark ? "bg-white/10 text-white/80" : "bg-brand-sand text-brand-navy/80"
                )}
              >
                {chip}
              </span>
            ))}
          </div>
        ) : null}

        {listItems?.length ? (
          <ul className="space-y-3">
            {listItems.map((item) => (
              <li
                key={item}
                className={cn("flex items-center gap-2 text-sm font-medium", dark ? "text-white/82" : "text-brand-navy")}
              >
                <AlpineIcon name="check" className={cn("h-4 w-4", dark ? "text-white/70" : "text-brand-teal")} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {quote ? (
          <div className={cn("mt-auto rounded-[1.5rem] border px-5 py-4 text-sm italic", dark ? "border-white/10 bg-white/5 text-white/82" : "border-brand-navy/10 bg-brand-sand/60 text-brand-teal/85")}>
            {quote}
          </div>
        ) : null}

        {note ? (
          <div className={cn("mt-auto inline-flex items-center gap-2 border-t pt-4 text-xs font-semibold uppercase tracking-[0.2em]", dark ? "border-white/10 text-white/70" : "border-brand-navy/10 text-brand-teal/70")}>
            <span className={cn("h-2 w-2 rounded-full", dark ? "bg-white/55" : "bg-brand-teal")} />
            <span>{note}</span>
          </div>
        ) : null}

        {footer ? <div className="mt-auto">{footer}</div> : null}
      </CardContent>
    </Card>
  );
}
