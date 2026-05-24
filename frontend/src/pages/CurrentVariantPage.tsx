import { Navigate, useParams } from 'react-router-dom'

import { ModelHero } from '../components/brand/ModelHero'
import { OwnershipInfoCard } from '../components/brand/OwnershipInfoCard'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Card } from '../components/ui/Card'
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
    return (
      <StatusCard
        title="Loading variant"
        description="The current variant page is fetching the selected vehicle record from the backend API."
      />
    )
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

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Platform context</p>
          <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
            Where this car sits in the current family
          </h2>
          <p className="mt-4 leading-7 text-slate-600">{variant.overview}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <SpecItem label="Family" value={family.name} />
            <SpecItem label="Generation" value={generation.label} />
            <SpecItem label="Years" value={`${generation.yearStart} to ${generation.yearEnd}`} />
            <SpecItem label="Body style" value={variant.specs.bodyStyle} />
          </div>
        </Card>

        <Card className="bg-slate-950 text-white">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Next action</p>
          <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl">
            Continue comparing the {generation.label} lineup
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Move back to the generation page to compare this car against the calmer or more extreme
            variants that sit around it in the same platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              to={`/${brand.slug}/ranges/${family.slug}/${generation.slug}`}
              className="bg-white text-slate-950 hover:bg-slate-100"
            >
              Back to {generation.label}
            </ButtonLink>
            <ButtonLink
              to={`/${brand.slug}/ranges/${family.slug}`}
              variant="secondary"
              className="border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
            >
              {family.name}
            </ButtonLink>
          </div>
        </Card>
      </section>

      {/* Not every variant has deep ownership data yet, so this section stays
          optional instead of forcing empty placeholder content. */}
      {variant.ownershipInfo ? <OwnershipInfoCard info={variant.ownershipInfo} /> : null}
    </div>
  )
}
