import { createCarImage } from '../utils/svg.js'
import { getModelBySlug } from './carBrands.js'

function createCurrentVariant(config) {
  return {
    slug: config.slug,
    name: config.name,
    category: config.category,
    productionYears: config.productionYears,
    shortDescription: config.shortDescription,
    longDescription: config.longDescription,
    designStory: config.designStory,
    overview: config.overview,
    image: config.image,
    imageBackground: config.imageBackground,
    colours: config.colours,
    specs: config.specs,
    ownershipInfo: config.ownershipInfo,
    accuracy: config.accuracy,
    specialEditions: config.specialEditions,
  }
}

function getBmwOneSeriesRiskRating(config) {
  const name = config.name.toLowerCase()
  const engine = config.engineCode.toLowerCase()

  if (
    name.includes('1 series m') ||
    name.includes('135i') ||
    name.includes('m135i') ||
    name.includes('m140i')
  ) {
    return 'Moderate to high'
  }

  if (
    engine.includes('n47') ||
    engine.includes('n54') ||
    engine.includes('n13') ||
    engine.includes('n43')
  ) {
    return 'Moderate to high'
  }

  return 'Moderate'
}

function getBmwOneSeriesWatchouts(config) {
  const watchouts = [
    'Confirm the exact UK model year, body style, gearbox, and engine code because 1 Series badges changed engines across generations and facelifts.',
    'Check MOT history, tyre quality, suspension wear, brake condition, and evidence of regular servicing before trusting cosmetic presentation.',
  ]
  const engine = config.engineCode.toLowerCase()
  const name = config.name.toLowerCase()

  if (engine.includes('n47')) {
    watchouts.push(
      'N47 diesel cars need careful history checks around timing-chain noise, oil-service discipline, and diesel emissions equipment.',
    )
  }

  if (engine.includes('n43') || engine.includes('n13')) {
    watchouts.push(
      'N43/N13 petrol cars need checks for rough running, ignition/fuelling faults, oil leaks, and cooling-system condition.',
    )
  }

  if (engine.includes('b37') || engine.includes('b38') || engine.includes('b47') || engine.includes('b48')) {
    watchouts.push(
      'Later modular BMW engines are generally more modern, but coolant leaks, sensor faults, and long service intervals still matter.',
    )
  }

  if (engine.includes('n54') || engine.includes('n55') || engine.includes('b58')) {
    watchouts.push(
      'Six-cylinder performance cars need stronger checks for modifications, tyre quality, cooling health, drivetrain behaviour, and evidence of sympathetic ownership.',
    )
  }

  if (name.includes('m140i')) {
    watchouts.push(
      'M140i examples are often modified; stock or carefully documented cars are easier to value and usually safer to recommend.',
    )
  }

  return watchouts
}

function createBmwOneSeriesOwnershipInfo(config, drivetrain) {
  const riskRating = getBmwOneSeriesRiskRating(config)
  const isDiesel = config.fuelType.toLowerCase().includes('diesel')
  const isPerformance =
    config.name.toLowerCase().includes('m') ||
    config.name.includes('130') ||
    config.name.includes('135') ||
    config.name.includes('140')

  return {
    title: 'Ownership, servicing, recalls, and known issues',
    officialSummary: `${config.name} is listed here as a UK-market BMW 1 Series variant for ${config.productionYears}. The key identifiers for this record are ${config.engineCode}, ${config.power}, ${drivetrain}, and ${config.fuelType}.`,
    ownershipRiskSummary: {
      rating: riskRating,
      summary:
        riskRating === 'Moderate to high'
          ? 'This variant can be very rewarding, but purchase condition and engine-specific history matter heavily. Treat cheap or heavily modified examples with caution.'
          : 'This variant is a sensible 1 Series research entry, but age, maintenance quality, and generation-specific engine issues still matter more than badge appeal.',
      watchouts: getBmwOneSeriesWatchouts(config),
      bestBuyWindow: isPerformance
        ? 'The safest buy is a standard or lightly modified car with documented servicing, premium tyres, clean MOT history, and no vague engine or drivetrain story.'
        : 'The safest buy is a clean, standard car with complete service history, matching premium tyres, and evidence of timely fluid and consumable maintenance.',
    },
    bestSpecToBuy: {
      title: `Best used buy approach: buy the best-documented ${config.name}, not the cheapest one`,
      summary:
        'For older BMW 1 Series cars, the right purchase is usually the car with the clearest maintenance record and cleanest condition rather than the highest trim level for the money.',
      recommendedFeatures: [
        'Full or well-documented service history with mileage consistency.',
        'Clean MOT record with no recurring corrosion, tyre, brake, or suspension advisories.',
        'Evidence of quality tyres and correct alignment, especially on rear-drive and performance models.',
        isPerformance
          ? 'Standard engine calibration or high-quality documented modifications from a reputable specialist.'
          : 'Unmodified or lightly specified cars with no warning lights, rough running, or deferred maintenance.',
      ],
      avoidIf: [
        'The seller cannot explain engine code, service history, or major maintenance work.',
        'The car has budget tyres, unresolved warning lights, poor cold start behaviour, or patchy paperwork.',
        'The asking price relies on cosmetics while mechanical evidence is weak.',
      ],
    },
    faceliftGuide: [
      {
        area: 'Generation and facelift split',
        preLciYears: 'Earlier phase depends on generation and body style',
        preLci:
          'Earlier cars may use different engines, lighting, bumpers, interiors, or infotainment compared with later examples carrying the same badge.',
        lciYears: 'Later phase depends on generation and body style',
        lci:
          'Later cars can change engine families as well as styling, especially across the F20/F21 facelift period.',
        buyerImpact:
          'Do not rely on the badge alone. A 116i, 118i, 120d, or 125i can mean different engines depending on year and generation.',
      },
    ],
    serviceSchedule: [
      {
        item: 'Engine oil and filter',
        interval: 'Follow BMW CBS, but annual or shorter-interval servicing is preferred on older used examples',
        detail:
          'Condition Based Servicing may allow longer intervals, but older turbocharged and diesel cars benefit from conservative oil-service discipline.',
      },
      {
        item: 'Brake fluid',
        interval: 'Typically every 2 years',
        detail:
          'Brake fluid is time-sensitive and should not be ignored, especially on heavier-use or performance variants.',
      },
      {
        item: isDiesel ? 'Diesel system and emissions checks' : 'Ignition and cooling checks',
        interval: 'Inspect during servicing and before purchase',
        detail: isDiesel
          ? 'Check DPF use pattern, EGR-related history, injector behaviour, and cold-start smoothness.'
          : 'Check coils, plugs, coolant loss, thermostat/water-pump behaviour, and oil leaks.',
      },
    ],
    fluidRequirements: [
      {
        item: 'Engine oil',
        spec: `BMW-approved oil suitable for ${config.engineCode}`,
        note:
          'Use the exact BMW approval for the engine and model year rather than relying only on viscosity.',
      },
      {
        item: 'Coolant',
        spec: 'BMW-approved coolant only',
        note:
          'Incorrect coolant or unresolved coolant loss can create expensive issues on both four-cylinder and six-cylinder cars.',
      },
      {
        item: 'Transmission and differential fluids',
        spec: 'Use BMW/ZF/specialist-approved fluids for the exact gearbox and drivetrain',
        note:
          'Automatic gearbox and rear differential servicing is especially relevant on higher-mileage and performance variants.',
      },
    ],
    recalls: [
      {
        title: 'VIN-specific recall verification required',
        recallNumber: 'Check exact VIN',
        recallDate: 'Before purchase',
        summary:
          'BMW recall applicability is VIN-specific. Use the exact registration or VIN before relying on any broad model assumption.',
        appliesNote:
          'This variant record is UK-market oriented, but recall status must always be checked against the specific vehicle.',
        sourceUrl: 'https://www.check-vehicle-recalls.service.gov.uk/',
      },
    ],
    ownerReportedIssues: [
      'Interior wear, suspension knocks, tyre wear, and electrical niggles vary heavily by mileage and ownership quality.',
      isDiesel
        ? 'Diesel cars can suffer if used mainly for short trips because emissions hardware may not get the right use pattern.'
        : 'Petrol cars should be checked for smooth cold start, stable idle, coolant loss, and oil leaks.',
      isPerformance
        ? 'Performance models often show evidence of hard use through tyres, brakes, modifications, clutch/gearbox behaviour, and accident repair quality.'
        : 'Lower-output cars are often bought for economy, so deferred maintenance can matter more than headline performance.',
    ],
    engineFaults: [
      `${config.engineCode} should be verified against the VIN/build date because BMW changed engine families within the 1 Series range.`,
      isDiesel
        ? 'Diesel ownership checks should include timing-chain noise where relevant, DPF/EGR health, injector behaviour, and service interval discipline.'
        : 'Petrol ownership checks should include ignition components, cooling system condition, oil leaks, and rough running under load.',
      isPerformance
        ? 'On six-cylinder performance models, modifications and poor maintenance can create more risk than the base engine design itself.'
        : 'A well-maintained example is usually a better buy than a newer-looking car with vague history.',
    ],
    sourceLinks: [
      {
        label: 'BMW UK owner and service information',
        url: 'https://www.bmw.co.uk/en/topics/owners.html',
      },
      {
        label: 'UK Government vehicle recalls checker',
        url: 'https://www.check-vehicle-recalls.service.gov.uk/',
      },
      {
        label: 'BMW 1 Series owner community reference',
        url: 'https://www.babybmw.net/',
      },
    ],
    disclaimer:
      'This is buyer guidance for UK-market research. Confirm the exact VIN, build date, engine code, recall status, and service record before purchase.',
  }
}

function createBmwOneSeriesVariant(config) {
  const drivetrain = config.drivetrain ?? 'RWD'
  const bodyStyle = config.bodyStyle ?? 'Hatchback'
  const transmission = config.transmission ?? '6-speed manual / automatic'
  const image = config.image ?? bmwCompactImage
  const imageBackground =
    config.imageBackground ??
    'linear-gradient(135deg, #111827 0%, #334155 44%, #e5e7eb 100%)'

  return createCurrentVariant({
    slug: config.slug,
    name: config.name,
    category: config.category,
    productionYears: config.productionYears,
    shortDescription: config.shortDescription,
    longDescription:
      config.longDescription ??
      `${config.name} sits in the BMW 1 Series range as a ${config.category.toLowerCase()} with ${config.power}, ${drivetrain}, and the ${config.engineCode} engine family.`,
    designStory:
      config.designStory ??
      'The 1 Series keeps compact BMW proportions while the exact body style and drivetrain layout depend heavily on generation.',
    overview:
      config.overview ??
      `Use this record as the starting point for comparing ${config.name} against nearby 1 Series engine choices in the same generation.`,
    image,
    imageBackground,
    colours: config.colours ?? [
      { name: 'Alpine White', hex: '#f8fafc' },
      { name: 'Black Sapphire', hex: '#111827' },
      { name: 'Mineral Grey', hex: '#64748b' },
    ],
    specs: {
      power: config.power,
      zeroToSixty: config.zeroToSixty,
      topSpeed: config.topSpeed,
      drivetrain,
      transmission,
      seats: config.seats ?? '5',
      fuelType: config.fuelType,
      bodyStyle,
      engineCode: config.engineCode,
    },
    accuracy: config.accuracy ?? {
      market: 'UK',
      status: 'Needs source confirmation',
      sourceType: 'Initial Drive Atlas research dataset',
      notes:
        'Figures are structured for UK-market browsing and should be upgraded to official brochure/press-source verification before being treated as final.',
    },
    specialEditions: config.specialEditions,
    ownershipInfo:
      config.ownershipInfo ?? createBmwOneSeriesOwnershipInfo(config, drivetrain),
  })
}

