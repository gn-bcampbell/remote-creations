import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { PageTransition } from "@/components/site/page-transition";
import { ThemeProvider } from "@/components/site/theme-provider";
import { ToastProvider } from "@/components/site/toast-provider";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata({
    title: "Remote Creations | Reliable Software for Growing Businesses",
    description:
      "Reliable software for growing businesses, from custom storefronts to payments and practical internal tools.",
    path: "/"
  })
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground transition-colors">
            <SiteHeader />
            <main>
              <PageTransition>{children}</PageTransition>
            </main>
            <SiteFooter />
          </div>
          <ToastProvider />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
