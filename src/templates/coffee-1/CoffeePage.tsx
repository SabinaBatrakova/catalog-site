import { coffeeContent } from "./content";

export function CoffeePage() {
  const { brand, hero } = coffeeContent;

  return (
    <main className="min-h-screen bg-white px-12 py-24 font-coffee-sans text-coffee-ink">
      <p className="text-xs uppercase tracking-[0.24em] text-coffee-crema">
        {hero.eyebrow}
      </p>
      <h1 className="mt-4 font-coffee-serif text-6xl uppercase">
        {hero.title} <span className="text-coffee-espresso">{hero.accent}</span>
      </h1>
      <p className="mt-6 max-w-md leading-relaxed text-coffee-muted">
        {hero.text}
      </p>
      <p className="mt-12 font-coffee-serif text-[22vw] leading-[0.8] text-coffee-espresso">
        {brand.wordmark}
      </p>
    </main>
  );
}