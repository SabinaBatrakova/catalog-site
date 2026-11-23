import { useState } from "react";
import { coffeeContent } from "./content";
import { ScrollMachine } from "./components/ScrollMachine";
import { Header } from "./components/Header";
import { Wordmark } from "./components/Wordmark";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";

export function CoffeePage() {
  const { brand, nav, hero, menu, scene } = coffeeContent;
  const [cartCount] = useState(0);

  return (
    <div className="relative overflow-x-clip bg-white font-coffee-sans text-coffee-ink">
      <Header brand={brand} nav={nav} cartCount={cartCount} />
      <Wordmark text={brand.wordmark} />
      <ScrollMachine data={scene} endId="trust" />

      <main className="relative z-[2]">
        <Hero data={hero} />
        <Menu data={menu} />
        <div className="h-[400vh]" />
      </main>

      <div
        id="trust"
        className="relative z-[2] h-40 border-t border-coffee-line bg-white"
      />
    </div>
  );
}
