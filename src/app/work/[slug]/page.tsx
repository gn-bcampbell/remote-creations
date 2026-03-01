import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlurFade } from "@/components/magicui/blur-fade";
import { CTASection } from "@/components/shared/cta-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectBySlug, projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({
      title: "Case Study Not Found | Remote Creations",
      description: "This case study could not be found.",
      path: `/work/${slug}`
    });
  }

  return buildMetadata({
    title: `${project.title} | Remote Creations`,
    description: project.summary,
    path: `/work/${project.slug}`
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container space-y-10">
          <BlurFade className="space-y-4">
            <Link href="/work" className="text-sm text-brand-orange transition hover:text-brand-navy">
              {"<-"} Back to work
            </Link>
            <Badge variant="secondary" className="w-fit">
              {project.category}
            </Badge>
            <h1 className="max-w-4xl font-heading text-5xl leading-tight text-brand-navy md:text-6xl">{project.title}</h1>
            <p className="max-w-3xl text-lg text-brand-teal/85">{project.summary}</p>
          </BlurFade>

          <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-brand-sand/40">
            <Image src={project.images[0]} alt={project.title} fill className="object-cover" priority />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardContent className="space-y-8 p-8">
                <article className="space-y-3">
                  <h2 className="font-heading text-3xl text-brand-navy">Overview</h2>
                  <p className="text-brand-teal/85">{project.overview}</p>
                </article>
                <article className="space-y-3">
                  <h2 className="font-heading text-3xl text-brand-navy">Problem</h2>
                  <p className="text-brand-teal/85">{project.problem}</p>
                </article>
                <article className="space-y-3">
                  <h2 className="font-heading text-3xl text-brand-navy">Approach</h2>
                  <ul className="space-y-2">
                    {project.approach.map((item) => (
                      <li key={item} className="text-brand-teal/85">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="space-y-3">
                  <h2 className="font-heading text-3xl text-brand-navy">Outcome</h2>
                  <p className="text-brand-teal/85">{project.outcome}</p>
                </article>
                <article className="space-y-3">
                  <h2 className="font-heading text-3xl text-brand-navy">Lessons Learned</h2>
                  <ul className="space-y-2">
                    {project.lessons.map((lesson) => (
                      <li key={lesson} className="text-brand-teal/85">
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </article>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-7 p-8">
                <div className="space-y-3">
                  <h3 className="font-heading text-2xl text-brand-navy">Role</h3>
                  <p className="text-brand-teal/85">{project.role}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-2xl text-brand-navy">Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-2xl text-brand-navy">Outcomes</h3>
                  <ul className="space-y-2">
                    {project.outcomes.map((item) => (
                      <li key={item} className="text-sm text-brand-teal/85">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a similar project in mind?"
        description="Share what you're building and I'll let you know if I'm a good fit."
      />
    </>
  );
}
