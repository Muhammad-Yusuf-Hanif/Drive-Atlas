import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'

import { AppLayout } from '../components/layout/AppLayout'
import { BrandPage } from '../pages/BrandPage'
import { CurrentFamilyPage } from '../pages/CurrentFamilyPage'
import { CurrentGenerationPage } from '../pages/CurrentGenerationPage'
import { CurrentVariantPage } from '../pages/CurrentVariantPage'
import { HistoricalGenerationPage } from '../pages/HistoricalGenerationPage'
import { HistoricalFamilyPage } from '../pages/HistoricalFamilyPage'
import { HistoricalVariantPage } from '../pages/HistoricalVariantPage'
import { HomePage } from '../pages/HomePage'
import { ModelPage } from '../pages/ModelPage'
import { NotFoundPage } from '../pages/NotFoundPage'

/**
 * Beginner note:
 * This file tells the app which page to show for each URL.
 *
 * This is called routing.
 *
 * Example:
 * `/` -> homepage
 * `/bmw` -> BMW page
 * `/bmw/ranges/3-series/g20-g21/330i` -> one specific current BMW variant page
 *
 * If you want to understand the app's navigation structure, this is one of the
 * first files to read.
 */
function LegacyFamilyRedirect() {
  // `useParams()` reads the variable pieces from the current URL.
  //
  // The line below uses object destructuring.
  // Destructuring means:
  // take named properties from an object and put them into variables.
  const { brandSlug, familySlug } = useParams()

  // This keeps older links working after the route structure was renamed from
  // /history/... to /families/... for the generation-first browsing flow.
  return <Navigate to={`/${brandSlug}/families/${familySlug}`} replace />
}

function LegacyVariantRedirect() {
  // Same idea here, but with more URL values pulled out.
  const { brandSlug, familySlug, generationSlug, phaseSlug, variantSlug } = useParams()

  // The old route used an extra phase segment. The new route groups the user
  // by family -> generation -> variant, so phaseSlug is intentionally ignored.
  void phaseSlug

  return (
    <Navigate
      to={`/${brandSlug}/families/${familySlug}/${generationSlug}/${variantSlug}`}
      replace
    />
  )
}

/**
 * Beginner note:
 * `AppRouter` is the route map for the frontend.
 *
 * Cross-file connection:
 * `main.tsx` -> renders `App`
 * `App.tsx` -> renders `AppRouter`
 * `AppRouter` -> chooses which page component to render
 */
export function AppRouter() {
  return (
    // `BrowserRouter` turns on React Router for the whole app.
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          // `index` means the default child route, which here is the homepage.
          <Route index element={<HomePage />} />
          {/* Current cars use a family-first route shape:
              brand -> family -> generation -> exact current variant */}
          <Route path=":brandSlug/ranges/:familySlug" element={<CurrentFamilyPage />} />
          <Route
            path=":brandSlug/ranges/:familySlug/:generationSlug"
            element={<CurrentGenerationPage />}
          />
          <Route
            path=":brandSlug/ranges/:familySlug/:generationSlug/:variantSlug"
            element={<CurrentVariantPage />}
          />
          {/* Legacy cars use the same family-first idea, but the last step
              groups together phase-specific records for a historical variant. */}
          <Route path=":brandSlug/families/:familySlug" element={<HistoricalFamilyPage />} />
          <Route
            path=":brandSlug/families/:familySlug/:generationSlug"
            element={<HistoricalGenerationPage />}
          />
          <Route
            path=":brandSlug/families/:familySlug/:generationSlug/:variantSlug"
            element={<HistoricalVariantPage />}
          />
          <Route path=":brandSlug/history/:familySlug" element={<LegacyFamilyRedirect />} />
          <Route
            path=":brandSlug/history/:familySlug/:generationSlug/:phaseSlug/:variantSlug"
            element={<LegacyVariantRedirect />}
          />
          {/* The original brand/model route still exists for brands that have not
              been migrated to the new family/generation structure yet. */}
          <Route path=":brandSlug" element={<BrandPage />} />
          <Route path=":brandSlug/:modelSlug" element={<ModelPage />} />
          {/* `*` means "anything not matched above". */}
          <Route path="not-found" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
