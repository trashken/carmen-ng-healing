import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    slug: z.string(),
    title_en: z.string(),
    title_jp: z.string(),
    title_zh: z.string().optional().default(''),
    date: z.coerce.date(),
    category: z.enum(['article', 'news']),
    cover: z.string().optional(),
    video: z.string().optional(),
    body_en: z.string().optional().default(''),
    body_jp: z.string(),
    body_zh: z.string().optional().default(''),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    service: z.string(),
    lang: z.enum(['jp', 'en', 'zh']),
    rating: z.number().min(1).max(5),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title_en: z.string(),
    title_jp: z.string(),
    title_zh: z.string().optional().default(''),
    subtitle_en: z.string(),
    subtitle_jp: z.string(),
    subtitle_zh: z.string().optional().default(''),
    desc_en: z.string(),
    desc_jp: z.string(),
    desc_zh: z.string().optional().default(''),
    icon: z.string(),
    color: z.enum(['rose', 'lavender', 'sky', 'peach']),
    order: z.number().default(100),
  }),
});

export const collections = { blog, testimonials, services };
