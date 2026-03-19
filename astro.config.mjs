// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	// ⚠️ Set this to your production domain before deploying.
	// Required for sitemap generation and canonical URLs.
	// Example: site: "https://yourdomain.com.au"
	// site: "https://yourdomain.com.au",
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
		ssr: {
			external: ['tinacms', '@tinacms/cli'],
		},
	},
	output: 'server',
	adapter: vercel(),
});