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
    <div className="relative min-h-screen overflow-hidden bg-[#090712] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_50%_16%,_rgba(190,24,93,0.16),_transparent_10%),radial-gradient(circle_at_42%_18%,_rgba(220,38,38,0.12),_transparent_7%),radial-gradient(circle_at_62%_18%,_rgba(220,38,38,0.12),_transparent_7%),radial-gradient(circle_at_50%_0%,_rgba(126,34,206,0.42),_transparent_38%),linear-gradient(180deg,_#17112d_0%,_#0d0a1d_48%,_#03040a_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(115deg,_transparent_0%,_rgba(255,255,255,0.055)_44%,_transparent_46%),linear-gradient(118deg,_transparent_0%,_rgba(255,255,255,0.035)_62%,_transparent_64%)] bg-[length:180px_180px,240px_240px] opacity-35 animate-[rainDrift_18s_linear_infinite]" />
      <div className="pointer-events-none fixed inset-x-0 top-10 -z-20 mx-auto h-72 max-w-5xl bg-[radial-gradient(ellipse_at_center,_rgba(127,29,29,0.22)_0%,_rgba(88,28,135,0.2)_28%,_transparent_70%)] blur-2xl" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(180deg,_rgba(9,7,18,0.18)_0%,_rgba(9,7,18,0.04)_35%,_rgba(3,4,10,0.54)_100%)]" />
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
