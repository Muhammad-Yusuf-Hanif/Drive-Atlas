import { createCarImage } from '../utils/svg.js'
import { getModelBySlug } from './carBrands.js'

function createCurrentVariant(config) {
  return {
    slug: config.slug,
    name: config.name,
    category: config.category,
    shortDescription: config.shortDescription,
    longDescription: config.longDescription,
    designStory: config.designStory,
    overview: config.overview,
    image: config.image,
    imageBackground: config.imageBackground,
    colours: config.colours,
    specs: config.specs,
    ownershipInfo: config.ownershipInfo,
  }
}

// This file is the start of a more scalable content model for current cars.
// Instead of one flat brand.models list, each brand can be organized as:
// brand -> family -> generation -> exact variant.

const bmwCoreImage = createCarImage({
  body: '#dce1e7',
  accent: '#2563eb',
  glow: '#93c5fd',
})

const bmwPerformanceImage = createCarImage({
  body: '#d5d9e0',
  accent: '#0f172a',
  glow: '#94a3b8',
})

const bmwMImage = createCarImage({
  body: '#e5e7eb',
  accent: '#dc2626',
  glow: '#fca5a5',
})

const bmw330iOwnership = getModelBySlug('bmw', '330i')?.ownershipInfo
const bmwM340iOwnership = getModelBySlug('bmw', 'm340i')?.ownershipInfo
// Reusing ownership data from the older flat model dataset avoids throwing away
// the richer detail work that already existed for these BMW variants.

