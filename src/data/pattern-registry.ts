/**
 * Pattern Registry — Single source of truth for all section patterns.
 * Maps section types to their available layout variants, component files,
 * and canonical field schemas.
 *
 * Used by:
 * - Component browser (component-library pages)
 * - Schema generators (Zod, TinaCMS, TypeScript types)
 * - Prompt Builder integration
 */

import { SECTION_FIELDS, type FieldDef } from './section-fields';
export type { FieldDef } from './section-fields';

export interface PatternVariant {
  key: string;
  label: string;
  component: string;
  brief: string;
  status: 'ready' | 'wip' | 'planned';
  preview?: string; // Path to thumbnail image (e.g., /previews/heroes/hero-split-lr.webp)
}

export interface SectionDefinition {
  slug: string;
  label: string;
  icon: string;
  dataKey: string;
  fields: FieldDef[];   // Canonical field schema for this section
  variants: PatternVariant[];
}

export const PATTERN_REGISTRY: SectionDefinition[] = [
  {
    slug: 'headers',
    label: 'Navigation / Header',
    icon: '🧭',
    dataKey: 'SAMPLE_HEADER',
    fields: SECTION_FIELDS.headers,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'HeaderClassic', brief: 'Original master-template header. Logo left, centered nav with hover mega-dropdowns, theme toggle + CTA right. Becomes a fixed translucent bar on scroll.', status: 'ready' },
      { key: 'standard', label: 'Standard', component: 'HeaderStandard', brief: 'Sticky header with logo left, nav right, CTA far right. Mobile hamburger with slide-out drawer.', status: 'ready' },
      { key: 'withPhone', label: 'With Phone', component: 'HeaderWithPhone', brief: 'Sticky header with phone number displayed before the CTA button. Mobile: tap-to-call icon.', status: 'ready' },
      { key: 'centeredLogo', label: 'Centered Logo', component: 'HeaderCenteredLogo', brief: 'Logo centered, nav links split evenly on either side. CTA far right.', status: 'ready' },
      { key: 'transparent', label: 'Transparent Overlay', component: 'HeaderTransparent', brief: 'Transparent header overlaying hero. Transitions to solid on scroll.', status: 'ready' },
      { key: 'topBarNav', label: 'Top Bar + Nav', component: 'HeaderTopBarNav', brief: 'Two-tier: thin info strip on top, main nav below. Top bar hides on scroll.', status: 'ready' },
      { key: 'megaMenu', label: 'Mega Menu', component: 'HeaderMegaMenu', brief: 'Full-width mega menu dropdown with multi-column content on hover/click.', status: 'ready' },
      { key: 'minimal', label: 'Minimal (Logo + Burger)', component: 'HeaderMinimal', brief: 'Logo left, hamburger right on all screens. Full-screen overlay menu.', status: 'ready' },
      { key: 'sidebar', label: 'Sidebar Navigation', component: 'HeaderSidebar', brief: 'Vertical sidebar fixed to the left. Main content shifts right.', status: 'ready' },
      { key: 'floatingPill', label: 'Floating Pill', component: 'HeaderFloatingPill', brief: 'Floating pill header that transforms on scroll. Logo left, nav center, CTA right.', status: 'ready' },
      { key: 'floatingPillTest', label: 'Floating Pill (Test)', component: 'HeaderFloatingPillTest', brief: 'Direct port of reference demo — test only.', status: 'ready' },
    ],
  },
  {
    slug: 'heroes',
    label: 'Hero',
    icon: '🦸',
    dataKey: 'SAMPLE_HERO',
    fields: SECTION_FIELDS.heroes,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'HeroClassic', brief: 'Original master-template hero — label, heading, description, CTA button, trust badge. Split/centered/bold layouts.', status: 'ready', dataKey: 'SAMPLE_HERO_CLASSIC' },
      { key: 'splitLR', label: 'Copy Left / Image Right', component: 'HeroSplitLR', brief: 'Two-column (55/45). Text left with eyebrow, headline, CTAs. Image right with floating trust badge.', status: 'ready' },
      { key: 'splitRL', label: 'Image Left / Copy Right', component: 'HeroSplitRL', brief: 'Two-column (45/55). Image left, text content right.', status: 'ready' },
      { key: 'centered', label: 'Centered', component: 'HeroCentered', brief: 'Full-width centered layout. Eyebrow, headline, CTAs, then large image below.', status: 'ready' },
      { key: 'fullBleed', label: 'Full-Bleed Image', component: 'HeroFullBleed', brief: 'Full-viewport background image with dark gradient overlay. Text over image.', status: 'ready' },
      { key: 'video', label: 'Video Background', component: 'HeroVideo', brief: 'Full-viewport background video (muted, autoplay, loop). Dark overlay with text.', status: 'ready' },
      { key: 'splitForm', label: 'Split with Form', component: 'HeroSplitForm', brief: 'Text left with trust indicators. Lead capture form card on the right.', status: 'ready' },
      { key: 'animatedText', label: 'Animated Text Hero', component: 'HeroAnimatedText', brief: 'Centered headline with one rotating/typed word cycling through keywords.', status: 'ready' },
      { key: 'slider', label: 'Hero Slider / Carousel', component: 'HeroSlider', brief: 'Full-viewport carousel auto-advancing through 3–4 slides with unique content.', status: 'ready' },
      { key: 'parallax', label: 'Parallax', component: 'HeroParallax', brief: 'Full-viewport hero with parallax background image scrolling at slower rate.', status: 'ready' },
      { key: 'abstractDark', label: 'Abstract Dark', component: 'HeroAbstractDark', brief: 'Dark background with subtle grid and coloured blur blobs.', status: 'ready' },
      { key: 'editorialSplit', label: 'Editorial Split', component: 'HeroEditorialSplit', brief: 'Large bold headline top-left on white, full-height rounded image right. Description card and pill CTAs anchored to the bottom of the image.', status: 'ready' },
      { key: 'headlineSplit', label: 'Headline Split', component: 'HeroHeadlineSplit', brief: 'Two-row layout: intro text + pill CTA left, large headline right on top. Full-width image below.', status: 'ready' },
      { key: 'topSplit', label: 'Top Split', component: 'HeroTopSplit', brief: 'Two-row layout: headline left, description + CTA right on top. Full-width image with floating card overlay below.', status: 'ready' },
      { key: 'fullBleedBottom', label: 'Full-Bleed Bottom Bar', component: 'HeroFullBleedBottom', brief: 'Full-viewport background image with dark overlay. Large bold headline on left. Bottom bar with address, contact, and CTA card.', status: 'ready' },
      { key: 'gradientMesh', label: 'Gradient Mesh', component: 'HeroGradientMesh', brief: 'Soft coloured gradient orbs on white/dark background. Centered layout with gradient text accent. Great for SaaS, startups, creative tools.', status: 'ready' },
      { key: 'bento', label: 'Bento Grid', component: 'HeroBento', brief: 'Bento-box grid of rounded cards: large headline card, tall image card, trust stat card, brand accent card. Modern 2024/2025 grid aesthetic.', status: 'ready' },
      { key: 'typographic', label: 'Typographic Editorial', component: 'HeroTypographic', brief: 'No image required. Oversized display headline with outlined text accent dominates the viewport. Description and CTA below a rule. Great for agencies, portfolios, consultancies.', status: 'ready' },
      { key: 'socialProof', label: 'Social Proof', component: 'HeroSocialProof', brief: 'Copy and CTAs left. Right column is stacked customer review cards with avatars, star ratings, and quotes. Maximises credibility above the fold for service businesses.', status: 'ready' },
      { key: 'serviceList', label: 'Service Checklist', component: 'HeroServiceList', brief: 'Headline and CTAs left. Right column shows a branded "what\'s included" checklist card. Uses rotatingWords as items. Great for trades, accounting, legal, consulting.', status: 'ready' },
      { key: 'darkSplit', label: 'Dark Color-Block Split', component: 'HeroDarkSplit', brief: 'Full-viewport hard split: dark branded left panel with headline, CTAs, and inline stats. Full-height image bleeds to the right edge with a trust badge overlay. Bold, corporate, B2B.', status: 'ready' },
    ],
  },
  {
    slug: 'trust_bars',
    label: 'Trust Bar',
    icon: '🤝',
    dataKey: 'SAMPLE_TRUST_BAR',
    fields: SECTION_FIELDS['trust_bars'],
    variants: [
      { key: 'logoStrip', label: 'Logo Strip', component: 'TrustBarLogoStrip', brief: 'Horizontal row of grayscale logos with hover-to-color transition.', status: 'ready' },
      { key: 'statsBar', label: 'Stats Bar', component: 'TrustBarStats', brief: 'Three or four key statistics in a horizontal row with vertical dividers.', status: 'ready' },
      { key: 'badgeRow', label: 'Badge Row', component: 'TrustBarBadges', brief: 'Pill-shaped trust badges in a centered row (icon + text each).', status: 'ready' },
      { key: 'testimonialSnippet', label: 'Testimonial Snippet', component: 'TrustBarTestimonial', brief: 'Logos on left, mini testimonial quote with photo on right.', status: 'ready' },
      { key: 'animatedCounters', label: 'Animated Counters', component: 'TrustBarCounters', brief: 'Four metrics that count up from 0 when scrolled into view.', status: 'ready' },
      { key: 'keyProofPoints', label: 'Key Proof Points', component: 'TrustBarKeyProofPoints', brief: 'Horizontal row of checkmark badges highlighting key trust factors.', status: 'ready' },
    ],
  },
  {
    slug: 'problems',
    label: 'Problem / Agitation',
    icon: '⚡',
    dataKey: 'SAMPLE_PROBLEM',
    fields: SECTION_FIELDS.problems,
    variants: [
      { key: 'splitLR', label: 'Split Layout', component: 'ProblemSplit', brief: 'Text left with pain points, relevant problem image on right.', status: 'ready' },
      { key: 'centeredIcons', label: 'Centered with Icons', component: 'ProblemCenteredIcons', brief: 'Centered heading with 3 icon cards below, each showing a pain point.', status: 'ready' },
      { key: 'fullWidth', label: 'Full-Width Statement', component: 'ProblemFullWidth', brief: 'Large bold statement spanning full width with supporting bullet points.', status: 'ready' },
      { key: 'comparison', label: 'Comparison Table', component: 'ProblemComparison', brief: 'Two-column comparison: "Without Us" (red) vs "With Us" (green).', status: 'ready' },
      { key: 'stackedCards', label: 'Stacked Pain Cards', component: 'ProblemStackedCards', brief: 'Vertical stack of full-width cards with progressive visual intensity.', status: 'ready' },
    ],
  },
  {
    slug: 'solutions',
    label: 'Solution',
    icon: '💡',
    dataKey: 'SAMPLE_SOLUTION',
    fields: SECTION_FIELDS.solutions,
    variants: [
      { key: 'splitRL', label: 'Image Left / Copy Right', component: 'SolutionSplitRL', brief: 'Bright image left, solution text with benefits on right.', status: 'ready' },
      { key: 'centered', label: 'Centered Feature', component: 'SolutionCentered', brief: 'Centered heading, feature image/mockup, benefit grid below.', status: 'ready' },
      { key: 'beforeAfter', label: 'Before / After', component: 'SolutionBeforeAfter', brief: 'Side-by-side before (muted) and after (vibrant) comparison.', status: 'ready' },
      { key: 'featureShowcase', label: 'Feature Showcase', component: 'SolutionShowcase', brief: 'Central image/mockup with floating annotation cards pointing to features.', status: 'ready' },
      { key: 'tabbed', label: 'Tabbed Solutions', component: 'SolutionTabbed', brief: 'Horizontal tabs revealing tailored content per solution aspect.', status: 'ready' },
    ],
  },
  {
    slug: 'services',
    label: 'Services Grid',
    icon: '🔧',
    dataKey: 'SAMPLE_SERVICES',
    fields: SECTION_FIELDS.services,
    variants: [
      { key: 'threeCol', label: '3-Column Cards', component: 'ServicesThreeCol', brief: 'Three cards per row with icon, heading, description, and optional link.', status: 'ready' },
      { key: 'altRows', label: 'Alternating Rows', component: 'ServicesAltRows', brief: 'Full-width rows alternating image position left/right.', status: 'ready' },
      { key: 'featureCards', label: 'Large Feature Cards', component: 'ServicesFeatureCards', brief: 'Two-column grid of tall cards with background images and overlay text.', status: 'ready' },
      { key: 'bento', label: 'Bento Grid', component: 'ServicesBento', brief: 'Asymmetric grid with one large tile spanning 2 columns/rows.', status: 'ready' },
      { key: 'scroll', label: 'Horizontal Scroll', component: 'ServicesScroll', brief: 'Horizontally scrolling card row with snap scrolling.', status: 'ready' },
      { key: 'tabbed', label: 'Tabbed Services', component: 'ServicesTabbed', brief: 'Tab navigation at top, each tab reveals service content below.', status: 'ready' },
      { key: 'iconOnly', label: 'Compact Icon Grid', component: 'ServicesIconGrid', brief: 'Dense 4-column grid of icon + label tiles. Hover reveals description.', status: 'ready' },
      { key: 'accordion', label: 'Accordion Services', component: 'ServicesAccordion', brief: 'Vertical accordion list, click to expand description and image.', status: 'ready' },
      { key: 'carousel', label: 'Carousel Cards', component: 'ServicesCarousel', brief: 'Horizontal scrolling carousel of feature cards with snap points.', status: 'ready' },
    ],
  },
  {
    slug: 'features',
    label: 'Features Grid',
    icon: '✨',
    dataKey: 'SAMPLE_FEATURES',
    fields: SECTION_FIELDS.features,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'CardGridClassic', brief: 'Original card grid — icon/title/description cards with section heading and CTA.', status: 'ready', dataKey: 'SAMPLE_CARDGRID_CLASSIC' },
      { key: 'threeCol', label: '3-Column Grid', component: 'FeaturesThreeCol', brief: 'Three features per row with icon, heading, and description.', status: 'ready' },
      { key: 'twoColImage', label: '2-Column with Image', component: 'FeaturesTwoColImage', brief: 'Large image left, stacked feature list right.', status: 'ready' },
      { key: 'checklist', label: 'Checklist Style', component: 'FeaturesChecklist', brief: 'Vertical list with checkmark icons and feature descriptions.', status: 'ready' },
      { key: 'fourColGrid', label: '4-Column Icon Grid', component: 'FeaturesFourCol', brief: 'Four features per row with centered icons on tinted backgrounds.', status: 'ready' },
      { key: 'tabbed', label: 'Tabbed Features', component: 'FeaturesTabbed', brief: 'Tab row at top, each tab shows mockup + feature list.', status: 'ready' },
      { key: 'stickyScroll', label: 'Sticky Scroll', component: 'FeaturesStickyScroll', brief: 'Scrolling feature list left, sticky image right that changes per feature.', status: 'ready' },
      { key: 'cardGrid', label: 'Bordered Card Grid', component: 'FeaturesCardGrid', brief: 'Features as fully-bordered icon cards with heading and description, left-aligned in an even 3-up grid.', status: 'ready' },
    ],
  },
  {
    slug: 'benefits',
    label: 'Benefits',
    icon: '🎯',
    dataKey: 'SAMPLE_BENEFITS',
    fields: SECTION_FIELDS.benefits,
    variants: [
      { key: 'iconList', label: 'Icon List', component: 'BenefitsIconList', brief: 'Two-column grid of benefit items with icons, headings, and descriptions.', status: 'ready' },
      { key: 'altRows', label: 'Alternating Rows', component: 'BenefitsAltRows', brief: 'Full-width rows alternating image/text for storytelling flow.', status: 'ready' },
      { key: 'numbered', label: 'Numbered Benefits', component: 'BenefitsNumbered', brief: 'Numbered list with large styled numbers in accent color.', status: 'ready' },
      { key: 'vsComparison', label: 'Us vs. Competitors', component: 'BenefitsComparison', brief: 'Comparison table with your business highlighted against competitors.', status: 'ready' },
      { key: 'usVsCompetitors', label: 'Comparison Table', component: 'BenefitsUsVsCompetitors', brief: 'Full-width comparison table with sticky first column and optional CTA link.', status: 'ready' },
      { key: 'splitShowcase', label: 'Split Showcase', component: 'BenefitsSplitShowcase', brief: 'Large image left, stacked benefits with icons on right.', status: 'ready' },
      { key: 'timeline', label: 'Benefits Timeline', component: 'BenefitsTimeline', brief: 'Horizontal timeline with benefit stops alternating above/below.', status: 'ready' },
    ],
  },
  {
    slug: 'videos',
    label: 'Video / Demo',
    icon: '🎬',
    dataKey: 'SAMPLE_VIDEO',
    fields: SECTION_FIELDS.videos,
    variants: [
      { key: 'centered', label: 'Centered Video', component: 'VideoCentered', brief: 'Centered heading above video embed/thumbnail with play button overlay.', status: 'ready' },
      { key: 'splitText', label: 'Split with Text', component: 'VideoSplitText', brief: 'Two-column: text and CTA left, video right.', status: 'ready' },
      { key: 'fullWidth', label: 'Full-Width', component: 'VideoFullWidth', brief: 'Full-width video with minimal padding. Heading above.', status: 'ready' },
      { key: 'multiVideo', label: 'Video Tabs / Gallery', component: 'VideoGallery', brief: 'Tab/thumbnail strip with multiple videos. Click to swap main player.', status: 'ready' },
      { key: 'testimonialVideo', label: 'Video Testimonial', component: 'VideoTestimonial', brief: 'Customer testimonial video with name, title, and star rating below.', status: 'ready' },
    ],
  },
  {
    slug: 'testimonials',
    label: 'Testimonials / Reviews',
    icon: '⭐',
    dataKey: 'SAMPLE_TESTIMONIALS',
    fields: SECTION_FIELDS.testimonials,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'TestimonialsClassic', brief: 'Original testimonials grid — quote, author name, title, and avatar.', status: 'ready', dataKey: 'SAMPLE_TESTIMONIALS_CLASSIC' },
      { key: 'classicMarquee', label: 'Classic Marquee (Original)', component: 'TestimonialsMarqueeClassic', brief: 'Original scrolling testimonials marquee.', status: 'ready', dataKey: 'SAMPLE_TESTIMONIALS_CLASSIC' },
      { key: 'threeCol', label: '3-Column Cards', component: 'TestimonialsThreeCol', brief: 'Three cards with star rating, quote, customer name, and optional avatar.', status: 'ready' },
      { key: 'featured', label: 'Single Featured', component: 'TestimonialsFeatured', brief: 'One large centered testimonial with decorative quote marks and photo.', status: 'ready' },
      { key: 'carousel', label: 'Carousel / Slider', component: 'TestimonialsCarousel', brief: 'Single testimonial visible, auto-advances with arrows and dots.', status: 'ready' },
      { key: 'masonry', label: 'Masonry Grid', component: 'TestimonialsMasonry', brief: 'Mixed-size cards in masonry layout for organic visual rhythm.', status: 'ready' },
      { key: 'logoQuote', label: 'Logo + Quote', component: 'TestimonialsLogoQuote', brief: 'Wide horizontal cards: company logo, quote text, customer info.', status: 'ready' },
      { key: 'socialEmbed', label: 'Social Proof Wall', component: 'TestimonialsSocialWall', brief: 'Grid styled as social media posts with platform icons.', status: 'ready' },
      { key: 'ratingBreakdown', label: 'Rating Breakdown', component: 'TestimonialsRatingBreakdown', brief: 'Large average rating with bar chart breakdown and quote snippets.', status: 'ready' },
      { key: 'marquee', label: 'Scrolling Marquee', component: 'TestimonialsMarqueeSection', brief: 'Infinite horizontal scroll of testimonial cards with pause on hover.', status: 'ready' },
      { key: 'reviewGrid', label: 'Review Grid', component: 'TestimonialsReviewGrid', brief: 'Aggregate star rating and review count above a grid of review cards with avatar, name, stars, and quote.', status: 'ready' },
    ],
  },
  {
    slug: 'portfolios',
    label: 'Portfolio / Gallery',
    icon: '🖼️',
    dataKey: 'SAMPLE_PORTFOLIO',
    fields: SECTION_FIELDS.portfolios,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'WorkGridClassic', brief: 'Original work/portfolio grid — project image, title, and category.', status: 'ready', dataKey: 'SAMPLE_WORKGRID_CLASSIC' },
      { key: 'masonry', label: 'Masonry Grid', component: 'PortfolioMasonry', brief: 'Asymmetric image grid with hover overlays showing project title.', status: 'ready' },
      { key: 'uniform', label: 'Uniform Grid', component: 'PortfolioUniform', brief: 'Even grid with consistent aspect ratios and hover overlays.', status: 'ready' },
      { key: 'featuredGrid', label: 'Featured + Grid', component: 'PortfolioFeatured', brief: 'One large hero image at top, smaller grid below.', status: 'ready' },
      { key: 'scroll', label: 'Horizontal Scroll', component: 'PortfolioScroll', brief: 'Large horizontally scrolling images with scroll-snap.', status: 'ready' },
      { key: 'filtered', label: 'Filtered Gallery', component: 'PortfolioFiltered', brief: 'Category filter pills at top, grid filters with smooth transitions.', status: 'ready' },
      { key: 'lightbox', label: 'Lightbox Gallery', component: 'PortfolioLightbox', brief: 'Thumbnail grid, click opens full-screen lightbox with navigation.', status: 'ready' },
      { key: 'caseStudy', label: 'Case Study Cards', component: 'PortfolioCaseStudy', brief: 'Two-column cards with image, title, description, and key metric.', status: 'ready' },
    ],
  },
  {
    slug: 'processes',
    label: 'Process / How it Works',
    icon: '🔄',
    dataKey: 'SAMPLE_PROCESS',
    fields: SECTION_FIELDS.processes,
    variants: [
      { key: 'numbered', label: 'Numbered Steps', component: 'ProcessNumbered', brief: 'Horizontal row of numbered circles with headings, connected by lines.', status: 'ready' },
      { key: 'timeline', label: 'Vertical Timeline', component: 'ProcessTimeline', brief: 'Centered vertical line with steps alternating left and right.', status: 'ready' },
      { key: 'iconCards', label: 'Icon Step Cards', component: 'ProcessIconCards', brief: 'Card per step with step number, large icon, heading, description.', status: 'ready' },
      { key: 'interactive', label: 'Interactive Steps', component: 'ProcessInteractive', brief: 'Clickable step tabs at top revealing detailed content below.', status: 'ready' },
      { key: 'roadmap', label: 'Journey Roadmap', component: 'ProcessRoadmap', brief: 'Winding horizontal path with stops at each process step.', status: 'ready' },
    ],
  },
  {
    slug: 'pricing',
    label: 'Pricing',
    icon: '💰',
    dataKey: 'SAMPLE_PRICING',
    fields: SECTION_FIELDS.pricing,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'PricingTiersClassic', brief: 'Original pricing tiers with feature rows and a popular highlight.', status: 'ready', dataKey: 'SAMPLE_PRICING_CLASSIC' },
      { key: 'threeCol', label: '3-Tier Cards', component: 'PricingThreeTier', brief: 'Three pricing cards, middle highlighted as recommended.', status: 'ready' },
      { key: 'twoCol', label: '2-Plan Comparison', component: 'PricingTwoCol', brief: 'Two plans side by side with optional feature comparison table below.', status: 'ready' },
      { key: 'single', label: 'Single Plan', component: 'PricingSingle', brief: 'One centered plan card with feature checklist and CTA.', status: 'ready' },
      { key: 'toggleBilling', label: 'Toggle Monthly / Annual', component: 'PricingToggle', brief: 'Monthly/Annual toggle switch above pricing cards with animated price swap.', status: 'ready' },
      { key: 'featureMatrix', label: 'Feature Comparison Matrix', component: 'PricingMatrix', brief: 'Plans as column headers on a feature comparison table with checkmarks.', status: 'ready' },
    ],
  },
  {
    slug: 'faqs',
    label: 'FAQ',
    icon: '❓',
    dataKey: 'SAMPLE_FAQ',
    fields: SECTION_FIELDS.faqs,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'FaqClassic', brief: 'Original FAQ list with section heading and show-more.', status: 'ready', dataKey: 'SAMPLE_FAQ_CLASSIC' },
      { key: 'accordion', label: 'Accordion', component: 'FaqAccordion', brief: 'Vertical accordion list, one answer open at a time. Chevron rotates.', status: 'ready' },
      { key: 'twoColGrid', label: 'Two-Column Grid', component: 'FaqTwoColGrid', brief: 'All Q&As visible in a 2-column card grid. No collapsing.', status: 'ready' },
      { key: 'sideBySide', label: 'Side-by-Side', component: 'FaqSideBySide', brief: 'Heading + CTA left, accordion right.', status: 'ready' },
      { key: 'categorised', label: 'Categorised FAQ', component: 'FaqCategorised', brief: 'Category tabs/pills at top filtering different sets of Q&As.', status: 'ready' },
      { key: 'searchable', label: 'Searchable FAQ', component: 'FaqSearchable', brief: 'Search input at top with real-time filtering of accordion items.', status: 'ready' },
    ],
  },
  {
    slug: 'newsletters',
    label: 'Newsletter Signup',
    icon: '📧',
    dataKey: 'SAMPLE_NEWSLETTER',
    fields: SECTION_FIELDS.newsletters,
    variants: [
      { key: 'centered', label: 'Centered', component: 'NewsletterCentered', brief: 'Centered heading, subtext, inline email input + submit button.', status: 'ready' },
      { key: 'split', label: 'Split Layout', component: 'NewsletterSplit', brief: 'Benefits list left, form inputs right.', status: 'ready' },
      { key: 'banner', label: 'Banner', component: 'NewsletterBanner', brief: 'Full-width bar with contrasting background. Text left, form right.', status: 'ready' },
      { key: 'floating', label: 'Floating / Sticky', component: 'NewsletterFloating', brief: 'Sticky bottom bar appearing after 50% scroll with dismiss button.', status: 'ready' },
      { key: 'withIncentive', label: 'With Incentive', component: 'NewsletterIncentive', brief: 'Strong offer heading ("Get 10% Off"), form, trust text below.', status: 'ready' },
    ],
  },
  {
    slug: 'ctas',
    label: 'Final CTA',
    icon: '🚀',
    dataKey: 'SAMPLE_CTA',
    fields: SECTION_FIELDS.ctas,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'CtaSectionClassic', brief: 'Original CTA band — label, heading, description, and button.', status: 'ready', dataKey: 'SAMPLE_CTASECTION_CLASSIC' },
      { key: 'centeredBanner', label: 'Centered Banner', component: 'CtaCenteredBanner', brief: 'Full-width contrasting section with centered heading, subtext, CTA button.', status: 'ready' },
      { key: 'splitImage', label: 'Split with Image', component: 'CtaSplitImage', brief: 'Text and CTA left, emotional image right.', status: 'ready' },
      { key: 'cardCta', label: 'Card CTA', component: 'CtaCard', brief: 'Centered floating card with heading, subtext, CTA on contrasting background.', status: 'ready' },
      { key: 'formCta', label: 'Form CTA', component: 'CtaForm', brief: 'Persuasive text and trust badges left, lead form right.', status: 'ready' },
      { key: 'statsCta', label: 'Stats + CTA', component: 'CtaStats', brief: 'Key statistics row above centered heading and CTA button.', status: 'ready' },
      { key: 'countdownCta', label: 'Countdown CTA', component: 'CtaCountdown', brief: 'Urgency heading with live countdown timer and CTA button.', status: 'ready' },
      { key: 'testimonialCta', label: 'Testimonial + CTA', component: 'CtaTestimonial', brief: 'Customer quote left, persuasive heading and CTA right.', status: 'ready' },
      { key: 'modalForm', label: 'Modal Form CTA', component: 'CtaModalForm', brief: 'Centered CTA banner. Button opens a modal popup with a lead-capture form.', status: 'ready' },
      { key: 'callout', label: 'Split Image Callout', component: 'CtaCallout', brief: 'Two-column callout: eyebrow, heading, description and button on one side, a featured image on the other. Supports flip.', status: 'ready' },
    ],
  },
  {
    slug: 'footers',
    label: 'Footer',
    icon: '📋',
    dataKey: 'SAMPLE_FOOTER',
    fields: SECTION_FIELDS.footers,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'FooterClassic', brief: 'Original master-template footer. Logo with Beta badge + socials on top, multi-column links grid, and a bottom bar with copyright, legal links, and back-to-top.', status: 'ready' },
      { key: 'fourCol', label: '4-Column', component: 'FooterFourCol', brief: 'Logo + tagline + socials, 2 nav columns, contact info. Copyright bar below.', status: 'ready' },
      { key: 'minimal', label: 'Minimal', component: 'FooterMinimal', brief: 'Single row: logo left, links center, socials right. Copyright below.', status: 'ready' },
      { key: 'newsletterLinks', label: 'Newsletter + Links', component: 'FooterNewsletter', brief: 'Newsletter signup at top, multi-column links below, copyright bar.', status: 'ready' },
      { key: 'fatFooter', label: 'Fat Footer', component: 'FooterFat', brief: 'Large content-rich footer with 5–6 columns, certifications, payment icons.', status: 'ready' },
      { key: 'centered', label: 'Centered Simple', component: 'FooterCentered', brief: 'Everything centered: logo, nav links, socials, copyright.', status: 'ready' },
      { key: 'antigravity', label: 'Antigravity', component: 'FooterAntigravity', brief: 'Bold typography-driven footer with massive brand wordmark, clean link columns, and minimal bottom bar.', status: 'ready' },
      { key: 'full', label: 'Full with Acknowledgement', component: 'FooterFull', brief: 'Full-featured footer with logo, socials, multi-column links, and Indigenous land acknowledgement.', status: 'ready' },
    ],
  },
  {
    slug: 'team',
    label: 'Team',
    icon: '👥',
    dataKey: 'SAMPLE_TEAM',
    fields: SECTION_FIELDS.team,
    variants: [
      { key: 'threeCol', label: '3-Column Grid', component: 'TeamThreeCol', brief: 'Three-column grid of team cards with photos, names, roles, and social links.', status: 'ready' },
      { key: 'featured', label: 'Featured Leader', component: 'TeamFeatured', brief: 'Large featured leader card on top, remaining team in 3-column grid below.', status: 'ready' },
      { key: 'carousel', label: 'Carousel', component: 'TeamCarousel', brief: 'Horizontal carousel of team cards with navigation arrows.', status: 'ready' },
      { key: 'grid', label: 'Compact Grid', component: 'TeamGrid', brief: 'Denser 4-column grid of square-photo cards with a hover overlay revealing social links.', status: 'ready' },
      { key: 'list', label: 'Roster List', component: 'TeamList', brief: 'Full-width rows with avatar left, name/role/bio centre, and social links right.', status: 'ready' },
    ],
  },
  {
    slug: 'blog',
    label: 'Blog / Insights',
    icon: '📝',
    dataKey: 'SAMPLE_BLOG',
    fields: SECTION_FIELDS.blog,
    variants: [
      { key: 'threeCol', label: '3-Column Grid', component: 'BlogThreeCol', brief: 'Three-column grid of blog post cards with images, titles, excerpts, and metadata.', status: 'ready' },
      { key: 'featured', label: 'Featured Post', component: 'BlogFeatured', brief: 'Large featured post at top, remaining posts in 3-column grid below.', status: 'ready' },
      { key: 'list', label: 'List View', component: 'BlogList', brief: 'Vertical list layout with thumbnail images, titles, and excerpts.', status: 'ready' },
      { key: 'minimal', label: 'Minimal Cards', component: 'BlogMinimal', brief: 'Clean minimal cards with title, excerpt, and date only.', status: 'ready' },
      { key: 'magazine', label: 'Magazine Layout', component: 'BlogMagazine', brief: 'Asymmetric magazine-style layout with varying card sizes.', status: 'ready' },
    ],
  },
  {
    slug: 'forms',
    label: 'Forms',
    icon: '📋',
    dataKey: 'SAMPLE_FORM',
    fields: SECTION_FIELDS.forms,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'ContactFormClassic', brief: 'Original contact form with name, email, message, and success state.', status: 'ready', dataKey: 'SAMPLE_CONTACTFORM_CLASSIC' },
      { key: 'contact', label: 'Contact Form', component: 'FormContact', brief: 'Clean centered contact form with name, email, phone, and message fields.', status: 'ready' },
      { key: 'step', label: 'Step Form', component: 'FormStep', brief: 'Multi-step form with progress indicator and step navigation.', status: 'ready' },
      { key: 'quote', label: 'Quote Form', component: 'FormQuote', brief: 'Comprehensive long quote form with 4 sections for detailed project requirements.', status: 'ready' },
      { key: 'inline', label: 'Inline Form', component: 'FormInline', brief: 'Compact single-row form with copy beside it — ideal for embedded lead capture between sections.', status: 'ready' },
      { key: 'split', label: 'Split Contact', component: 'FormSplit', brief: 'Two-column layout: heading, copy and contact details on the left, full form on the right.', status: 'ready' },
    ],
  },
  {
    slug: 'stats',
    label: 'Stats',
    icon: '📊',
    dataKey: 'SAMPLE_STATS',
    fields: SECTION_FIELDS.stats,
    variants: [
      { key: 'grid', label: 'Stats Grid', component: 'StatsGrid', brief: 'A simple, clean grid of stats with optional icons and descriptions.', status: 'ready' },
      { key: 'minimal', label: 'Stats Minimal', component: 'StatsMinimal', brief: 'Clean inline stats perfect for breaking up content, no extra borders or background colors.', status: 'ready' },
      { key: 'withImage', label: 'Stats with Image', component: 'StatsWithImage', brief: 'Image on one side, headings & stats grid on the other.', status: 'ready' },
      { key: 'counter', label: 'Animated Counters', component: 'StatsCounter', brief: 'Dark band of bold stats whose numeric values count up from zero on load, preserving prefixes/suffixes.', status: 'ready' },
      { key: 'bigNumber', label: 'Featured Big Number', component: 'StatsBigNumber', brief: 'Promotes the first stat to a huge focal number with the remaining stats in a bordered grid alongside.', status: 'ready' },
    ],
  },
  {
    slug: 'banners',
    label: 'Banners',
    icon: '🏷️',
    dataKey: 'SAMPLE_BANNER',
    fields: SECTION_FIELDS.banners,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'PageHeroClassic', brief: 'Original page hero / banner — label, heading, description, and button.', status: 'ready', dataKey: 'SAMPLE_PAGEHERO_CLASSIC' },
      { key: 'sticky', label: 'Sticky Banner', component: 'BannerSticky', brief: 'A full-width dark banner at the top of the page with a dismiss button.', status: 'ready' },
      { key: 'floating', label: 'Floating Banner', component: 'BannerFloating', brief: 'A rounded banner that floats slightly below the top of the page.', status: 'ready' },
      { key: 'cookie', label: 'Cookie Banner', component: 'BannerCookie', brief: 'A floating card in the bottom corner with consent actions.', status: 'ready' },
      { key: 'cookieBottom', label: 'Cookie Bottom Bar', component: 'BannerCookieBottom', brief: 'A full-width bar fixed to the bottom of the screen.', status: 'ready' },
    ],
  },
  {
    slug: 'breakouts',
    label: 'Breakout',
    icon: '💥',
    dataKey: 'SAMPLE_BREAKOUT',
    fields: SECTION_FIELDS.breakouts,
    variants: [
      { key: 'centered', label: 'Centered', component: 'BreakoutCentered', brief: 'Full-width breakout section with centered content, eyebrow, heading, description, and CTA button.', status: 'ready' },
      { key: 'gradient', label: 'Gradient Glow', component: 'BreakoutGradient', brief: 'Edge-to-edge dark panel with a soft radial gradient glow, centered content and CTA.', status: 'ready' },
      { key: 'split', label: 'Two-column', component: 'BreakoutSplit', brief: 'Bordered panel split into heading on the left and description plus CTA on the right.', status: 'ready' },
      { key: 'quote', label: 'Pull Quote', component: 'BreakoutQuote', brief: 'Large editorial pull-quote treating the heading as the quote and eyebrow as attribution.', status: 'ready' },
    ],
  },
  {
    slug: 'showcases',
    label: 'Showcase',
    icon: '🖥️',
    dataKey: 'SAMPLE_SHOWCASE',
    fields: SECTION_FIELDS.showcases,
    variants: [
      { key: 'classic', label: 'Classic (Original)', component: 'CarouselClassic', brief: 'Original carousel of icon/title/description cards.', status: 'ready', dataKey: 'SAMPLE_CARDGRID_CLASSIC' },
      { key: 'scrollReveal', label: 'Scroll Reveal Left', component: 'ShowcaseScrollReveal', brief: 'Sticky scroll section with content on left, browser mockup image on right that scrolls vertically.', status: 'ready' },
      { key: 'scrollRevealRight', label: 'Scroll Reveal Right', component: 'ShowcaseScrollRevealRight', brief: 'Sticky scroll section with content on right, browser mockup image on left that scrolls vertically.', status: 'ready' },
      { key: 'static', label: 'Static Split', component: 'ShowcaseStatic', brief: 'Non-animated two-column showcase with content beside a browser-chrome product mockup. Honours reverse.', status: 'ready' },
      { key: 'deviceMockup', label: 'Laptop Mockup', component: 'ShowcaseDeviceMockup', brief: 'Centered heading and copy above a large laptop-frame mockup of the product.', status: 'ready' },
    ],
  },
  {
    slug: 'content',
    label: 'Content / Prose',
    icon: '📄',
    dataKey: 'SAMPLE_CONTENT',
    fields: SECTION_FIELDS.content,
    variants: [
      { key: 'prose', label: 'Centered Prose', component: 'ContentProse', brief: 'A simple centered text block for long-form content using typography prose.', status: 'ready' },
      { key: 'split', label: 'Split Layout', component: 'ContentSplit', brief: 'A two-column layout with heading on the left and rich text on the right.', status: 'ready' },
      { key: 'withImage', label: 'Prose with Image', component: 'ContentWithImage', brief: 'A content block accompanied by a large featured hero image and author metadata.', status: 'ready' },
      { key: 'sidebar', label: 'Prose with Sidebar', component: 'ContentSidebar', brief: 'Long-form prose in the main column with a sticky author byline and meta sidebar.', status: 'ready' },
      { key: 'highlight', label: 'Boxed Highlight', component: 'ContentHighlight', brief: 'Centered prose set on a tinted card with an author byline up top — for notes, letters, announcements.', status: 'ready' },
    ],
  },
  {
    slug: 'comparison',
    label: 'Comparison',
    icon: '⚖️',
    dataKey: 'SAMPLE_COMPARISON',
    fields: SECTION_FIELDS.comparison,
    variants: [
      { key: 'table', label: 'Comparison Table', component: 'ComparisonTable', brief: 'Responsive us-vs-competitors table with a highlighted "us" column, per-row feature + subtitle, and optional CTA.', status: 'ready' },
    ],
  },
  {
    slug: 'contact',
    label: 'Contact / Areas',
    icon: '📍',
    dataKey: 'SAMPLE_CONTACT',
    fields: SECTION_FIELDS.contact,
    variants: [
      { key: 'serviceAreas', label: 'Map + Service Areas', component: 'ContactServiceAreas', brief: 'Centered heading, embedded map iframe, and an expandable grid of service-area suburbs with show-more toggle.', status: 'ready' },
    ],
  },
  {
    slug: 'logos',
    label: 'Logos / Trusted By',
    icon: '🏆',
    dataKey: 'SAMPLE_LOGOS',
    fields: SECTION_FIELDS.logos,
    variants: [
      { key: 'row', label: 'Text / Icon Row', component: 'LogosRow', brief: 'Centered caption above a wrapping flex row of brand marks rendered as icon plus name.', status: 'ready' },
      { key: 'imageGrid', label: 'Image Logo Grid', component: 'LogosImageGrid', brief: 'Image logos in an even bordered grid, greyscaled and fading to full colour on hover.', status: 'ready' },
    ],
  },
  {
    slug: 'galleries',
    label: 'Gallery',
    icon: '🖼️',
    dataKey: 'SAMPLE_GALLERY',
    fields: SECTION_FIELDS.galleries,
    variants: [
      { key: 'grid', label: 'Uniform Grid', component: 'GalleryGrid', brief: 'Even responsive grid of square-cropped images with captions that reveal on hover.', status: 'ready' },
      { key: 'masonry', label: 'Masonry', component: 'GalleryMasonry', brief: 'Pinterest-style masonry via CSS columns so images keep their natural aspect ratio. Hover captions.', status: 'ready' },
    ],
  },
  {
    slug: 'integrations',
    label: 'Integrations',
    icon: '🔌',
    dataKey: 'SAMPLE_INTEGRATIONS',
    fields: SECTION_FIELDS.integrations,
    variants: [
      { key: 'grid', label: 'Integration Cards', component: 'IntegrationsGrid', brief: 'Bordered cards with app icon, name, description, and category tag, plus an optional CTA.', status: 'ready' },
      { key: 'compact', label: 'Dense Logo Tiles', component: 'IntegrationsCompact', brief: 'Dense even grid of icon + name tiles for showing "works with 100+ tools" at a glance.', status: 'ready' },
    ],
  },
  {
    slug: 'about',
    label: 'About / Story',
    icon: '📖',
    dataKey: 'SAMPLE_ABOUT',
    fields: SECTION_FIELDS.about,
    variants: [
      { key: 'storySplit', label: 'Image + Story', component: 'AboutStorySplit', brief: 'Feature image beside the company story (eyebrow, heading, rich-text body) with an optional stats row beneath.', status: 'ready' },
      { key: 'valuesGrid', label: 'Mission + Values', component: 'AboutValuesGrid', brief: 'Centered heading above a grid of value cards, each with an icon, title, and description.', status: 'ready' },
    ],
  },
  {
    slug: 'careers',
    label: 'Careers / Jobs',
    icon: '💼',
    dataKey: 'SAMPLE_CAREERS',
    fields: SECTION_FIELDS.careers,
    variants: [
      { key: 'list', label: 'Openings List', component: 'CareersList', brief: 'Full-width rows per opening with title, description, department/location/type tags, and an apply arrow.', status: 'ready' },
      { key: 'grid', label: 'Openings Grid', component: 'CareersGrid', brief: 'Bordered cards per opening with department, title, meta tags, description, and an apply link.', status: 'ready' },
    ],
  },
  {
    slug: 'events',
    label: 'Events',
    icon: '📅',
    dataKey: 'SAMPLE_EVENTS',
    fields: SECTION_FIELDS.events,
    variants: [
      { key: 'list', label: 'Agenda List', component: 'EventsList', brief: 'Agenda-style rows with a prominent date block left and event details right.', status: 'ready' },
      { key: 'grid', label: 'Event Cards', component: 'EventsGrid', brief: 'Image-topped cards with a date badge, category, title, meta, and register link.', status: 'ready' },
    ],
  },
];

