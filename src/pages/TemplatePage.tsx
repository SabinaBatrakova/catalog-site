import type { ComponentType } from "react";
import { Link, useParams } from "react-router-dom";
import type { TemplateContent } from "@/lib/types";
import { contacts } from "@/lib/contacts";
import { Header } from "@/components/blocks/Header";
import { Hero } from "@/components/blocks/Hero";
import { ServicesGrid } from "@/components/blocks/ServicesGrid";
import { ContactCTA } from "@/components/blocks/ContactCTA";
import { Footer } from "@/components/blocks/Footer";
import { beautyContent } from "@/templates/beauty-1/content";
import { schoolContent } from "@/templates/school-1/content";
import { RentalPage } from "@/templates/rental-1/RentalPage";

const registry: Record<string, TemplateContent> = {
  "beauty-1": beautyContent,
  "school-1": schoolContent,
};

const customPages: Record<string, ComponentType> = {
  "rental-1": RentalPage,
};

export function TemplatePage() {
  const { templateId } = useParams<{ templateId: string }>();
  const key = templateId ?? "";
  const CustomPage = customPages[key];
  const content = registry[key];
  const isInsideFrame = window.self !== window.top;

  if (!CustomPage && !content) {
    return <div className="p-12">Шаблон не найден</div>;
  }

  return (
    <div className={isInsideFrame ? "" : "pb-24"}>
      {CustomPage ? (
        <CustomPage />
      ) : (
        <>
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
        </>
      )}

      {!isInsideFrame && (
        <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center gap-3 px-4">
          <Link
            to="/"
            className="rounded-full border bg-white px-5 py-3 text-sm shadow"
          >
            ← В каталог
          </Link>
          <a
            href={contacts[0].href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black px-5 py-3 text-sm text-white shadow"
          >
            Хочу такой сайт
          </a>
        </div>
      )}
    </div>
  );
}