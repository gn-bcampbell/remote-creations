export type AlpineIconName =
  | "calendar"
  | "chart"
  | "check"
  | "compass"
  | "credit-card"
  | "flag"
  | "handshake"
  | "lightbulb"
  | "mail"
  | "map"
  | "message"
  | "mountain"
  | "rocket"
  | "shield"
  | "sparkles"
  | "store"
  | "support"
  | "tool"
  | "video"
  | "workflow";

export type CTAContent = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type TrailStep = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: AlpineIconName;
  highlights?: string[];
  quote?: string;
  metrics?: Array<{
    value: string;
    label: string;
  }>;
  cta?: {
    label: string;
    href: string;
  };
};

export const basecampPage = {
  hero: {
    badge: "Available for Q4 Business Builds",
    title: "Reliable. Scalable. Business-Grade.",
    description:
      "High-altitude software for growing businesses. From custom storefronts to seamless Stripe integrations, Remote Creations builds dependable tools that support your next stage of growth.",
    primaryCta: {
      label: "Start Your Ascent",
      href: "/contact"
    },
    secondaryCta: {
      label: "View Our Gear",
      href: "/gear"
    },
    highlight: {
      title: "Stripe Pro",
      description: "Certified implementation for complex checkout workflows."
    }
  },
  methodology: {
    eyebrow: "The Methodology",
    title: "Built for Business Stability",
    items: [
      {
        icon: "store" as const,
        title: "High-Performance Storefronts",
        description:
          "Custom-coded storefronts designed for conversion, fast load times, and mobile-first browsing experiences that template builders struggle to match."
      },
      {
        icon: "workflow" as const,
        title: "Internal Tools",
        description:
          "Inventory, CRM, and workflow tooling shaped around your actual operating model, not a generic SaaS template.",
        note: "99.9% Uptime Focus",
        tone: "dark" as const
      },
      {
        icon: "shield" as const,
        title: "Secure Payments",
        description: "Stripe integrated",
        quote: "\"The inventory tool saved us 20 hours of manual data entry every single week.\"",
        align: "center" as const
      },
      {
        icon: "mountain" as const,
        title: "Uncompromising Reliability",
        description:
          "Critical business infrastructure needs a rock-solid foundation. Builds are scoped for longevity, maintainability, and steady iteration."
      }
    ]
  },
  portfolio: {
    eyebrow: "The Portfolio",
    title: "Recent Ascents",
    description:
      "Selected projects spanning booking systems, content-led websites, and internal operations tooling."
  },
  specialties: {
    eyebrow: "Our Peaks",
    title: "Specialized Business Craftsmanship",
    description:
      "Focused on software that solves real operational bottlenecks for small and medium teams.",
    items: [
      {
        title: "01. Custom Storefronts",
        description: "High-performance shopping experiences that out-convert standard themes."
      },
      {
        title: "02. Stripe Integration",
        description: "Advanced billing, subscriptions, and tailored payment flows handled securely."
      },
      {
        title: "03. Business Software",
        description: "Internal tools, inventory systems, and CRMs shaped around the way your team works."
      },
      {
        title: "04. Growth Strategy",
        description: "Practical advice on the right stack, scope, and delivery path for your next milestone."
      }
    ]
  },
  cta: {
    title: "Ready to build reliable software for your business?",
    description: "Limited availability for new project starts. Let's discuss your roadmap.",
    primaryLabel: "Book a Strategy Call",
    primaryHref: "/contact",
    secondaryLabel: "View Case Studies",
    secondaryHref: "/work"
  } satisfies CTAContent
};

