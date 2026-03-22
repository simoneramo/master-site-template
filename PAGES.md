# Page Architecture Documentation

This document describes the 3-tier page system used in the Falcon 1 Master Template and how to work with it.

## Overview

The template uses a **3-tier architecture** to organize pages by their importance and likelihood of being needed. This system works with the Project Starter Tool to scaffold projects with only the necessary pages.

---

## Tier 1: Core Pages (Always Included)

These pages are essential for any website and cannot be toggled off.

| Page | Path | Purpose |
|------|------|---------|
| **Homepage** | `src/pages/index.astro` | Main landing page |
| **About** | `src/pages/about/index.astro` | Company/organization information |
| **Contact** | `src/pages/contact.astro` | Contact form and information |
| **Contact Thank You** | `src/pages/contact-thankyou.astro` | Contact form success page |
| **Home Thank You** | `src/pages/home-thankyou.astro` | Homepage form success page |
| **Privacy Policy** | `src/pages/privacy-policy.astro` | Legal privacy policy |
| **Terms** | `src/pages/terms-and-conditions.astro` | Legal terms of service |
| **404** | `src/pages/404.astro` | Error page for missing routes |

**CMS Content:** `src/content/homepage/`, `src/content/about/`, `src/content/contact/`

---

## Tier 2: Common Pages (Usually Included)

These are standard business pages that most projects need. The Project Starter prompts for each individually with smart defaults.

| Page | Path | Default | Purpose |
|------|------|---------|---------|
| **Services** | `src/pages/services/index.astro` | ✅ | Services overview with offerings grid |
| **Service Detail** | `src/pages/services/[slug].astro` | ✅ | Individual service pages |
| **Process** | `src/pages/process/index.astro` | ✅ | Process overview with steps |
| **Process Steps** | `src/pages/process/[slug].astro` | ✅ | Individual process step detail pages |
| **Pricing** | `src/pages/pricing/index.astro` | ✅ | Pricing tiers and features |
| **FAQ** | `src/pages/faq.astro` | ✅ | Frequently asked questions |
| **Blog/Insights** | `src/pages/insights/index.astro` | ✅ | Blog listing page |
| **Blog Post** | `src/pages/insights/[...slug].astro` | ✅ | Individual blog posts |
| **Team** | `src/pages/team/index.astro` | ✅ | Team members page |
| **Quote** | `src/pages/quote.astro` | ✅ | Quote request form |
| **Quote Thank You** | `src/pages/quote-thankyou.astro` | ✅ | Quote form success page |

**CMS Content:** `src/content/services/`, `src/content/insights/`, `src/content/process/`, `src/content/processSteps/`, `src/content/pricingPage/`, `src/content/teamPage/`, `src/content/faqPage/`, `src/content/quote/`

---

## Tier 3: Optional Pages (Toggle as Needed)

These specialized pages are presented as a multi-select checklist. Only include what the client actually needs.

| Page | Path | Purpose | When to Include |
|------|------|---------|-----------------|
| **Portfolio/Work** | `src/pages/work/index.astro` | Project showcase | Creative agencies, freelancers |
| **Work Detail** | `src/pages/work/[slug].astro` | Individual project case studies | With Portfolio/Work |
| **Reviews** | `src/pages/reviews/index.astro` | Testimonials hub | Service businesses |
| **Careers** | `src/pages/careers/index.astro` | Job listings | Growing companies |
| **Career Detail** | `src/pages/careers/[slug].astro` | Individual job postings | With Careers |
| **Partners** | `src/pages/partners/index.astro` | Partner showcase | Tech companies, agencies |
| **Partner Detail** | `src/pages/partners/[slug].astro` | Individual partner pages | With Partners |
| **Events** | `src/pages/events/index.astro` | Events & webinars | Community-focused orgs |
| **Event Detail** | `src/pages/events/[slug].astro` | Individual event pages | With Events |
| **Book/Schedule** | `src/pages/book/index.astro` | Appointment booking | Consultants, services |
| **Landing Page** | `src/pages/landing-page.astro` | Marketing landing page | Campaign-focused projects |

**CMS Content:** `src/content/workPosts/`, `src/content/reviewsPage/`, `src/content/jobs/`, `src/content/careersPage/`, `src/content/partnersPage/`, `src/content/partners/`, `src/content/eventsPage/`, `src/content/events/`, `src/content/bookPage/`, `src/content/landingPage/`

---

## Component Standardization

Pages use standardized components for consistent rendering:

### Hero Components
| Component | Purpose | Variants |
|-----------|---------|----------|
| `HeroSection` | Homepage hero with visual | `split`, `centered`, `bold` |
| `PageHeroSection` | Standard page hero | `center`, `left` |

### Section Components
| Component | Purpose | Props |
|-----------|---------|-------|
| `CTASection` | Call-to-action section | `variant: "center" or "left"` |
| `FAQ` | FAQ accordion | `variant: "center" or "left"` |
| `Reviews` | Testimonials display | - |

### TinaCMS Integration

All pages fetch content from TinaCMS using `getEntry()` or `getCollection()`:

