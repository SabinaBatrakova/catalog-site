import { rentalContent } from "@/templates/rental-1/content";

export function Note() {
  const { note } = rentalContent;

  return (
    <aside className="relative w-[250px] shrink-0 snap-center rotate-2 bg-trip-card p-6 shadow-[0_1px_0_rgba(0,0,0,0.12),0_8px_16px_-10px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out hover:rotate-0 md:absolute md:left-[71%] md:top-[5vw] md:z-[14] md:w-[clamp(210px,22vw,420px)]">
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3 bg-trip-sand/80"
      />
      <p className="font-hand text-[clamp(28px,2.6vw,48px)] font-medium leading-none text-trip-accent">
        {note.greeting}
      </p>
      <p className="mt-3 font-trip-text text-sm leading-relaxed md:text-[clamp(14px,1.15vw,20px)]">
        {note.text}
      </p>
      <a
        href="#book"
        className="mt-5 inline-block rounded-full bg-trip-ink px-5 py-2 font-trip-mono text-[11px] uppercase tracking-[0.06em] text-trip-cream"
      >
        {note.button}
      </a>
    </aside>
  );
}