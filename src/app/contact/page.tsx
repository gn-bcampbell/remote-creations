import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { BlurFade } from "@/components/magicui/blur-fade";
import { AlpineIcon } from "@/components/marketing/alpine-icon";
import { IllustrationPanel } from "@/components/marketing/illustration-panel";
import { ContactForm } from "@/components/shared/contact-form";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { peakPage } from "@/content/site-content";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "The Peak | Remote Creations",
  description: "Start a project conversation with Remote Creations.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-8">
          <BlurFade className="space-y-6" delay={0.05} duration={0.9} viewportAmount={0.2}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal/70">{peakPage.hero.badge}</p>
            <h1 className="font-heading text-5xl leading-[1.04] text-brand-navy md:text-6xl">{peakPage.hero.title}</h1>
            <p className="max-w-xl text-lg leading-8 text-brand-teal/82">{peakPage.hero.description}</p>
          </BlurFade>

          <BlurFade delay={0.12} duration={0.92} viewportAmount={0.2}>
            <Card className="bg-brand-sand/65">
              <CardContent className="space-y-5 p-8">
                <h2 className="font-heading text-3xl text-brand-navy">Why work with me?</h2>
                <ul className="space-y-4">
                  {peakPage.reasons.map((reason) => (
                    <li key={reason.title} className="flex items-start gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-navy">
                        <AlpineIcon name={reason.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-brand-navy">{reason.title}</p>
                        <p className="text-sm leading-7 text-brand-teal/82">{reason.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </BlurFade>

          <BlurFade delay={0.18} duration={0.94} viewportAmount={0.2}>
            <IllustrationPanel
              icon="mountain"
              eyebrow="Based in the mountains"
              title="Working remotely for clients who need clear delivery and durable outcomes."
              description="Scope, build, and support are handled directly, with a calm working rhythm and no unnecessary complexity."
              className="min-h-[320px]"
            />
          </BlurFade>
        </div>

        <BlurFade delay={0.08} duration={0.95} viewportAmount={0.2}>
          <Card className="bg-white/92">
            <CardContent className="space-y-8 p-8 md:p-10">
              <div className="space-y-4">
                <h2 className="font-heading text-4xl text-brand-navy">Start your ascent</h2>
                <p className="text-brand-teal/82">
                  Share the context, the stage you&apos;re in, and what a useful outcome looks like.
                </p>
              </div>

              <ContactForm />

              <div className="flex flex-col gap-6 border-t border-brand-navy/10 pt-8 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal/70">{peakPage.response.title}</p>
                  <p className="text-sm text-brand-teal/82">{peakPage.response.description}</p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-sand text-brand-navy transition hover:bg-brand-navy hover:text-white"
                    aria-label="Email Remote Creations"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                  <Link
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-sand text-brand-navy transition hover:bg-brand-navy hover:text-white"
                    aria-label="Remote Creations on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-sand text-brand-navy transition hover:bg-brand-navy hover:text-white"
                    aria-label="Remote Creations on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </Section>
  );
}
