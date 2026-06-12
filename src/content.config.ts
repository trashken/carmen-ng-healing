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
    // Carmen's Wix CSV/JSON export doesn't include a star rating, so we
    // default to 5. The rating field is rendered in the card; if you
    // want lower ratings for some entries, override in the .md file.
    rating: z.number().min(1).max(5).default(5),
    // Optional "updated" timestamp from the Wix export. Used as a
    // secondary sort key for the testimonials page; missing on entries
    // created via PagesCMS so we fall back to insertion order.
    updated: z.coerce.date().optional(),
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
    // Optional hero / tagline line shown on the service detail page below
    // the page H1. Empty for services that only have a card on the home.
    tagline_en: z.string().optional().default(''),
    tagline_jp: z.string().optional().default(''),
    tagline_zh: z.string().optional().default(''),
    // "What we do / Through the session / Recommended for" body blocks
    // (per locale). Each is a YAML literal block scalar rendered as
    // paragraphs. JP/ZH fall back to EN on the detail page if empty,
    // with a "translation in progress" notice.
    intro_en: z.string().optional().default(''),
    intro_jp: z.string().optional().default(''),
    intro_zh: z.string().optional().default(''),
    what_we_do_en: z.string().optional().default(''),
    what_we_do_jp: z.string().optional().default(''),
    what_we_do_zh: z.string().optional().default(''),
    through_session_en: z.string().optional().default(''),
    through_session_jp: z.string().optional().default(''),
    through_session_zh: z.string().optional().default(''),
    recommended_en: z.array(z.string()).optional().default([]),
    recommended_jp: z.array(z.string()).optional().default([]),
    recommended_zh: z.array(z.string()).optional().default([]),
    // Sub-offerings (each = its own card on the detail page, with
    // per-locale title / description / bullets / duration / price).
    // Optional + defaulting to [] so the 6 generic homepage-only
    // services don't need to be updated.
    offerings: z.array(z.object({
      title_en: z.string(),
      title_jp: z.string(),
      title_zh: z.string().optional().default(''),
      desc_en: z.string().optional().default(''),
      desc_jp: z.string().optional().default(''),
      desc_zh: z.string().optional().default(''),
      bullets_en: z.array(z.string()).optional().default([]),
      bullets_jp: z.array(z.string()).optional().default([]),
      bullets_zh: z.array(z.string()).optional().default([]),
      duration_en: z.string().optional().default(''),
      duration_jp: z.string().optional().default(''),
      duration_zh: z.string().optional().default(''),
      // Price per locale. Use 0 to hide the price (e.g. for "Contact
      // for quote" offerings). The currency code is set per-locale
      // below.
      price_en: z.number().int().nonnegative().optional().default(0),
      price_jp: z.number().int().nonnegative().optional().default(0),
      price_zh: z.number().int().nonnegative().optional().default(0),
      currency_en: z.string().optional().default('US$'),
      currency_jp: z.string().optional().default('¥'),
      currency_zh: z.string().optional().default('HK$'),
    })).optional().default([]),
  }),
});

export const collections = { blog, testimonials, services };
