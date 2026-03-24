import Link from "next/link";

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
  primaryLabel = "Start Ascent",
  primaryHref = "/contact",
  secondaryLabel = "View Work",
  secondaryHref = "/work"
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="alpine-gradient relative overflow-hidden rounded-[2rem] border border-brand-navy/10 px-8 py-12 text-white md:px-12 md:py-16">
          <div className="topo-pattern absolute inset-0 opacity-15" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-heading text-4xl leading-tight md:text-5xl">{title}</h2>
              <p className="text-lg text-white/76">{description}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href={primaryHref}>{primaryLabel}</Link>
              </Button>
              {secondaryLabel ? (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
