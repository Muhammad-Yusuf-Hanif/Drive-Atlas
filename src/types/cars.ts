/**
 * Shared product data types live here so components and pages all depend on
 * the same contract. That keeps the dataset strongly typed and easier to grow.
 */
export type CarColour = {
  name: string
  hex: string
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
}

export type BrandTheme = {
  heroGradient: string
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
