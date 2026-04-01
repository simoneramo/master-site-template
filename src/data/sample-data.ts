/**
 * Sample Data — Dummy content for the component browser previews.
 * Each section type has a standard data shape that all its variants accept.
 * This keeps previews consistent and makes variants directly interchangeable.
 */

// ─── Shared Types ───────────────────────────────────────────

export interface CtaLink {
  text: string;
  url: string;
}

export interface ImageData {
  src: string;
  alt: string;
}

// ─── Section Data Interfaces ────────────────────────────────

export interface HeroData {
  eyebrow?: string;
  heading: string;
  headingAccent?: string; // word(s) to highlight in accent color
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  image?: ImageData;
  trustBadge?: {
    icon: string;
    title: string;
    subtitle: string;
  };
  rotatingWords?: string[]; // for animated text variant
  slides?: {
    heading: string;
    description: string;
    cta: CtaLink;
    image: ImageData;
  }[];
  formFields?: { label: string; type: string; placeholder: string }[];
}

export interface TrustBarData {
  logos?: ImageData[];
  stats?: { value: string; label: string }[];
  badges?: { icon: string; text: string }[];
  testimonial?: {
    quote: string;
    name: string;
    photo?: string;
  };
}

export interface ProblemData {
  eyebrow?: string;
  heading: string;
  description?: string;
  painPoints: {
    icon?: string;
    heading: string;
    description: string;
  }[];
  image?: ImageData;
  comparison?: {
    without: { heading: string; points: string[] };
    with: { heading: string; points: string[] };
  };
}

export interface SolutionData {
  eyebrow?: string;
  heading: string;
  description: string;
  benefits: { icon?: string; heading: string; description: string }[];
  image?: ImageData;
  primaryCta?: CtaLink;
  tabs?: { label: string; heading: string; description: string; image?: ImageData }[];
}

export interface ServiceItem {
  icon?: string;
  heading: string;
  description: string;
  image?: ImageData;
  link?: CtaLink;
  category?: string;
}

export interface ServicesData {
  eyebrow?: string;
  heading: string;
  description?: string;
  services: ServiceItem[];
}

export interface FeatureItem {
  icon?: string;
  heading: string;
  description: string;
}

export interface FeaturesData {
  eyebrow?: string;
  heading: string;
  description?: string;
  features: FeatureItem[];
  image?: ImageData;
  tabs?: { label: string; features: FeatureItem[]; image?: ImageData }[];
}

export interface BenefitItem {
  icon?: string;
  heading: string;
  description: string;
  number?: number;
}

export interface BenefitsData {
  eyebrow?: string;
  heading: string;
  description?: string;
  benefits: BenefitItem[];
  image?: ImageData;
}

export interface VideoData {
  eyebrow?: string;
  heading: string;
  description?: string;
  videoUrl?: string;
  thumbnailImage?: ImageData;
  videos?: { title: string; thumbnailImage: ImageData; videoUrl: string }[];
  testimonial?: { name: string; title: string; company: string; rating: number };
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title?: string;
  company?: string;
  location?: string;
  photo?: string;
  rating?: number;
  logo?: ImageData;
  platform?: string;
}

export interface TestimonialsData {
  eyebrow?: string;
  heading: string;
  description?: string;
  testimonials: TestimonialItem[];
  averageRating?: number;
  totalReviews?: number;
  ratingBreakdown?: { stars: number; percentage: number }[];
}

export interface PortfolioItem {
  title: string;
  category: string;
  description?: string;
  image: ImageData;
  metric?: string;
  link?: string;
}

export interface PortfolioData {
  eyebrow?: string;
  heading: string;
  description?: string;
  categories?: string[];
  projects: PortfolioItem[];
}

export interface ProcessStep {
  number: number;
  icon?: string;
  heading: string;
  description: string;
  image?: ImageData;
}

export interface ProcessData {
  eyebrow?: string;
  heading: string;
  description?: string;
  steps: ProcessStep[];
}

export interface PricingTier {
  name: string;
  monthlyPrice?: number;
  annualPrice?: number;
  price?: string;
  period?: string;
  description: string;
  features: { text: string; included: boolean }[];
  cta: CtaLink;
  recommended?: boolean;
}

