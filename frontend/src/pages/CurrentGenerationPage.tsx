import { ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Card } from '../components/ui/Card'
import { PageSkeleton } from '../components/ui/PageSkeleton'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatusCard } from '../components/ui/StatusCard'
import { useApiResource } from '../hooks/useApiResource'
import type { CurrentGenerationPagePayload } from '../types/cars'

export function CurrentGenerationPage() {
  const { brandSlug, familySlug, generationSlug } = useParams()
  const { data, errorStatus, isLoading } = useApiResource<CurrentGenerationPagePayload>(
    `/api/${brandSlug ?? ''}/ranges/${familySlug ?? ''}/${generationSlug ?? ''}`,
  )

  if (errorStatus === 404) {
    return <Navigate to="/not-found" replace />
  }

  if (isLoading) {
    return <PageSkeleton title="Loading generation" />
  }

  if (errorStatus || !data) {
    return (
      <StatusCard
        title="Unable to load this generation"
        description="The frontend could not retrieve the selected generation from the backend. Check that the backend server is running and the route exists."
      />
    )
  }

  const { brand, family, generation } = data

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: brand.name, to: `/${brand.slug}` },
          { label: family.name, to: `/${brand.slug}/ranges/${family.slug}` },
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
              <p className="max-w-2xl leading-7 text-white/85">{generation.summary}</p>
            </div>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Covered variants</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">
                {generation.variants.length}
              </p>
            </div>

            <p className="leading-7 text-slate-600">
              This page is the practical shopping step. You already know the platform, so the next
              choice is the exact engine or trim variant.
            </p>

            <div className="flex flex-wrap gap-3">
              <ButtonLink to={`/${brand.slug}/ranges/${family.slug}`}>
                Back to {family.name}
              </ButtonLink>
              <ButtonLink to={`/${brand.slug}`} variant="secondary">
                {brand.name}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Card>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Choose a variant"
          title={`Variants within ${generation.label}`}
          description="These cards represent the exact current cars available inside this platform, from the calmer entry variants through to the range-topping models."
        />

        <div className="grid gap-6">
          {generation.variants.map((variant) => (
            <Link
              key={variant.slug}
              to={`/${brand.slug}/ranges/${family.slug}/${generation.slug}/${variant.slug}`}
              className="group block"
            >
              {/* These cards are effectively the "variant ladder" for a given
                  platform. They are intentionally visual rather than a dropdown
                  because browsing cars is easier when the options stay visible. */}
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
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Drive</p>
                        <p className="mt-3 text-lg font-semibold text-slate-950">
                          {variant.specs.drivetrain}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                          Engine
                        </p>
                        <p className="mt-3 text-lg font-semibold text-slate-950">
                          {variant.specs.engineCode ?? variant.specs.fuelType}
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
