import { Navigate, useParams } from 'react-router-dom'

import { OwnershipInfoCard } from '../components/brand/OwnershipInfoCard'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Card } from '../components/ui/Card'
import { PageSkeleton } from '../components/ui/PageSkeleton'
import { SpecItem } from '../components/ui/SpecItem'
import { StatusCard } from '../components/ui/StatusCard'
import { useApiResource } from '../hooks/useApiResource'
import type { HistoricalVariantPagePayload } from '../types/cars'

export function HistoricalVariantPage() {
  const { brandSlug, familySlug, generationSlug, variantSlug } = useParams()
  const { data, errorStatus, isLoading } = useApiResource<HistoricalVariantPagePayload>(
    `/api/${brandSlug ?? ''}/families/${familySlug ?? ''}/${generationSlug ?? ''}/${variantSlug ?? ''}`,
  )

  if (errorStatus === 404) {
    return <Navigate to="/not-found" replace />
  }

  if (isLoading) {
    return <PageSkeleton title="Loading variant" rows={3} />
  }

  if (errorStatus || !data) {
    return (
      <StatusCard
        title="Unable to load this variant"
        description="The frontend could not retrieve the selected historical variant from the backend. Check that the backend server is running and the route exists."
      />
    )
  }

  const { brand, family, generation, variant } = data

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: brand.name, to: `/${brand.slug}` },
          { label: family.name, to: `/${brand.slug}/families/${family.slug}` },
          {
            label: generation.label,
            to: `/${brand.slug}/families/${family.slug}/${generation.slug}`,
          },
          { label: variant.name },
        ]}
      />

      <Card className="overflow-hidden p-0">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div
            className="relative overflow-hidden p-6 text-white sm:p-8"
            style={{ background: variant.imageBackground }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_34%)]" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                {family.name} variant
              </p>
              <h1 className="font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-4xl tracking-[0.06em]">
                {variant.name}
              </h1>
              <p className="max-w-2xl leading-7 text-white/85">{variant.longDescription}</p>
              <img
                src={variant.image}
                alt={`${brand.name} ${variant.name}`}
                className="ml-auto w-full max-w-xl drop-shadow-[0_22px_36px_rgba(2,6,23,0.45)]"
              />
            </div>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            <div className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
              {variant.category}
            </div>
            <p className="leading-7 text-slate-600">{variant.shortDescription}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              <SpecItem label="Generation" value={generation.label} />
              <SpecItem label="Power" value={variant.specs.power} />
              <SpecItem label="0-60 mph" value={variant.specs.zeroToSixty} />
              <SpecItem label="Drivetrain" value={variant.specs.drivetrain} />
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink to={`/${brand.slug}/families/${family.slug}/${generation.slug}`}>
                Back to {generation.label}
              </ButtonLink>
              <ButtonLink to={`/${brand.slug}`} variant="secondary">
                {brand.name}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Card>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Overview</p>
          <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
            Why this variant matters in the {generation.label} range
          </h2>
          <p className="mt-4 leading-7 text-slate-600">{variant.overview}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <SpecItem label="Transmission" value={variant.specs.transmission} />
            <SpecItem label="Seats" value={variant.specs.seats} />
            <SpecItem label="Fuel type" value={variant.specs.fuelType} />
            <SpecItem label="Body style" value={variant.specs.bodyStyle} />
          </div>
        </Card>

        <Card className="bg-slate-950 text-white">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Design focus</p>
          <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl">
            How this version fits the generation
          </h2>
          <p className="mt-4 leading-7 text-slate-300">{variant.designStory}</p>
          <p className="mt-4 leading-7 text-slate-300">
            This page groups all covered phase records for the same variant under one generation-led
            route so you do not have to guess the platform structure first.
          </p>
        </Card>
      </section>

      <section className="space-y-6">
        <Card>
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Phase coverage</p>
          <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
            Covered versions inside {generation.label}
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Some variants appear in more than one phase. The cards below separate the covered
            pre-facelift and facelift records where that matters.
          </p>
        </Card>

        {variant.phases.map((phaseItem) => (
          <div key={phaseItem.slug} className="space-y-6">
            <Card className="space-y-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    {phaseItem.label}
                  </p>
                  <h3 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
                    {phaseItem.variant.name}
                  </h3>
                </div>
                <div className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                  {phaseItem.yearLabel}
                </div>
              </div>

              <p className="leading-7 text-slate-600">{phaseItem.variant.longDescription}</p>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <SpecItem label="Power" value={phaseItem.variant.specs.power} />
                <SpecItem label="0-60 mph" value={phaseItem.variant.specs.zeroToSixty} />
                <SpecItem label="Top speed" value={phaseItem.variant.specs.topSpeed} />
                <SpecItem label="Drivetrain" value={phaseItem.variant.specs.drivetrain} />
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Design story</p>
                <p className="mt-3 leading-7 text-slate-600">{phaseItem.variant.designStory}</p>
              </div>
            </Card>

            {phaseItem.variant.ownershipInfo ? (
              <OwnershipInfoCard info={phaseItem.variant.ownershipInfo} />
            ) : null}
          </div>
        ))}
      </section>
    </div>
  )
}
