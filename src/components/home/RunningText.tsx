import { useEffect, useRef } from "react";

const works = ["Салон красоты", "Шаблоны"];
const tiles = ["bg-steel", "bg-line", "bg-accent"];
const topics = "Шаблоны · Сайты · Лендинги · Визитки · Каталоги";

export function RunningText() {
  const rowOne = useRef<HTMLDivElement>(null);
  const rowTwo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const update = () => {
      const one = rowOne.current;
      const two = rowTwo.current;
      if (!one || !two) return;

      const y = window.scrollY * 0.8;
      const shiftOne = Math.max(0, one.scrollWidth - window.innerWidth);
      const shiftTwo = Math.max(0, two.scrollWidth - window.innerWidth);

      one.style.transform = `translateX(${-Math.min(y, shiftOne)}px)`;
      two.style.transform = `translateX(${-shiftTwo + Math.min(y, shiftTwo)}px)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="overflow-hidden py-12 md:py-20">
      <div
        ref={rowOne}
        className="w-max whitespace-nowrap font-display text-[52px] font-semibold uppercase leading-none will-change-transform md:text-[92px]"
      >
        {[...works, ...works].map((name, i) => (
          <span key={i}>
            {name}
            <span
              className={`mx-5 inline-block h-[38px] w-[22px] align-middle md:mx-7 md:h-[66px] md:w-[38px] ${tiles[i % tiles.length]}`}
            />
          </span>
        ))}
      </div>

      <div
        ref={rowTwo}
        className="w-max whitespace-nowrap font-display text-[52px] font-semibold uppercase leading-none text-transparent will-change-transform [-webkit-text-stroke:1.5px_var(--color-ink)] md:text-[92px]"
      >
        {topics} · {topics}
      </div>
    </section>
  );
}
