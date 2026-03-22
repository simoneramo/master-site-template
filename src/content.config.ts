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
		templates: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			ctaText: z.string(),
			ctaLink: z.string(),
		}),
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
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
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
		}),
		thankYou: z.object({
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
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

const commonWebTerms = defineCollection({
	type: 'content',
	schema: z.object({
		hero: z.object({
			label: z.string(),
			heading: z.string(),
			description: z.string(),
		}),
		terms: z.array(z.object({
			icon: z.string(),
			term: z.string(),
			definition: z.string(),
		})),
		cta: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			buttonText: z.string(),
			buttonLink: z.string(),
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

		industryFocus: z.object({
			sectionLabel: z.string().optional(),
			heading: z.string(),
			description: z.string(),
			items: z.array(z.object({
				category: z.string(),
				industries: z.array(z.string()),
			})),
		}),
		cta: z.object({
			sectionLabel: z.string(),
			heading: z.string(),
			description: z.string(),
			primaryBtn: z.object({
				text: z.string(),
				link: z.string(),
			}),

		}),
	}),
});

const templates = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		category: z.union([z.string(), z.array(z.string())]),
		image: z.string(),
		link: z.string(),
		order: z.number().optional(),
		aboutText: z.string().optional(),
		features: z.array(z.string()).optional(),
		lastUpdated: z.string().optional(),
		format: z.string().optional(),
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
		}),
		cta: z.object({
			label: z.string().optional(),
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

const legalPages = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		lastUpdated: z.string(),
	}),
});

export const collections = {
	insights, homepage, about, contact, process, quote, templates, globals, templatesPage, components, offerings, processSteps, "common-web-terms": commonWebTerms,
	services,
	tech: techCollection,
	// 💡 Page config — controls which optional pages are live (isActive toggle)
	pages,
	// 💡 Optional collections - can be removed if not needed
	careers,
	events,
	partners,
	testimonials,
	work,
	bookPage,
	legalPages,
};
