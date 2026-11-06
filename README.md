# Joellyn Jaspa: photographer portfolio sample

A one-page sample portfolio for a travel and landscape photographer. It's a Fiverr sample by [Adrian.js](https://adrian-js.vercel.app).

**Stack:** Next.js 16 (static export), React 19, Tailwind CSS 4, TypeScript. There's no backend, and `npm run build` outputs plain files to `out/`.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

## Adapt it for a client

1. Edit `content/site.ts`, where all the text, services, stats and photo list live.
2. Replace the images in `public/images/`. Export WebP at about 1200px on the long edge, or 2400px for the hero.
3. Change the colors and fonts in `app/globals.css` (`@theme`) and `app/layout.tsx`.
4. Connect the contact form to Formspree or Web3Forms. In this demo, it only shows a thank-you message.
5. Set `metadataBase` in `app/layout.tsx` to the real domain, so social previews work.

## Sections

These are the hero, stats strip, filterable masonry gallery with a lightbox (native `<dialog>`, arrow keys and Esc), about, services, contact form and footer with photo credits.

## Photo credits

All photos are from [Unsplash](https://unsplash.com/license) (free to use). Each photographer is credited in the site footer and in `content/site.ts`. Images were fetched through [Lorem Picsum](https://picsum.photos).