export interface PricingData {
  eyebrow?: string;
  heading: string;
  description?: string;
  tiers: PricingTier[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FaqData {
  eyebrow?: string;
  heading: string;
  description?: string;
  contactCta?: CtaLink;
  categories?: string[];
  items: FaqItem[];
}

export interface NewsletterData {
  heading: string;
  description?: string;
  incentive?: string;
  benefits?: string[];
  trustText?: string;
  buttonText?: string;
}

export interface CtaData {
  eyebrow?: string;
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  image?: ImageData;
  stats?: { value: string; label: string }[];
  testimonial?: TestimonialItem;
  formFields?: { label: string; type: string; placeholder: string }[];
  countdownTarget?: string; // ISO date string
  trustBadges?: { icon: string; text: string }[];
}

export interface HeaderNavLink {
  label: string;
  url: string;
  children?: { label: string; url: string; description?: string }[];
}

export interface HeaderData {
  logo: string;
  navLinks: HeaderNavLink[];
  cta: CtaLink;
  phone?: string;
  topBar?: {
    phone?: string;
    email?: string;
    hours?: string;
    socials?: { platform: string; url: string }[];
  };
}

export interface FooterColumn {
  heading: string;
  links: { label: string; url: string }[];
}

export interface FooterData {
  logo: string;
  tagline?: string;
  columns: FooterColumn[];
  socials: { platform: string; url: string; icon: string }[];
  copyright: string;
  legalLinks: { label: string; url: string }[];
  newsletterHeading?: string;
  newsletterDescription?: string;
}


// ─── Sample Data Instances ──────────────────────────────────

export const SAMPLE_HEADER: HeaderData = {
  logo: '🚀 Acme Studio',
  navLinks: [
    { label: 'Services', url: '/services', children: [
      { label: 'Web Design', url: '/services/web-design', description: 'Beautiful, responsive websites' },
      { label: 'SEO', url: '/services/seo', description: 'Rank higher on Google' },
      { label: 'Branding', url: '/services/branding', description: 'Stand out from the crowd' },
    ]},
    { label: 'Work', url: '/work' },
    { label: 'About', url: '/about' },
    { label: 'Blog', url: '/blog' },
    { label: 'Contact', url: '/contact' },
  ],
  cta: { text: 'Get a Quote', url: '/quote' },
  phone: '0400 000 000',
  topBar: {
    phone: '0400 000 000',
    email: 'hello@acmestudio.com',
    hours: 'Mon–Fri 9am–5pm',
  },
};

export const SAMPLE_HERO: HeroData = {
  eyebrow: 'Award-Winning Studio',
  heading: 'We build websites that',
  headingAccent: 'drive results',
  description: 'From concept to launch, we create high-converting websites for local businesses across Sydney. No templates. No compromise.',
  primaryCta: { text: 'Get Your Free Quote', url: '/quote' },
  secondaryCta: { text: 'View Our Work', url: '/work' },
  image: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', alt: 'Modern workspace' },
  trustBadge: { icon: '⭐', title: '5.0 Rating', subtitle: '120+ Reviews' },
  rotatingWords: ['drive results', 'convert visitors', 'grow brands', 'stand out'],
  slides: [
    { heading: 'Beautiful Web Design', description: 'Crafted with care for your brand', cta: { text: 'Learn More', url: '/services' }, image: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop', alt: 'Web design' } },
    { heading: 'SEO That Works', description: 'Get found by the right customers', cta: { text: 'See Results', url: '/work' }, image: { src: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=800&fit=crop', alt: 'SEO results' } },
    { heading: 'Local Business Experts', description: 'Proudly serving Sydney since 2015', cta: { text: 'About Us', url: '/about' }, image: { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop', alt: 'Team meeting' } },
  ],
  formFields: [
    { label: 'Full Name', type: 'text', placeholder: 'John Smith' },
    { label: 'Email', type: 'email', placeholder: 'john@example.com' },
    { label: 'Phone', type: 'tel', placeholder: '0400 000 000' },
    { label: 'Message', type: 'textarea', placeholder: 'Tell us about your project...' },
  ],
};

export const SAMPLE_TRUST_BAR: TrustBarData = {
  logos: [
    { src: 'https://placehold.co/120x40/e5e7eb/a1a1aa?text=Google', alt: 'Google' },
    { src: 'https://placehold.co/120x40/e5e7eb/a1a1aa?text=Microsoft', alt: 'Microsoft' },
    { src: 'https://placehold.co/120x40/e5e7eb/a1a1aa?text=Shopify', alt: 'Shopify' },
    { src: 'https://placehold.co/120x40/e5e7eb/a1a1aa?text=Stripe', alt: 'Stripe' },
    { src: 'https://placehold.co/120x40/e5e7eb/a1a1aa?text=Vercel', alt: 'Vercel' },
  ],
  stats: [
    { value: '500+', label: 'Projects Delivered' },
    { value: '15', label: 'Years Experience' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '98%', label: 'Client Retention' },
  ],
  badges: [
    { icon: '🛡️', text: 'Licensed & Insured' },
    { icon: '⭐', text: '5-Star Rated' },
    { icon: '📍', text: 'Locally Owned' },
    { icon: '✅', text: 'Certified Partner' },
  ],
  testimonial: {
    quote: 'Best agency we\'ve ever worked with. Truly transformed our online presence.',
    name: 'Sarah Mitchell, CEO',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
};

export const SAMPLE_PROBLEM: ProblemData = {
  eyebrow: 'The Challenge',
  heading: 'Your website is costing you customers',
  painPoints: [
    { icon: '🐌', heading: 'Slow load times', description: 'Every second of delay loses 7% of conversions. Most local business sites take 5+ seconds to load.' },
    { icon: '📱', heading: 'Not mobile-friendly', description: '68% of your customers browse on mobile. If your site isn\'t responsive, they leave immediately.' },
    { icon: '🔍', heading: 'Invisible on Google', description: 'If you\'re not on page 1, you don\'t exist. Poor SEO means your competitors get all the traffic.' },
  ],
  image: { src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop', alt: 'Frustrated person at computer' },
  comparison: {
    without: { heading: 'Without Us', points: ['Slow, outdated website', 'No mobile optimization', 'No Google visibility', 'Lost leads every day'] },
    with: { heading: 'With Acme Studio', points: ['Lightning-fast, modern site', 'Perfect on every device', 'Page 1 Google rankings', 'Leads on autopilot'] },
  },
};

export const SAMPLE_SOLUTION: SolutionData = {
  eyebrow: 'The Solution',
  heading: 'A website that works as hard as you do',
  description: 'We combine stunning design with proven conversion strategies to create websites that don\'t just look good — they deliver measurable business results.',
  benefits: [
    { icon: '⚡', heading: 'Lightning Fast', description: 'Sub-2-second load times that keep visitors engaged.' },
    { icon: '📱', heading: 'Mobile-First', description: 'Designed for phones first, beautiful on every screen.' },
    { icon: '🎯', heading: 'Conversion-Focused', description: 'Every element strategically placed to drive action.' },
    { icon: '🔍', heading: 'SEO-Optimized', description: 'Built to rank on Google from day one.' },
  ],
  image: { src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop', alt: 'Team working on solution' },
  primaryCta: { text: 'See How It Works', url: '/process' },
  tabs: [
    { label: 'Design', heading: 'Beautiful, On-Brand Design', description: 'We craft pixel-perfect designs that reflect your brand personality.', image: { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop', alt: 'Design mockup' } },
    { label: 'Development', heading: 'Clean, Modern Code', description: 'Built with the latest technologies for speed and reliability.', image: { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop', alt: 'Code editor' } },
    { label: 'Growth', heading: 'SEO & Conversion', description: 'Ongoing optimization to keep your site performing at its best.', image: { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', alt: 'Analytics dashboard' } },
  ],
};

export const SAMPLE_SERVICES: ServicesData = {
  eyebrow: 'What We Do',
  heading: 'Services built for growth',
  description: 'Everything you need to establish a powerful online presence and convert visitors into customers.',
  services: [
    { icon: '🎨', heading: 'Web Design', description: 'Custom designs that capture your brand and convert visitors into customers.', image: { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop', alt: 'Web design' }, link: { text: 'Learn More', url: '/services/web-design' }, category: 'Design' },
    { icon: '💻', heading: 'Web Development', description: 'Fast, accessible, and SEO-ready websites built with modern technology.', image: { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop', alt: 'Development' }, link: { text: 'Learn More', url: '/services/development' }, category: 'Development' },
    { icon: '🔍', heading: 'SEO', description: 'Rank higher on Google and drive organic traffic to your business.', image: { src: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop', alt: 'SEO' }, link: { text: 'Learn More', url: '/services/seo' }, category: 'Marketing' },
    { icon: '📱', heading: 'Mobile Apps', description: 'Cross-platform mobile applications that delight your users.', image: { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop', alt: 'Mobile app' }, link: { text: 'Learn More', url: '/services/apps' }, category: 'Development' },
    { icon: '🖋️', heading: 'Branding', description: 'Logo, colour palette, and brand guidelines that set you apart.', image: { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop', alt: 'Branding' }, link: { text: 'Learn More', url: '/services/branding' }, category: 'Design' },
    { icon: '📊', heading: 'Analytics', description: 'Data-driven insights to continuously improve your digital performance.', image: { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', alt: 'Analytics' }, link: { text: 'Learn More', url: '/services/analytics' }, category: 'Marketing' },
  ],
};

export const SAMPLE_FEATURES: FeaturesData = {
  eyebrow: 'Why Choose Us',
  heading: 'Built different, by design',
  description: 'Every feature is crafted to give you an unfair advantage.',
  features: [
    { icon: '⚡', heading: 'Blazing Fast', description: 'Sub-2-second load times with optimised assets.' },
    { icon: '🔒', heading: 'Secure by Default', description: 'SSL, CSRF protection, and regular security audits.' },
    { icon: '📱', heading: 'Fully Responsive', description: 'Perfect on every device, from phones to ultrawide monitors.' },
    { icon: '♿', heading: 'Accessible', description: 'WCAG 2.1 AA compliant for all users.' },
    { icon: '🎨', heading: 'Custom Design', description: 'No templates. Every pixel is purpose-built for your brand.' },
    { icon: '📈', heading: 'SEO-Ready', description: 'Structured data, meta tags, and performance optimised.' },
  ],
  image: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', alt: 'Features showcase' },
};

export const SAMPLE_BENEFITS: BenefitsData = {
  eyebrow: 'The Advantage',
  heading: 'Results that speak for themselves',
  benefits: [
    { icon: '📈', heading: 'More Traffic', description: 'Average 3x increase in organic traffic within 6 months.', number: 1 },
    { icon: '💰', heading: 'More Revenue', description: 'Our clients see an average 40% increase in online revenue.', number: 2 },
    { icon: '⏱️', heading: 'Save Time', description: 'Automated workflows and CMS let you update content in minutes.', number: 3 },
    { icon: '🏆', heading: 'Stand Out', description: 'Custom design that differentiates you from cookie-cutter competitors.', number: 4 },
  ],
  image: { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop', alt: 'Happy client results' },
};

export const SAMPLE_VIDEO: VideoData = {
  eyebrow: 'See It In Action',
  heading: 'Watch how we transform businesses',
  description: 'A 2-minute walkthrough of our process and results.',
  thumbnailImage: { src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&h=675&fit=crop', alt: 'Video thumbnail' },
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  videos: [
    { title: 'Client Success Story', thumbnailImage: { src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=225&fit=crop', alt: 'Video 1' }, videoUrl: '#' },
    { title: 'Behind the Scenes', thumbnailImage: { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=225&fit=crop', alt: 'Video 2' }, videoUrl: '#' },
    { title: 'Design Process', thumbnailImage: { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=225&fit=crop', alt: 'Video 3' }, videoUrl: '#' },
  ],
  testimonial: { name: 'James Wilson', title: 'Founder', company: 'Wilson & Co', rating: 5 },
};

export const SAMPLE_TESTIMONIALS: TestimonialsData = {
  eyebrow: 'What Clients Say',
  heading: 'Trusted by 500+ businesses',
  testimonials: [
    { quote: 'Acme Studio completely transformed our online presence. Our enquiries have tripled since the new site launched.', name: 'Sarah Mitchell', title: 'CEO', company: 'Mitchell & Co', rating: 5, photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', platform: 'Google' },
    { quote: 'The team understood our vision from day one. The website they built exceeded all expectations.', name: 'James Chen', title: 'Director', company: 'Altitude Finance', rating: 5, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', platform: 'Google' },
    { quote: 'Fast, responsive, and incredibly talented. Best investment we\'ve made for our business this year.', name: 'Emily Torres', title: 'Owner', company: 'Bloom Floristry', rating: 5, photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', platform: 'Facebook' },
    { quote: 'Professional from start to finish. They delivered on time, on budget, and the results speak for themselves.', name: 'David Park', title: 'Founder', company: 'Park Digital', rating: 5, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', platform: 'Google' },
    { quote: 'Our conversion rate went from 1.2% to 4.8% after the redesign. Absolutely worth every cent.', name: 'Lisa Nguyen', title: 'Marketing Lead', company: 'FreshMeals', rating: 5, photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', platform: 'Yelp' },
    { quote: 'They didn\'t just build a website — they built a growth engine for our business.', name: 'Marcus Brown', title: 'Co-founder', company: 'UrbanFit Gym', rating: 4, photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', platform: 'Google' },
  ],
  averageRating: 4.9,
  totalReviews: 523,
  ratingBreakdown: [
    { stars: 5, percentage: 87 },
    { stars: 4, percentage: 9 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 },
  ],
};

export const SAMPLE_PORTFOLIO: PortfolioData = {
  eyebrow: 'Our Work',
  heading: 'Projects we\'re proud of',
  categories: ['All', 'Web Design', 'Branding', 'E-Commerce', 'App Development'],
  projects: [
    { title: 'Mitchell & Co Rebrand', category: 'Branding', description: 'Complete brand overhaul for a leading consultancy firm.', image: { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=450&fit=crop', alt: 'Mitchell & Co' }, metric: '+120% brand recognition' },
    { title: 'Bloom Floristry Shop', category: 'E-Commerce', description: 'Custom Shopify store with same-day delivery booking.', image: { src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop', alt: 'Bloom Floristry' }, metric: '+340% online sales' },
    { title: 'UrbanFit App', category: 'App Development', description: 'Cross-platform fitness app with class booking.', image: { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop', alt: 'UrbanFit' }, metric: '10k+ downloads' },
    { title: 'Altitude Finance', category: 'Web Design', description: 'Professional website for a boutique finance firm.', image: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', alt: 'Altitude Finance' }, metric: '+85% lead generation' },
    { title: 'Park Digital Agency', category: 'Web Design', description: 'Portfolio site for a creative digital agency.', image: { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', alt: 'Park Digital' }, metric: '+200% portfolio views' },
    { title: 'FreshMeals Delivery', category: 'E-Commerce', description: 'Meal delivery platform with subscription management.', image: { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop', alt: 'FreshMeals' }, metric: '+45% repeat orders' },
  ],
};

export const SAMPLE_PROCESS: ProcessData = {
  eyebrow: 'How It Works',
  heading: 'From concept to launch in 4 simple steps',
  steps: [
    { number: 1, icon: '🔍', heading: 'Discovery', description: 'We learn about your business, goals, competitors, and target audience to create a strategic brief.' },
    { number: 2, icon: '🎨', heading: 'Design', description: 'We create wireframes and high-fidelity mockups for your approval before writing a single line of code.' },
    { number: 3, icon: '💻', heading: 'Build', description: 'Our developers bring the designs to life with clean, fast, accessible code and CMS integration.' },
    { number: 4, icon: '🚀', heading: 'Launch & Grow', description: 'We handle deployment, analytics setup, and provide ongoing support to keep you growing.' },
  ],
};

export const SAMPLE_PRICING: PricingData = {
  eyebrow: 'Pricing',
  heading: 'Simple, transparent pricing',
  description: 'No hidden fees. No surprises. Pick the plan that fits your needs.',
  tiers: [
    {
      name: 'Starter',
      monthlyPrice: 99,
      annualPrice: 79,
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses just getting started online.',
      features: [
        { text: '5-page responsive website', included: true },
        { text: 'Basic SEO setup', included: true },
        { text: 'Contact form', included: true },
        { text: 'CMS access', included: true },
        { text: 'E-commerce', included: false },
        { text: 'Custom integrations', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: { text: 'Get Started', url: '/contact' },
    },
    {
      name: 'Professional',
      monthlyPrice: 249,
      annualPrice: 199,
      price: '$249',
      period: '/month',
      description: 'For growing businesses that need more features and support.',
      features: [
        { text: '10-page responsive website', included: true },
        { text: 'Advanced SEO', included: true },
        { text: 'Contact & quote forms', included: true },
        { text: 'CMS access', included: true },
        { text: 'Basic e-commerce (up to 50 products)', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'Priority support', included: false },
      ],
      cta: { text: 'Get Started', url: '/contact' },
      recommended: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 499,
      annualPrice: 399,
      price: '$499',
      period: '/month',
      description: 'Full-service solution for established businesses.',
      features: [
        { text: 'Unlimited pages', included: true },
        { text: 'Full SEO suite', included: true },
        { text: 'Advanced forms & workflows', included: true },
        { text: 'CMS access', included: true },
        { text: 'Full e-commerce', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'Priority support', included: true },
      ],
      cta: { text: 'Contact Us', url: '/contact' },
    },
  ],
};

export const SAMPLE_FAQ: FaqData = {
  eyebrow: 'FAQ',
  heading: 'Frequently asked questions',
  description: 'Everything you need to know about working with us.',
  contactCta: { text: 'Ask us anything', url: '/contact' },
  categories: ['General', 'Pricing', 'Technical', 'Support'],
  items: [
    { question: 'How long does it take to build a website?', answer: 'Most projects take 4–8 weeks from kickoff to launch, depending on complexity. A simple 5-page site can be done in 3–4 weeks, while a full e-commerce build may take 8–12 weeks.', category: 'General' },
    { question: 'What is your pricing structure?', answer: 'We offer fixed-price packages starting from $2,500 for a basic site. Custom quotes are provided after an initial consultation where we understand your exact requirements.', category: 'Pricing' },
    { question: 'Do you provide ongoing support?', answer: 'Yes! We offer monthly maintenance plans that include hosting, security updates, content changes, and performance monitoring starting at $99/month.', category: 'Support' },
    { question: 'Can I update the website myself?', answer: 'Absolutely. Every site we build comes with a user-friendly CMS (TinaCMS) that lets you edit text, images, and pages without any technical knowledge.', category: 'Technical' },
    { question: 'Do you work with businesses outside of Sydney?', answer: 'Yes, we work with businesses across Australia and internationally. Most of our collaboration happens over video calls and shared project boards.', category: 'General' },
    { question: 'What technologies do you use?', answer: 'We primarily use Astro, Tailwind CSS, and Alpine.js for frontend, with TinaCMS for content management. We host on Vercel for maximum speed and reliability.', category: 'Technical' },
    { question: 'Is there a money-back guarantee?', answer: 'We offer satisfaction at every milestone. If you\'re not happy with the initial design concepts, we\'ll revise until you are or provide a full refund of the design phase.', category: 'Pricing' },
    { question: 'How do I get started?', answer: 'Simply fill out our quote form or call us. We\'ll schedule a free 30-minute consultation to discuss your project and provide a detailed proposal within 48 hours.', category: 'General' },
  ],
};

export const SAMPLE_NEWSLETTER: NewsletterData = {
  heading: 'Stay in the loop',
  description: 'Get weekly tips on web design, SEO, and growing your online presence. No spam, unsubscribe anytime.',
  incentive: 'Get 10% Off Your First Project',
  benefits: [
    'Weekly design tips & trends',
    'SEO strategies that work',
    'Exclusive subscriber-only offers',
    'Early access to new features',
  ],
  trustText: 'Join 2,000+ business owners. No spam, unsubscribe anytime.',
  buttonText: 'Subscribe',
};

export const SAMPLE_CTA: CtaData = {
  eyebrow: 'Ready to grow?',
  heading: 'Let\'s build something great together',
  description: 'Get a free consultation and custom proposal for your project. No obligation, no pressure.',
  primaryCta: { text: 'Get Your Free Quote', url: '/quote' },
  secondaryCta: { text: 'Call Us Now', url: 'tel:0400000000' },
  image: { src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop', alt: 'Happy team' },
  stats: [
    { value: '500+', label: 'Projects Delivered' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '15', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ],
  testimonial: {
    quote: 'Working with Acme Studio was the best business decision we made this year. Our revenue is up 40%.',
    name: 'Sarah Mitchell',
    title: 'CEO',
    company: 'Mitchell & Co',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  formFields: [
    { label: 'Name', type: 'text', placeholder: 'Your name' },
    { label: 'Email', type: 'email', placeholder: 'you@example.com' },
    { label: 'Phone', type: 'tel', placeholder: '0400 000 000' },
    { label: 'Message', type: 'textarea', placeholder: 'Tell us about your project...' },
  ],
  countdownTarget: '2027-01-01T00:00:00.000Z',
  trustBadges: [
    { icon: '🛡️', text: 'Licensed & Insured' },
    { icon: '⭐', text: '5-Star Rated' },
    { icon: '💯', text: 'Satisfaction Guaranteed' },
  ],
};

export const SAMPLE_FOOTER: FooterData = {
  logo: '🚀 Acme Studio',
  tagline: 'We build websites that drive results for local businesses across Sydney.',
  columns: [
    { heading: 'Services', links: [
      { label: 'Web Design', url: '/services/web-design' },
      { label: 'Development', url: '/services/development' },
      { label: 'SEO', url: '/services/seo' },
      { label: 'Branding', url: '/services/branding' },
    ]},
    { heading: 'Company', links: [
      { label: 'About', url: '/about' },
      { label: 'Work', url: '/work' },
      { label: 'Blog', url: '/blog' },
      { label: 'Careers', url: '/careers' },
    ]},
    { heading: 'Support', links: [
      { label: 'Contact', url: '/contact' },
      { label: 'FAQ', url: '/faq' },
      { label: 'Help Center', url: '/help' },
    ]},
  ],
  socials: [
    { platform: 'Twitter', url: '#', icon: '𝕏' },
    { platform: 'LinkedIn', url: '#', icon: 'in' },
    { platform: 'Instagram', url: '#', icon: '📷' },
    { platform: 'Facebook', url: '#', icon: 'f' },
  ],
  copyright: `© ${new Date().getFullYear()} Acme Studio. All rights reserved.`,
  legalLinks: [
    { label: 'Privacy Policy', url: '/privacy-policy' },
    { label: 'Terms & Conditions', url: '/terms-and-conditions' },
  ],
  newsletterHeading: 'Subscribe to our newsletter',
  newsletterDescription: 'Get the latest tips on web design and growing your business.',
};


// ═══════════════════════════════════════════════════════════════════════════════
// Edge Case Sample Data (Task 6)
// Use these to test component resilience with minimal/large/missing data
// ═══════════════════════════════════════════════════════════════════════════════

// ── Minimal Datasets (1 item, missing optional fields) ─────────────────────────

export const SAMPLE_HERO_MINIMAL: HeroData = {
  heading: 'Welcome to Our Site',
  description: 'We help businesses grow online.',
  primaryCta: { text: 'Contact', url: '/contact' },
  // No eyebrow, no image, no headingAccent, no secondaryCta, no trustBadge
};

export const SAMPLE_TESTIMONIALS_MINIMAL: TestimonialsData = {
  heading: 'What Our Client Says',
  testimonials: [
    {
      quote: 'Excellent work. Highly recommended.',
      name: 'Jane Doe',
      title: 'CEO',
      rating: 5,
    },
  ],
  // No eyebrow, no description, no photos, no averageRating, no ratingBreakdown
};

export const SAMPLE_PRICING_TWO_TIER: PricingData = {
  heading: 'Simple Pricing',
  tiers: [
    {
      name: 'Starter',
      price: '$0',
      period: '/month',
      description: 'Get started for free.',
      features: [
        { text: 'Basic feature', included: true },
        { text: 'Email support', included: false },
      ],
      cta: { text: 'Sign Up Free', url: '/signup' },
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      description: 'Everything you need.',
      features: [
        { text: 'All features', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom integrations', included: true },
      ],
      cta: { text: 'Get Started', url: '/signup' },
      recommended: true,
    },
  ],
};

export const SAMPLE_FAQ_MINIMAL: FaqData = {
  heading: 'Common Questions',
  items: [
    { question: 'How do I get started?', answer: 'Simply sign up for an account and follow the onboarding guide.' },
  ],
  // No eyebrow, no description, no categories, no contactCta
};

export const SAMPLE_SERVICES_MINIMAL: ServicesData = {
  heading: 'Our Service',
  services: [
    {
      icon: '🎯',
      heading: 'Web Design',
      description: 'Beautiful, responsive websites.',
    },
  ],
};

export const SAMPLE_FEATURES_MINIMAL: FeaturesData = {
  heading: 'Key Features',
  features: [
    { icon: '⚡', heading: 'Fast', description: 'Lightning quick performance.' },
    { icon: '🔒', heading: 'Secure', description: 'Enterprise-grade security.' },
  ],
};

export const SAMPLE_BENEFITS_MINIMAL: BenefitsData = {
  heading: 'Why Choose Us',
  benefits: [
    { icon: '📈', heading: 'Grow Faster', description: 'Scale your business quickly.', number: 1 },
  ],
};

export const SAMPLE_PROCESS_MINIMAL: ProcessData = {
  heading: 'How It Works',
  steps: [
    { number: 1, icon: '📞', heading: 'Contact', description: 'Reach out to discuss your project.' },
    { number: 2, icon: '🎨', heading: 'Design', description: 'We create your solution.' },
  ],
};

export const SAMPLE_PORTFOLIO_MINIMAL: PortfolioData = {
  heading: 'Our Work',
  projects: [
    { title: 'Project One', category: 'Design', image: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop', alt: 'Project' } },
    { title: 'Project Two', category: 'Development', image: { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', alt: 'Project' } },
  ],
};

// ── Large Datasets (Stress Test) ──────────────────────────────────────────────

export const SAMPLE_FAQ_LARGE: FaqData = {
  eyebrow: 'FAQ',
  heading: 'Frequently Asked Questions',
  description: 'Everything you need to know.',
  items: [...Array(20)].map((_, i) => ({
    question: `Question ${i + 1}: What about this really long question that might wrap to multiple lines in the UI?`,
    answer: `This is a detailed answer for question ${i + 1}. It contains multiple paragraphs of information to test how the component handles longer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    category: ['General', 'Pricing', 'Technical', 'Support'][i % 4],
  })),
  categories: ['General', 'Pricing', 'Technical', 'Support'],
};

export const SAMPLE_TESTIMONIALS_LARGE: TestimonialsData = {
  eyebrow: 'Reviews',
  heading: 'What Our Customers Say',
  description: 'Trusted by thousands of happy customers.',
  testimonials: [...Array(12)].map((_, i) => ({
    quote: 'This service has completely transformed how we work. The results exceeded all our expectations and I would highly recommend them to anyone.',
    name: `Customer ${i + 1}`,
    title: 'Business Owner',
    company: 'Acme Corp',
    rating: [4, 5, 5, 5, 5][i % 5],
    photo: `https://images.unsplash.com/photo-${['1494790108377-be9c29b29330', '1507003211169-0a1dd7228f2d', '1438761681033-6461ffad8d80', '1500648767791-00dcc994a43e', '1534528741775-53994a69daeb'][i % 5]}?w=100&h=100&fit=crop`,
  })),
  averageRating: 4.8,
  totalReviews: 1247,
  ratingBreakdown: [
    { stars: 5, percentage: 82 },
    { stars: 4, percentage: 12 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ],
};

export const SAMPLE_FEATURES_LARGE: FeaturesData = {
  eyebrow: 'Features',
  heading: 'Everything You Need',
  description: 'A comprehensive list of all our features.',
  features: [...Array(12)].map((_, i) => ({
    icon: ['⚡', '🔒', '📱', '♿', '🎨', '📈', '☁️', '🔔', '📊', '🤝', '🛡️', '🌍'][i],
    heading: ['Fast Performance', 'Secure', 'Mobile Ready', 'Accessible', 'Custom Design', 'Analytics', 'Cloud Sync', 'Notifications', 'Reports', 'Collaboration', 'Backup', 'Global CDN'][i],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feature description goes here.',
  })),
};

// ── Missing Optional Fields (Bare Bones) ───────────────────────────────────────

export const SAMPLE_CTA_BARE: CtaData = {
  heading: 'Get Started Today',
  description: 'Join thousands of satisfied customers.',
  primaryCta: { text: 'Sign Up', url: '/signup' },
  // No eyebrow, no secondaryCta, no image, no stats, no testimonial, no formFields, no countdown
};

export const SAMPLE_NEWSLETTER_BARE: NewsletterData = {
  heading: 'Subscribe to Our Newsletter',
  // No description, no incentive, no benefits, no trustText
  buttonText: 'Subscribe',
};

export const SAMPLE_TRUST_BAR_BARE: TrustBarData = {
  // Minimal trust bar with just stats
  stats: [
    { value: '10K+', label: 'Customers' },
    { value: '99%', label: 'Satisfaction' },
  ],
};

export const SAMPLE_PRICING_SINGLE: PricingData = {
  heading: 'Simple Pricing',
  tiers: [
    {
      name: 'Unlimited',
      price: '$99',
      period: '/month',
      description: 'Everything included. One simple price.',
      features: [
        { text: 'Unlimited projects', included: true },
        { text: 'Unlimited users', included: true },
        { text: '24/7 support', included: true },
        { text: 'All integrations', included: true },
      ],
      cta: { text: 'Get Started', url: '/signup' },
    },
  ],
};

export const SAMPLE_PROBLEM_SINGLE: ProblemData = {
  heading: 'Your Current Solution Is Slow',
  painPoints: [
    { heading: 'Slow Performance', description: 'Your current tools are holding you back.', icon: '🐌' },
  ],
};

export const SAMPLE_SOLUTION_SINGLE: SolutionData = {
  heading: 'We Make It Fast',
  description: 'Our solution is optimized for speed.',
  benefits: [
    { heading: 'Lightning Fast', description: 'Sub-second load times.', icon: '⚡' },
    { heading: 'Always Online', description: '99.99% uptime guaranteed.', icon: '✅' },
  ],
};
