import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal/70">{eyebrow}</p>
      <h2 className="font-heading text-4xl leading-[1.05] text-brand-navy md:text-5xl">{title}</h2>
      {description ? <p className="max-w-3xl text-lg text-brand-teal/80 md:text-xl">{description}</p> : null}
    </div>
  );
}
