import { clsx } from 'clsx'

/**
 * Small className helper.
 * This keeps conditional styling readable across reusable UI components.
 */
export function cn(...inputs: Parameters<typeof clsx>) {
  return clsx(inputs)
}
