import { Outlet } from 'react-router-dom'

import { SiteHeader } from './SiteHeader'

/**
 * The layout wraps every page with shared chrome.
 * Keeping this separate avoids duplicating header and page spacing rules.
 */
export function AppLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_32%),linear-gradient(180deg,_#09111d_0%,_#11243d_42%,_#f6f1e8_42%,_#efe6da_100%)] text-slate-950">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
