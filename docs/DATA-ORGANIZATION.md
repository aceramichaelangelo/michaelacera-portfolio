# Data Organization Strategy

## Philosophy

All portfolio content lives in `src/data/` as **typed static modules**. Components are presentation-only; they never contain hardcoded copy, URLs, or project metadata.

Benefits:
- Add or update projects without touching component code
- TypeScript catches missing fields at compile time
- Content is version-controlled alongside code
- Easy migration path to CMS or MDX later

---

## Data Module Overview

| Module | Exports | Consumed By |
|--------|---------|-------------|
| `site.ts` | Site name, tagline, URL, copyright year | Layout, Footer, metadata |
| `navigation.ts` | Nav links array | Navbar, MobileMenu |
| `hero.ts` | Name, roles, intro, CTA buttons | Hero |
| `about.ts` | Intro, interests, goals, current focus | About |
| `skills.ts` | Skill categories with items | Skills |
| `workflow.ts` | Ordered workflow steps | Workflow |
| `projects.ts` | All projects with category filter | FeaturedProject, WebProjects, MobileProjects, AIProjects |
| `design.ts` | Design showcase items | DesignShowcase |
| `timeline.ts` | Year-based learning entries | Timeline |
| `contact.ts` | Email, social links | Contact |
| `footer.ts` | Built-with list, footer copy | Footer |

---

## Type Definitions (`src/types/`)

### SiteConfig

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Full name |
| `shortName` | string | Abbreviated name for logo |
| `title` | string | Professional title |
| `description` | string | Meta description |
| `url` | string | Production site URL |
| `copyrightYear` | number | Current year for footer |

### NavLink

| Field | Type | Description |
|-------|------|-------------|
| `label` | string | Display text |
| `href` | string | Anchor hash (e.g. `#about`) |
| `order` | number | Sort order in navigation |

### HeroContent

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Full name |
| `roles` | string[] | Professional branding tags |
| `introduction` | string | Short intro paragraph |
| `cta` | CTA[] | Call-to-action buttons |

### CTA

| Field | Type | Description |
|-------|------|-------------|
| `label` | string | Button text |
| `href` | string | Link target |
| `variant` | `'primary' \| 'secondary'` | Button style |

### AboutContent

| Field | Type | Description |
|-------|------|-------------|
| `introduction` | string | Main about paragraph |
| `interests` | string[] | Areas of interest |
| `careerGoals` | string[] | Career aspirations |
| `currentFocus` | string | What you're working on now |

### SkillCategory

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique slug |
| `name` | string | Category display name |
| `icon` | string | Icon identifier |
| `skills` | string[] | List of skill names |
| `order` | number | Display order |

### WorkflowStep

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique slug |
| `label` | string | Step name |
| `description` | string | Brief explanation |
| `icon` | string | Icon identifier |
| `order` | number | Pipeline position |

### Project (Core)

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `slug` | string | URL-safe slug for future routes |
| `title` | string | Project name |
| `description` | string | Short summary (1–2 sentences) |
| `longDescription` | string | Extended description |
| `category` | ProjectCategory | Grouping filter |
| `featured` | boolean | Show in featured section |
| `thumbnail` | string | Image path in `/public/images/projects/` |
| `images` | string[] | Additional screenshots |
| `technologies` | string[] | Tech stack tags |
| `links` | ProjectLink[] | Live demo, GitHub, etc. |
| `highlights` | string[] | Key features or achievements |
| `order` | number | Display order within category |

### ProjectCategory

Enum values: `'featured' | 'web' | 'mobile' | 'ai' | 'design'`

### FeaturedProjectDetail (extends Project)

Additional fields for the Native Flora spotlight:

| Field | Type | Description |
|-------|------|-------------|
| `problem` | string | Problem statement |
| `solution` | string | Solution overview |
| `features` | string[] | Feature list |
| `process` | string[] | Development process steps |
| `impact` | string | Project impact and outcomes |

