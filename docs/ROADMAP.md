# Development Roadmap

Phased plan from project setup through production deployment.

---

## Overview

| Phase | Name | Duration (Est.) | Deliverable |
|-------|------|-----------------|-------------|
| 0 | Planning | Complete | Architecture docs, folder structure |
| 1 | Foundation | 2–3 days | Next.js project, theme, layout shell |
| 2 | Core Sections | 4–5 days | All 13 portfolio sections with content |
| 3 | Polish | 2–3 days | Animations, responsive QA, accessibility |
| 4 | Content & Assets | 2–3 days | Real images, screenshots, copy refinement |
| 5 | Deployment | 1 day | Vercel deployment, SEO, domain |
| 6 | Enhancement | Ongoing | Contact form, project detail pages, blog |

**Total estimated time:** 12–16 days of focused development

---

## Phase 0: Planning ✅

**Status:** Complete

### Tasks
- [x] Define architecture and component hierarchy
- [x] Create folder structure skeleton
- [x] Write data organization strategy
- [x] Document UI/UX, responsive, and animation strategies
- [x] Define content for all sections
- [x] List recommended dependencies
- [x] Create development roadmap

### Output
- `docs/` folder with 10 planning documents
- `src/` folder structure with placeholder directories
- `public/` asset directories

---

## Phase 1: Foundation

**Goal:** Bootstrapped Next.js project with design system tokens, layout shell, and reusable UI primitives.

### Tasks

1. **Project initialization**
   - Run `create-next-app` with TypeScript, Tailwind, ESLint, App Router, `src/` directory
   - Configure `@/*` path alias
   - Set up Prettier with Tailwind plugin
   - Create `.gitignore` and `.env.example`

2. **Design system setup**
   - Configure Tailwind theme: colors, fonts, spacing, border radius
   - Create `src/styles/tokens.css` with CSS custom properties
   - Create `src/styles/glassmorphism.css` with glass effect utilities
   - Set up `next/font` for Inter and JetBrains Mono
   - Configure dark mode as default in `globals.css`

3. **Type definitions**
   - Create all interfaces in `src/types/`
   - Export from `src/types/index.ts`

4. **Data layer**
   - Create all data modules in `src/data/` with content from CONTENT-STRATEGY.md
   - Populate with real copy and placeholder image paths

5. **Utility layer**
   - `src/lib/cn.ts` — class name merger
   - `src/lib/constants.ts` — section IDs, site config
   - `src/lib/metadata.ts` — SEO metadata
   - `src/lib/animations.ts` — Framer Motion variants
   - `src/lib/utils.ts` — general helpers

6. **UI primitives**
   - Build all components in `src/components/ui/`
   - Button, Card, Badge, Section, SectionHeading, BentoGrid, BentoCell, ProjectCard, Container, GlassPanel, IconLink

7. **Layout shell**
   - `src/app/layout.tsx` — root layout with fonts, metadata, theme
   - `src/app/globals.css` — Tailwind imports and base styles
   - `src/components/layout/ThemeProvider.tsx`
   - Skip-to-content link

### Exit Criteria
- Project runs locally with `npm run dev`
- UI primitives render correctly in isolation
- Dark theme with glassmorphism tokens applied
- All data modules populated with typed content

---

## Phase 2: Core Sections

**Goal:** All 13 portfolio sections implemented and composed on the home page.

### Build Order (recommended)

| Order | Section | Complexity | Dependencies |
|-------|---------|------------|--------------|
| 1 | Footer | Low | UI primitives |
| 2 | Navbar | Medium | navigation data, mobile menu state |
| 3 | Hero | Medium | hero data, animations |
| 4 | About | Low | about data, bento grid |
| 5 | Skills | Low | skills data, bento grid |
| 6 | Workflow | Medium | workflow data, stepper layout |
| 7 | Timeline | Medium | timeline data, vertical layout |
| 8 | Contact | Low | contact data, social links |
| 9 | FeaturedProject | High | project data, detail blocks |
| 10 | WebProjects | Medium | project data, project cards |
| 11 | MobileProjects | Medium | project data, project cards |
| 12 | AIProjects | Medium | project data, project cards |
| 13 | DesignShowcase | Medium | design data, image gallery |

### Page Composition
- Wire all sections into `src/app/page.tsx` in navigation order
- Assign section `id` attributes matching navigation anchors
- Verify smooth scroll between sections

### Exit Criteria
- All sections visible on home page
- Content matches CONTENT-STRATEGY.md
- Navigation links scroll to correct sections
- Mobile menu opens/closes correctly
- No beginner academic projects included

---

## Phase 3: Polish

**Goal:** Animations, responsive refinement, and accessibility compliance.

### Tasks

1. **Framer Motion integration**
   - Install and configure Framer Motion
   - Implement `MotionWrapper` shared component
   - Apply scroll-reveal animations to all sections
   - Hero entrance sequence
   - Card hover animations
   - Mobile menu transitions
   - Implement `useReducedMotion` hook

