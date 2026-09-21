import type { ServiceItem } from '@/lib/types'

type Props = {
  services: ServiceItem[]
}

export function ServicesGrid({ services }: Props) {
  return (
    <section className="px-6 py-12">
      <ul className="max-w-xl divide-y">
        {services.map((s) => (
          <li key={s.name} className="flex items-baseline justify-between py-4">
            <span className="text-xl">{s.name}</span>
            <span className="text-sm opacity-70">{s.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}