export const gearPage = {
  hero: {
    badge: "Local Growth Partners",
    title: "Practical tools for your next big move.",
    description:
      "Websites, payments, and operational tools built for local businesses that need simple systems, reliable delivery, and clear support.",
    stat: {
      value: "7+",
      label: "Years of local support"
    }
  },
  gearList: [
    {
      icon: "store" as const,
      title: "Custom E-commerce",
      description:
        "Sell online with a store that reflects your brand and supports the way your customers actually browse and buy.",
      chips: ["Shopify Experts", "Mobile Ready", "Inventory Sync"],
      className: "md:col-span-2"
    },
    {
      icon: "credit-card" as const,
      title: "Seamless Payments",
      description:
        "Professional Stripe setups for secure card payments, subscriptions, and custom checkout flows.",
      note: "Stripe Certified Setup",
      tone: "dark" as const
    },
    {
      icon: "calendar" as const,
      title: "Booking Systems",
      description:
        "Automated scheduling that reduces back-and-forth, syncs with your calendar, and keeps clients informed.",
      listItems: ["Auto-reminders", "Deposit collection", "Calendar sync"]
    }
  ],
  supportCard: {
    title: "Upgrade Your Current Website",
    description:
      "Refresh a slow or dated site without the stress of a full rebuild. Modernize performance, structure, and presentation while keeping the business running.",
    ctaLabel: "See Our Work",
    ctaHref: "/work"
  },
  commitments: {
    eyebrow: "Quality Commitment",
    title: "Tools Designed for Real-World Business.",
    description:
      "Every project is designed to be easy to manage, straightforward to extend, and grounded in day-to-day business realities.",
    items: [
      {
        icon: "sparkles" as const,
        title: "User-Friendly Design",
        description:
          "Interfaces are built for you and your customers, so daily operations stay simple and the software feels approachable."
      },
      {
        icon: "handshake" as const,
        title: "Local Partnership",
        description:
          "No bloated agency overhead. You work directly with the person doing the build and get support without layers of account management."
      }
    ],
    stats: [
      {
        label: "Launch-ready systems",
        value: "Fast"
      },
      {
        label: "Ongoing support",
        value: "Direct"
      },
      {
        label: "Delivery style",
        value: "Clear"
      },
      {
        label: "Scope bias",
        value: "Practical"
      }
    ]
  }
};

export const trailPage = {
  hero: {
    badge: "Our Methodology",
    title: "The Path to Growing Your Business.",
    description:
      "Building a digital presence should not feel like a solo climb. Remote Creations helps local shops and service providers move from first idea to launch with a clear, simple route.",
    trustLabel: "Trusted by local businesses that value clarity and dependable delivery",
    currentElevation: {
      label: "Current Elevation",
      value: "Discovery Phase"
    }
  },
  steps: [
    {
      number: "01",
      title: "Discovery",
      subtitle: "Planning Your Growth",
      description:
        "The process starts by understanding the business, the customer, and the constraints that matter. The outcome is a practical plan, not vague ambition.",
      icon: "map",
      highlights: ["Understanding your business", "Stakeholder interviews", "Strategic roadmap delivery"]
    },
    {
      number: "02",
      title: "Development",
      subtitle: "Building Your Storefront",
      description:
        "Builds move forward in visible milestones with regular walkthroughs and updates so progress stays easy to follow.",
      icon: "tool",
      quote:
        "\"We work around the clock to keep projects on schedule, so you can stay focused on running the business.\""
    },
    {
      number: "03",
      title: "Testing",
      subtitle: "Final Walkthrough",
      description:
        "Before launch, everything is tested end to end and reviewed together so the finished system matches what your customers actually need.",
      icon: "chart",
      metrics: [
        {
          value: "99.9%",
          label: "Uptime Goal"
        },
        {
          value: "100+",
          label: "Success Milestones"
        }
      ]
    },
    {
      number: "04",
      title: "Launch",
      subtitle: "Opening Your Doors",
      description:
        "Launch is the beginning of a longer runway. Handover guidance, support, and next-step planning are built into the final phase.",
      icon: "flag",
      cta: {
        label: "Grow Your Business Today",
        href: "/contact"
      }
    }
  ] satisfies TrailStep[],
  cta: {
    title: "Ready to take your business to the next level?",
    description:
      "The process is built for business owners who value clarity, speed, and durable outcomes.",
    primaryLabel: "Book Discovery Call",
    primaryHref: "/contact",
    secondaryLabel: "View Our Work",
    secondaryHref: "/work"
  } satisfies CTAContent
};

export const peakPage = {
  hero: {
    badge: "Final Elevation",
    title: "The Peak.",
    description:
      "Remote Creations is a boutique digital consultancy for small and medium business growth. The focus is straightforward solutions that help your brand grow without the complexity of corporate overhead."
  },
  reasons: [
    {
      icon: "lightbulb" as const,
      title: "Straightforward solutions",
      description: "Clear decisions for complex problems."
    },
    {
      icon: "store" as const,
      title: "Reliable storefronts",
      description: "Built for conversion and easy day-to-day use."
    },
    {
      icon: "support" as const,
      title: "Personal support",
      description: "Direct collaboration for growing businesses."
    }
  ],
  budgetOptions: ["5k - 15k", "15k - 30k", "30k - 60k", "60k+"] as const,
  response: {
    title: "Direct Response",
    description: "Typically replies within one working day."
  }
};
