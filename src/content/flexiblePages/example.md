---
title: Example Flexible Page
description: A demonstration of the flexible blocks system with registry-powered sections
blocks:
  - _template: heroes
    variant: centered
    eyebrow: Welcome
    heading: Build Something Amazing
    description: Create beautiful pages with flexible blocks — pick any section from the component library.
    primaryCta:
      text: Get Started
      url: /contact
    secondaryCta:
      text: View Components
      url: /component-library
  - _template: features
    variant: threeCol
    eyebrow: Capabilities
    heading: What You Can Build
    description: Every section in our component library is available as a block.
    features:
      - icon: 🦸
        heading: Hero Sections
        description: Eye-catching headers with multiple layout variants
      - icon: ✨
        heading: Feature Grids
        description: Showcase your offerings in flexible grid layouts
      - icon: ⭐
        heading: Testimonials
        description: Social proof with carousel, masonry, and card layouts
      - icon: 💰
        heading: Pricing Tables
        description: Tiered pricing with feature comparison
      - icon: ❓
        heading: FAQ Sections
        description: Accordion, grid, and searchable FAQ layouts
      - icon: 📊
        heading: Stats & Metrics
        description: Data-driven sections with animated counters
  - _template: ctas
    variant: centeredBanner
    eyebrow: Ready?
    heading: Start Building Today
    description: Pick your sections, choose your variants, and assemble pages that convert.
    primaryCta:
      text: Get Started
      url: /contact
---
