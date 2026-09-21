type Props = {
  tagline: string
  subtext: string
  ctaLabel: string
  ctaHref: string
}

export function Hero({ tagline, subtext, ctaLabel, ctaHref }: Props) {
  return (
    <section className="px-6 py-16">
      <h1 className="max-w-2xl text-4xl leading-tight">{tagline}</h1>
      <p className="mt-6 max-w-md text-lg">{subtext}</p>
      <a href={ctaHref} className="mt-8 inline-block rounded-full bg-blue-500 px-6 py-3 text-white">
        {ctaLabel}
      </a>
    </section>
  )
}