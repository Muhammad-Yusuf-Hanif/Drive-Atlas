import { ArrowRight } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'

import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatusCard } from '../components/ui/StatusCard'
import { useApiResource } from '../hooks/useApiResource'
import type { CurrentFamilyPagePayload } from '../types/cars'

export function CurrentFamilyPage() {
  const { brandSlug, familySlug } = useParams()
  const { data, errorStatus, isLoading } = useApiResource<CurrentFamilyPagePayload>(
    `/api/${brandSlug ?? ''}/ranges/${familySlug ?? ''}`,
  )

  if (errorStatus === 404) {
    return <Navigate to="/not-found" replace />
  }

  if (isLoading) {
    return (
      <StatusCard
        title="Loading family"
        description="The family page is fetching current generation coverage from the backend API."
      />
    )
  }

  if (errorStatus || !data) {
    return (
      <StatusCard
        title="Unable to load this family"
        description="The frontend could not retrieve the selected family from the backend. Check that the backend server is running and the route exists."
      />
    )
  }

  const { brand, family } = data
  // Family pages intentionally count nested variants so the user immediately
  // understands how much depth sits behind a single family card.
  const variantCount = family.generations.reduce(
    (total, generation) => total + generation.variants.length,
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
          <div
            className="relative overflow-hidden p-6 text-white sm:p-8"
            style={{ background: family.imageBackground }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_34%)]" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                {brand.name} current family
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
                  Choose the platform first, then drill into the exact trim or engine variant.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Variants</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">{variantCount}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  The family contains everything from the entry cars through to the current halo
                  versions.
                </p>
              </div>
            </div>

            <p className="leading-7 text-slate-600">
              This page is the structured entry point for the current family. It is designed for
              buyers who know the platform or year band before they choose the exact car.
            </p>

            <ButtonLink to={`/${brand.slug}`}>Back to {brand.name}</ButtonLink>
          </div>
        </div>
      </Card>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Choose a platform"
          title={`Current ${family.name} generations`}
          description="Start with the generation or body-code group you actually want. The next page narrows the search to the exact variants inside that platform."
        />

        <div className="grid gap-6">
          {family.generations.map((generation) => (
            <Card key={generation.slug} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Generation</p>
                <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
                  {generation.label}
                </h2>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                  {generation.yearStart} to {generation.yearEnd}
                </p>
                <p className="mt-4 leading-7 text-slate-600">{generation.summary}</p>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Variants</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-950">
                      {generation.variants.length}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      Year span
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-slate-950">
                      {generation.yearEnd - generation.yearStart + 1}
                    </p>
                  </div>
                </div>

                <ButtonLink
                  to={`/${brand.slug}/ranges/${family.slug}/${generation.slug}`}
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
