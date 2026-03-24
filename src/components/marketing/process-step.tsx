import Link from "next/link";

import type { TrailStep } from "@/content/site-content";
import { cn } from "@/lib/utils";

import { IllustrationPanel } from "@/components/marketing/illustration-panel";
import { AlpineIcon } from "@/components/marketing/alpine-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ProcessStepProps = {
  step: TrailStep;
  reverse?: boolean;
};

export function ProcessStep({ step, reverse = false }: ProcessStepProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <Card className={cn("order-2 overflow-hidden bg-white/90", reverse && "lg:order-2", !reverse && "lg:order-1")}>
        <CardContent className="space-y-6 p-8 md:p-10">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-sm font-semibold tracking-[0.2em] text-white">
              {step.number}
            </span>
            <div>
              <p className="font-heading text-3xl text-brand-navy">{step.title}</p>
              <p className="text-sm uppercase tracking-[0.18em] text-brand-teal/70">{step.subtitle}</p>
            </div>
          </div>

          <p className="text-base leading-8 text-brand-teal/84">{step.description}</p>

          {step.highlights?.length ? (
            <ul className="space-y-3">
              {step.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3 text-sm font-medium text-brand-navy">
                  <AlpineIcon name="check" className="h-4 w-4 text-brand-teal" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {step.quote ? (
            <div className="rounded-[1.5rem] border border-brand-navy/10 bg-brand-sand/60 px-5 py-4 text-sm italic text-brand-teal/85">
              {step.quote}
            </div>
          ) : null}

          {step.metrics?.length ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {step.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.25rem] border border-brand-navy/10 bg-brand-sand/60 px-5 py-4">
                  <p className="font-heading text-3xl text-brand-navy">{metric.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal/70">{metric.label}</p>
                </div>
              ))}
            </div>
          ) : null}

          {step.cta ? (
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={step.cta.href}>{step.cta.label}</Link>
            </Button>
          ) : null}
        </CardContent>
      </Card>

      <IllustrationPanel
        icon={step.icon}
        title={step.title}
        description={step.subtitle}
        value={step.number}
        valueLabel="Stage"
        className={cn("order-1 min-h-[320px]", reverse && "lg:order-1", !reverse && "lg:order-2")}
      />
    </div>
  );
}
