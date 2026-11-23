import { useCallback, useState } from "react";
import { coffeeContent } from "./content";
import { ScrollMachine } from "./components/ScrollMachine";
import { Header } from "./components/Header";
import { Wordmark } from "./components/Wordmark";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Beans } from "./components/Beans";
import { Story } from "./components/Story";
import { Classes } from "./components/Classes";
import { Visit } from "./components/Visit";
import { Final } from "./components/Final";
import { TrustRow } from "./components/TrustRow";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";

export function CoffeePage() {
  const {
    brand, nav, hero, menu, beans, story, classes, visit, final, trust, footer, cart: cartLabels, scene,
  } = coffeeContent;
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = Object.values(cart).reduce((sum, n) => sum + n, 0);

  const changeQty = (id: string, delta: number) => {
    setCart((prev) => {
      const next = (prev[id] ?? 0) + delta;
      const { [id]: _removed, ...rest } = prev;
      return next > 0 ? { ...rest, [id]: next } : rest;
    });
  };

  const closeCart = useCallback(() => setCartOpen(false), []);

  return (
    <div className="relative overflow-x-clip bg-white font-coffee-sans text-coffee-ink">
      <Header
        brand={brand}
        nav={nav}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />
      <Wordmark text={brand.wordmark} />
      <ScrollMachine data={scene} endId="trust" />

      <main className="relative z-[2]">
        <Hero data={hero} />
        <Menu data={menu} />
        <Beans data={beans} cart={cart} onAdd={(id) => changeQty(id, 1)} />
        <Story data={story} />
        <Classes data={classes} />
        <Visit data={visit} />
        <Final data={final} />
      </main>

      <TrustRow id="trust" items={trust} />
      <Footer data={footer} />

      <CartDrawer
        open={cartOpen}
        onClose={closeCart}
        labels={cartLabels}
        beans={beans.items}
        cart={cart}
        onChange={changeQty}
      />
    </div>
  );
}