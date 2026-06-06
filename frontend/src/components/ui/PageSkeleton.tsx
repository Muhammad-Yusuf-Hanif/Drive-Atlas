import { Card } from './Card'

type PageSkeletonProps = {
  title?: string
  rows?: number
}

export function PageSkeleton({ title = 'Loading page', rows = 4 }: PageSkeletonProps) {
  return (
    <div className="space-y-6" aria-label={title} aria-busy="true">
      <Card className="overflow-hidden border-white/12 bg-white/88 p-0">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-h-72 animate-pulse bg-slate-800/80 p-6 sm:p-8">
            <div className="h-3 w-40 rounded-full bg-white/20" />
            <div className="mt-6 h-10 w-64 rounded-full bg-white/25" />
            <div className="mt-5 h-4 max-w-xl rounded-full bg-white/20" />
            <div className="mt-3 h-4 max-w-lg rounded-full bg-white/15" />
            <div className="ml-auto mt-10 h-24 max-w-sm rounded-[1.5rem] bg-white/15" />
          </div>

          <div className="space-y-4 p-6 sm:p-8">
            <div className="h-9 w-32 animate-pulse rounded-full bg-slate-200" />
            <div className="grid gap-4">
              <div className="h-28 animate-pulse rounded-[1.5rem] bg-slate-100" />
              <div className="h-28 animate-pulse rounded-[1.5rem] bg-slate-100" />
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: rows }).map((_, index) => (
          <Card key={index} className="space-y-4 bg-white/88">
            <div className="h-3 w-28 animate-pulse rounded-full bg-slate-200" />
            <div className="h-8 w-48 animate-pulse rounded-full bg-slate-200" />
            <div className="h-4 animate-pulse rounded-full bg-slate-100" />
            <div className="h-4 w-4/5 animate-pulse rounded-full bg-slate-100" />
          </Card>
        ))}
      </div>
    </div>
  )
}
