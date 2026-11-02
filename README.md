# Margin — studio site

**Websites that earn their keep.**

The marketing site for **Margin**, an independent web studio founded by Syed Musab. Margin designs and builds landing pages and business websites for founders. Each site is meant to load fast, earn trust quickly and turn visitors into booked calls.

The name has two meanings: the profit margin a good site protects, and the page margin where editors mark up a draft in red pencil. That second meaning drives the visual design.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (design tokens in `src/index.css`)
- Framer Motion for reveals, the scroll-drawn process line and the hero mark-up animation

## Design system

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#F3F0E8` | Page background |
| `ink` | `#151412` | Text, dark sections |
| `pencil` | `#E0452B` | The single accent: edits, indexes, calls to action |
| Geist | Sans | Headlines and body |
| Instrument Serif | Italic | Accent words (`*like this*` in copy) |
| Geist Mono | Uppercase | Labels and indexes |

The two vertical rules framing the content on wide screens are the "margins".

## Editing copy

All copy lives in [`src/content.js`](src/content.js). Wrap words in `*asterisks*` to set them in the serif italic accent. Add social profile URLs under `site.socials` to show the footer icons.

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run lint
```

## Structure

```
src/
  content.js            all copy and data
  lib/                  motion presets, text helpers
  components/
    ui/                 SectionHead, RevealHeading, CtaButton, icons
    Nav, Hero, ProofMarkup, Clients, Leaks, Principles,
    Work, Services, Process, Testimonials, Pricing, FAQ, Footer
```
