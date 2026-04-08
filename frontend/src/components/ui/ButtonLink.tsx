import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '../../utils/cn'

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

/**
 * This wraps Router Link with button styling so navigation CTAs stay consistent
 * across the homepage, brand pages, and model pages.
 */
export function ButtonLink({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  return (
    <Link
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
