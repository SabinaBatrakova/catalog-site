export type ThemeTokens = {
  bg: string
  ink: string
  accent: string
  accentSecondary: string
  panel: string
  headlineFont: string
  bodyFont: string
}

export type ServiceItem = {
  name: string
  detail: string
}

export type TemplateContent = {
  slug: string
  niche: string
  businessName: string
  tagline: string
  heroSubtext: string
  services: ServiceItem[]
  testimonial?: { quote: string; author: string }
  ctaLabel: string
  ctaHref: string
}