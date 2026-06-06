import { ArrowRight, Clock } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { ModelCard } from '../components/brand/ModelCard'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Card } from '../components/ui/Card'
import { PageSkeleton } from '../components/ui/PageSkeleton'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatusCard } from '../components/ui/StatusCard'
import { useApiResource } from '../hooks/useApiResource'
import type { CarBrand } from '../types/cars'

const bmwSeriesDirectory = [
  {
    slug: '1-series',
    name: '1 Series',
    summary: 'Premium compact hatchback variants such as 116i, 116d, 118i, and 118d.',
  },
  {
    slug: '2-series',
    name: '2 Series',
    summary: 'Compact coupe and Gran Coupe choices, from efficient 218i models to M240i.',
  },
  {
    slug: '3-series',
    name: '3 Series',
    summary: 'Compact executive saloons, Touring models, plug-in hybrids, M340i, and M3.',
  },
  {
    slug: '4-series',
    name: '4 Series',
    summary: 'Coupe, Convertible, Gran Coupe, and M4 coverage will sit here later.',
  },
  {
    slug: '5-series',
    name: '5 Series',
    summary: 'Executive saloons, Touring models, plug-in hybrids, and M5 research planned.',
  },
  {
    slug: '6-series',
    name: '6 Series',
    summary: 'Grand touring and Gran Turismo model history will be added later.',
  },
  {
    slug: '7-series',
    name: '7 Series',
    summary: 'Luxury saloons, long-wheelbase models, hybrid variants, and ownership context.',
  },
  {
    slug: '8-series',
    name: '8 Series',
    summary: 'Luxury coupe, convertible, Gran Coupe, and M8 model research planned.',
  },
]

/**
 * The brand page resolves the URL parameter into the matching brand dataset.
 * If the brand does not exist we send the user to the not found experience.
 */
