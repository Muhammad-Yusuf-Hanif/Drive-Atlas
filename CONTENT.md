# Content Guide

## Current Data Model

Each brand entry includes:

- `slug`
- `name`
- `description`
- `signature`
- `availableColours`
- `theme`
- `models`

Each model entry includes:

- `slug`
- `name`
- `category`
- `shortDescription`
- `longDescription`
- `designStory`
- `overview`
- `image`
- `imageBackground`
- `colours`
- `specs`

## Where To Edit Content

- Edit [src/data/carBrands.ts](./src/data/carBrands.ts) to add or change brands.
- Add a new brand object to `carBrands`.
- Add new model objects inside the correct brand.
- Keep `slug` values URL-safe because routing depends on them.

## Images

The current model visuals are generated using `createCarImage()` in `src/utils/svg.ts`.

That approach is useful for a starter repo because:

- no external image hosting is required
- the project stays portable
- each model can have a distinct visual identity with small configuration changes

If you later add real assets, replace the `image` value with imported files from `src/assets`.
