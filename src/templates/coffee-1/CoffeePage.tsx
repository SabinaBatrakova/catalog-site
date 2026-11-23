import { useState } from "react";
import { coffeeContent } from "./content";
import { ScrollMachine } from "./components/ScrollMachine";
import { Header } from "./components/Header";

export function CoffeePage() {
  const { brand, nav, hero, scene } = coffeeContent;
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="relative bg-white font-coffee-sans text-coffee-ink">
      <Header brand={brand} nav={nav} cartCount={cartCount} />

      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[84px] z-0 select-none pr-[7vw] text-right font-coffee-serif text-[22vw] leading-[0.8] text-coffee-espresso"
      >
        {brand.wordmark}
      </p>

      <ScrollMachine data={scene} endId="trust" />

      <main className="relative z-[2]">
        <section id="top" className="flex min-h-screen items-end px-12 pb-12">
          <div className="w-[min(460px,36vw)]">
            <p className="text-xs uppercase tracking-[0.24em] text-coffee-crema">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 font-coffee-serif text-5xl uppercase leading-none">
              {hero.title}{" "}
              <span className="text-coffee-espresso">{hero.accent}</span>
            </h1>
            <p className="mt-4 leading-relaxed text-coffee-muted">{hero.text}</p>
            <button
              type="button"
              onClick={() => setCartCount((n) => n + 1)}
              className="mt-6 rounded-full border px-4 py-2 text-xs"
            >
              Тест корзины +1
            </button>
          </div>
        </section>
        <div className="h-[400vh]" />
      </main>

      <div id="trust" className="relative z-[2] h-40 border-t border-coffee-line bg-white" />
    </div>
  );
}