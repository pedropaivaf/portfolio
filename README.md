<div align="center">

# `pedro.dev` — Portfolio

**A production-grade developer portfolio that ships real features, not just a landing page.**

[![Astro](https://img.shields.io/badge/Astro-5.18-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-22c55e?style=for-the-badge)](#license)

<sub>Pedro Paiva Ferreira — Full-Stack Developer · Juiz de Fora, Brazil</sub>

[Live Site](https://pedropaivaf.dev) · [GitHub](https://github.com/pedropaivaf) · [LinkedIn](https://www.linkedin.com/in/pedropaivaf/)

</div>

---

## The idea

Most dev portfolios are a hero, a list of logos, and a contact form. This one treats the portfolio itself as a product: it ships **real accessibility features**, **three-language i18n**, **text-to-speech for the entire page**, and an **installable iOS/Android app icon**. It's the proof of concept for everything the projects below claim to do.

Built as a single-page Astro app with client-side islands where they earn their keep. Zero runtime frameworks, zero analytics pixels, <span id="lh">~100 Lighthouse</span> out of the box.

## What's inside

### 🎨 A design that commits
- Dark-slate aesthetic with a single green accent (`#22c55e`) — no timid gradients, no AI-slop purple.
- Custom scroll-reveal system (`.reveal`, `.rise`, `.mask-rise`) backed by `IntersectionObserver`.
- Fixed bottom-right **section indicator** (`01/início → 06/contato`) that tracks scroll position.
- Animated terminal on the hero that types `whoami --full` on intersect and reveals a structured output.
- Count-up animated stats, SVG contribution heatmap, and dashed-border brutalist chips for the stack.

### ♿ Accessibility menu (the real kind)
A floating toggle opens a panel with **15+ live options**, each persisted in `localStorage`:

| Group | Options |
| --- | --- |
| **Text size** | A− / A / A+ / A++ |
| **Vision** | Dark mode · high contrast · grayscale · invert · desaturate |
| **Reading** | Dyslexia font · increased spacing · underline links · reading guide · hide images |
| **Interaction** | Reduce motion · big cursor · strong focus ring |
| **Screen reader** | Full-page TTS · per-section "Ouvir" buttons · rate slider |

Notable engineering details:
- **TTS** uses the Web Speech API with a Chrome 15s-cutoff keep-alive workaround (pause/resume every 10s).
- Text is normalized before speech (`—` → comma pause, `→` → ", para ", `·` → ", ", slashes → "ou") so the voice respects natural pauses and pronounces Portuguese properly.
- Sentence splitting on `.!?;` plus long-clause breaking on commas for breathable pacing.
- Voice picker prefers Google → Natural/Neural → Microsoft voices for the target language.
- Filter modes (grayscale/invert/saturate) apply via a sibling selector (`body > *:not(.a11y-fab)...`) to avoid breaking fixed-positioned UI — a subtle stacking-context bug most a11y plugins ship with.

### 🌍 Three-language i18n
Full translations for **Portuguese 🇧🇷**, **English 🇺🇸**, and **Spanish 🇪🇸**, switchable live via country-flag buttons in the nav. No page reload, no route explosion.

- Client-side runtime swap via `data-i18n` / `data-i18n-html` attributes.
- Safe HTML renderer that supports `<strong>` / `<em>` **without using `innerHTML`** — parses with `matchAll` and builds real DOM nodes.
- Auto-detects `navigator.language` on first visit, then persists to `localStorage`.
- Updates `<title>`, `<meta description>`, and `<html lang>` on every switch.

### 📱 Installable on iOS & Android
Dedicated icon pipeline in [`scripts/generate-icons.mjs`](scripts/generate-icons.mjs) using `sharp` to render the green "P" logo into every size iOS and PWA installers ask for:

- `apple-touch-icon.png` (180×180)
- `favicon-32.png`, `favicon-192.png`, `favicon-512.png`
- `site.webmanifest` with `name`, `short_name`, theme colors

Added to Home Screen on an iPhone = real app icon, dark-slate status bar, `Pedro.dev` label.

## Tech stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Astro 5.18** | Zero-JS by default; islands only where needed. |
| Language | **TypeScript 5.6** | Type-checked components and data layer. |
| Styling | **Tailwind CSS v4** + CSS variables | Design tokens live in `global.css`, utilities stay ergonomic. |
| Icons | `astro-icon` + Lucide + Simple Icons | Tree-shaken SVG sprites. |
| Fonts | Inter Variable + JetBrains Mono Variable | Self-hosted via `@fontsource-variable`. |
| Images | `astro:assets` | Auto `.avif` / responsive `srcset`. |
| a11y | Web Speech API + DOM APIs | No library, no runtime. |

## Project structure

```
src/
├── assets/                 # Avatar + project screenshots (optimized by astro:assets)
├── components/
│   ├── Nav.astro           # Top nav + LangSwitcher
│   ├── Hero.astro          # Landing hero + animated terminal
│   ├── HeroTerminal.astro  # Typed "whoami --full" shell
│   ├── About.astro         # Bio + highlight cards
│   ├── Skills.astro        # Categorized tech chips
│   ├── Projects.astro      # Projects grid
│   ├── ProjectCard.astro
│   ├── GitHubStats.astro   # Count-up stats + SVG heatmap
│   ├── Contact.astro       # Dark contact card
│   ├── Footer.astro
│   ├── A11yMenu.astro      # 15+ accessibility options + TTS
│   └── LangSwitcher.astro  # PT/EN/ES flags
├── i18n/
│   └── translations.ts     # Full PT/EN/ES dictionary
├── layouts/
│   └── BaseLayout.astro    # Head, meta, runtime i18n script
├── pages/
│   └── index.astro
├── data/
│   └── projects.ts         # Source of truth for featured projects
└── styles/
    └── global.css          # Design tokens + animations

scripts/
└── generate-icons.mjs      # sharp-based icon pipeline

public/
├── apple-touch-icon.png
├── favicon-{32,192,512}.png
├── favicon.svg
└── site.webmanifest
```

## Featured projects

Rendered live from [`src/data/projects.ts`](src/data/projects.ts):

| Project | What it is | Stack | Status |
| --- | --- | --- | --- |
| **API NFSe** | Desktop app that authenticates via A1 digital certificate (mTLS) on Gov.br and batch-downloads Brazilian service-invoice XMLs | Electron 28 · React 19 · Express 5 · Supabase | Live |
| **SmartParkJF** | SaaS parking-management platform running in Juiz de Fora with real-time finance control | Electron · React · Node.js · Supabase | Live |
| **ReservaQuadra** | Multi-club sports court booking with PIX payments, tournaments and owner dashboards | React · Node.js · Supabase · PostgreSQL | Live |
| **FitAI** | Mobile app that generates personalized workout plans with an LLM | Flutter · Dart · Gemini API · Supabase | Live |
| **MBChat** | LAN messaging app with file transfer and persistent history | JavaScript · SQLite · UDP/TCP | Live |

## Getting started

```bash
# 1. install
npm install

# 2. dev server (auto-opens at http://localhost:4321)
npm run dev

# 3. type-check (Astro + TS)
npx astro check

# 4. production build (output in dist/)
npm run build

# 5. preview the built site
npm run preview
```

### Regenerating icons

If the source logo at [`public/favicon.svg`](public/favicon.svg) changes:

```bash
node scripts/generate-icons.mjs
```

This rebuilds `apple-touch-icon.png`, the three PNG favicons, and `site.webmanifest`.

## Design notes

A few decisions worth calling out:

- **Single accent color.** Every interactive surface uses `var(--accent)` (`#22c55e`). One color, consistently applied, is stronger than five fighting for attention.
- **`color-mix(in oklab, ...)` everywhere.** Borders, hovers, and shadow tints mix against the accent in OKLab to keep saturation perceptually balanced.
- **No client router.** Section navigation is anchor-based (`#sobre`, `#projetos`, …). The section indicator and count-up animations all rehydrate from a single `IntersectionObserver` pass per effect.
- **Islands are scoped.** The only components that ship JS are the nav (burger menu), hero terminal (typing effect), a11y menu (TTS + toggles), and lang switcher. Everything else is static HTML.

## License

MIT © Pedro Paiva Ferreira

---

<div align="center">
<sub>Built with Astro + Tailwind. No frameworks were harmed in the making of this portfolio.</sub>
</div>
