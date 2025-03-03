// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://alanionita.github.io',
	base: 'portfolio--astro',
	integrations: [sitemap()],
	trailingSlash: "always",
	compressHTML: false
});
