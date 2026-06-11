# AGENTS.md

Astro 6 + Tailwind CSS 4 marketing site for Carmen Ng Healing (holistic healing practitioner). Deployed at `https://carmennghealing.com` (set in `astro.config.mjs:7`).

## Commands

All commands run from repo root.

- `npm install` — install dependencies
- `npm run dev` — start dev server at `http://localhost:4321`
- `npm run build` — build production site to `./dist/`
- `npm run preview` — preview production build locally
- `npm run astro -- --help` — Astro CLI help
- `npx astro check` — type-check `.astro` files (run on demand)

Node engine: `>=22.12.0` (`package.json:6`). Use Node 22+.

## Layout

```
src/
  layouts/Layout.astro    # shared shell; takes locale prop, reads from src/i18n
  pages/
    index.astro           # English home (default locale; same as /en/)
    en/index.astro        # localized home (rendered via HomeContent component)
    jp/index.astro        # localized home
    zh/index.astro        # localized home
    contact.astro         # English-only (not localized)
    testimonials.astro    # English-only; reads from src/content/testimonials/
    en/blog/              # /en/blog and /en/blog/[slug]
    jp/blog/              # /jp/blog and /jp/blog/[slug]
    zh/blog/              # /zh/blog and /zh/blog/[slug]
  i18n/                   # one dictionary per locale + index.ts helpers
    en.ts  jp.ts  zh.ts  index.ts
  content.config.ts       # Astro content collection schema (blog + testimonials + services)
  content/
    blog/                 # 11 .md files, one per blog post
    testimonials/         # 94 .md files, one per testimonial (imported from Wix export)
    services/             # 6 .md files, one per service offering
  components/
    HomeContent.astro     # EN homepage body: breathable, 3-up grids, large
                          # hero, generous padding. Used by /, /en/.
    HomeContentEast.astro # JP+ZH shared homepage body: hybrid density
                          # (breathable hero, dense article lists), 4-up
                          # grids, smaller fonts, tight spacing. Used by
                          # /jp/, /zh/. Edit the JP/ZH homepage here.
  styles/global.css       # Tailwind import + @theme tokens + component classes
public/
  assets/logo.png         # torii mark in the nav (AI-generated per Carmen)
  uploads/                # 10 cover images re-hosted from Wix CDN, by slug
  videos/kwanon-canon.mp4 # Kwanon & Canon post cover (downloaded from Wix)
  favicon.ico  favicon.svg
staging/
  uploads/                # 127 unverified media files — DO NOT serve
  posts/                  # raw Wix HTML dumps used during migration
.pages.yml                # PagesCMS configuration (blog + testimonials collections + media)
astro.config.mjs          # site URL + tailwindcss vite plugin
tsconfig.json             # extends astro/tsconfigs/strict
```

## i18n

- 3 locales: `en` (default), `jp` (Japanese), `zh` (Traditional Chinese). `src/i18n/index.ts` exports `locales`, `defaultLocale`, `getDictionary(locale)`, `isLocale(value)`.
- `Layout.astro` accepts `locale?: Locale` prop (defaults to `'en'`).
- Localized pages must pass `locale=` to Layout AND prefix internal links: `/${locale}/blog`, `/${locale}/blog/${slug}`.
- The `/testimonials` and `/contact` routes stay English-only and unprefixed — don't add a locale prop to them.
- The header switcher in `Layout.astro` is path-aware (smart routing): it reads `Astro.url.pathname`, strips the current locale prefix, then prepends the target locale's prefix. So `/jp/blog/ghibli-paper-fortune` → "EN" link → `/en/blog/ghibli-paper-fortune`. For unlocalized routes (`/testimonials`, `/contact`), the switcher falls back to the target locale's home (`/jp`, `/zh`, or `/`). The helper function is `localePathFor(target, currentPath)` in `Layout.astro:18-37`.
- **Adding a locale:** add `src/i18n/<code>.ts` exporting a dictionary matching the `Dictionary` type from `src/i18n/en.ts`, register it in `src/i18n/index.ts` `dictionaries` and add to the `locales` array, then duplicate the three files in `src/pages/{locale}/blog/` with paths updated.

## Blog content

- Blog posts live as Markdown files in `src/content/blog/`, one per post, with YAML frontmatter.
- **Schema** (defined in `src/content.config.ts`): `slug`, `title_en`, `title_jp`, `title_zh` (string), `date` (date — must be `z.coerce.date()` because frontmatter stores it as a string), `category` (enum: `article` | `news`), `cover` (optional string path under `/uploads/`), `video` (optional string path under `/videos/`), `body_en` / `body_jp` / `body_zh` (text — JP required, EN and ZH optional, fall back to JP if empty).
- JP body is always present. EN is present for ~6 of 11 posts (the bilingual ones on Wix). **ZH is empty for all 11** — Carmen will provide these.
- Each post page renders the locale-appropriate body with `whitespace-pre-line` to preserve paragraph breaks from the YAML literal block scalar (`|`).
- The "Website Brush Up" and "Rainbow bridging the Worlds" posts are categorized as `news`; the rest are `article`. The category controls the small uppercase tag on listing/post pages.
- Adding a post: create a new `.md` file in `src/content/blog/`. The `[slug].astro` pages use `getStaticPaths` over the collection, so any new post gets pages in all 3 locales automatically.
- To add a post in PagesCMS: open the connected repo at app.pagescms.org, click "Blog posts" → "New entry", fill the form, save. The file lands in `src/content/blog/<slug>.md` and the build picks it up.
- **PagesCMS YAML quoting rule:** when adding new PagesCMS field labels or descriptions, quote any value containing `&`, `*`, `|`, `>`, `%`, `@`, `\``, `{`, `}`, `[`, `]`, or a leading `/`/`-`/`?`. Bare-string arrays on a `select` field are NOT valid — must be `- value: x, label: Y` objects.

