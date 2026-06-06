/**
 * Beginner note:
 * This file is a small helper for talking to the backend API.
 *
 * "API" means:
 * the backend routes that send data back to the frontend.
 *
 * Example:
 * the frontend asks for `/api/brands`
 * the backend sends back JSON describing the available car brands
 *
 * Why keep this code in one file:
 * if many pages all make requests, it is better for them to share one helper
 * than to copy and paste raw `fetch(...)` code everywhere.
 */

/**
 * VITE_API_BASE_URL:
 * This is an environment variable.
 *
 * Locally, it can be empty, so requests can still go to `/api/...`
 * using your local dev setup.
 *
 * On Netlify, you will set this to your deployed backend URL, for example:
 * https://drive-atlas-backend.onrender.com
 *
 * So:
 * `/api/brands`
 * becomes:
 * `https://drive-atlas-backend.onrender.com/api/brands`
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export async function fetchJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  /**
   * Syntax explanation:
   *
   * `async function`:
   * means this function works with asynchronous code, such as a network request.
   *
   * `<T>`:
   * this is called a generic.
   * You do not need to memorize that word yet.
   * In simple terms, it means:
   * "the caller tells this function what kind of data is expected back."
   *
   * `path: string`:
   * the function expects a text value like `'/api/brands'`
   *
   * `signal?: AbortSignal`:
   * the `?` means this argument is optional.
   * `AbortSignal` is used if we want to cancel the request.
   *
   * `: Promise<T>`:
   * this function returns a Promise.
   * A Promise means "the real result will arrive later."
   */

  /**
   * This builds the final URL.
   *
   * Locally:
   * API_BASE_URL is usually empty.
   * path is `/api/brands`.
   * Final URL becomes `/api/brands`.
   *
   * On Netlify:
   * API_BASE_URL is your deployed backend URL.
   * path is `/api/brands`.
   * Final URL becomes `https://your-backend-url.onrender.com/api/brands`.
   */
  const url = `${API_BASE_URL}${path}`

  const response = await fetch(url, {
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