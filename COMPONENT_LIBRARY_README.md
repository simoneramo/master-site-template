# Component Library Build Process

We are building a robust Component Library inside the `master-site-template` to house all 97 layout patterns (mapped from the Design Prompt Builder). This ensures every pattern is production-ready code that can be dropped into any site built with this template.

---

## 🏗️ Current Status

### ✅ Phase 1 — Foundation (COMPLETE)
- `src/data/pattern-registry.ts` — Single source of truth for all 97 variants across 17 sections
- `src/data/sample-data.ts` — Typed data interfaces and sample dummy data for previews
- `src/pages/component-library/index.astro` — Overview page showing all 17 sections with progress bars
- `src/pages/component-library/[section].astro` — Dynamic detail page with live previews + placeholders

### ✅ Phase 2 — Built Component Sections (COMPLETE)

| Section | Variants | Status |
|---|:---:|---|
| **Heroes** | 9/9 | ✅ Complete |
| **Navigation / Header** | 8/8 | ✅ Complete |
| **Footer** | 6/6 | ✅ Complete |
| **Final CTA** | 7/7 | ✅ Complete |
| **FAQ** | 5/5 | ✅ Complete |
| **Trust Bar** | 5/5 | ✅ Complete |
| **Pricing** | 5/5 | ✅ Complete |
| **Services Grid** | 8/8 | ✅ Complete |
| **Testimonials** | 7/7 | ✅ Complete |
| **Features Grid** | 6/6 | ✅ Complete |
| **Benefits** | 6/6 | ✅ Complete |
| **Process / How it Works** | 5/5 | ✅ Complete |
| **Portfolio / Gallery** | 7/7 | ✅ Complete |
| **Problem / Agitation** | 5/5 | ✅ Complete |
| **Solution** | 5/5 | ✅ Complete |
| **Video / Demo** | 5/5 | ✅ Complete |
| **Newsletter Signup** | 5/5 | ✅ Complete |

### ✅ Phase 3 — Integration Layer (COMPLETE)

| Task | Description | Status |
|---|---|:---:|
| **Task 5** | CMS → Component Adapter Layer (`src/lib/adapters.ts`) | ✅ Complete |
| **Task 6** | Edge Case Sample Data (minimal/large/bare datasets) | ✅ Complete |
| **Task 7** | Preview Thumbnails (`pnpm capture-previews`) | ✅ Complete |

**Progress: 103/103 variants built (100%) - COMPLETE! 🎉**

**Quick Commands:**
```bash
# Capture all preview thumbnails (103 images, ~50MB)
pnpm capture-previews

# View visual gallery
open http://localhost:4321/component-library/gallery
```

**Generated Files:** `public/previews/{section}/{variant}.png` (103 thumbnails)

---

## 🚀 How to Preview

1. Run `pnpm dev` (or `npm run dev`) in the `master-site-template` folder.
2. Navigate to `http://localhost:4321/component-library` in your browser.
3. Click into any section to see live previews of built variants.

---

## 🛠️ How to Continue Building

### Quick Start Prompt for AI
When starting a new session, give the AI this prompt:

> **"Please read `COMPONENT_LIBRARY_README.md` to get up to speed. I want to continue building the component library. Let's build the [SECTION NAME] variants next."**

### The Build Workflow for Each Variant

1. **Check the Registry**: Look at `src/data/pattern-registry.ts` for the next planned variant. Note its `component` name and `brief` description.

2. **Create the File**: Create in the correct section folder:
   ```astro
   src/components/sections/[section-name]/[VariantName].astro
   ```

3. **Use the Standard Props**: Import the correct data type from `sample-data.ts`:
   ```astro
   ---
   import type { HeroData } from '../../../data/sample-data';
   
   interface Props {
     data: HeroData;
   }
   
   const { data } = Astro.props;
   ---
   <section>
     {/* Build the layout based on the brief */}
   </section>
   ```

4. **Update Registry Status**: In `pattern-registry.ts`, change the variant's `status` from `'planned'` to `'ready'`.

5. **Verify**: Check `http://localhost:4321/component-library/[section]` to see the live preview.

### Important Conventions
- **One file per variant** — no if/else branching in a single file
- **Same data interface per section** — all variants for a section accept the same props
- **Tailwind v4** — use `bg-linear-to-*` (not `bg-gradient-to-*`)
- **Dark mode** — every variant must support `dark:` classes
- **Responsive** — mobile-first, works at all breakpoints
- **Alpine.js** — use for interactive behavior (accordions, carousels, etc.)

---

## 📂 File Structure

```text
src/
├── components/
│   └── sections/
│       ├── heroes/        (9/9 built) ✅
│       ├── headers/       (8/8 built) ✅
│       ├── footers/       (5/5 built) ✅
│       ├── ctas/          (7/7 built) ✅
│       ├── faqs/          (5/5 built) ✅
│       ├── trust-bars/    (5/5 built) ✅
│       ├── pricing/       (5/5 built) ✅
│       ├── services/      (8/8 built) ✅
│       ├── testimonials/  (7/7 built) ✅
│       ├── features/      (6/6 built) ✅
│       ├── benefits/      (6/6 built) ✅
│       ├── processes/     (5/5 built) ✅
│       ├── portfolios/    (7/7 built) ✅
│       ├── problems/      (5/5 built) ✅
│       ├── solutions/     (5/5 built) ✅
│       ├── videos/        (5/5 built) ✅
│       └── newsletters/   (5/5 built) ✅
│
├── data/
│   ├── pattern-registry.ts   ← Section/variant definitions + dataKey mapping
│   └── sample-data.ts        ← Typed interfaces + default + edge case data
│
├── lib/
│   └── adapters.ts            ← 19 adapter functions (CMS → Component props)
│
└── pages/
    └── component-library/
        ├── index.astro        ← Overview dashboard
        └── [section].astro    ← Dynamic section detail page
```
