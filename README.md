# Remote Creations

Modern multi-page portfolio site for a solo freelance developer business, built with Next.js App Router, TypeScript, Tailwind, shadcn/ui patterns, subtle MagicUI-style motion, and Vercel Analytics.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui component structure
- Framer Motion (for MagicUI `BlurFade` animation behavior)
- Vercel Analytics
- Formspree (direct form submission)

## Project structure

```txt
.
|-- public/
|   |-- og-image.svg
|   `-- projects/*.svg
|-- src/
|   |-- app/
|   |   |-- about/page.tsx
|   |   |-- contact/page.tsx
|   |   |-- services/page.tsx
|   |   |-- work/page.tsx
|   |   |-- work/[slug]/page.tsx
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   |-- robots.ts
|   |   `-- sitemap.ts
|   |-- components/
|   |   |-- magicui/blur-fade.tsx
|   |   |-- shared/*
|   |   |-- site/*
|   |   `-- ui/*
|   |-- content/projects.ts
|   `-- lib/*
|-- components.json
|-- tailwind.config.ts
`-- package.json
```

## Install and run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` and fill values:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

`NEXT_PUBLIC_FORMSPREE_ENDPOINT` is required for the contact form to submit.

## Formspree setup

1. Create a form in Formspree.
2. Copy the endpoint URL (`https://formspree.io/f/...`).
3. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local` and in Vercel Project Settings.

The form posts directly to Formspree (no custom backend email logic).

## shadcn/ui setup

Project already follows shadcn conventions (`components.json`, `@/components/ui`, `@/lib/utils`).

If you want to add more shadcn components:

```bash
npx shadcn@latest init
npx shadcn@latest add accordion dialog dropdown-menu
```

## MagicUI setup notes

This project includes reusable MagicUI-style motion primitives:

- `src/components/magicui/blur-fade.tsx` for subtle section/element entrances.
- `src/components/site/page-transition.tsx` for gentle route transitions.

If you want official MagicUI registry components later, install them via the MagicUI/shadcn registry command from MagicUI docs and place them under `src/components/magicui`.

## Vercel Analytics

`<Analytics />` is mounted in `src/app/layout.tsx`.

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import into Vercel.
3. Set environment variables in Vercel Project Settings.
4. Deploy (build command: `npm run build`).

## Notes

- Pages are server components by default.
- Client components are used only where needed (mobile nav sheet, filters, form validation/submission, toasts, theme toggle, motion primitives).
- Content-driven case studies are sourced from `src/content/projects.ts`.
# remote-creations
