# Complete Project Structure

This document defines every folder and file in the portfolio project, including items not yet created. Files marked **(planned)** will be generated during implementation.

---

## Root Directory

```
my-portfolio/
├── README.md                          # Project overview and documentation index
├── .gitignore                         # (planned) Git ignore rules
├── .env.example                       # (planned) Environment variable template
├── .env.local                         # (planned, gitignored) Secrets and API keys
├── next.config.ts                     # (planned) Next.js configuration
├── tailwind.config.ts                 # (planned) Tailwind theme extensions
├── postcss.config.mjs                 # (planned) PostCSS pipeline
├── tsconfig.json                      # (planned) TypeScript configuration
├── eslint.config.mjs                  # (planned) ESLint rules
├── prettier.config.mjs                # (planned) Prettier formatting
├── package.json                       # (planned) Dependencies and scripts
├── package-lock.json                  # (planned) Lockfile
│
├── docs/                              # Planning and architecture documentation
│   ├── ARCHITECTURE.md
│   ├── PROJECT-STRUCTURE.md           # This file
│   ├── COMPONENT-HIERARCHY.md
│   ├── DATA-ORGANIZATION.md
│   ├── CONTENT-STRATEGY.md
│   ├── UI-UX-GUIDE.md
│   ├── RESPONSIVE-STRATEGY.md
│   ├── ANIMATION-STRATEGY.md
│   ├── DEPENDENCIES.md
│   └── ROADMAP.md
│
├── public/                            # Static assets served at root URL
│   ├── favicon.ico                    # (planned) Browser tab icon
│   ├── og-image.png                   # (planned) Open Graph social preview
│   ├── robots.txt                     # (planned) Search engine directives
│   ├── sitemap.xml                    # (planned) SEO sitemap
│   │
│   ├── fonts/                         # (planned) Self-hosted font files if needed
│   │
│   ├── icons/                         # Technology and social icons (SVG)
│   │   └── .gitkeep
│   │
│   └── images/
│       ├── profile/                   # Headshot, hero background
│       │   └── .gitkeep
│       ├── projects/                  # Project screenshots and thumbnails
│       │   └── .gitkeep
│       └── design/                    # Figma exports, mockups, wireframes
│           └── .gitkeep
│
└── src/                               # Application source code
    ├── app/                           # Next.js App Router
    ├── components/                    # React components
    ├── data/                          # Static content and configuration
    ├── hooks/                         # Custom React hooks
    ├── lib/                           # Utilities, constants, helpers
    ├── types/                         # TypeScript type definitions
    └── styles/                        # Global styles and design tokens
```

---

## `src/app/` — Next.js App Router

| File | Purpose |
|------|---------|
| `layout.tsx` **(planned)** | Root layout: HTML shell, font loading, metadata, theme provider, skip link |
| `page.tsx` **(planned)** | Home page — composes all section components in order |
| `globals.css` **(planned)** | Tailwind directives, CSS custom properties, base resets |
| `not-found.tsx` **(planned)** | Custom 404 page matching portfolio design |
| `loading.tsx` **(planned)** | Optional loading skeleton for route transitions |
| `icon.tsx` **(planned)** | Dynamic favicon via Next.js metadata API |
| `opengraph-image.tsx` **(planned)** | Optional dynamic OG image generation |

---

## `src/components/` — Component Library

### `components/layout/`

| File | Purpose |
|------|---------|
| `ThemeProvider.tsx` **(planned)** | Wraps app with theme context (dark/light) |
| `ScrollProgress.tsx` **(planned)** | Top-of-page scroll progress indicator |
| `SmoothScroll.tsx` **(planned)** | Optional smooth scroll wrapper for anchor links |

### `components/sections/`

One folder per portfolio section. Each contains an index file exporting the main section component and optional sub-components.

```
sections/
├── Navbar/
│   ├── index.ts                       # (planned) Barrel export
│   ├── Navbar.tsx                     # (planned) Main navigation bar
│   ├── NavLinks.tsx                   # (planned) Desktop navigation links
│   └── MobileMenu.tsx                 # (planned) Hamburger menu and mobile drawer
│
├── Hero/
│   ├── index.ts
│   ├── Hero.tsx                       # (planned) Hero section with name, roles, CTA
│   └── HeroBackground.tsx             # (planned) Animated or gradient background
│
├── About/
│   ├── index.ts
│   └── About.tsx                      # (planned) Personal intro, interests, goals
│
├── Skills/
│   ├── index.ts
│   ├── Skills.tsx                     # (planned) Skills section container
│   └── SkillCategory.tsx              # (planned) Individual skill category card
│
├── Workflow/
│   ├── index.ts
│   ├── Workflow.tsx                   # (planned) Development process section
│   └── WorkflowStep.tsx               # (planned) Single step in the workflow pipeline
│
├── FeaturedProject/
│   ├── index.ts
│   ├── FeaturedProject.tsx            # (planned) Native Flora spotlight section
│   └── ProjectDetailBlock.tsx         # (planned) Reusable detail block (problem, solution, etc.)
│
├── WebProjects/
│   ├── index.ts
│   └── WebProjects.tsx                # (planned) Web development project grid
│
├── MobileProjects/
│   ├── index.ts
│   └── MobileProjects.tsx             # (planned) Flutter mobile project grid
│
├── AIProjects/
│   ├── index.ts
│   └── AIProjects.tsx                 # (planned) AI & computer vision project grid
│
├── DesignShowcase/
│   ├── index.ts
│   ├── DesignShowcase.tsx             # (planned) UI/UX design gallery
│   └── DesignGallery.tsx              # (planned) Image gallery with lightbox behavior
│
├── Timeline/
│   ├── index.ts
│   ├── Timeline.tsx                   # (planned) Learning journey timeline
│   └── TimelineEntry.tsx              # (planned) Single year/period entry
│
├── Contact/
│   ├── index.ts
│   ├── Contact.tsx                    # (planned) Contact section with social links
│   └── ContactForm.tsx                # (planned) Optional email contact form (Phase 2)
│
└── Footer/
    ├── index.ts
    └── Footer.tsx                     # (planned) Footer with branding and built-with credits
```

