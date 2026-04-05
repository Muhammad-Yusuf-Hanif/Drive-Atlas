import { Gauge, Sparkles } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

/**
 * The header gives users a constant way to return home while also reinforcing
 * the product purpose. useLocation lets us lightly react to deeper pages.
 */
export function SiteHeader() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-3 text-white transition hover:text-amber-200"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-lg shadow-slate-950/30">
            <Gauge className="h-5 w-5" />
          </div>
          <div>
            <p className="font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-xs uppercase tracking-[0.35em] text-white">
              Drive Atlas
            </p>
            <p className="font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-lg tracking-wide text-white">
              Official brand showroom
            </p>
          </div>
        </Link>

        <Link
          to="/#brands"
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10 md:flex"
        >
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span>{isHome ? 'Choose a manufacturer' : 'Explore specs and design'}</span>
        </Link>
      </div>
    </header>
  )
}
