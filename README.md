# Happy Birthday, Dad! — Sinaj 🎂

A birthday surprise for **Sinaj**, made with love by his son **Aamil**, for **27 November 2026**.

Built by personalizing the interactive birthday website template by [Munna-Scriptz](https://github.com/Munna-Scriptz/Happy-Birthday). The original animated cake, interactive notebook-style 3D letter, small envelope, floating notes, and memory scrapbook are retained, with new father–son writing and a custom black-and-gold palette.

## Features

- Animated cake intro, name reveal and champagne-gold confetti
- Interactive 3D birthday letter addressed to Dad
- Smaller envelope with a short, personal letter
- Floating notes from Aamil
- Family memory scrapbook, a timeline, reasons of gratitude, and wish jar
- Responsive layout for mobile and desktop
- No backend or login required

## Add your family photos

Photos have **not** been added yet. The SVGs inside `public/photos/` are deliberately labeled placeholders — not real pictures of Sinaj.

After adding photos, update the file `src/data/siteData.js`:

- `person.photo` is the main portrait used on the home page, inside the book, and in the scrapbook hero.
- `memories[].image` points to the six scrapbook picture slots.
- Keep the photos under `public/photos/` and reference them with paths such as `/photos/dad.jpg`, `/photos/family-1.jpg`, etc.

For best results, use an upright 4:5 portrait for the main image and landscape or square crops for memories. Do not replace the entire animated components to change the pictures.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
```

This is a Vite + React single-page app. The generated `dist/` folder can be hosted with Vercel or Cloudflare Pages. Vercel usually auto-detects the Vite settings.

## Edit the message or theme

- `src/data/siteData.js`: recipient name, date, short and long letters, notes, gallery captions, wishes, timeline.
- `src/birthday-theme.css`: black-and-champagne-gold visual customizations layered on top of the original template.
- `src/pages/Scrapbook.jsx`: page section headings and decorative illustrations.
- `index.html`: title and social metadata.

## Attribution

Original template and interactions by **[Munna-Scriptz / Happy-Birthday](https://github.com/Munna-Scriptz/Happy-Birthday)**. This fork is a personal father–son birthday edition.

Made with love, **Aamil**.
