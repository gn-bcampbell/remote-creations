import Image from "next/image";
import Link from "next/link";

import { MarkdownInline } from "@/components/shared/markdown-content";
import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-30px_rgba(15,42,58,0.4)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-brand-navy/10 bg-brand-sand/50">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="space-y-3">
        <Badge variant="secondary" className="w-fit">
          {project.category}
        </Badge>
        <CardTitle className="text-2xl leading-tight">
          <Link href={`/work/${project.slug}`} className="transition hover:text-brand-teal">
            {project.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-brand-teal/85">
          <MarkdownInline content={project.summary} />
        </p>
        <ul className="space-y-1">
          {project.outcomes.slice(0, 2).map((outcome) => (
            <li key={outcome} className="text-sm text-brand-navy/90">
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
