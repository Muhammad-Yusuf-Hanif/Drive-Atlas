import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import './index.css'

/**
 * Beginner note:
 * This is the frontend entry file.
 * It is the first frontend code that runs in the browser.
 *
 * File flow:
 * browser loads Vite bundle -> `main.tsx` runs ->
 * finds the HTML element with id `root` -> mounts React ->
 * renders `App` -> `App` renders the router and page tree.
 */
createRoot(document.getElementById('root')!).render(
  /**
   * `!` after `getElementById('root')` is the TypeScript non-null assertion.
   * It tells TypeScript: "I know this element exists."
   *
   * `StrictMode` is a React development helper.
   * It can intentionally run some logic twice in development to surface unsafe patterns.
   * That can confuse beginners at first, but it does not happen in the same way in production.
   */
  <StrictMode>
    <App />
  </StrictMode>,
)
