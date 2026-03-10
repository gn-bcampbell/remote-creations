import type { Metadata } from "next";

import { BlurFade } from "@/components/magicui/blur-fade";
import { CTASection } from "@/components/shared/cta-section";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | Remote Creations",
  description: "Freelance development services for websites, product features, and iterative improvements.",
  path: "/services"
});

const services = [
  {
    title: "Website Builds",
    details:
      "Custom marketing sites and content-focused pages built for speed, clarity, and conversion.",
    range: "Typical range: $2,500 - $9,000"
  },
  {
    title: "Product Feature Delivery",
    details:
      "Scoped feature work for existing products, including frontend architecture, UX refinement, and implementation.",
    range: "Typical range: $3,000 - $12,000"
  },
  {
    title: "Performance + Cleanup",
    details:
      "Refactors, frontend reliability improvements, and performance optimization for growing codebases.",
    range: "Typical range: $1,500 - $6,000"
  }
];

const expectations = [
  "I usually work with 1-3 active freelance clients at a time.",
  "Most engagements start with a short discovery and scope session.",
  "Fixed-scope and monthly retainer options are both available.",
  "Pricing varies based on complexity, timeline, and collaboration model."
];

export default function ServicesPage() {
  return (
    <>
      <Section>
        <BlurFade className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.16em] text-brand-teal/75">Services</p>
          <h1 className="font-heading text-5xl leading-tight text-brand-navy md:text-6xl">Straightforward support for real product needs</h1>
          <p className="text-lg text-brand-teal/85">
            I focus on practical outcomes: clearer user journeys, stable code, and faster delivery cycles.
          </p>
        </BlurFade>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <BlurFade key={service.title} delay={0.06 * index}>
              <Card className="h-full">
                <CardContent className="space-y-4 p-7">
                  <h2 className="font-heading text-3xl text-brand-navy">{service.title}</h2>
                  <p className="text-brand-teal/85">{service.details}</p>
                  <p className="text-sm font-medium text-brand-orange">{service.range}</p>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-brand-navy/10 bg-brand-sand/45 p-7">
          <h3 className="font-heading text-3xl text-brand-navy">Scope expectations</h3>
          <ul className="mt-4 space-y-2">
            {expectations.map((item) => (
              <li key={item} className="text-brand-teal/85">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-brand-teal/70">All ranges are indicative and confirmed after discovery.</p>
        </div>
      </Section>

      <CTASection
        title="Need help deciding scope?"
        description="I can review your goals and recommend the smallest reliable path to launch."
      />
    </>
  );
}
