import { ChevronDown, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { useApiResource } from "../../hooks/useApiResource";
import type { CarBrand } from "../../types/cars";

/**
 * Beginner note:
 * This header sits inside AppLayout, so it appears on every routed page.
 * That means users always have a reliable way to return home without relying on
 * the browser back button.
 *
 * File flow:
 * AppRouter -> AppLayout -> SiteHeader
 *
 * Product role:
 * A persistent header strengthens navigation and branding across the whole app.
 */
export function SiteHeader() {
  const [isManufacturerMenuOpen, setIsManufacturerMenuOpen] = useState(false);
  const { data: carBrands } = useApiResource<CarBrand[]>("/api/brands");
  const manufacturerLinks = useMemo(
    () =>
      [...(carBrands ?? [])].sort((firstBrand, secondBrand) =>
        firstBrand.name.localeCompare(secondBrand.name),
      ),
    [carBrands],
  );
  const manufacturerGroups = useMemo(
    () =>
      manufacturerLinks.reduce<Array<{ letter: string; brands: CarBrand[] }>>(
        (groups, brand) => {
          const letter = brand.name.charAt(0).toUpperCase();
          const currentGroup = groups[groups.length - 1];

          if (currentGroup?.letter === letter) {
            currentGroup.brands.push(brand);
            return groups;
          }

          groups.push({ letter, brands: [brand] });
          return groups;
        },
        [],
      ),
    [manufacturerLinks],
  );

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3 text-white transition hover:text-amber-200"
        >
          {/* This inline SVG is the custom logo. Keeping it in code makes it easy to theme and animate with Tailwind classes. */}
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

        <div
          className="relative hidden md:block"
          onMouseEnter={() => setIsManufacturerMenuOpen(true)}
          onMouseLeave={() => setIsManufacturerMenuOpen(false)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsManufacturerMenuOpen(false);
            }
          }}
        >
          <button
            type="button"
            aria-expanded={isManufacturerMenuOpen}
            aria-controls="manufacturer-menu"
            className="flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-slate-950/55 px-4 py-2 text-sm !text-white shadow-lg shadow-slate-950/20 transition hover:border-white/25 hover:bg-slate-950/70 hover:!text-white focus:outline-none focus:ring-2 focus:ring-amber-300/70"
            onClick={() => setIsManufacturerMenuOpen((isOpen) => !isOpen)}
            onFocus={() => setIsManufacturerMenuOpen(true)}
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>Choose a manufacturer</span>
            <ChevronDown
              className={`h-4 w-4 text-white/70 transition ${
                isManufacturerMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isManufacturerMenuOpen ? (
            <div
              id="manufacturer-menu"
              className="absolute right-0 top-full w-80 pt-3"
            >
              <div className="overflow-hidden rounded-xl border border-white/15 bg-slate-950/95 shadow-2xl shadow-slate-950/45 backdrop-blur-xl">
                <div className="border-b border-white/10 px-4 py-3">
                  <p className="text-xs font-semibold uppercase text-white/55">
                    Manufacturers A-Z
                  </p>
                </div>

                {manufacturerLinks.length > 0 ? (
                  <nav
                    aria-label="Manufacturers"
                    className="max-h-[28rem] overflow-y-auto p-2"
                  >
                    {manufacturerGroups.map((group) => (
                      <div key={group.letter} className="py-1">
                        <p className="sticky top-0 z-10 border-y border-white/10 bg-slate-950/95 px-3 py-1.5 text-[0.7rem] font-semibold uppercase text-amber-200">
                          {group.letter}
                        </p>
                        <div className="py-1">
                          {group.brands.map((brand) => (
                            <Link
                              key={brand.slug}
                              to={`/${brand.slug}`}
                              className="block rounded-lg px-3 py-2.5 text-sm font-medium !text-white transition hover:bg-white/10 hover:!text-amber-100 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/70"
                              onClick={() => setIsManufacturerMenuOpen(false)}
                            >
                              {brand.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </nav>
                ) : (
                  <Link
                    to="/#brands"
                    className="block px-4 py-3 text-sm font-medium !text-white transition hover:bg-white/10 hover:!text-amber-100"
                    onClick={() => setIsManufacturerMenuOpen(false)}
                  >
                    View manufacturer list
                  </Link>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
