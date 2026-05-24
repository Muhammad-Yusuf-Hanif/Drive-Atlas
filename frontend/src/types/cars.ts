/**
 * Beginner note:
 * This file is a list of TypeScript types.
 *
 * Types are descriptions of what data should look like.
 * They help you understand the shape of data before the app even runs.
 *
 * Think of this file as the app's data blueprint.
 */
export type BrandTheme = {
  heroGradient: string
}

export type CarColour = {
  name: string
  hex: string
}

export type RecallItem = {
  title: string
  recallNumber: string
  recallDate: string
  summary: string
  appliesNote: string
  sourceUrl: string
}

export type ServiceItem = {
  item: string
  interval: string
  detail: string
}

export type FluidRequirement = {
  item: string
  spec: string
  capacity?: string
  note: string
}

export type SourceLink = {
  label: string
  url: string
}

export type OwnershipRiskSummary = {
  rating: 'Low' | 'Moderate' | 'Moderate to high'
  summary: string
  watchouts: string[]
  bestBuyWindow: string
}

export type BestSpecToBuy = {
  title: string
  summary: string
  recommendedFeatures: string[]
  avoidIf: string[]
}

export type FaceliftChange = {
  area: string
  preLciYears: string
  preLci: string
  lciYears: string
  lci: string
  buyerImpact: string
}

export type OfficialResourceLink = {
  label: string
  url: string
  type: 'official-model-page' | 'official-gallery' | 'brochure' | 'configurator' | 'recall-checker'
}

export type OwnershipInfo = {
  title: string
  officialSummary: string
  ownershipRiskSummary: OwnershipRiskSummary
  bestSpecToBuy: BestSpecToBuy
  faceliftGuide: FaceliftChange[]
  serviceSchedule: ServiceItem[]
  fluidRequirements: FluidRequirement[]
  recalls: RecallItem[]
  ownerReportedIssues: string[]
  engineFaults: string[]
  sourceLinks: SourceLink[]
  disclaimer: string
}

export type OfficialResources = {
  title: string
  summary: string
  links: OfficialResourceLink[]
}

export type CarSpecs = {
  power: string
  zeroToSixty: string
  topSpeed: string
  drivetrain: string
  transmission: string
  seats: string
  fuelType: string
  bodyStyle: string
}

export type CarModel = {
  // This is the base "detail page car" shape reused across current and
  // historical sections. Keeping a shared type avoids duplicating UI contracts.
  //
  // Beginner note:
  // this is the main shape for one detailed car record.
  slug: string
  name: string
  category: string
  shortDescription: string
  longDescription: string
  designStory: string
  overview: string
  image: string
  imageBackground: string
  colours: CarColour[]
  specs: CarSpecs
  ownershipInfo?: OwnershipInfo
  officialResources?: OfficialResources
}

export type HistoricalFamilySummary = {
  slug: string
  name: string
  category: string
  description: string
  image: string
  imageBackground: string
  coveredLegacyModelSlugs: string[]
  generationCount: number
  phaseCount: number
}

export type HistoricalVariant = CarModel

export type CurrentFamilySummary = {
  // Summary types are intentionally smaller than full payloads.
  // They are designed for listing cards where we only need enough data to link
  // to the next page, not the whole nested structure.
  //
  // Beginner note:
  // a summary is a smaller preview version of the full data.
  slug: string
  name: string
  category: string
  description: string
  image: string
  imageBackground: string
  generationCount: number
  variantCount: number
}

export type CurrentVariant = CarModel

export type CurrentGeneration = {
  // A generation owns the exact variant choices for one current platform.
  // Example: G20/G21 owns 318i, 320i, 320d, 330e, 330i, and M340i.
  //
  // Beginner note:
  // this represents one platform era containing exact variants.
  slug: string
  label: string
  yearStart: number
  yearEnd: number
  summary: string
  variants: CurrentVariant[]
}

export type CurrentFamily = {
  slug: string
  name: string
  category: string
  description: string
  image: string
  imageBackground: string
  generations: CurrentGeneration[]
}

