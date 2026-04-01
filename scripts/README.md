# Component Preview Capture System

## Quick Start

```bash
# 1. Make sure the dev server is running
pnpm dev

# 2. In another terminal, capture previews
pnpm capture-previews
```

## What It Does

This script uses Playwright to automatically capture screenshots of every component variant:

1. Navigates to each section page (`/component-library/{section}`)
2. Finds all variants with `[data-variant]` attribute
3. Captures a screenshot of each variant
4. Saves as WebP to `public/previews/{section}/{variant}.webp`

## Output Structure

```
public/previews/
├── heroes/
│   ├── hero-split-lr.png
│   ├── hero-split-rl.png
│   ├── hero-centered.png
│   └── ...
├── testimonials/
│   ├── testimonials-three-col.png
│   ├── testimonials-carousel.png
│   └── ...
└── ... (17 sections total)
```

## Using Previews

### In the Pattern Registry

Each variant now has a `preview` field:

```typescript
export interface PatternVariant {
  key: string;
  label: string;
  component: string;
  brief: string;
  status: 'ready' | 'wip' | 'planned';
  preview?: string; // e.g., "/previews/heroes/hero-split-lr.webp"
}
```

### In a Visual Selector

```astro
<img 
  src={variant.preview} 
  alt={variant.label}
  class="w-full h-auto rounded-lg"
/>
```

### In the Design Prompt Builder

```typescript
// Get all variants with previews
const variantsWithPreviews = PATTERN_REGISTRY.flatMap(section => 
  section.variants.map(variant => ({
    ...variant,
    preview: `/previews/${section.slug}/${variant.key}.webp`
  }))
);
```

## Manual Capture (Alternative)

If you prefer manual screenshots:

1. Open `http://localhost:4321/component-library/{section}`
2. Screenshot each variant
3. Save to `public/previews/{section}/{variant-key}.png`
4. Recommended size: 800x500px

## Regenerating Previews

After changing a component's design:

```bash
# Re-run the capture script
pnpm capture-previews
```

Or capture just one section:

```bash
# Edit scripts/capture-previews.mjs and modify PATTERN_REGISTRY
# to only include the section you want to capture
```

## Notes

- The script requires the dev server to be running
- Screenshots are taken at 1280x800 viewport (1.5x device scale for crisp images)
- PNG format for lossless quality
- The script waits 500ms after scrolling for animations to settle
