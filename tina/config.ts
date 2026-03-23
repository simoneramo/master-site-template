import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID === 'your_client_id_here' ? null : process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  // Get this from tina.io
  token: process.env.TINA_TOKEN === 'your_token_here' ? null : process.env.TINA_TOKEN || null,

  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN || process.env.TINA_TOKEN,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // Home
      {
        name: "homepage",
        label: "Homepage",
        path: "src/content/homepage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., 'Production ready V2.0')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
                description: "Description put in here",
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "trustBadge",
                label: "Trust Badge Text",
                description: "Description put in here",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "proofPoints",
            label: "Proof Points Section",
            description: "Logos or text proving social proof",
            fields: [
              {
                type: "object",
                name: "items",
                label: "Proof Points",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    description: "Description put in here",
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "problems",
            label: "Problems Section",
            description: "Highlighting customer pain points",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
                description: "Description put in here",
              },
              {
                type: "object",
                name: "items",
                label: "Problem Cards",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                    description: "Description put in here",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "features",
            label: "Features Section",
            description: "Key product features and benefits",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
                description: "Description put in here",
              },
              {
                type: "object",
                name: "items",
                label: "Feature Cards",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                    description: "Description put in here",
                  },
                ],
              },
            ],
          },

          {
            type: "object",
            name: "process",
            label: "Process Section",
            description: "How we work and steps involved",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
                description: "Description put in here",
              },
              {
                type: "object",
                name: "steps",
                label: "Process Steps",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                    description: "Description put in here",
                  },
                ],
              },
            ],
          },

          {
            type: "object",
            name: "testimonials",
            label: "Testimonials Section",
            description: "Customer reviews and ratings",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
                description: "Description put in here",
              },
              {
                type: "object",
                name: "items",
                label: "Testimonials",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "number",
                    name: "rating",
                    label: "Rating (1-5)",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "quote",
                    label: "Quote",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                    description: "Description put in here",
                  },
                  {
                    type: "string",
                    name: "authorName",
                    label: "Author Name",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "authorTitle",
                    label: "Author Title",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "image",
                    name: "authorImage",
                    label: "Author Image",
                    description: "Description put in here",
                    required: true,
                  },
                ],
              },
            ],
          },

          {
            type: "object",
            name: "comparison",
            label: "Comparison Table Section",
            description: "Feature comparison table",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
                description: "Description put in here",
              },
              {
                type: "string",
                name: "columnHeaders",
                label: "Column Headers",
                description: "Description put in here",
                list: true,
                required: true,
              },
              {
                type: "object",
                name: "rows",
                label: "Comparison Rows",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "feature",
                    label: "Feature",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subtitle",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "weMakeSmall",
                    label: "WeMakeSmall Value",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "webAgency",
                    label: "Web Agency Value",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "websiteBuilder",
                    label: "Website Builder Value",
                    description: "Description put in here",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ Section",
            description: "Frequently asked questions",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
                description: "Description put in here",
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Question",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Answer",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                    description: "Description put in here",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "workGrid",
            label: "Work Grid Section",
            description: "Portfolio/work projects showcase",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above the heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the work grid section",
                required: false,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text below the heading",
                required: false,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "ctaText",
                label: "CTA Text",
                description: "Text for the call-to-action link",
                required: false,
              },
              {
                type: "string",
                name: "ctaLink",
                label: "CTA Link",
                description: "URL for the call-to-action link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "contactForm",
            label: "Contact Form Section",
            description: "Contact form and relevant info",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above the heading (e.g., 'Contact us')",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the contact section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Primary description text",
                required: true,
              },
              {
                type: "string",
                name: "responseTime",
                label: "Response Time",
                description: "Text showing average response time (e.g., '< 2 hours')",
                required: true,
              },
              {
                type: "object",
                name: "nameField",
                label: "Name Field",
                description: "Description put in here",
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "placeholder",
                    label: "Placeholder",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "errorMessage",
                    label: "Error Message",
                    description: "Description put in here",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                name: "emailField",
                label: "Email Field",
                description: "Description put in here",
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "placeholder",
                    label: "Placeholder",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "errorMessage",
                    label: "Error Message",
                    description: "Description put in here",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                name: "messageField",
                label: "Message Field",
                description: "Description put in here",
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "placeholder",
                    label: "Placeholder",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "errorMessage",
                    label: "Error Message",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                name: "submitButton",
                label: "Submit Button",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Button Text",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "loadingText",
                    label: "Loading Text",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                name: "successMessage",
                label: "Success Message",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                  },
                ],
              },
              {
                type: "string",
                name: "privacyNote",
                label: "Privacy Note",
                description: "Small text below the form (e.g., 'We respect your inbox...')",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "thankYou",
            label: "Thankyou mesage on Thank You Page",
            description: "Thank you page content after form submission",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: process
      {
        name: "process",
        label: "Process Page",
        path: "src/content/process",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",

            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "steps",
            label: "Process Steps",
            description: "Step-by-step process breakdown",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
                ui: {
                  component: "textarea",
                },
              },

              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "object",
                name: "items",
                label: "Steps",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "listTitle",
                    label: "List Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "listItems",
                    label: "List Items",
                    list: true,
                    required: true,
                  },
                  {
                    type: "string",
                    name: "linkText",
                    label: "Link Text",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "linkUrl",
                    label: "Link URL",
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "difference",
            label: "What Makes Us Different",
            description: "Unique selling propositions",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
                ui: {
                  component: "textarea",
                },
              },

              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "object",
                name: "items",
                label: "Difference Items",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "linkText",
                    label: "Link Text",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "linkUrl",
                    label: "Link URL",
                    required: false,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ Section",
            description: "Frequently Asked Questions",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Question",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Answer",
                    description: "Description put in here",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to action section",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main CTA heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "CTA description text",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                description: "Text for the CTA button",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                description: "URL for the CTA button",
                required: false,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: process-detail
      {
        name: "processDetail",
        label: "Process Posts",
        path: "src/content/processSteps",
        format: "md",
        fields: [
          {
            type: "string",
            name: "icon",
            label: "Icon (Emoji)",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "number",
            name: "order",
            label: "Order",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "listTitle",
            label: "List Title",
          },
          {
            type: "string",
            name: "listItems",
            label: "List Items",
            list: true,
          },

        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: insightsPage
      // Insights Page (Index)
      {
        name: "insightsPage",
        label: "Insights Page",
        path: "src/content/insightsPage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., 'Latest insights')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the hero section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text for the hero section",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to Action section at the bottom of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: insights
      {
        name: "insights",
        label: "Insights Posts",
        path: "src/content/insights",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
            required: true,
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated Date",
            required: false,
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            required: false,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
            list: true,
            options: [
              "Accessibility",
              "Performance",
              "SEO",
              "Design Systems",
              "Headless CMS",
              "Astro",
              "Web Development",
              "UI/UX",
              "Case Studies",
              "Tutorials",
              "Business",
              "New Tag",
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: true,
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: services
      {
        name: "services",
        label: "Services Page",
        path: "src/content/services",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "mainServices",
            label: "Main Services",
            description: "Primary services offered",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "object",
                name: "items",
                label: "Service Items",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Features List",
                    list: true,
                    required: true,
                  },
                  {
                    type: "string",
                    name: "linkText",
                    label: "Link Text",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "linkUrl",
                    label: "Link URL",
                    required: true,
                  },
                ],
              },
            ],
          },


          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to action section",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },

            ],
          },
          {
            type: "object",
            name: "targetIndustries",
            label: "Target Industries",
            description: "Industries we serve section",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above heading (e.g., 'Target market')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text for the section",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "groups",
                label: "Industry Groups",
                description: "Groups of target industries",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "category",
                    label: "Category",
                    description: "Category name (e.g., 'The daily routine')",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    description: "Description of this category",
                    required: false,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "items",
                    label: "Industries",
                    description: "List of industries in this category",
                    list: true,
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ Section",
            description: "Frequently asked questions",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: false,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                description: "List of questions and answers",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Question",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Answer",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: services-detail
      {
        name: "offerings",
        label: "Services Posts",
        path: "src/content/offerings",
        format: "md",
        fields: [
          {
            type: "string",
            name: "icon",
            label: "Icon (Emoji)",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "features",
            label: "Features List",
            list: true,
          },
        ],
      },
      // ============================================
      // 💡 OPTIONAL COLLECTIONS
      // Project Starter comments/uncomments these based on page selection
      // To manually re-enable: Uncomment the collection block
      // ============================================

      // HIDDEN_BY_PROJECT_STARTER: careers/jobs Page
      // --- JOBS / CAREERS (Used by src/pages/careers/) ---
      // Jobs / Careers Page
      {
        name: "careersPage",
        label: "Jobs Page",
        path: "src/content/careersPage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., 'Join our team')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the hero section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text for the hero section",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "values",
            label: "Values / Why Join Us",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above heading (e.g., 'Our Values')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the section",
                required: false,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text below the heading",
                required: false,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "items",
                label: "Company Values",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "generalApplication",
            label: "General Application",
            description: "Section for people who don't see a fitting open role",
            fields: [
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to Action section at the bottom of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: careers/jobs Posts
      {
        name: "careers",
        label: "Jobs Posts",
        path: "src/content/careers",
        format: "md",
        fields: [
          {
            type: "boolean",
            name: "isActive",
            label: "Active",
            description: "Show this job on the careers page",
          },
          {
            type: "string",
            name: "title",
            label: "Job Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "department",
            label: "Department",
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Job Type",
            options: ["Full-time", "Part-time", "Contract", "Remote"],
            required: true,
          },
          {
            type: "string",
            name: "salary",
            label: "Salary Range",
          },
          {
            type: "string",
            name: "description",
            label: "Job Description",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "string",
            name: "requirements",
            label: "Requirements",
            list: true,
            required: true,
          },
          {
            type: "string",
            name: "responsibilities",
            label: "Responsibilities",
            list: true,
            required: true,
          },
          {
            type: "string",
            name: "benefits",
            label: "Benefits",
            list: true,
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },

      // HIDDEN_BY_PROJECT_STARTER: eventsPage
      // --- EVENTS (Used by src/pages/events/) ---
      // Events Page
      {
        name: "eventsPage",
        label: "Events Page",
        path: "src/content/eventsPage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., 'Upcoming events')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the hero section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text for the hero section",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "featuredEvent",
            label: "Featured Event",
            description: "Highlighted featured event section",
            fields: [
              {
                type: "string",
                name: "badge",
                label: "Badge Text",
                description: "e.g. 'Featured Event'",
                required: false,
              },
              {
                type: "string",
                name: "title",
                label: "Event Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "date",
                label: "Date",
                required: false,
              },
              {
                type: "string",
                name: "time",
                label: "Time",
                required: false,
              },
              {
                type: "string",
                name: "location",
                label: "Location",
                required: false,
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
              {
                type: "string",
                name: "emoji",
                label: "Emoji Icon",
                description: "Emoji to display in the image area",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to Action section at the bottom of the page",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: Events Posts
      {
        name: "events",
        label: "Events Posts",
        path: "src/content/events",
        format: "md",
        fields: [
          {
            type: "boolean",
            name: "isActive",
            label: "Active",
            description: "Show this event on the events page",
          },
          {
            type: "string",
            name: "title",
            label: "Event Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "eventType",
            label: "Event Type",
            options: ["Webinar", "Workshop", "Networking", "Conference", "Meetup"],
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Event Date",
            required: true,
          },
          {
            type: "string",
            name: "time",
            label: "Time",
            required: true,
          },
          {
            type: "string",
            name: "duration",
            label: "Duration",
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "boolean",
            name: "isVirtual",
            label: "Virtual Event",
          },
          {
            type: "string",
            name: "registrationLink",
            label: "Registration Link",
          },
          {
            type: "boolean",
            name: "isUpcoming",
            label: "Upcoming",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // HIDDEN_BY_PROJECT_STARTER: book
      // --- BOOKING (Used by src/pages/book/) ---
      // Booking Page
      {
        name: "bookPage",
        label: "Book Page",
        path: "src/content/bookPage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "bookingOptions",
            label: "Booking Options",
            description: "Available booking/meeting types",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icon (Emoji)",
                required: true,
              },
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "duration",
                label: "Duration",
                description: "e.g. '15 minutes', '45 minutes'",
                required: true,
              },
              {
                type: "boolean",
                name: "isPopular",
                label: "Popular Badge",
                description: "Show 'Popular' badge on this option",
              },
            ],
          },
          {
            type: "object",
            name: "calendarEmbed",
            label: "Calendar Embed Placeholder",
            description: "Calendar section configuration",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "e.g. 'Select a Date & Time'",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "placeholderIcon",
                label: "Placeholder Icon (Emoji)",
                required: false,
              },
              {
                type: "string",
                name: "placeholderTitle",
                label: "Placeholder Title",
                description: "e.g. 'Calendar Integration'",
                required: false,
              },
              {
                type: "string",
                name: "placeholderText",
                label: "Placeholder Text",
                description: "Instructions for replacing the placeholder",
                required: false,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "alternativeLabel",
                label: "Alternative Label",
                description: "e.g. 'Prefer to book another way?'",
                required: false,
              },
              {
                type: "object",
                name: "alternativeMethods",
                label: "Alternative Booking Methods",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Button Label",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Link",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to Action section at the bottom of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
        ],
      },

      // HIDDEN_BY_PROJECT_STARTER: partnersPage
      // --- PARTNERS (Used by src/pages/partners/) ---
      // Partners Page
      {
        name: "partnersPage",
        label: "Partners Page",
        path: "src/content/partnersPage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., 'Our partners')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the hero section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text for the hero section",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to Action section at the bottom of the page",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: Partners Posts
      {
        name: "partners",
        label: "Partners Posts",
        path: "src/content/partners",
        format: "md",
        fields: [
          {
            type: "boolean",
            name: "isActive",
            label: "Active",
            description: "Show this partner on the partners page",
          },
          {
            type: "string",
            name: "name",
            label: "Partner Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Cloud", "Software", "Service", "Enterprise", "Integration"],
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "string",
            name: "website",
            label: "Website URL",
            required: true,
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
          {
            type: "boolean",
            name: "isFeatured",
            label: "Featured Partner",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },

      // HIDDEN_BY_PROJECT_STARTER: reviewsPage
      // --- TESTIMONIALS (Used by src/pages/reviews/) ---
      // Testimonials / Reviews Page
      {
        name: "reviewsPage",
        label: "Reviews Page",
        path: "src/content/reviewsPage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., 'What our clients say')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the hero section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text for the hero section",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to Action section at the bottom of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: Reviews Posts
      {
        name: "testimonials",
        label: "Reviews Posts",
        path: "src/content/testimonials",
        format: "md",
        fields: [
          {
            type: "boolean",
            name: "isActive",
            label: "Active",
            description: "Show this testimonial on the reviews page",
          },
          {
            type: "string",
            name: "authorName",
            label: "Author Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "authorTitle",
            label: "Author Title",
            required: true,
          },
          {
            type: "string",
            name: "authorCompany",
            label: "Company",
          },
          {
            type: "image",
            name: "authorImage",
            label: "Author Photo",
          },
          {
            type: "number",
            name: "rating",
            label: "Rating (1-5)",
            required: true,
          },
          {
            type: "string",
            name: "quote",
            label: "Testimonial Quote",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "boolean",
            name: "isFeatured",
            label: "Featured",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
        ],
      },
      // --- PORTFOLIO / WORK (Used by src/pages/work/) ---
      // HIDDEN_BY_PROJECT_STARTER: work
      {
        name: "work",
        label: "Work Page",
        path: "src/content/work",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., 'Portfolio')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the hero section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text for the hero section",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "workGrid",
            label: "Work Grid Section",
            description: "Portfolio/work projects showcase",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above the heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the work grid section",
                required: false,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text below the heading",
                required: false,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "ctaText",
                label: "CTA Text",
                description: "Text for the call-to-action link",
                required: false,
              },
              {
                type: "string",
                name: "ctaLink",
                label: "CTA Link",
                description: "URL for the call-to-action link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to Action section at the bottom of the page",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: workPosts
      // Work Posts (Portfolio Projects)
      {
        name: "workPosts",
        label: "Work Posts",
        path: "src/content/workPosts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "slug",
            label: "Slug",
            description: "URL-friendly identifier (e.g., 'website-redesign')",
            required: true,
          },
          {
            type: "boolean",
            name: "isActive",
            label: "Active",
            description: "Show this project on the work page",
          },
          {
            type: "string",
            name: "title",
            label: "Project Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "client",
            label: "Client Name",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
          },
          {
            type: "string",
            name: "industry",
            label: "Industry",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" },
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Project Image",
          },
          {
            type: "string",
            name: "link",
            label: "Project Link",
          },
          {
            type: "boolean",
            name: "isFeatured",
            label: "Featured Project",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: pricing
      // Pricing Page
      {
        name: "pricingPage",
        label: "Pricing Page",
        path: "src/content/pricingPage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Header",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., 'Investment')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the hero section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text for the hero section",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "pricingTiers",
            label: "Pricing Tiers",
            description: "Pricing cards section",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: false,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: false,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "footerNote",
                label: "Footer Note",
                description: "Note shown below pricing cards",
                required: false,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "ctaText",
                label: "CTA Text",
                description: "Call to action text below pricing",
                required: false,
              },
              {
                type: "string",
                name: "ctaLink",
                label: "CTA Link",
                required: false,
              },
              {
                type: "object",
                name: "tiers",
                label: "Pricing Tiers",
                description: "List of pricing cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Tier Name",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "price",
                    label: "Price",
                    description: "e.g. '$500*' or 'Starting at $600'",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "priceLabel",
                    label: "Price Label",
                    description: "e.g. 'Starting at'",
                    required: false,
                  },
                  {
                    type: "boolean",
                    name: "isPopular",
                    label: "Popular Badge",
                    description: "Show 'Popular' badge on this tier",
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "buttonLink",
                    label: "Button Link",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "learnMoreLink",
                    label: "Learn More Link",
                    required: false,
                  },
                  {
                    type: "object",
                    name: "features",
                    label: "Features",
                    description: "List of features for this tier",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "label",
                        label: "Label",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "value",
                        label: "Value",
                        required: true,
                      },
                      {
                        type: "boolean",
                        name: "included",
                        label: "Included",
                        description: "Checkmark (true) or X (false)",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "features",
            label: "Additional Info Section",
            description: "Standard features section",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "items",
                label: "Feature Cards",
                description: "List of feature cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to action section at the bottom",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: faq
      // FAQ Page
      {
        name: "faqPage",
        label: "FAQ Page",
        path: "src/content/faqPage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., 'Common questions')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the hero section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text for the hero section",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to Action section at the bottom of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: team
      // Team Page
      {
        name: "teamPage",
        label: "Team Page",
        path: "src/content/teamPage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., 'The people behind the work')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for the hero section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text for the hero section",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "values",
            label: "Team Values Section",
            description: "Company values and beliefs section",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above heading (e.g., 'How we work')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for values section",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text for values section",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "items",
                label: "Value Cards",
                description: "List of company values",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "Call to Action",
            description: "Call to action section at the bottom",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Small text above heading",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "teamMembers",
            label: "Team Members",
            description: "Team members to display",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Name",
                required: true,
              },
              {
                type: "string",
                name: "role",
                label: "Role",
                required: true,
              },
              {
                type: "string",
                name: "bio",
                label: "Bio",
                description: "Short biography",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "emoji",
                label: "Emoji",
                description: "Emoji icon for this team member",
                required: false,
              },
              {
                type: "string",
                name: "initials",
                label: "Initials",
                description: "Initials displayed in avatar",
                required: true,
              },
              {
                type: "string",
                name: "colorClass",
                label: "Avatar Color Class",
                description: "Tailwind classes for avatar background/text color",
                required: true,
              },
              {
                type: "string",
                name: "linkedin",
                label: "LinkedIn URL",
                required: false,
              },
            ],
          },
        ],
      },
      // 404 Page
      {
        name: "notFoundPage",
        label: "404 Page",
        path: "src/content/notFoundPage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section for 404 page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., '404')",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for 404 page",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description text",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                description: "Text for the home button",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                description: "URL for the home button",
                required: true,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: quote
      {
        name: "quote",
        label: "Quote Page",
        path: "src/content/quote",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "thankYou",
            label: "Thank You Message",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
        ],
      },
      // About Page
      {
        name: "about",
        label: "About Page",
        path: "src/content/about",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Small text above heading (e.g., 'ABOUT US')",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },

          {
            type: "object",
            name: "values",
            label: "Values Section",
            description: "Company values and beliefs",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "What we believe",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "items",
                label: "Value Cards",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    description: "Description put in here",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "linkText",
                    label: "Link Text",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "linkUrl",
                    label: "Link URL",
                    required: false,
                  },
                ],
              },


            ],
          },
          {
            type: "object",
            name: "story",
            label: "Story Section",
            description: "The company story and history",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "object",
                name: "items",
                label: "Story Description",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    description: "Description put in here",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },

          {
            type: "object",
            name: "faq",
            label: "FAQ Section",
            description: "Frequently asked questions",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Question",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Answer",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Call to action section",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                description: "Description put in here",
                required: true,
              },
            ],
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: landing-page
      {
        name: "landingPage",
        label: "Landing Page",
        path: "src/content/landingPage",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
              {
                type: "string",
                name: "trustBadge",
                label: "Trust Badge",
                description: "Optional trust indicator text below CTA",
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: true,
              },
            ],
          },
        ],
      },
      // Globals
      {
        name: "globals",
        label: "Globals",
        path: "src/content/globals",
        format: "md",
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
        },
        templates: [
          {
            name: "footer",
            label: "Footer",
            fields: [
              {
                type: "object",
                name: "socials",
                label: "Social Media Links",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "platform",
                    label: "Platform",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (SVG Code)",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                    description: "Description put in here",
                  },
                  {
                    type: "boolean",
                    name: "visible",
                    label: "Visible",
                    description: "Description put in here",
                  },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.platform };
                  },
                },
              },
              {
                type: "object",
                name: "columns",
                label: "Footer Link Columns",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "heading",
                    label: "Column Heading",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "object",
                    name: "links",
                    label: "Links",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "label",
                        label: "Label",
                        description: "Description put in here",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "URL",
                        description: "Description put in here",
                        required: true,
                      },
                    ],
                  },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.heading };
                  },
                },
              },
              {
                type: "string",
                name: "copyright",
                label: "Copyright Text",
                description: "Description put in here",
              },
              {
                type: "object",
                name: "legalLinks",
                label: "Bottom Legal Links",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL",
                    description: "Description put in here",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            name: "reviews",
            label: "Google Reviews",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "number",
                name: "averageRating",
                label: "Average Rating",
                description: "e.g. 5.0",
                required: true,
              },
              {
                type: "number",
                name: "totalReviews",
                label: "Total Reviews Count",
                description: "e.g. 48",
                required: true,
              },
              {
                type: "object",
                name: "items",
                label: "Review Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "author",
                    label: "Author Name",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "date",
                    label: "Date",
                    description: "e.g. '2 days ago' or '1 week ago'",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "avatar",
                    label: "Avatar URL",
                    description: "URL to the user avatar image",
                  },
                  {
                    type: "number",
                    name: "rating",
                    label: "Rating (Stars)",
                    description: "Number of stars (1-5)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "content",
                    label: "Review Content",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
                ui: {
                  itemProps: (item) => {
                    return { label: item?.author };
                  },
                },
              },
            ],
          },
          {
            name: "serviceAreas",
            label: "Service Areas",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "mapSrc",
                label: "Google Maps Embed URL",
                description: "The src attribute from the Google Maps embed code",
                required: true,
              },
              {
                type: "string",
                name: "suburbs",
                label: "Suburbs List",
                description: "Description put in here",
                list: true,
                required: true,
              },
            ],
          },
          {
            name: "callouts",
            label: "Callout Sections",
            fields: [
              {
                type: "object",
                name: "items",
                label: "Callout Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                    required: true,
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Image",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "buttonLink",
                    label: "Button Link",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            name: "solutions",
            label: "Solutions Section",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "items",
                label: "Solution Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Features",
                    list: true,
                    required: true,
                  },
                  {
                    type: "string",
                    name: "ctaText",
                    label: "CTA Text",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "ctaLink",
                    label: "CTA Link",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            name: "testimonials",
            label: "Testimonials Section",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "items",
                label: "Testimonials",
                list: true,
                fields: [
                  {
                    type: "number",
                    name: "rating",
                    label: "Rating (1-5)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "quote",
                    label: "Quote",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "authorName",
                    label: "Author Name",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "authorTitle",
                    label: "Author Title",
                    required: true,
                  },
                  {
                    type: "image",
                    name: "authorImage",
                    label: "Author Image",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      // Contact Page
      {
        name: "contact",
        label: "Contact Page",
        path: "src/content/contact",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            description: "Main hero section at the top of the page",

            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                required: false,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                required: false,
              },
            ],
          },
          {
            type: "object",
            name: "form",
            label: "Form Section",
            description: "Contact form and instructions",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "otherWays",
            label: "Other Ways to Connect",
            description: "Alternative contact methods",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
              },
              {
                type: "object",
                name: "items",
                label: "Connection Items",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon (Emoji)",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Title",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "email",
                    label: "Email",
                    description: "Description put in here",
                    required: true,
                  },

                ],
              },
            ],
          },


          {
            type: "object",
            name: "serviceAreas",
            label: "Map & Service Areas",
            description: "Map and list of suburbs served",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Description put in here",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "mapSrc",
                label: "Google Maps Embed URL",
                description: "Description put in here",
              },
              {
                type: "string",
                name: "suburbs",
                label: "Suburbs",
                description: "Description put in here",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ Section",
            description: "Frequently asked questions",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                required: true,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Description put in here",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "items",
                label: "FAQ Items",
                description: "Description put in here",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Question",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Answer",
                    description: "Description put in here",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "thankyou",
            label: "Contact Form Thankyou Message",
            description: "Thank you page content after form submission",
            fields: [
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Section lanbel for thank you page",
                required: false,
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main heading for thank you page",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "Thank you message text",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                description: "Text for the return home button",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                description: "URL for the return button",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Section",
            description: "Bottom call-to-action section",
            fields: [
              {
                type: "string",
                name: "variant",
                label: "Layout Variant",
                description: "Choose the layout style for the CTA section",
                options: [
                  { label: "Center", value: "center" },
                  { label: "Left", value: "left" },
                ],
                required: true,
              },
              {
                type: "string",
                name: "sectionLabel",
                label: "Section Label",
                description: "Label above the heading",
              },
              {
                type: "string",
                name: "heading",
                label: "Heading",
                description: "Main CTA heading",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                description: "CTA description text",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
                description: "Text for the CTA button",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Button Link",
                description: "URL for the CTA button",
                required: true,
              },
            ],
          },
        ],
      },
      // Legal Pages
      {
        name: "legalPages",
        label: "Legal Pages",
        path: "src/content/legalPages",
        format: "md",
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "lastUpdated",
            label: "Last Updated",
            description: "E.g. 19th January 2026",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body content",
            isBody: true,
          },
        ],
      },
      // FLEXIBLE PAGE WITH EXISTING BLOCKS
      {
        name: "flexiblePage",
        label: "Flexible Pages",
        path: "src/content/flexiblePages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "blocks",
            label: "Page Blocks",
            list: true,
            templates: [
              {
                name: "hero",
                label: "Hero Section",
                fields: [
                  {
                    type: "string",
                    name: "variant",
                    label: "Layout Variant",
                    options: [
                      { label: "Center", value: "center" },
                      { label: "Left", value: "left" },
                    ],
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                    description: "Small text above heading",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                    required: false,
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "buttonLink",
                    label: "Button Link",
                    required: false,
                  },
                ],
              },
              {
                name: "features",
                label: "Features / Card Grid",
                fields: [
                  {
                    type: "string",
                    name: "variant",
                    label: "Layout Variant",
                    options: [
                      { label: "Center", value: "center" },
                      { label: "Left", value: "left" },
                    ],
                  },
                  {
                    type: "number",
                    name: "columns",
                    label: "Columns",
                    description: "Number of columns (2, 3, or 4)",
                  },
                  {
                    type: "string",
                    name: "sectionLabel",
                    label: "Section Label",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                    required: false,
                  },
                  {
                    type: "object",
                    name: "items",
                    label: "Feature Items",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "icon",
                        label: "Icon (Emoji)",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                        required: true,
                      },
                      {
                        type: "string",
                        name: "description",
                        label: "Description",
                        ui: { component: "textarea" },
                        required: true,
                      },
                      {
                        type: "string",
                        name: "linkText",
                        label: "Link Text",
                        required: false,
                      },
                      {
                        type: "string",
                        name: "linkUrl",
                        label: "Link URL",
                        required: false,
                      },
                    ],
                  },
                  {
                    type: "string",
                    name: "ctaText",
                    label: "CTA Text",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "ctaLink",
                    label: "CTA Link",
                    required: false,
                  },
                ],
              },
              {
                name: "cta",
                label: "Call to Action",
                fields: [
                  {
                    type: "string",
                    name: "variant",
                    label: "Layout Variant",
                    options: [
                      { label: "Center", value: "center" },
                      { label: "Left", value: "left" },
                    ],
                  },
                  {
                    type: "string",
                    name: "sectionLabel",
                    label: "Section Label",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "heading",
                    label: "Heading",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" },
                    required: false,
                  },
                  {
                    type: "string",
                    name: "buttonText",
                    label: "Button Text",
                    required: false,
                  },
                  {
                    type: "string",
                    name: "buttonLink",
                    label: "Button Link",
                    required: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
