# Changelog

All notable changes to this template will be documented in this file.

## [Unreleased]

### Fixed

- Renamed `.env copy.example` → `.env.example` so the Project Starter scaffolder can correctly read and populate it
- Removed duplicate `<meta name="description">` tag from `MainLayout.astro`

### Changed

- `MainLayout.astro`: Replaced WeMakeSmall-specific default title/description props with generic placeholders
- `MainLayout.astro`: Replaced hardcoded JSON-LD schema URL with empty string placeholder
- `MainLayout.astro`: Removed WeMakeSmall Tawk.to live chat embed — replaced with a comment for adding a chat widget
- `MainLayout.astro`: Removed hardcoded template version banner at the bottom of every page
- `Header.astro`: Replaced logo text "Falcon 1 Beta" with generic "Your Brand" placeholder
- `Header.astro`: Replaced hardcoded phone number `0404 728 567` with generic `0400 000 000` placeholder
- `Footer.md`: Replaced all WeMakeSmall-specific social URLs, service links, phone number, email, and copyright with generic placeholders
- `astro.config.mjs`: Added clear comment explaining the `site` URL must be set before deploying
- `global.css`: Expanded `@theme` with full design token set (accent, bg, surface, border, text, muted, radii, shadows)
- `content/about/index.md`: Genericised — removed WeMakeSmall brand, Frankston/Peninsula location, founder personal history
- `content/contact/index.md`: Genericised — removed Frankston suburb list, replaced with generic area placeholders; replaced hardcoded emails
- `content/services/index.md`: Genericised — removed all agency-specific copy and Peninsula references
- `content/process/index.md`: Genericised — removed 28-day guarantee, WeMakeSmall brand mentions
- `content/components/index.md`: Genericised — removed personal testimonials (Simon Ramo's Vic Gov colleagues); replaced with generic placeholders
- `content/insights/`: Removed 28 throwaway test posts; kept and renamed 1 quality post; added 2 new example posts
- `pages/about/founder.astro`: Genericised — removed Simon Ramo bio, client logos (Vic Gov, Monash, etc.), replaced with `<!-- 💡 -->` comment placeholders throughout

### Added

- `CHANGELOG.md` — this file
- `src/pages/about/team.astro` — new `/team` page with 3-column team member grid, values section, and "we're hiring" CTA
- `footer.md`: Added "Meet the Team" link to About & contact nav column

## [1.0.0] — 2026-03-18

### Initial release

- Astro 5 + TinaCMS + Tailwind CSS v4 + Alpine.js stack
- Full page set: Home, About, Services, Contact, Pricing (3 tiers), Insights/Blog, Process, FAQ, Referral, Tech, Resources, Sitemap, 404, Privacy, T&Cs
- `MainLayout.astro` with SEO, dark mode, canonical URLs, OG tags
- SSR via Vercel adapter
- Contact form via Resend
- Block-based component system (Hero, Features, CTA)
- `PROJECT_BIBLE.md` infrastructure documentation
