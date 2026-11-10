import { useRentalContent } from "@/templates/rental-1/useRentalContent";
import { LangSwitch } from "@/templates/rental-1/LangSwitch";
import { Hero } from "@/templates/rental-1/Hero";
import { Stays } from "@/templates/rental-1/Stays";
import { Tours } from "@/templates/rental-1/Tours";

export function RentalPage() {
  // Сначала получаем контент на текущем языке, потом берём из него нужное
  const rentalContent = useRentalContent();
  const { brand, nav } = rentalContent;

  return (
    <div
      id="top"
      className="min-h-screen overflow-x-clip bg-trip-cream font-trip-text text-trip-ink"
    >
      <header className="flex items-center justify-between px-6 py-4 md:px-7 md:py-5">
        <a href="#top" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center border-2 border-dotted border-trip-ink bg-trip-card font-trip-title text-[11px] font-semibold tracking-[-0.02em]">
            MS
          </span>
          <span className="hidden font-trip-title text-[11px] font-semibold uppercase tracking-[0.04em] sm:inline">
            {brand}
          </span>
        </a>

        <nav className="flex items-center gap-5 md:gap-8">
          <a
            href="#stays"
            className="hidden text-sm font-medium decoration-trip-accent decoration-2 underline-offset-4 hover:underline sm:inline"
          >
            {nav.stays}
          </a>
          <a
            href="#tours"
            className="hidden text-sm font-medium decoration-trip-accent decoration-2 underline-offset-4 hover:underline sm:inline"
          >
            {nav.tours}
          </a>
          <a
            href="#about"
            className="hidden text-sm font-medium decoration-trip-accent decoration-2 underline-offset-4 hover:underline sm:inline"
          >
            {nav.about}
          </a>

          {/* Переключатель языка RU / EN / SR */}
          <LangSwitch />

          <a
            href="#book"
            className="rounded-full border-2 border-trip-accent px-5 py-1.5 font-hand text-[22px] font-normal leading-none text-trip-accent transition-colors duration-300 hover:bg-trip-accent hover:text-trip-cream"
          >
            {nav.book}
          </a>
        </nav>
      </header>

      <Hero />
      <Stays />
      <Tours />
    </div>
  );
}
