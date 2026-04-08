import { Card } from './Card'

type StatusCardProps = {
  title: string
  description: string
}

/**
 * Shared status card keeps loading and request errors visually consistent
 * across all route-driven pages.
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
