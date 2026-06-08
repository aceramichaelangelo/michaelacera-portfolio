# Architecture Plan

## Overview

This portfolio is a **single-page application (SPA-style landing page)** built on the Next.js App Router. All primary sections render on the home route (`/`) with anchor-based navigation. The architecture prioritizes **content-driven development**, **component modularity**, and **long-term scalability** as projects and skills evolve.

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                               │
├─────────────────────────────────────────────────────────────┤
│  Next.js App Router (src/app/)                              │
│    └── page.tsx → composes all section components           │
├─────────────────────────────────────────────────────────────┤
│  Section Components (src/components/sections/)              │
│    Navbar, Hero, About, Skills, Workflow, Projects...     │
├─────────────────────────────────────────────────────────────┤
│  Shared UI Layer (src/components/ui/)                       │
│    Button, Card, Badge, SectionHeading, BentoGrid...        │
├─────────────────────────────────────────────────────────────┤
│  Data Layer (src/data/)                                     │
│    Static TypeScript/JSON content — no runtime CMS initially │
├─────────────────────────────────────────────────────────────┤
│  Utilities (src/lib/)                                       │
│    Constants, helpers, animation variants, metadata         │
└─────────────────────────────────────────────────────────────┘
```

---

## Architectural Decisions

### 1. App Router over Pages Router

| Reason | Benefit |
|--------|---------|
| React Server Components by default | Faster initial load, smaller client bundle |
| Built-in layout system | Shared shell (fonts, metadata, theme) in one place |
| Modern Next.js conventions | Aligns with current ecosystem and hiring expectations |
| Future route expansion | Easy to add `/projects/[slug]` detail pages later |

### 2. Single-Page Home with Section Anchors

All 13 portfolio sections live on one scrollable page. Navigation uses hash links (`#about`, `#skills`, etc.) with smooth scroll behavior.

**Why:** Student portfolios benefit from a continuous narrative flow. Recruiters can scan the full story in one visit without page transitions.

**Future extension:** Individual project detail routes can be added without restructuring the home page.

### 3. Content-Data Separation

All copy, project metadata, skills, timeline entries, and social links live in `src/data/` as typed static modules. Components receive data via props — they do not hardcode content.

**Why:** Updating projects or skills requires editing data files only, not component logic.

### 4. Component Layering

Three distinct component tiers prevent duplication and keep sections maintainable:

| Layer | Location | Responsibility |
|-------|----------|----------------|
| **Sections** | `components/sections/` | Full-width page sections; compose UI primitives |
| **UI** | `components/ui/` | Reusable, style-agnostic building blocks |
| **Layout** | `components/layout/` | Page shell, theme provider, scroll progress |

### 5. No External CMS (Phase 1)

Content is version-controlled in the repository. A headless CMS (Sanity, Contentful) can be integrated in a later phase if content update frequency justifies it.

---

## Routing Strategy

### Phase 1 (MVP)

| Route | Purpose |
|-------|---------|
| `/` | Main portfolio — all sections |
| `/not-found` | Custom 404 page |

### Phase 2 (Optional Expansion)

| Route | Purpose |
|-------|---------|
| `/projects/[slug]` | Dedicated project case study pages |
| `/design/[slug]` | Design showcase detail views |

### Metadata & SEO

- `src/app/layout.tsx` — global metadata (title template, Open Graph, Twitter cards)
- `src/lib/metadata.ts` — centralized SEO configuration
- `public/og-image.png` — social sharing preview image

---

## State Management Recommendations

This portfolio has **minimal client-side state**. Avoid introducing global state libraries unless complexity grows.

### Recommended Approach

| State Type | Solution | Use Case |
|------------|----------|----------|
| **UI state (local)** | `useState` | Mobile menu open/close, active nav link, form fields |
| **Scroll / visibility** | `useEffect` + Intersection Observer or Framer Motion `whileInView` | Section reveal animations, active nav highlighting |
| **Theme** | `next-themes` or CSS `prefers-color-scheme` + manual toggle | Dark mode (default) with optional light mode |
| **URL hash** | Native `window.location.hash` or `useHash` hook | Deep-linking to sections |

### When NOT to Use Global State

- No Redux, Zustand, or Jotai needed for MVP
- No React Context unless theme provider requires it

### When to Add State Later

| Trigger | Solution |
|---------|----------|
| Project filtering (by tech stack) | Local `useState` in `WebProjects` section |
| Contact form with validation | `react-hook-form` + local state |
| Admin content editing | Headless CMS or MDX |
| Multi-page blog | Consider Zustand or URL-based state only |

---

## Scalability Recommendations

### Content Scalability

1. **Typed data modules** — Add new projects by extending `src/data/projects.ts` and corresponding types in `src/types/`
2. **Slug-based routing** — Project `slug` field enables future `/projects/[slug]` pages without data restructuring
3. **Category tags** — Skills and projects use `category` and `tags[]` for filtering and grouping

### Component Scalability

1. **Generic `ProjectCard`** — One card component serves Web, Mobile, AI, and Design sections with variant props
2. **Generic `BentoGrid` + `BentoCell`** — Reusable across Skills, Projects, and Workflow sections
3. **Section wrapper pattern** — Every section uses a shared `Section` layout component for consistent spacing and IDs

### Performance Scalability

1. **Server Components by default** — Only mark interactive components with `"use client"`
2. **Image optimization** — `next/image` for all project screenshots and profile photos
3. **Lazy load below-fold sections** — Dynamic imports for heavy sections (Design Showcase image galleries)
4. **Font optimization** — `next/font` for self-hosted typography

### Team / Collaboration Scalability

1. **Conventional folder structure** — Any developer can locate sections, data, and styles predictably
2. **Documentation-first** — This docs folder serves as onboarding material
3. **ESLint + Prettier** — Enforce consistency from day one

### Deployment Scalability

1. **Vercel** — Zero-config Next.js deployment with preview URLs per branch
2. **Environment variables** — Reserve `.env.local` for contact form API keys (Phase 2)
3. **Analytics** — Add Vercel Analytics or Plausible in Phase 3 without architecture changes

---

## Security Considerations

| Area | Approach |
|------|----------|
| Contact form | Use server action or API route; never expose API keys client-side |
| External links | `rel="noopener noreferrer"` on all `target="_blank"` links |
| Dependencies | Keep Next.js and packages updated; run `npm audit` regularly |
| Content | No sensitive data in repository; use env vars for secrets |

---

## Accessibility Architecture

- Semantic HTML landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Skip-to-content link in layout
- All interactive elements keyboard-accessible
- `aria-label` on icon-only buttons
- `prefers-reduced-motion` respected in animation layer
- Color contrast meets WCAG 2.1 AA on dark backgrounds
- Focus-visible styles on all focusable elements

---

## Testing Strategy (Future)

| Level | Tool | Scope |
|-------|------|-------|
| Unit | Vitest | Utility functions, data transformers |
| Component | React Testing Library | UI primitives, form validation |
| E2E | Playwright | Navigation, mobile menu, contact form |
| Visual | Chromatic (optional) | Regression on design components |

Testing is planned for Phase 4 of the roadmap — not required for initial launch.
