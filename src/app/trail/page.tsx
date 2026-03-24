import type { Metadata } from "next";

import { BlurFade } from "@/components/magicui/blur-fade";
import { IllustrationPanel } from "@/components/marketing/illustration-panel";
import { ProcessStep } from "@/components/marketing/process-step";
import { CTASection } from "@/components/shared/cta-section";
import { Section } from "@/components/shared/section";
import { buildMetadata } from "@/lib/seo";
import { trailPage } from "@/content/site-content";

export const metadata: Metadata = buildMetadata({
  title: "The Trail | Remote Creations Process",
  description: "A clear, stage-by-stage delivery path from discovery through launch.",
  path: "/trail"
});

export default function TrailPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <BlurFade className="space-y-6" delay={0.05} duration={0.92} viewportAmount={0.2}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal/70">{trailPage.hero.badge}</p>
            <h1 className="max-w-4xl font-heading text-5xl leading-[1.03] text-brand-navy md:text-7xl">{trailPage.hero.title}</h1>
            <p className="max-w-2xl text-lg leading-8 text-brand-teal/82 md:text-xl">{trailPage.hero.description}</p>
            <div className="inline-flex rounded-full bg-brand-sand px-4 py-2 text-sm text-brand-navy/90">
              {trailPage.hero.trustLabel}
            </div>
          </BlurFade>

          <BlurFade delay={0.16} duration={0.96} viewportAmount={0.2}>
            <IllustrationPanel
              icon="map"
              eyebrow="Current elevation"
              title={trailPage.hero.currentElevation.value}
              description="A clear route from scope through launch, with regular checkpoints and visible progress."
              value={trailPage.hero.currentElevation.value}
              valueLabel={trailPage.hero.currentElevation.label}
              className="min-h-[500px]"
            />
          </BlurFade>
        </div>
      </section>

      <Section className="bg-white/70">
        <div className="space-y-8">
          {trailPage.steps.map((step, index) => (
            <BlurFade key={step.number} delay={0.08 + index * 0.04} duration={0.94} viewportAmount={0.15}>
              <ProcessStep step={step} reverse={index % 2 === 1} />
            </BlurFade>
          ))}
        </div>
      </Section>

      <CTASection {...trailPage.cta} />
    </>
  );
}
