import type { Metadata } from "next";

import { BlurFade } from "@/components/magicui/blur-fade";
import { WorkGrid } from "@/components/shared/work-grid";
import { getProjectCategories, projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work | Remote Creations",
  description: "Case studies and product work from recent freelance projects.",
  path: "/work"
});

export default function WorkPage() {
  const categories = getProjectCategories();

  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-12">
        <BlurFade className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.16em] text-brand-teal/75">Portfolio</p>
          <h1 className="font-heading text-5xl leading-[0.98] text-brand-navy md:text-6xl">Selected work</h1>
          <p className="text-lg text-brand-teal/85">
            A mix of websites, internal tools, and product improvements delivered for small and medium businesses.
          </p>
        </BlurFade>

        <WorkGrid projects={projects} categories={categories} />
      </div>
    </section>
  );
}
