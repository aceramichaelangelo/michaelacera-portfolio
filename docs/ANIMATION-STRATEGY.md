# Animation Strategy — Framer Motion

## Principles

1. **Purposeful** — Every animation communicates hierarchy, guides attention, or provides feedback
2. **Subtle** — Student portfolio should feel polished, not overwhelming
3. **Performant** — Animate only `opacity`, `transform` (translate, scale, rotate)
4. **Accessible** — Respect `prefers-reduced-motion` in all cases
5. **Consistent** — Reuse shared variants from `src/lib/animations.ts`

---

## Animation Inventory

### Global Animations

| Animation | Trigger | Duration | Easing |
|-----------|---------|----------|--------|
| Page load fade | Mount | 0.4s | easeOut |
| Scroll progress bar | Scroll | Continuous | linear |
| Navbar glass appear | Scroll past 80px | 0.3s | easeInOut |

### Section Entrance Animations

All sections use scroll-triggered entrance via `whileInView` (Framer Motion):

| Property | From | To | Duration | Delay |
|----------|------|----|----------|-------|
| Opacity | 0 | 1 | 0.5s | 0s |
| Translate Y | 24px | 0 | 0.5s | 0s |
| Stagger children | — | — | 0.1s between | 0.1s per child |

**Viewport config:** `once: true`, `margin: "-80px"` (triggers slightly before section enters viewport)

### Per-Section Animation Details

#### Hero

| Element | Animation | Notes |
|---------|-----------|-------|
| Name | Fade up + slight scale (0.95 → 1) | Immediate on load, not scroll-triggered |
| Role badges | Stagger fade in from left | 0.1s stagger between badges |
| Introduction text | Fade up | 0.2s delay after name |
| CTA buttons | Fade up | 0.4s delay |
| Background | Slow gradient shift or floating particles | Infinite, very subtle (opacity 0.03–0.05) |

#### About

| Element | Animation |
|---------|-----------|
| Section heading | Standard scroll reveal |
| Bento cells | Stagger fade up, 0.1s between cells |
| Cell hover | Scale 1.02, border brightness increase, 0.2s |

#### Skills

| Element | Animation |
|---------|-----------|
| Category cells | Stagger fade up in grid order |
| Skill badges | Fade in within cell after cell appears (nested stagger) |
| Cell hover | Subtle glow on category icon, translate Y -2px |

#### Workflow

| Element | Animation |
|---------|-----------|
| Steps | Sequential reveal left-to-right (desktop) or top-to-bottom (mobile) |
| Connectors/arrows | Draw-in effect (scaleX or height from 0 to 1) |
| Step hover | Icon pulse or color shift |

#### Featured Project

| Element | Animation |
|---------|-----------|
| Hero card | Fade up with scale (0.97 → 1) |
| Screenshot | Subtle parallax on scroll (translateY at different rate) |
| Detail blocks | Stagger fade up, 0.08s between blocks |
| Tech badges | Pop in with scale (0.8 → 1) |

#### Project Cards (Web, Mobile, AI)

| Element | Animation |
|---------|-----------|
| Cards | Stagger fade up in grid |
| Card hover | Scale 1.02, shadow increase, 0.2s spring |
| Image hover | Subtle zoom (scale 1.05) within overflow hidden container |
| Link icons | Fade in on card hover |

#### Design Showcase

| Element | Animation |
|---------|-----------|
| Thumbnails | Stagger fade in |
| Thumbnail hover | Scale 1.03, overlay fade in with title |
| Category filter tabs | Underline slide to active tab (Phase 2) |

#### Timeline

| Element | Animation |
|---------|-----------|
| Timeline line | Draw down (height 0 → 100%) as section enters |
| Year markers | Scale in (0 → 1) sequentially |
| Entry cards | Slide in from alternating sides (desktop) or right (mobile) |

#### Contact

| Element | Animation |
|---------|-----------|
| Social icons | Stagger scale in (0.8 → 1) |
| Icon hover | Bounce or rotate slightly, color shift to accent |
| Glass panel | Fade up on scroll |

#### Footer

