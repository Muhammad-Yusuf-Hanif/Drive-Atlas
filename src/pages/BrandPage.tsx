import { Navigate, useParams } from 'react-router-dom'

import { ModelCard } from '../components/brand/ModelCard'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { SectionHeading } from '../components/ui/SectionHeading'
import { getBrandBySlug } from '../data/carBrands'

/**
 * The brand page resolves the URL parameter into the matching brand dataset.
 * If the brand does not exist we send the user to the not found experience.
 */
export function BrandPage() {
  const { brandSlug } = useParams()
  const brand = getBrandBySlug(brandSlug)

  if (!brand) {
    return <Navigate to="/not-found" replace />
  }

  return (
    <div className="space-y-10">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: brand.name }]} />

      <section className="rounded-[2rem] border border-white/10 bg-slate-950/40 px-6 py-10 shadow-[0_25px_90px_rgba(2,6,23,0.35)] sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={`${brand.name} range`}
          title={`${brand.name} model lineup`}
          description={`${brand.description} Explore the current showcase below to compare design language, performance, and available colour palettes.`}
          actions={<ButtonLink to="/">Back to brands</ButtonLink>}
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

      <section className="grid gap-6">
        {brand.models.map((model) => (
          <ModelCard key={model.slug} brand={brand} model={model} />
        ))}
      </section>
    </div>
  )
}
