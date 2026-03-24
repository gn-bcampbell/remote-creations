import Link from "next/link";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)}>
      <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-brand-navy/12 bg-white/82 shadow-[0_18px_36px_-26px_rgba(15,61,62,0.34)] backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:shadow-none">
        <svg
          viewBox="0 0 40 40"
          aria-hidden="true"
          className="h-7 w-7 text-brand-navy transition duration-300 group-hover:scale-[1.04] group-hover:text-brand-forest"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27.5" cy="12.5" r="3" fill="#D97706" fillOpacity="0.9" />
          <path d="M6 26.5C9.5 23 12.2 19.7 15.2 16.2C17.1 19 18.8 21.3 20.5 23.1C23.8 19.2 26.9 15.2 30 12" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 30C12.2 27.1 16.3 26.3 20 27.5C22.9 28.4 25.9 30.3 32.5 28.5" stroke="#4F6F52" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="font-heading text-lg font-semibold tracking-[-0.03em] text-brand-navy">Remote Creations</span>
    </Link>
  );
}
