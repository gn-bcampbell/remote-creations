import Link from "next/link";
import { Check } from "lucide-react";

import { BlurFade } from "@/components/magicui/blur-fade";
import { CTASection } from "@/components/shared/cta-section";
import { ProjectCard } from "@/components/shared/project-card";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/content/projects";
import { HeroLargeTypography } from "@/components/shared/hero-large-typography";

const labelClassName = "text-sm font-semibold tracking-[0.08em] text-brand-teal/70";

const serviceCards = [
  {
    title: "Custom websites",
    // copy:
    //   "Well-structured websites for businesses that need to look established online and make it easy for people to get in touch.",
    items: ["Structure and messaging", "Design, Build, and Hosting", "Low-maintenance content setup"],
    className: "md:translate-y-10"
  },
  {
    title: "Payment and Bookings",
    // copy:
    //   "Forms, bookings, payments, and follow-up journeys that are easier for customers to complete and easier for you to manage.",
    items: ["Booking journeys", "Stripe and email integrations", "Lead capture clean-up"]
  },
  {
    title: "Internal tools",
    // copy:
    //   "Dashboards and workflow improvements that reduce repetitive admin without turning day-to-day work into a heavier process.",
    items: ["Operations dashboards", "Client portals", "Targeted product iterations"],
    className: "md:-translate-y-6"
  }
];

const fitPoints = [
  "You want one reliable person to think, design, and build.",
  "You want guidance in plain language, not agency jargon.",
  "You want a straightforward process with room to grow."
];

const workingStyle = [
  {
    title: "Straight-forward communication",
    copy: "We'll work together throughout the project, for fast iterative progress.",
    className: "sm:col-span-2"
  },
  {
    title: "Measured direction",
    copy: "I would rather recommend the right next step than oversell a bigger build."
  },
  {
    title: "Clean handover",
    copy: "You get something maintainable, documented where it needs to be, and easy to keep using."
  }
];

const selectedProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <HeroLargeTypography />

      <Section className="relative -mt-4 bg-brand-sand/72 pb-20 pt-24 md:-mt-8 md:pb-24 md:pt-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <BlurFade className="space-y-6 lg:sticky lg:top-32 lg:self-start" delay={0.05} duration={1.8} viewportAmount={0.2}>
            <div className="space-y-4">
              <p className="inline-flex rounded-full border border-brand-navy/10 bg-card px-3 py-1 text-xs uppercase tracking-[0.16em] text-brand-teal">
                Services
              </p>
              <h2 className="max-w-xl font-heading text-4xl leading-[0.96] text-brand-navy md:text-5xl">
                What&apos;s on offer?
              </h2>
              <p className="max-w-xl text-lg leading-8 text-brand-teal/86">
                Some projects need a new website. Some need payment support or an internal tool to cut out the admin.
              </p>
              <p className="max-w-xl text-lg leading-8 text-brand-teal/86">
                I help you understand any gaps, and together we focus on solutions that will make the biggest difference.
              </p>
            </div>

            <Card className="max-w-xl border-brand-navy/10 bg-white/76 dark:bg-card/82">
              <CardContent className="space-y-5 p-6">
                <p className={labelClassName}>Usually a good fit when</p>
                <ul className="space-y-3">
                  {fitPoints.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-brand-teal/84">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand-forest" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </BlurFade>

          <div className="grid gap-5 md:grid-cols-[1.02fr_0.98fr]">
            {serviceCards.map((service, index) => (
              <BlurFade
                key={service.title}
                className={service.className}
                delay={0.12 + index * 0.12}
                duration={0.96}
                viewportAmount={0.18}
              >
                <Card className="relative h-full overflow-hidden border-brand-navy/10 bg-white/78 dark:bg-card/82">
                  <CardContent className="space-y-5 p-7">
                    <div className="space-y-3">
                      {/* <p className={labelClassName}>Service</p> */}
                      <h3 className="font-heading text-[2rem] leading-[1.02] text-brand-navy">{service.title}</h3>
                      {/* <p className="text-sm leading-7 text-brand-teal/84">{service.copy}</p> */}
                    </div>

                    <ul className="space-y-3">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-navy/86">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange/85" />
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

      <Section className="pb-20 pt-20 md:pb-24 md:pt-24">
        <BlurFade className="mb-10 flex flex-wrap items-end justify-between gap-6" delay={0.06} duration={0.9} viewportAmount={0.2}>
          <div className="max-w-2xl space-y-4">
            <p className="inline-flex rounded-full border border-brand-navy/10 bg-card px-3 py-1 text-xs uppercase tracking-[0.16em] text-brand-teal">
              Selected work
            </p>
            <h2 className="font-heading text-4xl leading-[0.96] text-brand-navy md:text-5xl">
              Portfolio of work
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/work">See all case studies</Link>
          </Button>
        </BlurFade>

        <div className="mx-auto flex max-w-[74rem] flex-wrap justify-center gap-6 lg:gap-8">
          {selectedProjects.map((project, index) => (
            <BlurFade
              key={project.slug}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)]"
              delay={0.12 + index * 0.1}
              duration={0.96}
              viewportAmount={0.16}
            >
              <ProjectCard project={project} />
            </BlurFade>
          ))}
        </div>
      </Section>

      <Section className="pb-10 pt-20 md:pb-16 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <BlurFade className="space-y-5" delay={0.06} duration={0.9} viewportAmount={0.2}>
            <p className="inline-flex rounded-full border border-brand-navy/10 bg-card px-3 py-1 text-xs uppercase tracking-[0.16em] text-brand-teal">
              Working style
            </p>
            <h2 className="max-w-xl font-heading text-4xl leading-[0.96] text-brand-navy md:text-5xl">
              Clear communication & steady delivery
            </h2>
            <p className="max-w-xl text-lg leading-8 text-brand-teal/86">
              I keep a small client roster so projects get proper attention. That means fewer competing priorities,
              simpler conversations, and more time spent making the work better.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Small client roster", "Remote-first workflow", "Focused handover support"].map((item) => (
                <Badge key={item} variant="secondary" className="bg-brand-forest/8 tracking-[0.05em]">
                  {item}
                </Badge>
              ))}
            </div>
          </BlurFade>

          <div className="grid gap-5 sm:grid-cols-2">
            {workingStyle.map((item, index) => (
              <BlurFade
                key={item.title}
                className={item.className}
                delay={0.14 + index * 0.12}
                duration={0.92}
                viewportAmount={0.18}
              >
                <Card className="h-full border-brand-navy/10">
                  <CardContent className="space-y-4 p-7">
                    <h3 className="font-heading text-[1.9rem] leading-[1.02] text-brand-navy">{item.title}</h3>
                    <p className="text-sm leading-7 text-brand-teal/84">{item.copy}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Need a reliable developer without agency overhead?"
        description="If you need a new site, a product improvement, or a cleaner customer journey, send me a note."
      />
    </>
  );
}
