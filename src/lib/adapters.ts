/**
 * CMS → Component Adapter Layer
 * 
 * Transform CMS data (from content.config.ts schemas) into Component Library data types.
 * This allows production pages to use the new component library without rewriting
 * existing markdown content.
 */

import type {
  HeroData,
  TestimonialsData,
  FaqData,
  FeaturesData,
  ProblemData,
  ProcessData,
  BenefitsData,
  CtaData,
  SolutionData,
  FooterData,
  ServicesData,
  PricingData,
  TrustBarData,
  NewsletterData,
} from '../data/sample-data';

// ═══════════════════════════════════════════════════════════════════════════════
// Homepage Section Adapters
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Transform CMS homepage hero → HeroData
 * CMS: { label, heading, description, buttonText, buttonLink, trustBadge }
 */
export function adaptHero(cms: any): HeroData {
  return {
    eyebrow: cms.label,
    heading: cms.heading,
    description: cms.description,
    primaryCta: {
      text: cms.buttonText || 'Get Started',
      url: cms.buttonLink || '/contact',
    },
    // Optional fields CMS doesn't have
    headingAccent: undefined,
    secondaryCta: undefined,
    image: undefined,
    trustBadge: cms.trustBadge ? {
      icon: '⭐',
      title: cms.trustBadge,
      subtitle: '',
    } : undefined,
  };
}

/**
 * Transform CMS proofPoints → TrustBarData (stats/badges)
 * CMS: { items: [{ text, icon? }] }
 */
export function adaptProofPoints(cms: any): TrustBarData {
  return {
    badges: cms.items?.map((item: any) => ({
      icon: item.icon || '✓',
      text: item.text,
    })),
  };
}

/**
 * Transform CMS problems → ProblemData
 * CMS: { sectionLabel, heading, description, items: [{ title, icon, description }] }
 */
export function adaptProblems(cms: any): ProblemData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    painPoints: cms.items?.map((item: any) => ({
      icon: item.icon,
      heading: item.title,
      description: item.description,
    })) || [],
    image: undefined,
  };
}

/**
 * Transform CMS features → FeaturesData
 * CMS: { sectionLabel, heading, description, items: [{ title, icon, description }] }
 */
export function adaptFeatures(cms: any): FeaturesData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    features: cms.items?.map((item: any) => ({
      icon: item.icon,
      heading: item.title,
      description: item.description,
    })) || [],
    image: undefined,
    tabs: undefined,
  };
}

/**
 * Transform CMS process → ProcessData
 * CMS: { sectionLabel, heading, description, ctaText?, ctaLink?, steps: [{ title, icon, description }] }
 */
export function adaptProcess(cms: any): ProcessData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    steps: cms.steps?.map((step: any, index: number) => ({
      number: index + 1,
      icon: step.icon,
      heading: step.title,
      description: step.description,
    })) || [],
  };
}

/**
 * Transform CMS testimonials → TestimonialsData
 * CMS: { sectionLabel, heading, description, items: [{ rating, quote, authorName, authorTitle, authorImage }] }
 */
export function adaptTestimonials(cms: any): TestimonialsData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    testimonials: cms.items?.map((item: any) => ({
      quote: item.quote,
      name: item.authorName,
      title: item.authorTitle,
      photo: item.authorImage,
      rating: item.rating,
    })) || [],
    averageRating: undefined,
    totalReviews: undefined,
    ratingBreakdown: undefined,
  };
}

/**
 * Transform CMS comparison → BenefitsData (vs comparison table)
 * CMS: { sectionLabel, heading, description, columnHeaders, rows: [{ feature, subtitle, weMakeSmall, webAgency, websiteBuilder }] }
 */
export function adaptComparison(cms: any): BenefitsData {
  // Extract "our" column and competitors from the comparison rows
  const ourColumn = cms.columnHeaders?.[0] || 'We Make Small';
  
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    benefits: cms.rows?.map((row: any, index: number) => ({
      icon: '✓',
      heading: row.feature,
      description: row.subtitle,
      number: index + 1,
    })) || [],
    image: undefined,
  };
}

/**
 * Transform CMS FAQ → FaqData
 * CMS: { sectionLabel, heading, description, items: [{ question, answer }] }
 */
export function adaptFaq(cms: any): FaqData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    items: cms.items?.map((item: any) => ({
      question: item.question,
      answer: item.answer,
    })) || [],
    categories: undefined,
    contactCta: undefined,
  };
}

/**
 * Transform CMS contactForm → CtaData (form CTA section)
 * CMS: { sectionLabel, heading, description, responseTime, ...formFields }
 */
export function adaptContactForm(cms: any): CtaData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    primaryCta: {
      text: cms.submitButton?.text || 'Send Message',
      url: '#contact',
    },
    stats: cms.responseTime ? [{ value: cms.responseTime, label: 'Response Time' }] : undefined,
    formFields: [
      { label: cms.nameField?.label || 'Name', type: 'text', placeholder: cms.nameField?.placeholder || 'Your name' },
      { label: cms.emailField?.label || 'Email', type: 'email', placeholder: cms.emailField?.placeholder || 'you@example.com' },
      { label: cms.messageField?.label || 'Message', type: 'textarea', placeholder: cms.messageField?.placeholder || 'Your message...' },
    ],
    trustBadges: cms.privacyNote ? [{ icon: '🔒', text: cms.privacyNote }] : undefined,
  };
}

