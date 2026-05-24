import { createCarImage } from '../utils/svg.js'

const bmw3SeriesImage = createCarImage({
  body: '#dce1e7',
  accent: '#2563eb',
  glow: '#93c5fd',
})

function createEngineGuide({
  slug,
  name,
  years,
  fuelType,
  outputs,
  positioning,
  character,
  strengths,
  watchouts,
  buyerFit,
}) {
  return {
    slug,
    name,
    years,
    fuelType,
    outputs,
    positioning,
    character,
    strengths,
    watchouts,
    buyerFit,
  }
}

// Historical data needs a few helper builders because the records are much
// richer and more repetitive than the current-family summaries.
function createOwnershipInfo(config) {
  return {
    title: 'Ownership, servicing, recalls, and known issues',
    officialSummary: config.officialSummary,
    ownershipRiskSummary: {
      rating: config.rating,
      summary: config.riskSummary,
      watchouts: config.watchouts,
      bestBuyWindow: config.bestBuyWindow,
    },
    bestSpecToBuy: {
      title: config.bestSpecTitle,
      summary: config.bestSpecSummary,
      recommendedFeatures: config.recommendedFeatures,
      avoidIf: config.avoidIf,
    },
    faceliftGuide: [
      {
        area: 'Generation phase split',
        preLciYears: config.preLciYears,
        preLci: config.preLci,
        lciYears: config.lciYears,
        lci: config.lci,
        buyerImpact: config.buyerImpact,
      },
    ],
    serviceSchedule: config.serviceSchedule,
    fluidRequirements: config.fluidRequirements,
    recalls: [
      {
        title: 'VIN-specific recall verification required',
        recallNumber: 'Check exact VIN',
        recallDate: 'Before purchase',
        summary:
          'The exact vehicle should be checked against UK recall history before purchase.',
        appliesNote:
          'Use the exact registration or VIN rather than relying on a broad model assumption.',
        sourceUrl: 'https://www.check-vehicle-recalls.service.gov.uk/',
      },
    ],
    ownerReportedIssues: config.ownerReportedIssues,
    engineFaults: config.engineFaults,
    sourceLinks: [
      {
        label: 'BMW 3 Series heritage overview',
        url: 'https://www.bmw.com/en/automotive-life/bmw-3-series-generations-overview.html',
      },
      {
        label: 'UK Government vehicle recalls checker',
        url: 'https://www.check-vehicle-recalls.service.gov.uk/',
      },
    ],
    disclaimer:
      'Used vehicles vary heavily by individual condition. Owner-reported issues are curated market context, not official BMW technical bulletins.',
  }
}

function createVariant({
  slug,
  name,
  category,
  shortDescription,
  longDescription,
  designStory,
  overview,
  colours,
  specs,
  ownershipInfo,
  imageBackground,
}) {
  return {
    slug,
    name,
    category,
    shortDescription,
    longDescription,
    designStory,
    overview,
    image: bmw3SeriesImage,
    imageBackground,
    colours,
    specs,
    ownershipInfo,
  }
}

