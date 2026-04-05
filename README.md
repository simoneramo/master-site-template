# Falcon 1 - Master Site Template

A modern, production-ready Astro template built with accessibility at its core and integrated with TinaCMS for easy content management. Features a complete website with blog functionality, dynamic pages, and full WCAG 2.1 compliance. This project is focused on accessibility, SEO optimisation, and high-contrast design.

## Features

- **Fully Accessible**: WCAG 2.1 AA/AAA compliant with semantic HTML, ARIA attributes, and keyboard navigation.
- **TinaCMS Integration**: visual editing for all pages, blog posts, and site configuration.
- **Dark Mode**: Complete dark mode support with system preference detection. Controlled by Alpine.js state, persisted in localStorage, and respects system preference on first visit.
- **Blog System**: Content collections managed via CMS with pagination, tags, and dynamic routing.
- **Contact Form**: Functional API route integrated with Resend for email delivery.
- **Responsive Design**: Mobile-first responsive design that works on all devices.
- **Modern Stack**: Built with Astro 5, Tailwind CSS 4, Alpine.js, and TinaCMS.
- **Performance Optimized**: Fast loading times and excellent Core Web Vitals scores.
- **SEO Ready**: Semantic markup, Open Graph/Twitter Card meta tags, JSON-LD structured data, and customizable title props for optimal search engine visibility.

## Technology Stack

