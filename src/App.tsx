import { Header } from '@/components/blocks/Header'
import { Hero } from '@/components/blocks/Hero'
import { content } from '@/templates/beauty-1/content'

function App() {
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
    </div>
  )
}

export default App