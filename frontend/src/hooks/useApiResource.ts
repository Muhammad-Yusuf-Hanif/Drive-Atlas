import { useEffect, useReducer } from 'react'

import { fetchJson } from '../api/client'

type ApiState<T> = {
  data: T | null
  errorStatus: number | null
  isLoading: boolean
}

type ApiAction<T> =
  | { type: 'request' }
  | { type: 'success'; data: T }
  | { type: 'failure'; errorStatus: number }

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
 * Route pages all need the same fetch lifecycle.
 * This hook centralizes loading, 404 handling, and cleanup on navigation.
 */
export function useApiResource<T>(path: string) {
  const [state, dispatch] = useReducer(apiStateReducer<T>, {
    data: null,
    errorStatus: null,
    isLoading: true,
  })

  useEffect(() => {
    const controller = new AbortController()

    dispatch({ type: 'request' })

    fetchJson<T>(path, controller.signal)
      .then((data) => {
        dispatch({ type: 'success', data })
      })
      .catch((error: Error & { status?: number }) => {
        if (controller.signal.aborted) {
          return
        }

        dispatch({ type: 'failure', errorStatus: error.status ?? 500 })
      })

    return () => controller.abort()
  }, [path])

  return state
}
