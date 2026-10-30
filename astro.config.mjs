// @ts-check
import { defineConfig } from 'astro/config';
import { EMSP_URL } from './src/data/links.ts';

// https://astro.build/config
export default defineConfig({
	site: 'https://realtimebasecamp.github.io',
	// Short link to the plugin docs. A static build writes this as a
	// meta-refresh page at /emsp/.
	redirects: {
		'/emsp': EMSP_URL,
	},
});
