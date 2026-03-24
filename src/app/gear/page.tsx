import type { Metadata } from "next";
import Link from "next/link";

import { BlurFade } from "@/components/magicui/blur-fade";
import { FeatureCard } from "@/components/marketing/feature-card";
import { IllustrationPanel } from "@/components/marketing/illustration-panel";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { gearPage } from "@/content/site-content";

export const metadata: Metadata = buildMetadata({
  title: "The Gear | Remote Creations",
  description: "Services and capabilities for storefronts, payments, bookings, and practical business software.",
  path: "/gear"
});

export default function GearPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <BlurFade className="space-y-6" delay={0.05} duration={0.9} viewportAmount={0.2}>
            <div className="inline-flex items-center rounded-full bg-brand-sand px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal/78">
              {gearPage.hero.badge}
            </div>
            <h1 className="max-w-4xl font-heading text-5xl leading-[1.04] text-brand-navy md:text-7xl">
              {gearPage.hero.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-brand-teal/82 md:text-xl">{gearPage.hero.description}</p>
          </BlurFade>

          <BlurFade delay={0.16} duration={0.95} viewportAmount={0.2}>
            <IllustrationPanel
              icon="compass"
              eyebrow="Local growth partners"
              title="Dependable digital infrastructure without the agency overhead."
              description="Projects stay focused on the tools that actually help you sell more, book faster, or simplify operations."
              value={gearPage.hero.stat.value}
              valueLabel={gearPage.hero.stat.label}
              className="min-h-[460px]"
            />
          </BlurFade>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="The Gear List" title="Essential digital tools for the modern business owner." className="mb-10" />
        <div className="grid gap-6 md:grid-cols-3">
          {gearPage.gearList.map((item, index) => (
            <BlurFade
              key={item.title}
              delay={0.08 + index * 0.08}
              duration={0.92}
              viewportAmount={0.2}
              className={item.className}
            >
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                chips={item.chips}
                listItems={item.listItems}
                note={item.note}
                tone={item.tone}
              />
            </BlurFade>
          ))}

          <BlurFade delay={0.32} duration={0.92} viewportAmount={0.2} className="md:col-span-3">
            <Card className="border border-brand-navy/10 bg-brand-sand/75">
              <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                <div className="max-w-3xl space-y-3">
                  <h2 className="font-heading text-3xl text-brand-navy">{gearPage.supportCard.title}</h2>
                  <p className="text-brand-teal/82">{gearPage.supportCard.description}</p>
                </div>
                <Button asChild variant="default">
                  <Link href={gearPage.supportCard.ctaHref}>{gearPage.supportCard.ctaLabel}</Link>
                </Button>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </Section>

      <Section className="bg-white/70">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow={gearPage.commitments.eyebrow}
            title={gearPage.commitments.title}
            description={gearPage.commitments.description}
          />

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {gearPage.commitments.items.map((item, index) => (
                <BlurFade key={item.title} delay={0.08 + index * 0.08} duration={0.9} viewportAmount={0.2}>
                  <FeatureCard icon={item.icon} title={item.title} description={item.description} tone="muted" />
                </BlurFade>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {gearPage.commitments.stats.map((stat, index) => (
                <BlurFade key={stat.label} delay={0.18 + index * 0.05} duration={0.86} viewportAmount={0.2}>
                  <div className="rounded-[1.5rem] border border-brand-navy/10 bg-white/90 px-5 py-6">
                    <p className="font-heading text-3xl text-brand-navy">{stat.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal/70">{stat.label}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
