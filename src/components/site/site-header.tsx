"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { LogoMark } from "@/components/site/logo-mark";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-brand-navy/10 glass-nav">
      <div className="container flex h-20 items-center justify-between gap-6">
        <LogoMark />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b-2 border-transparent pb-1 text-sm font-semibold tracking-[0.08em] text-brand-teal/82 transition hover:text-brand-navy",
                  isActive && "border-brand-navy text-brand-navy"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button asChild variant="accent" size="sm" className="px-5">
            <Link href="/contact">Start Ascent</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile">
                {siteConfig.navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-brand-teal transition hover:bg-brand-navy/5 hover:text-brand-navy",
                        isActive && "bg-brand-navy/10 text-brand-navy"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Button asChild variant="accent" className="mt-3 w-full">
                  <Link href="/contact">Start Ascent</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
