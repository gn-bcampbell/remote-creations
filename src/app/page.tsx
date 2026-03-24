import Link from "next/link";

import { BlurFade } from "@/components/magicui/blur-fade";
import { FeatureCard } from "@/components/marketing/feature-card";
import { IllustrationPanel } from "@/components/marketing/illustration-panel";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CTASection } from "@/components/shared/cta-section";
import { ProjectCard } from "@/components/shared/project-card";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";
import { basecampPage } from "@/content/site-content";

const taperedDelay = (index: number, base = 0.1) => base + index * 0.14 + index * index * 0.03;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="topo-pattern absolute inset-0 opacity-40" />
        <div className="container relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <BlurFade className="space-y-8" delay={0.05} duration={0.9} viewportAmount={0.15}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal/80">
              <span className="h-2 w-2 rounded-full bg-brand-teal" />
              {basecampPage.hero.badge}
            </div>
            <div className="space-y-6">
              <h1 className="max-w-4xl font-heading text-5xl leading-[1.02] text-brand-navy md:text-7xl">
                {basecampPage.hero.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-brand-teal/82 md:text-xl">{basecampPage.hero.description}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="accent" size="lg">
                <Link href={basecampPage.hero.primaryCta.href}>{basecampPage.hero.primaryCta.label}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={basecampPage.hero.secondaryCta.href}>{basecampPage.hero.secondaryCta.label}</Link>
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.18} duration={0.95} viewportAmount={0.15}>
            <IllustrationPanel
              icon="mountain"
              eyebrow="Business-ready systems"
              title="Storefronts, payments, and internal tooling built with a steady pace."
              description="The stack stays as lean as it can be without cutting corners, and the delivery model stays visible from scope through launch."
              className="min-h-[520px]"
            >
              <div className="w-fit rounded-[1.5rem] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12 font-heading text-xl text-white">
                    $
                  </span>
                  <div>
                    <p className="font-heading text-2xl">{basecampPage.hero.highlight.title}</p>
                    <p className="text-sm text-white/72">{basecampPage.hero.highlight.description}</p>
                  </div>
                </div>
              </div>
            </IllustrationPanel>
          </BlurFade>
        </div>
      </section>

      <Section className="border-y border-brand-navy/10 bg-white/65">
        <SectionHeading
          eyebrow={basecampPage.methodology.eyebrow}
          title={basecampPage.methodology.title}
          className="mb-10"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {basecampPage.methodology.items.map((item, index) => (
            <BlurFade
              key={item.title}
              delay={taperedDelay(index, 0.1)}
              duration={0.92}
              viewportAmount={0.2}
              className={index === 0 || index === 3 ? "md:col-span-2" : undefined}
            >
              <FeatureCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                tone={item.tone}
                note={item.note}
                quote={item.quote}
                align={item.align}
              />
            </BlurFade>
          ))}
        </div>
      </Section>

      <Section id="projects">
        <SectionHeading
          eyebrow={basecampPage.portfolio.eyebrow}
          title={basecampPage.portfolio.title}
          description={basecampPage.portfolio.description}
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <BlurFade key={project.slug} delay={taperedDelay(index, 0.14)} duration={0.94} viewportAmount={0.2}>
              <ProjectCard project={project} />
            </BlurFade>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-sand/35">
        <SectionHeading
          eyebrow={basecampPage.specialties.eyebrow}
          title={basecampPage.specialties.title}
          description={basecampPage.specialties.description}
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {basecampPage.specialties.items.map((item, index) => (
            <BlurFade key={item.title} delay={taperedDelay(index, 0.08)} duration={0.9} viewportAmount={0.2}>
              <div className="h-full rounded-[1.75rem] border border-brand-navy/10 bg-white/80 p-6 shadow-[0_18px_40px_-36px_rgba(12,45,41,0.55)]">
                <h3 className="font-heading text-2xl text-brand-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-teal/82">{item.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </Section>

      <CTASection {...basecampPage.cta} />
    </>
  );
}
