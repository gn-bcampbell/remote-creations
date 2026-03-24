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
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel = "View Work",
  secondaryHref = "/work"
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-navy/10 bg-brand-sand/82 p-8 shadow-[0_32px_70px_-38px_rgba(15,61,62,0.28)] md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,111,82,0.11),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(15,61,62,0.08),transparent_22%)]" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="inline-flex rounded-full border border-brand-navy/10 bg-card px-3 py-1 text-xs uppercase tracking-[0.16em] text-brand-teal">
                Working style
              </p>
              <h2 className="font-heading text-4xl leading-tight text-brand-navy md:text-5xl">{title}</h2>
              <p className="max-w-2xl text-lg leading-8 text-brand-teal/86">{description}</p>
              <p className="text-sm text-brand-teal/72">If you are still shaping the brief, that is fine. I can help with that too.</p>
            </div>
          </div>
          <div className="relative mt-8 flex flex-wrap gap-4">
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
