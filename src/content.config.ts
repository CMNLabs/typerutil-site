import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per release in src/content/changelog, newest shown first.
const changelog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/changelog' }),
  schema: z.object({
    version: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { changelog };
