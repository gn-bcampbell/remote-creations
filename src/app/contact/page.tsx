import type { Metadata } from "next";
import Link from "next/link";

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
              <p className="text-brand-teal/85">
                Prefer email? Use <Link href={`mailto:${siteConfig.email}`} className="text-brand-orange">{siteConfig.email}</Link>
              </p>
              <p className="text-brand-teal/85">
                Or connect on{" "}
                <Link href={siteConfig.social.linkedin} className="text-brand-orange" target="_blank" rel="noreferrer">
                  LinkedIn
                </Link>
              </p>
              <p className="text-brand-teal/85">
                Checkout my {" "}
                <Link href={siteConfig.social.github} className="text-brand-orange" target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              </p>
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
