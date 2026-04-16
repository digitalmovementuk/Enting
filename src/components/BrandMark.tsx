import { clsx } from 'clsx'

type BrandMarkProps = {
  compact?: boolean
  inverse?: boolean
}

export function BrandMark({ compact = false, inverse = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className={clsx(
          'relative inline-flex shrink-0 overflow-hidden rounded-2xl border border-brand/15 bg-brand text-white shadow-card',
          compact ? 'h-10 w-10' : 'h-11 w-11',
        )}
      >
        <span className="absolute inset-x-2 top-2 h-1 rounded-full bg-white/30" />
        <span className="absolute inset-y-3 left-3 w-1 rounded-full bg-accent" />
        <span className="absolute bottom-3 left-3 right-3 h-1 rounded-full bg-white/80" />
      </span>
      <span className="flex flex-col">
        <span className={clsx('text-sm font-semibold uppercase tracking-[0.24em]', inverse ? 'text-white' : 'text-brand')}>
          Financeable
        </span>
        {!compact ? <span className={clsx('text-sm', inverse ? 'text-white/80' : 'text-muted')}>Consulting</span> : null}
      </span>
    </span>
  )
}
