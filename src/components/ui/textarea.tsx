import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[150px] w-full rounded-[1.15rem] border border-brand-navy/12 bg-white/80 px-4 py-3 text-sm text-brand-navy shadow-[0_12px_32px_-28px_rgba(15,61,62,0.28)] backdrop-blur-sm placeholder:text-brand-teal/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/8 dark:text-white dark:placeholder:text-brand-teal/70 dark:shadow-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
