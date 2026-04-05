import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppLayout } from '../components/layout/AppLayout'
import { BrandPage } from '../pages/BrandPage'
import { HomePage } from '../pages/HomePage'
import { ModelPage } from '../pages/ModelPage'
import { NotFoundPage } from '../pages/NotFoundPage'

/**
 * Routing is extracted so page composition is easy to scan in one place.
 * As the website grows, nested routes and loaders can be introduced here
 * without turning App.tsx into a large integration file.
 */
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":brandSlug" element={<BrandPage />} />
          <Route path=":brandSlug/:modelSlug" element={<ModelPage />} />
          <Route path="not-found" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
