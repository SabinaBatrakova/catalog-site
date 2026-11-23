import type { ReactNode } from "react";
import type { CoffeeContent, TrustIcon } from "../content";

type TrustRowProps = {
  id: string;
  items: CoffeeContent["trust"];
};

const icons: Record<TrustIcon, ReactNode> = {
  roast: (
    <path d="M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18M5 8c4 1 10 1 14 0M5 16c4-1 10-1 14 0" />
  ),
  delivery: (
    <>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="17.5" r="1.5" />
      <circle cx="17" cy="17.5" r="1.5" />
    </>
  ),
  payment: <path d="M4 7h16v10H4zM4 11h16" />,
  classes: (
    <path d="M5 11h12v4a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5zM17 12h1.5a2 2 0 0 1 0 4H17M9 4c0 2 2 2 2 4M13 4c0 2 2 2 2 4" />
  ),
};

export function TrustRow({ id, items }: TrustRowProps) {
  return (
    <div
      id={id}
      className="relative z-[2] grid grid-cols-2 gap-6 border-t border-coffee-line bg-white px-5 py-7 min-[820px]:grid-cols-4 min-[820px]:px-12 min-[820px]:py-9"
    >
      {items.map((item) => (
        <div key={item.icon} className="flex items-start gap-3">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-[22px] shrink-0 fill-none stroke-coffee-espresso stroke-[1.5]"
          >
            {icons[item.icon]}
          </svg>
          <p className="text-[13px] leading-snug text-coffee-muted">
            <span className="mb-0.5 block text-xs font-medium uppercase tracking-[0.14em] text-coffee-ink">
              {item.title}
            </span>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}