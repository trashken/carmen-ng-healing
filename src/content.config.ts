import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    slug: z.string(),
    title: z.object({
      en: z.string(),
      jp: z.string(),
      zh: z.string().optional().default(''),
    }),
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
    // Wix UUID, kept for stable cross-referencing. Some entries (added via
    // PagesCMS) may not have one; fall back to ''.
    id: z.string().optional().default(''),
    // Post title (e.g. "Break Free from Mental Blocks" or "改善睡眠及膝頭痛").
    title: z.string(),
    service: z.string(),
    lang: z.enum(['jp', 'en', 'zh']),
    // Carmen's Wix CSV/JSON export doesn't include a star rating, so we
    // default to 5. The rating field is rendered in the card; if you
    // want lower ratings for some entries, override in the .md file.
    rating: z.number().min(1).max(5).default(5),
    // Wix "created" timestamp (ISO 8601 string in the export, coerced to Date).
    created: z.coerce.date().optional(),
    // Wix "updated" timestamp. Used as the primary sort key on the
    // testimonials page; missing on entries created via PagesCMS so we
    // fall back to insertion order.
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

// Single-entry collection. There is only one About Me page. Fetch it
// with `getEntry('about', 'main')`. Body content is a per-locale text
// block (YAML literal block scalar) + a list of certification schools
// (each with a per-locale name + per-locale list of items).
const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    title_en: z.string(),
    title_jp: z.string(),
    title_zh: z.string().optional().default(''),
    body_en: z.string(),
    body_jp: z.string(),
    body_zh: z.string().optional().default(''),
    // Two images used in the about hero: portrait (left) + hands (right).
    portrait: z.string(),
    hands: z.string(),
    // Sign-off line shown at the end of the body ("Love Light, Carmen"
    // on Wix — but in Carmen's voice, optional).
    signoff_en: z.string().optional().default(''),
    signoff_jp: z.string().optional().default(''),
    signoff_zh: z.string().optional().default(''),
    // Training & certifications. Each school is one section with a
    // per-locale name + a list of items.
    certifications: z.array(z.object({
      school_en: z.string(),
      school_jp: z.string(),
      school_zh: z.string().optional().default(''),
      items_en: z.array(z.string()),
      items_jp: z.array(z.string()),
      items_zh: z.array(z.string()).optional().default([]),
    })).optional().default([]),
    // Languages Carmen works in (per-locale line, shown as a small
    // "I also work in..." footnote under the body).
    languages_en: z.string().optional().default(''),
    languages_jp: z.string().optional().default(''),
    languages_zh: z.string().optional().default(''),
  }),
});

export const collections = { blog, testimonials, services, about };
