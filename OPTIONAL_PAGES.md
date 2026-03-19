# Optional Pages Guide

This template includes several optional pages that you can enable based on your project needs. These pages are managed through the **Project Starter Tool** or can be manually enabled.

## Available Optional Pages

### 1. Portfolio / Work (`/work`)
Showcase your projects and case studies with a beautiful grid layout.
- **Content Collection:** `portfolio`
- **Detail Pages:** `/work/[slug]` - Individual project case studies
- **Best For:** Agencies, freelancers, creative businesses

**To Enable:**
1. Select "Portfolio / Work" in Project Starter, OR
2. Uncomment the nav link in `Header.astro`:
   ```astro
   { label: "Our Work", url: "/work" },
   ```
3. Uncomment the footer link in `src/content/globals/footer.md`

---

### 2. Careers / Jobs (`/careers`)
Job listings with detailed role descriptions and application process.
- **Content Collection:** `jobs`
- **Detail Pages:** `/careers/[slug]` - Individual job postings
- **Best For:** Growing companies, agencies hiring talent

**To Enable:**
1. Select "Careers / Jobs" in Project Starter, OR
2. Uncomment the nav link in `Header.astro`:
   ```astro
   { label: "Careers", url: "/careers" },
   ```
3. Uncomment the footer link in `src/content/globals/footer.md`

---

### 3. Events / Webinars (`/events`)
Promote workshops, webinars, and networking events.
- **Content Collection:** `events`
- **Detail Pages:** `/events/[slug]` - Individual event pages with registration
- **Best For:** Community-focused businesses, educators, SaaS companies

**To Enable:**
1. Select "Events / Webinars" in Project Starter, OR
2. Uncomment the nav link in `Header.astro`:
   ```astro
   { label: "Events", url: "/events" },
   ```
3. Uncomment the footer link in `src/content/globals/footer.md`

---

### 4. Partners / Integrations (`/partners`)
Showcase your technology partners and integrations.
- **Content Collection:** `partners`
- **Detail Pages:** `/partners/[slug]` - Individual partner pages
- **Best For:** Tech companies, agencies with partner ecosystems

**To Enable:**
1. Select "Partners / Integrations" in Project Starter, OR
2. Uncomment the nav link in `Header.astro`:
   ```astro
   { label: "Partners", url: "/partners" },
   ```
3. Uncomment the footer link in `src/content/globals/footer.md`

---

### 5. Reviews / Testimonials (`/reviews`)
Display client testimonials and ratings.
- **Content Collection:** `testimonials`
- **Detail Pages:** None (single page display)
- **Best For:** Service businesses, agencies, consultants

**To Enable:**
1. Select "Reviews / Testimonials" in Project Starter, OR
2. Uncomment the footer link in `src/content/globals/footer.md`:
   ```yaml
   - label: Reviews
     url: /reviews
   ```

---

### 6. Book / Schedule (`/book`)
Appointment booking and consultation scheduling.
- **Content Collection:** None (uses external booking embed)
- **Detail Pages:** None
- **Best For:** Consultants, service providers, agencies

**To Enable:**
1. Select "Book / Schedule" in Project Starter, OR
2. Uncomment the nav link in `Header.astro`:
   ```astro
   { label: "Book a Call", url: "/book" },
   ```
3. Uncomment the footer link in `src/content/globals/footer.md`
4. Embed your booking platform (Calendly, Cal.com, etc.) in the page

---

## Enabling Pages Manually

If you're not using the Project Starter Tool, follow these steps:

### Step 1: Keep the Page Files
Don't delete the page files from `src/pages/`. Keep:
- `src/pages/work/` (portfolio)
- `src/pages/careers/` (jobs)
- `src/pages/events/` (events)
- `src/pages/partners/` (partners)
- `src/pages/reviews/` (testimonials)
- `src/pages/book/` (booking)

### Step 2: Add Navigation Links

**Header Navigation:**
Edit `src/components/Header.astro` and uncomment the relevant nav links (marked with `💡 OPTIONAL`).

**Footer Navigation:**
Edit `src/content/globals/footer.md` and uncomment the relevant links.

### Step 3: Add Content via TinaCMS

1. Run `npm run dev`
2. Go to `http://localhost:4321/admin`
3. Navigate to the relevant collection (Jobs, Events, Partners, etc.)
4. Add your content

---

## Disabling Optional Pages

### Using Project Starter
Simply uncheck the page in the "Optional Pages" section during project scaffolding.

### Manual Removal
If you've already scaffolded the project:

1. Delete the page directory:
   ```bash
   rm -rf src/pages/work
   rm -rf src/pages/careers
   # etc.
   ```

2. Delete the content collection:
   ```bash
   rm -rf src/content/portfolio
   rm -rf src/content/jobs
   # etc.
   ```

3. Remove navigation links from Header and Footer

4. Remove the collection from `src/content.config.ts`

5. Remove the TinaCMS config from `tina/config.ts`

---

## Detail Pages

Each optional page (except Reviews and Book) has associated detail pages:

| Parent Page | Detail Page Pattern | Example |
|-------------|---------------------|---------|
| `/work` | `/work/[slug]` | `/work/website-redesign` |
| `/careers` | `/careers/[slug]` | `/careers/senior-developer` |
| `/events` | `/events/[slug]` | `/events/intro-webinar` |
| `/partners` | `/partners/[slug]` | `/partners/vercel` |

Detail pages are automatically generated at build time based on your content.

---

## Content Structure

Each optional page uses a TinaCMS content collection. See the sample files in:
- `src/content/portfolio/`
- `src/content/jobs/`
- `src/content/events/`
- `src/content/partners/`
- `src/content/testimonials/`

For the full schema, see:
- `src/content.config.ts` (Astro content collections)
- `tina/config.ts` (TinaCMS configuration)
