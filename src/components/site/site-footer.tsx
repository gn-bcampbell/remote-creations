import Link from "next/link";

import { LogoMark } from "@/components/site/logo-mark";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy py-14 text-white dark:bg-[#071213]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(217,119,6,0.12),transparent_24%)]" />
      <div className="container relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div className="space-y-4">
          <LogoMark className="w-fit [&_span:last-child]:text-white" />
          <p className="max-w-md text-sm text-white/72">
            Independent design and development for businesses that want a capable partner, clear communication, and a
            straightforward build process.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/72 md:items-end">
          <div className="flex flex-wrap gap-4">
            {siteConfig.navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
              {siteConfig.email}
            </Link>
            <Link href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
              LinkedIn
            </Link>
            <Link href={siteConfig.social.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
              GitHub
            </Link>
          </div>
          <p>Copyright {new Date().getFullYear()} Remote Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