### `components/ui/` — Reusable UI Primitives

| File | Purpose |
|------|---------|
| `Button.tsx` **(planned)** | Primary, secondary, and ghost button variants |
| `Card.tsx` **(planned)** | Glassmorphism card container |
| `Badge.tsx` **(planned)** | Technology tag / skill pill |
| `Section.tsx` **(planned)** | Standard section wrapper (id, padding, max-width) |
| `SectionHeading.tsx` **(planned)** | Consistent section title + subtitle pattern |
| `BentoGrid.tsx` **(planned)** | Responsive bento grid layout container |
| `BentoCell.tsx` **(planned)** | Individual cell within bento grid |
| `ProjectCard.tsx` **(planned)** | Reusable project card (image, title, tags, links) |
| `IconLink.tsx` **(planned)** | Social/tech icon with accessible link wrapper |
| `Container.tsx` **(planned)** | Max-width content container |
| `Divider.tsx` **(planned)** | Visual section separator |
| `AnimatedText.tsx` **(planned)** | Text with entrance animation wrapper |
| `GlassPanel.tsx` **(planned)** | Glassmorphism surface primitive |
| `ImageWithFallback.tsx` **(planned)** | Image component with placeholder fallback |

### `components/shared/` — Cross-Section Utilities

| File | Purpose |
|------|---------|
| `MotionWrapper.tsx` **(planned)** | Framer Motion scroll-reveal wrapper |
| `TechIcon.tsx` **(planned)** | Renders technology icon by name from a lookup map |
| `ExternalLink.tsx` **(planned)** | Safe external link with security attributes |

---

## `src/data/` — Static Content

| File | Purpose |
|------|---------|
| `site.ts` **(planned)** | Site-wide config: name, title, description, copyright |
| `navigation.ts` **(planned)** | Nav link labels and section anchor IDs |
| `hero.ts` **(planned)** | Hero section copy and CTA button definitions |
| `about.ts` **(planned)** | About section paragraphs, interests, goals, current focus |
| `skills.ts` **(planned)** | All skill categories and individual skills |
| `workflow.ts` **(planned)** | Development workflow steps |
| `projects.ts` **(planned)** | All project entries (featured, web, mobile, AI) |
| `design.ts` **(planned)** | Design showcase items (wireframes, mockups, prototypes) |
| `timeline.ts` **(planned)** | Learning journey entries by year |
| `contact.ts` **(planned)** | Email, social media URLs, and labels |
| `footer.ts` **(planned)** | Footer copy and built-with technology list |
| `index.ts` **(planned)** | Barrel export for all data modules |

---

## `src/lib/` — Utilities

| File | Purpose |
|------|---------|
| `constants.ts` **(planned)** | App-wide constants (section IDs, breakpoints reference) |
| `metadata.ts` **(planned)** | SEO metadata builder for layout and OG tags |
| `animations.ts` **(planned)** | Shared Framer Motion variant objects |
| `utils.ts` **(planned)** | General utility functions (class merging, formatting) |
| `cn.ts` **(planned)** | Tailwind class name merger (clsx + tailwind-merge) |

---

## `src/hooks/` — Custom Hooks

| File | Purpose |
|------|---------|
| `useActiveSection.ts` **(planned)** | Tracks which section is in viewport for nav highlighting |
| `useMediaQuery.ts` **(planned)** | Responsive breakpoint detection |
| `useScrollTo.ts` **(planned)** | Smooth scroll to section anchor |
| `useReducedMotion.ts` **(planned)** | Respects `prefers-reduced-motion` preference |

---

## `src/types/` — TypeScript Definitions

| File | Purpose |
|------|---------|
| `index.ts` **(planned)** | Barrel export |
| `project.ts` **(planned)** | Project, FeaturedProject, ProjectLink interfaces |
| `skill.ts` **(planned)** | SkillCategory, Skill interfaces |
| `navigation.ts` **(planned)** | NavLink interface |
| `timeline.ts` **(planned)** | TimelineEntry interface |
| `design.ts` **(planned)** | DesignItem interface |
| `contact.ts` **(planned)** | SocialLink interface |

---

## `src/styles/` — Styling

| File | Purpose |
|------|---------|
| `tokens.css` **(planned)** | CSS custom properties for colors, spacing, radii |
| `glassmorphism.css` **(planned)** | Reusable glass effect utility classes |
| `typography.css` **(planned)** | Font family and type scale definitions |

> **Note:** Primary styling will live in Tailwind utility classes within components. The `styles/` folder holds design tokens and effects that are easier to maintain as CSS variables.

---

## Folder Purpose Summary

| Folder | Purpose |
|--------|---------|
| `docs/` | Architecture, planning, and design documentation (no runtime code) |
| `public/` | Static files served directly (images, icons, fonts, SEO files) |
| `src/app/` | Next.js routing, layouts, and page composition |
| `src/components/layout/` | App shell and global UI wrappers |
| `src/components/sections/` | One component group per portfolio section |
| `src/components/ui/` | Generic, reusable UI building blocks |
| `src/components/shared/` | Cross-cutting component utilities |
| `src/data/` | All portfolio content separated from presentation |
| `src/lib/` | Pure functions, constants, animation configs |
| `src/hooks/` | Reusable React hooks for UI behavior |
| `src/types/` | Shared TypeScript interfaces |
| `src/styles/` | Global CSS tokens and effect definitions |
