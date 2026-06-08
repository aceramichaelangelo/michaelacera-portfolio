# UI/UX Design Guide

Design recommendations for Michael Angelo Acera's portfolio. This guide defines the visual language without prescribing implementation code.

---

## Design Direction

**Aesthetic:** Dark, modern, glassmorphic student-developer portfolio  
**Mood:** Professional, innovative, technically competent, approachable  
**Reference inspirations:** Vercel-style dark UI, bento grid portfolios, Linear.app polish, Apple-style glass surfaces

---

## Color Palette

### Primary Palette (Dark Mode — Default)

| Token | Role | Recommended Value | Usage |
|-------|------|-------------------|-------|
| `--background` | Page background | Deep navy-charcoal (#0a0a0f to #0f1117) | Body, main canvas |
| `--background-elevated` | Raised surfaces | Slightly lighter (#161b22) | Cards, panels |
| `--foreground` | Primary text | Off-white (#f0f0f5) | Headings, body |
| `--foreground-muted` | Secondary text | Cool gray (#8b949e) | Subtitles, captions |
| `--accent-primary` | Brand accent | Teal or emerald (#2dd4bf / #10b981) | CTAs, links, highlights |
| `--accent-secondary` | Secondary accent | Soft violet (#a78bfa) | Badges, decorative elements |
| `--accent-tertiary` | Tertiary accent | Warm amber (#f59e0b) | Timeline markers, alerts |
| `--border` | Borders | White at 8–12% opacity | Card edges, dividers |
| `--glass-bg` | Glass surface | White at 5–8% opacity | Glassmorphism panels |
| `--glass-border` | Glass edge | White at 10–15% opacity | Glass panel borders |

### Semantic Colors

| Token | Usage |
|-------|-------|
| `--success` | Form success states |
| `--error` | Form validation errors |
| `--focus-ring` | Keyboard focus indicator (accent color at 50% opacity) |

### Light Mode (Optional Phase 2)

Invert background/foreground relationship. Keep accent colors consistent. Reduce glass effect intensity on light backgrounds.

---

## Typography

### Font Pairing (Recommended)

| Role | Font | Fallback |
|------|------|----------|
| **Headings** | Inter, Plus Jakarta Sans, or Satoshi | system-ui, sans-serif |
| **Body** | Inter | system-ui, sans-serif |
| **Monospace** | JetBrains Mono or Fira Code | monospace |

Load via `next/font/google` for performance.

### Type Scale

| Element | Size (mobile → desktop) | Weight | Tracking |
|---------|------------------------|--------|----------|
| Hero name | 2.5rem → 4.5rem | 700–800 | Tight (-0.02em) |
| Section heading | 1.75rem → 2.5rem | 700 | Tight |
| Section subtitle | 1rem → 1.125rem | 400 | Normal |
| Body text | 1rem → 1.0625rem | 400 | Normal |
| Small / caption | 0.875rem | 400–500 | Normal |
| Badge / tag | 0.75rem → 0.8125rem | 500 | Wide (0.02em) |

### Typography Rules
- Maximum line length: 65–75 characters for body text
- Line height: 1.6 for body, 1.2 for headings
- Use sentence case for headings, not ALL CAPS
- Role badges in Hero use medium weight, not bold

---

## Glassmorphism Specification

| Property | Value |
|----------|-------|
| Background | Semi-transparent white or accent tint (5–10% opacity) |
| Backdrop blur | 12px–24px |
| Border | 1px solid white at 10–15% opacity |
| Border radius | 12px–16px (cards), 8px (badges) |
| Shadow | Subtle dark shadow (0 4px 24px rgba(0,0,0,0.3)) |
| Hover | Slightly increase background opacity and border brightness |

**Use glassmorphism on:** Cards, navbar (on scroll), bento cells, contact panel, project cards  
**Avoid on:** Body text areas, small badges, footer (use solid background)

---

## Bento Grid Layout

### Grid Behavior

| Breakpoint | Columns | Gap |
|------------|---------|-----|
| Mobile (< 640px) | 1 | 16px |
| Tablet (640–1024px) | 2 | 20px |
| Desktop (> 1024px) | 3–4 | 24px |

### Cell Sizing Rules
- Featured project hero cell: spans 2 columns on desktop
- Skill categories: equal-sized cells, 2-col on tablet
- About section: one large cell (intro) + smaller cells (interests, goals, focus)
- Project cards: uniform size within each section grid
- Allow one "highlight" cell per grid with `span-2` for visual hierarchy

---

## Per-Section UI Recommendations

### 1. Navbar

| Aspect | Recommendation |
|--------|----------------|
| Position | Fixed top, transparent on hero, glass background on scroll |
| Height | 64px desktop, 56px mobile |
| Logo | Left-aligned name or monogram |
| Links | Right-aligned, horizontal on desktop |
| Mobile | Hamburger icon → full-screen or slide-in drawer |
| Active state | Accent underline or text color on current section |
| Scroll behavior | Hide on scroll down, show on scroll up (optional) |

### 2. Hero

| Aspect | Recommendation |
|--------|----------------|
| Layout | Centered or left-aligned text with optional profile visual on right |
| Height | Full viewport (100vh) or min 80vh |
| Background | Subtle gradient mesh or animated particle grid (low opacity) |
| Name | Largest text on page, gradient text effect optional |
| Roles | Horizontal badge row or staggered fade-in |
| CTAs | Primary button (filled accent) + secondary (ghost/outline) |
| Visual | Optional: abstract 3D shape, code snippet aesthetic, or profile photo in glass frame |

### 3. About

| Aspect | Recommendation |
|--------|----------------|
| Layout | Bento grid — large intro cell + three smaller cells |
| Intro | Glass panel with body text, no more than 3 short paragraphs |
| Sub-sections | Icons for Interests, Goals, Current Focus |
| Visual | Optional subtle portrait or illustration in one cell |

### 4. Skills

| Aspect | Recommendation |
|--------|----------------|
| Layout | Bento grid with 7 category cells |
| Cell content | Category icon + name + technology badges |
| Icons | Simple line icons per category (code, server, phone, database, palette, brain, wrench) |
| Interaction | Subtle hover lift on cells; optional glow on category icon |
| Avoid | Skill percentage bars or radar charts |

### 5. Workflow

| Aspect | Recommendation |
|--------|----------------|
| Layout | Horizontal stepper on desktop, vertical on mobile |
| Steps | Numbered circles or icons connected by lines/arrows |
| Style | Glass cards per step with label + short description |
| Flow indicator | Animated arrow or gradient line connecting steps |
| Emphasis | Highlight "Figma Design" and "Development" as core identity steps |

### 6. Featured Project

| Aspect | Recommendation |
|--------|----------------|
| Layout | Full-width hero card + bento detail grid below |
| Hero card | Large screenshot/mockup, project title, tech badges, links |
| Detail blocks | Problem, Solution, Features, Technologies, Process, Impact in bento cells |
| Visual | App screenshots, detection overlay mockup, or map visualization |
| Hierarchy | This section should be the most visually impressive on the page |

### 7–9. Project Sections (Web, Mobile, AI)

| Aspect | Recommendation |
|--------|----------------|
| Layout | Uniform bento grid of project cards |
| Card content | Thumbnail, title, 1-line description, tech badges, link icons |
| Hover | Scale up slightly (1.02), increase glass brightness, show "View" overlay |
| Empty state | If few projects, use larger cards with more detail rather than empty grid cells |
| Consistency | Same card component across all three sections with category-specific accent tint |

### 10. Design Showcase

| Aspect | Recommendation |
|--------|----------------|
| Layout | Masonry or uniform grid of design thumbnails |
| Thumbnails | High-quality Figma exports with device frames |
| Categories | Filter tabs: All, Wireframes, Mockups, Prototypes, Design Systems |
| Interaction | Click to expand/lightbox (Phase 2) |
| Labels | Category badge + project name below each image |

### 11. Timeline

| Aspect | Recommendation |
|--------|----------------|
| Layout | Vertical timeline with line on left (mobile) or center (desktop) |
| Markers | Year in accent-colored circle on the line |
| Cards | Glass panel to the right (or alternating left/right on desktop) |
| Progression | Visual gradient on timeline line from muted (2023) to bright (2026) |

### 12. Contact

| Aspect | Recommendation |
|--------|----------------|
| Layout | Centered content, glass panel container |
| Social links | Large icon buttons in a row with platform labels |
| Email | Prominent, clickable mailto link |
| Form | Optional Phase 2 — minimal fields (name, email, message) |
| Background | Subtle accent gradient glow behind section |

### 13. Footer

| Aspect | Recommendation |
|--------|----------------|
| Layout | Three-column on desktop (name, branding, built-with), stacked on mobile |
| Style | Solid dark background (no glass) to anchor the page |
| Built-with | Small tech badges or text list |
| Border | Thin top border separating from contact section |

---

## Spacing System

Use a consistent 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight gaps |
| `sm` | 8px | Badge padding, icon gaps |
| `md` | 16px | Card inner padding (mobile) |
| `lg` | 24px | Card padding (desktop), grid gaps |
| `xl` | 32px | Section inner spacing |
| `2xl` | 48px | Between section elements |
| `3xl` | 64px | Section vertical padding (mobile) |
| `4xl` | 96px | Section vertical padding (desktop) |

---

## Iconography

- Use consistent icon set: **Lucide React** or **Heroicons**
- Size: 20px inline, 24px in cards, 32px in feature blocks
- Stroke width: 1.5px–2px
- Color: `foreground-muted` default, `accent-primary` on hover or active

---

## Accessibility Standards

| Requirement | Target |
|-------------|--------|
| Color contrast | WCAG 2.1 AA (4.5:1 body text, 3:1 large text) |
| Focus indicators | Visible 2px focus ring on all interactive elements |
| Keyboard navigation | All links, buttons, and menu items reachable via Tab |
| Skip link | "Skip to main content" as first focusable element |
| Alt text | Descriptive alt on all images and project thumbnails |
| Motion | Respect `prefers-reduced-motion` — disable animations |
| ARIA | `aria-label` on icon-only buttons, `aria-current` on active nav |
| Landmarks | Semantic HTML5 elements throughout |
| Touch targets | Minimum 44×44px on mobile interactive elements |

---

## Performance UX

| Practice | Target |
|----------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Image format | WebP with `next/image` optimization |
| Font loading | `next/font` with `display: swap` |
| Animation | GPU-accelerated transforms only (opacity, translate, scale) |
| Lazy loading | Below-fold images loaded lazily |
| Bundle size | Minimize client components; target < 100KB initial JS |