### ProjectLink

| Field | Type | Description |
|-------|------|-------------|
| `label` | string | Link text |
| `url` | string | External URL |
| `type` | `'live' \| 'github' \| 'demo' \| 'figma'` | Link category |

### DesignItem

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `title` | string | Design piece name |
| `category` | DesignCategory | wireframe, mockup, prototype, etc. |
| `description` | string | Brief description |
| `image` | string | Image path in `/public/images/design/` |
| `tools` | string[] | Figma, etc. |
| `order` | number | Display order |

### DesignCategory

Enum values: `'wireframe' | 'mockup' | 'design-system' | 'prototype' | 'user-flow'`

### TimelineEntry

| Field | Type | Description |
|-------|------|-------------|
| `year` | number | Year marker |
| `title` | string | Period headline |
| `description` | string | What was learned/accomplished |
| `highlights` | string[] | Optional bullet points |
| `order` | number | Chronological order |

### SocialLink

| Field | Type | Description |
|-------|------|-------------|
| `platform` | string | Platform name |
| `url` | string | Profile URL |
| `icon` | string | Icon identifier |
| `label` | string | Accessible label |

---

## Project Data Grouping

All projects live in a single `projects.ts` array. Sections filter by `category`:

| Section | Filter |
|---------|--------|
| FeaturedProject | `featured === true` (Native Flora) |
| WebProjects | `category === 'web'` |
| MobileProjects | `category === 'mobile'` |
| AIProjects | `category === 'ai'` |

### Planned Project Entries

| ID | Title | Category | Featured |
|----|-------|----------|----------|
| `native-flora` | Native Flora Detection and Management System | `ai` | Yes |
| `flutter-apps` | Flutter Mobile Applications (collection) | `mobile` | No |
| `web-projects` | Modern Web Development Projects (collection) | `web` | No |
| `ai-cv-projects` | AI & Computer Vision Projects (collection) | `ai` | No |
| `uiux-portfolio` | UI/UX Design Portfolio (collection) | `design` | No |

> Individual sub-projects within collections can be broken out into separate `Project` entries as screenshots and descriptions become available.

---

## Content Exclusion Rules

The following project types must **never** appear in `projects.ts`:

- Bakery Management System
- Retail Sales Management System
- DNSC Clinic Management System
- Any other first-year academic CRUD projects

---

## Data Access Patterns

### Direct Import (Recommended for MVP)

Section components import the specific data module they need:

```
About.tsx  →  import { aboutContent } from '@/data/about'
```

### Filtered Queries (in `lib/` if logic grows)

If filtering becomes complex, add helper functions:

```
getProjectsByCategory('web')
getFeaturedProject()
getSkillsByCategory()
```

Keep helpers pure and colocated in `src/lib/` or `src/data/helpers.ts`.

---

## Asset Path Convention

| Asset Type | Path Pattern | Example |
|------------|--------------|---------|
| Profile photo | `/images/profile/{name}.webp` | `/images/profile/headshot.webp` |
| Project thumbnail | `/images/projects/{slug}-thumb.webp` | `/images/projects/native-flora-thumb.webp` |
| Project screenshots | `/images/projects/{slug}-{n}.webp` | `/images/projects/native-flora-1.webp` |
| Design exports | `/images/design/{slug}.webp` | `/images/design/flora-wireframe.webp` |
| Tech icons | `/icons/{tech}.svg` | `/icons/flutter.svg` |

Use **WebP** format for photos and screenshots. Use **SVG** for icons.

---

## Future Migration Paths

| Phase | Approach |
|-------|----------|
| **Now** | TypeScript data modules |
| **Later** | MDX files for project case studies with frontmatter |
| **Scale** | Headless CMS (Sanity) with matching TypeScript types |
| **API** | GitHub API to auto-fetch repo stats for project cards |

The type definitions in `src/types/` should remain the contract regardless of content source.
