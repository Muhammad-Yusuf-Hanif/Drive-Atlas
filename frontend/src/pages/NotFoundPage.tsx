import { ButtonLink } from '../components/ui/ButtonLink'
import { Card } from '../components/ui/Card'

/**
 * Beginner note:
 * This is the fallback page for bad routes.
 * React Router sends users here when a URL does not match a valid page or
 * when another page deliberately redirects after receiving a 404 from the API.
 *
 * Product role:
 * A dedicated 404 page is better UX than a blank screen because it explains
 * the problem and gives the user an obvious recovery path.
 */
export function NotFoundPage() {
  return (
    <div className="flex flex-1 items-center justify-center py-12">
      <Card className="max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-slate-500">404</p>
        <h1 className="mt-4 font-['Bahnschrift','Segoe_UI_Variable_Display','Trebuchet_MS',sans-serif] text-4xl text-slate-950">
          Route not found
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          The requested brand or model route does not exist in this showroom dataset.
        </p>
        <ButtonLink to="/" className="mt-8">
          Return home
        </ButtonLink>
      </Card>
    </div>
  )
}
