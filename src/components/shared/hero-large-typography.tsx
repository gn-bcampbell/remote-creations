import Link from "next/link";

import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";

export function HeroLargeTypography() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 md:pb-2 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(46,90,61,0.08),transparent_45%)] dark:bg-[radial-gradient(circle_at_80%_0%,rgba(79,111,82,0.14),transparent_42%)]" />
      <div className="container relative space-y-10">
        <BlurFade className="space-y-6" delay={0.05} duration={1.8}>
          <p className="inline-flex rounded-full border border-brand-navy/10 bg-card px-3 py-1 text-xs uppercase tracking-[0.16em] text-brand-teal">
            Solo freelance developer
          </p>
          <h1 className="max-w-5xl font-heading text-5xl leading-[0.95] text-brand-navy md:text-7xl lg:text-8xl">
            Reliable websites and apps for growing businesses.
          </h1>
          <p className="max-w-2xl text-lg text-brand-teal/85 md:text-xl">
            I help small and medium businesses build software that feels clear, fast, and dependable .
          </p>
        </BlurFade>

        <BlurFade className="flex flex-wrap gap-4" delay={0.24} duration={0.96}>
          <Button asChild size="lg" variant="outline">
            <Link href="/work">View Work</Link>
          </Button>
          <Button asChild size="lg" variant="accent">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </BlurFade>
      </div>
    </section>
  );
}
