import { Outlet } from 'react-router-dom'

import { SiteHeader } from './SiteHeader'

/**
 * Beginner note:
 * This component is the shared outer frame for the whole site.
 *
 * Think of it like the frame around a picture:
 * the picture changes, but the frame stays the same.
 *
 * In this app, the layout is responsible for:
 * - the full-page background
 * - the header at the top
 * - the centered main content area
 *
 * Where it is used:
 * `frontend/src/router/AppRouter.tsx`
 *
 * Why it exists:
 * if every page had to manually include the same header and spacing wrapper,
 * the code would repeat a lot and be harder to keep consistent.
 */
export function AppLayout() {
  return (
    // Outlet is where the matched route page is rendered inside the shared
    // application shell. This pattern is common in React Router apps.
    //
    // Beginner note:
    // `Outlet` is a placeholder from React Router.
    // It means:
    // "put the current page here"
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_32%),linear-gradient(180deg,_#09111d_0%,_#11243d_42%,_#f6f1e8_42%,_#efe6da_100%)] text-slate-950">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
