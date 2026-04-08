import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '../../utils/cn'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

/**
 * A small surface primitive lets us standardize panel styling everywhere.
 * Higher-level cards compose this instead of reimplementing the same shell.
 */
export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[2rem] border border-white/45 bg-white/82 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur-sm',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
