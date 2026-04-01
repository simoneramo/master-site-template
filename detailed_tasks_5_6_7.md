# Tasks 5, 6, 7 — Detailed Breakdown

---

## Task 5: CMS → Component Adapter Layer (2–4 hours)

### The Problem

You have **two separate systems** that don't speak the same language:

**System A — The Component Library** (what we just built)
- 103 Astro components in `src/components/sections/`
- Each accepts typed props like `HeroData`, `TestimonialsData`, etc.
- Powered by `sample-data.ts` in the component browser

**System B — The CMS / Production Pages** (what's already deployed)
- Pages like `index.astro` import from `astro:content`
- Data comes from markdown files in `src/content/`
- Schemas defined in `content.config.ts` using Zod
- Uses **older** components from `src/components/` (not the new section library)

### The Mismatch — Real Example

Here's what the **homepage** currently does:

```typescript
// index.astro (current production page)
const homepageData = await getEntry("homepage", "index");
const hero = homepageData.data.hero;
// hero shape: { label, heading, description, buttonText, buttonLink, trustBadge }
```

Here's what the **new HeroSplitLR component** expects:

```typescript
// HeroSplitLR.astro (new component library)
const { data } = Astro.props;
const { eyebrow, heading, headingAccent, description, primaryCta, secondaryCta, image } = data;
// primaryCta shape: { text: string, url: string }
```

**Key differences:**
| CMS Field | Component Field | Issue |
|---|---|---|
| `label` | `eyebrow` | Different name |
| `buttonText` + `buttonLink` | `primaryCta: { text, url }` | Flat vs nested |
| `trustBadge` (string) | `trustBadge: { icon, title, subtitle }` | Simple string vs object |
| *(missing)* | `headingAccent` | Doesn't exist in CMS |
| *(missing)* | `secondaryCta` | Doesn't exist in CMS |
| *(missing)* | `image` | Doesn't exist in CMS hero |

### The Solution: Adapter Functions

Create a new file `src/lib/adapters.ts` with transform functions:

```typescript
// src/lib/adapters.ts

import type { HeroData, TestimonialsData, FaqData, ... } from '../data/sample-data';

/**
 * Transform CMS homepage hero data → HeroData props
 */
export function adaptHero(cms: any): HeroData {
  return {
    eyebrow: cms.label,
    heading: cms.heading,
    description: cms.description,
    primaryCta: {
      text: cms.buttonText || 'Get Started',
      url: cms.buttonLink || '/contact',
    },
    // secondaryCta: optional, CMS doesn't have this
    // image: optional, CMS doesn't have this for hero
    trustBadge: cms.trustBadge ? {
      icon: '⭐',
      title: cms.trustBadge,
      subtitle: '',
    } : undefined,
  };
}

/**
 * Transform CMS testimonials → TestimonialsData props
 */
export function adaptTestimonials(cms: any): TestimonialsData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    testimonials: cms.items.map((item: any) => ({
      quote: item.quote,
      name: item.authorName,
      title: item.authorTitle,
      photo: item.authorImage,
      rating: item.rating,
    })),
  };
}

/**
 * Transform CMS FAQ data → FaqData props
 */
export function adaptFaq(cms: any): FaqData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    items: cms.items.map((item: any) => ({
      question: item.question,
      answer: item.answer,
    })),
  };
}

// ... one adapter per section type
```

### How a Page Would Use It

**Before (current):**
```astro
---
import HeroSection from "../components/HeroSection.astro";  // OLD component
const hero = homepageData.data.hero;
---
<HeroSection variant="bold" data={hero} />
```

**After (with adapters):**
```astro
---
import HeroSplitLR from "../components/sections/heroes/HeroSplitLR.astro";  // NEW component
import { adaptHero } from "../lib/adapters";
const hero = adaptHero(homepageData.data.hero);
---
<HeroSplitLR data={hero} />
```

### Which Adapters are Needed

One for each CMS section that has a corresponding component library section:

| CMS Source | Adapter Function | Maps To |
|---|---|---|
| `homepage.hero` | `adaptHero()` | `HeroData` |
| `homepage.testimonials` | `adaptTestimonials()` | `TestimonialsData` |
| `homepage.faq` | `adaptFaq()` | `FaqData` |
| `homepage.features` | `adaptFeatures()` | `FeaturesData` |
| `homepage.problems` | `adaptProblems()` | `ProblemData` |
| `homepage.process` | `adaptProcess()` | `ProcessData` |
| `homepage.comparison` | `adaptBenefits()` | `BenefitsData` |
| `homepage.contactForm` | `adaptCta()` | `CtaData` |
| `globals.testimonials` | `adaptTestimonials()` | `TestimonialsData` |
| `globals.solutions` | `adaptSolution()` | `SolutionData` |
| `globals (footer)` | `adaptFooter()` | `FooterData` |
| `services.mainServices` | `adaptServices()` | `ServicesData` |
| `pricingPage.pricingTiers` | `adaptPricing()` | `PricingData` |

### Why Not Just Change the CMS Schemas?

You could align `content.config.ts` to match `sample-data.ts` interfaces directly. But:
- **All existing markdown content** would need to be rewritten
- **TinaCMS schema** would also need to change
- The adapter approach is **non-destructive** — existing pages keep working

---

## Task 6: Alternate Sample Data for Edge Cases (30 minutes)

### The Problem

Every component currently gets tested with one "perfect" dataset. But real-world usage will throw curveballs:

### What to Add

```typescript
// ── Minimal datasets (test with less data) ────────────

export const SAMPLE_TESTIMONIALS_MINIMAL: TestimonialsData = {
  heading: 'What our client says',
  testimonials: [
    {
      quote: 'Excellent work.',
      name: 'Jane Doe',
      rating: 5,
    },
  ],
  // No eyebrow, no description, no photos, no ratings breakdown
  // Does TestimonialsCarousel handle 1 item? Does ThreeCol show 1 card?
};

export const SAMPLE_PRICING_TWO_TIER: PricingData = {
  heading: 'Choose your plan',
  tiers: [
    { name: 'Basic', price: '$0', period: '/month', ... features: [2 items] },
    { name: 'Pro', price: '$49', period: '/month', ... features: [4 items] },
  ],
  // PricingThreeTier with 2 tiers — does the grid break?
  // PricingToggle with monthlyPrice: 0 — does the $0 display correctly?
};

export const SAMPLE_PORTFOLIO_MINIMAL: PortfolioData = {
  heading: 'Our work',
  projects: [
    { title: 'Project One', category: 'Design', image: {...} },
    { title: 'Project Two', category: 'Design', image: {...} },
  ],
  // PortfolioMasonry with 2 items — does the masonry still look good?
  // PortfolioFiltered with 1 category — does the filter bar still show?
};

// ── Long content (test with too much data) ────────────

export const SAMPLE_FAQ_LARGE: FaqData = {
  heading: 'FAQ',
  items: Array(20).fill(null).map((_, i) => ({
    question: `Question ${i + 1}: What about this really long question that wraps?`,
    answer: 'A detailed answer that is several paragraphs long...',
    category: ['General', 'Pricing', 'Technical'][i % 3],
  })),
  // FaqSearchable with 20 items — does search still perform well?
  // FaqAccordion with 20 items — does the page get too long?
};

// ── Missing optional fields ───────────────────────────

export const SAMPLE_HERO_BARE: HeroData = {
  heading: 'Welcome',
  description: 'We help businesses grow.',
  primaryCta: { text: 'Contact', url: '/contact' },
  // No eyebrow, no image, no headingAccent, no secondaryCta
  // Does HeroSplitLR collapse gracefully without an image?
  // Does HeroCentered still look good without an eyebrow?
};
```

### How to Use Them

Update the component browser `[section].astro` to add a data variant switcher:

```astro
<!-- Dropdown to switch between sample data sets -->
<select x-model="dataSet" class="...">
  <option value="default">Default Data</option>
  <option value="minimal">Minimal (edge case)</option>
  <option value="large">Large (stress test)</option>
</select>
```

This lets you visually verify each component handles real-world edge cases before shipping.

---

## Task 7: Component Preview Thumbnails (1–2 hours)

### The Problem

The component browser currently shows a text list of variant names. To select a variant, you have to scroll down and see each one rendered live. That's fine for browsing, but for the **Design Prompt Builder** or any future visual selector tool, you need small thumbnail previews.

### What to Build

A `public/previews/` directory with a small image per variant:

```
public/previews/
  heroes/
    hero-split-lr.webp       (400x250)
    hero-split-rl.webp
    hero-centered.webp
    hero-full-bleed.webp
    ...
  testimonials/
    testimonials-three-col.webp
    testimonials-carousel.webp
    ...
```

### Two Approaches

**Approach A: Manual Screenshots (Quick, Not Scalable)**
1. Open the component browser
2. Screenshot each variant
3. Crop and save to `public/previews/`

This works but you'd need to redo it every time a component changes.

**Approach B: Automated Capture Script (Better)**

Create a script that:
1. Starts a local dev server
2. Uses Playwright/Puppeteer to navigate to each section page
3. Scrolls to each variant
4. Takes a screenshot and saves it
5. Generates a manifest file

```javascript
// scripts/capture-previews.mjs
import { chromium } from 'playwright';
import { PATTERN_REGISTRY } from '../src/data/pattern-registry.ts';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const section of PATTERN_REGISTRY) {
  await page.goto(`http://localhost:4321/component-library/${section.slug}`);

  for (const variant of section.variants) {
    const el = await page.$(`#variant-${variant.key}`);
    if (el) {
      await el.screenshot({
        path: `public/previews/${section.slug}/${variant.key}.webp`,
        type: 'webp',
        quality: 80,
      });
    }
  }
}

await browser.close();
```

### Hooking Into the Registry

Add a `preview` field to `PatternVariant`:

```typescript
export interface PatternVariant {
  key: string;
  label: string;
  component: string;
  brief: string;
  status: 'ready' | 'wip' | 'planned';
  preview?: string;  // ← new: path to thumbnail image
}
```

Then auto-generate it:
```typescript
// In the registry, computed from convention:
preview: `/previews/${section.slug}/${variant.key}.webp`
```

### Where This Pays Off

1. **Design Prompt Builder** — visual variant picker instead of text dropdowns
2. **Client presentations** — show all layout options at a glance
3. **README / docs** — embed thumbnail galleries
4. **Future: Drag-and-drop page builder** — thumbnails as draggable cards

---

## Summary

| Task | What | Why | Effort |
|:---:|---|---|:---:|
| **5** | Adapter functions (`src/lib/adapters.ts`) | Bridge between CMS content and component library | 2–4 hrs |
| **6** | Edge case sample data | Prove components handle minimal/large/missing data | 30 min |
| **7** | Preview thumbnails per variant | Visual selection for tools and docs | 1–2 hrs |

> **Recommended order:** 5 → 6 → 7. The adapter layer is the critical path — without it, the component library can't be used on actual production pages.
