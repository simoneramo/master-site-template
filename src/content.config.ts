import { defineCollection, z } from 'astro:content';

// Config definitions
const homepage = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
			trustBadge: z.string().optional(),
		}),
		proofPoints: z.object({
			items: z.array(z.object({
				text: z.string(),
				icon: z.string().optional(),
			})),
		}),
		problems: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				title: z.string(),
				icon: z.string(),
				description: z.string(),
			})),
		}),
		features: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				title: z.string(),
				icon: z.string(),
				description: z.string(),
			})),
		}),
		process: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			ctaText: z.string().optional(),
			ctaLink: z.string().optional(),
			steps: z.array(z.object({
				title: z.string(),
				icon: z.string(),
				description: z.string(),
			})),
		}),
		testimonials: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				rating: z.number(),
				quote: z.string(),
				authorName: z.string(),
				authorTitle: z.string(),
				authorImage: z.string(),
			})),
		}),
		comparison: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			columnHeaders: z.array(z.string()),
			rows: z.array(z.object({
				feature: z.string(),
				subtitle: z.string(),
				weMakeSmall: z.string(),
				webAgency: z.string(),
				websiteBuilder: z.string(),
			})),
		}),
		workGrid: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			ctaText: z.string(),
			ctaLink: z.string(),
		}).optional(),
		faq: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				question: z.string(),
				answer: z.string(),
			})),
		}),
		contactForm: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			responseTime: z.string(),
			nameField: z.object({
				label: z.string(),
				placeholder: z.string(),
				errorMessage: z.string(),
			}),
			emailField: z.object({
				label: z.string(),
				placeholder: z.string(),
				errorMessage: z.string(),
			}),
			messageField: z.object({
				label: z.string(),
				placeholder: z.string(),
				errorMessage: z.string(),
			}),
			submitButton: z.object({
				text: z.string(),
				loadingText: z.string(),
			}),
			successMessage: z.object({
				title: z.string(),
				description: z.string(),
			}),
			privacyNote: z.string(),
		}),
		thankYou: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}).optional(),
	}),
});

const about = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}),
		mission: z.object({
			sectionLabel: z.string().optional(),
			label: z.string(),
			heading: z.string(),
			description: z.string(),
		}),
		values: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
				linkText: z.string().optional(),
				linkUrl: z.string().optional(),
			})),
		}),
		story: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			items: z.array(z.object({
				description: z.string(),
			})),
		}),

		cta: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		}),
		faq: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				question: z.string(),
				answer: z.string(),
			})),
		}).optional(),
	}),
});

const contact = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}),
		form: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string().optional(),
			description: z.string().optional(),
		}).optional(),
		otherWays: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
				email: z.string(),
			})),
		}),
		serviceAreas: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string().optional(),
			description: z.string().optional(),
			mapSrc: z.string().optional(),
			suburbs: z.array(z.string()).optional(),
		}).optional(),

		faq: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				question: z.string(),
				answer: z.string(),
			})),
		}),
		thankyou: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		}).optional(),
		cta: z.object({
			variant: z.enum(["center", "left"]).optional(),
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		}).optional(),
	}),
});

const process = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}),
		steps: z.object({
			sectionLabel: z.string().optional(),
			description: z.string().optional(),
			heading: z.string(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
				listTitle: z.string(),
				listItems: z.array(z.string()),
				linkText: z.string().optional(),
				linkUrl: z.string().optional(),
			})),
		}),
		difference: z.object({
			sectionLabel: z.string().optional(),
			description: z.string().optional(),
			heading: z.string(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
				linkText: z.string().optional(),
				linkUrl: z.string().optional(),
			})),
		}),
		faq: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				question: z.string(),
				answer: z.string(),
			})),
		}).optional(),
		cta: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		}),
	}),
});

const quote = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}),
		thankYou: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}).optional(),
	}),
});

const templatesPage = defineCollection({
	type: "content",
	schema: z.object({
		hero: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}),
		cta: z.object({
			heading: z.string(),
			description: z.string(),
			primaryBtn: z.object({
				text: z.string(),
				link: z.string(),
			}),

		}),
	}),
});

const insights = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

const services = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}),
		mainServices: z.object({
			sectionLabel: z.string().optional(),
			description: z.string().optional(),
			heading: z.string(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
				features: z.array(z.string()),
				linkText: z.string(),
				linkUrl: z.string(),
			})),
		}),

		targetIndustries: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			groups: z.array(z.object({
				category: z.string(),
				description: z.string().optional(),
				items: z.array(z.string()),
			})),
		}),
		cta: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		}),
		faq: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string().optional(),
			items: z.array(z.object({
				question: z.string(),
				answer: z.string(),
			})),
		}).optional(),
	}),
});

