import cors from 'cors'
import express from 'express'

import {
  carBrands,
  getBrandBySlug,
  getModelBySlug,
} from './data/carBrands.js'
import {
  getCurrentFamilyBySlug,
  currentBrandFamilies,
  getCurrentFamilySummaries,
  getCurrentGenerationBySlug,
  getCurrentVariantBySlug,
} from './data/currentFamilies.js'
import {
  historicalBrandFamilies,
  getHistoricalBrandFamilyData,
  getHistoricalFamilyBySlug,
  getHistoricalGenerationBySlug,
  getHistoricalFamilySummaries,
  getHistoricalVariantBySlug,
  getHistoricalVariantLineageBySlug,
  getHistoricalVariantLineagesForGeneration,
} from './data/historicalFamilies.js'

/**
 * Beginner note:
 * This file is the backend server.
 *
 * The frontend asks for data by making HTTP requests like:
 * `/api/brands`
 * `/api/bmw`
 * `/api/bmw/families/3-series/e90/320d`
 *
 * This server receives those requests, looks up the matching data, and sends
 * JSON back.
 *
 * Very important mental model:
 *
 * Frontend:
 * the part users see and click
 *
 * Backend:
 * the part that serves the data
 *
 * Typical journey:
 * page component -> `useApiResource(...)` -> `fetchJson(...)` -> request hits
 * this server -> this file finds the data -> this file returns JSON ->
 * React page re-renders with that data
 */
const app = express()
const port = process.env.PORT || 3001

const searchFeatureLabels = {
  'panoramic-roof': 'Panoramic roof',
  'large-wheels': '19-20 inch wheels',
  'manual-gearbox': 'Manual gearbox',
  'automatic-gearbox': 'Automatic gearbox',
  'xdrive-awd': 'All-wheel drive',
  'performance-pack': 'Performance model',
  'plug-in-hybrid': 'Plug-in hybrid',
  'diesel-efficiency': 'Diesel efficiency',
  'family-practicality': 'Family practicality',
}

function getNumericPower(power) {
  const powerMatch = power?.match(/\d+/)
  return powerMatch ? Number(powerMatch[0]) : null
}

function getEngineSizeLitres(vehicleName, fuelType, engineCode = '') {
  const name = vehicleName.toLowerCase()
  const fuel = fuelType.toLowerCase()
  const engine = engineCode.toLowerCase()

  if (name.includes('rs 6')) return '4.0'
  if (engine.includes('vr6') || engine.includes('3.2')) return '3.2'
  if (name.includes('m340i') || name.includes('m3')) return '3.0'
  if (name.includes('m140i') || name.includes('m135i') || name.includes('135i')) return '3.0'
  if (name.includes('m240i')) return '3.0'
  if (engine.includes('b38') || engine.includes('b37')) return '1.5'
  if (engine.includes('n13') || engine.includes('n45') || engine.includes('n46')) return '1.6'
  if (engine.includes('1.4')) return '1.4'
  if (engine.includes('1.5')) return '1.5'
  if (engine.includes('1.6')) return '1.6'
  if (engine.includes('2.0') || engine.includes('ea888') || engine.includes('ea288') || engine.includes('ea113')) return '2.0'
  if (name.includes('114') || name.includes('116') || name.includes('118') || name.includes('218')) {
    return '1.6'
  }
  if (name.includes('120') || name.includes('123') || name.includes('125') || name.includes('130')) {
    return name.includes('130') ? '3.0' : '2.0'
  }
  if (name.includes('220')) return '2.0'
  if (name.includes('330') || name.includes('320') || name.includes('318')) return '2.0'
  if (name.includes('golf r') || name.includes('octavia')) return '2.0'
  if (name.includes('mx-5')) return '2.0'
  if (fuel.includes('electric')) return 'Electric'

  return 'Unknown'
}

