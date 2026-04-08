import { Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

/**
 * The header gives users a constant way to return home while also reinforcing
 * the product purpose. useLocation lets us lightly react to deeper pages.
 */
export function SiteHeader() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3 text-white transition hover:text-amber-200"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-slate-500/70 shadow-lg shadow-slate-950/30 transition-colors duration-[1000ms] group-hover:bg-slate-600/80 group-hover:duration-[1500ms]">
            <svg
              viewBox="0 0 48 48"
              aria-hidden="true"
              className="h-10 w-10 overflow-visible"
            >
              <path
                d="M12 31a12 12 0 0 1 24 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-white/80"
              />
              <path
                d="M12 31a12 12 0 0 1 24 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="38"
                strokeDashoffset="38"
                className="text-red-500/90 transition-[stroke-dashoffset,opacity] duration-[1000ms] ease-out opacity-80 group-hover:stroke-dashoffset-[8] group-hover:opacity-100 group-hover:duration-[1500ms]"
              />
              <path
                d="M16 31a8 8 0 0 1 16 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="text-white/25"
              />
              <g
                className="origin-[24px_31px] transition-transform duration-[1000ms] ease-out group-hover:rotate-[92deg] group-hover:duration-[1500ms]"
              >
                <line
                  x1="24"
                  y1="31"
                  x2="18"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-white transition-colors duration-[1000ms] ease-out group-hover:text-red-500 group-hover:duration-[1500ms]"
                />
              </g>
              <circle
                cx="24"
                cy="31"
                r="3.25"
                className="fill-white transition-colors duration-[1000ms] ease-out group-hover:fill-red-500 group-hover:duration-[1500ms]"
              />
            </svg>
          </div>
          <div>
            <p className="font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-[0.95rem] uppercase tracking-[0.3em] text-white">
              Drive Atlas
            </p>
            <p className="font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-lg tracking-wide text-white">
              CARS - Complete Automotive Research Service
            </p>
          </div>
        </Link>

        <Link
          to="/#brands"
          className="hidden items-center gap-2 rounded-full border border-white/15 bg-slate-950/55 px-4 py-2 text-sm !text-white shadow-lg shadow-slate-950/20 transition hover:border-white/25 hover:bg-slate-950/70 hover:!text-white md:flex"
        >
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span>
            {isHome ? "Choose a manufacturer" : "Explore specs and design"}
          </span>
        </Link>
      </div>
    </header>
  );
}
