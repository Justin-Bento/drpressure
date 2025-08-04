import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/posts' }),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

const Testimonials = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/testimonials' }),
  schema: () =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: z.string(),
      message: z.string(),
    }),
});

export const collections = {
  posts,
  Testimonials,
};
