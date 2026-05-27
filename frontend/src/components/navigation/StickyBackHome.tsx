import { useNavigate } from 'react-router-dom'

type StickyBackHomeProps = {
  fallbackTo?: string
  label?: string
}

export function StickyBackHome({ fallbackTo = '/', label = 'Back' }: StickyBackHomeProps) {
  const navigate = useNavigate()

  function handleBack() {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }

    navigate(fallbackTo)
  }

  return (
    <button
      type="button"
      aria-label="Back to previous page"
      onClick={handleBack}
      className="group fixed left-3 top-1/2 z-30 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-amber-300/40 bg-slate-950/78 px-3 py-2 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(2,6,23,0.42)] backdrop-blur-md transition hover:border-amber-200 hover:bg-slate-950 lg:inline-flex"
    >
      <span className="relative flex h-7 w-9 items-center justify-center overflow-hidden rounded-full bg-amber-400/15">
        <span className="left-indicator-arrow" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-20 group-hover:opacity-100">
        {label}
      </span>
    </button>
  )
}
