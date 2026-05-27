import { VehicleSearchPanel } from "../components/search/VehicleSearchPanel";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StatusCard } from "../components/ui/StatusCard";
import { useApiResource } from "../hooks/useApiResource";
import type { CarBrand } from "../types/cars";
import { ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const heroVideoSrc = "/media/premium-pov-driving.mp4";

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
  const [showHeroVideo, setShowHeroVideo] = useState(true);
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
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/20 bg-slate-950 px-4 py-8 shadow-[0_28px_95px_rgba(2,6,23,0.38)] sm:px-6 sm:py-10 lg:px-8">
        {showHeroVideo ? (
          <video
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            src={heroVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setShowHeroVideo(false)}
          />
        ) : null}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,_rgba(2,6,23,0.92)_0%,_rgba(15,23,42,0.76)_46%,_rgba(15,23,42,0.44)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.22),_transparent_34%)]" />

        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <SectionHeading
            eyebrow="Premium car research"
            title="Find the right car by requirement, not guesswork."
            description="Search by body style, engine, drivetrain, seats, and required equipment. Results only show vehicles that match the filters you choose."
          />

          <VehicleSearchPanel />
        </div>
      </section>

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