export const historicalBrandFamilies = {
  bmw: {
    coveredLegacyModelSlugs: ['330i', 'm340i'],
    families: [
      {
        slug: '3-series',
        name: '3 Series',
        category: 'Compact executive family',
        description:
          'BMW’s core compact executive line and the cleanest way to compare generations, facelifts, and engine-era changes across the UK used market.',
        image: bmw3SeriesImage,
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #1d4ed8 40%, #dbeafe 100%)',
        generations: [
          // Historical generations are deliberately grouped at the platform
          // level first. Buyers usually know "E46" or "E90" before they know
          // which exact trim they want to compare.
          {
            slug: 'e46',
            label: 'E46',
            yearStart: 1998,
            yearEnd: 2005,
            summary:
              'The E46 range spans simple four-cylinder daily drivers, the mainstream M54 six-cylinder sweet spot, strong diesel motorway cars, and the specialist S54-powered M3 halo. Engine choice changes the ownership brief far more than trim level alone.',
            engineGuide: [
              createEngineGuide({
                slug: 'n42-n46-four-cylinder-petrol',
                name: '316i / 318i / 320i four-cylinder petrol',
                years: '1998 to 2005 depending on engine update and body style',
                fuelType: 'Petrol',
                outputs: ['105 hp to 150 hp', 'Most common UK picks sit around 316i to 320i outputs'],
                positioning:
                  'The entry side of the E46 range for buyers who want the shape, chassis balance, and running-cost discipline without committing to the bigger six-cylinder cars.',
                character:
                  'Lighter at the nose and cheaper to fuel than the six-cylinder cars, but less special in sound and less effortless when the car is heavily loaded or used mainly on fast roads.',
                strengths: [
                  'Usually the cheaper way into E46 ownership if the shell and maintenance history are still strong.',
                  'Can feel lighter and more agile than the bigger-engine cars in normal road use.',
                  'Suits buyers who want the E46 shape and rear-drive balance more than outright pace.',
                ],
                watchouts: [
                  'Some four-cylinder cars lose the emotional appeal buyers expect from an older BMW once the novelty of the badge wears off.',
                  'Cheap examples are often bought because they are cheap, which can mean weaker maintenance standards than the better six-cylinder enthusiast cars.',
                  'Condition still matters more than the theoretical saving on tax or fuel.',
                ],
                buyerFit:
                  'Best for buyers who want an inexpensive E46 daily or project base and are willing to prioritise shell condition over engine prestige.',
              }),
              createEngineGuide({
                slug: 'm52-m54-straight-six-petrol',
                name: '320i / 323i / 325i / 328i / 330i straight-six petrol',
                years: '1998 to 2005 depending on pre-facelift and facelift split',
                fuelType: 'Petrol',
                outputs: ['150 hp to 231 hp', '330i sits at the top of the regular range'],
                positioning:
                  'The core enthusiast part of the E46 range and the main reason many buyers still seek the generation out today.',
                character:
                  'This is the classic E46 recipe: naturally aspirated straight-six response, smoother power delivery, and the sound and balance most buyers associate with old-school BMW.',
                strengths: [
                  'Delivers the most complete period-correct E46 experience for road use.',
                  'The 325i and 330i are especially desirable because they combine usable pace with simpler naturally aspirated character.',
                  'Strong enthusiast support and broad specialist knowledge make these cars easier to understand in the used market.',
                ],
                watchouts: [
                  'Cooling-system renewal, oil leaks, and age-related ancillaries matter across the family.',
                  'Many buyers chase these cars, so cosmetic presentation can hide overdue structural or suspension work.',
                  'A bad six-cylinder car is far more expensive than a good one once you start correcting deferred maintenance.',
                ],
                buyerFit:
                  'The right answer for most enthusiasts. Buy the best-documented six-cylinder car you can rather than stretching for a cheaper but tired 330i.',
              }),
              createEngineGuide({
                slug: 'm47-m57-diesel',
                name: '318d / 320d / 330d diesel',
                years: '1998 to 2005 depending on body style and facelift',
                fuelType: 'Diesel',
                outputs: ['115 hp to 204 hp', '330d is the fast long-distance option'],
                positioning:
                  'The practical side of the E46 range for buyers covering big motorway mileage or wanting stronger torque without M3 running costs.',
                character:
                  'Diesel E46s feel less delicate and less romantic than the petrol six-cylinder cars, but the better ones make strong everyday or commuter classics with effortless mid-range shove.',
                strengths: [
                  'Excellent motorway character and real-world torque, especially in 330d form.',
                  'Often a sensible pick for buyers who want to use the car properly rather than keep it as a weekend nostalgia piece.',
                  'Can represent better value than the most chased petrol six-cylinder cars.',
                ],
                watchouts: [
                  'Diesel-specific wear, mileage, and usage history matter more because many examples have done hard daily work.',
                  'A tired diesel can feel industrial and worn-out very quickly if the rest of the car has not been maintained.',
                  'These are best bought for the use case, not because they are the cheapest way into a BMW badge.',
                ],
                buyerFit:
                  'Ideal for high-mileage buyers or anyone who wants an E46 with stronger long-distance usability than the smaller petrol cars.',
              }),
              createEngineGuide({
                slug: 's54-m3',
                name: 'M3 S54 straight-six',
                years: '2000 to 2006 depending on market registration timing',
                fuelType: 'Petrol',
                outputs: ['343 hp'],
                positioning:
                  'The halo E46 powertrain and a different proposition from the regular range rather than a simple extension of the 330i.',
                character:
                  'More intense, more expensive, and far more specialist than the mainstream E46 six-cylinder cars. The S54 brings genuine motorsport flavour, sharper response, and a much bigger ownership commitment.',
                strengths: [
                  'Defines the collectible top end of the E46 family and remains one of BMW’s most admired straight-six engines.',
                  'Creates a genuinely special driving experience rather than just a faster version of a regular 3 Series.',
                  'Strong enthusiast demand keeps the best cars highly visible in the market.',
                ],
                watchouts: [
                  'Running costs, specialist maintenance expectations, and purchase risk are far higher than on ordinary E46s.',
                  'A poorly bought M3 can become dramatically more expensive than a sorted 330i very quickly.',
                  'This is not the default recommendation for someone who simply wants a usable legacy 3 Series.',
                ],
                buyerFit:
                  'Best for committed enthusiasts who specifically want an E46 M3 and have the budget and patience to buy one properly.',
              }),
            ],
            phases: [
              {
                slug: 'pre-lci',
                label: 'Pre-LCI',
                yearLabel: '1998 to 2001',
                variants: [
                  createVariant({
                    slug: '330i-saloon',
                    name: '330i Saloon',
                    category: 'Straight-six saloon',
                    shortDescription:
                      'An analogue-feeling E46 six-cylinder that still defines what many buyers want from an older UK 3 Series.',
                    longDescription:
                      'The early E46 330i Saloon is one of the clearest old-school BMW ownership propositions if bought carefully: naturally aspirated straight-six character, compact size, and far less digital complexity than later generations.',
                    designStory:
                      'The pre-facelift E46 keeps the softer early-2000s BMW surfacing and restrained detailing many buyers now see as peak understated BMW design.',
                    overview:
                      'This branch suits buyers who want classic BMW balance and simpler engineering rather than headline technology.',
                    imageBackground:
                      'linear-gradient(135deg, #111827 0%, #1e40af 42%, #dbeafe 100%)',
                    colours: [
                      { name: 'Titanium Silver', hex: '#cbd5e1' },
                      { name: 'Topaz Blue', hex: '#1e3a8a' },
                      { name: 'Black Sapphire', hex: '#111827' },
                    ],
                    specs: {
                      power: '231 hp',
                      zeroToSixty: '6.5 s',
                      topSpeed: '155 mph',
                      drivetrain: 'RWD',
                      transmission: '5-speed automatic / manual',
                      seats: '5',
                      fuelType: 'Petrol',
                      bodyStyle: 'Saloon',
                    },
                    ownershipInfo: createOwnershipInfo({
                      officialSummary:
                        'An early E46 330i is mechanically simpler than later 3 Series generations, but age now matters as much as design quality. Cooling-system health, rust prevention, and proof of careful maintenance are the defining ownership topics.',
                      rating: 'Moderate',
                      riskSummary:
                        'The core powertrain is well liked, but time-based issues now dominate. A good car can still be very satisfying; a neglected one becomes a rolling restoration quickly.',
                      watchouts: [
                        'Cooling-system refresh history matters on older BMW straight-six cars.',
                        'Rust and structural condition now matter as much as engine feel.',
                        'Deferred suspension wear can make the car feel much worse than the platform really is.',
                      ],
                      bestBuyWindow:
                        'A rust-checked, cooling-system-sorted car with strong service history is the safest enthusiast buy.',
                      bestSpecTitle:
                        'Best used buy: well-maintained six-cylinder car with rust and cooling work already done',
                      bestSpecSummary:
                        'On an E46, condition beats trim. A structurally healthier car with documented mechanical sorting is worth more than a cheaper, shinier example with hidden age-related issues.',
                      recommendedFeatures: [
                        'Evidence of cooling-system renewal and suspension refresh work.',
                        'Strong MOT history with no corrosion trend.',
                        'Honest service history that goes beyond cosmetic presentation.',
                      ],
                      avoidIf: [
                        'The seller cannot evidence cooling work or rust prevention.',
                        'The car feels vague, loose, or under-maintained on the road.',
                        'There is a strong cosmetic story but no mechanical story.',
                      ],
                      preLciYears: 'Pre-LCI: 1998 to 2001',
                      preLci:
                        'Earlier E46 cars have the original lamp and trim treatment and now sit at the oldest end of the E46 market.',
                      lciYears: 'LCI: 2001 to 2005',
                      lci:
                        'Later E46 cars brought the facelifted lamp and trim changes plus a generally newer used-market profile.',
                      buyerImpact:
                        'The facelift matters visually, but current condition matters more than the original factory phase.',
                      serviceSchedule: [
                        {
                          item: 'Routine servicing',
                          interval: 'Annual servicing is the sensible pattern now',
                          detail:
                            'Older BMWs respond better to time-based maintenance discipline than to stretched intervals.',
                        },
                      ],
                      fluidRequirements: [
                        {
                          item: 'Engine oil',
                          spec: 'BMW-approved oil suited to the M54 straight-six',
                          note:
                            'Use a quality oil and shorter change pattern rather than stretching maintenance on an ageing engine.',
                        },
                        {
                          item: 'Coolant',
                          spec: 'BMW-approved coolant only',
                          note:
                            'Cooling-system integrity is one of the main ownership topics on older E46 cars.',
                        },
                      ],
                      ownerReportedIssues: [
                        'Owners talk most about cooling systems, rust, suspension wear, and general old-BMW age maintenance.',
                        'Interior wear and trim ageing are common but secondary to body and mechanical condition.',
                      ],
                      engineFaults: [
                        'The M54 itself is well liked, but age-related leaks and maintenance neglect are now normal risk areas.',
                        'Cooling components and ancillary wear can become more important than the engine core itself.',
                      ],
                    }),
                  }),
                ],
              },
              {
                slug: 'lci',
                label: 'LCI',
                yearLabel: '2001 to 2005',
                variants: [
                  createVariant({
                    slug: '330i-saloon',
                    name: '330i Saloon',
                    category: 'Straight-six saloon',
                    shortDescription:
                      'The facelifted E46 sweet spot for many UK buyers who want the cleaner later look and the same straight-six appeal.',
                    longDescription:
                      'The facelifted E46 330i Saloon keeps the M54 straight-six formula intact while benefiting from the later E46 styling and a newer used-market profile than the earliest cars.',
                    designStory:
                      'BMW sharpened the lamps and detail treatment on the E46 facelift without losing the restrained proportions that still define the generation.',
                    overview:
                      'For many buyers this is the most desirable E46 phase because it combines the familiar straight-six ownership experience with the later visual update.',
                    imageBackground:
                      'linear-gradient(135deg, #111827 0%, #2563eb 42%, #dbeafe 100%)',
                    colours: [
                      { name: 'Mystic Blue', hex: '#1e3a8a' },
                      { name: 'Silver Grey', hex: '#cbd5e1' },
                      { name: 'Black Sapphire', hex: '#111827' },
                    ],
                    specs: {
                      power: '231 hp',
                      zeroToSixty: '6.5 s',
                      topSpeed: '155 mph',
                      drivetrain: 'RWD',
                      transmission: '5-speed automatic / manual',
                      seats: '5',
                      fuelType: 'Petrol',
                      bodyStyle: 'Saloon',
                    },
                    ownershipInfo: createOwnershipInfo({
                      officialSummary:
                        'Facelift E46 ownership still revolves around age, maintenance quality, cooling-system condition, and corrosion prevention rather than digital complexity or modern hybrid systems.',
                      rating: 'Moderate',
                      riskSummary:
                        'The later E46 is still an ageing car, but a sorted example can offer one of the purest BMW ownership experiences in the catalog.',
                      watchouts: [
                        'Cooling-system refresh evidence remains vital.',
                        'A tidy body and clean MOT history matter hugely now.',
                        'Suspension and bush wear can hide behind a strong engine.',
                      ],
                      bestBuyWindow:
                        'A later facelift car with rust prevention, cooling history, and strong service evidence is usually the best E46 entry point.',
                      bestSpecTitle:
                        'Best used buy: facelift car with preventative maintenance already completed',
                      bestSpecSummary:
                        'The smartest E46 purchase is the one where the expensive age-related work is already visible in the paperwork and condition.',
                      recommendedFeatures: [
                        'Cooling-system work already completed.',
                        'Honest history showing suspension and consumable maintenance.',
                        'Strong rust prevention and underbody condition.',
                      ],
                      avoidIf: [
                        'The car has pretty paint but vague structural or maintenance history.',
                        'The seller is relying on nostalgia rather than invoices.',
                        'There is obvious cooling or corrosion uncertainty.',
                      ],
                      preLciYears: 'Pre-LCI: 1998 to 2001',
                      preLci:
                        'Early E46 cars carry the original styling and are now typically the older, riskier buys unless exceptionally well preserved.',
                      lciYears: 'LCI: 2001 to 2005',
                      lci:
                        'Facelift cars added the later lamp and trim treatment and are often the preferred used-market version.',
                      buyerImpact:
                        'The facelift improves desirability, but on an E46 the condition gap between cars matters more than the brochure-era split.',
                      serviceSchedule: [
                        {
                          item: 'Routine servicing',
                          interval: 'Annual servicing is the sensible pattern now',
                          detail:
                            'Treat the car like an ageing enthusiast car, not a modern stretch-interval daily.',
                        },
                      ],
                      fluidRequirements: [
                        {
                          item: 'Engine oil',
                          spec: 'BMW-approved oil suited to the M54 straight-six',
                          note:
                            'Quality oil and regular changes help keep older straight-six ownership predictable.',
                        },
                        {
                          item: 'Coolant',
                          spec: 'BMW-approved coolant only',
                          note:
                            'The E46 cooling system remains one of the most important ownership checkpoints.',
                        },
                      ],
                      ownerReportedIssues: [
                        'Cooling, rust, and suspension wear dominate ownership conversations.',
                        'Interior trim age and electrical oddities can appear, but body and mechanical health matter more.',
                      ],
                      engineFaults: [
                        'Age-related leaks and ancillary wear are more likely than a dramatic engine-core issue on a maintained car.',
                        'The straight-six reputation remains good, but neglect changes that quickly.',
                      ],
                    }),
                  }),
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

export function getHistoricalBrandFamilyData(brandSlug) {
  return historicalBrandFamilies[brandSlug?.toLowerCase()]
}

export function getHistoricalFamilyBySlug(brandSlug, familySlug) {
  return getHistoricalBrandFamilyData(brandSlug)?.families.find(
    (family) => family.slug === familySlug?.toLowerCase(),
  )
}

export function getHistoricalVariantBySlug(
  brandSlug,
  familySlug,
  generationSlug,
  phaseSlug,
  variantSlug,
) {
  return getHistoricalFamilyBySlug(brandSlug, familySlug)
    ?.generations.find((generation) => generation.slug === generationSlug?.toLowerCase())
    ?.phases.find((phase) => phase.slug === phaseSlug?.toLowerCase())
    ?.variants.find((variant) => variant.slug === variantSlug?.toLowerCase())
}

export function getHistoricalFamilySummaries(brandSlug) {
  return (
    getHistoricalBrandFamilyData(brandSlug)?.families.map((family) => ({
      slug: family.slug,
      name: family.name,
      category: family.category,
      description: family.description,
      image: family.image,
      imageBackground: family.imageBackground,
      coveredLegacyModelSlugs:
        getHistoricalBrandFamilyData(brandSlug)?.coveredLegacyModelSlugs ?? [],
      generationCount: family.generations.length,
      phaseCount: family.generations.reduce(
        (total, generation) => total + generation.phases.length,
        0,
      ),
    })) ?? []
  )
}

export function getHistoricalGenerationBySlug(brandSlug, familySlug, generationSlug) {
  return getHistoricalFamilyBySlug(brandSlug, familySlug)?.generations.find(
    (generation) => generation.slug === generationSlug?.toLowerCase(),
  )
}

export function getHistoricalVariantLineagesForGeneration(brandSlug, familySlug, generationSlug) {
  const generation = getHistoricalGenerationBySlug(brandSlug, familySlug, generationSlug)

  if (!generation) {
    return []
  }

  // Multiple phase records can describe the "same" variant name over time.
  // This map merges them into a single page-level lineage for easier browsing.
  const lineageMap = new Map()

  for (const phase of generation.phases) {
    for (const variant of phase.variants) {
      if (!lineageMap.has(variant.slug)) {
        lineageMap.set(variant.slug, {
          slug: variant.slug,
          name: variant.name,
          category: variant.category,
          shortDescription: variant.shortDescription,
          longDescription: variant.longDescription,
          designStory: variant.designStory,
          overview: variant.overview,
          image: variant.image,
          imageBackground: variant.imageBackground,
          colours: variant.colours,
          specs: variant.specs,
          phases: [],
        })
      }

      const lineage = lineageMap.get(variant.slug)
      lineage.phases.push({
        slug: phase.slug,
        label: phase.label,
        yearLabel: phase.yearLabel,
        variant,
      })

      if (phase.slug === 'lci') {
        // When both pre-LCI and LCI versions exist, the facelifted record is
        // treated as the default representative summary for the lineage card.
        lineage.shortDescription = variant.shortDescription
        lineage.longDescription = variant.longDescription
        lineage.designStory = variant.designStory
        lineage.overview = variant.overview
        lineage.image = variant.image
        lineage.imageBackground = variant.imageBackground
        lineage.colours = variant.colours
        lineage.specs = variant.specs
      }
    }
  }

  return Array.from(lineageMap.values())
}

export function getHistoricalVariantLineageBySlug(
  brandSlug,
  familySlug,
  generationSlug,
  variantSlug,
) {
  return getHistoricalVariantLineagesForGeneration(
    brandSlug,
    familySlug,
    generationSlug,
  ).find((variant) => variant.slug === variantSlug?.toLowerCase())
}
