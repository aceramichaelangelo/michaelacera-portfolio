# Responsive Design Strategy

## Approach: Mobile-First

All layouts are designed for the smallest screen first, then enhanced with progressive breakpoints. This aligns with recruiter behavior — many first impressions happen on mobile devices.

---

## Breakpoint System

Aligned with Tailwind CSS default breakpoints:

| Token | Min Width | Target Devices |
|-------|-----------|----------------|
| `default` | 0px | Mobile phones (portrait) |
| `sm` | 640px | Large phones (landscape), small tablets |
| `md` | 768px | Tablets (portrait) |
| `lg` | 1024px | Tablets (landscape), small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops, external monitors |

### Custom Considerations

| Range | Notes |
|-------|-------|
| 320px–375px | Minimum supported width (iPhone SE) |
| 768px–1024px | Tablet zone — bento grids switch from 1 → 2 columns |
| 1280px+ | Full desktop experience with max content width |

---

## Container Strategy

| Breakpoint | Max Width | Horizontal Padding |
|------------|-----------|-------------------|
| Mobile | 100% | 16px (1rem) |
| `sm` | 100% | 24px (1.5rem) |
| `md` | 100% | 32px (2rem) |
| `lg` | 1024px | 32px |
| `xl` | 1200px | 32px |
| `2xl` | 1280px | 32px |

Content never exceeds **1280px** wide, centered with auto margins.

---

## Per-Section Responsive Behavior

### Navbar

| Breakpoint | Behavior |
|------------|----------|
| Mobile | Hamburger menu icon, logo/name left, full-screen drawer |
| `md`+ | Horizontal nav links visible, hamburger hidden |
| All | Fixed position, glass background appears after scrolling past hero |

### Hero

| Breakpoint | Behavior |
|------------|----------|
| Mobile | Single column, centered text, stacked CTAs (full width buttons) |
| `md` | Larger typography, CTAs side by side |
| `lg` | Optional two-column: text left, visual element right |
| All | Min-height 80–100vh |

### About (Bento Grid)

| Breakpoint | Grid |
|------------|------|
| Mobile | 1 column — intro, then interests, goals, focus stacked |
| `md` | 2 columns — intro spans full width, three cells below in 2+1 layout |
| `lg` | 3 columns — intro spans 2 cols, focus in third; interests + goals below |

### Skills (Bento Grid)

| Breakpoint | Grid |
|------------|------|
| Mobile | 1 column, all categories stacked |
| `sm` | 2 columns |
| `lg` | 3 columns |
| `xl` | 4 columns (or 3 with larger cells) |

### Workflow

| Breakpoint | Layout |
|------------|--------|
| Mobile | Vertical stepper, steps stacked with downward arrows |
| `md` | Horizontal stepper, steps in a row with rightward arrows |
| `lg` | Horizontal with more spacing, step descriptions visible |

### Featured Project

| Breakpoint | Layout |
|------------|--------|
| Mobile | Hero card full width, detail blocks stacked single column |
| `md` | Detail bento grid 2 columns |
| `lg` | Hero card with side-by-side image + text, detail grid 3 columns |

### Project Grids (Web, Mobile, AI)

| Breakpoint | Grid |
|------------|------|
| Mobile | 1 column |
| `sm` | 2 columns |
| `lg` | 3 columns |

### Design Showcase

| Breakpoint | Grid |
|------------|------|
| Mobile | 1 column, full-width images |
| `sm` | 2 columns |
| `lg` | 3 columns (masonry-style optional) |

### Timeline

| Breakpoint | Layout |
|------------|--------|
| Mobile | Vertical line on left, cards on right |
| `lg` | Centered vertical line, cards alternating left/right |

### Contact

| Breakpoint | Layout |
|------------|----------|
| Mobile | Stacked social icons (2×2 grid or horizontal scroll) |
| `md` | Social icons in a single row, centered |
| All | Glass panel with generous padding |

### Footer

| Breakpoint | Layout |
|------------|--------|
| Mobile | Stacked: name → branding → copyright → built-with |
| `md` | Two columns: name + branding left, built-with right |
| `lg` | Three columns: name, branding, built-with + copyright |

---

## Typography Scaling

Use fluid typography where possible (clamp-based) or breakpoint-stepped sizes:

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Hero name | 2.5rem | 3.5rem | 4.5rem |
| Section heading | 1.75rem | 2rem | 2.5rem |
| Body | 1rem | 1rem | 1.0625rem |
| Badge text | 0.75rem | 0.8125rem | 0.8125rem |

---

## Touch & Interaction

| Guideline | Specification |
|-----------|---------------|
| Minimum touch target | 44×44px |
| Button padding (mobile) | 12px vertical, 24px horizontal |
| Link spacing in mobile nav | 48px row height per item |
| Hover effects | Desktop only — use `@media (hover: hover)` |
| Tap feedback | Active state with slight scale down (0.98) on mobile |

---

## Image Responsiveness

| Image Type | Strategy |
|------------|----------|
| Hero background | CSS background-size cover, no image on mobile if performance concern |
| Project thumbnails | `next/image` with `sizes` attribute per breakpoint |
| Design showcase | Aspect-ratio containers (16:9 or 4:3) with object-fit cover |
| Profile photo | Square aspect ratio, max 200px on mobile, 280px on desktop |

### Recommended `sizes` Attribute Patterns

| Context | Sizes Value |
|---------|-------------|
| Full-width card image | `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw` |
| Project grid card | `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw` |
| Hero visual | `(max-width: 1024px) 0vw, 40vw` |

---

## Navigation Responsive Patterns

### Mobile Menu
- Trigger: hamburger icon (top right)
- Animation: slide-in from right or fade overlay
- Close: X icon, overlay tap, or Escape key
- Body scroll: locked while menu is open
- Focus trap: Tab cycles within open menu

### Section Anchors
- Smooth scroll on all devices
- Account for fixed navbar height (offset scroll target by ~64px)
- Active section highlighting works on both mobile and desktop

---

## Testing Matrix

Test on these viewport widths during development:

| Width | Device Simulation |
|-------|-------------------|
| 320px | iPhone SE |
| 375px | iPhone 12/13/14 |
| 390px | iPhone 14 Pro |
| 414px | iPhone Plus models |
| 768px | iPad portrait |
| 1024px | iPad landscape |
| 1280px | Laptop |
| 1440px | Desktop |
| 1920px | Full HD monitor |

### Browser Testing
- Chrome (primary)
- Firefox
- Safari (iOS and macOS)
- Edge

---

## Print Styles (Optional)

Low priority, but if implemented:
- Hide navbar, animations, and decorative backgrounds
- Single column layout
- Black text on white background
- Show all project URLs as text links