const globals = defineCollection({
	type: 'content',
	schema: z.object({
		// TinaCMS Template field
		_template: z.string().optional(),

		// Footer fields
		socials: z.array(z.object({
			platform: z.string(),
			url: z.string(),
			icon: z.string(),
			visible: z.boolean().optional(),
		})).optional(),
		columns: z.array(z.object({
			heading: z.string(),
			description: z.string().optional(),
			links: z.array(z.object({
				label: z.string(),
				url: z.string(),
			})),
		})).optional(),
		copyright: z.string().optional(),
		legalLinks: z.array(z.object({
			label: z.string(),
			url: z.string(),
		})).optional(),

		// Shared section fields (reviews, solutions, testimonials, serviceAreas)
		sectionLabel: z.string().optional(),
		heading: z.string().optional(),
		description: z.string().optional(),
		averageRating: z.number().optional(),
		totalReviews: z.number().optional(),
		// Flexible items: accepts any shape (reviews, callouts, solutions, testimonials)
		items: z.array(z.record(z.any())).optional(),

		// Service Areas fields
		mapSrc: z.string().optional(),
		suburbs: z.array(z.string()).optional(),

	}),
});

const offerings = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		icon: z.string().optional(),
		features: z.array(z.string()).optional(),
		cta: z.object({
			text: z.string(),
			link: z.string(),
		}).optional(),
	}),
});

const processSteps = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		order: z.number().optional(),
		description: z.string(),
		icon: z.string().optional(),
		listTitle: z.string().optional(),
		listItems: z.array(z.string()).optional(),
		cta: z.object({
			text: z.string(),
			link: z.string(),
		}).optional(),
	}),
});

const components = defineCollection({
	type: 'content',
	schema: z.object({
		callouts: z.array(z.object({
			label: z.string(),
			heading: z.string(),
			image: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		})),
		solutions: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				title: z.string(),
				icon: z.string(),
				features: z.array(z.string()),
				ctaText: z.string(),
				ctaLink: z.string(),
			})),
		}),
		testimonials: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				rating: z.number(),
				quote: z.string(),
				authorName: z.string(),
				authorTitle: z.string(),
				authorImage: z.string(),
			})),
		}).optional(),
	}),
});

const techCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		icon: z.string(),
		order: z.number(),
		description: z.string(),
		cta: z.object({
			text: z.string().optional(),
			link: z.string().optional(),
		}).optional(),
	}),
});

// 💡 PAGE CONFIG - Controls which optional pages are live
// Each file in src/content/pages/ maps to an optional page route.
// Set isActive: false to disable the page (returns 404).
// Set isActive: true to enable it — no code changes needed.
const pages = defineCollection({
	type: 'content',
	schema: z.object({
		isActive: z.boolean().default(true).describe('Enable or disable this page on the live site'),
		label: z.string().optional(),
	}),
});

// 💡 OPTIONAL COLLECTIONS - Set isActive: false to hide items

const careers = defineCollection({
	type: 'content',
	schema: z.object({
		isActive: z.boolean().default(true).describe('Show this job on the careers page'),
		title: z.string(),
		department: z.string(),
		location: z.string(),
		type: z.enum(['Full-time', 'Part-time', 'Contract', 'Remote']),
		salary: z.string().optional(),
		description: z.string(),
		requirements: z.array(z.string()),
		responsibilities: z.array(z.string()),
		benefits: z.array(z.string()).optional(),
		order: z.number().default(0),
	}),
});

const events = defineCollection({
	type: 'content',
	schema: z.object({
		isActive: z.boolean().default(true).describe('Show this event on the events page'),
		title: z.string(),
		eventType: z.enum(['Webinar', 'Workshop', 'Networking', 'Conference', 'Meetup']),
		date: z.coerce.date(),
		time: z.string(),
		duration: z.string(),
		location: z.string(),
		description: z.string(),
		isVirtual: z.boolean().default(false),
		registrationLink: z.string().optional(),
		isUpcoming: z.boolean().default(true),
		order: z.number().default(0),
	}),
});

