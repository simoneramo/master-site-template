# Unified Data Architecture — Complete Summary

This document summarizes the architectural transition we implemented to unify the data management for the `master-site-template` project.

## The Problem
Previously, the project suffered from a **fragmented data architecture**:
- **Data was duplicated:** Field shapes were manually defined in `src/data/sample-data.ts` (TypeScript interfaces), `src/content.config.ts` (Zod schemas), and `tina/config.ts` (CMS editor UI).
- **Hard to maintain:** Adding a new field to a component meant updating 3–4 different files manually.
- **Adapter overhead:** Because CMS field names didn't match component prop names, a translation layer (`src/lib/adapters.ts`) was required to map data between them.
- **Limited page builder:** The `flexiblePages` system only supported 3 hard-coded block types (hero, features, cta) with very limited variant options.

## The Solution
We moved to a **Single Source of Truth** model driven by the Pattern Registry. We defined a canonical schema for every section type using a simple Domain-Specific Language (DSL). From this single source, we now auto-generate the validations (Zod) and the CMS configurations (Tina).

---

## Phase 1: Canonical Field Schemas ✅

**Goal:** Establish a single source of truth for all section data structures.

- **Created `src/data/section-fields.ts`:**
  - Designed a framework-agnostic `FieldDef` interface (`name`, `label`, `type`, `required`, etc.).
  - Created reusable field builders (e.g., `ctaField`, `imageField`, `sectionHeader`) to keep definitions DRY.
  - Defined the **canonical field schemas** for all 23 section types (heroes, features, ctas, footers, etc.).
  - *Key decision:* These new canonical field names map directly to component props, eliminating the need for translation adapters.

- **Updated `src/data/pattern-registry.ts`:** 
  - Attached the `fields` array from `section-fields.ts` to every section definition. The registry now serves as the central hub for variants, components, AND data shapes.

---

## Phase 2: Schema Generators ✅

**Goal:** Write utilities to transform the canonical schemas into the formats required by Astro and TinaCMS.

- **Created `src/data/schema-generators.ts`:**
  - **`toZodSchema` / `toZodBlockUnion`:** Dynamically generates Zod validation schemas for Astro's `content.config.ts`. It iterates through `FieldDef` arrays and returns tightly-typed `z.object()` and `z.discriminatedUnion()` validators.
  - **`toTinaFields` / `toTinaBlockTemplates`:** Translates the same `FieldDef` arrays into the JSON-like object structures that TinaCMS requires to build the editor UI.

---

## Phase 3: Wiring up Flexible Pages ✅

**Goal:** Use the new generators to power the flexible page builder, blowing its capabilities wide open.

- **Updated `src/content.config.ts`:**
  - Deleted 44 lines of hand-coded, brittle Zod schemas.
  - Replaced them with a single line: `z.array(toZodBlockUnion(z, PATTERN_REGISTRY))`.
- **Updated `tina/config.ts`:**
  - Deleted 215+ lines of manual template definitions.
  - Replaced them with: `templates: toTinaBlockTemplates(PATTERN_REGISTRY)`.
  - *Result:* Editors can now add **any of the 23 section types** to a flexible page, complete with a dropdown to select from over 100 visual variants.
- **Rewrote `BlockRenderer.astro`:**
  - Removed the hard-coded `switch` statement that only knew about 3 components.
  - Implemented dynamic component resolution: It uses `import.meta.glob` to map the `_template` and `variant` chosen by the editor directly to the correct `.astro` component file from the component library.
- **Content Migration:**
  - Updated the existing flexible page Markdown files (`example.md`, `flex-page.md`, `testtest.md`) to use the new canonical field names (e.g., renaming `label` to `eyebrow`, `items` to `features`, and pointing to the newly generated `_template` names).

---

## What's Next (Phase 4 - Pending)

To fully complete the transition, existing **fixed-layout pages** (like the Homepage, About, and Services pages) would need to be migrated to this new system:

1. **Content Update:** Rename the frontmatter fields in existing markdown files to match the new canonical names.
2. **Schema Update:** Update the fixed-page schemas in `content.config.ts` to use `toZodSchema()`.
3. **Template Update:** Update the page templates (e.g., `src/pages/index.astro`) to pass data directly into components.
4. **Cleanup:** Delete `src/lib/adapters.ts` entirely, as no translation layer will be needed anymore.
