import { BrandCard } from '../components/brand/BrandCard'
import { ButtonLink } from '../components/ui/ButtonLink'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatusCard } from '../components/ui/StatusCard'
import { useApiResource } from '../hooks/useApiResource'
import type { CarBrand } from '../types/cars'

/**
 * The homepage intentionally matches the requested interaction:
 * a column of two cards for Audi and BMW that leads into each brand.
 */
export function HomePage() {
  const { data: carBrands, errorStatus, isLoading } = useApiResource<CarBrand[]>('/api/brands')

  if (isLoading) {
    return (
      <StatusCard
        title="Loading showroom"
        description="The homepage is fetching the latest brand data from the Drive Atlas API."
      />
    )
  }

  if (errorStatus || !carBrands) {
    return (
      <StatusCard
        title="Unable to load brands"
        description="The frontend could not reach the API for the homepage brand list. Check that the backend server is running."
      />
    )
  }

  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/40 px-6 py-10 shadow-[0_25px_90px_rgba(2,6,23,0.35)] sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Official brand explorer"
          title="Compare the lines, colours, and performance signatures of German icons."
          description="Start at the manufacturer level, move into model ranges, and finish on a focused vehicle detail page with visual design cues and headline specifications."
          actions={
            <>
              {carBrands[0] ? (
                <ButtonLink to={`/${carBrands[0].slug}`}>Browse {carBrands[0].name}</ButtonLink>
              ) : null}
              {carBrands[1] ? (
                <ButtonLink to={`/${carBrands[1].slug}`} variant="secondary">
                  Browse {carBrands[1].name}
                </ButtonLink>
              ) : null}
            </>
          }
        />
      </section>

      <section id="brands" className="grid gap-6 scroll-mt-28">
        {carBrands.map((brand) => (
          <BrandCard key={brand.slug} brand={brand} />
        ))}
      </section>
    </div>
  )
}
