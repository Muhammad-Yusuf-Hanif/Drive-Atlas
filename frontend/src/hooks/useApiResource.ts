import { useEffect, useReducer } from 'react'

import { fetchJson } from '../api/client'

/**
 * Beginner note:
 * This type describes the shape of the data we store while waiting for an API request.
 *
 * It has 3 pieces:
 * - `data`: the result from the server, or `null` if we do not have it yet
 * - `errorStatus`: the HTTP error code, or `null` if there is no error
 * - `isLoading`: true while the request is still in progress
 */
type ApiState<T> = {
  data: T | null
  errorStatus: number | null
  isLoading: boolean
}

/**
 * Beginner note:
 * This type describes the allowed actions that can happen to our API state.
 *
 * In plain English:
 * only 3 things are allowed to happen here:
 * - a request starts
 * - a request succeeds
 * - a request fails
 */
type ApiAction<T> =
  | { type: 'request' }
  | { type: 'success'; data: T }
  | { type: 'failure'; errorStatus: number }

/**
 * Beginner note:
 * This is a reducer function.
 *
 * A reducer is a function that receives the current state and an action,
 * and returns the next state.
 */
function apiStateReducer<T>(_state: ApiState<T>, action: ApiAction<T>): ApiState<T> {
  switch (action.type) {
    case 'request':
      return {
        data: null,
        errorStatus: null,
        isLoading: true,
      }
    case 'success':
      return {
        data: action.data,
        errorStatus: null,
        isLoading: false,
      }
    case 'failure':
      return {
        data: null,
        errorStatus: action.errorStatus,
        isLoading: false,
      }
  }
}

/**
 * Beginner note:
 * This is a custom hook.
 *
 * A custom hook is a reusable function that starts with `use` and contains
 * React hook logic.
 *
 * Why this exists:
 * many pages need the same pattern:
 * 1. start loading
 * 2. call the API
 * 3. save the data if successful
 * 4. save the error if it fails
 * 5. cancel the request if the user leaves the page
 *
 * Cross-file flow:
 * page component -> `useApiResource(...)` -> `fetchJson(...)` -> backend route
 * -> JSON returns -> page renders with the new data
 */
export function useApiResource<T>(path: string) {
  // useReducer is slightly more verbose than multiple useState calls, but it
  // makes the async fetch lifecycle explicit: request -> success -> failure.
  //
  // Beginner note about destructuring:
  // `const [state, dispatch] = ...`
  //
  // This is array destructuring.
  // It means:
  // "take the first value and call it `state`,
  // and take the second value and call it `dispatch`."
  const [state, dispatch] = useReducer(apiStateReducer<T>, {
    data: null,
    errorStatus: null,
    isLoading: true,
  })

  // `useEffect(...)` lets us run side-effect code after React renders.
  // Here the side effect is the API request.
  useEffect(() => {
    const controller = new AbortController()

    // Every time the path changes we treat it as a new page load and reset the
    // resource state instead of trying to partially merge old data.
    dispatch({ type: 'request' })

    fetchJson<T>(path, controller.signal)
      .then((data) => {
        // `.then(...)` runs when the request succeeds.
        dispatch({ type: 'success', data })
      })
      .catch((error: Error & { status?: number }) => {
        if (controller.signal.aborted) {
          // Ignore aborted requests so fast route changes do not flash errors.
          return
        }

        dispatch({ type: 'failure', errorStatus: error.status ?? 500 })
      })

    // Cleanup prevents setting state from an outdated request after the user
    // has already navigated somewhere else.
    //
    // Beginner note:
    // the returned function is the cleanup function.
    return () => controller.abort()
  }, [path])

  return state
}