```astro
---
const pageData = await getEntry("collectionName", "index");
const { hero, cta, faq } = pageData.data;
---

<PageHeroSection variant="center" data={hero} />
{faq && <FAQ variant="center" data={faq} />}
{cta && <CTASection variant="center" data={cta} />}
```

---

## Manual Page Management

### Deleting a Page

If you need to remove a page after scaffolding:

```bash
# Remove the page file
rm src/pages/work/index.astro

# Remove associated content (if applicable)
rm -rf src/content/work

# Remove from navigation (Header.astro, Footer.astro)
# Edit src/components/Header.astro
# Edit src/components/Footer.astro
```

### Adding a Page Back

If you need to restore a deleted page:

1. Copy from the master template:
   ```bash
   cp /path/to/master/template/src/pages/work/index.astro src/pages/work/
   ```

2. Restore associated content collections

3. Add navigation links

### Creating a New Optional Page

To add a new page that should be toggleable:

1. Create the page at `src/pages/your-page/index.astro`
2. Add `// 💡 OPTIONAL PAGE` comment at the top
3. Add to `template.config.json` in the appropriate tier:
   ```json
   {
     "path": "src/pages/your-page/index.astro",
     "name": "Your Page",
     "description": "What this page is for",
     "default": false
   }
   ```

---

## Navigation Management

### Header Navigation

The header navigation is defined in `src/components/Header.astro`. Update the `navLinks` array:

```typescript
const navLinks: NavLink[] = [
  { label: "Services", url: "/services", children: [...] },
  // Add or remove items based on selected pages
];
```

### Footer Navigation

The footer uses content from `src/content/globals/footer.md`. Update via TinaCMS or edit the markdown file directly.

---

## Content Collections Cleanup

When pages are removed, associated content collections should be cleaned up:

| Pages Removed | Clean Up |
|---------------|----------|
| Blog/Insights | `src/content/insights/`, `src/content/insightsPage/` |
| Services | `src/content/services/`, `src/content/offerings/` |
| Process | `src/content/process/`, `src/content/processSteps/` |
| Work/Portfolio | `src/content/workPosts/`, `src/content/work/` |
| Careers | `src/content/jobs/`, `src/content/careersPage/` |
| Events | `src/content/events/`, `src/content/eventsPage/` |
| Partners | `src/content/partners/`, `src/content/partnersPage/` |
| Team | `src/content/teamPage/` |
| FAQ | `src/content/faqPage/` |
| Pricing | `src/content/pricingPage/` |
| Book | `src/content/bookPage/` |
| Landing Page | `src/content/landingPage/` |
| Reviews | `src/content/reviewsPage/`, `src/content/testimonials/` |
| Quote | `src/content/quote/` |

---

## Template Configuration

The `template.config.json` file controls:

- **Page tiers** and their organization
- **Default selections** for each page
- **Feature toggles** (blog, dark mode, contact form)
- **Project Starter prompts** configuration

Edit this file to modify the scaffolding behavior.

---

## Best Practices

1. **Keep stubs in master**: Always maintain full stubs in the master template
2. **Use clear descriptions**: Help users understand what each page is for
3. **Smart defaults**: Tier 2 pages should have sensible defaults
4. **Clean navigation**: Remove nav links when pages are deleted
5. **Content cleanup**: Remove unused content collections to reduce bloat
6. **Component reuse**: Use `PageHeroSection`, `CTASection`, and `FAQ` components for consistency

---

## Detail Pages (Dynamic Routes)

Some pages have associated detail pages that are automatically managed by the Project Starter:

| Parent Page | Detail Page | Pattern |
|-------------|-------------|---------|
| **Careers** | Job Detail | `src/pages/careers/[slug].astro` |
| **Events** | Event Detail | `src/pages/events/[slug].astro` |
| **Partners** | Partner Detail | `src/pages/partners/[slug].astro` |
| **Portfolio/Work** | Project Case Study | `src/pages/work/[slug].astro` |
| **Process** | Process Step | `src/pages/process/[slug].astro` |
| **Services** | Service Detail | `src/pages/services/[slug].astro` |
| **Insights** | Blog Post | `src/pages/insights/[...slug].astro` |

### How Detail Pages Work

- Detail pages are marked with `"hidden": true` in `template.config.json`
- They don't appear as separate toggles in the Project Starter UI
- When a parent page is **deselected**, its detail pages are **automatically deleted**
- When a parent page is **kept**, its detail pages are **preserved**

### Example

If you deselect "Portfolio / Work":
- ❌ `src/pages/work/index.astro` is deleted
- ❌ `src/pages/work/[slug].astro` is automatically deleted
- ❌ `src/content/workPosts/` is cleaned up

---

## Related Files

- `template.config.json` - Page configuration schema
- `.starter/bin/create.js` - Project Starter CLI
- `src/components/Header.astro` - Main navigation
- `src/components/Footer.astro` - Footer navigation
- `src/components/PageHeroSection.astro` - Standardized hero component
- `src/components/CTASection.astro` - Standardized CTA component
- `src/components/FAQ.astro` - Standardized FAQ component
