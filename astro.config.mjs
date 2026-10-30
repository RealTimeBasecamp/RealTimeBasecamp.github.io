// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { EMSP_URL } from './src/data/links.ts';

// https://astro.build/config
export default defineConfig({
	site: 'https://realtimebasecamp.github.io',
	// /emsp/ is only a redirect, so it stays out of the sitemap. The plugin
	// docs publish their own.
	integrations: [sitemap({ filter: (page) => !page.includes('/emsp/') })],
	// Short link to the plugin docs. A static build writes this as a
	// meta-refresh page at /emsp/.
	redirects: {
		'/emsp': EMSP_URL,
	},
});
