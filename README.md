# Allure Braids

Portfolio site for Allure Braids by Jamille Van Putten. React + Vite + Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure

```
src/
  animations/variants.js   shared Framer Motion variants and easing
  components/              reusable UI (Header, MenuOverlay, Placeholder, RevealText, Marquee, …)
  data/content.js          all copy, client list, testimonials, image slots
  hooks/                   scroll lock, escape key, active section tracking
  sections/                page sections (Hero, About, Portfolio, Testimonials, Book, Contact)
  styles/global.css        design tokens (colors, fonts, spacing)
```

Each component has a co-located `*.module.css` file.

## Swapping in real images

Every image slot reads from `src/data/content.js`. Put photos in `src/assets/`, import them
there, and set the `image` field, e.g.

```js
import ralph from '../assets/ralph-lauren.jpg';
// …
{ id: 'ralph-lauren', name: 'Ralph Lauren', image: ralph, … }
```

When `image` is `null`, a labelled placeholder is shown instead.

## Deploy

Pushing to `main` builds and publishes the site to GitHub Pages via
`.github/workflows/deploy.yml`: https://anahlewi.github.io/allure-braids/
