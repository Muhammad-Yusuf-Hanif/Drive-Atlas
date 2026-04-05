# Architecture

## Directory Structure

```text
src/
  components/
    brand/        # Brand and model-specific presentation components
    layout/       # Shared application shell pieces
    ui/           # Reusable low-level UI building blocks
  data/           # Typed local data that powers the website
  pages/          # Route-level screens
  router/         # React Router setup
  types/          # Shared TypeScript types
  utils/          # Small helpers
```

## How The App Is Organized

- `src/App.tsx` stays minimal and only mounts the router.
- `src/router/AppRouter.tsx` contains the route definitions.
- `src/components/layout` contains the shared header and shell used by every page.
- `src/components/ui` contains reusable pieces like cards, CTA links, breadcrumbs, and spec items.
- `src/components/brand` contains components that understand the brand/model domain.
- `src/pages` contains route-aware screens and URL parameter resolution.
- `src/data/carBrands.ts` is the single source of truth for the current brand and model content.

## Why This Structure Works

- Reusable UI is separated from route files, so pages stay small.
- Brand-aware components are isolated from generic UI primitives.
- Typed mock data makes it easy to replace the local dataset with an API later.
- The routing layer remains obvious and easy to extend.

## Comments In Code

The codebase includes explanatory comments at the top of key files and around areas where design or architectural intent matters. The comments are meant to help you learn the structure without cluttering simple JSX.
