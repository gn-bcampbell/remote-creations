import Link from "next/link";

import { LogoMark } from "@/components/site/logo-mark";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-sand/45 py-12">
      <div className="container grid gap-8 md:grid-cols-2 md:items-end">
        <div className="space-y-4">
          <LogoMark className="w-fit" />
          <p className="max-w-md text-sm text-brand-teal/85">
            Simple, well-built software without agency overhead. Built remotely, with clear communication and steady
            delivery.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-brand-teal md:items-end">
          <div className="flex flex-wrap gap-4">
            {siteConfig.navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-brand-navy">
                {item.label}
              </Link>
            ))}
          </div>
          <p>Copyright {new Date().getFullYear()} Remote Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
