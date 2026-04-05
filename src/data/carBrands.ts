import type { CarBrand } from '../types/cars'
import { createCarImage } from '../utils/svg'

/**
 * This file is the main content source for the app.
 * In a real product this would likely come from an API, but for a frontend
 * training project it is useful to keep representative data close to the UI.
 */
export const carBrands: CarBrand[] = [
  {
    slug: 'audi',
    name: 'Audi',
    description:
      'Audi blends sharp surfacing, digital-first cabins, and quattro heritage into a lineup that feels technical and composed.',
    signature: 'Progressive lighting, precise proportions, and calm high-speed confidence.',
    availableColours: ['Daytona Gray', 'Glacier White', 'Navarra Blue', 'Chronos Gray'],
    theme: {
      heroGradient: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 52%, #cbd5e1 100%)',
    },
    models: [
      {
        slug: 'a5-sportback',
        name: 'A5 Sportback',
        category: 'Sportback',
        shortDescription:
          'A streamlined four-door design with balanced performance and a clean executive cabin.',
        longDescription:
          'The A5 Sportback pairs coupe-like rooflines with everyday practicality, making it a strong entry point into Audi design without losing rear-seat usability.',
        designStory:
          'Audi keeps the shoulder line tight and uninterrupted, while the roof arc and frameless glass deliver the visual drama usually reserved for two-door shapes.',
        overview:
          'This model suits buyers who want understated premium styling, a composed ride, and a body shape that feels noticeably more expressive than a standard sedan.',
        image: createCarImage({
          body: '#dce4ec',
          accent: '#3b82f6',
          glow: '#93c5fd',
        }),
        imageBackground:
          'linear-gradient(135deg, #09111d 0%, #133b7b 48%, #d7e5f6 100%)',
        colours: [
          { name: 'Glacier White', hex: '#f8fafc' },
          { name: 'Daytona Gray', hex: '#64748b' },
          { name: 'Navarra Blue', hex: '#1d4ed8' },
        ],
        specs: {
          power: '261 hp',
          zeroToSixty: '5.4 s',
          topSpeed: '130 mph',
          drivetrain: 'quattro AWD',
          transmission: '7-speed S tronic',
          seats: '5',
          fuelType: 'Petrol',
          bodyStyle: 'Sportback',
        },
      },
      {
        slug: 's5-sportback',
        name: 'S5 Sportback',
        category: 'Sport performance',
        shortDescription:
          'Sharper response, richer sound, and a more aggressive stance built on the A5 silhouette.',
        longDescription:
          'The S5 Sportback elevates the standard A5 formula with stronger acceleration, quad-exit visual cues, and a more assertive body kit that reads instantly as an S car.',
        designStory:
          'The lower ride height and dark trim create a denser, more planted visual mass, while red brake hardware and larger wheel fitment hint at its extra pace.',
        overview:
          'For shoppers moving beyond a style-led daily driver, the S5 adds genuine performance without abandoning practicality or premium cabin comfort.',
        image: createCarImage({
          body: '#cdd5df',
          accent: '#0f172a',
          glow: '#94a3b8',
        }),
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #334155 45%, #cbd5e1 100%)',
        colours: [
          { name: 'Chronos Gray', hex: '#475569' },
          { name: 'Mythos Black', hex: '#111827' },
          { name: 'Progressive Red', hex: '#b91c1c' },
        ],
        specs: {
          power: '349 hp',
          zeroToSixty: '4.4 s',
          topSpeed: '155 mph',
          drivetrain: 'quattro AWD',
          transmission: '8-speed Tiptronic',
          seats: '5',
          fuelType: 'Petrol',
          bodyStyle: 'Sportback',
        },
      },
      {
        slug: 'rs6-avant',
        name: 'RS 6 Avant',
        category: 'Performance estate',
        shortDescription:
          'A wide-bodied performance wagon with supercar pace and long-distance touring presence.',
        longDescription:
          'The RS 6 Avant combines cargo-friendly wagon architecture with dramatic arches, huge brakes, and a powertrain that turns a practical shape into a halo product.',
        designStory:
          'Audi uses broad shoulders, a stretched wheelbase, and a deeply carved front fascia to make the RS 6 look muscular even at a standstill.',
        overview:
          'This is the emotional choice in the Audi range: visually bold, highly capable, and distinct enough to define an entire enthusiast-oriented showroom page.',
        image: createCarImage({
          body: '#d7dce4',
          accent: '#ef4444',
          glow: '#fca5a5',
        }),
        imageBackground:
          'linear-gradient(135deg, #1f2937 0%, #7f1d1d 42%, #f3d5d5 100%)',
        colours: [
          { name: 'Nardo Gray', hex: '#d1d5db' },
          { name: 'Sebring Black', hex: '#0f172a' },
          { name: 'Ascari Blue', hex: '#1e3a8a' },
        ],
        specs: {
          power: '621 hp',
          zeroToSixty: '3.3 s',
          topSpeed: '155 mph',
          drivetrain: 'quattro AWD',
          transmission: '8-speed Tiptronic',
          seats: '5',
          fuelType: 'Petrol mild hybrid',
          bodyStyle: 'Avant',
        },
      },
    ],
  },
  {
    slug: 'bmw',
    name: 'BMW',
    description:
      'BMW leans into rear-biased dynamics, driver-focused cockpits, and bold surfacing that makes each series immediately recognizable.',
    signature: 'Athletic stance, strong kidney grille graphics, and driver-first performance tuning.',
    availableColours: ['Brooklyn Grey', 'Alpine White', 'Black Sapphire', 'Portimao Blue'],
    theme: {
      heroGradient: 'linear-gradient(135deg, #111827 0%, #2563eb 45%, #e5e7eb 100%)',
    },
    models: [
      {
        slug: '330i',
        name: '330i',
        category: 'Sports sedan',
        shortDescription:
          'A balanced everyday sedan with crisp handling, clean proportions, and an approachable performance ceiling.',
        longDescription:
          'The 330i is often the gateway to BMW ownership because it expresses the core 3 Series formula without the higher operating intensity of the M-badged variants.',
        designStory:
          'Its shape is defined by a long hood, cab-rearward stance, and crisp lower body surfacing that gives the car tension without looking overworked.',
        overview:
          'This model fits users who want a premium sports sedan with restrained styling, a high-quality cabin, and enough power to keep the chassis interesting.',
        image: createCarImage({
          body: '#e2e8f0',
          accent: '#2563eb',
          glow: '#93c5fd',
        }),
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
          bodyStyle: 'Sedan',
        },
      },
      {
        slug: '340i',
        name: '340i',
        category: 'Performance sedan',
        shortDescription:
          'The six-cylinder 3 Series with stronger pace, deeper character, and subtle visual aggression.',
        longDescription:
          'The 340i builds on the everyday friendliness of the 3 Series while introducing a smoother and more charismatic engine that transforms the car at speed.',
        designStory:
          'BMW keeps the body relatively clean but uses darker trim, larger wheel options, and stronger front-end detailing to shift the car into a more serious register.',
        overview:
          'If the brief is one car that can commute, road trip, and still feel genuinely quick, the 340i is the most versatile answer in this starter dataset.',
        image: createCarImage({
          body: '#dce1e7',
          accent: '#0f172a',
          glow: '#94a3b8',
        }),
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #334155 42%, #dce3ea 100%)',
        colours: [
          { name: 'Black Sapphire', hex: '#111827' },
          { name: 'Brooklyn Grey', hex: '#9ca3af' },
          { name: 'Tanzanite Blue', hex: '#172554' },
        ],
        specs: {
          power: '382 hp',
          zeroToSixty: '4.1 s',
          topSpeed: '155 mph',
          drivetrain: 'xDrive AWD',
          transmission: '8-speed automatic',
          seats: '5',
          fuelType: 'Petrol mild hybrid',
          bodyStyle: 'Sedan',
        },
      },
      {
        slug: 'm4-competition',
        name: 'M4 Competition',
        category: 'High-performance coupe',
        shortDescription:
          'Track-influenced coupe energy with a dramatic stance and the most extroverted presence in the BMW set.',
        longDescription:
          'The M4 Competition takes BMW coupe architecture and exaggerates every performance cue, from aero detailing to wheel width and body tension.',
        designStory:
          'Its proportions are low and loaded over the rear axle, while the front graphics and widened bodywork signal a car designed around grip and speed.',
        overview:
          'This page acts as the emotional top-end of the BMW range and gives the website a more aspirational detail view for users comparing the full lineup.',
        image: createCarImage({
          body: '#e5e7eb',
          accent: '#f59e0b',
          glow: '#fcd34d',
        }),
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #92400e 42%, #fef3c7 100%)',
        colours: [
          { name: 'Sao Paulo Yellow', hex: '#ca8a04' },
          { name: 'Frozen Black', hex: '#0f172a' },
          { name: 'Alpine White', hex: '#f8fafc' },
        ],
        specs: {
          power: '503 hp',
          zeroToSixty: '3.4 s',
          topSpeed: '155 mph',
          drivetrain: 'RWD',
          transmission: '8-speed M Steptronic',
          seats: '4',
          fuelType: 'Petrol',
          bodyStyle: 'Coupe',
        },
      },
    ],
  },
]

export function getBrandBySlug(slug?: string) {
  return carBrands.find((brand) => brand.slug === slug?.toLowerCase())
}

export function getModelBySlug(brandSlug?: string, modelSlug?: string) {
  return getBrandBySlug(brandSlug)?.models.find(
    (model) => model.slug === modelSlug?.toLowerCase(),
  )
}
