# Case Study: Falcon 1 — Master Site Template

**Type:** Product / Developer Tooling  
**Stack:** Astro 5, TinaCMS, Tailwind CSS v4, Alpine.js, Resend, Vercel  
**Version:** 2.0.0  
**Status:** Production-Ready

---

## Overview

Falcon 1 is a production-ready Astro site template designed to dramatically reduce the time it takes to launch a new client website — from days of boilerplate setup down to a focused strategy session and a single CLI command. It solves a problem that every freelance developer and small agency faces: every new project starts the same way, yet somehow takes just as long to get off the ground.

Rather than a simple starter kit with a hero section and a nav bar, Falcon 1 is an opinionated, full-featured platform — complete with a CMS, a contact system, a flexible block-based page builder, a 3-tier page architecture, a Project Starter CLI tool, and WCAG 2.1 accessible components across the board.

---

## The Problem

For a solo developer or boutique agency, spinning up a new client site involves a predictable, exhausting loop:

- Copy files from the last project
- Strip out client-specific content
- Rebuild the same FAQ, CTA, and contact form components — again
- Reconnect CMS schemas to fresh content collections
- Configure email delivery, environment variables, and deployment adapters
- Do it all before writing a single line of client-specific code

This repetition isn't just inefficient — it's risky. Configuration drift means each project subtly diverges from the last, making it harder to apply improvements retroactively or share patterns across codebases.

**The goal:** build once, deploy everywhere — with a template that's opinionated enough to be production-ready out of the box, but flexible enough to accommodate client-specific needs without fighting the system.

---

## The Solution

Falcon 1 approaches the problem at two levels:

1. **A master template repository** — the canonical source of truth for every component, page, schema, and style pattern.
2. **A Project Starter CLI tool** — which scaffolds a new project from the master template, allowing the developer to select only the pages and features the client actually needs.

Together, they eliminate the setup phase. A new project is ready to receive client content within minutes of the first `git clone`.

---

## Architecture

### 3-Tier Page System

Pages are categorised into three tiers based on how universally they're needed:

| Tier | Description | Examples |
|------|-------------|---------|
| **Tier 1 — Core** | Required on every site, non-negotiable | Homepage, About, Contact, 404, Privacy Policy |
| **Tier 2 — Common** | Standard business pages, included by default | Services, Blog, FAQ, Pricing, Process, Team |
| **Tier 3 — Optional** | Specialised pages, toggled per project | Portfolio, Careers, Reviews, Events, Partners, Book |

This structure drives the Project Starter CLI: Tier 1 pages are always scaffolded, Tier 2 pages can be opted out, and Tier 3 pages are presented as a multi-select checklist. Any pages not selected are cleanly removed — including their associated content collections, CMS schema entries, and navigation links.