## Testimonials content

- One Markdown file per testimonial in `src/content/testimonials/`. 94 entries, filenames are slugified titles (Unicode-preserving, so Japanese names like `改善睡眠及膝頭痛.md` are valid).
- **Schema** (in `src/content.config.ts`): `name` (extracted from the `~ Name` signature in the body), `service` (string), `lang` (enum: `jp` | `en` | `zh`), `rating` (number 1-5, defaults to 5).
- **The testimonial text lives in the Markdown body**, not in frontmatter. The Astro page renders it via `<Content />` from `astro:content`'s `render()`.
- **PagesCMS schema mismatch (intentional):** the `.pages.yml` config has a `text` frontmatter field for testimonials, but the Astro side reads the text from the Markdown body instead. PagesCMS will write to the `text` field if used, but the page will display the Markdown body content. To make this fully roundtrip with PagesCMS, move `text` to the Markdown body in the `.pages.yml` schema too (use the rich-text type, not text, and it'll write to the body section). This is documented here for future cleanup.
- **The `/testimonials` page is single-page with 94 cards** (no pagination). If the page becomes too long to scroll, add basic pagination to `testimonials.astro`.

## Services content

- One Markdown file per service in `src/content/services/{slug}.md`. Currently 6 services (energy-healing, sound-therapy, meditation-guidance, spiritual-coaching, chakra-alignment, workshops).
- **Schema** (in `src/content.config.ts`): `title_en` / `title_jp` / `title_zh` (per-locale title), `subtitle_*` (same), `desc_*` (per-locale description), `icon` (single emoji/symbol char), `color` (enum: `rose` | `lavender` | `sky` | `peach`), `order` (number, lower = first).
- **The EN and East homepages share this one collection** but display different fields per locale (EN shows EN fields; JP shows JP fields; ZH shows ZH fields or falls back to JP).
- **Color map fix:** the `color` field is mapped to Tailwind classes via a `colorClasses` const in `HomeContent.astro:14-19` and `HomeContentEast.astro:21-25`. If you add a new color, update the map in both components AND the `z.enum(...)` in `content.config.ts` AND the `color` select field in `.pages.yml` — three places, on purpose.

## Styling

- Tailwind 4 is wired via the Vite plugin (`@tailwindcss/vite` in `astro.config.mjs:9`), not PostCSS. Config is CSS-based using `@theme {}` in `src/styles/global.css:3`.
- Custom design tokens are defined in `@theme` (colors: `blush`, `rose`, `lavender`, `sky`, `peach`, `cream`, `ink`, `warm-white`; fonts: `font-serif` = Playfair Display, `font-sans` = Inter). Use these tokens — do not introduce a `tailwind.config.*` file.
- Reusable component classes live in `@layer components` in `global.css`: `btn-primary`, `btn-outline`, `section-title`, `section-subtitle`, `card`, `watercolor-blob`. Prefer these over ad-hoc Tailwind classes.
- Fonts are loaded from Google Fonts via `<link>` in `Layout.astro:20-22` — no self-hosting.
- **Tailwind v4 gotcha:** dynamic class names constructed at runtime (e.g. `bg-${color}/10` in `src/pages/index.astro:121`) will not be detected by Tailwind's scanner. The set of colors used this way is currently: `rose`, `lavender`, `sky`, `peach`. If you add a new dynamic color, expect styles to be silently missing.

## Conventions

- All pages wrap their content in `<Layout title="..." description="..." locale="...">` from `src/layouts/Layout.astro`. The layout appends ` | ${siteName}` to the title and falls back to a default description per locale. Layout.astro is shared across all locales; the locale-specific homepage density is handled in `HomeContent.astro` (EN) vs `HomeContentEast.astro` (JP/ZH), picked by each locale's `index.astro`.
- The logo (`public/assets/logo.png`) is shown in the nav on all pages via `Layout.astro`.
- The medical disclaimer ("Carmen is not a licensed physician...") is rendered in the footer of every page, in the active locale. Update the matching `src/i18n/*.ts` file if it changes.
- Post pages render a `<video>` player at the top when `post.data.video` is set (currently only `kwanon-canon`). The video file lives at `public/videos/<file>` and is referenced as `/videos/<file>`.
- `src/components/` contains `HomeContent.astro` (the shared homepage body used by all 4 homepage routes). The nav and footer are inlined in `Layout.astro` (keep them in sync across pages).
- **Astro 6 content collection gotcha:** the schema file must be `src/content.config.ts` (NOT `src/content/config.ts` — that location throws `LegacyContentConfigError`). `z` is imported from `astro/zod`, not `astro:content` (the latter re-export is deprecated).

## Things that are missing or fake

- The contact form (`src/pages/contact.astro:13`) posts to `/api/contact` — no API route or backend is wired up. Submitting the form will 404.
- No tests, no CI, no pre-commit hooks, no `.env.example`, no deployment config in the repo. Deploy target is implied by `site` in `astro.config.mjs` but not configured here.
- `README.md` is the unmodified Astro "basics" starter template and does not describe this site. Treat it as inaccurate.
- Newsletter form in the footer is a static `<form>` with no handler.
- All 11 post bodies have `body_zh: ""`; `/zh/blog/...` pages render the Japanese original with a "中文翻譯準備中" note until Carmen provides Chinese translations.
- Post #2 (`my-pace-2026`) has no English body — its content is JP-only on the original Wix site, including the song lyrics credited to Carmen (composer) and Ivan Hui (lyricist). Confirm Carmen has rights to publish Ivan's lyrics before any external distribution.
