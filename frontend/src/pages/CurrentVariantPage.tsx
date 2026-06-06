import { Navigate, useParams } from 'react-router-dom'

import { ModelHero } from '../components/brand/ModelHero'
import { StickyBackHome } from '../components/navigation/StickyBackHome'
import { OwnershipInfoCard } from '../components/brand/OwnershipInfoCard'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { Card } from '../components/ui/Card'
import { PageSkeleton } from '../components/ui/PageSkeleton'
import { SpecItem } from '../components/ui/SpecItem'
import { StatusCard } from '../components/ui/StatusCard'
import { useApiResource } from '../hooks/useApiResource'
import type { CurrentVariantPagePayload } from '../types/cars'

export function CurrentVariantPage() {
  const { brandSlug, familySlug, generationSlug, variantSlug } = useParams()
  const { data, errorStatus, isLoading } = useApiResource<CurrentVariantPagePayload>(
    `/api/${brandSlug ?? ''}/ranges/${familySlug ?? ''}/${generationSlug ?? ''}/${variantSlug ?? ''}`,
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
        description="The frontend could not retrieve the selected current variant from the backend. Check that the backend server is running and the route exists."
      />
    )
  }

  const { brand, family, generation, variant } = data

  return (
    <div className="space-y-10">
      <StickyBackHome fallbackTo={`/${brand.slug}/ranges/${family.slug}`} />

      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: brand.name, to: `/${brand.slug}` },
          { label: family.name, to: `/${brand.slug}/ranges/${family.slug}` },
          {
            label: generation.label,
            to: `/${brand.slug}/ranges/${family.slug}/${generation.slug}`,
          },
          { label: variant.name },
        ]}
      />

      {/* Reusing ModelHero keeps current direct-model pages and current
          family-browser pages visually consistent on the detail step. */}
      <ModelHero brand={brand} model={variant} />

      <section>
        <Card>
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Platform context</p>
          <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
            Key information for this variant
          </h2>
          <p className="mt-4 leading-7 text-slate-600">{variant.overview}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <SpecItem label="Family" value={family.name} />
            <SpecItem label="Generation" value={generation.label} />
            <SpecItem label="Years" value={`${generation.yearStart} to ${generation.yearEnd}`} />
            <SpecItem label="Body style" value={variant.specs.bodyStyle} />
            {variant.productionYears ? (
              <SpecItem label="Production" value={variant.productionYears} />
            ) : null}
            {variant.specs.engineCode ? (
              <SpecItem label="Engine code" value={variant.specs.engineCode} />
            ) : null}
            <SpecItem label="Drive layout" value={variant.specs.drivetrain} />
            <SpecItem label="Horsepower" value={variant.specs.power} />
            <SpecItem label="Fuel" value={variant.specs.fuelType} />
            <SpecItem label="Transmission" value={variant.specs.transmission} />
            <SpecItem label="0-60 mph" value={variant.specs.zeroToSixty} />
            <SpecItem label="Top speed" value={variant.specs.topSpeed} />
          </div>
        </Card>
      </section>

      {variant.accuracy ? (
        <Card>
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Trust and sources</p>
          <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
            Accuracy status
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <SpecItem label="Market" value={variant.accuracy.market} />
            <SpecItem label="Status" value={variant.accuracy.status} />
            <SpecItem label="Source type" value={variant.accuracy.sourceType} />
          </div>

          {variant.accuracy.notes ? (
            <p className="mt-5 leading-7 text-slate-600">{variant.accuracy.notes}</p>
          ) : null}

          {variant.accuracy.sources?.length ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {variant.accuracy.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:bg-white"
                >
                  {source.label}
                </a>
              ))}
            </div>
          ) : null}
        </Card>
      ) : null}

      {variant.specialEditions?.length ? (
        <Card>
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
            Related special editions
          </p>
          <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
            Edition variants of {variant.name}
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            These are edition branches of the same core model, not separate normal trim tiles.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {variant.specialEditions.map((edition) => (
              <div key={edition.name} className="rounded-xl border border-slate-200 bg-white/82 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                  {edition.years}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">{edition.name}</h3>
                <p className="mt-3 leading-7 text-slate-600">{edition.summary}</p>
                <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                  {edition.distinguishingFeatures.map((feature) => (
                    <li key={feature} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      ) : null}

      {/* Not every variant has deep ownership data yet, so this section stays
          optional instead of forcing empty placeholder content. */}
      {variant.ownershipInfo ? <OwnershipInfoCard info={variant.ownershipInfo} /> : null}
    </div>
  )
}
