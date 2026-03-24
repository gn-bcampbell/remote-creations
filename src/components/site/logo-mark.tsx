import Link from "next/link";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)}>
      <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-brand-navy/10 bg-white/80 shadow-sm">
        <svg
          viewBox="0 0 40 40"
          aria-hidden="true"
          className="h-7 w-7 text-brand-navy transition group-hover:text-brand-teal"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 26L14 16L20 23L27 12L34 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 31C13 27 18 27 22 31" stroke="#B8772E" strokeWidth="2" strokeLinecap="round" />
          <text x="8" y="13" fontSize="8" fill="currentColor" fontFamily="serif">
            RC
          </text>
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-brand-teal/70">Remote</span>
        <span className="font-heading text-lg text-brand-navy">Creations</span>
      </span>
    </Link>
  );
}
