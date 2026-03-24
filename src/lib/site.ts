export const siteConfig = {
  name: "Remote Creations",
  description:
    "Reliable software for growing businesses, from storefronts and payments to the internal tools that keep operations moving.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://remote-creations.vercel.app",
  email: "hello@remotecreations.dev",
  social: {
    github: "https://github.com/gn-bcampbell",
    linkedin: "https://www.linkedin.com/in/bcampbell21",
  },
  navItems: [
    { href: "/", label: "Basecamp" },
    { href: "/gear", label: "The Gear" },
    { href: "/trail", label: "The Trail" },
    { href: "/contact", label: "The Peak" },
  ],
} as const;

export type SiteNavItem = (typeof siteConfig.navItems)[number];
