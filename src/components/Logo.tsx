import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M16 16C14 12.8 11.2 10 8.5 10 5.2 10 3 12.7 3 16s2.2 6 5.5 6c2.7 0 5.5-2.8 7.5-6 2 3.2 4.8 6 7.5 6 3.3 0 5.5-2.7 5.5-6s-2.2-6-5.5-6c-2.7 0-5.5 2.8-7.5 6z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        'flex items-center gap-x-2',
        fillOnHover && 'group/logo',
        className,
      )}
      {...props}
    >
      <Logomark
        invert={invert}
        filled={filled}
        className="h-full w-auto flex-none"
      />
      <span
        className={clsx(
          'font-display text-lg font-semibold tracking-tighter',
          invert ? 'text-white' : 'text-neutral-950',
        )}
      >
        inth3loop
      </span>
    </div>
  )
}
