import type { MenuItem } from "../content";

type PriceListProps = {
  items: MenuItem[];
};

export function PriceList({ items }: PriceListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-baseline justify-between gap-4 border-b border-coffee-line py-3"
        >
          <span>
            <span className="block text-[15px]">{item.name}</span>
            <span className="mt-0.5 block text-[13px] text-coffee-muted">
              {item.note}
            </span>
          </span>
          <span className="shrink-0 font-coffee-serif text-[15px]">
            {item.price}
          </span>
        </li>
      ))}
    </ul>
  );
}