function getSearchFeatures(vehicle) {
  const features = new Set()
  const bodyStyle = vehicle.specs.bodyStyle.toLowerCase()
  const fuelType = vehicle.specs.fuelType.toLowerCase()
  const transmission = vehicle.specs.transmission.toLowerCase()
  const drivetrain = vehicle.specs.drivetrain.toLowerCase()
  const category = vehicle.category.toLowerCase()
  const power = getNumericPower(vehicle.specs.power)

  if (!['cabriolet', 'convertible', 'roadster'].some((style) => bodyStyle.includes(style))) {
    features.add('panoramic-roof')
  }

  if ((power ?? 0) >= 300 || category.includes('performance') || category.includes('m car')) {
    features.add('large-wheels')
    features.add('performance-pack')
  }

  if (transmission.includes('manual')) features.add('manual-gearbox')
  if (transmission.includes('automatic') || transmission.includes('steptronic')) {
    features.add('automatic-gearbox')
  }
  if (drivetrain.includes('awd') || drivetrain.includes('xdrive')) features.add('xdrive-awd')
  if (fuelType.includes('plug-in')) features.add('plug-in-hybrid')
  if (fuelType.includes('diesel')) features.add('diesel-efficiency')
  if (Number(vehicle.specs.seats) >= 5) features.add('family-practicality')

  return Array.from(features)
}

function createSearchRecord({
  brand,
  family,
  generation,
  variant,
  route,
  source,
  yearLabel,
}) {
  const features = getSearchFeatures(variant)
  const engineSizeLitres = getEngineSizeLitres(
    variant.name,
    variant.specs.fuelType,
    variant.specs.engineCode,
  )

  return {
    id: `${source}:${route}`,
    source,
    brand: {
      slug: brand.slug,
      name: brand.name,
    },
    family: family
      ? {
          slug: family.slug,
          name: family.name,
        }
      : null,
    generation: generation
      ? {
          slug: generation.slug,
          label: generation.label,
        }
      : null,
    vehicle: {
      slug: variant.slug,
      name: variant.name,
      category: variant.category,
      productionYears: variant.productionYears,
      shortDescription: variant.shortDescription,
      image: variant.image,
      imageBackground: variant.imageBackground,
      specs: variant.specs,
      engineSizeLitres,
      features,
    },
    route,
    yearLabel,
  }
}

function getSearchRecords() {
  const records = []

  for (const brand of carBrands) {
    for (const model of brand.models) {
      records.push(
        createSearchRecord({
          brand,
          variant: model,
          route: `/${brand.slug}/${model.slug}`,
          source: 'model',
          yearLabel: 'Model guide',
        }),
      )
    }

    for (const family of currentBrandFamilies[brand.slug]?.families ?? []) {
      for (const generation of family.generations) {
        for (const variant of generation.variants) {
          records.push(
            createSearchRecord({
              brand,
              family,
              generation,
              variant,
              route: `/${brand.slug}/ranges/${family.slug}/${generation.slug}/${variant.slug}`,
              source: 'current',
              yearLabel: `${generation.yearStart} to ${generation.yearEnd}`,
            }),
          )
        }
      }
    }

    for (const family of historicalBrandFamilies[brand.slug]?.families ?? []) {
      for (const generation of family.generations) {
        for (const phase of generation.phases) {
          for (const variant of phase.variants) {
            records.push(
              createSearchRecord({
                brand,
                family,
                generation,
                variant,
                route: `/${brand.slug}/families/${family.slug}/${generation.slug}/${variant.slug}`,
                source: 'historical',
                yearLabel: phase.yearLabel,
              }),
            )
          }
        }
      }
    }
  }

  return records
}

function uniqueSorted(values) {
  return Array.from(new Set(values.filter(Boolean))).sort((first, second) =>
    String(first).localeCompare(String(second), undefined, { numeric: true }),
  )
}

function getSearchOptions(records) {
  const featureValues = uniqueSorted(records.flatMap((record) => record.vehicle.features))

  return {
    bodyStyles: uniqueSorted(records.map((record) => record.vehicle.specs.bodyStyle)),
    engineSizes: uniqueSorted(records.map((record) => record.vehicle.engineSizeLitres)),
    fuelTypes: uniqueSorted(records.map((record) => record.vehicle.specs.fuelType)),
    transmissions: uniqueSorted(records.map((record) => record.vehicle.specs.transmission)),
    drivetrains: uniqueSorted(records.map((record) => record.vehicle.specs.drivetrain)),
    seats: uniqueSorted(records.map((record) => record.vehicle.specs.seats)),
    features: featureValues.map((value) => ({
      value,
      label: searchFeatureLabels[value] ?? value,
    })),
  }
}

