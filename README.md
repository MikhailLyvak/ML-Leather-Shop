# ML Shop

Online shop for handmade leather clutches. Built with Next.js (App Router) so product pages are server-rendered and searchable.

## Local development

```bash
npm install
npm run fonts:verify
npm run dev
```

Open:

- Home: [http://localhost:3000](http://localhost:3000)
- Product landing: [http://localhost:3000/products/ml-daily-klatch](http://localhost:3000/products/ml-daily-klatch)

## Docker

```bash
docker compose up --build
```

The image uses Next.js `standalone` output. Static assets (including fonts under `public/fonts/`) are copied into the container.

Set `NEXT_PUBLIC_SITE_URL` in `docker-compose.yml` (or your orchestrator) to the public URL in production.

## Fonts

UI sans (`font-gilroy`) loads from files in the repository:

- **Manrope** (bundled fallback): `public/fonts/manrope/*.woff2`
- **Gilroy** (optional, licensed): drop `Gilroy-Regular.woff2` and `Gilroy-Medium.woff2` into `public/fonts/gilroy/`

If Gilroy files are present, they take priority. Otherwise Manrope is used — not a system font from your machine.

```bash
npm run fonts:verify   # check files before build
npm run fonts:sync     # refresh Manrope from @fontsource/manrope
```

## Scripts

- `npm run dev` — development server
- `npm run lint` — ESLint
- `npm run format` / `npm run format:write` — Prettier
- `npm run check-types` — TypeScript
- `npm run build` — production build

## Images

Put static images in `public/images/`. Product shots for the Daily Klatch live in `public/images/products/ml-daily-klatch/` and are served at `/images/products/ml-daily-klatch/...`. Use `next/image` with those paths.

## Design

Visual source of truth for the landing: [`docs/design/ml-daily-landing-desktop.png`](docs/design/ml-daily-landing-desktop.png). Mockups stay in `docs/design/` (not `public/`). Designer file: [ML Daily Klatch (Figma)](https://www.figma.com/design/GpU9pIhsIUvGO5DFEyfYb9/ML?node-id=159-30&p=f).

Write feature specs in `docs/specs/` before implementing cart, order, or billing.
