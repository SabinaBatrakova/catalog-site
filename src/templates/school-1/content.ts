import type { TemplateContent } from '@/lib/types'

export const schoolContent: TemplateContent = {
  slug: 'school-1',
  niche: 'Обучение и семинары',
  businessName: 'Expert School',
  tagline: 'Семинар для практикующих специалистов',
  heroSubtext:
    'Трёхдневная программа с сертификацией в Черногории. Группы до 12 человек, практика с первого дня.',
  services: [
    { name: 'Базовый курс', detail: '3 дня · сертификат' },
    { name: 'Индивидуальный интенсив', detail: '1 день · практика' },
    { name: 'Повышение квалификации', detail: '2 дня · для выпускников' },
  ],
  ctaLabel: 'Записаться на курс',
  ctaHref: 'https://t.me/',
}