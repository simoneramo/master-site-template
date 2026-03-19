# Master Site Template - Refinement Log

This document serves as a complete record of all the architectural decisions, design updates, content modifications, and bug fixes applied to the `master-site-template` during our refinement sessions.

## 🎯 The Primary Objective
Transform the `master-site-template` from a client-specific site (originally built for WeMakeSmall / Paul Jeffers) into a generic template that the **Project Starter Tool** can easily clone, tokenize, and hydrate for any new client project.

---

## 🏗️ Phase 1 & 4: Token Hardening & Content Genericization
All hardcoded, client-specific values were stripped out and replaced with neutral placeholders, tokens, or developer instructions (`<!-- 💡 -->`).

*   **Layouts & Global Components:** 
    *   Hardcoded WeMakeSmall titles, descriptions, and JSON-LD URLs were replaced with generic placeholders in `MainLayout.astro` and `Header.astro`. 
    *   Removed client-specific scripts like the Tawk.to live-chat embed.
    *   Cleaned up `footer.md` to remove all specific social media links, contact details, and copyright terms.

*   **Page Content Genericization (`src/content/`):**
    *   `about/index.md`, `contact/index.md`, `services/index.md` completely updated to remove brand names, "Frankston/Mornington Peninsula" references, and "28-day" guarantees.
    *   `process/index.md` and `components/index.md` overhauled to provide professional, neutral copy and generic placeholder testimonials instead of real ones.

*   **Configuration Files:**
    *   Fixed `.env.example` (was incorrectly named `.env copy.example`).
    *   Updated `astro.config.mjs` to remove the invalid `site: ""` empty string and replaced it with a commented-out placeholder, allowing `npm run dev` to boot cleanly.

## 🎨 Phase 2: Design System Expansion
*   Expanded `src/styles/global.css` with a comprehensive `@theme` block containing a rich CSS design token system.
*   Included extensive tokens for semantic colours (bg, surface, border, text, muted), border radii, and shadow levels.
*   Client theming is now as simple as modifying a handful of CSS variables rather than hunting through Astro components.

## 📝 Phase 5: Missing Pages & Content Clean-up
*   **Blog / Insights Pass:**
    *   Deleted over 30 redundant, auto-generated placeholder blog posts from `src/content/insights/`.
    *   Maintained 3 high-quality example blog posts (e.g., "Website Speed and Revenue" and "Hiring a Web Developer") and fixed markdown linting issues.
*   **Team & Founder Pages:**
    *   Created a brand new `/team` page (`src/pages/about/team.astro`) with a generic 3-column grid structure utilizing initials/emojis as avatars, a values section, and a "we're hiring" CTA. Integrated this into the footer navigation.
    *   Genericized `founder.astro` by removing all personal references, bios, and specific client logos (Vic Gov, RMIT, etc.), embedding helpful `<!-- 💡 -->` developer instructions directly into the template.

## 🧹 DX Polish, Bug Fixes & Page Audits
*   **Development Boot Fixes:** 
    *   Resolved a critical crash on the dev server by adding a fallback to `canonicalURL` and `ogImage` generation in `MainLayout.astro`. Used `Astro.site ?? Astro.url` to gracefully handle local dev environments where `Astro.site` is unconfigured.
    *   Managed server port conflicts natively to let Astro, TinaCMS datalayer, and Tina GraphQL endpoints launch smoothly.
*   **Targeted Page Deletion (Audit pass):**
    *   Deleted `case-studies/paul-jeffers.astro` (too client-specific).
    *   Deleted `resources/white-papers.astro` (pointed to missing PDFs).
    *   Deleted `about/pricing.astro` (redundant/hardcoded prices; the application already has a `/pricing/` module).
    *   Deleted `sitemap.astro` (redundant, handled automatically by the Astro integration).
*   **Directory Genericization:**
    *   Rebuilt `case-studies/index.astro` to act as a clean data-driven loop of placeholder case study cards.
    *   Updated `resources/index.astro` to reflect only the active modules (Insights & Glossary).
*   **Changelog Implementation:** 
    *   Added a highly detailed `CHANGELOG.md` file tracking the template’s version history moving forward.

---

## 🚀 Proposed Architecture for Next Steps (Page Toggling)
The final step we discussed was how to handle pages that are only needed by *some* clients. We formulated a **3-Tier Page Architecture**:

1.  **Tier 1 (Core):** Always in (`/`, `/about`, `/contact`, `/privacy-policy`).
2.  **Tier 2 (Common but deletable):** Usually in (`/services`, `/pricing`, `/blog`, `/team`, `/faq`). 
3.  **Tier 3 (Highly Situational):** Kept as styled stubs in the template but easily toggled off (`/case-studies`, `/referral`, `/landing-page`).

### Future Execution Plan
1. Document the architecture in `PAGES.md`.
2. Add a `template.config.json` inside the master template that tells the Project Starter Tool which pages are optional.
3. Update the Project Starter scaffold tool so you can toggle these pages dynamically when scaffolding a new project. 

*All changes documented above have been successfully implemented and tested.*
