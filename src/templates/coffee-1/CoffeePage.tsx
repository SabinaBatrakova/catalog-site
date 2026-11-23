import { coffeeContent } from "./content";
import { ScrollMachine } from "./components/ScrollMachine";

export function CoffeePage() {
  const { brand, hero, scene } = coffeeContent;

  return (
    <div className="relative bg-white font-coffee-sans text-coffee-ink">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[84px] z-0 select-none pr-[3vw] text-right font-coffee-serif text-[22vw] leading-[0.8] text-coffee-espresso"
      >
        {brand.wordmark}
      </p>

      <ScrollMachine data={scene} endId="trust" />

      <main className="relative z-[2]">
        <section className="flex min-h-screen items-end px-12 pb-12">
          <div className="w-[min(460px,36vw)]">
            <p className="text-xs uppercase tracking-[0.24em] text-coffee-crema">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 font-coffee-serif text-5xl uppercase leading-none">
              {hero.title}{" "}
              <span className="text-coffee-espresso">{hero.accent}</span>
            </h1>
            <p className="mt-4 leading-relaxed text-coffee-muted">{hero.text}</p>
          </div>
        </section>
        <div className="h-[400vh]" />
      </main>

      <div id="trust" className="relative z-[2] h-40 border-t border-coffee-line bg-white" />
    </div>
  );
}