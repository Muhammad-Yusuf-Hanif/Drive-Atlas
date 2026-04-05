import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { CarBrand } from '../../types/cars'
import { Card } from '../ui/Card'

type BrandCardProps = {
  brand: CarBrand
}

/**
 * The homepage only needs a brand summary and a route target.
 * Keeping this focused makes the card reusable in future brand index views.
 */
export function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link to={`/${brand.slug}`} className="group block">
      <Card className="overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.2)]">
        <div
          className="relative border-b border-white/20 p-6 text-white sm:p-8"
          style={{ background: brand.theme.heroGradient }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.26),_transparent_36%)]" />
          <div className="relative flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-white/70">Brand</p>
              <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-4xl tracking-[0.08em]">
                {brand.name}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                {brand.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Models</p>
                <p className="mt-2 text-2xl font-semibold">{brand.models.length}</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Colours</p>
                <p className="mt-2 text-2xl font-semibold">{brand.availableColours.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-6 sm:px-8 sm:py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Signature language
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-950">{brand.signature}</p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-slate-800">
            Explore models
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Card>
    </Link>
  )
}
