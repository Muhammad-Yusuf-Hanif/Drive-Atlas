import { clsx } from 'clsx'

/**
 * Beginner note:
 * `cn` is a tiny wrapper around the `clsx` library.
 * It helps combine CSS class names conditionally.
 *
 * Example:
 * `cn('base-class', condition && 'extra-class')`
 *
 * Why this exists:
 * Without a helper like this, long className strings become harder to read and
 * maintain when conditions are involved.
 */
export function cn(...inputs: Parameters<typeof clsx>) {
  /**
   * `Parameters<typeof clsx>` is a TypeScript utility type.
   * It means:
   * "Use the same parameter types that the `clsx` function already expects."
   * That keeps our wrapper in sync with the library's API.
   */
  return clsx(inputs)
}