export function BrandPage() {
  const { brandSlug } = useParams()
  const { data: brand, errorStatus, isLoading } = useApiResource<CarBrand>(
    `/api/${brandSlug ?? ''}`,
  )

  if (errorStatus === 404) {
    return <Navigate to="/not-found" replace />
  }

  if (isLoading) {
    return <PageSkeleton title="Loading brand" />
  }

  if (errorStatus || !brand) {
    return (
      <StatusCard
        title="Unable to load this brand"
        description="The frontend could not retrieve the selected brand from the backend. Check that the backend server is running and the route exists."
      />
    )
  }

  if (brand.slug === 'bmw') {
    return <BmwBrandPage brand={brand} />
  }

  const featuredCurrentFamily = brand.currentFamilies?.[0]
  const featuredHistoricalFamily = brand.historicalFamilies?.[0]
  // The first family acts as the featured entry point for now.
  // If a brand gains multiple major families later, this page can evolve into
  // a richer "directory" without changing the route structure again.

  return (
    <div className="space-y-10">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: brand.name }]} />

      <section className="rounded-[2rem] border border-white/10 bg-slate-950/40 px-6 py-10 shadow-[0_25px_90px_rgba(2,6,23,0.35)] sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={`${brand.name} range`}
          title={`${brand.name} model lineup`}
          description={`${brand.description} Explore the current showcase below to compare design language, performance, and available colour palettes.`}
          actions={
            <>
              {featuredCurrentFamily ? (
                <ButtonLink to={`/${brand.slug}/ranges/${featuredCurrentFamily.slug}`}>
                  Browse {featuredCurrentFamily.name}
                </ButtonLink>
              ) : null}
              {featuredHistoricalFamily ? (
                <ButtonLink
                  to={`/${brand.slug}/families/${featuredHistoricalFamily.slug}`}
                  variant="secondary"
                  className="border-amber-300/60 bg-amber-100 text-amber-950 hover:border-amber-400 hover:bg-amber-50"
                >
                  Older generations
                </ButtonLink>
              ) : null}
              {!featuredCurrentFamily ? <ButtonLink to="/">Back to brands</ButtonLink> : null}
            </>
          }
        />

        <div className="mt-8 grid gap-4 text-white sm:grid-cols-3">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Signature</p>
            <p className="mt-3 text-lg font-semibold">{brand.signature}</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Models</p>
            <p className="mt-3 text-lg font-semibold">{brand.models.length}</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Shared colours</p>
            <p className="mt-3 text-lg font-semibold">{brand.availableColours.join(', ')}</p>
          </div>
        </div>
      </section>

      {featuredCurrentFamily ? (
        <Card className="border-blue-200 bg-blue-50">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.32em] text-blue-700">
                Current BMWs are now grouped by family
              </p>
              <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
                Start with the family, then the generation, then the exact variant
              </h2>
              <p className="mt-4 leading-7 text-slate-700">
                The current browsing flow now matches a real car-shopping journey. Choose the
                wider {featuredCurrentFamily.name} family first, then the platform code, then the
                exact car such as 320i, 330i, M340i, or M3 CS.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink
                to={`/${brand.slug}/ranges/${featuredCurrentFamily.slug}`}
                className="!bg-blue-600 hover:!bg-blue-500"
              >
                Open {featuredCurrentFamily.name}
              </ButtonLink>
              <div className="rounded-full border border-blue-200 bg-white px-4 py-3 text-sm text-slate-700">
                Tip: current cars are no longer hidden in a flat model list.
              </div>
            </div>
          </div>
        </Card>
      ) : null}

      {featuredHistoricalFamily ? (
        <Card className="border-amber-200 bg-amber-50">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.32em] text-amber-700">
                Looking for older {brand.name} generations?
              </p>
              <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
                Legacy research is available here too
              </h2>
              <p className="mt-4 leading-7 text-slate-700">
                Use the family browser to open the {featuredHistoricalFamily.name} range, choose a
                generation first, and then move into the exact variant inside that platform.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink
                to={`/${brand.slug}/families/${featuredHistoricalFamily.slug}`}
                className="!bg-amber-500 !text-slate-950 hover:!bg-amber-400"
              >
                Browse {featuredHistoricalFamily.name} by generation
              </ButtonLink>
              <div className="rounded-full border border-amber-200 bg-white px-4 py-3 text-sm text-slate-700">
                Tip: start with the family, then choose the generation, then the exact variant.
              </div>
            </div>
          </div>
        </Card>
      ) : null}

      {brand.currentFamilies?.length ? (
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Current families"
            title={`${brand.name} current range by family`}
            description="Use a structured family view instead of scanning a broad model grid. This is the pattern that can be applied to other brands as their data is expanded."
          />

          <div className="grid gap-6">
            {brand.currentFamilies.map((family) => (
              <Card key={family.slug} className="overflow-hidden p-0">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <div
                    className="relative overflow-hidden p-6 text-white sm:p-8"
                    style={{ background: family.imageBackground }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_34%)]" />
                    <div className="relative space-y-4">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                        Current family
                      </p>
                      <h2 className="font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-4xl tracking-[0.06em]">
                        {family.name}
                      </h2>
                      <p className="max-w-2xl leading-7 text-white/85">{family.description}</p>
                      <img
                        src={family.image}
                        alt={`${brand.name} ${family.name}`}
                        className="ml-auto w-full max-w-xl drop-shadow-[0_22px_36px_rgba(2,6,23,0.45)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-6 p-6 sm:p-8">
                    <div>
                      <div className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                        {family.category}
                      </div>
                      <p className="mt-4 leading-7 text-slate-600">
                        Start at the family level, then narrow down by generation and exact variant.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                          Generations
                        </p>
                        <p className="mt-3 text-3xl font-semibold text-slate-950">
                          {family.generationCount}
                        </p>
                      </div>
                      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                          Variants
                        </p>
                        <p className="mt-3 text-3xl font-semibold text-slate-950">
                          {family.variantCount}
                        </p>
                      </div>
                    </div>

                    <ButtonLink to={`/${brand.slug}/ranges/${family.slug}`}>
                      Explore {family.name}
                    </ButtonLink>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ) : (
        // Brands that are not migrated yet still fall back to the older flat
        // model grid so we can evolve the project incrementally.
        <section className="grid gap-6">
          {brand.models.map((model) => (
            <ModelCard key={model.slug} brand={brand} model={model} />
          ))}
        </section>
      )}

      {brand.historicalFamilies?.length ? (
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Historical research"
            title={`${brand.name} families and older generations`}
            description="Browse family-level history, pick a generation first, and then drill into the exact engine or trim variant inside that platform."
          />

          <div className="grid gap-6">
            {brand.historicalFamilies.map((family) => (
              <Card key={family.slug} className="overflow-hidden p-0">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <div
                    className="relative overflow-hidden p-6 text-white sm:p-8"
                    style={{ background: family.imageBackground }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_34%)]" />
                    <div className="relative space-y-4">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                        Legacy family
                      </p>
                      <h2 className="font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-4xl tracking-[0.06em]">
                        {family.name}
                      </h2>
                      <p className="max-w-2xl leading-7 text-white/85">{family.description}</p>
                      <img
                        src={family.image}
                        alt={`${brand.name} ${family.name}`}
                        className="ml-auto w-full max-w-xl drop-shadow-[0_22px_36px_rgba(2,6,23,0.45)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-6 p-6 sm:p-8">
                    <div>
                      <div className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                        {family.category}
                      </div>
                      <p className="mt-4 leading-7 text-slate-600">
                        Use a generation-led journey that mirrors how most buyers actually shop:
                        family first, platform second, exact variant third.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                          Generations
                        </p>
                        <p className="mt-3 text-3xl font-semibold text-slate-950">
                          {family.generationCount}
                        </p>
                      </div>
                      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                        <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                          Phases
                        </p>
                        <p className="mt-3 text-3xl font-semibold text-slate-950">
                          {family.phaseCount}
                        </p>
                      </div>
                    </div>

                    <ButtonLink to={`/${brand.slug}/families/${family.slug}`}>
                      Explore {family.name}
                    </ButtonLink>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}

type BmwBrandPageProps = {
  brand: CarBrand
}

function BmwBrandPage({ brand }: BmwBrandPageProps) {
  const familyLookup = new Map(
    brand.currentFamilies?.map((family) => [family.slug, family]) ?? [],
  )
  const availableSeriesCount = bmwSeriesDirectory.filter((series) =>
    familyLookup.has(series.slug),
  ).length

  return (
    <div className="space-y-10">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: brand.name }]} />

      <section className="rounded-[2rem] border border-white/10 bg-slate-950/62 px-6 py-10 shadow-[0_25px_90px_rgba(2,6,23,0.35)] sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="BMW model range"
          title="Choose the BMW series first."
          description="Start with the numbered model line, then move into the exact generation and variant. This keeps the brand page clean and pushes detailed choices into the relevant series page."
        />

        <div className="mt-8 grid gap-4 text-white sm:grid-cols-3">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Available now</p>
            <p className="mt-3 text-lg font-semibold">{availableSeriesCount} series</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Template order</p>
            <p className="mt-3 text-lg font-semibold">1 Series to 8 Series</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Later expansion</p>
            <p className="mt-3 text-lg font-semibold">BMW X and ALPINA</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Numbered series"
          title="BMW cars in numerical order."
          description="The brand page should work like a directory. Exact engines and trims belong inside each series page, not as shortcut buttons at the top."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bmwSeriesDirectory.map((series) => {
            const family = familyLookup.get(series.slug)

            if (family) {
              return (
                <Link
                  key={series.slug}
                  to={`/${brand.slug}/ranges/${family.slug}`}
                  className="group flex min-h-56 flex-col justify-between rounded-lg border border-slate-200 bg-white/90 p-5 text-slate-950 shadow-[0_18px_55px_rgba(15,23,42,0.14)] transition hover:-translate-y-1 hover:border-slate-400 hover:bg-white"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Available now
                    </p>
                    <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl">
                      {series.name}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{series.summary}</p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="text-sm font-semibold text-slate-700">
                      {family.variantCount} variants
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white transition group-hover:bg-slate-800">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              )
            }

            return (
              <div
                key={series.slug}
                className="flex min-h-56 flex-col justify-between rounded-lg border border-dashed border-slate-300 bg-white/62 p-5 text-slate-950"
              >
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    Research planned
                  </p>
                  <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl">
                    {series.name}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{series.summary}</p>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-600">
                  <Clock className="h-4 w-4" />
                  <span>Coming soon</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeading
          eyebrow="Future specialist coverage"
          title="BMW x ALPINA will sit below the numbered cars."
          description="ALPINA models need their own treatment, so they are intentionally separated from the core 1 Series to 8 Series directory."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-dashed border-slate-300 bg-white/62 p-5 text-slate-950">
            <p className="text-xs font-semibold uppercase text-slate-500">Coming soon</p>
            <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl">
              BMW x ALPINA
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              This will be added after the numbered model pages are stable as reusable templates.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
