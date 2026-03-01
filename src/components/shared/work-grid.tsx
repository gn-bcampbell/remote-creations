"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/shared/project-card";
import { Button } from "@/components/ui/button";
import type { Project, ProjectCategory } from "@/content/projects";
import { cn } from "@/lib/utils";

type CategoryFilter = "All" | ProjectCategory;

type WorkGridProps = {
  projects: Project[];
  categories: readonly CategoryFilter[];
};

export function WorkGrid({ projects, categories }: WorkGridProps) {
  const [active, setActive] = useState<CategoryFilter>("All");

  const filteredProjects = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setActive(category)}
            type="button"
            size="sm"
            variant={active === category ? "default" : "outline"}
            className={cn(
              "rounded-full",
              active === category
                ? "bg-brand-navy text-white hover:bg-brand-teal"
                : "border-brand-navy/20 bg-background text-brand-navy hover:bg-brand-navy/5"
            )}
            aria-pressed={active === category}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <p className="rounded-2xl border border-brand-navy/10 bg-card p-6 text-sm text-brand-teal">
          No projects in this category yet.
        </p>
      ) : null}
    </div>
  );
}