/** Helper: get a section by slug */
export function getSection(slug: string): SectionDefinition | undefined {
  return PATTERN_REGISTRY.find((s) => s.slug === slug);
}

/** Helper: get all sections as a flat list of { section, variant } */
export function getAllPatterns() {
  return PATTERN_REGISTRY.flatMap((section) =>
    section.variants.map((variant) => ({
      section: section.label,
      sectionSlug: section.slug,
      ...variant,
    }))
  );
}

/** Helper: count totals */
export function getStats() {
  const totalSections = PATTERN_REGISTRY.length;
  const totalPatterns = PATTERN_REGISTRY.reduce((sum, s) => sum + s.variants.length, 0);
  const ready = getAllPatterns().filter((p) => p.status === 'ready').length;
  const wip = getAllPatterns().filter((p) => p.status === 'wip').length;
  const planned = getAllPatterns().filter((p) => p.status === 'planned').length;
  return { totalSections, totalPatterns, ready, wip, planned };
}

/** Helper: get all patterns with preview paths */
export function getAllPatternsWithPreviews() {
  return PATTERN_REGISTRY.flatMap((section) =>
    section.variants.map((variant) => ({
      section: section.label,
      sectionSlug: section.slug,
      ...variant,
      preview: variant.preview || `/previews/${section.slug}/${variant.key}.png`,
    }))
  );
}

/** Helper: get preview path for a specific variant */
export function getPreviewPath(sectionSlug: string, variantKey: string): string {
  return `/previews/${sectionSlug}/${variantKey}.png`;
}
