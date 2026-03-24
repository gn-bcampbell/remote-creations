import type { Metadata } from "next";

import { SectionHeading } from "@/components/marketing/section-heading";
import { CTASection } from "@/components/shared/cta-section";
import { WorkGrid } from "@/components/shared/work-grid";
import { getProjectCategories, projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Work | Remote Creations",
  description: "Case studies and recent project work from Remote Creations.",
  path: "/work"
});

export default function WorkPage() {
  const categories = getProjectCategories();

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container space-y-12">
          <SectionHeading
            eyebrow="The Portfolio"
            title="Recent ascents across websites, tools, and product work."
            description="A mix of client sites, operational tooling, and iterative product delivery for growing businesses."
          />
          <WorkGrid projects={projects} categories={categories} />
        </div>
      </section>
      <CTASection
        title="Need something similar?"
        description="If the pattern looks familiar, I can help you scope the smallest reliable path forward."
      />
    </>
  );
}
