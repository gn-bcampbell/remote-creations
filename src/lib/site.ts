export const siteConfig = {
  name: "Remote Creations",
  description:
    "Independent freelance developer helping small and medium businesses ship reliable websites and apps.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://remote-creations.vercel.app",
  email: "hello@remotecreations.dev",
  social: {
    github: "https://github.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle"
  },
  navItems: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ]
} as const;

export type SiteNavItem = (typeof siteConfig.navItems)[number];
