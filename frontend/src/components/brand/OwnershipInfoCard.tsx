import { AlertTriangle, Gauge, Droplets, ShieldCheck, Sparkles, Wrench } from 'lucide-react'

import type { OwnershipInfo } from '../../types/cars'
import { Card } from '../ui/Card'

type OwnershipInfoCardProps = {
  info: OwnershipInfo
}

/**
 * This card deliberately separates ownership and maintenance guidance from the
 * marketing-style overview content so buyers can find practical information fast.
 */
export function OwnershipInfoCard({ info }: OwnershipInfoCardProps) {
  return (
    <Card className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Ownership data</p>
        <h3 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
          {info.title}
        </h3>
        <p className="mt-4 leading-7 text-slate-600">{info.officialSummary}</p>
      </div>

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.5rem] border border-rose-200 bg-rose-50 p-5">
          <div className="flex items-center gap-2 text-rose-950">
            <Gauge className="h-4 w-4" />
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em]">Ownership risk summary</h4>
          </div>
          <p className="mt-4 text-sm font-semibold text-rose-800">
            Risk rating: {info.ownershipRiskSummary.rating}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-700">{info.ownershipRiskSummary.summary}</p>
          <p className="mt-4 text-sm font-semibold text-slate-950">
            Best buy window: {info.ownershipRiskSummary.bestBuyWindow}
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            {info.ownershipRiskSummary.watchouts.map((item) => (
              <li key={item} className="rounded-2xl border border-rose-200 bg-white p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex items-center gap-2 text-emerald-950">
            <Sparkles className="h-4 w-4" />
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em]">Best spec to buy</h4>
          </div>
          <p className="mt-4 text-sm font-semibold text-slate-950">{info.bestSpecToBuy.title}</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">{info.bestSpecToBuy.summary}</p>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800">
              Prioritise these features
            </p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
              {info.bestSpecToBuy.recommendedFeatures.map((feature) => (
                <li key={feature} className="rounded-2xl border border-emerald-200 bg-white p-4">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
              Think twice if the car has
            </p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
              {info.bestSpecToBuy.avoidIf.map((item) => (
                <li key={item} className="rounded-2xl border border-amber-200 bg-white p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-2 text-slate-950">
            <Wrench className="h-4 w-4" />
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em]">Service schedule</h4>
          </div>
          <div className="mt-4 space-y-4">
            {info.serviceSchedule.map((item) => (
              <div key={item.item} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-950">{item.item}</p>
                <p className="mt-1 text-sm font-medium text-amber-700">{item.interval}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-2 text-slate-950">
            <Droplets className="h-4 w-4" />
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em]">Fluids and consumables</h4>
          </div>
          <div className="mt-4 space-y-4">
            {info.fluidRequirements.map((fluid) => (
              <div key={fluid.item} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-950">{fluid.item}</p>
                <p className="mt-1 text-sm font-medium text-amber-700">{fluid.spec}</p>
                {fluid.capacity ? (
                  <p className="mt-1 text-sm text-slate-500">Capacity: {fluid.capacity}</p>
                ) : null}
                <p className="mt-2 text-sm leading-6 text-slate-600">{fluid.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-center gap-2 text-slate-950">
          <Sparkles className="h-4 w-4" />
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em]">Pre-LCI vs LCI highlights</h4>
        </div>
        <div className="mt-4 space-y-4">
          {info.faceliftGuide.map((change) => (
            <div key={change.area} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-950">{change.area}</p>
              <div className="mt-3 grid gap-3 lg:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Pre-LCI</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                    {change.preLciYears}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{change.preLci}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">LCI</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    {change.lciYears}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{change.lci}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">{change.buyerImpact}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5">
        <div className="flex items-center gap-2 text-amber-950">
          <ShieldCheck className="h-4 w-4" />
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em]">Recalls</h4>
        </div>
        <div className="mt-4 space-y-4">
          {info.recalls.map((recall) => (
            <div key={recall.recallNumber} className="rounded-2xl border border-amber-200 bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-950">{recall.title}</p>
                <p className="text-xs uppercase tracking-[0.22em] text-amber-700">
                  {recall.recallNumber}
                </p>
              </div>
              <p className="mt-2 text-sm text-slate-500">Published: {recall.recallDate}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{recall.summary}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{recall.appliesNote}</p>
              <a
                href={recall.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950"
              >
                View recall source
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-2 text-slate-950">
            <AlertTriangle className="h-4 w-4" />
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em]">Common faults</h4>
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            {info.engineFaults.map((fault) => (
              <li key={fault} className="rounded-2xl border border-slate-200 bg-white p-4">
                {fault}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-2 text-slate-950">
            <AlertTriangle className="h-4 w-4" />
            <h4 className="text-sm font-semibold uppercase tracking-[0.28em]">Reported problems</h4>
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            {info.ownerReportedIssues.map((issue) => (
              <li key={issue} className="rounded-2xl border border-slate-200 bg-white p-4">
                {issue}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm leading-6 text-slate-600">{info.disclaimer}</p>
      </section>
    </Card>
  )
}
