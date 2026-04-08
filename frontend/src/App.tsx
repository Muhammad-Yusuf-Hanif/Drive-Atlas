import { AppRouter } from './router/AppRouter'

/**
 * App stays intentionally small.
 * The routing tree owns the application shell so this file remains stable
 * even as more routes and features are added later.
 */
function App() {
  return <AppRouter />
}

export default App
