import { rentalContent } from "@/templates/rental-1/content";
import { Hero } from "@/templates/rental-1/Hero";

export function RentalPage() {
  const { nav } = rentalContent;

  return (
    <div className="min-h-screen overflow-x-clip bg-trip-cream font-trip-text text-trip-ink">
      <header className="flex items-center justify-between px-6 py-4 font-trip-mono text-[11px] md:px-7 md:text-xs">
        <span className="font-medium">MS ✉</span>
        <nav className="flex items-center gap-4 md:gap-6">
          <a href="#stays" className="hidden sm:inline">
            {nav.stays}
          </a>
          <a href="#tours" className="hidden sm:inline">
            {nav.tours}
          </a>
          <a href="#about" className="hidden sm:inline">
            {nav.about}
          </a>
          <a
            href="#book"
            className="rounded-full bg-trip-accent px-4 py-1.5 text-trip-ink"
          >
            {nav.book}
          </a>
        </nav>
      </header>

      <Hero />
    </div>
  );
}