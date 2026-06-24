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
    title: z.object({
      en: z.string(),
      jp: z.string(),
      zh: z.string().optional().default(''),
    }),
    subtitle: z
      .object({
        en: z.string(),
        jp: z.string(),
        zh: z.string().optional().default(''),
      })
      .optional(),
    desc: z.object({
      en: z.string(),
      jp: z.string(),
      zh: z.string().optional().default(''),
    }),
    icon: z.string(),
    // Optional watercolor illustration path under /uploads/ (or any
    // public path). Replaces the icon glyph on the homepage services
    // tile when set. Editors pick this from PagesCMS like the `icon`
    // field.
    image: z.string().optional().default(''),
    color: z.enum(['rose', 'lavender', 'sky', 'peach']),
    order: z.number().default(100),
    // Optional hero / tagline line shown on the service detail page below
    // the page H1. Empty for services that only have a card on the home.
    tagline: z.object({
      en: z.string().optional().default(''),
      jp: z.string().optional().default(''),
      zh: z.string().optional().default(''),
    }).optional(),
    // "What we do / Through the session / Recommended for / Intro" body
    // blocks (per locale). Each is a YAML literal block scalar rendered
    // as paragraphs. JP/ZH fall back to EN on the detail page if empty,
    // with a "translation in progress" notice.
    intro: z.object({
      en: z.string().optional().default(''),
      jp: z.string().optional().default(''),
      zh: z.string().optional().default(''),
    }).optional(),
    // Long-form service body (per locale, Markdown). Replaces the
    // previous split into what_we_do / through_session / recommended.
    // Carmen writes her own section headings (## etc.) and formatting
    // here. JP/ZH fall back to EN on the detail page if empty.
    serviceBody: z.object({
      en: z.string().optional().default(''),
      jp: z.string().optional().default(''),
      zh: z.string().optional().default(''),
    }).optional(),
    // Sub-offerings (each = its own card on the detail page, with
    // per-locale title / description / bullets / duration / price).
    // Optional + defaulting to [] so the 6 generic homepage-only
    // services don't need to be updated.
    offerings: z.array(z.object({
      title: z.object({
        en: z.string(),
        jp: z.string(),
        zh: z.string().optional().default(''),
      }),
      desc: z.object({
        en: z.string().optional().default(''),
        jp: z.string().optional().default(''),
        zh: z.string().optional().default(''),
      }).optional(),
      bullets: z.object({
        en: z.array(z.string()).optional().default([]),
        jp: z.array(z.string()).optional().default([]),
        zh: z.array(z.string()).optional().default([]),
      }).optional(),
      duration: z.object({
        en: z.string().optional().default(''),
        jp: z.string().optional().default(''),
        zh: z.string().optional().default(''),
      }).optional(),
      // Price per locale. Use 0 to hide the price (e.g. for "Contact
      // for quote" offerings). The currency code is set per-locale
      // below.
      price: z.object({
        en: z.number().int().nonnegative().optional().default(0),
        jp: z.number().int().nonnegative().optional().default(0),
        zh: z.number().int().nonnegative().optional().default(0),
      }).optional(),
      currency: z.object({
        en: z.string().optional().default('US$'),
        jp: z.string().optional().default('¥'),
        zh: z.string().optional().default('HK$'),
      }).optional(),
    })).optional().default([]),
  }),
});

// Events / workshops shown on the Blog page's "Events" tab. Each event
// has a per-locale title, a single date, an optional location, a per-
// locale short summary used on the listing card, and a per-locale
// Markdown body used on the (optional) detail page.
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    slug: z.string(),
    title: z.object({
      en: z.string(),
      jp: z.string(),
      zh: z.string().optional().default(''),
    }),
    // Event date. The listing page sorts by this; past events are
    // still listed but shown after upcoming ones, with a "past" label.
    date: z.coerce.date(),
    // Optional end date (for multi-day events). If omitted the event
    // is treated as a single-day event on `date`.
    endDate: z.coerce.date().optional(),
    // Optional start time in 24h HH:mm format (e.g. "19:00"). Rendered
    // on the events page + home info tab alongside the date.
    startTime: z.string().optional().default(''),
    // Optional end time in 24h HH:mm format (e.g. "21:00"). When set,
    // shown as "start – end" on the events page.
    endTime: z.string().optional().default(''),
    // Free-form location string ("Online via Zoom", "Hong Kong", etc.).
    location: z.string().optional().default(''),
    // Short summary used on the listing card (per locale, body kept on
    // the detail page).
    summary_en: z.string().optional().default(''),
    summary_jp: z.string().optional().default(''),
    summary_zh: z.string().optional().default(''),
    // Long-form Markdown body (per locale, falls back like other
    // per-locale fields). Stored as YAML literal block scalar.
    body_en: z.string().optional().default(''),
    body_jp: z.string().optional().default(''),
    body_zh: z.string().optional().default(''),
    // Cover image path under /uploads/.
    cover: z.string().optional(),
    // Optional registration / external link.
    registrationUrl: z.string().optional(),
  }),
});

// Single-entry collection. The homepage hero. Fetched with
// `getEntry('hero', 'main')`. Editors edit it from PagesCMS. Per-
// locale text fields let editors override the i18n defaults.
const hero = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hero' }),
  schema: z.object({
    // Per-locale hero copy. EN is required; JP and ZH fall back to EN
    // on the page when empty.
    welcome: z.string().optional().default(''),
    title: z.object({
      en: z.string(),
      jp: z.string().optional().default(''),
      zh: z.string().optional().default(''),
    }),
    title_kana: z.string().optional().default(''),
    tagline: z.string().optional().default(''),
    description: z.string().optional().default(''),
    // CTA labels (Button text).
    cta_primary: z.string().optional().default(''),
    cta_secondary: z.string().optional().default(''),
  }),
});

// Frequently asked questions shown on the homepage in the "Q & A"
// section. Each FAQ has a per-locale question + answer (Markdown body).
// Editors add/remove/reorder entries via PagesCMS.
const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    // Per-locale question. EN is required (canonical); JP and ZH fall
    // back to EN when empty on the page.
    question: z.object({
      en: z.string(),
      jp: z.string().optional().default(''),
      zh: z.string().optional().default(''),
    }),
    // Per-locale answer (Markdown body). Same fallback rules.
    answer: z.object({
      en: z.string(),
      jp: z.string().optional().default(''),
      zh: z.string().optional().default(''),
    }),
    // Display order. Lower numbers appear first.
    order: z.number().default(100),
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
    // per-locale name + a list of items. Also accepts a free-form
    // string during early editing (PagesCMS users may type a
    // placeholder); we coerce strings to [] and let the about page
    // skip rendering.
    certifications: z.union([
      z.array(z.object({
        school_en: z.string(),
        school_jp: z.string(),
        school_zh: z.string().optional().default(''),
        items_en: z.array(z.string()),
        items_jp: z.array(z.string()),
        items_zh: z.array(z.string()).optional().default([]),
      })),
      z.string().transform(() => []),
    ]).optional().default([]),
    // Languages Carmen works in (per-locale line, shown as a small
    // "I also work in..." footnote under the body).
    languages_en: z.string().optional().default(''),
    languages_jp: z.string().optional().default(''),
    languages_zh: z.string().optional().default(''),
  }),
});

export const collections = { blog, testimonials, services, events, faqs, hero, about };
