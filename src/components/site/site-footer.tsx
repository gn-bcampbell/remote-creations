import Link from "next/link";

import { LogoMark } from "@/components/site/logo-mark";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-navy/10 bg-white/70 py-12 backdrop-blur-sm">
      <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="space-y-4">
          <LogoMark className="w-fit" />
          <p className="max-w-md text-sm text-brand-teal/85">
            Reliable software at high altitude. Built remotely, delivered directly, and shaped around practical business needs.
          </p>
        </div>

        <div className="space-y-4 text-sm text-brand-teal lg:text-right">
          <div className="flex flex-wrap gap-4 lg:justify-end">
            {siteConfig.navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-brand-navy">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link href={siteConfig.social.github} target="_blank" rel="noreferrer" className="transition hover:text-brand-navy">
              GitHub
            </Link>
            <Link href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-brand-navy">
              LinkedIn
            </Link>
            <Link href={`mailto:${siteConfig.email}`} className="transition hover:text-brand-navy">
              Email
            </Link>
          </div>
          <p>Copyright {new Date().getFullYear()} Remote Creations. Built at high altitude.</p>
        </div>
      </div>
    </footer>
  );
}
