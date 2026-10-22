import { rentalContent } from "@/templates/rental-1/content";
import { Postcard } from "@/templates/rental-1/Postcard";
import { Postmark } from "@/templates/rental-1/Postmark";

export function Hero() {
  const { wordmark, postcards, postmark, band } = rentalContent;

  return (
    <section>
      <h1 className="relative z-[5] whitespace-nowrap px-6 text-center font-trip-title text-[clamp(30px,10vw,200px)] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-trip-accent md:px-7">
        {wordmark}
      </h1>

      <div className="relative flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-10 pt-8 md:-mt-6 md:block md:h-[600px] md:overflow-visible md:p-0">
        {postcards.map((card, i) => (
          <Postcard key={card.id} card={card} number={i + 1} />
        ))}

        <Postmark
          ring={postmark.ring}
          date={postmark.date}
          className="absolute left-[36%] top-[96px] z-[16] hidden -rotate-[14deg] opacity-85 md:block"
        />
      </div>

      <div className="relative z-30 flex flex-wrap items-center justify-center gap-4 bg-trip-accent px-6 py-5 font-trip-mono text-xs uppercase tracking-[0.06em] text-trip-ink">
        <span>{band.label}</span>
        <a
          href="#stays"
          className="rounded-full border border-trip-ink px-5 py-2"
        >
          {band.button}
        </a>
      </div>
    </section>
  );
}