function createBmwSeriesVariant(config) {
  const drivetrain = config.drivetrain ?? 'RWD'
  const bodyStyle = config.bodyStyle ?? 'Saloon'
  const transmission = config.transmission ?? '6-speed manual / automatic'
  const image = config.image ?? bmwCoreImage
  const imageBackground =
    config.imageBackground ??
    'linear-gradient(135deg, #111827 0%, #2563eb 42%, #dbeafe 100%)'

  return createCurrentVariant({
    slug: config.slug,
    name: config.name,
    category: config.category,
    productionYears: config.productionYears,
    shortDescription: config.shortDescription,
    longDescription:
      config.longDescription ??
      `${config.name} is a UK-market BMW ${config.seriesName} variant with ${config.power}, ${drivetrain}, and the ${config.engineCode} engine family.`,
    designStory:
      config.designStory ??
      'BMW generation codes and body styles matter here because engines, styling, chassis feel, and buyer risk can change heavily across one model badge.',
    overview:
      config.overview ??
      `Use this record to compare the ${config.name} against nearby ${config.seriesName} variants in the same generation and body style.`,
    image,
    imageBackground,
    colours: config.colours ?? [
      { name: 'Alpine White', hex: '#f8fafc' },
      { name: 'Black Sapphire', hex: '#111827' },
      { name: 'Mineral Grey', hex: '#64748b' },
    ],
    specs: {
      power: config.power,
      zeroToSixty: config.zeroToSixty,
      topSpeed: config.topSpeed,
      drivetrain,
      transmission,
      seats: config.seats ?? '5',
      fuelType: config.fuelType,
      bodyStyle,
      engineCode: config.engineCode,
    },
    accuracy: config.accuracy ?? {
      market: 'UK',
      status: 'Needs source confirmation',
      sourceType: 'Initial Drive Atlas UK-market research dataset',
      notes:
        'Core variant placement is UK-market oriented. Confirm exact output, gearbox, body style, and engine code against official brochures or VIN/build data before treating this as final.',
    },
    specialEditions: config.specialEditions,
    ownershipInfo:
      config.ownershipInfo ??
      createBmwSeriesOwnershipInfo({ ...config, bodyStyle, transmission }, drivetrain),
  })
}

