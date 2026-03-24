export type ProjectCategory = "Web App" | "Website" | "Product Iteration";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  role: string;
  stack: string[];
  outcomes: string[];
  images: [string, ...string[]];
  caseStudy: string;
  projectLinks?: string;
  additionalResources?: string;
};

export const projects: Project[] = [
  //   {
  //     slug: "trailhead-bookings",
  //     title: "Trailhead Bookings",
  //     summary:
  //       "Booking flow redesign and performance improvements for a seasonal travel business.",
  //     category: "Web App",
  //     role: "Product-focused freelance developer",
  //     stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  //     outcomes: [
  //       "Reduced booking drop-off during checkout",
  //       "Cut median page load times by over 35%",
  //       "Improved maintainability with shared UI patterns",
  //     ],
  //     images: ["/projects/trailhead-bookings.svg"],
  //     caseStudy: `## Overview
  // A small travel operator needed a smoother way for customers to browse dates, compare cabin options, and complete bookings from mobile devices.

  // ## Problem
  // The previous site felt slow and confusing on phones. Users were abandoning the form at the pricing and availability steps.

  // ## Approach
  // - Mapped the current funnel and identified where users dropped off
  // - Rebuilt the booking journey as a step-by-step flow with clearer progress states
  // - Introduced server-rendered pages and lean client-side interactions to improve speed
  // - Added lightweight analytics events to monitor conversion changes

  // ## Outcome
  // The updated booking experience became faster and easier to navigate, especially on mobile. Conversion improved and customer support tickets around bookings dropped.

  // ## Lessons Learned
  // - Simple language and clear step labels matter as much as visual polish
  // - Performance wins are often the fastest path to better conversion`,
  //   },
  //   {
  //     slug: "field-ops-dashboard",
  //     title: "Field Ops Dashboard",
  //     summary:
  //       "Internal operations dashboard to plan schedules and track job completion for a service team.",
  //     category: "Product Iteration",
  //     role: "Part-time product engineer",
  //     stack: ["Next.js", "React Query", "PostgreSQL", "shadcn/ui"],
  //     outcomes: [
  //       "Reduced weekly scheduling admin time",
  //       "Unified reporting from multiple spreadsheets",
  //       "Enabled safer release cycles with feature flags",
  //     ],
  //     images: ["/projects/field-ops-dashboard.svg"],
  //     caseStudy: `## Overview
  // An established business was coordinating technicians across regions using disconnected tools, which made planning and reporting painful.

  // ## Problem
  // Managers were handling planning in spreadsheets and messaging tools, causing duplicate work, stale information, and unclear ownership.

  // ## Approach
  // - Designed a compact dashboard focused on weekly planning and job state
  // - Introduced clear status models with role-based actions
  // - Incrementally migrated from spreadsheets to a shared source of truth
  // - Built release checkpoints to avoid disrupting day-to-day operations

  // ## Outcome
  // The team moved from reactive updates to a predictable weekly planning rhythm, with less manual coordination and better visibility.

  // ## Lessons Learned
  // - For internal tools, reliability and clarity beat visual complexity
  // - Iterative rollout is critical when teams already have working habits`,
  //   },
  {
    slug: "studio-membership-site",
    title: "Studio Membership Site",
    summary:
      "Conversion-focused website refresh for a local studio with class bookings and membership enquiries.",
    category: "Website",
    role: "Designer + developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Formspree"],
    outcomes: [
      "Higher quality enquiries through clearer service pages",
      "Simplified content management for the owner",
      "Improved local SEO structure and page speed",
    ],
    images: ["/projects/studio-membership-site.svg"],
    caseStudy: `## Overview
The studio needed a calmer, clearer website that reflected their brand and turned visitors into qualified enquiries.

## Problem
The old site mixed too many messages, had inconsistent layouts, and made it hard for visitors to understand membership options.

## Approach
- Restructured the information architecture around user intent
- Introduced consistent typography and spacing rules
- Built reusable sections so new pages could be created quickly
- Connected the enquiry flow directly to Formspree for low-maintenance lead capture

## Outcome
The new site created a more trustworthy first impression and made it easier for visitors to take the next step.

## Lessons Learned
- Small businesses benefit from simple, opinionated content structure
- Design consistency reduces decision fatigue for users`,
  },
  {
    slug: "cloughoge-dental-practice",
    title: "Cloughoge Dental Practice",
    summary:
      "Complete website modernisation for a local dental practice, from collaborative wireframing and logo design to launch and analytics setup.",
    category: "Website",
    role: "Frontend developer & designer",
    stack: [
      "Vue.js",
      "Sass",
      "AOS",
      "Firebase Hosting",
      "Google Analytics",
      "Google Workspace",
    ],
    outcomes: [
      "Delivered a modern brochure-style website with clear patient-focused navigation",
      "Introduced reusable UI patterns for team profiles, FAQs, and contact interactions",
      "Improved launch readiness with temporary hosting, domain transition support, and analytics tracking",
    ],
    images: ["/projects/cloughoge-dental-practice.svg"],
    caseStudy: `## Overview
Cloughoge Dental Practice wanted to replace an outdated website with a modern, trustworthy experience that reflected the quality of care provided by the business.

## Problem
The previous site no longer matched the brand and made it harder for new and existing patients to quickly find services, team information, common answers, and contact details.

## Approach
- Worked directly with both owners to define requirements and align page structure with patient needs
- Created wireframes in Figma and shared view-only design links so the client could review progress and provide feedback
- Designed a refreshed logo to align visual identity across the new website
- Built the site as a familiar brochure journey with dedicated pages for treatments, team, FAQs, and contact
- Implemented parallax sections, timed animation cues, FAQ accordions, reusable profile cards, and an embedded Google Maps contact flow
- Used Firebase Hosting for progress previews before the final domain transition, then connected Google Analytics for ongoing traffic and SEO monitoring

## Outcome
The practice launched with a cleaner digital presence and a clearer information flow for patients. The new structure improved usability across devices while giving the owners a stronger platform for ongoing marketing and communication.

## Lessons Learned
- Early wireframe sign-off with shared review links reduces revision churn later in development
- Combining a simple information architecture with lightweight animation can improve clarity without sacrificing visual polish`,
    projectLinks: `- [Live website](https://cloughogedental.com)`,
    additionalResources: `- [Live website](https://cloughogedental.com)
- Figma wireframes and logo files are available on request.`,
  },
  {
    slug: "kaluna-therapies",
    title: "Kaluna Therapies",
    summary:
      "Luxury spa website design and development focused on brand positioning, premium presentation, and a clear enquiry journey.",
    category: "Website",
    role: "Frontend developer & designer",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    outcomes: [
      "Delivered a refined digital presence aligned with a premium, personalised service brand",
      "Improved content clarity with a cleaner information flow and stronger service storytelling",
      "Enabled faster feedback cycles through Vercel preview deployments and iterative reviews",
    ],
    images: ["/projects/kaluna-therapies.svg"],
    caseStudy: `## Overview
Kaluna Therapies needed a website that reflected the quality of Katherine's luxury spa services while presenting the business with clarity and confidence online.

## Problem
The existing digital presence did not fully communicate the bespoke, high-end experience offered to clients. The site needed a more intentional visual direction, clearer messaging, and a smoother path from browsing to enquiry.

## Approach
- Ran discovery sessions with Katherine to define brand tone, audience expectations, and content priorities
- Reviewed reference experiences across premium wellness and lifestyle brands to set an appropriate visual benchmark
- Designed a minimalist interface with high-quality imagery, calm typography, and subtle motion to support a luxury feel without visual noise
- Worked through multiple feedback rounds with Katherine and collaborated with Page Setup Design to refine layout, spacing, and visual hierarchy
- Built the site with Next.js, React, and Tailwind CSS, then used Vercel preview deployments to share progress quickly and support ongoing SEO and performance improvements

## Outcome
The final website now presents Kaluna Therapies as a premium, personalised service with a more polished first impression and clearer user journey. Katherine was pleased with the outcome, and the site now provides a stronger foundation for ongoing marketing and client enquiries.

## Lessons Learned
- Consistent client collaboration and rapid feedback loops are critical for translating brand nuance into a high-end digital experience
- Partnering with specialist designers at key points in the process can significantly improve visual quality and final presentation`,
    projectLinks: `- [Live website](https://kalunatherapies.com)`,
    additionalResources: `- Additional design references and collaboration notes are available on request.`,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCategories() {
  return [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ] as const;
}
