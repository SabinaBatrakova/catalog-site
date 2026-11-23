import { coffeeContent } from './content'

export function CoffeePage() {
  const { brand, hero } = coffeeContent

  return (
    <main className="min-h-screen bg-white px-12 py-24 text-[#2a1a12]">
      <p className="text-sm uppercase tracking-[0.24em] text-[#c8915a]">
        {hero.eyebrow}
      </p>
      <h1 className="mt-4 text-6xl uppercase">
        {hero.title} <span className="text-[#4a2c1d]">{hero.accent}</span>
      </h1>
      <p className="mt-6 max-w-md text-[#8a7b72]">{hero.text}</p>
      <p className="mt-12 text-[22vw] leading-none text-[#4a2c1d]">
        {brand.wordmark}
      </p>
    </main>
  )
}