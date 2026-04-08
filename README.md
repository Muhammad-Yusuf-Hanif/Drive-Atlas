# Drive Atlas

Drive Atlas is now split into separate frontend and backend applications.

## Structure

- [frontend](./frontend) contains the React, TypeScript, Tailwind, and React Router client.
- [backend](./backend) contains the Node.js + Express API that serves brand and model data.

## Run Locally

In one terminal:

```bash
npm run dev:backend
```

In a second terminal:

```bash
npm run dev:frontend
```

The frontend uses Vite and proxies `/api` requests to the Express backend on `http://localhost:3001`.

## Frontend Scripts

From the repo root:

- `npm run dev:frontend`
- `npm run build:frontend`
- `npm run lint:frontend`

## Backend Scripts

From the repo root:

- `npm run dev:backend`

Or from the backend directory:

- `npm run dev`
- `npm run start`

## Documentation

- [PRODUCT.md](./PRODUCT.md) explains the product concept and target experience.
- [ARCHITECTURE.md](./ARCHITECTURE.md) explains the folder structure and code organization.
- [CONTENT.md](./CONTENT.md) explains how the current vehicle dataset is structured.
