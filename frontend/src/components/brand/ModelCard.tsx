import { Palette, TimerReset, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { CarBrand, CarModel } from '../../types/cars'
import { Card } from '../ui/Card'

type ModelCardProps = {
  brand: CarBrand
  model: CarModel
}

/**
 * Model cards are used on the brand page and deliberately expose a concise set
 * of specs so users can quickly compare vehicles before opening the detail page.
 */
export function ModelCard({ brand, model }: ModelCardProps) {
  return (
    <Link to={`/${brand.slug}/${model.slug}`} className="group block">
      <Card className="overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
        <div
          className="relative min-h-64 overflow-hidden border-b border-white/30 p-6 text-white sm:p-8"
          style={{ background: model.imageBackground }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.22),_transparent_34%)]" />
          <img
            src={model.image}
            alt={`${brand.name} ${model.name}`}
            className="relative ml-auto w-full max-w-xl drop-shadow-[0_22px_36px_rgba(2,6,23,0.4)] transition duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div className="space-y-5 p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{brand.name}</p>
              <h2 className="mt-2 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
                {model.name}
              </h2>
            </div>

            <div className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-950">
              {model.category}
            </div>
          </div>

          <p className="leading-7 text-slate-600">{model.shortDescription}</p>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-slate-500">
                <Zap className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.28em]">Power</span>
              </div>
              <p className="mt-3 text-lg font-semibold text-slate-950">{model.specs.power}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-slate-500">
                <TimerReset className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.28em]">0-60</span>
              </div>
              <p className="mt-3 text-lg font-semibold text-slate-950">{model.specs.zeroToSixty}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-slate-500">
                <Palette className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.28em]">Colours</span>
              </div>
              <p className="mt-3 text-lg font-semibold text-slate-950">{model.colours.length}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