- **Framework**: [Astro](https://astro.build)
- **CMS**: [TinaCMS](https://tina.io)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Interactivity**: [Alpine.js](https://alpinejs.dev)
- **Email**: [Resend](https://resend.com)
- **Typography**: System but any font can install via Fontsource

## Project Structure

```text
/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable Astro components
│   ├── content/       # Content collections (managed by Tina)
│   ├── layouts/       # Page layouts
│   ├── pages/         # Page routes and API endpoints
│   └── styles/        # Global styles
├── tina/              # TinaCMS configuration
└── package.json
```

### Architecture Details

- **Content Collections**: The site uses Astro's Content Collections for blog posts. Content schema is defined in `src/content/config.ts`.
- **Layouts**: `MainLayout.astro` is the base layout with SEO meta tags, dark mode support, skip-to-content link, Alpine.js integration, and font loading.
- **Routing**: Static pages are in `src/pages/*.astro`. Blog pagination is handled in `src/pages/blog/[...page].astro` and individual posts in `src/pages/blog/[...slug].astro`.
- **Components**: Includes `Header.astro` (sticky header with Alpine.js-powered mobile menu) and `Footer.astro`.

### Component Library

The template includes a comprehensive component library with **103 layout variants** across 23 section types:

| Section | Variants |
|---------|----------|
| Heroes, Headers, Footers, CTAs, FAQs | 9, 8, 6, 7, 5 |
| Trust Bars, Pricing, Services, Testimonials | 5, 5, 8, 7 |
| Features, Benefits, Process, Portfolio | 6, 6, 5, 7 |
| Team, Blog, Forms, Stats, Banners, Content | 3, 5, 3, 3, 4, 3 |

**Browse the library:**
- Run `npm run dev` and visit `http://localhost:4321/component-library`
- View live previews of all variants with sample data
- Use the gallery view for visual browsing

### Page Architecture (3-Tier System)

This template uses a 3-tier page system designed to work with the **Project Starter Tool**:

| Tier | Description | Pages |
|------|-------------|-------|
| **Tier 1 (Core)** | Always included, essential for any site | Homepage, About, Contact, Privacy Policy, Terms, 404 |
| **Tier 2 (Common)** | Usually included, standard business pages | Services, Pricing, Blog, Team, FAQ, Process |
| **Tier 3 (Optional)** | Toggle as needed via `template.config.json` | Portfolio, Careers, Partners, Reviews, Events, Book |

**Optional Pages Available:**
- `/work` - Portfolio/Work showcase
- `/careers` - Job listings and team culture
- `/partners` - Technology partners and integrations
- `/reviews` - Client testimonials and ratings
- `/events` - Workshops, webinars, and networking
- `/book` - Appointment booking and scheduling

Each optional page is a fully-styled stub with header/footer. Remove files you don't need, or use the Project Starter Tool to scaffold with only selected pages.

See `template.config.json` for the complete page configuration schema.

### Styling Approach & Design System

Tailwind configuration (v4 config):

- High-contrast black/white theme with dark mode (toggled via Alpine.js class strategy).
- Bold typography using Inter font.
- Custom colors: `primary` (black), `secondary` (white).
- 2px borders for strong visual hierarchy.
- Hover effects with color inversions and transforms.
- Custom focus styles and ARIA labels for accessibility.

---

## Installation & Setup

### 1. Prerequisites

- **Node.js** (v18 or higher recommended)
- **Git**

### 2. Installation

1. **Clone the repository** (or copy the files to a new directory):

    ```bash
    git clone <your-repo-url> new-project-name
    cd new-project-name
    ```

2. **Install dependencies**:

    ```bash
    npm install
    # or yarn install / pnpm install
    ```

### 3. Environment Setup

1. Create a `.env` file in the root directory (you can copy `.env.example` if it exists):

    ```bash
    cp .env.example .env
    ```

2. Set up a project at [Tina.io](https://tina.io/) for content management, and get your API keys.

3. Add the following variables to your `.env` file:

    ```env
    # TinaCMS keys
    NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id_here
    TINA_TOKEN=your_read_write_token_here

    # Resend Email Configuration (For Contact Form)
    RESEND_API_KEY=re_your_api_key_here
    SITE_OWNER_EMAIL=your-email@example.com
    RESEND_FROM_EMAIL=onboarding@resend.dev

    # Optional: Branch name (defaults to main)
    GITHUB_BRANCH=main
    ```

### 4. Running Locally

Start the development server. This runs both the Astro site and the TinaCMS admin interface.

```bash
npm run dev
```

- **Website**: `http://localhost:4321`
- **Tina Admin**: `http://localhost:4321/admin/index.html` (Enter edit mode here to edit content visually)

**Other available commands:**

- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally
- `npm run astro ...` - Run Astro CLI commands

---

## Content Management (TinaCMS)

The content schema is defined in `tina/config.ts`. If you need to add new page types or fields, modify this file and run `npm run dev` to regenerate the schema.

### Current Collections

- **Homepage**: Editable hero, features, and other blocks.
- **About**: Company info, mission, values.
- **Services**: Service offerings.
- **Insights (Blog)**: Articles and posts.
- **Team**: Team member profiles.
- **Globals**: Footer setup, miscellaneous global settings.

---

## Contact Form Setup (Resend)

The contact form uses **Resend** to send emails.

1. **Sign Up & Get API Key**:
   - Create a free account at [resend.com](https://resend.com).
   - Navigate to [API Keys](https://resend.com/api-keys) and create a new key.
   - Add this key to your `.env` file as `RESEND_API_KEY`.
   - Set `SITE_OWNER_EMAIL` in `.env` to the address where you want to receive submissions.

2. **Configure Sending Domain (Optional)**:
   - Go to [Resend Domains](https://resend.com/domains) and add your domain.
   - Add the required DNS records.
   - Update line 35 in `src/pages/api/contact.ts` to send from your domain:
     `from: 'Contact Form <contact@yourdomain.com>',`

3. **In Production**:
   - Ensure you add `RESEND_API_KEY` and `SITE_OWNER_EMAIL` to your hosting platform's environment variables (e.g., Vercel or Netlify).

---

## Customization Checklist

To adapt this skeleton for a new brand, update the following files:

### Content & Metadata

- **SEO & Meta Tags**: Update default titles, descriptions, and Open Graph URLs in `src/layouts/MainLayout.astro`.
- **Favicons**: Replace favicon files in `public/`.
- **Global Content**: Update global site data in `src/content/globals/index.md` or via TinaCMS. (Remember to update all placeholder URLs!)

### Components & Branding

- **Header/Nav**: Edit `src/components/Header.astro` to update the logo and navigation links.
- **Footer**: Edit `src/components/Footer.astro` for copyright logic and links.
- **Logos**: Add client logos to `src/assets/logos/` and update `src/components/LogoCloud.astro`.

### Styling

- **Colors & Fonts**: Global styles are in `src/styles/global.css`. Font setup is in `MainLayout.astro` (using `@fontsource`). Tailwind config are in global CSS.

---

## Deployment (Vercel)

This project is configured for Vercel (`@astrojs/vercel`).

1. Push your code to a Git repository.
2. Import the project into **Vercel**.
3. **Important**: Add the Environment Variables (`NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`, `RESEND_API_KEY`, `SITE_OWNER_EMAIL`) in the Vercel project settings.
4. Deploy!

---

## Troubleshooting

- **TinaCMS Errors**: "Tina Cloud Protocol Error" usually means incorrect Client ID or Token in `.env`.
- **"Email service is not configured" error**: Check that `RESEND_API_KEY` is set in your `.env` file and restart your dev server.
- **Emails not arriving**: Check your spam folder, verify the API key, and check the Resend dashboard logs.
- **Build fails**: Run `npm run build` locally to see details. Common issues include missing required fields in Markdown content.
- **Testing note**: Alpine.js is bundled via npm and included in the build. Also note the site uses `pt-20` padding-top on the main content to account for the fixed header layout.

---

## License

MIT
