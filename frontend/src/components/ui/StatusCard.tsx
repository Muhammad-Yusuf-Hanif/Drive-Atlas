import { Card } from './Card'

type StatusCardProps = {
  title: string
  description: string
}

/**
 * Beginner note:
 * This component is used for loading and error states.
 * Instead of every page inventing its own loading UI, they all reuse this.
 *
 * Product role:
 * Consistent state handling makes the app feel more predictable and polished.
 */
export function StatusCard({ title, description }: StatusCardProps) {
  return (
    <Card className="max-w-2xl">
      <h2 className="font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </Card>
  )
}
