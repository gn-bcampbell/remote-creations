import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type BuildMetadataProps = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "" }: BuildMetadataProps): Metadata {
  const absoluteUrl = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/og-image.svg`]
    }
  };
}
