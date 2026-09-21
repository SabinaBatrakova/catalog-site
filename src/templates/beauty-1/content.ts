import type { TemplateContent } from "@/lib/types";

export const content: TemplateContent = {
  slug: "beauty-1",
  niche: "Услуги и красота",
  businessName: "Salon Atelier",
  tagline: "Тишина, свет и внимание к деталям",
  heroSubtext:
    "Салон красоты в Херцег-Нови. Запись на маникюр, уход за лицом и стрижку — без очередей и лишних слов.",
  services: [
    { name: "Маникюр и педикюр", detail: "от 25€ · 60 мин" },
    { name: "Уход за лицом", detail: "от 35€ · 75 мин" },
    { name: "Стрижка и укладка", detail: "от 20€ · 45 мин" },
  ],
  ctaLabel: "Записаться",
  ctaHref: "https://t.me/",
};
