# Product Overview

## Goal

Build a car showroom-style frontend where users can move through a simple but clear flow:

1. Start on the homepage.
2. Choose a brand from Audi or BMW.
3. Browse the models that belong to that brand.
4. Open a specific model page to view the car image, colours, and specs.

## Current Scope

- Two top-level brands: Audi and BMW
- Brand-specific model lists
- Model-specific detail pages
- Reusable UI component layer
- Route-based navigation with readable URLs
- Responsive layout for mobile and desktop

## Product Decisions

- Brand and model information is currently stored locally in a typed dataset.
- The URLs are lowercase slug routes such as `/bmw` and `/bmw/340i`.
- The visuals use generated inline SVG car artwork so the repo is self-contained.
- The site uses a premium showroom visual direction rather than a default starter template appearance.

## Likely Next Features

- Search and filtering by body style, power, or drivetrain
- Brand navigation sidebar or comparison table
- API-backed content instead of local mock data
- Saved favorites or recently viewed models
- Additional manufacturers and trims
