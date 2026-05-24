import { VehicleSearchPanel } from "../components/search/VehicleSearchPanel";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StatusCard } from "../components/ui/StatusCard";
import { useApiResource } from "../hooks/useApiResource";
import type { CarBrand } from "../types/cars";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const popularBrands = [
  {
    slug: "bmw",
    name: "BMW",
    focus: "3 Series, M cars, premium saloons, and performance estates.",
  },
  {
    slug: "audi",
    name: "Audi",
    focus: "A, S, and RS models with quattro-led performance research.",
  },
  {
    slug: "mercedes-benz",
    name: "Mercedes-Benz",
    focus: "Executive saloons, AMG models, and luxury daily-driver options.",
  },
  {
    slug: "land-rover",
    name: "Range Rover",
    focus: "SUV trims, luxury options, ownership risk, and running costs.",
  },
  {
    slug: "kia",
    name: "Kia",
    focus: "Family SUVs, hybrid choices, warranty appeal, and value trims.",
  },
  {
    slug: "nissan",
    name: "Nissan",
    focus: "Qashqai, crossovers, e-Power models, and practical family cars.",
  },
  {
    slug: "lexus",
    name: "Lexus",
    focus: "Hybrid reliability, premium comfort, and lower-risk ownership.",
  },
  {
    slug: "volkswagen",
    name: "Volkswagen",
    focus: "Golf, hot hatches, family cars, and broad used-market coverage.",
  },
];

/**
 * Beginner note:
 * This page is the first step in the browsing journey.
 * The backend gives us brand data, and this component turns that data into
 * visible brand cards and call-to-action buttons.
 *
 * File flow:
 * HomePage -> useApiResource -> api/client -> backend /api/brands route
 * -> backend brand summaries/data helpers -> JSON response -> BrandCard list
 *
 * Product role:
 * This is the "choose a manufacturer first" screen. If this page fails,
 * users cannot easily enter the rest of the site.
 */
export function HomePage() {
  /**
   * Syntax note:
   * `useApiResource<CarBrand[]>` uses a TypeScript generic.
   * The `<CarBrand[]>` part tells TypeScript:
   * "I expect this request to eventually return an array of CarBrand objects."
   *
   * We then rename `data` to `carBrands` using object destructuring so the rest
   * of the component reads more naturally.
   */
  const {
    data: carBrands,
    errorStatus,
    isLoading,
  } = useApiResource<CarBrand[]>("/api/brands");

  if (isLoading) {
    return (
      <StatusCard
        title="Loading showroom"
        description="The homepage is fetching the latest brand data from the Drive Atlas API."
      />
    );
  }

  if (errorStatus || !carBrands) {
    return (
      <StatusCard
        title="Unable to load brands"
        description="The frontend could not reach the API for the homepage brand list. Check that the backend server is running."
      />
    );
  }

  const brandLookup = new Map(carBrands.map((brand) => [brand.slug, brand]));

  return (
    <div className="space-y-10">
      {/* This hero section explains the app's browsing model before users scroll into the brand list. */}
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/40 px-6 py-10 shadow-[0_25px_90px_rgba(2,6,23,0.35)] sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Official brand explorer"
          title="Cars - Complete Automotive Research Service."
          description="Start at the manufacturer level, move into model ranges, and finish on a focused vehicle detail page with design cues, specifications, recalls, service guidance, and buyer context."
        />
      </section>

      <VehicleSearchPanel />

      <section id="brands" className="scroll-mt-28 space-y-5">
        <SectionHeading
          eyebrow="Popular manufacturers"
          title="Start with the brands most people research first."
          description="Use the search above when you have exact requirements, or jump into a high-demand manufacturer below. More complete brand pages can be added here as the data grows."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {popularBrands.map((popularBrand) => {
            const brand = brandLookup.get(popularBrand.slug);

            if (brand) {
              return (
                <Link
                  key={popularBrand.slug}
                  to={`/${brand.slug}`}
                  className="group flex min-h-52 flex-col justify-between rounded-lg border border-slate-200 bg-white/88 p-5 text-slate-950 shadow-[0_18px_55px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:border-slate-400 hover:bg-white"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Available now
                    </p>
                    <h3 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-2xl">
                      {popularBrand.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {popularBrand.focus}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="text-sm font-semibold text-slate-700">
                      {brand.models.length} model guides
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white transition group-hover:bg-slate-800">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            }

            return (
              <div
                key={popularBrand.slug}
                className="flex min-h-52 flex-col justify-between rounded-lg border border-dashed border-slate-300 bg-white/62 p-5 text-slate-950"
              >
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    Research planned
                  </p>
                  <h3 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-2xl">
                    {popularBrand.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {popularBrand.focus}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-600">
                  <Clock className="h-4 w-4" />
                  <span>Coming soon</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
