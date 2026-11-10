import { useRentalContent } from "@/templates/rental-1/useRentalContent";
import type { Stay } from "@/templates/rental-1/content";

function StayCard({ stay }: { stay: Stay }) {
  return (
    <article
      className={`relative bg-trip-card p-2 pb-4 shadow-[0_1px_0_rgba(0,0,0,0.12),0_8px_16px_-10px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:rotate-0 ${stay.tilt} ${stay.offset}`}
    >
      <div className="absolute -right-2 -top-3 z-10 rotate-[7deg] border-2 border-dotted border-trip-ink bg-trip-card p-1 text-center font-trip-mono text-trip-ink">
        <span className="block text-sm font-medium leading-none">
          {stay.price}
        </span>
        <span className="mt-0.5 block text-[7px] uppercase tracking-[0.08em]">
          {stay.unit}
        </span>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden">
        {stay.image ? (
          <img
            src={stay.image}
            alt={stay.title}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className={`flex h-full items-end p-2 font-trip-mono text-[10px] ${stay.tone}`}
          >
            фото
          </div>
        )}
      </div>

      <div className="px-1 pt-3">
        <h3 className="font-trip-title text-base font-semibold uppercase leading-tight tracking-[-0.02em] md:text-lg">
          {stay.title}
        </h3>
        <p className="mt-2 font-trip-mono text-[11px] text-trip-muted">
          {stay.meta}
        </p>
      </div>
    </article>
  );
}

export function Stays() {
  const rentalContent = useRentalContent();
  const { sections, stays } = rentalContent;

  return (
    <section id="stays" className="scroll-mt-4 px-6 py-16 md:px-7 md:py-24">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="font-trip-title text-[clamp(28px,4.5vw,64px)] font-semibold uppercase leading-none tracking-[-0.02em]">
          {sections.stays.title}
        </h2>
        <a
          href="#book"
          className="font-trip-mono text-[11px] uppercase tracking-[0.06em] text-trip-accent"
        >
          {sections.stays.link}
        </a>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {stays.map((stay) => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>
    </section>
  );
}
