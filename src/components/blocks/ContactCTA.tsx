type Props = {
  ctaLabel: string
  ctaHref: string
}

export function ContactCTA({ ctaLabel, ctaHref }: Props) {
  return (
    <section className="px-6 py-16">
      <a href={ctaHref} className="inline-block rounded-full bg-blue-500 px-8 py-4 text-lg text-white">
        {ctaLabel}
      </a>
    </section>
  )
}