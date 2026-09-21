import { Header } from "@/components/blocks/Header";
import { Hero } from "@/components/blocks/Hero";
import { ServicesGrid } from "@/components/blocks/ServicesGrid";
import { ContactCTA } from "@/components/blocks/ContactCTA";
import { Footer } from "@/components/blocks/Footer";
import { content } from "@/templates/beauty-1/content";

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
      <ServicesGrid services={content.services} />
      <ContactCTA ctaLabel={content.ctaLabel} ctaHref={content.ctaHref} />
      <Footer businessName={content.businessName} />
    </div>
  );
}

export default App;
