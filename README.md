# anikeshk.com

Single-page personal site. Astro + Tailwind, static output, deployed to GitHub Pages
by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Editing content

Most changes are data, not markup:

| File | What it drives |
| --- | --- |
| [`src/data/reading.yaml`](src/data/reading.yaml) | The Reading list — add a blog at the top |
| [`src/data/experience.yaml`](src/data/experience.yaml) | The Experience timeline |
| [`src/data/focus.yaml`](src/data/focus.yaml) | The "What I work on" list |

Prose (hero, About, Contact) lives in [`src/pages/index.astro`](src/pages/index.astro);
design tokens and the light/dark palettes are in [`src/styles/main.css`](src/styles/main.css).

The custom domain is configured in the repo's Pages settings and pinned by
[`public/CNAME`](public/CNAME).
