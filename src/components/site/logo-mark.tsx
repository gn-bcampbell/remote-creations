import Link from "next/link";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-brand-navy/20 bg-card">
        <svg
          viewBox="0 0 40 40"
          aria-hidden="true"
          className="h-7 w-7 text-brand-navy transition group-hover:text-brand-forest"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 26L14 16L20 23L27 12L34 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 31C13 27 18 27 22 31" stroke="#C66B2A" strokeWidth="2" strokeLinecap="round" />
          <text x="8" y="13" fontSize="8" fill="currentColor" fontFamily="serif">
            RC
          </text>
        </svg>
      </span>
      <span className="font-heading text-lg text-brand-navy">Remote Creations</span>
    </Link>
  );
}
