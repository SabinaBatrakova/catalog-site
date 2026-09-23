import { useParams } from 'react-router-dom'
import type { TemplateContent } from '@/lib/types'
import { Header } from '@/components/blocks/Header'
import { Hero } from '@/components/blocks/Hero'
import { ServicesGrid } from '@/components/blocks/ServicesGrid'
import { ContactCTA } from '@/components/blocks/ContactCTA'
import { Footer } from '@/components/blocks/Footer'
import { beautyContent } from '@/templates/beauty-1/content'
import { schoolContent } from '@/templates/school-1/content'

const registry: Record<string, TemplateContent> = {
  'beauty-1': beautyContent,
  'school-1': schoolContent,
}

export function TemplatePage() {
  const { templateId } = useParams<{ templateId: string }>()
  const content = registry[templateId ?? '']

  if (!content) {
    return <div className="p-12">Шаблон не найден</div>
  }

  return (
    <div>
      <Header
        businessName={content.businessName}
        ctaLabel={content.ctaLabel}
        ctaHref={content.ctaHref}
      />
      <Hero
        tagline={content.tagline}
        subtext={content.heroSubtext}
        ctaLabel={content.ctaLabel}
        ctaHref={content.ctaHref}
      />
      <ServicesGrid services={content.services} />
      <ContactCTA ctaLabel={content.ctaLabel} ctaHref={content.ctaHref} />
      <Footer businessName={content.businessName} />
    </div>
  )
}