export type HistoricalEngineGuide = {
  slug: string
  name: string
  years: string
  fuelType: string
  outputs: string[]
  positioning: string
  character: string
  strengths: string[]
  watchouts: string[]
  buyerFit: string
}

export type HistoricalPhase = {
  slug: string
  label: string
  yearLabel: string
  variants: HistoricalVariant[]
}

export type HistoricalGeneration = {
  slug: string
  label: string
  yearStart: number
  yearEnd: number
  summary?: string
  engineGuide?: HistoricalEngineGuide[]
  phases: HistoricalPhase[]
}

export type HistoricalVariantLineage = {
  // Historical variants can exist in multiple phases, so this type groups
  // those related records into one page-level object.
  //
  // Beginner note:
  // this groups related older-car records that span more than one phase.
  slug: string
  name: string
  category: string
  shortDescription: string
  longDescription: string
  designStory: string
  overview: string
  image: string
  imageBackground: string
  colours: CarColour[]
  specs: CarSpecs
  phases: Array<{
    slug: string
    label: string
    yearLabel: string
    variant: HistoricalVariant
  }>
}

export type HistoricalFamily = {
  slug: string
  name: string
  category: string
  description: string
  image: string
  imageBackground: string
  generations: HistoricalGeneration[]
}

export type CarBrand = {
  slug: string
  name: string
  description: string
  signature: string
  availableColours: string[]
  theme: BrandTheme
  models: CarModel[]
  // currentFamilies and historicalFamilies are optional because only some
  // brands are migrated to the structured family browser so far.
  //
  // Beginner note:
  // `?` means the property is optional.
  currentFamilies?: CurrentFamilySummary[]
  historicalFamilies?: HistoricalFamilySummary[]
}

export type ModelPagePayload = {
  // "Payload" means the full response object returned by an API route.
  brand: Omit<CarBrand, 'models'>
  model: CarModel
}

export type HistoricalFamilyPagePayload = {
  brand: Omit<CarBrand, 'models'>
  family: HistoricalFamily
  coveredLegacyModelSlugs: string[]
}

export type HistoricalVariantPagePayload = {
  brand: Omit<CarBrand, 'models'>
  family: Omit<HistoricalFamily, 'generations'>
  generation: HistoricalGeneration
  variant: HistoricalVariantLineage
}

export type HistoricalGenerationPagePayload = {
  brand: Omit<CarBrand, 'models'>
  family: Omit<HistoricalFamily, 'generations'>
  generation: HistoricalGeneration
  variants: HistoricalVariantLineage[]
}

export type CurrentFamilyPagePayload = {
  // Page payload types mirror backend responses one-for-one.
  // This makes it easier to see what each route expects from the API.
  brand: Omit<CarBrand, 'models'>
  family: CurrentFamily
}

export type CurrentGenerationPagePayload = {
  brand: Omit<CarBrand, 'models'>
  family: Omit<CurrentFamily, 'generations'>
  generation: CurrentGeneration
}

export type CurrentVariantPagePayload = {
  brand: Omit<CarBrand, 'models'>
  family: Omit<CurrentFamily, 'generations'>
  generation: Omit<CurrentGeneration, 'variants'>
  variant: CurrentVariant
}

export type SearchFeatureOption = {
  value: string
  label: string
}

export type CarSearchOptions = {
  bodyStyles: string[]
  engineSizes: string[]
  fuelTypes: string[]
  transmissions: string[]
  drivetrains: string[]
  seats: string[]
  features: SearchFeatureOption[]
}

export type CarSearchResult = {
  id: string
  source: 'model' | 'current' | 'historical'
  brand: {
    slug: string
    name: string
  }
  family: {
    slug: string
    name: string
  } | null
  generation: {
    slug: string
    label: string
  } | null
  vehicle: {
    slug: string
    name: string
    category: string
    shortDescription: string
    image: string
    imageBackground: string
    specs: CarSpecs
    engineSizeLitres: string
    features: string[]
  }
  route: string
  yearLabel: string
}

export type CarSearchPayload = {
  options: CarSearchOptions
  results: CarSearchResult[]
  total: number
}
