import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.12em] transition-colors",
  {
    variants: {
      variant: {
        default: "border-brand-navy/10 bg-brand-navy/5 text-brand-navy dark:border-white/12 dark:bg-white/8 dark:text-brand-navy",
        secondary:
          "border-brand-forest/16 bg-brand-forest/8 text-brand-forest dark:border-brand-forest/24 dark:bg-brand-forest/12 dark:text-brand-forest",
        accent: "border-brand-orange/16 bg-brand-orange/8 text-brand-orange dark:border-brand-orange/24 dark:bg-brand-orange/10"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
