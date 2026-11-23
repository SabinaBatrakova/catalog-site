import { useState } from "react";
import { coffeeContent } from "./content";
import { ScrollMachine } from "./components/ScrollMachine";
import { Header } from "./components/Header";
import { Wordmark } from "./components/Wordmark";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Beans } from "./components/Beans";

export function CoffeePage() {
  const { brand, nav, hero, menu, beans, scene } = coffeeContent;
  const [cart, setCart] = useState<Record<string, number>>({});

  const cartCount = Object.values(cart).reduce((sum, n) => sum + n, 0);

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  return (
    <div className="relative overflow-x-clip bg-white font-coffee-sans text-coffee-ink">
      <Header brand={brand} nav={nav} cartCount={cartCount} />
      <Wordmark text={brand.wordmark} />
      <ScrollMachine data={scene} endId="trust" />

      <main className="relative z-[2]">
        <Hero data={hero} />
        <Menu data={menu} />
        <Beans data={beans} cart={cart} onAdd={addToCart} />
        <div className="h-[200vh]" />
      </main>

      <div id="trust" className="relative z-[2] h-40 border-t border-coffee-line bg-white" />
    </div>
  );
}