| Element | Animation |
|---------|-----------|
| Content | Simple fade in, no stagger needed |
| Built-with badges | Optional subtle fade |

---

## Shared Variant Definitions

Centralize in `src/lib/animations.ts`:

| Variant Name | Purpose |
|--------------|---------|
| `fadeIn` | Simple opacity fade |
| `fadeInUp` | Opacity + translateY (default section entrance) |
| `fadeInDown` | Opacity + negative translateY |
| `fadeInLeft` | Opacity + translateX from left |
| `fadeInRight` | Opacity + translateX from right |
| `scaleIn` | Opacity + scale (badges, icons) |
| `staggerContainer` | Parent variant with `staggerChildren` |
| `staggerItem` | Child variant paired with staggerContainer |

### Transition Presets

| Name | Duration | Ease |
|------|----------|------|
| `default` | 0.5s | `[0.25, 0.1, 0.25, 1]` |
| `fast` | 0.2s | `[0.25, 0.1, 0.25, 1]` |
| `spring` | — | `{ type: "spring", stiffness: 300, damping: 24 }` |
| `slow` | 0.8s | `[0.25, 0.1, 0.25, 1]` |

---

## MotionWrapper Component

A shared wrapper in `components/shared/MotionWrapper.tsx` standardizes scroll animations:

### Props (Planned)

| Prop | Type | Default | Purpose |
|------|------|---------|---------|
| `variant` | string | `fadeInUp` | Which animation variant to apply |
| `delay` | number | 0 | Entrance delay in seconds |
| `stagger` | boolean | false | Enable child staggering |
| `className` | string | — | Additional classes |

Every section wraps its content in `MotionWrapper` rather than duplicating `whileInView` logic.

---

## Navbar Animations

| Interaction | Animation |
|-------------|-----------|
| Mobile menu open | Slide in from right (300ms) or fade overlay |
| Mobile menu close | Reverse of open |
| Menu items | Stagger fade in after drawer opens |
| Nav link hover | Underline grows from center (width 0 → 100%) |
| Active section indicator | Smooth transition between nav items |

---

## Reduced Motion Strategy

### Implementation

Use a `useReducedMotion` hook that checks:

```
window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

### Behavior When Reduced Motion Is Active

| Normal | Reduced |
|--------|---------|
| Fade + slide entrance | Instant appear (opacity 1, no transform) |
| Stagger animations | All elements appear simultaneously |
| Hover scale effects | Color/opacity change only |
| Background animations | Static background |
| Parallax | Disabled |
| Scroll progress bar | Still visible (functional, not decorative) |
| Mobile menu slide | Instant show/hide |

---

## Performance Guidelines

### Do

- Use `transform` and `opacity` only
- Set `will-change: transform` sparingly on actively animating elements
- Use `once: true` on `whileInView` to prevent re-triggering
- Keep simultaneous animations under 20 elements per viewport
- Use `layout` prop only when necessary (layout recalculations are expensive)

### Do Not

- Animate `width`, `height`, `top`, `left`, `margin`, or `padding`
- Run infinite animations on large elements
- Animate blur values on scroll (expensive)
- Apply Framer Motion to every DOM node — wrap at section/container level
- Use heavy spring physics on lists with many items

---

## Client Component Boundary

Framer Motion requires client-side JavaScript. Minimize impact:

1. `MotionWrapper` is a client component
2. Section components remain server components where possible
3. Pass children through `MotionWrapper` to animate server-rendered content
4. Do not mark entire `page.tsx` as `"use client"`

---

## Animation Priority (Implementation Order)

| Priority | Animation | Phase |
|----------|-----------|-------|
| P0 | Section scroll reveal (fadeInUp) | MVP |
| P0 | Hero entrance sequence | MVP |
| P0 | Mobile menu open/close | MVP |
| P1 | Card hover effects | MVP |
| P1 | Stagger grids (skills, projects) | MVP |
| P2 | Workflow step sequence | Polish |
| P2 | Timeline draw animation | Polish |
| P2 | Navbar scroll glass transition | Polish |
| P3 | Hero background animation | Enhancement |
| P3 | Parallax on featured project | Enhancement |
| P3 | Scroll progress bar | Enhancement |
