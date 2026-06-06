import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Card } from '../components/ui/Card'
import { PageSkeleton } from '../components/ui/PageSkeleton'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatusCard } from '../components/ui/StatusCard'
import { useApiResource } from '../hooks/useApiResource'
import type { CurrentFamilyPagePayload, CurrentVariant } from '../types/cars'

export function CurrentFamilyPage() {
  const { brandSlug, familySlug } = useParams()
  const [openGenerationSlug, setOpenGenerationSlug] = useState<string | null | undefined>()
  const { data, errorStatus, isLoading } = useApiResource<CurrentFamilyPagePayload>(
    `/api/${brandSlug ?? ''}/ranges/${familySlug ?? ''}`,
  )

  if (errorStatus === 404) {
    return <Navigate to="/not-found" replace />
  }

  if (isLoading) {
    return <PageSkeleton title="Loading family" />
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
  const useGenerationDropdowns =
    brand.slug === 'bmw' && ['1-series', '2-series', '3-series'].includes(family.slug)
  const defaultOpenGenerationSlug = useGenerationDropdowns
    ? family.generations[family.generations.length - 1]?.slug
    : undefined
  const selectedGenerationSlug =
    openGenerationSlug === undefined ? defaultOpenGenerationSlug : openGenerationSlug

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
          eyebrow="Choose a variant"
          title={`${family.name} variants by generation`}
          description="Pick the exact engine or trim first. Generation context stays visible here, but the user can go straight to the variant they are researching."
        />

        <div className="grid gap-6">
          {family.generations.map((generation) => (
            <Card key={generation.slug} className="space-y-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
                    Generation
                  </p>
                  <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
                    {generation.label}
                  </h2>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                    {generation.yearStart} to {generation.yearEnd}
                  </p>
                  <p className="mt-4 leading-7 text-slate-600">{generation.summary}</p>
                </div>

                <div className="grid w-full max-w-sm grid-cols-2 gap-4">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      Variants
                    </p>
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
              </div>

              {useGenerationDropdowns ? (
                <GenerationDropdownContent
                  brandSlug={brand.slug}
                  familySlug={family.slug}
                  generationSlug={generation.slug}
                  isOpen={selectedGenerationSlug === generation.slug}
                  onToggle={() =>
                    setOpenGenerationSlug((currentSlug) =>
                      (currentSlug === undefined ? defaultOpenGenerationSlug : currentSlug) ===
                      generation.slug
                        ? null
                        : generation.slug,
                    )
                  }
                >
                  {selectedGenerationSlug === generation.slug ? (
                    <VariantGrid
                      brandName={brand.name}
                      brandSlug={brand.slug}
                      familySlug={family.slug}
                      generationSlug={generation.slug}
                      variants={generation.variants}
                    />
                  ) : null}
                </GenerationDropdownContent>
              ) : (
                <VariantGrid
                  brandName={brand.name}
                  brandSlug={brand.slug}
                  familySlug={family.slug}
                  generationSlug={generation.slug}
                  variants={generation.variants}
                />
              )}

              <div>
                <ButtonLink
                  to={`/${brand.slug}/ranges/${family.slug}/${generation.slug}`}
                  variant="secondary"
                >
                  View generation overview
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

type VariantFactProps = {
  label: string
  value: string
}

type GenerationDropdownContentProps = {
  brandSlug: string
  familySlug: string
  generationSlug: string
  isOpen: boolean
  onToggle: () => void
  children: ReactNode
}

function GenerationDropdownContent({
  brandSlug,
  familySlug,
  generationSlug,
  isOpen,
  onToggle,
  children,
}: GenerationDropdownContentProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/80">
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {isOpen ? 'Minimise variants' : 'Show variants'}
        </button>

        <Link
          to={`/${brandSlug}/ranges/${familySlug}/${generationSlug}`}
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-950"
        >
          View generation overview
        </Link>
      </div>

      {isOpen ? <div className="border-t border-slate-200 p-4">{children}</div> : null}
    </div>
  )
}

type VariantGridProps = {
  brandName: string
  brandSlug: string
  familySlug: string
  generationSlug: string
  variants: CurrentVariant[]
}

function VariantGrid({
  brandName,
  brandSlug,
  familySlug,
  generationSlug,
  variants,
}: VariantGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {variants.map((variant) => (
        <Link
          key={variant.slug}
          to={`/${brandSlug}/ranges/${familySlug}/${generationSlug}/${variant.slug}`}
          className="group overflow-hidden rounded-xl border border-slate-200 bg-white/88 text-slate-950 shadow-[0_16px_42px_rgba(15,23,42,0.1)] transition hover:-translate-y-1 hover:border-slate-400 hover:bg-white"
        >
          <div
            className="relative min-h-36 border-b border-white/30 p-4"
            style={{ background: variant.imageBackground }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_34%)]" />
            <img
              src={variant.image}
              alt={`${brandName} ${variant.name}`}
              className="relative ml-auto w-full max-w-xs drop-shadow-[0_18px_26px_rgba(2,6,23,0.38)] transition group-hover:scale-[1.03]"
            />
          </div>

          <div className="space-y-4 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {variant.category}
                </p>
                <h3 className="mt-2 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-2xl">
                  {variant.name}
                </h3>
                {variant.productionYears ? (
                  <p className="mt-1 text-sm font-semibold text-amber-700">
                    {variant.productionYears}
                  </p>
                ) : null}
              </div>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition group-hover:bg-slate-800">
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <VariantFact label="Power" value={variant.specs.power} />
              <VariantFact label="Drive" value={variant.specs.drivetrain} />
              <VariantFact label="Engine" value={variant.specs.engineCode ?? 'TBC'} />
              <VariantFact label="Fuel" value={variant.specs.fuelType} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

function VariantFact({ label, value }: VariantFactProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 font-semibold text-slate-950">{value}</p>
    </div>
  )
}
