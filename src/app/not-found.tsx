import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <section className="py-24">
      <div className="container space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.16em] text-brand-teal/75">404</p>
        <h1 className="font-heading text-5xl text-brand-navy">Page not found</h1>
        <p className="mx-auto max-w-xl text-brand-teal/85">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
        <Button asChild variant="accent">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </section>
  );
}
