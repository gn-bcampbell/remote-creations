import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlurFade } from "@/components/magicui/blur-fade";
import { CTASection } from "@/components/shared/cta-section";
import { MarkdownContent, MarkdownInline, markdownToPlainText } from "@/components/shared/markdown-content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectBySlug, projects } from "@/content/projects";
import { buildMetadata } from "@/lib/seo";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

const markdownLinkClassName = "font-medium text-brand-orange transition hover:text-brand-navy";

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
    description: markdownToPlainText(project.summary),
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
            <p className="max-w-3xl text-lg text-brand-teal/85">
              <MarkdownInline content={project.summary} linkClassName={markdownLinkClassName} />
            </p>
          </BlurFade>

          <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-brand-sand/40">
            <Image src={project.images[0]} alt={project.title} fill className="object-cover" priority />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardContent className="p-8">
                <article>
                  <MarkdownContent
                    content={project.caseStudy}
                    className="prose prose-sm max-w-none md:prose-base lg:prose-lg prose-headings:font-heading prose-headings:text-brand-navy prose-p:text-brand-teal/85 prose-li:text-brand-teal/85 prose-strong:text-brand-navy prose-a:font-medium prose-a:text-brand-orange prose-a:decoration-brand-orange/60 hover:prose-a:text-brand-navy prose-blockquote:border-brand-navy/20 prose-blockquote:text-brand-teal/90 prose-code:text-brand-navy prose-pre:bg-brand-navy/5 prose-img:rounded-xl prose-img:border prose-img:border-brand-navy/10"
                    linkClassName={markdownLinkClassName}
                  />
                </article>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="space-y-7 p-8">
                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl text-brand-navy">Role</h3>
                    <p className="text-brand-teal/85">
                      <MarkdownInline content={project.role} linkClassName={markdownLinkClassName} />
                    </p>
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
                          <MarkdownInline content={item} linkClassName={markdownLinkClassName} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.projectLinks ? (
                    <div className="space-y-3">
                      <h3 className="font-heading text-2xl text-brand-navy">Project Links</h3>
                      <MarkdownContent
                        content={project.projectLinks}
                        className="prose prose-sm max-w-none prose-p:text-sm prose-p:text-brand-teal/85 prose-li:text-sm prose-li:text-brand-teal/85 prose-a:font-medium prose-a:text-brand-orange hover:prose-a:text-brand-navy"
                        linkClassName={markdownLinkClassName}
                      />
                    </div>
                  ) : null}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="space-y-3 p-8">
                  <h3 className="font-heading text-2xl text-brand-navy">Additional Resources</h3>
                  <MarkdownContent
                    content={
                      project.additionalResources ??
                      "Supplementary resources such as design files, brand assets, and handover notes can be shared on request."
                    }
                    className="prose prose-sm max-w-none prose-p:text-sm prose-p:text-brand-teal/85 prose-li:text-sm prose-li:text-brand-teal/85 prose-a:font-medium prose-a:text-brand-orange hover:prose-a:text-brand-navy"
                    linkClassName={markdownLinkClassName}
                  />
                </CardContent>
              </Card>
            </div>
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
