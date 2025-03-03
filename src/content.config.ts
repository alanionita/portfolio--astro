import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		// Transform string to Date object
		pubDate: z.date(),
		updatedDate: z.date().optional()
	}),
});

export const collections = { blog };