const partners = defineCollection({
	type: 'content',
	schema: z.object({
		isActive: z.boolean().default(true).describe('Show this partner on the partners page'),
		name: z.string(),
		category: z.enum(['Cloud', 'Software', 'Service', 'Enterprise', 'Integration']),
		description: z.string(),
		website: z.string(),
		logo: z.string().optional(),
		isFeatured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

const testimonials = defineCollection({
	type: 'content',
	schema: z.object({
		isActive: z.boolean().default(true).describe('Show this testimonial on the reviews page'),
		authorName: z.string(),
		authorTitle: z.string(),
		authorCompany: z.string().optional(),
		authorImage: z.string().optional(),
		rating: z.number().min(1).max(5),
		quote: z.string(),
		isFeatured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

const bookPage = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}),
		cta: z.object({
			label: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		}).optional(),
	}),
});

const work = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}),
		workGrid: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			ctaText: z.string(),
			ctaLink: z.string(),
		}).optional(),
		cta: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		}).optional(),
		posts: z.array(z.object({
			slug: z.string(),
			isActive: z.boolean().default(true).describe('Show this project on the work page'),
			title: z.string(),
			client: z.string().optional(),
			category: z.string(),
			industry: z.string().optional(),
			description: z.string(),
			image: z.string().optional(),
			link: z.string().optional(),
			isFeatured: z.boolean().default(false),
			order: z.number().default(0),
		})).default([]),
	}),
});

const workPosts = defineCollection({
	type: 'content',
	schema: z.object({
		slug: z.string().optional(),
		isActive: z.boolean().default(true),
		title: z.string(),
		client: z.string().optional(),
		category: z.string(),
		industry: z.string().optional(),
		description: z.string(),
		image: z.string().optional(),
		link: z.string().optional(),
		isFeatured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

const pricingPage = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}),
		pricingTiers: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string().optional(),
			description: z.string().optional(),
			footerNote: z.string().optional(),
			ctaText: z.string().optional(),
			ctaLink: z.string().optional(),
			tiers: z.array(z.object({
				name: z.string(),
				description: z.string(),
				price: z.string(),
				priceLabel: z.string().optional(),
				isPopular: z.boolean().default(false),
				buttonText: z.string(),
				buttonLink: z.string(),
				learnMoreLink: z.string().optional(),
				features: z.array(z.object({
					label: z.string(),
					value: z.string(),
					included: z.boolean(),
				})),
			})),
		}),
		features: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
			})),
		}),
		cta: z.object({
			label: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		}).optional(),
	}),
});

const careersPage = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string().optional(),
			buttonLink: z.string().optional(),
		}),
		values: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string().optional(),
			description: z.string().optional(),
			items: z.array(z.object({
				icon: z.string(),
				title: z.string(),
				description: z.string(),
			})),
		}),
		generalApplication: z.object({
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		}).optional(),
		cta: z.object({
			label: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
		}).optional(),
	}),
});

const legalPages = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		lastUpdated: z.string(),
	}),
});

const flexiblePages = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		blocks: z.array(z.discriminatedUnion('_template', [
			z.object({
				_template: z.literal('hero'),
				variant: z.enum(['center', 'left']).optional(),
				label: z.string().optional(),
				heading: z.string(),
				description: z.string(),
				buttonText: z.string().optional(),
				buttonLink: z.string().optional(),
			}),
			z.object({
				_template: z.literal('features'),
				variant: z.enum(['center', 'left']).optional(),
				columns: z.number().optional(),
				sectionLabel: z.string().optional(),
				heading: z.string().optional(),
				description: z.string().optional(),
				items: z.array(z.object({
					icon: z.string(),
					title: z.string(),
					description: z.string(),
					linkText: z.string().optional(),
					linkUrl: z.string().optional(),
				})).optional(),
				ctaText: z.string().optional(),
				ctaLink: z.string().optional(),
			}),
			z.object({
				_template: z.literal('cta'),
				variant: z.enum(['center', 'left']).optional(),
				sectionLabel: z.string().optional(),
				heading: z.string().optional(),
				description: z.string().optional(),
				buttonText: z.string().optional(),
				buttonLink: z.string().optional(),
			}),
		])).optional(),
	}),
});

export const collections = {
	insights, homepage, about, contact, process, quote, globals, components, offerings, processSteps, services, tech: techCollection,
	// 💡 Page config — controls which optional pages are live (isActive toggle)
	pages,
	// 💡 Optional collections - can be removed if not needed
	careers,
	careersPage,
	events,
	partners,
	pricingPage,
	testimonials,
	work,
	workPosts,
	bookPage,
	legalPages,
	flexiblePages,
};
