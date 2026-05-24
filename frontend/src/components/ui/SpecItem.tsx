type SpecItemProps = {
  label: string
  value: string
}

/**
 * Beginner note:
 * This is a very small reusable display component.
 * Small components like this are useful when the same visual pattern appears
 * in several places.
 */
export function SpecItem({ label, value }: SpecItemProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
    </div>
  )
}
