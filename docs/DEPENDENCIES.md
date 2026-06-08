# Recommended Dependencies

Packages to install when implementation begins. Versions should be latest stable at time of setup.

---

## Core Framework

| Package | Purpose | Required |
|---------|---------|----------|
| `next` | React framework with App Router | Yes |
| `react` | UI library | Yes |
| `react-dom` | React DOM renderer | Yes |
| `typescript` | Type safety | Yes |

---

## Styling

| Package | Purpose | Required |
|---------|---------|----------|
| `tailwindcss` | Utility-first CSS framework | Yes |
| `@tailwindcss/postcss` | PostCSS plugin for Tailwind v4 | Yes |
| `postcss` | CSS processing pipeline | Yes |
| `clsx` | Conditional class name joining | Yes |
| `tailwind-merge` | Intelligent Tailwind class deduplication | Yes |

---

## Animation

| Package | Purpose | Required |
|---------|---------|----------|
| `framer-motion` | Scroll animations, transitions, gestures | Yes |

---

## Icons

| Package | Purpose | Required |
|---------|---------|----------|
| `lucide-react` | Consistent SVG icon set | Recommended |

> Alternative: `@heroicons/react` or custom SVGs in `/public/icons/`

---

## Theme (Optional)

| Package | Purpose | Required |
|---------|---------|----------|
| `next-themes` | Dark/light mode toggle with no flash | Optional |

> MVP uses dark mode only. Add `next-themes` if light mode toggle is desired.

---

## Fonts

| Package | Purpose | Required |
|---------|---------|----------|
| Built-in `next/font` | Self-hosted Google fonts (Inter, JetBrains Mono) | Yes |

> No additional font packages needed — `next/font/google` is included with Next.js.

---

## Development Tools

| Package | Purpose | Required |
|---------|---------|----------|
| `@types/node` | Node.js TypeScript types | Yes |
| `@types/react` | React TypeScript types | Yes |
| `@types/react-dom` | React DOM TypeScript types | Yes |
| `eslint` | Code linting | Yes |
| `eslint-config-next` | Next.js ESLint rules | Yes |
| `prettier` | Code formatting | Recommended |
| `prettier-plugin-tailwindcss` | Auto-sort Tailwind classes | Recommended |

---

## Phase 2 Dependencies (Future)

| Package | Purpose | When |
|---------|---------|------|
| `react-hook-form` | Contact form validation | Phase 2 |
| `zod` | Schema validation for forms | Phase 2 |
| `@emailjs/browser` or `resend` | Contact form email delivery | Phase 2 |
| `sharp` | Image processing (auto-installed by Next.js) | If custom image processing needed |

---

## Phase 3 Dependencies (Future)

| Package | Purpose | When |
|---------|---------|------|
| `@vercel/analytics` | Privacy-friendly analytics | Post-deployment |
| `@vercel/speed-insights` | Performance monitoring | Post-deployment |
| `playwright` | End-to-end testing | Phase 4 |
| `vitest` | Unit testing | Phase 4 |
| `@testing-library/react` | Component testing | Phase 4 |

---

## Dependencies to Avoid (For This Project)

| Package | Reason |
|---------|--------|
| `redux` / `@reduxjs/toolkit` | Unnecessary for static portfolio |
| `axios` | Use native `fetch` if API calls needed |
| `moment` | Use native `Intl` or `date-fns` if dates needed |
| `lodash` | Native JS methods sufficient |
| `styled-components` / `emotion` | Tailwind CSS handles styling |
| `bootstrap` | Conflicts with Tailwind; Bootstrap is a skill, not a portfolio dependency |
| `jquery` | Not applicable in React |
| Heavy animation libraries (GSAP, AOS) | Framer Motion is sufficient |

---

## Installation Command (Reference for Phase 1)

When ready to implement, the initial install will be approximately:

```
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npm install framer-motion clsx tailwind-merge lucide-react
npm install -D prettier prettier-plugin-tailwindcss
```

> Do not run this yet — it is documented here for the roadmap execution phase.

---

## `package.json` Scripts (Planned)

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | Local development server |
| `build` | `next build` | Production build |
| `start` | `next start` | Serve production build |
| `lint` | `next lint` | Run ESLint |
| `format` | `prettier --write .` | Format all files |

---

## Environment Variables (Planned)

| Variable | Purpose | Required |
|----------|---------|----------|
| `NEXT_PUBLIC_SITE_URL` | Production URL for metadata/OG | Yes |
| `RESEND_API_KEY` | Contact form email (Phase 2) | No |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (Phase 3) | No |

Store in `.env.local` (gitignored). Document all variables in `.env.example`.

---

## Bundle Size Targets

| Asset | Target |
|-------|--------|
| First Load JS | < 100 KB |
| Total page weight | < 1 MB (with images) |
| Framer Motion chunk | < 30 KB gzipped |
| Lucide icons | Tree-shaken per import — only import used icons |
