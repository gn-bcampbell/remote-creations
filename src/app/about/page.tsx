import type { Metadata } from "next";

import { BlurFade } from "@/components/magicui/blur-fade";
import { CTASection } from "@/components/shared/cta-section";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About | Remote Creations",
  description: "The story and working philosophy behind Remote Creations.",
  path: "/about"
});

const principles = [
  {
    title: "Clarity first",
    text: "I keep communication plain and direct so decisions are easy and projects stay on track."
  },
  {
    title: "Build for longevity",
    text: "I prefer maintainable systems and thoughtful tradeoffs over quick fixes that create debt."
  },
  {
    title: "Small steps, steady progress",
    text: "I break work into clear milestones so you can see momentum without losing quality."
  }
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <BlurFade className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.16em] text-brand-teal/75">About</p>
          <h1 className="font-heading text-5xl leading-tight text-brand-navy md:text-6xl">I&apos;m Brendan, the developer behind Remote Creations.</h1>
          <p className="text-lg text-brand-teal/85">
            I&apos;ve spent multiple years building software in product teams, software houses, and consulting environments.
            Today I freelance part-time while working professionally, partnering with a small set of clients who value
            reliability.
          </p>
        </BlurFade>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Card>
            <CardContent className="space-y-6 p-8">
              <h2 className="font-heading text-4xl text-brand-navy">Why &quot;Remote Creations&quot;?</h2>
              <p className="text-brand-teal/85">
                The name comes from two things I care about: building from anywhere, and building with intention. The
                mountain and trail motif in the brand reflects how I approach projects: a clear route, steady pace, and
                attention to the path ahead.
              </p>
              <p className="text-brand-teal/85">
                I work remotely by default and keep processes lightweight. You get direct collaboration with the person
                doing the work, not handoffs through layers of account management.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {principles.map((principle, index) => (
              <BlurFade key={principle.title} delay={0.06 * index}>
                <Card>
                  <CardContent className="space-y-3 p-6">
                    <h3 className="font-heading text-2xl text-brand-navy">{principle.title}</h3>
                    <p className="text-brand-teal/85">{principle.text}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Want to collaborate?"
        description="If you need a hands-on developer who can design and build, let's talk through your next milestone."
      />
    </>
  );
}
