# inth3loop.org - Official Website

## Organization

- **Name:** inth3loop.org
- **Founded by:** Cătălin Tișcă (https://tiscacatalin.com)
- **Focus:** Latest innovations in tech, quality-driven, authentic artistic products
- **Identity:** A software organization at the intersection of technology and art, committed to authenticity and craftsmanship

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom theme
- **Content:** MDX for blog articles and case studies
- **Animation:** Framer Motion
- **Font:** Mona Sans (variable)
- **Build:** `npm run dev` / `npm run build` (uses --webpack flag)

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout & metadata
│   ├── about/page.tsx    # About page
│   ├── blog/             # Blog articles (MDX)
│   ├── contact/page.tsx  # Contact form
│   ├── process/page.tsx  # Process/methodology
│   └── work/             # Case studies / portfolio (MDX)
├── components/           # Reusable React components
├── styles/               # Tailwind CSS config & typography
├── images/               # Logos, team photos, content images
├── fonts/                # Mona Sans variable font
└── lib/                  # Utilities (mdx loader, formatDate)
```

## Content Replacement Plan

The template currently contains placeholder content from a fictional Danish studio. All content across these areas needs to be replaced:

### Pages to Update
1. **Homepage** (`src/app/page.tsx`) - Hero, clients, case studies, services, testimonial
2. **About** (`src/app/about/page.tsx`) - Intro, stats, culture values, team
3. **Work/Portfolio** (`src/app/work/page.tsx`) - Case studies listing
4. **Process** (`src/app/process/page.tsx`) - Methodology phases, values
5. **Blog** (`src/app/blog/page.tsx`) - Article listing
6. **Contact** (`src/app/contact/page.tsx`) - Form, offices, emails, socials
7. **Layout** (`src/app/layout.tsx`) - Site metadata, SEO

### Components to Update
- `RootLayout` - Navigation links, branding
- `Footer` - Nav sections, newsletter, socials
- `Logo` / `Logomark` - Replace with inth3loop branding
- `SocialMedia` - Real social links
- `Offices` - Real location(s)
- `ContactSection` - CTA copy

### Content Types
- **Case Studies** (MDX in `src/app/work/`) - Real projects
- **Blog Articles** (MDX in `src/app/blog/`) - Real articles
- **Client Logos** (SVG in `src/images/clients/`) - Real client/partner logos

## Conventions

- Use single quotes, no semicolons (Prettier config)
- Path alias: `@/*` maps to `./src/*`
- Components use Framer Motion for animations
- MDX files export metadata objects for SEO and content loading
- Dark theme background (`bg-neutral-950`) with light content area
