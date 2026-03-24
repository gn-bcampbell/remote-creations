import Image from "next/image";
import Link from "next/link";

import { MarkdownInline } from "@/components/shared/markdown-content";
import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full overflow-hidden border-brand-navy/12 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-32px_rgba(15,61,62,0.34)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-brand-navy/10 bg-brand-sand/70">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/18 via-transparent to-transparent" />
      </div>
      <CardHeader className="space-y-4">
        <Badge variant="secondary" className="w-fit">
          {project.category}
        </Badge>
        <CardTitle className="text-[1.7rem] leading-tight">
          <Link href={`/work/${project.slug}`} className="transition hover:text-brand-teal">
            {project.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-7 text-brand-teal/84">
          <MarkdownInline content={project.summary} />
        </p>
        <ul className="space-y-2">
          {project.outcomes.slice(0, 2).map((outcome) => (
            <li key={outcome} className="flex gap-3 text-sm text-brand-navy/90">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange/80" />
              <MarkdownInline content={outcome} />
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={`/work/${project.slug}`} className="text-sm font-medium text-brand-orange transition hover:text-brand-navy">
          Read case study
        </Link>
      </CardFooter>
    </Card>
  );
}
