# Drive Atlas

Drive Atlas is a React, TypeScript, Tailwind, and React Router frontend project for browsing official car brands, their model ranges, and focused model detail pages.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide React
- `clsx`

## Scripts

- `npm run dev` starts the local Vite dev server
- `npm run build` creates the production build
- `npm run lint` runs ESLint
- `npm run preview` previews the production build locally

## Main User Flow

1. The homepage shows a vertical list of brand cards for Audi and BMW.
2. Clicking a brand card routes to `/:brandSlug`.
3. The brand page shows a vertical list of model cards for that brand.
4. Clicking a model card routes to `/:brandSlug/:modelSlug`.
5. The model page shows the selected model image, specs, colours, and design notes.

## Documentation

- [PRODUCT.md](./PRODUCT.md) explains the product concept and target experience.
- [ARCHITECTURE.md](./ARCHITECTURE.md) explains the folder structure and code organization.
- [CONTENT.md](./CONTENT.md) explains how the current car dataset is structured and how to extend it.

## Quick Start

```bash
npm install
npm run dev
```