The configuration is driven by [template.config.json](file:///Users/admin/Sites/master-site-template/template.config.json), a single source of truth that maps pages to their content collections, CMS fields, and default states. This means the starter tool logic is entirely data-driven — no hardcoded page names or special-cased deletion logic.

### Content Architecture

Content is managed through **TinaCMS** with **Astro Content Collections**. Every page has a corresponding collection with a strongly-typed schema defined in [src/content.config.ts](file:///Users/admin/Sites/master-site-template/src/content.config.ts) and mirrored in [tina/config.ts](file:///Users/admin/Sites/master-site-template/tina/config.ts). This dual-schema approach allows:

- **Visual editing** via the TinaCMS admin UI at `/admin`
- **Static generation** from Markdown files checked into Git
- **Type safety** throughout: all content is typed end-to-end, with Astro enforcing schema validity at build time

The content model distinguishes between:
- **Page-level data** (hero sections, CTAs, FAQs) — tied to a single page entry
- **Collection data** (blog posts, services, team members) — queried dynamically and rendered via dynamic routes

### Component Library

All UI is built from a shared component library in `src/components/`. Every component is an Astro component (`.astro`) accepting typed props, with no framework UI library dependency. Key components include:

| Component | Purpose |
|-----------|---------|
| `HeroSection.astro` | Homepage hero — supports `split`, `centered`, and `bold` variants |
| `PageHeroSection.astro` | Standard interior page hero — `center` or `left` aligned |
| `CTASection.astro` | Call-to-action block — used across pages |
| `FAQ.astro` | Interactive accordion — Alpine.js powered, variants for `center` / `left` |
| `Reviews.astro` | Testimonials display |
| `TestimonialsMarquee.astro` | Animated scrolling testimonials strip |
| `ContactForm.astro` | Full contact form with `centered` and `split` layout variants |
| `PricingTiers.astro` | Pricing cards with feature lists |
| `WorkGrid.astro` | Portfolio/case study grid |
| `CarouselSection.astro` | Scrollable card carousel |
| `CaseStudy.astro` | Detailed case study layout component |
| `BlockRenderer.astro` | Renders flexible block-based page content |

### Flexible Page Builder

Beyond static page templates, Falcon 1 includes a **flexible block-based page system** (`src/pages/flexible/`) that allows non-technical content editors to build arbitrary pages by composing blocks — without a developer needing to touch page code. The `BlockRenderer.astro` component maps CMS `_template` values to their corresponding Astro components, passing typed data props down.

### Dark Mode

Dark mode is implemented as a first-class feature using **Alpine.js** class strategy:

- System preference detection on first visit
- User toggle persisted to `localStorage`
- Instant, flicker-free toggle via Alpine reactive state
- Full Tailwind `dark:` class coverage across all components

---

## Technical Decisions

### Why Astro?

Astro's island architecture is a natural fit for a content-driven template. The vast majority of pages are static HTML — zero JavaScript unless a component opts into interactivity. This produces exceptional Core Web Vitals by default, which is non-negotiable for client site work where SEO performance matters.

Astro's Content Collections provide end-to-end typing for all markdown content, which prevents an entire class of runtime bugs that appear when content schemas drift from what the template expects.

### Why TinaCMS?

TinaCMS delivers visual editing without locking content into a proprietary database. Content lives as Markdown files in Git, meaning:

- Content is version-controlled alongside code
- Rollbacks are a `git revert` away
- The site builds without any external API dependency
- Editors get a WYSIWYG experience via the visual editor

TinaCMS's schema definition also doubled as the source of truth for Astro's `content.config.ts`, reducing duplication between the two systems.

### Why Tailwind CSS v4?

Tailwind v4's new CSS-native configuration approach (`@theme` in a CSS file rather than `tailwind.config.js`) aligns with the project's goal of reducing configuration boilerplate. The design system — high-contrast black/white primary palette, 2px borders, Inter variable font, hover inversions — is defined once in `src/styles/global.css` and flows through every component.

### Why Alpine.js?

Alpine.js provides reactive interactivity (mobile menus, dark mode toggles, FAQ accordions, form states) without a build step or a component framework. Components remain `.astro` files with no React or Vue dependency — keeping bundle sizes minimal and pages fully static-renderable.

### Why Resend?

The contact form uses Resend's API via a serverless API route (`src/pages/api/contact.ts`). Resend was chosen over alternatives (SendGrid, SMTP relay) for its developer-first API, generous free tier, and first-class Vercel integration — matching the project's deployment target.

---

## Key Features

### Accessibility-First Design

Every component is built to WCAG 2.1 AA/AAA standards:

- Semantic HTML5 throughout (`<nav>`, `<main>`, `<article>`, `<aside>`, etc.)
- Skip-to-content link on every page
- Full keyboard navigation for menus and interactive elements
- ARIA labels, roles, and live regions on dynamic components
- High-contrast default theme (black/white, 2px borders)
- Focus-visible styles on all interactive elements

### SEO Built-In

Every page includes:
- Dynamic `<title>` and `<meta description>` from CMS content
- Open Graph and Twitter Card meta tags
- JSON-LD structured data
- Auto-generated XML sitemap via `@astrojs/sitemap`
- Semantic heading hierarchy

### Project Starter CLI

The CLI tool (`template.config.json` + starter script) allows a new project to be scaffolded by answering a short sequence of prompts:

1. Project name
2. Domain
3. Optional page selection (Tier 3 checklist)
4. Blog inclusion toggle
5. Team page inclusion toggle

The tool then removes unselected pages, their content collections, their TinaCMS schema markers, and their navigation links — producing a clean, minimal project scoped exactly to what the client needs.

---

## Outcome

Falcon 1 v2.0.0 represents a mature, opinionated platform rather than a starter kit. It encodes months of accumulated decisions about how to structure Astro projects for client work — from content modelling to deployment — into a single, reusable repository.

**What launching a new project looks like with Falcon 1:**

1. Run the Project Starter CLI — select pages, name the project
2. Set up a TinaCMS project and copy the API keys into `.env`
3. Connect to a Resend account for email delivery
4. Push to GitHub and import into Vercel
5. Begin customising brand, content, and copy

The entire foundation — routing, CMS, email, dark mode, accessibility, SEO, sitemap — is already in place. The developer's attention goes to what's actually unique about the client: their brand, their content, their specific feature requirements.

---

## Reflections

Building a template that's truly reusable requires resisting the urge to hardcode anything client-specific — a discipline that pays off enormously on the second and third project, and becomes a compounding advantage with each new deployment. The 3-tier page system emerged as the most important architectural decision: it gave the Project Starter tool a principled data model to work from, rather than a list of files to delete.

The most significant ongoing challenge is keeping the master template current as the underlying technologies evolve — particularly TinaCMS's schema API and Tailwind v4's configuration model, both of which were significantly redesigned from their previous versions. Maintaining strong types and a documented customisation checklist helps ensure that client projects can be upgraded without regressions.

---

*Built with Astro 5 · TinaCMS · Tailwind CSS v4 · Alpine.js · Resend · Vercel*
