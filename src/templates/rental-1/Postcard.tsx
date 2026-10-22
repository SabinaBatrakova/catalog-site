import type { Postcard as PostcardData } from "@/templates/rental-1/content";

type PostcardProps = {
  card: PostcardData;
  number: number;
};

export function Postcard({ card, number }: PostcardProps) {
  return (
    <article
      className={`group relative w-[220px] shrink-0 snap-center bg-trip-card p-2 pb-6 shadow-[0_1px_0_rgba(0,0,0,0.12),0_8px_16px_-10px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out hover:z-20 md:absolute md:hover:-translate-y-3 md:hover:rotate-0 md:hover:scale-105 ${card.frame}`}
    >
      {card.stamp && (
        <div
          className={`absolute -right-2 -top-3 z-10 border-2 border-dotted border-trip-ink bg-trip-card p-1 text-center font-trip-mono text-trip-ink ${card.stamp.tilt}`}
        >
          <span className="block text-sm font-medium leading-none">
            {card.stamp.price}
          </span>
          <span className="mt-0.5 block text-[7px] uppercase tracking-[0.08em]">
            {card.stamp.unit}
          </span>
        </div>
      )}

      <div className="relative aspect-[4/3] overflow-hidden">
        {card.image ? (
          <img
            src={card.image}
            alt={`${card.place}, ${card.city}`}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className={`flex h-full items-end p-2 font-trip-mono text-[9px] ${card.tone}`}
          >
            {card.place}
          </div>
        )}
      </div>

      <p className="absolute inset-x-2 bottom-1.5 flex justify-between font-trip-mono text-[9px] uppercase tracking-[0.06em]">
        <span>{card.city}</span>
        <span>№ {number}</span>
      </p>
    </article>
  );
}