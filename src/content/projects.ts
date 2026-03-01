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
  overview: string;
  problem: string;
  approach: string[];
  outcome: string;
  lessons: string[];
};

export const projects: Project[] = [
  {
    slug: "trailhead-bookings",
    title: "Trailhead Bookings",
    summary:
      "Booking flow redesign and performance improvements for a seasonal travel business.",
    category: "Web App",
    role: "Product-focused freelance developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    outcomes: [
      "Reduced booking drop-off during checkout",
      "Cut median page load times by over 35%",
      "Improved maintainability with shared UI patterns"
    ],
    images: ["/projects/trailhead-bookings.svg"],
    overview:
      "A small travel operator needed a smoother way for customers to browse dates, compare cabin options, and complete bookings from mobile devices.",
    problem:
      "The previous site felt slow and confusing on phones. Users were abandoning the form at the pricing and availability steps.",
    approach: [
      "Mapped the current funnel and identified where users dropped off",
      "Rebuilt the booking journey as a step-by-step flow with clearer progress states",
      "Introduced server-rendered pages and lean client-side interactions to improve speed",
      "Added lightweight analytics events to monitor conversion changes"
    ],
    outcome:
      "The updated booking experience became faster and easier to navigate, especially on mobile. Conversion improved and customer support tickets around bookings dropped.",
    lessons: [
      "Simple language and clear step labels matter as much as visual polish",
      "Performance wins are often the fastest path to better conversion"
    ]
  },
  {
    slug: "field-ops-dashboard",
    title: "Field Ops Dashboard",
    summary:
      "Internal operations dashboard to plan schedules and track job completion for a service team.",
    category: "Product Iteration",
    role: "Part-time product engineer",
    stack: ["Next.js", "React Query", "PostgreSQL", "shadcn/ui"],
    outcomes: [
      "Reduced weekly scheduling admin time",
      "Unified reporting from multiple spreadsheets",
      "Enabled safer release cycles with feature flags"
    ],
    images: ["/projects/field-ops-dashboard.svg"],
    overview:
      "An established business was coordinating technicians across regions using disconnected tools, which made planning and reporting painful.",
    problem:
      "Managers were handling planning in spreadsheets and messaging tools, causing duplicate work, stale information, and unclear ownership.",
    approach: [
      "Designed a compact dashboard focused on weekly planning and job state",
      "Introduced clear status models with role-based actions",
      "Incrementally migrated from spreadsheets to a shared source of truth",
      "Built release checkpoints to avoid disrupting day-to-day operations"
    ],
    outcome:
      "The team moved from reactive updates to a predictable weekly planning rhythm, with less manual coordination and better visibility.",
    lessons: [
      "For internal tools, reliability and clarity beat visual complexity",
      "Iterative rollout is critical when teams already have working habits"
    ]
  },
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
      "Improved local SEO structure and page speed"
    ],
    images: ["/projects/studio-membership-site.svg"],
    overview:
      "The studio needed a calmer, clearer website that reflected their brand and turned visitors into qualified enquiries.",
    problem:
      "The old site mixed too many messages, had inconsistent layouts, and made it hard for visitors to understand membership options.",
    approach: [
      "Restructured the information architecture around user intent",
      "Introduced consistent typography and spacing rules",
      "Built reusable sections so new pages could be created quickly",
      "Connected the enquiry flow directly to Formspree for low-maintenance lead capture"
    ],
    outcome:
      "The new site created a more trustworthy first impression and made it easier for visitors to take the next step.",
    lessons: [
      "Small businesses benefit from simple, opinionated content structure",
      "Design consistency reduces decision fatigue for users"
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCategories() {
  return ["All", ...new Set(projects.map((project) => project.category))] as const;
}
