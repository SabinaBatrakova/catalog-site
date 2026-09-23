import type { TemplateContent } from '@/lib/types'

export const rentalContent: TemplateContent = {
  slug: 'rental-1',
  niche: 'Туризм и аренда',
  businessName: 'Montenegro Stay',
  tagline: 'Апартаменты и туры на побережье',
  heroSubtext:
    'Бронирование напрямую, без посредников. Побережье Черногории — от коротких туров до аренды на месяц.',
  services: [
    { name: 'Апартаменты у моря', detail: 'от 40€ · ночь' },
    { name: 'Морская прогулка', detail: 'от 60€ · 3 часа' },
    { name: 'Тур по побережью', detail: 'от 25€ · день' },
  ],
  ctaLabel: 'Забронировать',
  ctaHref: 'https://t.me/',
}