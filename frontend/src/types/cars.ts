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

export type CarBrand = {
  slug: string
  name: string
  description: string
  signature: string
  availableColours: string[]
  theme: BrandTheme
  models: CarModel[]
}

export type ModelPagePayload = {
  brand: Omit<CarBrand, 'models'>
  model: CarModel
}