export const currentBrandFamilies = {
  bmw: {
    families: [
      {
        slug: '3-series',
        name: '3 Series and M3',
        category: 'Compact executive ladder',
        description:
          'A generation-led BMW family view that starts with the mainstream 3 Series range and steps all the way up to the current M3 flagship cars.',
        image: bmwCoreImage,
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #2563eb 42%, #dbeafe 100%)',
        generations: [
          {
            slug: 'g20-g21',
            label: 'G20 / G21 3 Series',
            yearStart: 2019,
            yearEnd: 2026,
            summary:
              'The current mainstream 3 Series platform covers the entry petrol cars, the key diesel and plug-in hybrid options, the sweet-spot 330i, and the range-topping M340i.',
            variants: [
              // The order here matters because the UI presents these as a
              // buyer journey from calmer entry cars up to faster halo versions.
              createCurrentVariant({
                slug: '318i-saloon',
                name: '318i Saloon',
                category: 'Entry petrol saloon',
                shortDescription:
                  'The most rational current 3 Series entry point for buyers who want the badge, the platform, and the daily-driver usability first.',
                longDescription:
                  'The 318i Saloon is the lowest-friction route into a current BMW 3 Series. It keeps the same core platform, cabin architecture, and visual identity as the bigger-engine cars while targeting buyers who care more about running costs and comfort than chasing performance stats.',
                designStory:
                  'The standard 3 Series body works well even in entry form because the long bonnet, cab-rearward stance, and clean shoulder line still read as unmistakably BMW.',
                overview:
                  'Choose this if the goal is everyday premium saloon ownership without paying for performance you do not actually need.',
                image: bmwCoreImage,
                imageBackground:
                  'linear-gradient(135deg, #0f172a 0%, #2563eb 44%, #dbeafe 100%)',
                colours: [
                  { name: 'Alpine White', hex: '#f8fafc' },
                  { name: 'Black Sapphire', hex: '#111827' },
                  { name: 'Skyscraper Grey', hex: '#94a3b8' },
                ],
                specs: {
                  power: '156 hp',
                  zeroToSixty: '8.4 s',
                  topSpeed: '139 mph',
                  drivetrain: 'RWD',
                  transmission: '8-speed automatic',
                  seats: '5',
                  fuelType: 'Petrol',
                  bodyStyle: 'Saloon',
                },
              }),
              createCurrentVariant({
                slug: '320i-saloon',
                name: '320i Saloon',
                category: 'Core petrol saloon',
                shortDescription:
                  'The mainstream petrol 3 Series and the cleanest current all-rounder for buyers who want a traditional non-M performance balance.',
                longDescription:
                  'The 320i Saloon sits in the middle of the current 3 Series range and tends to make the most sense for buyers who want a lively petrol engine, a current BMW cabin, and strong day-to-day usability without paying the premium attached to the faster badges.',
                designStory:
                  'With the same underlying proportions as the rest of the range, the 320i relies on tidy surfacing and the standard saloon stance rather than aggressive aero detailing.',
                overview:
                  'This is the sensible current-petrol answer if 330i money feels unnecessary but the 318i feels too cautious.',
                image: bmwCoreImage,
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #1d4ed8 40%, #dbeafe 100%)',
                colours: [
                  { name: 'Portimao Blue', hex: '#2563eb' },
                  { name: 'Alpine White', hex: '#f8fafc' },
                  { name: 'Black Sapphire', hex: '#111827' },
                ],
                specs: {
                  power: '184 hp',
                  zeroToSixty: '7.1 s',
                  topSpeed: '146 mph',
                  drivetrain: 'RWD',
                  transmission: '8-speed automatic',
                  seats: '5',
                  fuelType: 'Petrol',
                  bodyStyle: 'Saloon',
                },
              }),
              createCurrentVariant({
                slug: '320d-saloon',
                name: '320d Saloon',
                category: 'Diesel motorway saloon',
                shortDescription:
                  'The long-distance current 3 Series choice for buyers who still value torque, range, and motorway efficiency.',
                longDescription:
                  'The 320d Saloon remains relevant because the 3 Series chassis still suits a torque-rich diesel daily. For high-mileage buyers it often makes more practical sense than the petrol cars, especially when motorway use dominates.',
                designStory:
                  'Visually it shares the same crisp current 3 Series shell, meaning the diesel option does not look like the compromise choice from the outside.',
                overview:
                  'If the brief is heavy commuting, business mileage, and strong real-world usability, this is still the current range workhorse.',
                image: bmwCoreImage,
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #334155 44%, #dbeafe 100%)',
                colours: [
                  { name: 'Black Sapphire', hex: '#111827' },
                  { name: 'Mineral White', hex: '#f8fafc' },
                  { name: 'Brooklyn Grey', hex: '#9ca3af' },
                ],
                specs: {
                  power: '190 hp',
                  zeroToSixty: '6.9 s',
                  topSpeed: '149 mph',
                  drivetrain: 'RWD',
                  transmission: '8-speed automatic',
                  seats: '5',
                  fuelType: 'Diesel mild hybrid',
                  bodyStyle: 'Saloon',
                },
              }),
              createCurrentVariant({
                slug: '330e-saloon',
                name: '330e Saloon',
                category: 'Plug-in hybrid saloon',
                shortDescription:
                  'The tax-friendly company-car favorite that mixes EV commuting ability with mainstream 3 Series pace.',
                longDescription:
                  'The 330e Saloon blends a familiar petrol 3 Series character with plug-in hybrid benefits. It is the most obvious current BMW answer for buyers balancing tax efficiency, urban journeys, and premium-saloon expectations.',
                designStory:
                  'BMW keeps the 330e visually close to the rest of the range, so the electrified version still feels like a proper 3 Series rather than a separate design statement.',
                overview:
                  'This is the current 3 Series for buyers whose use case includes shorter electric-biased trips and fleet-friendly logic.',
                image: bmwCoreImage,
                imageBackground:
                  'linear-gradient(135deg, #0f172a 0%, #0f766e 44%, #ccfbf1 100%)',
                colours: [
                  { name: 'Mineral White', hex: '#f8fafc' },
                  { name: 'Phytonic Blue', hex: '#1d4ed8' },
                  { name: 'Skyscraper Grey', hex: '#94a3b8' },
                ],
                specs: {
                  power: '292 hp',
                  zeroToSixty: '5.8 s',
                  topSpeed: '143 mph',
                  drivetrain: 'RWD',
                  transmission: '8-speed automatic',
                  seats: '5',
                  fuelType: 'Plug-in hybrid',
                  bodyStyle: 'Saloon',
                },
              }),
              createCurrentVariant({
                slug: '330i-saloon',
                name: '330i Saloon',
                category: 'Sports sedan',
                shortDescription:
                  'The best current non-M petrol sweet spot if you want the real 3 Series balance without jumping to full six-cylinder prices.',
                longDescription:
                  'The 330i Saloon is where the current 3 Series range starts to feel genuinely brisk while still staying on the sensible side of the BMW ladder. It is the cleanest bridge between mainstream commuting logic and a properly engaging petrol sports-saloon feel.',
                designStory:
                  'The standard M Sport visual treatment adds the right amount of tension without overwhelming the restrained 3 Series proportions.',
                overview:
                  'This is the current 3 Series sweet spot for buyers who want performance, polish, and sensible day-to-day usability in one car.',
                image: bmwCoreImage,
                imageBackground:
                  'linear-gradient(135deg, #0f172a 0%, #1d4ed8 45%, #dbeafe 100%)',
                colours: [
                  { name: 'Alpine White', hex: '#f8fafc' },
                  { name: 'Brooklyn Grey', hex: '#9ca3af' },
                  { name: 'Portimao Blue', hex: '#2563eb' },
                ],
                specs: {
                  power: '255 hp',
                  zeroToSixty: '5.6 s',
                  topSpeed: '130 mph',
                  drivetrain: 'RWD',
                  transmission: '8-speed automatic',
                  seats: '5',
                  fuelType: 'Petrol',
                  bodyStyle: 'Saloon',
                },
                ownershipInfo: bmw330iOwnership,
              }),
              createCurrentVariant({
                slug: 'm340i-xdrive-saloon',
                name: 'M340i xDrive Saloon',
                category: 'Performance sedan',
                shortDescription:
                  'The fast-road current 3 Series flagship below the full M3, combining B58 pace with understated daily usability.',
                longDescription:
                  'The M340i xDrive Saloon is the car many buyers land on when they want current BMW six-cylinder pace without the step into full M-car purchase cost, image, and running intensity.',
                designStory:
                  'BMW keeps the M340i subtle, using denser detailing and stance rather than exaggerated bodywork, which gives it real sleeper appeal.',
                overview:
                  'This is the current all-weather supersaloon answer for buyers who want six-cylinder performance without moving all the way into M3 territory.',
                image: bmwPerformanceImage,
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #334155 42%, #dce3ea 100%)',
                colours: [
                  { name: 'Black Sapphire', hex: '#111827' },
                  { name: 'Brooklyn Grey', hex: '#9ca3af' },
                  { name: 'Tanzanite Blue', hex: '#172554' },
                ],
                specs: {
                  power: '374 hp',
                  zeroToSixty: '4.3 s',
                  topSpeed: '155 mph',
                  drivetrain: 'xDrive AWD',
                  transmission: '8-speed Steptronic Sport',
                  seats: '5',
                  fuelType: 'Petrol mild hybrid',
                  bodyStyle: 'Saloon',
                },
                ownershipInfo: bmwM340iOwnership,
              }),
            ],
          },
          {
            slug: 'g80-g81',
            label: 'G80 / G81 M3',
            yearStart: 2021,
            yearEnd: 2026,
            summary:
              'This is the current full-fat M3 branch, covering the purist rear-drive saloon, the more accessible Competition xDrive versions, the Touring, and the ultra-focused CS halo.',
            variants: [
              createCurrentVariant({
                slug: 'm3-saloon',
                name: 'M3 Saloon',
                category: 'Rear-drive M car',
                shortDescription:
                  'The manual, rear-drive current M3 and the most purist route into the modern model line.',
                longDescription:
                  'The current M3 Saloon is the enthusiast-focused core version for buyers who want the full G80 M3 identity with a more traditional rear-drive character and the least filtered feel in the lineup.',
                designStory:
                  'Even in standard M3 form the widened body, venting, and track stance make it look much denser and more confrontational than a regular 3 Series.',
                overview:
                  'This is the choice for buyers who want the G80 experience with the strongest sense of old-school driver involvement.',
                image: bmwMImage,
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #991b1b 42%, #fee2e2 100%)',
                colours: [
                  { name: 'Alpine White', hex: '#f8fafc' },
                  { name: 'Toronto Red', hex: '#b91c1c' },
                  { name: 'Black Sapphire', hex: '#111827' },
                ],
                specs: {
                  power: '480 hp',
                  zeroToSixty: '4.2 s',
                  topSpeed: '155 mph',
                  drivetrain: 'RWD',
                  transmission: '6-speed manual',
                  seats: '5',
                  fuelType: 'Petrol',
                  bodyStyle: 'Saloon',
                },
              }),
              createCurrentVariant({
                slug: 'm3-competition-xdrive-saloon',
                name: 'M3 Competition xDrive Saloon',
                category: 'AWD M car',
                shortDescription:
                  'The everyday-usable high-grip M3 that gives up some purity in exchange for monstrous point-to-point speed.',
                longDescription:
                  'The M3 Competition xDrive Saloon is the default recommendation for buyers who want the fastest and easiest current M3 to exploit on real roads. It is devastatingly quick, more accessible than the rear-drive car, and the obvious mainstream performance flagship in the line.',
                designStory:
                  'The broad arches and aggressive front-end language look fully justified once the Competition xDrive stance and wheel package are in view.',
                overview:
                  'If the brief is modern super-saloon pace with minimal compromise, this is the center of the current M3 range.',
                image: bmwMImage,
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #7f1d1d 40%, #fecaca 100%)',
                colours: [
                  { name: 'Isle of Man Green', hex: '#166534' },
                  { name: 'Brooklyn Grey', hex: '#9ca3af' },
                  { name: 'Black Sapphire', hex: '#111827' },
                ],
                specs: {
                  power: '530 hp',
                  zeroToSixty: '3.5 s',
                  topSpeed: '155 mph',
                  drivetrain: 'xDrive AWD',
                  transmission: '8-speed automatic',
                  seats: '5',
                  fuelType: 'Petrol',
                  bodyStyle: 'Saloon',
                },
              }),
              createCurrentVariant({
                slug: 'm3-touring-competition-xdrive',
                name: 'M3 Touring Competition xDrive',
                category: 'Performance estate',
                shortDescription:
                  'The current cult favorite that combines full M3 pace with estate practicality and a more distinctive body style.',
                longDescription:
                  'The M3 Touring Competition xDrive is one of the most charismatic current BMWs because it takes the G81 estate body and combines it with the full Competition xDrive powertrain. It is both practical and unapologetically extreme.',
                designStory:
                  'The long roof and swollen rear arches make the Touring look even more theatrical than the saloon, while still retaining the visual maturity of an estate shell.',
                overview:
                  'This is the current dream-spec answer if you want the M3 experience in the most distinctive and practical format.',
                image: bmwMImage,
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #334155 36%, #fecaca 100%)',
                colours: [
                  { name: 'Frozen Black', hex: '#111827' },
                  { name: 'Isle of Man Green', hex: '#166534' },
                  { name: 'Skyscraper Grey', hex: '#94a3b8' },
                ],
                specs: {
                  power: '530 hp',
                  zeroToSixty: '3.6 s',
                  topSpeed: '155 mph',
                  drivetrain: 'xDrive AWD',
                  transmission: '8-speed automatic',
                  seats: '5',
                  fuelType: 'Petrol',
                  bodyStyle: 'Touring',
                },
              }),
              createCurrentVariant({
                slug: 'm3-cs',
                name: 'M3 CS',
                category: 'Track-focused halo saloon',
                shortDescription:
                  'The sharper, lighter, more expensive current M3 halo built for buyers who want the top factory G80 experience.',
                longDescription:
                  'The M3 CS sits at the top of the current M3 stack. It sharpens the already serious Competition xDrive formula with weight-saving measures, more aggressive calibration, and a much more focused identity.',
                designStory:
                  'Carbon-heavy detailing, a more intense stance, and visibly harder-edged surfacing give the CS a properly special-series feel rather than a simple trim bump.',
                overview:
                  'This is the current flagship for buyers who want the most serious factory-built road-going M3 short of a dedicated track special.',
                image: bmwMImage,
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #7c2d12 42%, #fed7aa 100%)',
                colours: [
                  { name: 'Frozen Solid White', hex: '#f8fafc' },
                  { name: 'Signal Green', hex: '#65a30d' },
                  { name: 'Black Sapphire', hex: '#111827' },
                ],
                specs: {
                  power: '550 hp',
                  zeroToSixty: '3.4 s',
                  topSpeed: '188 mph',
                  drivetrain: 'xDrive AWD',
                  transmission: '8-speed automatic',
                  seats: '4',
                  fuelType: 'Petrol',
                  bodyStyle: 'Saloon',
                },
              }),
            ],
          },
        ],
      },
    ],
  },
}

