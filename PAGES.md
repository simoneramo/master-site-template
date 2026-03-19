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
| **Privacy Policy** | `src/pages/privacy-policy.astro` | Legal privacy policy |
| **Terms** | `src/pages/terms-and-conditions.astro` | Legal terms of service |
| **404** | `src/pages/404.astro` | Error page for missing routes |

**CMS Content:** `src/content/homepage/`, `src/content/about/`, `src/content/contact/`

---

## Tier 2: Common Pages (Usually Included)

These are standard business pages that most projects need. The Project Starter prompts for each individually with smart defaults.

| Page | Path | Default | Purpose |
|------|------|---------|---------|
| **Services** | `src/pages/services/index.astro` | ✅ | Services overview |
| **Service Detail** | `src/pages/services/[slug].astro` | ✅ | Individual service pages |
| **Pricing** | `src/pages/pricing/index.astro` | ✅ | Pricing overview |
| **One-Pager Pricing** | `src/pages/pricing/one-pager.astro` | ❌ | Single-page pricing option |
| **Landing Page Pricing** | `src/pages/pricing/landing-page.astro` | ❌ | Landing page pricing option |
| **Full Website Pricing** | `src/pages/pricing/full-website.astro` | ❌ | Full site pricing option |
| **Blog/Insights** | `src/pages/insights/index.astro` | ✅ | Blog listing page |
| **Blog Post** | `src/pages/insights/[...slug].astro` | ✅ | Individual blog posts |
| **FAQ** | `src/pages/faq.astro` | ✅ | Frequently asked questions |
| **Team** | `src/pages/about/team.astro` | ✅ | Team members page |
| **Founder** | `src/pages/about/founder.astro` | ❌ | Founder bio page |
| **Process** | `src/pages/process/index.astro` | ❌ | Process overview |
| **Process Steps** | `src/pages/process/[slug].astro` | ❌ | Individual process steps |

**CMS Content:** `src/content/services/`, `src/content/insights/`, `src/content/process/`, `src/content/processSteps/`

---

## Tier 3: Optional Pages (Toggle as Needed)

These specialized pages are presented as a multi-select checklist. Only include what the client actually needs.

| Page | Path | Purpose | When to Include |
|------|------|---------|-----------------|
| **Portfolio/Work** | `src/pages/work/index.astro` | Project showcase | Creative agencies, freelancers |
| **Case Studies** | `src/pages/case-studies/index.astro` | Detailed project stories | B2B, agencies, consultants |
| **Reviews** | `src/pages/reviews/index.astro` | Testimonials hub | Service businesses |
| **Careers** | `src/pages/careers/index.astro` | Job listings | Growing companies |
| **Partners** | `src/pages/partners/index.astro` | Partner showcase | Tech companies, agencies |
| **Events** | `src/pages/events/index.astro` | Events & webinars | Community-focused orgs |
| **Book/Schedule** | `src/pages/book/index.astro` | Appointment booking | Consultants, services |
| **Referral** | `src/pages/referral.astro` | Referral program | Growth-focused businesses |
| **Landing Page** | `src/pages/landing-page.astro` | Marketing LP | Campaign-focused projects |
| **Resources** | `src/pages/resources/index.astro` | Resource hub | Content-heavy sites |
| **Glossary** | `src/pages/resources/glossary.astro` | Terms definitions | Educational sites |
| **Tech Stack** | `src/pages/tech/index.astro` | Tools showcase | Developer-focused sites |
| **Tech Detail** | `src/pages/tech/[slug].astro` | Tool details pages | Developer-focused sites |

**CMS Content:** `src/content/tech/`, `src/content/common-web-terms/`, `src/content/templates/`

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
| Blog/Insights | `src/content/insights/` |
| Services | `src/content/services/`, `src/content/offerings/` |
| Process | `src/content/process/`, `src/content/processSteps/` |
| Tech Stack | `src/content/tech/` |
| Glossary | `src/content/common-web-terms/` |
| Templates | `src/content/templates/`, `src/content/templatesPage/` |

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

---

---

## Detail Pages (Dynamic Routes)

Some pages have associated detail pages that are automatically managed by the Project Starter:

| Parent Page | Detail Page | Pattern |
|-------------|-------------|---------|
| **Careers** | Job Detail | `src/pages/careers/[slug].astro` |
| **Events** | Event Detail | `src/pages/events/[slug].astro` |
| **Partners** | Partner Detail | `src/pages/partners/[slug].astro` |
| **Portfolio/Work** | Project Case Study | `src/pages/work/[slug].astro` |

### How Detail Pages Work

- Detail pages are marked with `"hidden": true` in `template.config.json`
- They don't appear as separate toggles in the Project Starter UI
- When a parent page is **deselected**, its detail pages are **automatically deleted**
- When a parent page is **kept**, its detail pages are **preserved**

### Example

If you deselect "Portfolio / Work":
- ❌ `src/pages/work/index.astro` is deleted
- ❌ `src/pages/work/[slug].astro` is automatically deleted
- ❌ `src/content/portfolio/` is cleaned up

---

## Related Files

- `template.config.json` - Page configuration schema
- `.starter/bin/create.js` - Project Starter CLI
- `src/components/Header.astro` - Main navigation
- `src/components/Footer.astro` - Footer navigation
