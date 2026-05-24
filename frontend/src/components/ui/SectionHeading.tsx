import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
}

/**
 * Beginner note:
 * This component standardizes the pattern:
 * eyebrow text + main title + description + optional actions.
 *
 * Used in:
 * homepage hero sections
 * brand and family intro sections
 * any page that needs a repeated heading structure
 *
 * Business role:
 * Consistent headings help users understand where they are in the browsing flow.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  actions,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        {/* Optional "eyebrow" text is the small label above a main heading. */}
        <p className="mb-3 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-xs uppercase tracking-[0.4em] text-amber-200">
          {eyebrow}
        </p>
        <h1 className="font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-4xl font-semibold tracking-[0.02em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
          {description}
        </p>
      </div>

      {/* `actions` is optional React content passed in by the parent page when needed. */}
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  )
}
