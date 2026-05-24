import { ArrowRight } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'

import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatusCard } from '../components/ui/StatusCard'
import { useApiResource } from '../hooks/useApiResource'
import type { HistoricalFamilyPagePayload } from '../types/cars'

/**
 * Beginner note:
 * This page is the entry point into the legacy model structure for a family.
 * Example journey:
 * BMW brand page -> choose 3 Series family -> HistoricalFamilyPage ->
 * choose a generation like E90 -> open the generation page ->
 * choose a variant like 320d.
 *
 * File flow:
 * HistoricalFamilyPage -> useParams -> useApiResource ->
 * backend `/api/:brandSlug/families/:familySlug` ->
 * historicalFamilies data -> JSON payload -> generation cards on screen.
 *
 * Product role:
 * This page solves the "I know the car family but need help finding the right
 * platform code and time period" problem.
 */
export function HistoricalFamilyPage() {
  const { brandSlug, familySlug } = useParams()
  const { data, errorStatus, isLoading } = useApiResource<HistoricalFamilyPagePayload>(
    `/api/${brandSlug ?? ''}/families/${familySlug ?? ''}`,
  )

  if (errorStatus === 404) {
    return <Navigate to="/not-found" replace />
  }

  if (isLoading) {
    return (
      <StatusCard
        title="Loading family"
        description="The family page is fetching generation coverage from the backend API."
      />
    )
  }

  if (errorStatus || !data) {
    return (
      <StatusCard
        title="Unable to load this family"
        description="The frontend could not retrieve the selected model family from the backend. Check that the backend server is running and the route exists."
      />
    )
  }

  const { brand, family, coveredLegacyModelSlugs } = data

  /**
   * `reduce` is an array method used to collapse many values into one.
   * Here it walks through every generation, then every phase inside that
   * generation, and finally totals how many variants exist overall.
   *
   * Business reason:
   * This lets the UI show a helpful summary count without manually storing a
   * separate `variantCount` field that could drift out of sync with the data.
   */
  const variantCount = family.generations.reduce(
    (total, generation) =>
      total + generation.phases.reduce((phaseTotal, phase) => phaseTotal + phase.variants.length, 0),
    0,
  )

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: brand.name, to: `/${brand.slug}` },
          { label: family.name },
        ]}
      />

      <Card className="overflow-hidden p-0">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left side: visual identity and context for the family. */}
          <div
            className="relative overflow-hidden p-6 text-white sm:p-8"
            style={{ background: family.imageBackground }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_34%)]" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                {brand.name} family research
              </p>
              <h1 className="font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-4xl tracking-[0.06em]">
                {family.name}
              </h1>
              <p className="max-w-2xl leading-7 text-white/85">{family.description}</p>
              <img
                src={family.image}
                alt={`${brand.name} ${family.name}`}
                className="ml-auto w-full max-w-xl drop-shadow-[0_22px_36px_rgba(2,6,23,0.45)]"
              />
            </div>
          </div>

          {/* Right side: summary metrics that help users decide what to open next. */}
          <div className="space-y-6 p-6 sm:p-8">
            <div className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
              {family.category}
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Generations</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">
                  {family.generations.length}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Start here if you already know the platform code or the year band you want.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Variants</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">{variantCount}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Once you open a generation, you can move into the exact engine or trim variant.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Related current models
                </p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">
                  {coveredLegacyModelSlugs.length}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  These are the current live-model pages in Drive Atlas connected to the same wider
                  family name.
                </p>
              </div>
            </div>

            <p className="leading-7 text-slate-600">
              This page is the family-level index. Choose a generation next, then drill into the
              specific engine or trim variant inside that generation.
            </p>

            <div className="flex flex-wrap gap-3">
              <ButtonLink to={`/${brand.slug}`}>Back to {brand.name}</ButtonLink>
              {coveredLegacyModelSlugs.length ? (
                /**
                 * "Related current-model pages" means:
                 * this legacy family is conceptually linked to newer live model
                 * pages already in the app. It is a hint, not a strict database
                 * relationship like a foreign key.
                 */
                <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Related current-model pages: {coveredLegacyModelSlugs.join(', ')}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Card>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Choose a generation"
          title={`Browse ${family.name} generations`}
          description="Pick the generation first. The next page shows the exact variants covered within that platform, along with engine-family guidance for the era."
        />

        <div className="grid gap-6">
          {family.generations.map((generation) => (
            /**
             * Each card represents one platform/code era.
             * The user does not choose an engine yet; they choose the generation first.
             */
            <Card key={generation.slug} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Generation</p>
                <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
                  {generation.label}
                </h2>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                  {generation.yearStart} to {generation.yearEnd}
                </p>
                {generation.summary ? (
                  <p className="mt-4 leading-7 text-slate-600">{generation.summary}</p>
                ) : null}
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Phases</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-950">
                      {generation.phases.length}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      Engine guides
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-950">
                      {generation.engineGuide?.length ?? 0}
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm leading-6 text-slate-600">
                    Open this generation to see the exact covered variants and then choose the
                    specific car you want to research.
                  </p>
                </div>

                <ButtonLink
                  to={`/${brand.slug}/families/${family.slug}/${generation.slug}`}
                  className="w-full"
                >
                  Open {generation.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