function createBmwSeriesOwnershipInfo(config, drivetrain) {
  const name = config.name.toLowerCase()
  const engine = config.engineCode.toLowerCase()
  const isDiesel = config.fuelType.toLowerCase().includes('diesel')
  const isMCar =
    name.includes('m2') ||
    name.includes('m3') ||
    name.includes('m340') ||
    name.includes('m240') ||
    name.includes('335') ||
    name.includes('340')
  const higherRisk =
    isMCar ||
    engine.includes('n47') ||
    engine.includes('n54') ||
    engine.includes('n55') ||
    engine.includes('s55') ||
    engine.includes('s58')

  return {
    title: 'Ownership, servicing, recalls, and known issues',
    officialSummary: `${config.name} is listed as a UK-market BMW ${config.seriesName} variant for ${config.productionYears}. The key identifiers are ${config.engineCode}, ${config.power}, ${drivetrain}, ${config.fuelType}, and ${config.bodyStyle}.`,
    ownershipRiskSummary: {
      rating: higherRisk ? 'Moderate to high' : 'Moderate',
      summary: higherRisk
        ? 'This variant needs careful purchase discipline because engine condition, modifications, tyres, brakes, drivetrain behaviour, and service history can change ownership risk quickly.'
        : 'This variant is usually a sensible research entry, but BMW running costs, age, exact engine family, and maintenance quality still matter.',
      watchouts: [
        'Confirm exact UK market year, body style, gearbox, and engine code because BMW badges can change meaning across generations.',
        isDiesel
          ? 'Check DPF/EGR use pattern, cold-start behaviour, injector smoothness, and diesel service discipline.'
          : 'Check cold start, idle quality, coolant loss, oil leaks, ignition behaviour, and warning lights.',
        isMCar
          ? 'Inspect modification history, tyre quality, brake condition, cooling health, accident repair quality, and evidence of hard use.'
          : 'Inspect tyres, suspension wear, brake condition, MOT history, and evidence of regular servicing.',
      ],
      bestBuyWindow: isMCar
        ? 'A standard or high-quality specialist-maintained car with strong history, premium tyres, clean diagnostics, and no vague tuning story is the safest buy.'
        : 'A clean, standard car with complete history, matching premium tyres, and no recurring MOT advisories is usually the safest buy.',
    },
    bestSpecToBuy: {
      title: `Best used buy approach: buy the best-documented ${config.name}`,
      summary:
        'Condition, servicing, tyre quality, and clear ownership history matter more than chasing the cheapest example or the longest option list.',
      recommendedFeatures: [
        'Complete service history with mileage consistency and evidence of fluid maintenance.',
        'Clean MOT pattern with no recurring suspension, brake, tyre, or corrosion warnings.',
        'Correct tyres and sensible alignment, especially on rear-drive and performance variants.',
        isMCar
          ? 'Evidence of specialist inspection or preventative maintenance before purchase.'
          : 'Original or lightly modified condition with no unresolved warning lights.',
      ],
      avoidIf: [
        'The seller cannot confirm engine code, build year, or service history.',
        'There are budget tyres, warning lights, rough running, coolant loss, or vague modification claims.',
        'The price looks attractive only because important maintenance has been deferred.',
      ],
    },
    faceliftGuide: [
      {
        area: 'Generation and body-style split',
        preLciYears: 'Earlier phase depends on generation',
        preLci:
          'Earlier cars can use different engines, interior systems, lighting, and trim logic even when the badge looks familiar.',
        lciYears: 'Later phase depends on generation',
        lci:
          'Later facelift cars may improve styling, infotainment, engine family, or equipment, but they still need car-specific checks.',
        buyerImpact:
          'Always compare by generation code and body style first, then by badge. A saloon, touring, coupe, convertible, Gran Coupe, or M car can have materially different buyer risk.',
      },
    ],
    serviceSchedule: [
      {
        item: 'Engine oil and filter',
        interval: 'Follow BMW CBS, but annual or shorter-interval servicing is preferred on used examples',
        detail:
          'Conservative oil servicing is especially valuable on turbocharged petrols, diesels, and performance variants.',
      },
      {
        item: 'Brake fluid',
        interval: 'Typically every 2 years',
        detail:
          'Brake fluid is a routine safety item and should be visible in the service history.',
      },
      {
        item: isMCar ? 'Performance consumables' : 'Drivetrain and suspension inspection',
        interval: 'Before purchase and at routine service',
        detail: isMCar
          ? 'Inspect tyres, brakes, cooling system, differential behaviour, gearbox behaviour, and modification quality.'
          : 'Inspect suspension arms, dampers, bushings, tyres, brake wear, and gearbox smoothness.',
      },
    ],
    fluidRequirements: [
      {
        item: 'Engine oil',
        spec: `BMW-approved oil suitable for ${config.engineCode}`,
        note:
          'Use the exact approval for the model year, engine, and service regime rather than relying on viscosity alone.',
      },
      {
        item: 'Coolant',
        spec: 'BMW-approved coolant only',
        note:
          'Cooling-system health is important across BMW petrol, diesel, and M models.',
      },
      {
        item: 'Gearbox and differential fluids',
        spec: 'BMW/ZF/specialist-approved fluids for the exact drivetrain',
        note:
          'Higher-mileage automatic, manual, xDrive, M differential, and performance cars benefit from careful drivetrain-fluid history.',
      },
    ],
    recalls: [
      {
        title: 'VIN-specific recall verification required',
        recallNumber: 'Check exact VIN',
        recallDate: 'Before purchase',
        summary:
          'BMW recall campaigns are VIN-specific, so broad model guidance is not enough.',
        appliesNote:
          'Check the exact registration or VIN using BMW or the UK Government recall checker.',
        sourceUrl: 'https://www.check-vehicle-recalls.service.gov.uk/',
      },
    ],
    ownerReportedIssues: [
      'Used BMW ownership risk varies heavily by history, tyres, servicing discipline, and whether the car has been modified.',
      isDiesel
        ? 'Diesel examples need particular attention to short-trip use, emissions equipment, timing-chain noise where relevant, and injector behaviour.'
        : 'Petrol examples need particular attention to coolant loss, oil leaks, ignition/fuelling behaviour, and rough running.',
      isMCar
        ? 'Performance examples often reveal hard use through brakes, tyres, drivetrain knocks, coding/tuning history, and accident repair quality.'
        : 'Mainstream examples often suffer more from deferred maintenance than from one dramatic headline fault.',
    ],
    engineFaults: [
      `${config.engineCode} should be confirmed against build date or VIN because engine families can change inside one badge.`,
      isDiesel
        ? 'Check diesel timing-chain reputation where relevant, DPF/EGR health, injector behaviour, and oil service quality.'
        : 'Check ignition system, cooling system, oil leaks, crankcase ventilation, and turbo-related behaviour where relevant.',
      isMCar
        ? 'On performance variants, poor tuning or hard use can create more risk than the base engine design.'
        : 'The best car is usually the one with the clearest history rather than the lowest mileage alone.',
    ],
    sourceLinks: [
      {
        label: 'BMW UK owner and service information',
        url: 'https://www.bmw.co.uk/en/topics/owners.html',
      },
      {
        label: 'UK Government vehicle recalls checker',
        url: 'https://www.check-vehicle-recalls.service.gov.uk/',
      },
    ],
    disclaimer:
      'This is UK-market buyer guidance. Confirm exact VIN, build date, engine code, recall status, and service record before purchase.',
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

const bmwCompactImage = createCarImage({
  body: '#e5e7eb',
  accent: '#0f172a',
  glow: '#cbd5e1',
})

const bmwCoupeImage = createCarImage({
  body: '#dbeafe',
  accent: '#1d4ed8',
  glow: '#93c5fd',
})

const vwGolfImage = createCarImage({
  body: '#dbeafe',
  accent: '#1d4ed8',
  glow: '#93c5fd',
})

const bmw330iOwnership = getModelBySlug('bmw', '330i')?.ownershipInfo
const bmwM340iOwnership = getModelBySlug('bmw', 'm340i')?.ownershipInfo
// Reusing ownership data from the older flat model dataset avoids throwing away
// the richer detail work that already existed for these BMW variants.

function createVolkswagenOwnershipInfo(config, drivetrain) {
  const name = config.name.toLowerCase()
  const isDiesel = config.fuelType.toLowerCase().includes('diesel')
  const isPerformance =
    name.includes('gti') ||
    name.includes('gtd') ||
    name.includes('golf r') ||
    name.includes('clubsport') ||
    name.includes('edition 30') ||
    name.includes('edition 35')
  const riskRating = isPerformance ? 'Moderate to high' : 'Moderate'

  return {
    title: 'Ownership, servicing, recalls, and known issues',
    officialSummary: `${config.name} is listed as a UK-market Volkswagen Golf variant for ${config.productionYears}. The key identifiers are ${config.engineCode}, ${config.power}, ${drivetrain}, ${config.fuelType}, and ${config.bodyStyle}.`,
    ownershipRiskSummary: {
      rating: riskRating,
      summary: isPerformance
        ? 'Performance Golf variants can be excellent used buys, but tuning, DSG condition, Haldex servicing where fitted, tyre quality, and hard use need careful checks.'
        : 'Mainstream Golf variants are usually practical and familiar, but age, maintenance quality, diesel emissions equipment, and exact engine family still matter.',
      watchouts: [
        'Confirm exact UK model year, generation, gearbox, and engine family because Golf badges and outputs changed across facelifts.',
        isDiesel
          ? 'Diesel cars need checks for DPF/EGR health, short-trip use, injector behaviour, and timing-belt/water-pump history where applicable.'
          : 'Petrol cars need checks for coolant leaks, oil leaks, ignition behaviour, timing-chain or belt history depending on engine, and rough running.',
        isPerformance
          ? 'Inspect for remaps, launch-heavy use, mixed tyres, poor alignment, DSG servicing, Haldex servicing on AWD cars, and cheap modifications.'
          : 'Inspect suspension wear, brakes, tyres, infotainment/electrical behaviour, and evidence of routine servicing.',
      ],
      bestBuyWindow: isPerformance
        ? 'The safest buy is a standard or well-documented specialist-maintained car with premium tyres, correct DSG/Haldex servicing where relevant, and no vague tuning story.'
        : 'The safest buy is a clean, standard car with full history, correct cambelt or timing-chain evidence where relevant, and no recurring MOT advisories.',
    },
    bestSpecToBuy: {
      title: `Best used buy approach: buy the best-documented ${config.name}`,
      summary:
        'With used Golfs, the strongest purchase is usually the car with the cleanest maintenance evidence rather than the cheapest example or the longest option list.',
      recommendedFeatures: [
        'Full service history with mileage consistency and correct oil specification.',
        isDiesel
          ? 'Evidence of suitable use pattern and emissions-system health.'
          : 'Smooth cold start, stable idle, and no coolant or oil leak concerns.',
        isPerformance
          ? 'Documented DSG and Haldex service history where applicable, premium tyres, and no unclear remap story.'
          : 'Good tyres, clean MOT history, and no unresolved warning lights.',
      ],
      avoidIf: [
        'The seller cannot explain service history, gearbox servicing, or engine family.',
        'The car has budget tyres, recurring warning lights, poor cold-start behaviour, or vague modification claims.',
        'The asking price relies on cosmetic upgrades while mechanical evidence is weak.',
      ],
    },
    faceliftGuide: [
      {
        area: 'Generation and facelift split',
        preLciYears: 'Earlier phase depends on Golf generation',
        preLci:
          'Earlier Golf phases can use different engines, infotainment systems, lighting, trim names, and gearbox calibration.',
        lciYears: 'Later phase depends on Golf generation',
        lci:
          'Later facelift cars can bring stronger equipment, revised engines, updated infotainment, and different performance outputs.',
        buyerImpact:
          'Always compare by generation first, then by trim and engine. A GTI, GTD, or R badge can mean different hardware depending on year.',
      },
    ],
    serviceSchedule: [
      {
        item: 'Engine oil and filter',
        interval: 'Annual or according to VW service regime, with conservative intervals preferred on used cars',
        detail:
          'Use the correct VW oil approval for the exact engine and avoid stretching intervals on turbocharged or performance variants.',
      },
      {
        item: 'DSG service',
        interval: 'Transmission-specific; commonly important on wet-clutch DSG applications',
        detail:
          'Do not assume every DSG has the same interval. Verify the exact gearbox and service evidence.',
      },
      {
        item: drivetrain.toLowerCase().includes('awd') ? 'Haldex service' : 'Timing belt/chain checks',
        interval: drivetrain.toLowerCase().includes('awd')
          ? 'Regular Haldex service evidence required'
          : 'Engine-specific schedule or inspection',
        detail: drivetrain.toLowerCase().includes('awd')
          ? 'Golf R and other AWD variants need evidence of Haldex fluid and filter/pump maintenance.'
          : 'Confirm timing belt or timing chain expectations for the exact engine code and model year.',
      },
    ],
    fluidRequirements: [
      {
        item: 'Engine oil',
        spec: `VW-approved oil suitable for ${config.engineCode}`,
        note:
          'Use the exact VW approval for the engine and service regime rather than relying only on viscosity.',
      },
      {
        item: 'Coolant',
        spec: 'VW Group-approved coolant only',
        note:
          'Correct coolant and leak-free cooling-system behaviour matter across petrol, diesel, GTI, GTD, and R variants.',
      },
      {
        item: 'Gearbox and AWD fluids',
        spec: 'VW-approved DSG/manual/Haldex fluids for the exact drivetrain',
        note:
          'DSG and Haldex maintenance evidence is a major used-buying checkpoint on performance variants.',
      },
    ],
    recalls: [
      {
        title: 'VIN-specific recall verification required',
        recallNumber: 'Check exact VIN',
        recallDate: 'Before purchase',
        summary:
          'Volkswagen recall campaigns are VIN-specific, so broad model guidance is not enough.',
        appliesNote:
          'Check the exact registration or VIN using Volkswagen or the UK Government recall checker.',
        sourceUrl: 'https://www.check-vehicle-recalls.service.gov.uk/',
      },
    ],
    ownerReportedIssues: [
      isDiesel
        ? 'Diesel examples can suffer if used mainly for short journeys because DPF/EGR systems may not get ideal operating conditions.'
        : 'Petrol examples should be checked for coolant loss, oil leaks, ignition faults, and rough running.',
      isPerformance
        ? 'Performance Golf examples often reveal poor ownership through tyres, brakes, remaps, DSG behaviour, Haldex neglect, and cheap hardware modifications.'
        : 'Mainstream Golf examples often suffer more from deferred servicing and electrical niggles than from one single headline fault.',
      'Infotainment, sensors, and electrical convenience features should be checked carefully on newer cars.',
    ],
    engineFaults: [
      `${config.engineCode} should be confirmed against VIN/build date because VW engine families and outputs changed across Golf generations.`,
      isDiesel
        ? 'Diesel checks should include DPF/EGR health, injector behaviour, timing-belt history where applicable, and oil service quality.'
        : 'Petrol checks should include timing system expectations, coolant leaks, ignition components, turbo behaviour, and oil leaks.',
      isPerformance
        ? 'Tuning quality and drivetrain maintenance can create more risk than the stock engine design itself.'
        : 'A well-maintained standard car is usually a better buy than a cheap car with missing history.',
    ],
    sourceLinks: [
      {
        label: 'Volkswagen UK owners information',
        url: 'https://www.volkswagen.co.uk/en/owners-and-services.html',
      },
      {
        label: 'UK Government vehicle recalls checker',
        url: 'https://www.check-vehicle-recalls.service.gov.uk/',
      },
    ],
    disclaimer:
      'This is UK-market buyer guidance. Confirm exact VIN, build date, engine code, recall status, and service record before purchase.',
  }
}

function createVolkswagenVariant(config) {
  const drivetrain = config.drivetrain ?? 'FWD'
  const bodyStyle = config.bodyStyle ?? 'Hatchback'
  const transmission = config.transmission ?? 'Manual / DSG automatic'
  const image = config.image ?? vwGolfImage
  const imageBackground =
    config.imageBackground ??
    'linear-gradient(135deg, #111827 0%, #1d4ed8 42%, #dbeafe 100%)'

  return createCurrentVariant({
    slug: config.slug,
    name: config.name,
    category: config.category,
    productionYears: config.productionYears,
    shortDescription: config.shortDescription,
    longDescription:
      config.longDescription ??
      `${config.name} is a UK-market Volkswagen Golf variant with ${config.power}, ${drivetrain}, and the ${config.engineCode} engine family.`,
    designStory:
      config.designStory ??
      'Golf generations are best understood by platform and trim because the same badge can mean different engines, interiors, equipment, and buyer risks across eras.',
    overview:
      config.overview ??
      `Use this record to compare ${config.name} against nearby Golf variants in the same generation.`,
    image,
    imageBackground,
    colours: config.colours ?? [
      { name: 'Pure White', hex: '#f8fafc' },
      { name: 'Deep Black', hex: '#111827' },
      { name: 'Reflex Silver', hex: '#cbd5e1' },
    ],
    specs: {
      power: config.power,
      zeroToSixty: config.zeroToSixty,
      topSpeed: config.topSpeed,
      drivetrain,
      transmission,
      seats: config.seats ?? '5',
      fuelType: config.fuelType,
      bodyStyle,
      engineCode: config.engineCode,
    },
    accuracy: config.accuracy ?? {
      market: 'UK',
      status: 'Needs source confirmation',
      sourceType: 'Initial Drive Atlas UK-market research dataset',
      notes:
        'Core variant placement is UK-market oriented. Confirm exact output, engine code, gearbox, and equipment against official brochure, VIN, or build-date data before treating it as final.',
    },
    specialEditions: config.specialEditions,
    ownershipInfo:
      config.ownershipInfo ?? createVolkswagenOwnershipInfo(config, drivetrain),
  })
}

export const currentBrandFamilies = {
  bmw: {
    families: [
      {
        slug: '1-series',
        name: '1 Series',
        category: 'Premium compact hatchback and coupe',
        description:
          'BMW 1 Series coverage from the rear-drive E8x cars through the F20/F21 generation and up to the M140i, with generation-specific engine codes and drivetrain context.',
        image: bmwCompactImage,
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #334155 44%, #e5e7eb 100%)',
        generations: [
          {
            slug: 'e81-e82-e87-e88',
            label: 'E81 / E82 / E87 / E88 1 Series',
            yearStart: 2004,
            yearEnd: 2013,
            summary:
              'The first-generation 1 Series is the rear-drive era: hatchback, coupe, and convertible bodies with everything from modest four-cylinder petrols and diesels through to six-cylinder 130i and 135i models.',
            variants: [
              createBmwOneSeriesVariant({
                slug: 'e87-116i',
                name: '116i',
                category: 'Entry petrol hatchback',
                productionYears: '2004 to 2011',
                engineCode: 'N45 / N43 depending on year',
                power: '115-122 hp',
                zeroToSixty: '10.1-10.8 s',
                topSpeed: '124-127 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The entry petrol E8x 1 Series, best understood as the low-cost rear-drive route rather than a performance choice.',
              }),
              createBmwOneSeriesVariant({
                slug: 'e87-116d',
                name: '116d',
                category: 'Entry diesel hatchback',
                productionYears: '2009 to 2011',
                engineCode: 'N47D20',
                power: '116 hp',
                zeroToSixty: '10.2 s',
                topSpeed: '124 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The economy-led E8x diesel, useful for mileage-focused buyers but dependent on careful diesel maintenance history.',
              }),
              createBmwOneSeriesVariant({
                slug: 'e87-118i',
                name: '118i',
                category: 'Core petrol hatchback',
                productionYears: '2004 to 2011',
                engineCode: 'N46 / N43 depending on year',
                power: '129-143 hp',
                zeroToSixty: '8.7-9.4 s',
                topSpeed: '130-131 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The more usable four-cylinder petrol E8x choice, still rear-drive but not as characterful as the six-cylinder cars.',
              }),
              createBmwOneSeriesVariant({
                slug: 'e87-118d',
                name: '118d',
                category: 'Core diesel hatchback',
                productionYears: '2004 to 2011',
                engineCode: 'M47 / N47 depending on year',
                power: '122-143 hp',
                zeroToSixty: '8.9-10.0 s',
                topSpeed: '125-130 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The mainstream E8x diesel, commonly bought for torque and economy rather than excitement.',
              }),
              createBmwOneSeriesVariant({
                slug: 'e87-120i',
                name: '120i',
                category: 'Stronger petrol hatchback',
                productionYears: '2004 to 2011',
                engineCode: 'N46 / N43 depending on year',
                power: '150-170 hp',
                zeroToSixty: '7.7-8.4 s',
                topSpeed: '135-139 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The stronger four-cylinder petrol E8x, offering more convincing performance while staying below the six-cylinder cars.',
              }),
              createBmwOneSeriesVariant({
                slug: 'e87-120d',
                name: '120d',
                category: 'Strong diesel hatchback',
                productionYears: '2004 to 2011',
                engineCode: 'M47 / N47 depending on year',
                power: '163-177 hp',
                zeroToSixty: '7.5-7.9 s',
                topSpeed: '137-142 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The punchier diesel E8x choice, often the best real-world performance and economy balance in the early range.',
              }),
              createBmwOneSeriesVariant({
                slug: 'e87-123d',
                name: '123d',
                category: 'Twin-turbo diesel hatchback',
                productionYears: '2007 to 2011',
                engineCode: 'N47D20 twin-turbo',
                power: '204 hp',
                zeroToSixty: '6.9 s',
                topSpeed: '148 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The specialist twin-turbo diesel E8x, giving the first-generation 1 Series unusually strong diesel performance.',
              }),
              createBmwOneSeriesVariant({
                slug: 'e87-130i',
                name: '130i',
                category: 'Six-cylinder hot hatch',
                productionYears: '2005 to 2011',
                engineCode: 'N52B30',
                power: '265 hp',
                zeroToSixty: '6.0 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The naturally aspirated straight-six 1 Series hatch and one of the most distinctive enthusiast choices in the range.',
                image: bmwPerformanceImage,
              }),
              createBmwOneSeriesVariant({
                slug: 'e82-135i-coupe',
                name: '135i Coupe',
                category: 'Turbo six-cylinder coupe',
                productionYears: '2007 to 2013',
                engineCode: 'N54 / N55 depending on year',
                power: '306 hp',
                zeroToSixty: '5.1-5.3 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                seats: '4',
                shortDescription:
                  'The compact turbocharged six-cylinder coupe that previews the later M Performance 1 Series formula.',
                image: bmwPerformanceImage,
              }),
              createBmwOneSeriesVariant({
                slug: 'e82-1m-coupe',
                name: '1 Series M Coupe',
                category: 'Limited M car coupe',
                productionYears: '2011 to 2012',
                engineCode: 'N54B30TO',
                power: '340 hp',
                zeroToSixty: '4.8 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                seats: '4',
                shortDescription:
                  'The limited-run 1 Series M Coupe, a short-lived M car that sits above the regular 135i in focus and desirability.',
                image: bmwMImage,
              }),
            ],
          },
          {
            slug: 'f20-f21',
            label: 'F20 / F21 1 Series',
            yearStart: 2011,
            yearEnd: 2019,
            summary:
              'The second-generation 1 Series keeps rear-wheel drive for mainstream hatchback buyers and stretches from economical three-cylinder and four-cylinder cars to the six-cylinder M135i and M140i.',
            variants: [
              createBmwOneSeriesVariant({
                slug: 'f20-114i',
                name: '114i',
                category: 'Entry petrol hatchback',
                productionYears: '2012 to 2015',
                engineCode: 'N13B16',
                power: '102 hp',
                zeroToSixty: '11.2 s',
                topSpeed: '121 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The lowest-output F20 petrol, mainly relevant as a budget entry point rather than a driver-focused pick.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-114d',
                name: '114d',
                category: 'Entry diesel hatchback',
                productionYears: '2012 to 2015',
                engineCode: 'N47D16',
                power: '95 hp',
                zeroToSixty: '12.2 s',
                topSpeed: '115 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The most economy-led F20 diesel, slow but useful for buyers focused on low running costs.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-116i',
                name: '116i',
                category: 'Entry petrol hatchback',
                productionYears: '2011 to 2015',
                engineCode: 'N13B16',
                power: '136 hp',
                zeroToSixty: '8.5 s',
                topSpeed: '130 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The common early F20 petrol choice using BMW’s turbocharged N13 four-cylinder.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-lci-116i',
                name: '116i LCI',
                category: 'Facelift entry petrol hatchback',
                productionYears: '2015 to 2019',
                engineCode: 'B38B15',
                power: '109 hp',
                zeroToSixty: '10.9 s',
                topSpeed: '121 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The facelift 116i moved to BMW’s B38 three-cylinder engine, so it should not be treated as the same car as the earlier N13 116i.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-116d',
                name: '116d',
                category: 'Entry diesel hatchback',
                productionYears: '2011 to 2019',
                engineCode: 'N47D16 / B37 depending on year',
                power: '116 hp',
                zeroToSixty: '10.3 s',
                topSpeed: '124 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The mainstream economy diesel F20, with engine family depending on pre-facelift or LCI timing.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-118i',
                name: '118i',
                category: 'Core petrol hatchback',
                productionYears: '2015 to 2019',
                engineCode: 'B38B15',
                power: '136 hp',
                zeroToSixty: '8.5 s',
                topSpeed: '130 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The facelift core petrol 1 Series, using the B38 three-cylinder rather than the earlier N13 four-cylinder.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-118d',
                name: '118d',
                category: 'Core diesel hatchback',
                productionYears: '2011 to 2019',
                engineCode: 'N47D20 / B47D20 depending on year',
                power: '143-150 hp',
                zeroToSixty: '8.1-8.9 s',
                topSpeed: '132 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The stronger everyday diesel and one of the most common rational F20 choices.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-120i',
                name: '120i',
                category: 'Stronger petrol hatchback',
                productionYears: '2015 to 2019',
                engineCode: 'B48B20',
                power: '184 hp',
                zeroToSixty: '7.1 s',
                topSpeed: '143 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The B48-powered petrol sweet spot for buyers wanting useful performance without M Performance running costs.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-120d',
                name: '120d',
                category: 'Strong diesel hatchback',
                productionYears: '2011 to 2019',
                engineCode: 'N47D20 / B47D20 depending on year',
                power: '184-190 hp',
                zeroToSixty: '7.0-7.3 s',
                topSpeed: '142 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The higher-output diesel hatchback, available with strong torque and optional xDrive in some markets.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-120d-xdrive',
                name: '120d xDrive',
                category: 'All-wheel-drive diesel hatchback',
                productionYears: '2012 to 2019',
                engineCode: 'N47D20 / B47D20 depending on year',
                power: '184-190 hp',
                zeroToSixty: '6.8-7.2 s',
                topSpeed: '140 mph',
                drivetrain: 'xDrive AWD',
                fuelType: 'Diesel',
                shortDescription:
                  'The traction-focused 120d variant for buyers wanting diesel torque with all-weather security.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-125i',
                name: '125i',
                category: 'Warm petrol hatchback',
                productionYears: '2012 to 2019',
                engineCode: 'N20B20 / B48B20 depending on year',
                power: '218-224 hp',
                zeroToSixty: '6.1-6.4 s',
                topSpeed: '151 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The warm petrol F20 below the six-cylinder models, with engine family changing around the facelift period.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-125d',
                name: '125d',
                category: 'Twin-turbo diesel hatchback',
                productionYears: '2012 to 2019',
                engineCode: 'N47D20 / B47D20 twin-turbo depending on year',
                power: '218-224 hp',
                zeroToSixty: '6.3-6.5 s',
                topSpeed: '149 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The fast diesel 1 Series, combining strong torque with lower fuel use than the six-cylinder petrol cars.',
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-m135i',
                name: 'M135i',
                category: 'M Performance six-cylinder hatchback',
                productionYears: '2012 to 2016',
                engineCode: 'N55B30',
                power: '320-326 hp',
                zeroToSixty: '4.9-5.1 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                transmission: '6-speed manual / 8-speed automatic',
                shortDescription:
                  'The original M Performance F20 hot hatch, using the N55 straight-six and rear-wheel drive as standard.',
                image: bmwPerformanceImage,
              }),
              createBmwOneSeriesVariant({
                slug: 'f20-m140i',
                name: 'M140i',
                category: 'M Performance six-cylinder hatchback',
                productionYears: '2016 to 2019',
                engineCode: 'B58B30',
                power: '340 hp',
                zeroToSixty: '4.6-4.8 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                transmission: '6-speed manual / 8-speed automatic',
                shortDescription:
                  'The B58-powered M Performance 1 Series and the final rear-drive six-cylinder 1 Series hatchback era.',
                image: bmwPerformanceImage,
                accuracy: {
                  market: 'UK',
                  status: 'Cross-checked',
                  sourceType: 'BMW UK/press context plus technical-data cross-check',
                  notes:
                    'Core identity, B58 engine family, and UK Shadow Edition relationship have been checked, but full brochure-level trim/equipment validation should still be completed.',
                  sources: [
                    {
                      label: 'BMW UK 1 Series 3-door Shadow Edition press material',
                      url: 'https://www.press.bmwgroup.com/united-kingdom',
                    },
                  ],
                },
                specialEditions: [
                  {
                    name: 'M140i Shadow Edition',
                    years: '2017 to 2019',
                    summary:
                      'A UK-market special-edition presentation of the M140i, most notable for its darker exterior detailing and upgraded equipment focus rather than a different engine tune.',
                    distinguishingFeatures: [
                      'Black exterior detailing and darker lighting treatment depending on body style and model year.',
                      'M140i B58 performance hardware remains the core appeal.',
                      'Treat as a specification/edition branch of the M140i rather than a separate mechanical model.',
                    ],
                  },
                ],
              }),
            ],
          },
        ],
      },
      {
        slug: '2-series',
        name: '2 Series',
        category: 'Compact coupe and practical compact family',
        description:
          'BMW 2 Series coverage for buyers comparing the compact coupe, Gran Coupe, and more practical family-led versions before moving into larger BMW ranges.',
        image: bmwCoupeImage,
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #1d4ed8 42%, #bfdbfe 100%)',
        generations: [
          {
            slug: 'f22-f23-f87',
            label: 'F22 / F23 / F87 2 Series',
            yearStart: 2014,
            yearEnd: 2021,
            summary:
              'The previous-generation 2 Series covers the rear-drive coupe and convertible line, plus the F87 M2 branch that became the enthusiast halo of the range.',
            variants: [
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'f22-218i-coupe',
                name: '218i Coupe',
                category: 'Entry petrol coupe',
                productionYears: '2015 to 2021',
                engineCode: 'B38B15',
                power: '136 hp',
                zeroToSixty: '8.8 s',
                topSpeed: '132 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                shortDescription:
                  'The entry petrol F22 coupe, useful for buyers wanting compact rear-drive BMW coupe styling without high running costs.',
                image: bmwCoupeImage,
              }),
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'f22-220i-coupe',
                name: '220i Coupe',
                category: 'Core petrol coupe',
                productionYears: '2014 to 2021',
                engineCode: 'N20B20 / B48B20 depending on year',
                power: '184 hp',
                zeroToSixty: '7.0 s',
                topSpeed: '146 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                shortDescription:
                  'The mainstream F22 petrol coupe and one of the cleanest non-M ways into the compact BMW coupe formula.',
                image: bmwCoupeImage,
              }),
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'f22-220d-coupe',
                name: '220d Coupe',
                category: 'Core diesel coupe',
                productionYears: '2014 to 2021',
                engineCode: 'N47D20 / B47D20 depending on year',
                power: '184-190 hp',
                zeroToSixty: '7.0-7.2 s',
                topSpeed: '143 mph',
                fuelType: 'Diesel',
                bodyStyle: 'Coupe',
                shortDescription:
                  'The torque-rich diesel F22 coupe, often a strong real-world choice for buyers covering distance.',
                image: bmwCoupeImage,
              }),
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'f22-225d-coupe',
                name: '225d Coupe',
                category: 'Twin-turbo diesel coupe',
                productionYears: '2014 to 2021',
                engineCode: 'N47D20 / B47D20 twin-turbo depending on year',
                power: '218-224 hp',
                zeroToSixty: '6.2-6.3 s',
                topSpeed: '150 mph',
                fuelType: 'Diesel',
                bodyStyle: 'Coupe',
                shortDescription:
                  'The higher-output diesel 2 Series coupe, aimed at buyers wanting strong torque without petrol M Performance costs.',
                image: bmwCoupeImage,
              }),
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'f22-m235i-coupe',
                name: 'M235i Coupe',
                category: 'M Performance coupe',
                productionYears: '2014 to 2016',
                engineCode: 'N55B30',
                power: '326 hp',
                zeroToSixty: '4.8-5.0 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                shortDescription:
                  'The early M Performance F22 coupe, using the N55 straight-six before the M240i replaced it.',
                image: bmwPerformanceImage,
              }),
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'f22-m240i-coupe',
                name: 'M240i Coupe',
                category: 'M Performance coupe',
                productionYears: '2016 to 2021',
                engineCode: 'B58B30',
                power: '340 hp',
                zeroToSixty: '4.6-4.8 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                shortDescription:
                  'The B58-powered F22 M Performance coupe and the key enthusiast bridge between mainstream 2 Series and full M2.',
                image: bmwPerformanceImage,
              }),
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'f87-m2',
                name: 'M2',
                category: 'M car coupe',
                productionYears: '2016 to 2018',
                engineCode: 'N55B30T0',
                power: '370 hp',
                zeroToSixty: '4.3-4.5 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                shortDescription:
                  'The original F87 M2, prized for compact M-car dimensions and a more focused chassis than regular 2 Series models.',
                image: bmwMImage,
              }),
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'f87-m2-competition',
                name: 'M2 Competition',
                category: 'M car coupe',
                productionYears: '2018 to 2021',
                engineCode: 'S55B30',
                power: '410 hp',
                zeroToSixty: '4.2-4.4 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                shortDescription:
                  'The S55-powered M2 Competition, adding stronger M-engine hardware and becoming the default serious F87 recommendation for many buyers.',
                image: bmwMImage,
              }),
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'f87-m2-cs',
                name: 'M2 CS',
                category: 'Limited M car coupe',
                productionYears: '2020 to 2021',
                engineCode: 'S55B30',
                power: '450 hp',
                zeroToSixty: '4.0-4.2 s',
                topSpeed: '174 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                shortDescription:
                  'The limited-run F87 M2 CS, the collector-focused halo of the previous 2 Series M line.',
                image: bmwMImage,
              }),
            ],
          },
          {
            slug: 'g42-f44',
            label: 'G42 Coupe / F44 Gran Coupe',
            yearStart: 2020,
            yearEnd: 2026,
            summary:
              'The modern 2 Series range splits between driver-focused coupe choices and more practical four-door compact models, so body style matters as much as engine badge.',
            variants: [
              createCurrentVariant({
                slug: '218i-gran-coupe',
                name: '218i Gran Coupe',
                category: 'Entry four-door coupe',
                shortDescription:
                  'A style-led compact BMW with four-door usability and approachable petrol running costs.',
                longDescription:
                  'The 218i Gran Coupe suits buyers who want a sleeker compact BMW than a 1 Series hatchback while keeping rear doors and everyday usability.',
                designStory:
                  'Its lower roofline and longer rear deck give it a more dramatic shape than the hatch, even though the ownership brief stays practical.',
                overview:
                  'Choose this if styling matters but a full 3 Series feels too large or expensive.',
                image: bmwCoupeImage,
                imageBackground:
                  'linear-gradient(135deg, #0f172a 0%, #1d4ed8 42%, #dbeafe 100%)',
                colours: [
                  { name: 'Snapper Rocks Blue', hex: '#0284c7' },
                  { name: 'Alpine White', hex: '#f8fafc' },
                  { name: 'Black Sapphire', hex: '#111827' },
                ],
                specs: {
                  power: '136 hp',
                  zeroToSixty: '8.7 s',
                  topSpeed: '134 mph',
                  drivetrain: 'FWD',
                  transmission: '7-speed automatic',
                  seats: '5',
                  fuelType: 'Petrol',
                  bodyStyle: 'Gran Coupe',
                },
              }),
              createCurrentVariant({
                slug: '220i-coupe',
                name: '220i Coupe',
                category: 'Core petrol coupe',
                shortDescription:
                  'The cleaner driver-focused 2 Series choice for buyers who want coupe proportions without M240i costs.',
                longDescription:
                  'The 220i Coupe keeps the classic compact BMW coupe idea alive with rear-drive proportions, manageable running costs, and a more engaging shape than the Gran Coupe.',
                designStory:
                  'A long bonnet, short rear deck, and two-door profile make the 220i feel closer to BMW coupe tradition than most compact premium cars.',
                overview:
                  'Choose this if you want a proper compact coupe feel before stepping into high-performance versions.',
                image: bmwCoupeImage,
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #2563eb 42%, #dbeafe 100%)',
                colours: [
                  { name: 'Portimao Blue', hex: '#2563eb' },
                  { name: 'Brooklyn Grey', hex: '#9ca3af' },
                  { name: 'Alpine White', hex: '#f8fafc' },
                ],
                specs: {
                  power: '184 hp',
                  zeroToSixty: '7.5 s',
                  topSpeed: '147 mph',
                  drivetrain: 'RWD',
                  transmission: '8-speed automatic',
                  seats: '4',
                  fuelType: 'Petrol',
                  bodyStyle: 'Coupe',
                },
              }),
              createCurrentVariant({
                slug: '220d-coupe',
                name: '220d Coupe',
                category: 'Diesel compact coupe',
                shortDescription:
                  'The torque-led 2 Series coupe option for buyers who still cover regular distance.',
                longDescription:
                  'The 220d Coupe is the more rational long-distance compact coupe, mixing BMW coupe proportions with diesel efficiency and stronger mid-range torque.',
                designStory:
                  'It keeps the same compact coupe stance as the petrol car, so the choice is mostly about range and effortless motorway use.',
                overview:
                  'Choose this if you want coupe styling but diesel economy still fits your driving pattern.',
                image: bmwCoupeImage,
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #334155 42%, #cbd5e1 100%)',
                colours: [
                  { name: 'Brooklyn Grey', hex: '#9ca3af' },
                  { name: 'Black Sapphire', hex: '#111827' },
                  { name: 'Mineral White', hex: '#f8fafc' },
                ],
                specs: {
                  power: '190 hp',
                  zeroToSixty: '6.9 s',
                  topSpeed: '147 mph',
                  drivetrain: 'RWD',
                  transmission: '8-speed automatic',
                  seats: '4',
                  fuelType: 'Diesel mild hybrid',
                  bodyStyle: 'Coupe',
                },
              }),
              createCurrentVariant({
                slug: 'm240i-xdrive-coupe',
                name: 'M240i xDrive Coupe',
                category: 'Performance compact coupe',
                shortDescription:
                  'The fast six-cylinder 2 Series for buyers who want serious pace without moving to a full M2.',
                longDescription:
                  'The M240i xDrive Coupe is the high-performance sweet spot in the regular 2 Series range, combining B58 power, all-weather traction, and compact coupe packaging.',
                designStory:
                  'Wider stance, stronger bumper treatment, and larger wheel fitment give the M240i a denser and more serious look than the calmer 220i.',
                overview:
                  'Choose this if you want compact BMW performance with daily usability and less intensity than an M2.',
                image: bmwPerformanceImage,
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #334155 42%, #dce3ea 100%)',
                colours: [
                  { name: 'Thundernight Purple', hex: '#581c87' },
                  { name: 'Black Sapphire', hex: '#111827' },
                  { name: 'Brooklyn Grey', hex: '#9ca3af' },
                ],
                specs: {
                  power: '374 hp',
                  zeroToSixty: '4.3 s',
                  topSpeed: '155 mph',
                  drivetrain: 'xDrive AWD',
                  transmission: '8-speed automatic',
                  seats: '4',
                  fuelType: 'Petrol',
                  bodyStyle: 'Coupe',
                },
              }),
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'g42-230i-coupe',
                name: '230i Coupe',
                category: 'Stronger petrol coupe',
                productionYears: '2021 onward',
                engineCode: 'B48B20',
                power: '245 hp',
                zeroToSixty: '5.9 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                transmission: '8-speed automatic',
                shortDescription:
                  'The stronger four-cylinder G42 coupe, sitting between the 220i and six-cylinder M240i.',
                image: bmwCoupeImage,
              }),
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'f44-m235i-xdrive-gran-coupe',
                name: 'M235i xDrive Gran Coupe',
                category: 'Performance Gran Coupe',
                productionYears: '2020 onward',
                engineCode: 'B48A20T1',
                power: '306 hp',
                zeroToSixty: '4.9 s',
                topSpeed: '155 mph',
                drivetrain: 'xDrive AWD',
                fuelType: 'Petrol',
                bodyStyle: 'Gran Coupe',
                transmission: '8-speed automatic',
                shortDescription:
                  'The performance F44 Gran Coupe, mechanically separate in feel from the rear-drive coupe line but relevant to UK 2 Series buyers.',
                image: bmwPerformanceImage,
              }),
            ],
          },
          {
            slug: 'g87',
            label: 'G87 M2',
            yearStart: 2023,
            yearEnd: 2026,
            summary:
              'The current G87 M2 brings the S58 M engine into the compact 2 Series M car line, with manual and automatic availability depending on specification.',
            variants: [
              createBmwSeriesVariant({
                seriesName: '2 Series',
                slug: 'g87-m2',
                name: 'M2',
                category: 'M car coupe',
                productionYears: '2023 onward',
                engineCode: 'S58B30',
                power: '460-480 hp',
                zeroToSixty: '4.0-4.2 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                transmission: '6-speed manual / 8-speed automatic',
                shortDescription:
                  'The current G87 M2, using the S58 engine and keeping the compact M coupe idea alive in the modern range.',
                image: bmwMImage,
              }),
            ],
          },
        ],
      },
      {
        slug: '3-series',
        name: '3 Series',
        category: 'Compact executive ladder',
        description:
          'BMW compact executive coverage for buyers comparing the mainstream 3 Series range, plug-in hybrids, six-cylinder performance models, and the current M3 branch.',
        image: bmwCoreImage,
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #2563eb 42%, #dbeafe 100%)',
        generations: [
          {
            slug: 'e46',
            label: 'E46 3 Series',
            yearStart: 1998,
            yearEnd: 2006,
            summary:
              'The E46 is the early-2000s 3 Series generation, covering compact saloons, Touring estates, coupes, convertibles, diesels, six-cylinder petrols, and the S54-powered M3.',
            variants: [
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e46-318i-saloon',
                name: '318i Saloon',
                category: 'Four-cylinder petrol saloon',
                productionYears: '1998 to 2005',
                engineCode: 'M43 / N42 / N46 depending on year',
                power: '118-143 hp',
                zeroToSixty: '9.3-10.4 s',
                topSpeed: '128-134 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The common four-cylinder E46 petrol saloon, useful as an entry point but less desirable than the six-cylinder cars.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e46-320d-saloon',
                name: '320d Saloon',
                category: 'Diesel saloon',
                productionYears: '1998 to 2005',
                engineCode: 'M47 / M47TU depending on year',
                power: '136-150 hp',
                zeroToSixty: '8.8-9.9 s',
                topSpeed: '129-134 mph',
                fuelType: 'Diesel',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The core E46 diesel saloon, valued for economy and torque but now heavily condition-dependent.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e46-320d-touring',
                name: '320d Touring',
                category: 'Diesel estate',
                productionYears: '1999 to 2005',
                engineCode: 'M47 / M47TU depending on year',
                power: '136-150 hp',
                zeroToSixty: '9.0-10.1 s',
                topSpeed: '128-132 mph',
                fuelType: 'Diesel',
                bodyStyle: 'Touring',
                shortDescription:
                  'The practical E46 diesel estate, distinct from the saloon because buyers usually prioritise load space and utility.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e46-325i-saloon',
                name: '325i Saloon',
                category: 'Six-cylinder petrol saloon',
                productionYears: '2000 to 2005',
                engineCode: 'M54B25',
                power: '192 hp',
                zeroToSixty: '7.2 s',
                topSpeed: '149 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'A balanced six-cylinder E46 saloon, often a sweeter used buy than neglected 330i examples.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e46-330i-saloon',
                name: '330i Saloon',
                category: 'Six-cylinder petrol saloon',
                productionYears: '2000 to 2005',
                engineCode: 'M54B30',
                power: '231 hp',
                zeroToSixty: '6.5 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The desirable regular E46 petrol saloon, combining the M54 straight-six with compact rear-drive balance.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e46-330ci-coupe',
                name: '330Ci Coupe',
                category: 'Six-cylinder petrol coupe',
                productionYears: '2000 to 2006',
                engineCode: 'M54B30',
                power: '231 hp',
                zeroToSixty: '6.5 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                seats: '4',
                shortDescription:
                  'The coupe-bodied 330i equivalent, important to keep separate from the saloon for buyer appeal and market values.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e46-330d-saloon',
                name: '330d Saloon',
                category: 'Six-cylinder diesel saloon',
                productionYears: '1999 to 2005',
                engineCode: 'M57D30',
                power: '184-204 hp',
                zeroToSixty: '7.2-7.8 s',
                topSpeed: '142-150 mph',
                fuelType: 'Diesel',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The torque-rich E46 six-cylinder diesel saloon, a strong long-distance alternative to the petrol cars.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e46-m3-coupe',
                name: 'M3 Coupe',
                category: 'M car coupe',
                productionYears: '2000 to 2006',
                engineCode: 'S54B32',
                power: '343 hp',
                zeroToSixty: '5.1 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                seats: '4',
                shortDescription:
                  'The defining E46 M3 body style and one of BMW’s most important enthusiast cars.',
                image: bmwMImage,
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e46-m3-csl',
                name: 'M3 CSL',
                category: 'Limited M car coupe',
                productionYears: '2003 to 2004',
                engineCode: 'S54B32HP',
                power: '360 hp',
                zeroToSixty: '4.9 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                seats: '2',
                shortDescription:
                  'The lightweight CSL special and the halo E46 M3 variant for collectors and serious enthusiasts.',
                image: bmwMImage,
              }),
            ],
          },
          {
            slug: 'e90-e91-e92-e93',
            label: 'E90 / E91 / E92 / E93 3 Series',
            yearStart: 2005,
            yearEnd: 2013,
            summary:
              'The E9x generation splits clearly by body code: E90 saloon, E91 Touring, E92 coupe, and E93 convertible, with important diesel, six-cylinder petrol, twin-turbo, and V8 M3 variants.',
            variants: [
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e90-318i-saloon',
                name: '318i Saloon',
                category: 'Four-cylinder petrol saloon',
                productionYears: '2005 to 2012',
                engineCode: 'N46 / N43 depending on year',
                power: '129-143 hp',
                zeroToSixty: '9.1-10.1 s',
                topSpeed: '130 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The entry petrol E90 saloon, usually bought for affordability rather than performance.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e90-320d-saloon',
                name: '320d Saloon',
                category: 'Diesel saloon',
                productionYears: '2005 to 2012',
                engineCode: 'M47 / N47 depending on year',
                power: '163-184 hp',
                zeroToSixty: '7.5-8.3 s',
                topSpeed: '139-146 mph',
                fuelType: 'Diesel',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The core UK E90 diesel saloon and one of the most common used 3 Series variants.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e91-320d-touring',
                name: '320d Touring',
                category: 'Diesel estate',
                productionYears: '2005 to 2012',
                engineCode: 'M47 / N47 depending on year',
                power: '163-184 hp',
                zeroToSixty: '7.7-8.5 s',
                topSpeed: '137-143 mph',
                fuelType: 'Diesel',
                bodyStyle: 'Touring',
                shortDescription:
                  'The estate-bodied E9x diesel, relevant for buyers who want the 320d economy with extra practicality.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e90-325i-saloon',
                name: '325i Saloon',
                category: 'Six-cylinder petrol saloon',
                productionYears: '2005 to 2012',
                engineCode: 'N52 / N53 depending on year',
                power: '218 hp',
                zeroToSixty: '6.7-7.0 s',
                topSpeed: '152 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The mid-range six-cylinder E90 petrol, often appealing to buyers who want smoother character than a 320i.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e90-330i-saloon',
                name: '330i Saloon',
                category: 'Six-cylinder petrol saloon',
                productionYears: '2005 to 2012',
                engineCode: 'N52 / N53 depending on year',
                power: '258-272 hp',
                zeroToSixty: '6.1-6.3 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The desirable naturally aspirated six-cylinder E90 petrol saloon, prized for response and balance.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e92-335i-coupe',
                name: '335i Coupe',
                category: 'Turbo six-cylinder coupe',
                productionYears: '2006 to 2013',
                engineCode: 'N54 / N55 depending on year',
                power: '306 hp',
                zeroToSixty: '5.5 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                seats: '4',
                shortDescription:
                  'The twin-turbo/single-turbo six-cylinder E92 coupe, a major enthusiast and tuning-market variant.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e90-335d-saloon',
                name: '335d Saloon',
                category: 'Twin-turbo diesel saloon',
                productionYears: '2006 to 2012',
                engineCode: 'M57D30 twin-turbo',
                power: '286 hp',
                zeroToSixty: '6.0 s',
                topSpeed: '155 mph',
                fuelType: 'Diesel',
                bodyStyle: 'Saloon',
                transmission: '6-speed automatic',
                shortDescription:
                  'The high-output diesel E90 saloon, known for huge torque and strong UK-market appeal.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e92-m3-coupe',
                name: 'M3 Coupe',
                category: 'V8 M car coupe',
                productionYears: '2007 to 2013',
                engineCode: 'S65B40',
                power: '420 hp',
                zeroToSixty: '4.6-4.8 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                seats: '4',
                shortDescription:
                  'The V8 E92 M3 coupe, a unique M3 generation and a key enthusiast benchmark.',
                image: bmwMImage,
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e90-m3-saloon',
                name: 'M3 Saloon',
                category: 'V8 M car saloon',
                productionYears: '2008 to 2011',
                engineCode: 'S65B40',
                power: '420 hp',
                zeroToSixty: '4.7-4.9 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The rarer saloon-bodied V8 M3, combining the S65 engine with four-door practicality.',
                image: bmwMImage,
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'e92-m3-gts',
                name: 'M3 GTS',
                category: 'Limited M car coupe',
                productionYears: '2010 to 2011',
                engineCode: 'S65B44',
                power: '450 hp',
                zeroToSixty: '4.4 s',
                topSpeed: '190 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Coupe',
                seats: '2',
                shortDescription:
                  'The rare track-focused E92 M3 GTS and the specialist halo of the V8 M3 generation.',
                image: bmwMImage,
              }),
            ],
          },
          {
            slug: 'f30-f31-f34',
            label: 'F30 / F31 / F34 3 Series',
            yearStart: 2012,
            yearEnd: 2019,
            summary:
              'The F3x generation brought turbocharged engines across the 3 Series range, with F30 saloon, F31 Touring, F34 Gran Turismo, and F80 M3 branches.',
            variants: [
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'f30-318i-saloon',
                name: '318i Saloon',
                category: 'Entry petrol saloon',
                productionYears: '2015 to 2019',
                engineCode: 'B38B15',
                power: '136 hp',
                zeroToSixty: '8.9 s',
                topSpeed: '130 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                transmission: '6-speed manual / 8-speed automatic',
                shortDescription:
                  'The facelift entry petrol F30 saloon, using BMW’s B38 three-cylinder engine.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'f30-320i-saloon',
                name: '320i Saloon',
                category: 'Core petrol saloon',
                productionYears: '2012 to 2019',
                engineCode: 'N20B20 / B48B20 depending on year',
                power: '184 hp',
                zeroToSixty: '7.2 s',
                topSpeed: '146 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The mainstream petrol F30 saloon and a common UK buyer shortlist car.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'f30-320d-saloon',
                name: '320d Saloon',
                category: 'Core diesel saloon',
                productionYears: '2012 to 2019',
                engineCode: 'N47D20 / B47D20 depending on year',
                power: '184-190 hp',
                zeroToSixty: '7.1-7.5 s',
                topSpeed: '143-146 mph',
                fuelType: 'Diesel',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The default UK F30 diesel choice, important for company-car and used-market buyers.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'f31-320d-touring',
                name: '320d Touring',
                category: 'Core diesel estate',
                productionYears: '2012 to 2019',
                engineCode: 'N47D20 / B47D20 depending on year',
                power: '184-190 hp',
                zeroToSixty: '7.4-7.8 s',
                topSpeed: '140-143 mph',
                fuelType: 'Diesel',
                bodyStyle: 'Touring',
                shortDescription:
                  'The practical estate-bodied 320d, distinct from the saloon for load space and family use.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'f30-330d-saloon',
                name: '330d Saloon',
                category: 'Six-cylinder diesel saloon',
                productionYears: '2012 to 2019',
                engineCode: 'N57D30',
                power: '258 hp',
                zeroToSixty: '5.6 s',
                topSpeed: '155 mph',
                fuelType: 'Diesel',
                bodyStyle: 'Saloon',
                transmission: '8-speed automatic',
                shortDescription:
                  'The strong six-cylinder diesel F30, a major UK-market performance diesel choice.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'f30-335d-xdrive-saloon',
                name: '335d xDrive Saloon',
                category: 'Twin-turbo diesel saloon',
                productionYears: '2013 to 2019',
                engineCode: 'N57D30 twin-turbo',
                power: '313 hp',
                zeroToSixty: '4.8 s',
                topSpeed: '155 mph',
                drivetrain: 'xDrive AWD',
                fuelType: 'Diesel',
                bodyStyle: 'Saloon',
                transmission: '8-speed automatic',
                shortDescription:
                  'The all-wheel-drive twin-turbo diesel F30 and one of the fastest real-world UK 3 Series diesels.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'f30-330e-saloon',
                name: '330e Saloon',
                category: 'Plug-in hybrid saloon',
                productionYears: '2016 to 2019',
                engineCode: 'B48B20 hybrid',
                power: '252 hp',
                zeroToSixty: '6.1 s',
                topSpeed: '140 mph',
                fuelType: 'Plug-in hybrid',
                bodyStyle: 'Saloon',
                transmission: '8-speed automatic',
                shortDescription:
                  'The plug-in hybrid F30, important for UK company-car buyers and short-journey users.',
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'f30-340i-saloon',
                name: '340i Saloon',
                category: 'Six-cylinder petrol saloon',
                productionYears: '2015 to 2019',
                engineCode: 'B58B30',
                power: '326 hp',
                zeroToSixty: '5.1 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The B58-powered F30 petrol flagship below the M3 and a key enthusiast used buy.',
                image: bmwPerformanceImage,
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'f80-m3',
                name: 'M3',
                category: 'M car saloon',
                productionYears: '2014 to 2018',
                engineCode: 'S55B30',
                power: '431 hp',
                zeroToSixty: '4.1-4.3 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The F80 M3, the first turbocharged M3 saloon generation and a major UK performance saloon benchmark.',
                image: bmwMImage,
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'f80-m3-competition',
                name: 'M3 Competition',
                category: 'M car saloon',
                productionYears: '2016 to 2018',
                engineCode: 'S55B30',
                power: '450 hp',
                zeroToSixty: '4.0 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The sharper F80 M3 Competition, usually more desirable than the standard car in the used market.',
                image: bmwMImage,
              }),
              createBmwSeriesVariant({
                seriesName: '3 Series',
                slug: 'f80-m3-cs',
                name: 'M3 CS',
                category: 'Limited M car saloon',
                productionYears: '2018',
                engineCode: 'S55B30',
                power: '460 hp',
                zeroToSixty: '3.9 s',
                topSpeed: '174 mph',
                fuelType: 'Petrol',
                bodyStyle: 'Saloon',
                shortDescription:
                  'The limited F80 M3 CS, a rarer and more focused special-series M3.',
                image: bmwMImage,
              }),
            ],
          },
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
  volkswagen: {
    families: [
      {
        slug: 'golf',
        name: 'Golf',
        category: 'Family hatchback and performance hatchback',
        description:
          'Volkswagen Golf UK-market coverage from the Mk5 era through Mk8 and Mk8.5, including mainstream petrol/diesel cars, GTD, GTI, Clubsport, and Golf R variants.',
        image: vwGolfImage,
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #1d4ed8 44%, #dbeafe 100%)',
        generations: [
          {
            slug: 'mk5',
            label: 'Mk5 Golf',
            yearStart: 2004,
            yearEnd: 2009,
            summary:
              'The Mk5 Golf re-established the Golf as a strong all-rounder and brought the GTI back into serious enthusiast relevance, while the R32 kept the narrow-angle six-cylinder halo alive.',
            variants: [
              createVolkswagenVariant({
                slug: 'mk5-1-6-fsi',
                name: '1.6 FSI',
                category: 'Mainstream petrol hatchback',
                productionYears: '2004 to 2008',
                engineCode: 'BLF / BAG family depending on year',
                power: '115 hp',
                zeroToSixty: '10.8 s',
                topSpeed: '119 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'A common Mk5 petrol Golf, useful as a simple family hatchback reference rather than an enthusiast choice.',
              }),
              createVolkswagenVariant({
                slug: 'mk5-1-9-tdi',
                name: '1.9 TDI',
                category: 'Mainstream diesel hatchback',
                productionYears: '2004 to 2009',
                engineCode: 'BKC / BXE / BLS depending on year',
                power: '105 hp',
                zeroToSixty: '11.3 s',
                topSpeed: '116 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The durable-feeling economy Mk5 diesel choice, now bought mostly on condition and maintenance evidence.',
              }),
              createVolkswagenVariant({
                slug: 'mk5-2-0-tdi',
                name: '2.0 TDI',
                category: 'Stronger diesel hatchback',
                productionYears: '2004 to 2009',
                engineCode: 'BKD / BMN depending on output',
                power: '140-170 hp',
                zeroToSixty: '8.2-9.3 s',
                topSpeed: '127-137 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The stronger Mk5 diesel, including punchier GT-style outputs depending on trim and year.',
              }),
              createVolkswagenVariant({
                slug: 'mk5-gti',
                name: 'GTI',
                category: 'Hot hatchback',
                productionYears: '2005 to 2009',
                engineCode: 'EA113 2.0 TFSI',
                power: '200 hp',
                zeroToSixty: '7.2 s',
                topSpeed: '146 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The Mk5 GTI restored the Golf GTI formula with strong turbo performance and everyday usability.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #991b1b 44%, #fee2e2 100%)',
              }),
              createVolkswagenVariant({
                slug: 'mk5-gti-edition-30',
                name: 'GTI Edition 30',
                category: 'GTI special edition',
                productionYears: '2007 to 2008',
                engineCode: 'EA113 2.0 TFSI',
                power: '230 hp',
                zeroToSixty: '6.8 s',
                topSpeed: '152 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The more desirable Mk5 GTI special edition, valued for extra output and stronger enthusiast appeal.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #7f1d1d 44%, #fecaca 100%)',
              }),
              createVolkswagenVariant({
                slug: 'mk5-r32',
                name: 'R32',
                category: 'VR6 AWD halo hatchback',
                productionYears: '2005 to 2009',
                engineCode: 'BUB 3.2 VR6',
                power: '250 hp',
                zeroToSixty: '6.2-6.5 s',
                topSpeed: '155 mph',
                drivetrain: '4Motion AWD',
                fuelType: 'Petrol',
                shortDescription:
                  'The Mk5 R32 halo, combining VR6 character with 4Motion traction rather than modern Golf R turbo power.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #334155 44%, #dbeafe 100%)',
              }),
            ],
          },
          {
            slug: 'mk6',
            label: 'Mk6 Golf',
            yearStart: 2009,
            yearEnd: 2013,
            summary:
              'The Mk6 refined the Mk5 formula and introduced the GTD as a clearer diesel performance model, while the Golf R moved to turbo four-cylinder AWD power.',
            variants: [
              createVolkswagenVariant({
                slug: 'mk6-1-4-tsi',
                name: '1.4 TSI',
                category: 'Mainstream petrol hatchback',
                productionYears: '2009 to 2013',
                engineCode: 'EA111 1.4 TSI',
                power: '122-160 hp',
                zeroToSixty: '8.0-9.5 s',
                topSpeed: '124-137 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The common Mk6 turbo petrol family, with output and risk profile depending heavily on exact engine version.',
              }),
              createVolkswagenVariant({
                slug: 'mk6-1-6-tdi',
                name: '1.6 TDI',
                category: 'Economy diesel hatchback',
                productionYears: '2009 to 2013',
                engineCode: 'EA189 1.6 TDI',
                power: '105 hp',
                zeroToSixty: '11.3 s',
                topSpeed: '118 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The economy-focused Mk6 diesel for buyers prioritising low running costs.',
              }),
              createVolkswagenVariant({
                slug: 'mk6-2-0-tdi',
                name: '2.0 TDI',
                category: 'Core diesel hatchback',
                productionYears: '2009 to 2013',
                engineCode: 'EA189 2.0 TDI',
                power: '140 hp',
                zeroToSixty: '9.3 s',
                topSpeed: '130 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The mainstream Mk6 2.0 diesel, common in the UK used market and best bought on history.',
              }),
              createVolkswagenVariant({
                slug: 'mk6-gtd',
                name: 'GTD',
                category: 'Diesel performance hatchback',
                productionYears: '2009 to 2013',
                engineCode: 'EA189 2.0 TDI',
                power: '170 hp',
                zeroToSixty: '8.1 s',
                topSpeed: '138 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The Mk6 GTD gives GTI-like styling with diesel torque and economy, making condition and diesel use pattern important.',
              }),
              createVolkswagenVariant({
                slug: 'mk6-gti',
                name: 'GTI',
                category: 'Hot hatchback',
                productionYears: '2009 to 2013',
                engineCode: 'EA888 Gen 1/2 2.0 TSI',
                power: '210 hp',
                zeroToSixty: '6.9 s',
                topSpeed: '149 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The Mk6 GTI refined the Mk5 formula with a more mature cabin and EA888 turbo petrol power.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #991b1b 44%, #fee2e2 100%)',
              }),
              createVolkswagenVariant({
                slug: 'mk6-gti-edition-35',
                name: 'GTI Edition 35',
                category: 'GTI special edition',
                productionYears: '2011 to 2013',
                engineCode: 'EA113 2.0 TFSI',
                power: '235 hp',
                zeroToSixty: '6.6 s',
                topSpeed: '153 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The Mk6 GTI Edition 35 is the more focused anniversary model and a notable enthusiast variant.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #7f1d1d 44%, #fecaca 100%)',
              }),
              createVolkswagenVariant({
                slug: 'mk6-r',
                name: 'Golf R',
                category: 'AWD performance hatchback',
                productionYears: '2010 to 2013',
                engineCode: 'EA113 2.0 TFSI',
                power: '270 hp',
                zeroToSixty: '5.5-5.7 s',
                topSpeed: '155 mph',
                drivetrain: '4Motion AWD',
                fuelType: 'Petrol',
                shortDescription:
                  'The Mk6 Golf R replaced VR6 character with turbocharged four-cylinder performance and all-wheel drive.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #1d4ed8 44%, #dbeafe 100%)',
              }),
            ],
          },
          {
            slug: 'mk7-mk7-5',
            label: 'Mk7 / Mk7.5 Golf',
            yearStart: 2013,
            yearEnd: 2020,
            summary:
              'The Mk7 generation is one of the most important modern Golfs, spanning efficient mainstream cars, GTD, GTI Performance, Clubsport models, GTE, Estate variants, and the highly popular Golf R.',
            variants: [
              createVolkswagenVariant({
                slug: 'mk7-1-4-tsi',
                name: '1.4 TSI',
                category: 'Mainstream petrol hatchback',
                productionYears: '2013 to 2017',
                engineCode: 'EA211 1.4 TSI',
                power: '122-150 hp',
                zeroToSixty: '8.2-9.3 s',
                topSpeed: '126-134 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The mainstream early Mk7 petrol choice, usually sensible if maintained properly.',
              }),
              createVolkswagenVariant({
                slug: 'mk7-1-5-tsi',
                name: '1.5 TSI',
                category: 'Facelift petrol hatchback',
                productionYears: '2017 to 2020',
                engineCode: 'EA211 Evo 1.5 TSI',
                power: '130-150 hp',
                zeroToSixty: '8.3-9.1 s',
                topSpeed: '130-134 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The facelift-era petrol Golf, common in UK used listings and important for mainstream buyers.',
              }),
              createVolkswagenVariant({
                slug: 'mk7-2-0-tdi',
                name: '2.0 TDI',
                category: 'Core diesel hatchback',
                productionYears: '2013 to 2020',
                engineCode: 'EA288 2.0 TDI',
                power: '150 hp',
                zeroToSixty: '8.6 s',
                topSpeed: '134 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The core Mk7 diesel hatchback, common among UK buyers covering regular mileage.',
              }),
              createVolkswagenVariant({
                slug: 'mk7-gtd',
                name: 'GTD',
                category: 'Diesel performance hatchback',
                productionYears: '2013 to 2020',
                engineCode: 'EA288 2.0 TDI',
                power: '184 hp',
                zeroToSixty: '7.5 s',
                topSpeed: '142 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The Mk7 GTD blends GTI-like styling with diesel torque and remains a common UK used-market choice.',
              }),
              createVolkswagenVariant({
                slug: 'mk7-gti',
                name: 'GTI',
                category: 'Hot hatchback',
                productionYears: '2013 to 2020',
                engineCode: 'EA888 Gen 3 2.0 TSI',
                power: '220-230 hp',
                zeroToSixty: '6.4-6.5 s',
                topSpeed: '152-155 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The Mk7 GTI is the modern all-rounder hot hatch benchmark, with output depending on standard or Performance versions.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #991b1b 44%, #fee2e2 100%)',
              }),
              createVolkswagenVariant({
                slug: 'mk7-gti-clubsport',
                name: 'GTI Clubsport',
                category: 'GTI special edition',
                productionYears: '2016 to 2017',
                engineCode: 'EA888 Gen 3 2.0 TSI',
                power: '265-290 hp',
                zeroToSixty: '5.9-6.3 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The Mk7 GTI Clubsport is the more focused enthusiast GTI, distinct from standard GTI and GTI Performance models.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #7f1d1d 44%, #fecaca 100%)',
              }),
              createVolkswagenVariant({
                slug: 'mk7-gte',
                name: 'GTE',
                category: 'Plug-in hybrid hatchback',
                productionYears: '2015 to 2020',
                engineCode: 'EA211 1.4 TSI hybrid',
                power: '204 hp',
                zeroToSixty: '7.6 s',
                topSpeed: '138 mph',
                fuelType: 'Plug-in hybrid',
                shortDescription:
                  'The plug-in hybrid Mk7 Golf, relevant to buyers balancing short EV trips with petrol flexibility.',
              }),
              createVolkswagenVariant({
                slug: 'mk7-r',
                name: 'Golf R',
                category: 'AWD performance hatchback',
                productionYears: '2014 to 2020',
                engineCode: 'EA888 Gen 3 2.0 TSI',
                power: '300-310 hp',
                zeroToSixty: '4.6-5.1 s',
                topSpeed: '155 mph',
                drivetrain: '4Motion AWD',
                fuelType: 'Petrol',
                shortDescription:
                  'The Mk7 Golf R became one of the UK’s default fast hatchbacks thanks to AWD traction and tuning potential.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #1d4ed8 44%, #dbeafe 100%)',
              }),
              createVolkswagenVariant({
                slug: 'mk7-r-estate',
                name: 'Golf R Estate',
                category: 'AWD performance estate',
                productionYears: '2015 to 2020',
                engineCode: 'EA888 Gen 3 2.0 TSI',
                power: '300-310 hp',
                zeroToSixty: '4.8-5.1 s',
                topSpeed: '155 mph',
                drivetrain: '4Motion AWD',
                fuelType: 'Petrol',
                bodyStyle: 'Estate',
                shortDescription:
                  'The practical estate-bodied Mk7 Golf R, important to keep separate from the hatchback because buyers use it differently.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #334155 44%, #dbeafe 100%)',
              }),
            ],
          },
          {
            slug: 'mk8-mk8-5',
            label: 'Mk8 / Mk8.5 Golf',
            yearStart: 2020,
            yearEnd: 2026,
            summary:
              'The Mk8 generation moves the Golf into a more digital era, with eTSI mild hybrids, plug-in hybrids, GTD, GTI, Clubsport, R, and later Mk8.5 updates.',
            variants: [
              createVolkswagenVariant({
                slug: 'mk8-1-5-etsi',
                name: '1.5 eTSI',
                category: 'Mild-hybrid petrol hatchback',
                productionYears: '2020 onward',
                engineCode: 'EA211 Evo 1.5 eTSI',
                power: '130-150 hp',
                zeroToSixty: '8.5-9.2 s',
                topSpeed: '130-139 mph',
                fuelType: 'Petrol mild hybrid',
                transmission: '7-speed DSG automatic',
                shortDescription:
                  'The mainstream mild-hybrid Mk8 petrol choice, common in UK-market Golf browsing.',
              }),
              createVolkswagenVariant({
                slug: 'mk8-2-0-tdi',
                name: '2.0 TDI',
                category: 'Core diesel hatchback',
                productionYears: '2020 onward',
                engineCode: 'EA288 Evo 2.0 TDI',
                power: '115-150 hp',
                zeroToSixty: '8.8-10.2 s',
                topSpeed: '126-138 mph',
                fuelType: 'Diesel',
                shortDescription:
                  'The Mk8 diesel Golf, still relevant for higher-mileage UK buyers despite the market shift away from diesel.',
              }),
              createVolkswagenVariant({
                slug: 'mk8-gtd',
                name: 'GTD',
                category: 'Diesel performance hatchback',
                productionYears: '2020 onward',
                engineCode: 'EA288 Evo 2.0 TDI',
                power: '200 hp',
                zeroToSixty: '7.1 s',
                topSpeed: '152 mph',
                fuelType: 'Diesel',
                transmission: '7-speed DSG automatic',
                shortDescription:
                  'The Mk8 GTD keeps the diesel performance Golf idea alive with stronger output and DSG as standard.',
              }),
              createVolkswagenVariant({
                slug: 'mk8-gti',
                name: 'GTI',
                category: 'Hot hatchback',
                productionYears: '2020 onward',
                engineCode: 'EA888 Gen 4 2.0 TSI',
                power: '245 hp',
                zeroToSixty: '6.2 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                shortDescription:
                  'The Mk8 GTI continues the daily-driver hot hatch formula with more digital cabin controls and EA888 power.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #991b1b 44%, #fee2e2 100%)',
              }),
              createVolkswagenVariant({
                slug: 'mk8-gti-clubsport',
                name: 'GTI Clubsport',
                category: 'GTI performance special',
                productionYears: '2020 onward',
                engineCode: 'EA888 Gen 4 2.0 TSI',
                power: '300 hp',
                zeroToSixty: '5.6 s',
                topSpeed: '155 mph',
                fuelType: 'Petrol',
                transmission: '7-speed DSG automatic',
                shortDescription:
                  'The sharper Mk8 GTI Clubsport, sitting between GTI and Golf R for front-drive performance fans.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #7f1d1d 44%, #fecaca 100%)',
              }),
              createVolkswagenVariant({
                slug: 'mk8-gte',
                name: 'GTE',
                category: 'Plug-in hybrid hatchback',
                productionYears: '2020 onward',
                engineCode: 'EA211 1.4 TSI hybrid',
                power: '245 hp',
                zeroToSixty: '6.7 s',
                topSpeed: '140 mph',
                fuelType: 'Plug-in hybrid',
                transmission: '6-speed DSG automatic',
                shortDescription:
                  'The Mk8 plug-in hybrid Golf, offering GTI-like headline output with a very different ownership brief.',
              }),
              createVolkswagenVariant({
                slug: 'mk8-r',
                name: 'Golf R',
                category: 'AWD performance hatchback',
                productionYears: '2021 onward',
                engineCode: 'EA888 Gen 4 2.0 TSI',
                power: '320-333 hp',
                zeroToSixty: '4.6-4.7 s',
                topSpeed: '155-168 mph',
                drivetrain: '4Motion AWD',
                fuelType: 'Petrol',
                transmission: '7-speed DSG automatic',
                shortDescription:
                  'The Mk8 Golf R is the modern AWD performance Golf, with later cars gaining stronger output and updated calibration.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #1d4ed8 44%, #dbeafe 100%)',
              }),
              createVolkswagenVariant({
                slug: 'mk8-r-estate',
                name: 'Golf R Estate',
                category: 'AWD performance estate',
                productionYears: '2021 onward',
                engineCode: 'EA888 Gen 4 2.0 TSI',
                power: '320-333 hp',
                zeroToSixty: '4.8-4.9 s',
                topSpeed: '155-168 mph',
                drivetrain: '4Motion AWD',
                fuelType: 'Petrol',
                bodyStyle: 'Estate',
                transmission: '7-speed DSG automatic',
                shortDescription:
                  'The estate-bodied Mk8 Golf R, combining the Golf R drivetrain with extra luggage practicality.',
                imageBackground:
                  'linear-gradient(135deg, #111827 0%, #334155 44%, #dbeafe 100%)',
              }),
            ],
          },
        ],
      },
    ],
  },
}

