import Link from "next/link";

import { BlurFade } from "@/components/magicui/blur-fade";
import { CTASection } from "@/components/shared/cta-section";
import { HeroLargeTypography } from "@/components/shared/hero-large-typography";
import { ProjectCard } from "@/components/shared/project-card";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/content/projects";

const services = [
  {
    title: "Websites",
    copy: "Clear, fast websites that help people understand your offer and take action."
  },
  {
    title: "Product Features",
    copy: "New features and UX improvements for product owners who need steady delivery without hiring full-time."
  },
  {
    title: "Technical Cleanup",
    copy: "Refactors and performance improvements to make your product easier to maintain."
  }
];

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
    copy: "You work directly with me from planning through delivery, without account-management layers."
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
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <BlurFade key={service.title} delay={0.04 * index}>
              <Card className="h-full">
                <CardContent className="space-y-3 p-7">
                  <h2 className="font-heading text-3xl text-brand-navy">{service.title}</h2>
                  <p className="text-brand-teal/85">{service.copy}</p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-sand/40">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.16em] text-brand-teal/75">Featured Work</p>
            <h2 className="font-heading text-4xl text-brand-navy md:text-5xl">Selected projects with practical outcomes.</h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/work">View all work</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((project, index) => (
            <BlurFade key={project.slug} delay={0.06 * index}>
              <ProjectCard project={project} />
            </BlurFade>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {process.map((step, index) => (
            <BlurFade key={step.title} delay={0.06 * index}>
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
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.16em] text-brand-teal/75">Working Style</p>
            <h2 className="font-heading text-4xl text-brand-navy md:text-5xl">Calm delivery, clear communication, no bloat</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {collaboration.map((item, index) => (
              <BlurFade key={item.title} delay={0.06 * index}>
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
        title="Need a dependable developer partner?"
        description="I work with a small number of clients at a time, so each project gets focused attention and steady delivery."
      />
    </>
  );
}
