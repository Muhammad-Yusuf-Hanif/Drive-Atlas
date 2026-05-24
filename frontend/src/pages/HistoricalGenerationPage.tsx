import { ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatusCard } from '../components/ui/StatusCard'
import { useApiResource } from '../hooks/useApiResource'
import type { HistoricalGenerationPagePayload } from '../types/cars'

export function HistoricalGenerationPage() {
  const { brandSlug, familySlug, generationSlug } = useParams()
  const { data, errorStatus, isLoading } = useApiResource<HistoricalGenerationPagePayload>(
    `/api/${brandSlug ?? ''}/families/${familySlug ?? ''}/${generationSlug ?? ''}`,
  )

  if (errorStatus === 404) {
    return <Navigate to="/not-found" replace />
  }

  if (isLoading) {
    return (
      <StatusCard
        title="Loading generation"
        description="The generation page is fetching engine guidance and covered variants from the backend API."
      />
    )
  }

  if (errorStatus || !data) {
    return (
      <StatusCard
        title="Unable to load this generation"
        description="The frontend could not retrieve the selected generation from the backend. Check that the backend server is running and the route exists."
      />
    )
  }

  const { brand, family, generation, variants } = data

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: brand.name, to: `/${brand.slug}` },
          { label: family.name, to: `/${brand.slug}/families/${family.slug}` },
          { label: generation.label },
        ]}
      />

      <Card className="overflow-hidden p-0">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div
            className="relative overflow-hidden p-6 text-white sm:p-8"
            style={{ background: family.imageBackground }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_34%)]" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                {family.name} generation
              </p>
              <h1 className="font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-4xl tracking-[0.06em]">
                {generation.label}
              </h1>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
                {generation.yearStart} to {generation.yearEnd}
              </p>
              {generation.summary ? (
                <p className="max-w-2xl leading-7 text-white/85">{generation.summary}</p>
              ) : null}
            </div>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Variants</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950">{variants.length}</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Engine guides</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950">
                  {generation.engineGuide?.length ?? 0}
                </p>
              </div>
            </div>

            <p className="leading-7 text-slate-600">
              This page is the generation-level hub. Choose the exact variant below, then review
              phase-specific detail if the model changed through the lifecycle.
            </p>

            <div className="flex flex-wrap gap-3">
              <ButtonLink to={`/${brand.slug}/families/${family.slug}`}>
                Back to {family.name}
              </ButtonLink>
              <ButtonLink to={`/${brand.slug}`} variant="secondary">
                {brand.name}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Card>

      {generation.engineGuide?.length ? (
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Engine guide"
            title={`${generation.label} engine families`}
            description="This section explains the broader engine landscape for the generation before you choose a specific variant."
          />

          <div className="grid gap-4 xl:grid-cols-2">
            {generation.engineGuide.map((engine) => (
              <Card key={engine.slug} className="space-y-4">
                {/* This is generation-wide context, not a specific car record.
                    It helps a buyer understand the whole engine landscape before
                    drilling into one exact historical variant. */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      {engine.fuelType}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950">{engine.name}</h3>
                  </div>
                  <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                    {engine.years}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Typical outputs
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    {engine.outputs.map((output) => (
                      <li key={output}>{output}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm leading-6 text-slate-600">{engine.positioning}</p>
                <p className="text-sm leading-6 text-slate-600">{engine.character}</p>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800">
                    Strengths
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    {engine.strengths.map((strength) => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
                    Watchouts
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    {engine.watchouts.map((watchout) => (
                      <li key={watchout}>{watchout}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Best for</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{engine.buyerFit}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Choose a variant"
          title={`Variants within ${generation.label}`}
          description="These cards represent the specific engine or trim variants covered for this generation. Open one to view the detailed phase records."
        />

        <div className="grid gap-6">
          {variants.map((variant) => (
            <Link
              key={variant.slug}
              to={`/${brand.slug}/families/${family.slug}/${generation.slug}/${variant.slug}`}
              className="group block"
            >
              <Card className="overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
                <div className="grid lg:grid-cols-[1fr_1fr]">
                  <div
                    className="relative min-h-64 overflow-hidden border-b border-white/30 p-6 text-white lg:border-b-0 lg:border-r sm:p-8"
                    style={{ background: variant.imageBackground }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.22),_transparent_34%)]" />
                    <img
                      src={variant.image}
                      alt={`${brand.name} ${variant.name}`}
                      className="relative ml-auto w-full max-w-xl drop-shadow-[0_22px_36px_rgba(2,6,23,0.4)] transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="space-y-5 p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                          {generation.label}
                        </p>
                        <h2 className="mt-2 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
                          {variant.name}
                        </h2>
                      </div>

                      <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-950">
                        {variant.category}
                      </div>
                    </div>

                    <p className="leading-7 text-slate-600">{variant.shortDescription}</p>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Power</p>
                        <p className="mt-3 text-lg font-semibold text-slate-950">
                          {variant.specs.power}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">0-60</p>
                        <p className="mt-3 text-lg font-semibold text-slate-950">
                          {variant.specs.zeroToSixty}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Phases</p>
                        <p className="mt-3 text-lg font-semibold text-slate-950">
                          {variant.phases.length}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-slate-800">
                      Open {variant.name}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
