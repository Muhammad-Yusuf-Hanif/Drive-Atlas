import { Palette, Settings2 } from 'lucide-react'

import type { CarBrand, CarModel } from '../../types/cars'
import { Card } from '../ui/Card'
import { SpecItem } from '../ui/SpecItem'

type ModelHeroProps = {
  brand: Omit<CarBrand, 'models'>
  model: CarModel
}

/**
 * The model detail page needs a stronger focal point than the list cards.
 * This component combines imagery, colours, and key specs into a hero panel.
 */
export function ModelHero({ brand, model }: ModelHeroProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
        <div
          className="relative overflow-hidden p-6 sm:p-8"
          style={{ background: model.imageBackground }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_32%)]" />
          <div className="relative z-10">
            <div className="max-w-xl text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">{brand.name}</p>
              <h2 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-4xl tracking-[0.06em]">
                {model.name}
              </h2>
              <p className="mt-4 max-w-lg leading-7 text-white/85">{model.longDescription}</p>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/15 bg-slate-950/25 p-5 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2 text-white">
                <Settings2 className="h-4 w-4" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.28em]">Core specs</h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <SpecItem label="Power" value={model.specs.power} />
                <SpecItem label="0-60 mph" value={model.specs.zeroToSixty} />
                <SpecItem label="Top speed" value={model.specs.topSpeed} />
                <SpecItem label="Drivetrain" value={model.specs.drivetrain} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-white/90 p-6 sm:p-8">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
              {model.category}
            </div>
            <p className="leading-7 text-slate-600">{model.shortDescription}</p>
          </div>

          <div className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-2 text-slate-950">
              <Palette className="h-4 w-4" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em]">Available colours</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {model.colours.map((colour) => (
                <div
                  key={colour.name}
                  className="min-w-28 rounded-2xl border border-slate-200 bg-white p-3"
                >
                  <div
                    className="h-10 rounded-xl border border-slate-200"
                    style={{ background: colour.hex }}
                  />
                  <p className="mt-2 text-sm font-medium text-slate-950">{colour.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-2 text-slate-950">
              <Settings2 className="h-4 w-4" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em]">Design focus</h3>
            </div>
            <p className="mt-3 leading-7 text-slate-600">{model.designStory}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
