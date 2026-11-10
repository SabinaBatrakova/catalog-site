import { useRentalContent } from "@/templates/rental-1/useRentalContent";
import { Note } from "@/templates/rental-1/Note";
import { Postcard } from "@/templates/rental-1/Postcard";
import { Postmark } from "@/templates/rental-1/Postmark";

export function Hero() {
  const rentalContent = useRentalContent();
  const { wordmark, postcards, postmark, band } = rentalContent;

  return (
    <section>
      <h1 className="pointer-events-none relative z-[13] whitespace-nowrap px-6 pt-2 text-center font-trip-title text-[clamp(30px,10vw,200px)] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-trip-accent md:px-7 md:pt-[1vw]">
        {wordmark}
      </h1>

      <div className="relative flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-10 pt-8 md:mt-[3vw] md:block md:h-[38vw] md:overflow-visible md:p-0">
        {postcards.map((card, i) => (
          <Postcard key={card.id} card={card} number={i + 1} />
        ))}

        <Note />

        <Postmark
          ring={postmark.ring}
          date={postmark.date}
          className="absolute z-30 hidden -rotate-[14deg] opacity-90 md:left-[38%] md:top-[11.5vw] md:block"
        />
      </div>

      <div className="relative z-[2] bg-trip-accent px-6 pb-16 pt-12 text-center md:-mt-[6vw] md:px-7 md:pb-[6vw] md:pt-[8vw]">
        <h2 className="mx-auto max-w-4xl font-hand text-[clamp(36px,4.4vw,80px)] font-normal leading-[1.05] text-white">
          {band.title}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl font-hand text-[clamp(24px,2.3vw,40px)] font-normal leading-[1.15] text-white">
          {band.text}
        </p>
        <a
          href="#stays"
          className="mt-8 inline-block rounded-full border-2 border-white px-9 py-3 font-hand text-[clamp(24px,2vw,34px)] font-normal leading-none text-white transition-colors duration-300 hover:bg-trip-cream hover:text-trip-ink"
        >
          {band.button}
        </a>
      </div>
    </section>
  );
}