2. **Responsive QA**
   - Test all breakpoints (320px → 1920px)
   - Verify bento grid layouts at each breakpoint
   - Fix overflow, text truncation, and spacing issues
   - Ensure 44px touch targets on mobile

3. **Accessibility audit**
   - Semantic HTML landmarks
   - Keyboard navigation through all interactive elements
   - Focus-visible styles
   - ARIA labels on icon buttons
   - Color contrast verification (WCAG AA)
   - Screen reader testing

4. **Performance optimization**
   - Convert appropriate components to Server Components
   - Optimize images with `next/image`
   - Lazy load below-fold sections if needed
   - Audit bundle size

5. **Navbar enhancements**
   - Glass background on scroll
   - Active section highlighting
   - Optional scroll progress bar

### Exit Criteria
- Smooth animations on scroll (disabled with reduced motion)
- No layout issues from 320px to 1920px
- Lighthouse accessibility score ≥ 90
- Lighthouse performance score ≥ 90

---

## Phase 4: Content & Assets

**Goal:** Replace all placeholders with real content and media.

### Tasks

1. **Profile assets**
   - Professional headshot → `/public/images/profile/`
   - Optimize to WebP format

2. **Project screenshots**
   - Native Flora app screenshots and detection overlays
   - Flutter app screenshots
   - Web project screenshots
   - AI project visualizations
   - Optimize all to WebP

3. **Design exports**
   - Export Figma wireframes, mockups, prototypes
   - Place in `/public/images/design/`
   - Add device frames if appropriate

4. **Technology icons**
   - SVG icons for tech stack → `/public/icons/`
   - Or use Lucide React icons where applicable

5. **Copy refinement**
   - Proofread all section content
   - Add individual project descriptions (not just collections)
   - Verify excluded projects are not present

6. **Social links**
   - Add real GitHub, LinkedIn, Facebook, email URLs
   - Test all external links

7. **SEO assets**
   - Create OG image (`/public/og-image.png` or dynamic)
   - Configure metadata in layout
   - Create `robots.txt` and `sitemap.xml`

8. **Resume (optional)**
   - Add PDF to `/public/resume.pdf`
   - Enable download CTA in Hero

### Exit Criteria
- No placeholder images or lorem ipsum text
- All links functional
- OG image renders correctly when shared

---

## Phase 5: Deployment

**Goal:** Live production site on Vercel with custom domain (optional).

### Tasks

1. **Pre-deployment checklist**
   - Run `npm run build` — zero errors
   - Run `npm run lint` — zero warnings
   - Test production build locally with `npm start`
   - Verify all environment variables

2. **Vercel deployment**
   - Push repository to GitHub
   - Connect repo to Vercel
   - Set `NEXT_PUBLIC_SITE_URL` environment variable
   - Deploy and verify production URL

3. **Domain setup (optional)**
   - Configure custom domain in Vercel
   - Set up DNS records
   - Verify HTTPS

4. **Post-deployment verification**
   - Test all sections on live URL
   - Test mobile experience on real device
   - Share OG link to verify social preview
   - Submit sitemap to Google Search Console

5. **Analytics (optional)**
   - Add Vercel Analytics
   - Add Vercel Speed Insights

### Exit Criteria
- Site live at production URL
- HTTPS enabled
- Social sharing preview works
- No console errors in production

---

## Phase 6: Enhancements (Ongoing)

**Goal:** Features beyond MVP that add value over time.

### Priority Enhancements

| Enhancement | Effort | Value |
|-------------|--------|-------|
| Contact form with email delivery | Medium | High |
| Individual project detail pages (`/projects/[slug]`) | Medium | High |
| Design showcase lightbox | Low | Medium |
| Light mode toggle | Low | Low |
| Project filtering by technology | Low | Medium |
| Blog section with MDX | High | Medium |
| GitHub API integration (repo stats) | Medium | Medium |
| Downloadable resume CTA | Low | High |
| Cursor custom effects | Low | Low |

### Maintenance Schedule

| Frequency | Task |
|-----------|------|
| Monthly | Update project screenshots and descriptions |
| Per project | Add new projects to data files |
| Quarterly | Update skills and timeline |
| Annually | Refresh design, update copyright year |

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Too many client components | Push `"use client"` to leaf components only |
| Large image files | WebP format, `next/image`, lazy loading |
| Animation performance | GPU-only properties, `once: true`, reduced motion |
| Scope creep | Stick to MVP (Phases 1–5) before enhancements |
| Missing project assets | Use styled placeholder cards with project name and description |
| Content overwhelm | Lead with Featured Project, keep other sections concise |

---

## Definition of Done

The portfolio is **complete** when:

1. All 13 sections render with real content
2. Dark mode glassmorphism design is consistent throughout
3. Site is fully responsive (320px–1920px)
4. Framer Motion animations enhance without overwhelming
5. Lighthouse scores ≥ 90 for performance and accessibility
6. Site is deployed and accessible via public URL
7. No beginner academic projects are showcased
8. Native Flora Detection System is prominently featured
