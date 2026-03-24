import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-[-0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-brand-navy text-white shadow-[0_18px_40px_-24px_rgba(15,61,62,0.7)] hover:-translate-y-0.5 hover:bg-brand-navy/92 hover:shadow-[0_24px_48px_-24px_rgba(15,61,62,0.58)] dark:bg-white dark:text-[#0F3D3E] dark:hover:bg-white/92",
        secondary: "bg-brand-sand text-brand-navy hover:bg-brand-sand/80 dark:bg-secondary dark:text-brand-navy dark:hover:bg-secondary/80",
        outline:
          "border border-brand-navy/12 bg-white/78 text-brand-navy shadow-[0_18px_35px_-28px_rgba(15,61,62,0.35)] backdrop-blur-md hover:-translate-y-0.5 hover:border-brand-navy/18 hover:bg-white dark:border-white/14 dark:bg-white/8 dark:text-brand-navy dark:shadow-none dark:hover:border-white/24 dark:hover:bg-white/12",
        ghost: "text-brand-navy hover:bg-brand-navy/5 dark:hover:bg-white/10",
        accent:
          "bg-brand-orange text-white shadow-[0_18px_40px_-24px_rgba(217,119,6,0.75)] hover:-translate-y-0.5 hover:bg-brand-orange/92 hover:shadow-[0_24px_48px_-24px_rgba(217,119,6,0.62)]"
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-8",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
