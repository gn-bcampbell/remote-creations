"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

// import { FontStyleToggle } from "@/components/site/font-style-toggle";
import { LogoMark } from "@/components/site/logo-mark";
import { ModeToggle } from "@/components/site/mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 px-0 py-4">
      <div className="container">
        <div className="flex h-[4.5rem] items-center justify-between rounded-full border border-brand-navy/10 bg-white/78 px-5 shadow-[0_22px_44px_-34px_rgba(15,61,62,0.32)] backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:shadow-[0_22px_44px_-34px_rgba(0,0,0,0.5)]">
          <LogoMark />

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {siteConfig.navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm text-brand-teal/78 transition hover:text-brand-navy",
                    isActive && "font-medium text-brand-navy"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <ModeToggle />
            <Button asChild variant="accent" size="sm">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Enquire</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-l-brand-navy/10 bg-brand-sand/95 dark:border-l-white/10 dark:bg-[#0E1A1B]/96">
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
                          "rounded-2xl border border-transparent px-4 py-3 text-brand-teal transition hover:border-brand-navy/10 hover:bg-white/80 hover:text-brand-navy dark:hover:border-white/10 dark:hover:bg-white/8",
                          isActive && "border-brand-navy/10 bg-white text-brand-navy dark:border-white/12 dark:bg-white/10"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <Button asChild variant="accent" className="mt-3 w-full">
                    <Link href="/contact">Start a Project</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
