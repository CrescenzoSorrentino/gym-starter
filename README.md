# GymStarter

A modern, dark-themed gym website template built with Nuxt 3. Designed for a young, urban audience — all content, colors, and images are fully configurable via Vercel environment variables with no code changes required.

## Tech stack

- **Nuxt 4** — file-based routing, layouts, auto-imports
- **Vue 3** — Composition API, `<script setup>`, Teleport
- **@nuxt/icon** — Heroicons and MDI icon sets
- **Vanilla CSS** — custom properties as design tokens, mobile-first
- **Inter** (Google Fonts) + **Impact** (system) for typography

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, services, stats, CTA |
| `/chi-siamo` | About — story, values, team |
| `/contatti` | Contact — info, hours, form, map |

## Project structure

```
app/
├── assets/css/main.css        # reset, design tokens, global styles
├── components/
│   ├── AppNavbar.vue          # fixed navbar with mobile menu
│   ├── AppFooter.vue          # 4-column footer
│   ├── BaseButton.vue         # reusable button (primary/secondary/ghost)
│   ├── PageHero.vue           # shared hero for inner pages
│   ├── HomeHero.vue
│   ├── HomeServices.vue
│   ├── HomeStats.vue
│   ├── HomeCta.vue
│   ├── ChiSiamoStoria.vue
│   ├── ChiSiamoValori.vue
│   ├── ChiSiamoTeam.vue
│   ├── ContattiInfo.vue
│   └── ContattiMappa.vue
├── composables/
│   └── useSiteData.ts         # nav links and contacts
├── layouts/
│   └── default.vue            # navbar + slot + footer
├── pages/
│   ├── index.vue
│   ├── chi-siamo.vue
│   └── contatti.vue
├── plugins/
│   └── theme.client.ts        # injects color CSS vars at runtime
public/
└── images/                    # local images (hero, about, services, cta)
nuxt.config.ts                 # runtimeConfig with all defaults
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

All site content is defined in `nuxt.config.ts` under `runtimeConfig.public`. On Vercel, any key can be overridden by setting the corresponding `NUXT_PUBLIC_*` environment variable.

### Brand

| Env var | Default | Description |
|---|---|---|
| `NUXT_PUBLIC_SITE_NAME` | `GymStarter` | Site name, used in navbar and footer |
| `NUXT_PUBLIC_TAGLINE` | `Forgia il tuo corpo...` | Tagline shown in footer |

### Colors

| Env var | Default | Description |
|---|---|---|
| `NUXT_PUBLIC_COLOR_ACCENT` | `#e8ff00` | Primary accent (yellow) |
| `NUXT_PUBLIC_COLOR_ACCENT_ALT` | `#ff3c3c` | Secondary accent (red) |
| `NUXT_PUBLIC_COLOR_BLACK` | `#0a0a0a` | Background black |
| `NUXT_PUBLIC_COLOR_WHITE` | `#f5f5f5` | Foreground white |

### Images

| Env var | Default |
|---|---|
| `NUXT_PUBLIC_HERO_IMAGE` | `/images/hero.jpg` |
| `NUXT_PUBLIC_CTA_IMAGE` | `/images/cta.jpg` |
| `NUXT_PUBLIC_ABOUT_IMAGE` | `/images/about.jpg` |
| `NUXT_PUBLIC_SERVICE_PERSONAL_IMAGE` | `/images/service-personal.jpg` |
| `NUXT_PUBLIC_SERVICE_GROUP_IMAGE` | `/images/service-group.jpg` |
| `NUXT_PUBLIC_SERVICE_WEIGHTS_IMAGE` | `/images/service-weights.jpg` |
| `NUXT_PUBLIC_SERVICE_NUTRITION_IMAGE` | `/images/service-nutrition.jpg` |

> Images can also point to external URLs (e.g. Unsplash).

### Hero

| Env var | Default |
|---|---|
| `NUXT_PUBLIC_HERO_EYEBROW` | `Niente scuse` |
| `NUXT_PUBLIC_HERO_TITLE` | `Forgia il tuo` |
| `NUXT_PUBLIC_HERO_TITLE_ACCENT` | `corpo` |
| `NUXT_PUBLIC_HERO_SUBTITLE` | `Allenati con i migliori...` |
| `NUXT_PUBLIC_HERO_CTA1` | `Inizia ora` |
| `NUXT_PUBLIC_HERO_CTA2` | `Scopri di più` |

### CTA section

| Env var | Default |
|---|---|
| `NUXT_PUBLIC_CTA_TITLE` | `Niente scuse` |
| `NUXT_PUBLIC_CTA_BUTTON` | `Unisciti a noi` |

### Contact info

| Env var | Default |
|---|---|
| `NUXT_PUBLIC_ADDRESS` | `Via Roma 1, 20100 Milano` |
| `NUXT_PUBLIC_PHONE` | `+39 02 1234567` |
| `NUXT_PUBLIC_EMAIL` | `info@gymstarter.it` |
| `NUXT_PUBLIC_HOURS_WEEKDAY` | `06:00 — 23:00` |
| `NUXT_PUBLIC_HOURS_SATURDAY` | `08:00 — 21:00` |
| `NUXT_PUBLIC_HOURS_SUNDAY` | `09:00 — 18:00` |

### About — story

| Env var | Default |
|---|---|
| `NUXT_PUBLIC_STORY_YEAR` | `2016` |
| `NUXT_PUBLIC_STORY_TEXT1` | First paragraph |
| `NUXT_PUBLIC_STORY_TEXT2` | Second paragraph |

### Stats

| Env var | Default |
|---|---|
| `NUXT_PUBLIC_STAT1_VALUE` | `500+` |
| `NUXT_PUBLIC_STAT1_LABEL` | `Membri attivi` |
| `NUXT_PUBLIC_STAT2_VALUE` | `12` |
| `NUXT_PUBLIC_STAT2_LABEL` | `Trainer certificati` |
| `NUXT_PUBLIC_STAT3_VALUE` | `8` |
| `NUXT_PUBLIC_STAT3_LABEL` | `Anni di esperienza` |
| `NUXT_PUBLIC_STAT4_VALUE` | `95%` |
| `NUXT_PUBLIC_STAT4_LABEL` | `Clienti soddisfatti` |

### Team

| Env var | Default |
|---|---|
| `NUXT_PUBLIC_MEMBER1_NAME` | `Marco Ricci` |
| `NUXT_PUBLIC_MEMBER1_ROLE` | `Head Coach & Fondatore` |
| `NUXT_PUBLIC_MEMBER1_IMAGE` | Unsplash URL |
| `NUXT_PUBLIC_MEMBER2_NAME` | `Sara Colombo` |
| `NUXT_PUBLIC_MEMBER2_ROLE` | `Nutrition Coach` |
| `NUXT_PUBLIC_MEMBER2_IMAGE` | Unsplash URL |
| `NUXT_PUBLIC_MEMBER3_NAME` | `Luca Ferrari` |
| `NUXT_PUBLIC_MEMBER3_ROLE` | `Personal Trainer` |
| `NUXT_PUBLIC_MEMBER3_IMAGE` | Unsplash URL |

## Deploy to Vercel

1. Push to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Set any `NUXT_PUBLIC_*` environment variables you want to override
4. Deploy — Vercel auto-detects Nuxt and sets the build command to `nuxt build`

## Known limitations

- Contact form has no backend — wire up an email service (Resend, Formspree, etc.) to handle submissions
- Social links in the footer point to `#` — replace with real URLs in `AppFooter.vue`
- The Google Maps embed in `/contatti` uses a placeholder location — replace the `src` URL in `ContattiMappa.vue` with your own embed link