export function getCurrentBrandFamilyData(brandSlug) {
  return currentBrandFamilies[brandSlug?.toLowerCase()]
}

export function getCurrentFamilyBySlug(brandSlug, familySlug) {
  return getCurrentBrandFamilyData(brandSlug)?.families.find(
    (family) => family.slug === familySlug?.toLowerCase(),
  )
}

export function getCurrentGenerationBySlug(brandSlug, familySlug, generationSlug) {
  return getCurrentFamilyBySlug(brandSlug, familySlug)?.generations.find(
    (generation) => generation.slug === generationSlug?.toLowerCase(),
  )
}

export function getCurrentVariantBySlug(
  brandSlug,
  familySlug,
  generationSlug,
  variantSlug,
) {
  return getCurrentGenerationBySlug(brandSlug, familySlug, generationSlug)?.variants.find(
    (variant) => variant.slug === variantSlug?.toLowerCase(),
  )
}

export function getCurrentFamilySummaries(brandSlug) {
  return (
    getCurrentBrandFamilyData(brandSlug)?.families.map((family) => ({
      slug: family.slug,
      name: family.name,
      category: family.category,
      description: family.description,
      image: family.image,
      imageBackground: family.imageBackground,
      generationCount: family.generations.length,
      // Summary counts are computed once on the backend so card UIs can stay
      // simple and not duplicate traversal logic.
      variantCount: family.generations.reduce(
        (total, generation) => total + generation.variants.length,
        0,
      ),
    })) ?? []
  )
}