function inferBmwEngineCode(variantName) {
  const name = variantName.toLowerCase()

  if (name.includes('m340i') || name.includes('m240i') || name.includes('340i')) return 'B58B30'
  if (name.includes('m3') && (name.includes('g80') || name.includes('touring') || name.includes('cs'))) return 'S58B30'
  if (name.includes('m3') && name.includes('competition')) return 'S58B30'
  if (name.includes('m3')) return 'S58B30 / generation-specific M engine'
  if (name.includes('330e')) return 'B48B20 hybrid'
  if (name.includes('330i') || name.includes('320i') || name.includes('318i') || name.includes('220i') || name.includes('230i')) return 'B48/B38 depending on model and year'
  if (name.includes('320d') || name.includes('220d')) return 'B47D20'
  if (name.includes('218i')) return 'B38B15'
  if (name.includes('m235i')) return 'B48A20T1'

  return 'Needs VIN/build-date confirmation'
}

function hydrateBmwSeriesMetadata() {
  const bmwFamilies = currentBrandFamilies.bmw?.families ?? []

  for (const family of bmwFamilies) {
    if (!['2-series', '3-series'].includes(family.slug)) continue

    for (const generation of family.generations) {
      for (const variant of generation.variants) {
        variant.productionYears ??= `${generation.yearStart} to ${generation.yearEnd}`
        variant.specs.engineCode ??= inferBmwEngineCode(variant.name)
        variant.accuracy ??= {
          market: 'UK',
          status: 'Needs source confirmation',
          sourceType: 'Initial Drive Atlas UK-market research dataset',
          notes:
            'This record is structured for UK-market browsing. Confirm exact output, engine code, gearbox, and equipment against official brochure, VIN, or build-date data before treating it as final.',
        }
        variant.ownershipInfo ??= createBmwSeriesOwnershipInfo(
          {
            seriesName: family.name,
            name: variant.name,
            productionYears: variant.productionYears,
            engineCode: variant.specs.engineCode,
            power: variant.specs.power,
            fuelType: variant.specs.fuelType,
            bodyStyle: variant.specs.bodyStyle,
            transmission: variant.specs.transmission,
          },
          variant.specs.drivetrain,
        )
      }
    }
  }
}

hydrateBmwSeriesMetadata()

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
