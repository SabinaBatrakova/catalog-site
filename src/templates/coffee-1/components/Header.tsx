import type { CoffeeContent } from "../content";

type HeaderProps = {
  brand: CoffeeContent["brand"];
  nav: CoffeeContent["nav"];
  cartCount: number;
};

export function Header({ brand, nav, cartCount }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between bg-white/85 px-5 py-4 backdrop-blur-md min-[820px]:px-12 min-[820px]:py-5">
      <a href="#top" className="leading-none">
        <span className="font-coffee-serif text-[22px]">{brand.name}</span>
        <span className="mt-1 block text-[10px] uppercase tracking-[0.28em] text-coffee-muted">
          {brand.tagline}
        </span>
      </a>

      <nav className="hidden gap-8 text-sm min-[820px]:flex">
        {nav.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-coffee-crema"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        aria-label={`Cart, ${cartCount} items`}
        className="flex items-center gap-2 rounded-full border border-coffee-ink bg-white px-4 py-2 text-sm"
      >
        Cart
        <span className="rounded-full bg-coffee-espresso px-[7px] py-px text-[11px] font-medium text-white">
          {cartCount}
        </span>
      </button>
    </header>
  );
}