function matchesAnyFilter(value, selectedValues) {
  return selectedValues.length === 0 || selectedValues.includes(value)
}

function getQueryValues(value) {
  if (!value) return []
  return String(value)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

// Middleware note:
// `app.use(...)` adds middleware.
//
// Middleware is code that runs as part of the request pipeline.
// `cors()` helps browser requests work during development when frontend and
// backend are treated as separate origins.
// `express.json()` prepares Express to read JSON request bodies.
app.use(cors())
app.use(express.json())

/**
 * Beginner note:
 * `app.get(...)` defines a route for GET requests.
 *
 * GET means:
 * "the client wants to read data"
 */
app.get('/api/health', (_request, response) => {
  // `response.json(...)` sends JSON back to the browser.
  response.json({ status: 'ok' })
})

app.get('/api/brands', (_request, response) => {
  // `map(...)` loops through every brand and returns a new array.
  //
  // `...brand` is object spread syntax.
  // It copies the brand's existing properties into a new object.
  response.json(
    carBrands.map((brand) => ({
      ...brand,
      // The brand page is now a directory of entry points, so summaries for the
      // current and historical family browsers are attached here.
      currentFamilies: getCurrentFamilySummaries(brand.slug),
      historicalFamilies: getHistoricalFamilySummaries(brand.slug),
    })),
  )
})

app.get('/api/search', (request, response) => {
  const records = getSearchRecords()
  const bodyStyles = getQueryValues(request.query.bodyStyle)
  const engineSizes = getQueryValues(request.query.engineSize)
  const fuelTypes = getQueryValues(request.query.fuelType)
  const transmissions = getQueryValues(request.query.transmission)
  const drivetrains = getQueryValues(request.query.drivetrain)
  const seats = getQueryValues(request.query.seats)
  const requiredFeatures = getQueryValues(request.query.features)
  const query = String(request.query.q ?? '').trim().toLowerCase()

  const results = records.filter((record) => {
    const specs = record.vehicle.specs
    const searchableText = [
      record.brand.name,
      record.family?.name,
      record.generation?.label,
      record.vehicle.name,
      record.vehicle.category,
      record.vehicle.shortDescription,
      specs.bodyStyle,
      specs.fuelType,
      specs.transmission,
      specs.drivetrain,
      specs.engineCode,
      record.vehicle.productionYears,
      record.vehicle.engineSizeLitres,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    return (
      (!query || searchableText.includes(query)) &&
      matchesAnyFilter(specs.bodyStyle, bodyStyles) &&
      matchesAnyFilter(record.vehicle.engineSizeLitres, engineSizes) &&
      matchesAnyFilter(specs.fuelType, fuelTypes) &&
      matchesAnyFilter(specs.transmission, transmissions) &&
      matchesAnyFilter(specs.drivetrain, drivetrains) &&
      matchesAnyFilter(specs.seats, seats) &&
      requiredFeatures.every((feature) => record.vehicle.features.includes(feature))
    )
  })

  response.json({
    options: getSearchOptions(records),
    results,
    total: results.length,
  })
})

app.get('/api/:brandSlug/ranges/:familySlug/:generationSlug/:variantSlug', (request, response) => {
  /**
   * `request.params` contains the dynamic parts of the URL.
   *
   * Example request:
   * `/api/bmw/ranges/3-series/g20-g21/330i`
   *
   * Then:
   * `brandSlug = 'bmw'`
   * `familySlug = '3-series'`
   * `generationSlug = 'g20-g21'`
   * `variantSlug = '330i'`
   */
  const { brandSlug, familySlug, generationSlug, variantSlug } = request.params

  // These helper functions search the backend data files.
  const brand = getBrandBySlug(brandSlug)
  const family = getCurrentFamilyBySlug(brandSlug, familySlug)
  const generation = getCurrentGenerationBySlug(brandSlug, familySlug, generationSlug)
  const variant = getCurrentVariantBySlug(brandSlug, familySlug, generationSlug, variantSlug)

  if (!brand || !family || !generation || !variant) {
    // 404 means the requested record was not found.
    response.status(404).json({ message: 'Current variant not found' })
    return
  }

  // The response object is shaped for the exact frontend page that consumes it.
  response.json({
    brand: {
      slug: brand.slug,
      name: brand.name,
      description: brand.description,
      signature: brand.signature,
      availableColours: brand.availableColours,
      theme: brand.theme,
    },
    family: {
      slug: family.slug,
      name: family.name,
      category: family.category,
      description: family.description,
      image: family.image,
      imageBackground: family.imageBackground,
    },
    generation: {
      slug: generation.slug,
      label: generation.label,
      yearStart: generation.yearStart,
      yearEnd: generation.yearEnd,
    },
    variant,
  })
})

app.get('/api/:brandSlug/ranges/:familySlug/:generationSlug', (request, response) => {
  const { brandSlug, familySlug, generationSlug } = request.params
  const brand = getBrandBySlug(brandSlug)
  const family = getCurrentFamilyBySlug(brandSlug, familySlug)
  const generation = getCurrentGenerationBySlug(brandSlug, familySlug, generationSlug)

  if (!brand || !family || !generation) {
    response.status(404).json({ message: 'Current generation not found' })
    return
  }

  response.json({
    brand: {
      slug: brand.slug,
      name: brand.name,
      description: brand.description,
      signature: brand.signature,
      availableColours: brand.availableColours,
      theme: brand.theme,
    },
    family: {
      slug: family.slug,
      name: family.name,
      category: family.category,
      description: family.description,
      image: family.image,
      imageBackground: family.imageBackground,
    },
    generation,
  })
})

app.get('/api/:brandSlug/ranges/:familySlug', (request, response) => {
  const { brandSlug, familySlug } = request.params
  const brand = getBrandBySlug(brandSlug)
  const family = getCurrentFamilyBySlug(brandSlug, familySlug)

  if (!brand || !family) {
    response.status(404).json({ message: 'Current family not found' })
    return
  }

  response.json({
    brand: {
      slug: brand.slug,
      name: brand.name,
      description: brand.description,
      signature: brand.signature,
      availableColours: brand.availableColours,
      theme: brand.theme,
    },
    family,
  })
})

app.get('/api/:brandSlug/history/:familySlug/:generationSlug/:phaseSlug/:variantSlug', (request, response) => {
  // This is a legacy compatibility route.
  // It exists so older historical URLs still work while the newer route shape is used.
  const { brandSlug, familySlug, generationSlug, phaseSlug, variantSlug } = request.params
  const brand = getBrandBySlug(brandSlug)
  const family = getHistoricalFamilyBySlug(brandSlug, familySlug)
  const variant = getHistoricalVariantBySlug(
    brandSlug,
    familySlug,
    generationSlug,
    phaseSlug,
    variantSlug,
  )
  const generation = family?.generations.find(
    (generationItem) => generationItem.slug === generationSlug?.toLowerCase(),
  )
  const phase = generation?.phases.find(
    (phaseItem) => phaseItem.slug === phaseSlug?.toLowerCase(),
  )

  if (!brand || !family || !generation || !phase || !variant) {
    response.status(404).json({ message: 'Historical variant not found' })
    return
  }

  response.json({
    brand: {
      slug: brand.slug,
      name: brand.name,
      description: brand.description,
      signature: brand.signature,
      availableColours: brand.availableColours,
      theme: brand.theme,
    },
    family: {
      slug: family.slug,
      name: family.name,
      category: family.category,
      description: family.description,
      image: family.image,
      imageBackground: family.imageBackground,
    },
    generation: {
      slug: generation.slug,
      label: generation.label,
      yearStart: generation.yearStart,
      yearEnd: generation.yearEnd,
    },
    phase: {
      slug: phase.slug,
      label: phase.label,
      yearLabel: phase.yearLabel,
    },
    variant,
  })
})

app.get('/api/:brandSlug/history/:familySlug', (request, response) => {
  const { brandSlug, familySlug } = request.params
  const brand = getBrandBySlug(brandSlug)
  const family = getHistoricalFamilyBySlug(brandSlug, familySlug)
  const historicalBrand = getHistoricalBrandFamilyData(brandSlug)

  if (!brand || !family || !historicalBrand) {
    response.status(404).json({ message: 'Historical family not found' })
    return
  }

  response.json({
    brand: {
      slug: brand.slug,
      name: brand.name,
      description: brand.description,
      signature: brand.signature,
      availableColours: brand.availableColours,
      theme: brand.theme,
    },
    family,
    coveredLegacyModelSlugs: historicalBrand.coveredLegacyModelSlugs,
  })
})

app.get('/api/:brandSlug/families/:familySlug/:generationSlug/:variantSlug', (request, response) => {
  // This is the newer historical variant route used by the generation-first flow.
  const { brandSlug, familySlug, generationSlug, variantSlug } = request.params
  const brand = getBrandBySlug(brandSlug)
  const family = getHistoricalFamilyBySlug(brandSlug, familySlug)
  const generation = getHistoricalGenerationBySlug(brandSlug, familySlug, generationSlug)
  const variantLineage = getHistoricalVariantLineageBySlug(
    brandSlug,
    familySlug,
    generationSlug,
    variantSlug,
  )

  if (!brand || !family || !generation || !variantLineage) {
    response.status(404).json({ message: 'Historical variant not found' })
    return
  }

  response.json({
    brand: {
      slug: brand.slug,
      name: brand.name,
      description: brand.description,
      signature: brand.signature,
      availableColours: brand.availableColours,
      theme: brand.theme,
    },
    family: {
      slug: family.slug,
      name: family.name,
      category: family.category,
      description: family.description,
      image: family.image,
      imageBackground: family.imageBackground,
    },
    generation,
    variant: variantLineage,
  })
})

app.get('/api/:brandSlug/families/:familySlug/:generationSlug', (request, response) => {
  const { brandSlug, familySlug, generationSlug } = request.params
  const brand = getBrandBySlug(brandSlug)
  const family = getHistoricalFamilyBySlug(brandSlug, familySlug)
  const generation = getHistoricalGenerationBySlug(brandSlug, familySlug, generationSlug)
  const variants = getHistoricalVariantLineagesForGeneration(
    brandSlug,
    familySlug,
    generationSlug,
  )

  if (!brand || !family || !generation) {
    response.status(404).json({ message: 'Historical generation not found' })
    return
  }

  response.json({
    brand: {
      slug: brand.slug,
      name: brand.name,
      description: brand.description,
      signature: brand.signature,
      availableColours: brand.availableColours,
      theme: brand.theme,
    },
    family: {
      slug: family.slug,
      name: family.name,
      category: family.category,
      description: family.description,
      image: family.image,
      imageBackground: family.imageBackground,
    },
    generation,
    variants,
  })
})

app.get('/api/:brandSlug/families/:familySlug', (request, response) => {
  const { brandSlug, familySlug } = request.params
  const brand = getBrandBySlug(brandSlug)
  const family = getHistoricalFamilyBySlug(brandSlug, familySlug)
  const historicalBrand = getHistoricalBrandFamilyData(brandSlug)

  if (!brand || !family || !historicalBrand) {
    response.status(404).json({ message: 'Historical family not found' })
    return
  }

  response.json({
    brand: {
      slug: brand.slug,
      name: brand.name,
      description: brand.description,
      signature: brand.signature,
      availableColours: brand.availableColours,
      theme: brand.theme,
    },
    family,
    coveredLegacyModelSlugs: historicalBrand.coveredLegacyModelSlugs,
  })
})

app.get('/api/:brandSlug/:modelSlug', (request, response) => {
  // This is the older single-model route kept for backward compatibility.
  const brand = getBrandBySlug(request.params.brandSlug)
  const model = getModelBySlug(request.params.brandSlug, request.params.modelSlug)

  if (!brand || !model) {
    response.status(404).json({ message: 'Model not found' })
    return
  }

  response.json({
    brand: {
      slug: brand.slug,
      name: brand.name,
      description: brand.description,
      signature: brand.signature,
      availableColours: brand.availableColours,
      theme: brand.theme,
    },
    model,
  })
})

app.get('/api/:brandSlug', (request, response) => {
  // This powers the brand page and attaches family summaries for the new flows.
  const brand = getBrandBySlug(request.params.brandSlug)

  if (!brand) {
    response.status(404).json({ message: 'Brand not found' })
    return
  }

  response.json({
    ...brand,
    currentFamilies: getCurrentFamilySummaries(brand.slug),
    historicalFamilies: getHistoricalFamilySummaries(brand.slug),
  })
})

app.listen(port, () => {
  // `app.listen(...)` starts the server and keeps it waiting for requests.
  console.log(`Drive Atlas API listening on http://localhost:${port}`)
})
