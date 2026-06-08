# PixelForge — Digital Studio Landing Page

A bold, sunset-themed Next.js 14 landing page for a tech / digital agency.
Built with the App Router, TypeScript, Tailwind CSS, and Google Fonts
(Fraunces / Inter / JetBrains Mono).

## Live demo
https://pixelforge-lyart.vercel.app/

## Tech stack
- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS** with custom sunset palette
- **Google Fonts** via `next/font` (Fraunces, Inter, JetBrains Mono)

## Quick start

```bash
# 1. install deps
npm install

# 2. dev server (http://localhost:3000)
npm run dev

# 3. production build → static files in ./out
npm run build
```

Because `next.config.js` uses `output: 'export'`, `npm run build`
produces a fully static site in the `out/` directory. You can deploy
that directory to any static host (Netlify, Vercel, GitHub Pages,
Cloudflare Pages, S3, etc.).

## Project structure

```
app/
  globals.css      — Tailwind layers + custom utilities (sunset bg, grain, buttons)
  layout.tsx       — root layout, fonts, metadata
  page.tsx         — composes all sections
components/
  Nav.tsx          — sticky nav with scroll blur
  Hero.tsx         — massive display headline + floating sun disc
  Marquee.tsx      — infinite scrolling ticker
  Services.tsx     — 4 service cards
  Stats.tsx        — numbers grid on ink background
  Testimonials.tsx — 4 client quotes
  Pricing.tsx      — 3 engagement plans
  Contact.tsx      — form that opens user's email client (mailto:)
  Footer.tsx       — footer with brand + links
tailwind.config.ts — custom colors, fonts, animations
next.config.js     — output: 'export'
```

## Customization tips

- **Brand name / colors** — edit `tailwind.config.ts` (`ember`, `sun`,
  `coral`, `ink`, `cream`) and any reference to "PixelForge" in
  `Nav.tsx`, `Footer.tsx`, `Hero.tsx`.
- **Sections content** — each section is a self-contained file in
  `components/`. Arrays at the top of `Services`, `Testimonials`,
  `Pricing`, `Stats` make text edits easy.
- **Contact email** — change `hello@pixelforge.studio` in
  `components/Contact.tsx` (the `mailto:` target) and `Footer.tsx`.

## Contact form behaviour

The form is fully client-side. On submit it builds a pre-filled
`mailto:` URL and opens the user's email client. No backend, no
database, no third-party service.

If you later want to capture submissions server-side, swap the submit
handler in `components/Contact.tsx` to POST to an API route or a
service like Formspree, Web3Forms, or Resend.
