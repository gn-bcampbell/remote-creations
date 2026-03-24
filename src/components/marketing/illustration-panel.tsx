import type { ReactNode } from "react";

import type { AlpineIconName } from "@/content/site-content";
import { cn } from "@/lib/utils";

import { AlpineIcon } from "@/components/marketing/alpine-icon";

type IllustrationPanelProps = {
  icon: AlpineIconName;
  title: string;
  description: string;
  eyebrow?: string;
  value?: string;
  valueLabel?: string;
  className?: string;
  children?: ReactNode;
};

export function IllustrationPanel({
  icon,
  title,
  description,
  eyebrow,
  value,
  valueLabel,
  className,
  children
}: IllustrationPanelProps) {
  return (
    <div
      className={cn(
        "alpine-gradient relative overflow-hidden rounded-[2rem] border border-brand-navy/10 p-8 text-white shadow-[0_32px_70px_-42px_rgba(12,45,41,0.65)]",
        className
      )}
    >
      <div className="topo-pattern absolute inset-0 opacity-25" />
      <div className="absolute right-6 top-6 text-white/10">
        <AlpineIcon name={icon} className="h-40 w-40" />
      </div>
      <div className="relative flex h-full flex-col justify-between gap-10">
        <div className="space-y-4">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/68">{eyebrow}</p> : null}
          <h3 className="max-w-lg font-heading text-3xl leading-tight md:text-4xl">{title}</h3>
          <p className="max-w-lg text-base leading-7 text-white/74">{description}</p>
        </div>

        {value && valueLabel ? (
          <div className="w-fit rounded-[1.5rem] border border-white/10 bg-white/8 px-5 py-4 backdrop-blur-sm">
            <p className="font-heading text-3xl">{value}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/62">{valueLabel}</p>
          </div>
        ) : null}

        {children}
      </div>
    </div>
  );
}
