# Portfólio — Pedro Paiva Ferreira

Site pessoal construído em [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com). Página única com tema "dev light", destacando projetos reais em produção.

## Desenvolvimento

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

O output estático é gerado em `dist/`, pronto para deploy em qualquer host estático (Hostinger, Netlify, Vercel, GitHub Pages).

## Estrutura

```
src/
├── assets/placeholders/   # SVGs de avatar e logos de projetos
├── components/            # Nav, Hero, Projects, etc.
├── data/projects.ts       # fonte única de projetos destacados
├── layouts/BaseLayout.astro
├── pages/index.astro      # página única com seções ancoradas
└── styles/global.css      # tokens de design + animações
```

## Projetos destacados

- **Syros** — gestão financeira pessoal (React + Supabase)
- **SmartParkJF** — sistema de estacionamento inteligente em produção
- **ReservaQuadra** — reserva de quadras esportivas online
- **MBChat** — mensageiro para redes locais
- **SmartBot** — chatbot IA para WhatsApp
