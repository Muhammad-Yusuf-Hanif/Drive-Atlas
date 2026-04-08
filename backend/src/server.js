import cors from 'cors'
import express from 'express'

import {
  carBrands,
  getBrandBySlug,
  getModelBySlug,
} from './data/carBrands.js'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

/**
 * Health and API discovery routes make local development easier and give the
 * frontend a predictable namespace to fetch from.
 */
app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.get('/api/brands', (_request, response) => {
  response.json(carBrands)
})

app.get('/api/:brandSlug/:modelSlug', (request, response) => {
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
  const brand = getBrandBySlug(request.params.brandSlug)

  if (!brand) {
    response.status(404).json({ message: 'Brand not found' })
    return
  }

  response.json(brand)
})

app.listen(port, () => {
  console.log(`Drive Atlas API listening on http://localhost:${port}`)
})
