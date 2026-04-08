# Architecture

## Directory Structure

```text
frontend/
  src/
    api/          # Frontend HTTP helpers
    components/
      brand/      # Brand and model-specific presentation components
      layout/     # Shared application shell pieces
      ui/         # Reusable low-level UI building blocks
    hooks/        # Data-fetching hooks
    pages/        # Route-level screens
    router/       # React Router setup
    types/        # Shared TypeScript types
    utils/        # Small helpers
backend/
  src/
    data/         # API-backed vehicle dataset
    utils/        # Backend asset helpers
    server.js     # Express application entry point
```

## How The App Is Organized

- `frontend/src/App.tsx` stays minimal and only mounts the router.
- `frontend/src/pages` contains route-aware screens that fetch their own API data.
- `frontend/src/api` and `frontend/src/hooks` isolate the fetch logic from the page UI.
- `backend/src/server.js` exposes slug-based routes that mirror the brand/model pages.
- `backend/src/data/carBrands.js` is the current API-side source of truth for the vehicle dataset.

## Why This Structure Works

- The frontend and backend can evolve independently.
- Reusable UI is separated from route files, so pages stay small.
- The frontend no longer bundles the source dataset directly.
- The API contract now matches the page URL structure closely enough to expand into a larger catalog later.

## Comments In Code

The codebase includes explanatory comments at the top of key files and around areas where design or architectural intent matters. The comments are meant to help you learn the structure without cluttering simple JSX.
