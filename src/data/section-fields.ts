/**
 * Section Field Definitions — Canonical field schemas for every section type.
 *
 * This is the SINGLE SOURCE OF TRUTH for what data each section accepts.
 * From these definitions we generate:
 *   1. TypeScript interfaces (component props)
 *   2. Zod schemas (Astro content validation)
 *   3. TinaCMS field configs (editor UI)
 *
 * Field names here are CANONICAL — they match the component prop names
 * directly, eliminating the need for an adapter layer.
 */

// ═══════════════════════════════════════════════════════════════════════════════
// Field Schema Types
// ═══════════════════════════════════════════════════════════════════════════════

export type FieldType =
  | 'string'    // short text input
  | 'text'      // textarea / multiline
  | 'number'    // numeric
  | 'boolean'   // toggle
  | 'image'     // image picker / URL
  | 'url'       // URL string
  | 'date'      // date picker
  | 'rich-text'; // rich text / HTML

export interface FieldDef {
  name: string;           // Property name (e.g. 'eyebrow', 'heading')
  label: string;          // Human-readable label for CMS
  type: FieldType;        // Primitive type
  required?: boolean;     // Defaults to false
  description?: string;   // Help text for CMS editors
  list?: boolean;         // Is this an array?
  fields?: FieldDef[];    // Nested object fields (makes this an object type)
}

// ═══════════════════════════════════════════════════════════════════════════════
// Shared Field Builders
// ═══════════════════════════════════════════════════════════════════════════════

/** CTA link: { text, url } */
export const ctaField = (name: string, label: string, required = false): FieldDef => ({
  name, label, type: 'string', required,
  fields: [
    { name: 'text', label: 'Button Text', type: 'string', required: true },
    { name: 'url', label: 'Button URL', type: 'url', required: true },
  ],
});

/** Image: { src, alt } */
export const imageField = (name: string, label: string, required = false): FieldDef => ({
  name, label, type: 'string', required,
  fields: [
    { name: 'src', label: 'Image Source', type: 'image', required: true },
    { name: 'alt', label: 'Alt Text', type: 'string', required: true },
  ],
});

/** Standard section header: eyebrow + heading + description */
export const sectionHeader = (
  headingRequired = true,
  descriptionRequired = false,
): FieldDef[] => [
  { name: 'eyebrow', label: 'Eyebrow', type: 'string', description: 'Small text above the heading' },
  { name: 'heading', label: 'Heading', type: 'string', required: headingRequired },
  { name: 'description', label: 'Description', type: 'text', required: descriptionRequired },
];

/** Social link: { platform, url } */
const socialField = (name: string, label: string, list = true): FieldDef => ({
  name, label, type: 'string', list,
  fields: [
    { name: 'platform', label: 'Platform', type: 'string', required: true },
    { name: 'url', label: 'URL', type: 'url', required: true },
  ],
});

/** Stat item: { value, label } */
const statItemFields: FieldDef[] = [
  { name: 'value', label: 'Value', type: 'string', required: true },
  { name: 'label', label: 'Label', type: 'string', required: true },
];

// ═══════════════════════════════════════════════════════════════════════════════
// Section Field Definitions
// ═══════════════════════════════════════════════════════════════════════════════

