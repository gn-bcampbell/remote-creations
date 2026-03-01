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
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <LogoMark />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm text-brand-teal/85 transition hover:text-brand-navy",
                  isActive && "font-medium text-brand-navy"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          {/* <FontStyleToggle /> */}
          <ModeToggle />
          <Button asChild variant="accent" size="sm">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
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
                {/* <FontStyleToggle className="flex md:hidden" /> */}
                {siteConfig.navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-xl px-3 py-2 text-brand-teal transition hover:bg-brand-navy/5 hover:text-brand-navy",
                        isActive && "bg-brand-navy/10 text-brand-navy"
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
    </header>
  );
}
