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
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID === 'your_client_id_here' ? null : process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN === 'your_token_here' ? null : process.env.TINA_TOKEN,

  /*
  search: {
    tina: {
      indexerToken: process.env.TINA_TOKEN,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  */

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
            name: "templates",
            label: "Design Blueprints Section",
            description: "Showcase of available design blueprints",
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
                name: "ctaText",
                label: "CTA Button Text",
                description: "Description put in here",
                required: true,
              },
              {
                type: "string",
                name: "ctaLink",
                label: "CTA Button Link",
                description: "Description put in here",
                required: true,
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
        ],
      },

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
                name: "primaryBtn",
                label: "Primary Button",
                description: "Description put in here",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
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
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: insights
      {
        name: "insights",
        label: "Insights",
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
                type: "object",
                name: "primaryBtn",
                label: "Primary Button",
                description: "Description put in here",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Text",
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
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: design-blueprints-content
      {
        name: "templates",
        label: "Design Blueprints",
        path: "src/content/templates",
        format: "md",
        ui: {
          filename: {
            readonly: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            list: true,
            required: true,
            options: [
              "Accountants",
              "Architects",
              "Art Galleries",
              "Barbers",
              "Bars",
              "Beauty Salons",
              "Bistros",
              "Bookkeepers",
              "Boutiques",
              "Builders",
              "Building Inspectors",
              "Business Coaches",
              "Business Consultants",
              "Cafes",
              "Catering",
              "Chiropractors",
              "Civil Engineers",
              "Cleaners",
              "Commercial Printing",
              "Conveyancers",
              "Dental Clinics",
              "Dentists",
              "Detailers",
              "Dry Cleaners",
              "Electricians",
              "Event Planners",
              "Financial Advisors",
              "Financial Planners",
              "Florists",
              "Freight",
              "Garden Designers",
              "Gas Fitters",
              "General Building Contractors",
              "General Practitioners",
              "Gift Shops",
              "GPs",
              "Guttering",
              "Gyms",
              "Hair Salons",
              "Handyman",
              "Hotels",
              "HR Agencies",
              "HVAC Technicians",
              "Industrial Safety Equipment",
              "Insurance Brokers",
              "Interior Designers",
              "IT Support",
              "Landscapers",
              "Lawyers",
              "Locksmiths",
              "Logistics",
              "Manufacturers",
              "Marketing Agencies",
              "Mechanics",
              "Medical Centres",
              "Medical Specialists",
              "Migration Agents",
              "Naturopaths",
              "Nightclubs",
              "Optometrists",
              "Orthodontists",
              "Osteopaths",
              "Packaging",
              "Pest Control",
              "Pet Grooming",
              "Physiotherapists",
              "Plumbers",
              "Podiatrists",
              "Pool Maintenance",
              "PR Agencies",
              "Property Developers",
              "Psychologists",
              "Raw Materials",
              "Real Estate",
              "Recruiters",
              "Restaurants",
              "Roofers",
              "SaaS Providers",
              "Safety Equipment",
              "Security Installers",
              "Signage",
              "Solar Installers",
              "Solicitors",
              "Spas",
              "Surveyors",
              "Therapists",
              "Tour Operators",
              "Urban Planners",
              "Veterinary Clinics",
              "Vets",
              "Warehousing",
              "Wedding Venues",
              "Wholesalers",
              "Yoga Studios",
            ],
          },
          {
            type: "image",
            name: "image",
            label: "Template Image",
            required: true,
          },
          {
            type: "string",
            name: "link",
            label: "Preview Link",
            required: true,
          },
          {
            type: "string",
            name: "aboutText",
            label: "About Text",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "features",
            label: "Features List",
            description: "Description put in here",
            list: true,
          },
          {
            type: "string",
            name: "lastUpdated",
            label: "Last Updated",
            description: "e.g. 'December 2025'",
          },
          {
            type: "string",
            name: "format",
            label: "Format",
            description: "e.g. 'Astro / Tailwind CSS'",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            description: "Description put in here",
          },
        ],
      },
      // HIDDEN_BY_PROJECT_STARTER: get-a-quote
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
            ],
          },
        ],
      },
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
        ],
      },
      {
        name: "components",
        label: "Components",
        path: "src/content/components",
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
            name: "callouts",
            label: "Callout Sections",
            description: "Description put in here",
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
                name: "heading",
                label: "Heading",
                description: "Description put in here",
                required: true,
              },
              {
                type: "image",
                name: "image",
                label: "Image",
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
          {
            type: "object",
            name: "solutions",
            label: "Solutions Section",
            description: "Cards showing different solutions",
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
                label: "Solution Cards",
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
                    name: "features",
                    label: "Features",
                    description: "Description put in here",
                    list: true,
                    required: true,
                  },
                  {
                    type: "string",
                    name: "ctaText",
                    label: "CTA Text",
                    description: "Description put in here",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "ctaLink",
                    label: "CTA Link",
                    description: "Description put in here",
                    required: true,
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
        ],
      },

      // HIDDEN_BY_PROJECT_STARTER: services-detail
      {
        name: "offerings",
        label: "Services (Individual Pages)",
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
      // HIDDEN_BY_PROJECT_STARTER: process-detail
      {
        name: "processDetail",
        label: "Process Steps (Individual Pages)",
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

      // ============================================
      // 🔘 PAGE SETTINGS COLLECTION
      // Controls which optional pages are live on the site.
      // Editors flip "Active" in TinaCMS → page goes live instantly.
      // ============================================
      {
        name: "pages",
        label: "Page Settings",
        path: "src/content/pages",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "boolean",
            name: "isActive",
            label: "Active",
            description: "Enable this page on the live site. Toggle off to hide it (returns 404).",
          },
          {
            type: "string",
            name: "label",
            label: "Page Name",
            description: "Display name for this page (for reference only).",
          },
        ],
      },

      // ============================================
      // 💡 OPTIONAL COLLECTIONS
      // Project Starter comments/uncomments these based on page selection
      // To manually re-enable: Uncomment the collection block
      // ============================================

      // --- JOBS / CAREERS (Used by src/pages/careers/) ---
      // HIDDEN_BY_PROJECT_STARTER: careers
      {
        name: "jobs",
        label: "Jobs / Careers",
        path: "src/content/jobs",
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

      // --- EVENTS (Used by src/pages/events/) ---
      // HIDDEN_BY_PROJECT_STARTER: events
      {
        name: "events",
        label: "Events",
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

      // --- PARTNERS (Used by src/pages/partners/) ---
      // HIDDEN_BY_PROJECT_STARTER: partners
      {
        name: "partners",
        label: "Partners",
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

      // --- TESTIMONIALS (Used by src/pages/reviews/) ---
      // HIDDEN_BY_PROJECT_STARTER: reviews
      {
        name: "testimonials",
        label: "Testimonials / Reviews",
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
            ],
          },
          {
            type: "object",
            name: "posts",
            label: "Portfolio Projects",
            description: "Projects to display on the work page",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title || "New Project" };
              },
            },
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
            ],
          },
        ],
      },

    ],
  },
});
