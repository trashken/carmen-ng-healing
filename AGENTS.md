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
    index.astro           # English home (default locale)
    contact.astro         # English-only (not localized)
    testimonials.astro    # English-only (not localized)
    en/blog/              # /en/blog and /en/blog/[slug]
    jp/blog/              # /jp/blog and /jp/blog/[slug]
    zh/blog/              # /zh/blog and /zh/blog/[slug]
  i18n/                   # one dictionary per locale + index.ts helpers
    en.ts  jp.ts  zh.ts  index.ts
  data/
    posts.ts              # 11 blog posts: title/body in jp+en (zh is null)
  components/             # currently empty; nav/footer are inlined in Layout
  styles/global.css       # Tailwind import + @theme tokens + component classes
public/
  assets/logo.png         # torii mark in the nav (AI-generated per Carmen)
  videos/kwanon-canon.mp4 # Kwanon & Canon post cover (downloaded from Wix)
  favicon.ico  favicon.svg
staging/
  uploads/                # 127 unverified media files — DO NOT serve
  posts/                  # raw Wix HTML dumps used during migration
astro.config.mjs          # site URL + tailwindcss vite plugin
tsconfig.json             # extends astro/tsconfigs/strict
```

## i18n

- 3 locales: `en` (default), `jp` (Japanese), `zh` (Traditional Chinese). `src/i18n/index.ts` exports `locales`, `defaultLocale`, `getDictionary(locale)`, `isLocale(value)`.
- `Layout.astro` accepts `locale?: Locale` prop (defaults to `'en'`).
- Localized pages must pass `locale=` to Layout AND prefix internal links: `/${locale}/blog`, `/${locale}/blog/${slug}`.
- The `/testimonials` and `/contact` routes stay English-only and unprefixed — don't add a locale prop to them.
- The header switcher shows the *other* two locales. Clicking goes to the locale root (`/jp`, `/zh`), not to the equivalent post in that locale. Smart "switch to same page" routing is not implemented; add a route map if needed.
- **Adding a locale:** add `src/i18n/<code>.ts` exporting a dictionary matching the `Dictionary` type from `src/i18n/en.ts`, register it in `src/i18n/index.ts` `dictionaries` and add to the `locales` array, then duplicate the three files in `src/pages/{locale}/blog/` with paths updated.

## Blog content

- `src/data/posts.ts` is the single source of truth for post content.
- Each post: `slug`, `date` (ISO yyyy-mm-dd), `category: 'article' | 'news'`, optional `video` path, and a `body` with `jp` / `en` / `zh` fields.
- JP body is always present (Carmen wrote in Japanese). EN is present for ~6 of 11 posts (the bilingual ones on Wix). **ZH is null for all 11** — Carmen will provide these.
- `getTitleForLocale(post, locale)` and `getBodyForLocale(post, locale)` return `{ value, isFallback }`. When a locale has no translation, they fall back to JP and `isFallback: true` so the page can show a "translation pending" notice.
- The "Website Brush Up" and "Rainbow bridging the Worlds" posts are categorized as `news`; the rest are `article`. The category controls the small uppercase tag on listing/post pages.
- Adding a post: append to the `posts` array. The `[slug].astro` pages use `getStaticPaths` over the array, so any new post gets pages in all 3 locales automatically.

## Styling

- Tailwind 4 is wired via the Vite plugin (`@tailwindcss/vite` in `astro.config.mjs:9`), not PostCSS. Config is CSS-based using `@theme {}` in `src/styles/global.css:3`.
- Custom design tokens are defined in `@theme` (colors: `blush`, `rose`, `lavender`, `sky`, `peach`, `cream`, `ink`, `warm-white`; fonts: `font-serif` = Playfair Display, `font-sans` = Inter). Use these tokens — do not introduce a `tailwind.config.*` file.
- Reusable component classes live in `@layer components` in `global.css`: `btn-primary`, `btn-outline`, `section-title`, `section-subtitle`, `card`, `watercolor-blob`. Prefer these over ad-hoc Tailwind classes.
- Fonts are loaded from Google Fonts via `<link>` in `Layout.astro:20-22` — no self-hosting.
- **Tailwind v4 gotcha:** dynamic class names constructed at runtime (e.g. `bg-${color}/10` in `src/pages/index.astro:121`) will not be detected by Tailwind's scanner. The set of colors used this way is currently: `rose`, `lavender`, `sky`, `peach`. If you add a new dynamic color, expect styles to be silently missing.

## Conventions

- All pages wrap their content in `<Layout title="..." description="..." locale="...">` from `src/layouts/Layout.astro`. The layout appends ` | ${siteName}` to the title and falls back to a default description per locale.
- The logo (`public/assets/logo.png`) is shown in the nav on all pages via `Layout.astro`. The original placeholder house/door SVG has been removed.
- The medical disclaimer ("Carmen is not a licensed physician...") is rendered in the footer of every page, in the active locale. Update the matching `src/i18n/*.ts` file if it changes.
- Post pages render a `<video>` player at the top when `post.video` is set (currently only `kwanon-canon`). The video file lives at `public/videos/<file>` and is referenced as `/videos/<file>`.
- Cover images for blog posts are still gradient placeholders. Real covers go in `public/uploads/` (currently empty) once you map them to slugs.
- `src/components/` exists but is empty; the nav and footer are inlined in `Layout.astro` (keep them in sync across pages).

## Things that are missing or fake

- The contact form (`src/pages/contact.astro:13`) posts to `/api/contact` — no API route or backend is wired up. Submitting the form will 404.
- No tests, no CI, no pre-commit hooks, no `.env.example`, no deployment config in the repo. Deploy target is implied by `site` in `astro.config.mjs` but not configured here.
- `README.md` is the unmodified Astro "basics" starter template and does not describe this site. Treat it as inaccurate.
- Newsletter form in the footer is a static `<form>` with no handler.
- Cover images for blog posts are gradient placeholders. The 127 files in `staging/uploads/` (mojibake filenames, mix of stock, third-party logos, audio/video, iPhone HEICs) are unverified and not used.
- All 11 post bodies have `zh: null`; `/zh/blog/...` pages render the Japanese original with a "中文翻譯準備中" note until Carmen provides Chinese translations.
- Post #2 (`my-pace-2026`) has no English body — its content is JP-only on the original Wix site, including the song lyrics credited to Carmen (composer) and Ivan Hui (lyricist). Confirm Carmen has rights to publish Ivan's lyrics before any external distribution.
