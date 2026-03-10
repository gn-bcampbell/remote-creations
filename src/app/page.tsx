import Link from "next/link";

import { BlurFade } from "@/components/magicui/blur-fade";
import { ThemedShineBorder } from "@/components/magicui/themed-shine-border";
import { CTASection } from "@/components/shared/cta-section";
import { HeroLargeTypography } from "@/components/shared/hero-large-typography";
import { ProjectCard } from "@/components/shared/project-card";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/content/projects";

const servicePillars = [
  {
    title: "Design and Build",
    copy: "Bespoke website design paired with clear UI/UX that helps visitors become enquiries.",
    items: ["Hosting", "Bespoke website design", "UI/UX"]
  },
  {
    title: "Visibility",
    copy: "Improve how people find and trust your business with practical marketing and local search support.",
    items: ["SEO", "Google Business support", "Consultation and recommendations"]
  },
  {
    title: "Payments and User Access",
    copy: "Handle payments, and user accounts with reliable integrations and clear user flows.",
    items: ["Stripe Integration", "User access"]
  }
];

const taperedDelay = (index: number, base = 0.1) => base + index * 0.14 + index * index * 0.03;

const process = [
  {
    title: "1. Scope",
    copy: "I define outcomes, constraints, and success metrics with you before writing code."
  },
  {
    title: "2. Build",
    copy: "I ship in small milestones with clear progress updates and early feedback loops."
  },
  {
    title: "3. Support",
    copy: "After launch, I stay available for iteration, cleanup, and handover."
  }
];

const collaboration = [
  {
    title: "Small client roster",
    copy: "I typically work with around three active freelance clients, so your project gets focused attention."
  },
  {
    title: "Direct communication",
    copy: "You work directly with me from planning through delivery, without all the red tape."
  },
  {
    title: "Practical decisions",
    copy: "I help you choose the smallest reliable path so you can launch and iterate with confidence."
  }
];

export default function HomePage() {
  return (
    <>
      <HeroLargeTypography />
      <Section>
        <div className="space-y-10">
          <BlurFade delay={0.2} duration={0.96} viewportAmount={0.2}>
            <div className="relative overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-brand-sand/50 p-8 md:flex md:items-center md:justify-between md:gap-6">
              <ThemedShineBorder
                borderWidth={1.8}
                duration={12}
                className="opacity-85"
                lightShineColor={["hsl(var(--brand-orange) / 0.95)", "hsl(var(--brand-teal) / 0.8)", "hsl(var(--brand-navy) / 0.75)"]}
                darkShineColor={["white", "hsl(var(--brand-orange) / 0.95)", "hsl(var(--brand-teal) / 0.85)"]}
              />
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal/75">Free initial consultation</p>
                <h3 className="font-heading text-3xl text-brand-navy">Get clear direction before you spend a penny</h3>
                <p className="max-w-2xl text-brand-teal/85">
                  We&apos;ll get to know you and your business, then map what you actually need first. No pressure, just clear next steps.
                </p>
              </div>
              <Button asChild variant="accent" size="lg" className="mt-5 md:mt-0">
                <Link href="/contact">Book your free consultation</Link>
              </Button>
            </div>
          </BlurFade>
          <BlurFade delay={0.06} duration={0.9} viewportAmount={0.25}>
            <div className="flex flex-wrap items-end justify-between gap-6 pt-5">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm uppercase tracking-[0.16em] text-brand-teal/75">Services</p>
                <h2 className="font-heading text-4xl text-brand-navy md:text-5xl">What&apos;s on offer?</h2>
                <p className="max-w-2xl text-lg text-brand-teal/85 md:text-xl">
                  Practical websites to showcase your business and offer the right support where your business needs it.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid gap-6 lg:grid-cols-3">
            {servicePillars.map((pillar, index) => (
              <BlurFade key={pillar.title} delay={taperedDelay(index, 0.12)} duration={0.94} viewportAmount={0.2}>
                <Card className="relative h-full overflow-hidden">
                  {index === 1 ? (
                    <ThemedShineBorder
                      borderWidth={1.4}
                      duration={16}
                      className="opacity-55"
                      lightShineColor={["hsl(var(--brand-teal) / 0.7)", "hsl(var(--brand-orange) / 0.8)"]}
                      darkShineColor={["white", "hsl(var(--brand-orange) / 0.9)"]}
                    />
                  ) : null}
                  <CardContent className="space-y-4 p-7">
                    <h3 className="font-heading text-3xl text-brand-navy">{pillar.title}</h3>
                    <p className="text-brand-teal/85">{pillar.copy}</p>
                    <ul className="space-y-2">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-brand-teal/80 pl-4">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-orange/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-brand-sand/40">
        <BlurFade delay={0.08} duration={0.9} viewportAmount={0.25}>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm uppercase tracking-[0.16em] text-brand-teal/75">Featured Work</p>
              <h2 className="font-heading text-4xl text-brand-navy md:text-5xl">Selected projects with practical outcomes.</h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/work">View all work</Link>
            </Button>
          </div>
        </BlurFade>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <BlurFade key={project.slug} delay={taperedDelay(index, 0.16)} duration={0.94} viewportAmount={0.2}>
              <ProjectCard project={project} />
            </BlurFade>
          ))}
        </div>
      </Section>

      <Section>
        <BlurFade className="mb-10 max-w-3xl space-y-4" delay={0.08} duration={0.9} viewportAmount={0.25}>
          <p className="text-sm uppercase tracking-[0.16em] text-brand-teal/75">Process</p>
          <h2 className="font-heading text-4xl text-brand-navy md:text-5xl">Simple project flow with clear checkpoints.</h2>
        </BlurFade>
        <div className="grid gap-6 lg:grid-cols-3">
          {process.map((step, index) => (
            <BlurFade key={step.title} delay={taperedDelay(index, 0.14)} duration={0.94} viewportAmount={0.2}>
              <Card className="h-full">
                <CardContent className="space-y-3 p-7">
                  <h3 className="font-heading text-3xl text-brand-navy">{step.title}</h3>
                  <p className="text-brand-teal/85">{step.copy}</p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </Section>

      <Section>
        <div className="space-y-10">
          <BlurFade className="max-w-3xl space-y-4" delay={0.08} duration={0.9} viewportAmount={0.25}>
            <p className="text-sm uppercase tracking-[0.16em] text-brand-teal/75">Working Style</p>
            <h2 className="font-heading text-4xl text-brand-navy md:text-5xl">Calm delivery, clear communication, no bloat</h2>
          </BlurFade>
          <div className="grid gap-6 md:grid-cols-3">
            {collaboration.map((item, index) => (
              <BlurFade key={item.title} delay={taperedDelay(index, 0.14)} duration={0.94} viewportAmount={0.2}>
                <Card className="h-full">
                  <CardContent className="space-y-3 p-7">
                    <h3 className="font-heading text-3xl text-brand-navy">{item.title}</h3>
                    <p className="text-brand-teal/85">{item.copy}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Need a dependable developer?"
        description="I work with a small number of clients at a time, so each project gets focused attention and steady delivery."
      />
    </>
  );
}
