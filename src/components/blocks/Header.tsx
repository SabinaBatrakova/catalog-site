type Props = {
  businessName: string
  ctaLabel: string
  ctaHref: string
}

export function Header({ businessName, ctaLabel, ctaHref }: Props) {
  return (
    <header className="flex items-center justify-between px-6 py-5">
      <span className="text-xl">{businessName}</span>
      <a href={ctaHref} className="rounded-full bg-blue-500 px-5 py-2 text-sm text-white">
        {ctaLabel}
      </a>
    </header>
  )
}