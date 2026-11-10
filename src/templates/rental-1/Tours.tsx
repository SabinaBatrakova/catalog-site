import { useRentalContent } from "@/templates/rental-1/useRentalContent";

export function Tours() {
  const rentalContent = useRentalContent();
  const { sections, tours } = rentalContent;

  return (
    <section
      id="tours"
      className="scroll-mt-4 bg-trip-ink px-6 py-16 text-trip-cream md:px-7 md:py-24"
    >
      <h2 className="font-trip-title text-[clamp(28px,4.5vw,64px)] font-semibold uppercase leading-none tracking-[-0.02em]">
        {sections.tours.title}
      </h2>

      <ul className="mt-10 flex flex-col gap-3">
        {tours.map((tour) => (
          <li key={tour.id} className="flex bg-trip-cream text-trip-ink">
            <div className="flex-1 px-5 py-4 md:px-6 md:py-5">
              <h3 className="font-trip-title text-lg font-semibold uppercase leading-tight tracking-[-0.02em] md:text-2xl">
                {tour.title}
              </h3>
              <p className="mt-2 font-trip-mono text-[11px] text-trip-muted">
                {tour.meta}
              </p>
            </div>

            <a
              href="#book"
              className="flex w-28 shrink-0 flex-col items-center justify-center border-l-2 border-dotted border-trip-ink px-3 text-center md:w-40"
            >
              <span className="font-trip-mono text-xl font-medium md:text-2xl">
                {tour.price}
              </span>
              <span className="mt-1 font-trip-mono text-[10px] uppercase tracking-[0.06em] text-trip-accent">
                {sections.tours.cta}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}