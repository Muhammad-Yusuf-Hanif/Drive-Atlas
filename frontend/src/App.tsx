import { AppRouter } from './router/AppRouter'

/**
 * Beginner note:
 * `App` is the top-level frontend component.
 * It stays intentionally small because the routing system, not this file,
 * decides which page to render.
 *
 * File flow:
 * `main.tsx` mounts `App`
 * `App` renders `AppRouter`
 * `AppRouter` chooses the correct page based on the URL
 *
 * Business role:
 * Keeping this file simple makes the project easier to grow without turning the
 * root component into a hard-to-read dumping ground.
 */
function App() {
  return <AppRouter />
}

export default App