export const SECTION_FIELDS: Record<string, FieldDef[]> = {

  // ── Headers ─────────────────────────────────────────────────
  headers: [
    { name: 'logo', label: 'Logo', type: 'string', required: true, description: 'Logo text or image path' },
    {
      name: 'navLinks', label: 'Navigation Links', type: 'string', list: true, required: true,
      fields: [
        { name: 'label', label: 'Label', type: 'string', required: true },
        { name: 'url', label: 'URL', type: 'url', required: true },
        {
          name: 'children', label: 'Dropdown Items', type: 'string', list: true,
          fields: [
            { name: 'label', label: 'Label', type: 'string', required: true },
            { name: 'url', label: 'URL', type: 'url', required: true },
            { name: 'description', label: 'Description', type: 'string' },
          ],
        },
      ],
    },
    ctaField('cta', 'CTA Button', true),
    { name: 'phone', label: 'Phone Number', type: 'string' },
    {
      name: 'topBar', label: 'Top Bar', type: 'string',
      description: 'Optional info strip above main navigation',
      fields: [
        { name: 'phone', label: 'Phone', type: 'string' },
        { name: 'email', label: 'Email', type: 'string' },
        { name: 'hours', label: 'Business Hours', type: 'string' },
        socialField('socials', 'Social Links'),
      ],
    },
  ],

  // ── Heroes ──────────────────────────────────────────────────
  heroes: [
    ...sectionHeader(),
    { name: 'headingAccent', label: 'Heading Accent', type: 'string', description: 'Word(s) to highlight in accent colour' },
    ctaField('primaryCta', 'Primary CTA'),
    ctaField('secondaryCta', 'Secondary CTA'),
    imageField('image', 'Hero Image'),
    {
      name: 'trustBadge', label: 'Trust Badge', type: 'string',
      fields: [
        { name: 'icon', label: 'Icon', type: 'string', required: true },
        { name: 'title', label: 'Title', type: 'string', required: true },
        { name: 'subtitle', label: 'Subtitle', type: 'string' },
      ],
    },
    { name: 'rotatingWords', label: 'Rotating Words', type: 'string', list: true, description: 'Words that cycle in animated text variant' },
    {
      name: 'slides', label: 'Carousel Slides', type: 'string', list: true,
      description: 'Slides for the slider/carousel variant',
      fields: [
        { name: 'heading', label: 'Heading', type: 'string', required: true },
        { name: 'description', label: 'Description', type: 'text', required: true },
        ctaField('cta', 'Slide CTA', true),
        imageField('image', 'Slide Image', true),
      ],
    },
    {
      name: 'formFields', label: 'Form Fields', type: 'string', list: true,
      description: 'Fields for the form variant',
      fields: [
        { name: 'label', label: 'Label', type: 'string', required: true },
        { name: 'type', label: 'Input Type', type: 'string', required: true },
        { name: 'placeholder', label: 'Placeholder', type: 'string', required: true },
      ],
    },
  ],

  // ── Trust Bars ──────────────────────────────────────────────
  'trust_bars': [
    {
      name: 'logos', label: 'Logos', type: 'string', list: true,
      fields: [
        { name: 'src', label: 'Logo Image', type: 'image', required: true },
        { name: 'alt', label: 'Company Name', type: 'string', required: true },
      ],
    },
    {
      name: 'trustStats', label: 'Statistics', type: 'string', list: true,
      fields: statItemFields,
    },
    {
      name: 'badges', label: 'Trust Badges', type: 'string', list: true,
      fields: [
        { name: 'icon', label: 'Icon', type: 'string', required: true },
        { name: 'text', label: 'Text', type: 'string', required: true },
      ],
    },
    {
      name: 'testimonial', label: 'Featured Testimonial', type: 'string',
      fields: [
        { name: 'quote', label: 'Quote', type: 'text', required: true },
        { name: 'name', label: 'Name', type: 'string', required: true },
        { name: 'photo', label: 'Photo', type: 'image' },
      ],
    },
  ],

  // ── Problems ────────────────────────────────────────────────
  problems: [
    ...sectionHeader(),
    {
      name: 'painPoints', label: 'Pain Points', type: 'string', list: true, required: true,
      fields: [
        { name: 'icon', label: 'Icon', type: 'string' },
        { name: 'heading', label: 'Heading', type: 'string', required: true },
        { name: 'description', label: 'Description', type: 'text', required: true },
      ],
    },
    imageField('image', 'Section Image'),
    {
      name: 'comparison', label: 'Comparison', type: 'string',
      description: 'Before/after or with/without comparison',
      fields: [
        {
          name: 'without', label: 'Without Us', type: 'string', required: true,
          fields: [
            { name: 'heading', label: 'Heading', type: 'string', required: true },
            { name: 'points', label: 'Points', type: 'string', list: true, required: true },
          ],
        },
        {
          name: 'with', label: 'With Us', type: 'string', required: true,
          fields: [
            { name: 'heading', label: 'Heading', type: 'string', required: true },
            { name: 'points', label: 'Points', type: 'string', list: true, required: true },
          ],
        },
      ],
    },
  ],

  // ── Solutions ───────────────────────────────────────────────
  solutions: [
    ...sectionHeader(),
    {
      name: 'benefits', label: 'Benefits', type: 'string', list: true, required: true,
      fields: [
        { name: 'icon', label: 'Icon', type: 'string' },
        { name: 'heading', label: 'Heading', type: 'string', required: true },
        { name: 'description', label: 'Description', type: 'text', required: true },
        { name: 'number', label: 'Number', type: 'number', description: 'Display order number' },
      ],
    },
    imageField('image', 'Section Image'),
    ctaField('primaryCta', 'Primary CTA'),
    {
      name: 'tabs', label: 'Tabs', type: 'string', list: true,
      description: 'Content tabs for the tabbed variant',
      fields: [
        { name: 'label', label: 'Tab Label', type: 'string', required: true },
        { name: 'heading', label: 'Heading', type: 'string', required: true },
        { name: 'description', label: 'Description', type: 'text', required: true },
        imageField('image', 'Tab Image'),
      ],
    },
  ],

  // ── Services ────────────────────────────────────────────────
  services: [
    ...sectionHeader(),
    {
      name: 'services', label: 'Services', type: 'string', list: true, required: true,
      fields: [
        { name: 'icon', label: 'Icon', type: 'string' },
        { name: 'heading', label: 'Heading', type: 'string', required: true },
        { name: 'description', label: 'Description', type: 'text', required: true },
        imageField('image', 'Service Image'),
        ctaField('link', 'Learn More Link'),
        { name: 'category', label: 'Category', type: 'string' },
      ],
    },
  ],

  // ── Features ────────────────────────────────────────────────
  features: [
    ...sectionHeader(),
    {
      name: 'features', label: 'Features', type: 'string', list: true, required: true,
      fields: [
        { name: 'icon', label: 'Icon', type: 'string' },
        { name: 'heading', label: 'Heading', type: 'string', required: true },
        { name: 'description', label: 'Description', type: 'text', required: true },
      ],
    },
    imageField('image', 'Section Image'),
    {
      name: 'tabs', label: 'Feature Tabs', type: 'string', list: true,
      fields: [
        { name: 'label', label: 'Tab Label', type: 'string', required: true },
        {
          name: 'features', label: 'Features', type: 'string', list: true,
          fields: [
            { name: 'icon', label: 'Icon', type: 'string' },
            { name: 'heading', label: 'Heading', type: 'string', required: true },
            { name: 'description', label: 'Description', type: 'text', required: true },
          ],
        },
        imageField('image', 'Tab Image'),
      ],
    },
  ],

  // ── Benefits ────────────────────────────────────────────────
  benefits: [
    ...sectionHeader(),
    {
      name: 'benefits', label: 'Benefits', type: 'string', list: true, required: true,
      fields: [
        { name: 'icon', label: 'Icon', type: 'string' },
        { name: 'heading', label: 'Heading', type: 'string', required: true },
        { name: 'description', label: 'Description', type: 'text', required: true },
        { name: 'number', label: 'Number', type: 'number', description: 'Display order number' },
      ],
    },
    imageField('image', 'Section Image'),
  ],

  // ── Videos ──────────────────────────────────────────────────
  videos: [
    ...sectionHeader(),
    { name: 'videoUrl', label: 'Video URL', type: 'url', description: 'Embed URL for the video' },
    imageField('thumbnailImage', 'Thumbnail Image'),
    {
      name: 'videos', label: 'Video Gallery', type: 'string', list: true,
      fields: [
        { name: 'title', label: 'Title', type: 'string', required: true },
        imageField('thumbnailImage', 'Thumbnail', true),
        { name: 'videoUrl', label: 'Video URL', type: 'url', required: true },
      ],
    },
    {
      name: 'testimonial', label: 'Video Testimonial', type: 'string',
      fields: [
        { name: 'name', label: 'Name', type: 'string', required: true },
        { name: 'title', label: 'Title', type: 'string' },
        { name: 'company', label: 'Company', type: 'string' },
        { name: 'rating', label: 'Rating (1-5)', type: 'number' },
      ],
    },
  ],

  // ── Testimonials ────────────────────────────────────────────
  testimonials: [
    ...sectionHeader(),
    {
      name: 'testimonials', label: 'Testimonials', type: 'string', list: true, required: true,
      fields: [
        { name: 'quote', label: 'Quote', type: 'text', required: true },
        { name: 'name', label: 'Name', type: 'string', required: true },
        { name: 'title', label: 'Job Title', type: 'string' },
        { name: 'company', label: 'Company', type: 'string' },
        { name: 'location', label: 'Location', type: 'string' },
        { name: 'photo', label: 'Photo', type: 'image' },
        { name: 'rating', label: 'Rating (1-5)', type: 'number' },
        imageField('logo', 'Company Logo'),
        { name: 'platform', label: 'Platform', type: 'string', description: 'e.g. Google, Facebook, Yelp' },
      ],
    },
    { name: 'averageRating', label: 'Average Rating', type: 'number' },
    { name: 'totalReviews', label: 'Total Reviews', type: 'number' },
    {
      name: 'ratingBreakdown', label: 'Rating Breakdown', type: 'string', list: true,
      fields: [
        { name: 'stars', label: 'Stars', type: 'number', required: true },
        { name: 'percentage', label: 'Percentage', type: 'number', required: true },
      ],
    },
  ],

  // ── Portfolios ──────────────────────────────────────────────
  portfolios: [
    ...sectionHeader(),
    { name: 'categories', label: 'Filter Categories', type: 'string', list: true },
    {
      name: 'projects', label: 'Projects', type: 'string', list: true, required: true,
      fields: [
        { name: 'title', label: 'Title', type: 'string', required: true },
        { name: 'category', label: 'Category', type: 'string', required: true },
        { name: 'description', label: 'Description', type: 'text' },
        imageField('image', 'Project Image', true),
        { name: 'metric', label: 'Key Metric', type: 'string', description: 'e.g. "+120% conversions"' },
        { name: 'link', label: 'Project Link', type: 'url' },
      ],
    },
  ],

  // ── Processes ───────────────────────────────────────────────
  processes: [
    ...sectionHeader(),
    {
      name: 'steps', label: 'Steps', type: 'string', list: true, required: true,
      fields: [
        { name: 'number', label: 'Step Number', type: 'number', required: true },
        { name: 'icon', label: 'Icon', type: 'string' },
        { name: 'heading', label: 'Heading', type: 'string', required: true },
        { name: 'description', label: 'Description', type: 'text', required: true },
        imageField('image', 'Step Image'),
      ],
    },
  ],

  // ── Pricing ─────────────────────────────────────────────────
  pricing: [
    ...sectionHeader(),
    {
      name: 'tiers', label: 'Pricing Tiers', type: 'string', list: true, required: true,
      fields: [
        { name: 'name', label: 'Plan Name', type: 'string', required: true },
        { name: 'monthlyPrice', label: 'Monthly Price', type: 'number' },
        { name: 'annualPrice', label: 'Annual Price', type: 'number' },
        { name: 'price', label: 'Display Price', type: 'string', description: 'Formatted price string (e.g. "$99")' },
        { name: 'period', label: 'Billing Period', type: 'string', description: 'e.g. "/month"' },
        { name: 'description', label: 'Description', type: 'text', required: true },
        {
          name: 'features', label: 'Features', type: 'string', list: true, required: true,
          fields: [
            { name: 'text', label: 'Feature Text', type: 'string', required: true },
            { name: 'included', label: 'Included', type: 'boolean', required: true },
          ],
        },
        ctaField('cta', 'Plan CTA', true),
        { name: 'recommended', label: 'Recommended', type: 'boolean', description: 'Highlight this plan' },
      ],
    },
  ],

  // ── FAQs ────────────────────────────────────────────────────
  faqs: [
    ...sectionHeader(),
    ctaField('contactCta', 'Contact CTA'),
    { name: 'categories', label: 'Categories', type: 'string', list: true },
    {
      name: 'items', label: 'FAQ Items', type: 'string', list: true, required: true,
      fields: [
        { name: 'question', label: 'Question', type: 'string', required: true },
        { name: 'answer', label: 'Answer', type: 'text', required: true },
        { name: 'category', label: 'Category', type: 'string' },
      ],
    },
  ],

  // ── Newsletters ─────────────────────────────────────────────
  newsletters: [
    { name: 'heading', label: 'Heading', type: 'string', required: true },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'incentive', label: 'Incentive', type: 'string', description: 'e.g. "Get 10% Off Your First Project"' },
    { name: 'newsletterBenefits', label: 'Benefits', type: 'string', list: true },
    { name: 'trustText', label: 'Trust Text', type: 'string', description: 'e.g. "No spam, unsubscribe anytime"' },
    { name: 'buttonText', label: 'Button Text', type: 'string' },
  ],

  // ── CTAs ────────────────────────────────────────────────────
  ctas: [
    ...sectionHeader(),
    ctaField('primaryCta', 'Primary CTA'),
    ctaField('secondaryCta', 'Secondary CTA'),
    imageField('image', 'Section Image'),
    {
      name: 'ctaStats', label: 'Statistics', type: 'string', list: true,
      fields: statItemFields,
    },
    {
      name: 'testimonial', label: 'Testimonial', type: 'string',
      fields: [
        { name: 'quote', label: 'Quote', type: 'text', required: true },
        { name: 'name', label: 'Name', type: 'string', required: true },
        { name: 'title', label: 'Job Title', type: 'string' },
        { name: 'company', label: 'Company', type: 'string' },
        { name: 'rating', label: 'Rating (1-5)', type: 'number' },
        { name: 'photo', label: 'Photo', type: 'image' },
      ],
    },
    {
      name: 'formFields', label: 'Form Fields', type: 'string', list: true,
      fields: [
        { name: 'label', label: 'Label', type: 'string', required: true },
        { name: 'type', label: 'Input Type', type: 'string', required: true },
        { name: 'placeholder', label: 'Placeholder', type: 'string', required: true },
      ],
    },
    { name: 'countdownTarget', label: 'Countdown Target', type: 'date', description: 'ISO date string for countdown timer' },
    {
      name: 'trustBadges', label: 'Trust Badges', type: 'string', list: true,
      fields: [
        { name: 'icon', label: 'Icon', type: 'string', required: true },
        { name: 'text', label: 'Text', type: 'string', required: true },
      ],
    },
  ],

  // ── Footers ─────────────────────────────────────────────────
  footers: [
    { name: 'logo', label: 'Logo', type: 'string', required: true },
    { name: 'tagline', label: 'Tagline', type: 'string' },
    {
      name: 'columns', label: 'Link Columns', type: 'string', list: true, required: true,
      fields: [
        { name: 'heading', label: 'Column Heading', type: 'string', required: true },
        {
          name: 'links', label: 'Links', type: 'string', list: true, required: true,
          fields: [
            { name: 'label', label: 'Label', type: 'string', required: true },
            { name: 'url', label: 'URL', type: 'url', required: true },
          ],
        },
      ],
    },
    {
      name: 'socials', label: 'Social Links', type: 'string', list: true, required: true,
      fields: [
        { name: 'platform', label: 'Platform', type: 'string', required: true },
        { name: 'url', label: 'URL', type: 'url', required: true },
        { name: 'icon', label: 'Icon', type: 'string', required: true },
      ],
    },
    { name: 'copyright', label: 'Copyright Text', type: 'string', required: true },
    {
      name: 'legalLinks', label: 'Legal Links', type: 'string', list: true, required: true,
      fields: [
        { name: 'label', label: 'Label', type: 'string', required: true },
        { name: 'url', label: 'URL', type: 'url', required: true },
      ],
    },
    { name: 'newsletterHeading', label: 'Newsletter Heading', type: 'string' },
    { name: 'newsletterDescription', label: 'Newsletter Description', type: 'string' },
  ],

  // ── Team ────────────────────────────────────────────────────
  team: [
    ...sectionHeader(),
    {
      name: 'members', label: 'Team Members', type: 'string', list: true, required: true,
      fields: [
        { name: 'name', label: 'Name', type: 'string', required: true },
        { name: 'role', label: 'Role', type: 'string', required: true },
        { name: 'bio', label: 'Bio', type: 'text' },
        { name: 'photo', label: 'Photo', type: 'image' },
        { name: 'initials', label: 'Initials', type: 'string', description: 'Fallback when no photo' },
        { name: 'emoji', label: 'Emoji', type: 'string' },
        { name: 'colorClass', label: 'Colour Class', type: 'string' },
        { name: 'linkedin', label: 'LinkedIn URL', type: 'url' },
        socialField('socials', 'Social Links'),
      ],
    },
  ],

  // ── Blog ────────────────────────────────────────────────────
  blog: [
    ...sectionHeader(),
    {
      name: 'posts', label: 'Blog Posts', type: 'string', list: true, required: true,
      fields: [
        { name: 'slug', label: 'Slug', type: 'string', required: true },
        { name: 'title', label: 'Title', type: 'string', required: true },
        { name: 'description', label: 'Description', type: 'text', required: true },
        { name: 'pubDate', label: 'Publish Date', type: 'date', required: true },
        { name: 'updatedDate', label: 'Updated Date', type: 'date' },
        { name: 'heroImage', label: 'Hero Image', type: 'image' },
        { name: 'tags', label: 'Tags', type: 'string', list: true },
        {
          name: 'author', label: 'Author', type: 'string',
          fields: [
            { name: 'name', label: 'Name', type: 'string', required: true },
            { name: 'photo', label: 'Photo', type: 'image' },
          ],
        },
        { name: 'readTime', label: 'Read Time', type: 'string' },
      ],
    },
    ctaField('viewAllCta', 'View All CTA'),
  ],

  // ── Forms ───────────────────────────────────────────────────
  forms: [
    ...sectionHeader(),
    { name: 'submitText', label: 'Submit Button Text', type: 'string' },
    { name: 'privacyNote', label: 'Privacy Note', type: 'string', description: 'Small text below the form' },
    {
      name: 'fields', label: 'Form Fields', type: 'string', list: true,
      fields: [
        { name: 'label', label: 'Label', type: 'string', required: true },
        { name: 'type', label: 'Type', type: 'string', required: true, description: 'text, email, tel, textarea, select, checkbox' },
        { name: 'name', label: 'Field Name', type: 'string', required: true },
        { name: 'placeholder', label: 'Placeholder', type: 'string' },
        { name: 'required', label: 'Required', type: 'boolean' },
        { name: 'rows', label: 'Rows', type: 'number', description: 'For textarea fields' },
        {
          name: 'options', label: 'Options', type: 'string', list: true,
          description: 'For select fields',
          fields: [
            { name: 'label', label: 'Label', type: 'string', required: true },
            { name: 'value', label: 'Value', type: 'string', required: true },
          ],
        },
      ],
    },
  ],

  // ── Stats ───────────────────────────────────────────────────
  stats: [
    ...sectionHeader(),
    imageField('image', 'Section Image'),
    {
      name: 'stats', label: 'Statistics', type: 'string', list: true, required: true,
      fields: [
        { name: 'value', label: 'Value', type: 'string', required: true },
        { name: 'label', label: 'Label', type: 'string', required: true },
        { name: 'description', label: 'Description', type: 'string' },
        { name: 'icon', label: 'Icon', type: 'string' },
      ],
    },
    ctaField('primaryCta', 'CTA Button'),
  ],

  // ── Banners ─────────────────────────────────────────────────
  banners: [
    { name: 'text', label: 'Banner Text', type: 'string', required: true },
    ctaField('link', 'Banner Link'),
    ctaField('primaryCta', 'Primary Action'),
    ctaField('secondaryCta', 'Secondary Action'),
    { name: 'dismissible', label: 'Dismissible', type: 'boolean', description: 'Can the user close this banner?' },
  ],

  // ── Breakout ────────────────────────────────────────────────
  breakouts: [
    ...sectionHeader(),
    ctaField('cta', 'Call to Action', true),
  ],

  // ── Showcases ────────────────────────────────────────────────
  showcases: [
    ...sectionHeader(),
    ctaField('cta', 'Call to Action', true),
    imageField('image', 'Showcase Image'),
    { name: 'reverse', label: 'Reverse Layout', type: 'boolean', description: 'Flip content and image sides' },
  ],

  // ── Content ─────────────────────────────────────────────────
  content: [
    ...sectionHeader(),
    { name: 'body', label: 'Body Content', type: 'rich-text', required: true },
    imageField('image', 'Featured Image'),
    {
      name: 'author', label: 'Author', type: 'string',
      fields: [
        { name: 'name', label: 'Name', type: 'string', required: true },
        { name: 'role', label: 'Role', type: 'string', required: true },
        { name: 'photo', label: 'Photo', type: 'image' },
        { name: 'date', label: 'Date', type: 'string' },
      ],
    },
  ],
};
