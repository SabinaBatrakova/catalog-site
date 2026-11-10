import { useLang } from "@/lib/lang";
import { getRentalContent } from "@/templates/rental-1/translations";
import type { RentalContent } from "@/templates/rental-1/content";

// Хук: возвращает контент шаблона на текущем языке (та же форма, что и rentalContent).
export function useRentalContent(): RentalContent {
  const { lang } = useLang();
  return getRentalContent(lang);
}
