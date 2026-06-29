# Classic (Original) Component Variants

_Last updated: 2026-06-24_

The original legacy components from `src/components/*.astro` are now registered as
**"Classic (Original)"** variants in the component library / pattern registry.

Each legacy component was **copied** into its category folder under
`src/components/sections/<category>/` (so the copies are self-contained — the
originals in `src/components/` can be deleted without breaking the variants),
given a dedicated sample dataset, and registered in
`src/data/pattern-registry.ts`.

The library now shows **190 variants** (was 179 — +11).

## Registered Classic variants

| Category | Variant | Component file (`sections/<cat>/`) | Sample data |
|---|---|---|---|
| heroes | Classic (Original) | `HeroClassic` | `SAMPLE_HERO_CLASSIC` |
| banners | Classic (Original) | `PageHeroClassic` | `SAMPLE_PAGEHERO_CLASSIC` |
| faqs | Classic (Original) | `FaqClassic` | `SAMPLE_FAQ_CLASSIC` |
| testimonials | Classic (Original) + Classic Marquee | `TestimonialsClassic`, `TestimonialsMarqueeClassic` | `SAMPLE_TESTIMONIALS_CLASSIC` |
| features | Classic (Original) | `CardGridClassic` | `SAMPLE_CARDGRID_CLASSIC` |
| showcases | Classic (Original) | `CarouselClassic` | `SAMPLE_CARDGRID_CLASSIC` |
| portfolios | Classic (Original) | `WorkGridClassic` | `SAMPLE_WORKGRID_CLASSIC` |
| forms | Classic (Original) | `ContactFormClassic` | `SAMPLE_CONTACTFORM_CLASSIC` |
| ctas | Classic (Original) | `CtaSectionClassic` | `SAMPLE_CTASECTION_CLASSIC` |
| pricing | Classic (Original) | `PricingTiersClassic` | `SAMPLE_PRICING_CLASSIC` |

(Header/Footer were ported earlier as `HeaderClassic` / `FooterClassic`, which use
the section-level `SAMPLE_HEADER` / `SAMPLE_FOOTER` data.)

## Infrastructure added (so bespoke-shaped variants render correctly)

Per-variant `dataKey` support — a registry variant can override its section's
default `dataKey`:

- Component-library renderer: `src/pages/component-library/[section].astro`
  (computes `variantData` from `variant.dataKey`, falling back to the section sample).
- Scaffolder composer: `Project Starter/src/page-composer.js`
  (`const dataKey = variantInfo.dataKey || section.dataKey`).

Sample datasets live at the end of `src/data/sample-data.ts`
(`SAMPLE_*_CLASSIC`), each matching its legacy component's own data shape.

They appear at `/component-library/heroes`, `/faqs`, etc., and are pickable in the
Project Starter builder.

## ⚠️ Before deleting the originals in `src/components/`

The Classic variants are independent copies, **but the master template's own demo
pages still import the originals**. Notably `src/pages/index.astro` imports:
`HeroSection`, `FAQ`, `Testimonials`, `TestimonialsMarquee`, `CardGrid`,
`WorkGrid`, `CarouselSection`, `ContactForm`, `Breakout`.

Deleting e.g. `src/components/HeroSection.astro` will break `index.astro`'s build.

To safely delete the originals, either:
1. **Repoint** the demo pages to the new `sections/.../*Classic.astro` copies, then
   delete the originals; or
2. Replace/empty the demo `index.astro` (scaffolded projects no longer use these
   demo pages — pages are built from the composer).

## Skipped intentionally

`Breakout` and `CaseStudy` — layout/slot wrappers, not data-driven section
components, so they don't fit the variant model.
