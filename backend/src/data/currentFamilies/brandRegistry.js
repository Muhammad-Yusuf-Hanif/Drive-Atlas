export function normalizeCurrentFamilySlug(slug) {
  return slug?.toLowerCase()
}

export function getCurrentBrandFamilyDataFromRegistry(registry, brandSlug) {
  return registry[normalizeCurrentFamilySlug(brandSlug)]
}

export function getCurrentFamilyFromRegistry(registry, brandSlug, familySlug) {
  return getCurrentBrandFamilyDataFromRegistry(registry, brandSlug)?.families.find(
    (family) => family.slug === normalizeCurrentFamilySlug(familySlug),
  )
}

export function getCurrentGenerationFromRegistry(
  registry,
  brandSlug,
  familySlug,
  generationSlug,
) {
  return getCurrentFamilyFromRegistry(registry, brandSlug, familySlug)?.generations.find(
    (generation) => generation.slug === normalizeCurrentFamilySlug(generationSlug),
  )
}

export function getCurrentVariantFromRegistry(
  registry,
  brandSlug,
  familySlug,
  generationSlug,
  variantSlug,
) {
  return getCurrentGenerationFromRegistry(
    registry,
    brandSlug,
    familySlug,
    generationSlug,
  )?.variants.find((variant) => variant.slug === normalizeCurrentFamilySlug(variantSlug))
}
