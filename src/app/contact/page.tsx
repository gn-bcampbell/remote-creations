import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { BlurFade } from "@/components/magicui/blur-fade";
import { ContactForm } from "@/components/shared/contact-form";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Remote Creations",
  description: "Start a project conversation with Remote Creations.",
  path: "/contact"
});

const contactMethods = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin
  },
  {
    label: "GitHub",
    value: "View GitHub profile",
    href: siteConfig.social.github,
    icon: Github
  }
];

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
        <Card>
          <CardContent className="space-y-6 p-8 md:p-10">
            <BlurFade className="space-y-4">
              <p className="text-sm uppercase tracking-[0.16em] text-brand-teal/75">Contact</p>
              <h1 className="font-heading text-5xl leading-tight text-brand-navy md:text-6xl">Let&apos;s build something useful.</h1>
              <p className="text-brand-teal/85">
                Tell me what you&apos;re working on, what stage you&apos;re in, and where you need support.
              </p>
            </BlurFade>

            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="space-y-3 p-7">
              <h2 className="font-heading text-3xl text-brand-navy">Other ways to reach me</h2>
              <div className="space-y-3 pt-1">
                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <Link
                      key={method.label}
                      href={method.href}
                      className="flex items-center gap-4 rounded-[1.35rem] border border-brand-navy/10 bg-white/60 px-4 py-3 text-brand-teal/85 transition hover:-translate-y-0.5 hover:border-brand-navy/16 hover:bg-white dark:bg-white/6 dark:hover:bg-white/10"
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-sand text-brand-navy dark:bg-white/10">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="space-y-0.5">
                        <span className="block text-sm font-medium text-brand-navy">{method.label}</span>
                        <span className="block text-sm text-brand-teal/75">{method.value}</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* <Card>
            <CardContent className="space-y-3 p-7">
              <h2 className="font-heading text-3xl text-brand-navy">What to expect</h2>
              <ul className="space-y-2 text-brand-teal/85">
                <li>1. I reply within 1-2 working days.</li>
                <li>2. If it looks like a fit, I suggest a short discovery call.</li>
                <li>3. You get clear next steps, scope outline, and timeline options.</li>
              </ul>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </Section>
  );
}
