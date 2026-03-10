import Link from "next/link";

import { ThemedShineBorder } from "@/components/magicui/themed-shine-border";
import { Button } from "@/components/ui/button";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  description,
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel = "View Work",
  secondaryHref = "/work"
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-brand-sand/50 p-8 md:p-12">
          <ThemedShineBorder
            borderWidth={1.5}
            duration={15}
            className="opacity-65"
            lightShineColor={["hsl(var(--brand-orange) / 0.85)", "hsl(var(--brand-teal) / 0.7)"]}
            darkShineColor={["white", "hsl(var(--brand-orange) / 0.9)"]}
          />
          <div className="max-w-3xl space-y-4">
            <h2 className="font-heading text-4xl leading-tight text-brand-navy md:text-5xl">{title}</h2>
            <p className="text-lg text-brand-teal/85">{description}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
