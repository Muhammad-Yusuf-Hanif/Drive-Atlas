import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '../../utils/cn'

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

/**
 * Beginner note:
 * This component is still a link for routing purposes, but it looks like a button.
 * That distinction matters:
 * links are for navigation, buttons are for actions.
 *
 * Used in many pages wherever the app needs a prominent navigation CTA.
 */
export function ButtonLink({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      /**
       * `variant` is a prop that switches between two style presets.
       * This is a simple example of component composition:
       * the same navigation component can appear in multiple visual styles.
       */
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide no-underline transition duration-200',
        variant === 'primary' &&
          '!bg-slate-950 !text-white shadow-lg shadow-slate-900/30 hover:-translate-y-0.5 hover:!bg-slate-800 hover:!text-white visited:!text-white',
        variant === 'secondary' &&
          'border border-slate-300 bg-white/70 text-slate-900 hover:border-slate-950 hover:bg-white',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
