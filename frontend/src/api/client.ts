/**
 * All frontend data now comes from the Express API.
 * Keeping the fetch helper in one place makes it easier to add auth, retries,
 * or a different API base URL later without touching every page.
 */
export async function fetchJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(path, {
    headers: {
      Accept: 'application/json',
    },
    signal,
  })

  if (!response.ok) {
    const error = new Error(`Request failed with status ${response.status}`)
    Object.assign(error, { status: response.status })
    throw error
  }

  return response.json() as Promise<T>
}
