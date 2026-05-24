import { ExternalLink, FileText, ShieldCheck } from 'lucide-react'

import type { OfficialResources } from '../../types/cars'
import { Card } from '../ui/Card'

type OfficialResourcesCardProps = {
  resources: OfficialResources
}

/**
 * Beginner note:
 * This helper chooses which icon to show for each resource type.
 * It returns the component itself, not JSX yet.
 *
 * Syntax note:
 * `OfficialResources['links'][number]['type']` is a TypeScript indexed-access type.
 * It means:
 * "Look inside the `OfficialResources` type, then inside `links`, then the type
 * of one array item, then the `type` field from that item."
 */
function getLinkIcon(type: OfficialResources['links'][number]['type']) {
  if (type === 'brochure') {
    return FileText
  }

  if (type === 'recall-checker') {
    return ShieldCheck
  }

  return ExternalLink
}

/**
 * Beginner note:
 * This card renders official links such as brochures, recall checkers,
 * or manufacturer pages.
 *
 * Business role:
 * It gives users a trusted next step and reduces the need to copy external
 * content directly into the project.
 */
export function OfficialResourcesCard({ resources }: OfficialResourcesCardProps) {
  return (
    <Card className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Official resources</p>
        <h3 className="mt-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-3xl text-slate-950">
          {resources.title}
        </h3>
        <p className="mt-4 leading-7 text-slate-600">{resources.summary}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {resources.links.map((link) => {
          /**
           * This is a common React pattern:
           * choose a component in JavaScript first, then render it later like `<Icon />`.
           */
          const Icon = getLinkIcon(link.type)

          return (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-950 hover:bg-white"
            >
              <div>
                <p className="text-sm font-semibold text-slate-950">{link.label}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                  {link.type.replaceAll('-', ' ')}
                </p>
              </div>
              <Icon className="h-5 w-5 text-slate-600" />
            </a>
          )
        })}
      </div>
    </Card>
  )
}
