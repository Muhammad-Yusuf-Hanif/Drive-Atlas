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

  // The browser automatically resolves this relative path against the current
  // site origin, which keeps local frontend/backend development simple.
  //
  // Beginner note:
  // `await` means:
  // "wait here until the Promise finishes."
  const response = await fetch(path, {
    headers: {
      Accept: 'application/json',
    },
    signal,
  })

  if (!response.ok) {
    // The custom status property lets route pages make decisions like
    // redirecting 404s to the not-found page.
    //
    // Beginner note:
    // `response.ok` is false if the server returned an error status like 404 or 500.
    const error = new Error(`Request failed with status ${response.status}`)
    // `Object.assign(...)` adds the numeric status onto the Error object so
    // the calling code can inspect it later.
    Object.assign(error, { status: response.status })
    throw error
  }

  // `response.json()` turns the HTTP response body into a JavaScript object.
  return response.json() as Promise<T>
}
