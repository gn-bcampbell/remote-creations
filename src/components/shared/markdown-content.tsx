import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import { cn } from "@/lib/utils";

type MarkdownContentProps = {
  content: string;
  className?: string;
  paragraphClassName?: string;
  listClassName?: string;
  listItemClassName?: string;
  linkClassName?: string;
};

type MarkdownInlineProps = {
  content: string;
  className?: string;
  linkClassName?: string;
};

type MarkdownComponentsOptions = {
  paragraphClassName?: string;
  listClassName?: string;
  listItemClassName?: string;
  linkClassName?: string;
  inlineParagraphs?: boolean;
};

const defaultLinkClassName = "underline decoration-brand-orange/60 underline-offset-4 transition hover:text-brand-navy";

function withExternalLinkProps(href: string | undefined) {
  if (!href || (!href.startsWith("http://") && !href.startsWith("https://"))) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noreferrer"
  };
}

function createMarkdownComponents({
  paragraphClassName,
  listClassName,
  listItemClassName,
  linkClassName,
  inlineParagraphs
}: MarkdownComponentsOptions): Components {
  return {
    a: ({ className, href, ...props }) => (
      <a
        {...props}
        href={href}
        {...withExternalLinkProps(href)}
        className={cn(defaultLinkClassName, linkClassName, className)}
      />
    ),
    p: ({ className, children, ...props }) =>
      inlineParagraphs ? (
        <>{children}</>
      ) : (
        <p {...props} className={cn(paragraphClassName, className)}>
          {children}
        </p>
      ),
    ul: ({ className, ...props }) => <ul {...props} className={cn("list-disc space-y-2 pl-5", listClassName, className)} />,
    ol: ({ className, ...props }) => <ol {...props} className={cn("list-decimal space-y-2 pl-5", listClassName, className)} />,
    li: ({ className, ...props }) => <li {...props} className={cn(listItemClassName, className)} />,
    blockquote: ({ className, ...props }) => (
      <blockquote
        {...props}
        className={cn("border-l-2 border-brand-navy/20 pl-4 italic text-brand-teal/90", paragraphClassName, className)}
      />
    ),
    h1: ({ className, ...props }) => <h1 {...props} className={cn("font-heading text-3xl text-brand-navy", className)} />,
    h2: ({ className, ...props }) => <h2 {...props} className={cn("font-heading text-2xl text-brand-navy", className)} />,
    h3: ({ className, ...props }) => <h3 {...props} className={cn("font-heading text-xl text-brand-navy", className)} />,
    hr: ({ className, ...props }) => <hr {...props} className={cn("border-brand-navy/10", className)} />,
    pre: ({ className, ...props }) => (
      <pre
        {...props}
        className={cn("overflow-x-auto rounded-xl bg-brand-navy/5 p-3 font-mono text-sm text-brand-navy", className)}
      />
    ),
    code: ({ className, ...props }) => (
      <code {...props} className={cn("rounded bg-brand-navy/5 px-1.5 py-0.5 font-mono text-[0.95em] text-brand-navy", className)} />
    ),
    table: ({ className, ...props }) => (
      <div className="overflow-x-auto">
        <table {...props} className={cn("w-full border-collapse text-left text-sm", className)} />
      </div>
    ),
    th: ({ className, ...props }) => (
      <th {...props} className={cn("border border-brand-navy/15 bg-brand-sand/50 px-3 py-2 font-semibold text-brand-navy", className)} />
    ),
    td: ({ className, ...props }) => <td {...props} className={cn("border border-brand-navy/15 px-3 py-2 text-brand-teal/90", className)} />,
    strong: ({ className, ...props }) => <strong {...props} className={cn("font-semibold text-brand-navy", className)} />,
    em: ({ className, ...props }) => <em {...props} className={cn("italic", className)} />
  };
}

export function markdownToPlainText(content: string) {
  return content
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function MarkdownInline({ content, className, linkClassName }: MarkdownInlineProps) {
  return (
    <span className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        skipHtml
        components={createMarkdownComponents({
          linkClassName,
          inlineParagraphs: true
        })}
      >
        {content}
      </ReactMarkdown>
    </span>
  );
}

export function MarkdownContent({
  content,
  className,
  paragraphClassName,
  listClassName,
  listItemClassName,
  linkClassName
}: MarkdownContentProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        skipHtml
        components={createMarkdownComponents({
          paragraphClassName,
          listClassName,
          listItemClassName,
          linkClassName
        })}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