/**
 * Transform CMS thankYou → CtaData (simple CTA)
 */
export function adaptThankYou(cms: any): CtaData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    primaryCta: cms.buttonText ? {
      text: cms.buttonText,
      url: cms.buttonLink || '/',
    } : undefined,
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// Globals Adapters
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Transform globals → FooterData
 * CMS: { socials, columns, copyright, legalLinks }
 */
export function adaptFooter(globals: any): FooterData {
  return {
    logo: '', // CMS doesn't have footer logo, would come from site config
    tagline: '',
    columns: globals.columns?.map((col: any) => ({
      heading: col.heading,
      links: col.links?.map((link: any) => ({
        label: link.label,
        url: link.url,
      })) || [],
    })) || [],
    socials: globals.socials?.map((social: any) => ({
      platform: social.platform,
      url: social.url,
      icon: social.icon,
    })) || [],
    copyright: globals.copyright || '',
    legalLinks: globals.legalLinks?.map((link: any) => ({
      label: link.label,
      url: link.url,
    })) || [],
  };
}

/**
 * Transform globals (with reviews/solutions items) → SolutionData
 * CMS globals.items when used for solutions: [{ title, icon, features, ctaText, ctaLink }]
 */
export function adaptGlobalsSolutions(globals: any): SolutionData {
  return {
    eyebrow: globals.sectionLabel,
    heading: globals.heading || 'Our Solutions',
    description: globals.description || '',
    benefits: globals.items?.map((item: any) => ({
      icon: item.icon,
      heading: item.title,
      description: item.features?.join(', ') || '',
    })) || [],
    image: undefined,
    primaryCta: undefined,
  };
}

/**
 * Transform globals testimonials → TestimonialsData
 */
export function adaptGlobalsTestimonials(globals: any): TestimonialsData {
  return {
    eyebrow: globals.sectionLabel,
    heading: globals.heading || 'What Our Clients Say',
    description: globals.description,
    testimonials: globals.items?.map((item: any) => ({
      quote: item.quote,
      name: item.authorName,
      title: item.authorTitle,
      photo: item.authorImage,
      rating: item.rating,
    })) || [],
    averageRating: globals.averageRating,
    totalReviews: globals.totalReviews,
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// Services Page Adapters
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Transform services.mainServices → ServicesData
 * CMS: { sectionLabel, heading, description, items: [{ icon, title, description, features, linkText, linkUrl }] }
 */
export function adaptServices(cms: any): ServicesData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    services: cms.items?.map((item: any) => ({
      icon: item.icon,
      heading: item.title,
      description: item.description,
      link: item.linkText ? {
        text: item.linkText,
        url: item.linkUrl,
      } : undefined,
    })) || [],
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// Pricing Page Adapters
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Transform pricingPage.pricingTiers → PricingData
 * CMS: { sectionLabel, heading, description, footerNote, ctaText, ctaLink, tiers: [{ name, description, price, priceLabel, isPopular, buttonText, buttonLink, learnMoreLink, features: [{ label, value, included }] }] }
 */
export function adaptPricing(cms: any): PricingData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    tiers: cms.tiers?.map((tier: any) => ({
      name: tier.name,
      price: tier.price,
      period: tier.priceLabel || '/month',
      description: tier.description,
      features: tier.features?.map((f: any) => ({
        text: f.label,
        included: f.included,
      })) || [],
      cta: {
        text: tier.buttonText,
        url: tier.buttonLink,
      },
      recommended: tier.isPopular,
    })) || [],
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// Components Collection Adapters
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Transform components.solutions → SolutionData
 * CMS: { sectionLabel, heading, description, items: [{ title, icon, features, ctaText, ctaLink }] }
 */
export function adaptComponentSolutions(cms: any): SolutionData {
  return {
    eyebrow: cms.sectionLabel,
    heading: cms.heading,
    description: cms.description,
    benefits: cms.items?.map((item: any) => ({
      icon: item.icon,
      heading: item.title,
      description: item.features?.join(', ') || '',
    })) || [],
    image: undefined,
    primaryCta: cms.items?.[0]?.ctaText ? {
      text: cms.items[0].ctaText,
      url: cms.items[0].ctaLink,
    } : undefined,
  };
}

/**
 * Transform components.testimonials → TestimonialsData
 */
export function adaptComponentTestimonials(cms: any): TestimonialsData {
  return adaptTestimonials(cms);
}

/**
 * Transform components.callouts → ServicesData or FeaturesData
 * CMS callouts: [{ label, heading, image, description, buttonText, buttonLink }]
 */
export function adaptCallouts(cms: any[]): ServicesData {
  return {
    heading: 'Featured',
    services: cms.map((item: any) => ({
      icon: '',
      heading: item.heading,
      description: item.description,
      image: item.image ? { src: item.image, alt: item.heading } : undefined,
      link: item.buttonText ? {
        text: item.buttonText,
        url: item.buttonLink,
      } : undefined,
    })),
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// Newsletter Adapter
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Transform CMS newsletter data → NewsletterData
 */
export function adaptNewsletter(cms: any): NewsletterData {
  return {
    heading: cms.heading,
    description: cms.description,
    incentive: cms.incentive,
    benefits: cms.benefits,
    trustText: cms.trustText,
    buttonText: cms.buttonText,
  };
}
