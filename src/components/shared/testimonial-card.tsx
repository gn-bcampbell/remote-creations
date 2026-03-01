import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="space-y-5 p-7">
        <p className="font-heading text-2xl leading-snug text-brand-navy">&ldquo;{quote}&rdquo;</p>
        <p className="text-sm text-brand-teal/85">
          {author} <span className="text-brand-teal/60">- {role}</span>
        </p>
      </CardContent>
    </Card>
  );
}
