import { Navigate, useParams } from 'react-router-dom'

import { ModelHero } from '../components/brand/ModelHero'
import { OwnershipInfoCard } from '../components/brand/OwnershipInfoCard'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Card } from '../components/ui/Card'
import { SpecItem } from '../components/ui/SpecItem'
import { StatusCard } from '../components/ui/StatusCard'
import { useApiResource } from '../hooks/useApiResource'
import type { ModelPagePayload } from '../types/cars'

/**
 * This page resolves both the brand and model route params.
 * That keeps the URL as the source of truth for what the user is viewing.
 */
export function ModelPage() {
  const { brandSlug, modelSlug } = useParams()
  const { data, errorStatus, isLoading } = useApiResource<ModelPagePayload>(
    `/api/${brandSlug ?? ''}/${modelSlug ?? ''}`,
  )

  if (errorStatus === 404) {
    return <Navigate to="/not-found" replace />
  }

  if (isLoading) {
    return (
      <StatusCard
        title="Loading model"
        description="The model page is fetching the selected vehicle record from the backend API."
      />
    )
  }

  if (errorStatus || !data) {
    return (
      <StatusCard
        title="Unable to load this model"
        description="The frontend could not retrieve the selected model from the backend. Check that the backend server is running and the route exists."
      />
    )
  }

  const { brand, model } = data

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: brand.name, to: `/${brand.slug}` },
          { label: model.name },
        ]}
      />

      <ModelHero brand={brand} model={model} />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Overview</p>
          <h3 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
            Why this model stands out
          </h3>
          <p className="mt-4 leading-7 text-slate-600">{model.overview}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <SpecItem label="Transmission" value={model.specs.transmission} />
            <SpecItem label="Seats" value={model.specs.seats} />
            <SpecItem label="Fuel type" value={model.specs.fuelType} />
            <SpecItem label="Body style" value={model.specs.bodyStyle} />
          </div>
        </Card>

        <Card className="bg-slate-950 text-white">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Next action</p>
          <h3 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl">
            Continue comparing the {brand.name} range
          </h3>
          <p className="mt-4 leading-7 text-slate-300">
            Use the lineup view to move between different trim personalities and visual
            directions without losing the route context.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to={`/${brand.slug}`} className="bg-white text-slate-950 hover:bg-slate-100">
              Back to {brand.name}
            </ButtonLink>
            <ButtonLink
              to="/"
              variant="secondary"
              className="border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
            >
              Home
            </ButtonLink>
          </div>
        </Card>
      </section>
      {model.ownershipInfo ? <OwnershipInfoCard info={model.ownershipInfo} /> : null}
    </div>
  )
}
