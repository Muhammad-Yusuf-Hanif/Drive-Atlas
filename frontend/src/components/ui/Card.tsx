import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '../../utils/cn'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

/**
 * Beginner note:
 * This is a UI primitive, sometimes called a "building block" component.
 * Instead of repeating the same rounded border, background, and shadow classes
 * across dozens of files, other components reuse this one wrapper.
 *
 * Used in many page and component files across the frontend.
 *
 * Business role:
 * Reuse keeps the app visually consistent and reduces duplication.
 */
export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      /**
       * `...props` is object spread syntax.
       * It passes through extra HTML div props such as `style`, `id`, or `onClick`
       * without Card needing to list every possible prop manually.
       */
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
