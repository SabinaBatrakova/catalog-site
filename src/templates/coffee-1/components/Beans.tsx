import type { CoffeeContent } from "../content";
import { Section } from "./Section";

type BeansProps = {
  data: CoffeeContent["beans"];
  cart: Record<string, number>;
  onAdd: (id: string) => void;
};

export function Beans({ data, cart, onAdd }: BeansProps) {
  return (
    <Section head={data}>
      <div className="grid gap-3">
        {data.items.map((bean) => {
          const qty = cart[bean.id] ?? 0;
          return (
            <div
              key={bean.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-coffee-line bg-white px-[18px] py-4"
            >
              <div>
                <p className="font-medium">{bean.name}</p>
                <p className="mt-0.5 text-[13px] text-coffee-muted">{bean.notes}</p>
              </div>
              <button
                type="button"
                onClick={() => onAdd(bean.id)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-2 text-[13px] transition-colors ${
                  qty > 0
                    ? "border-coffee-espresso bg-coffee-espresso text-white"
                    : "border-coffee-ink bg-white hover:bg-coffee-ink hover:text-white"
                }`}
              >
                {qty > 0
                  ? `${data.addedLabel} ${qty}`
                  : `${data.buyLabel} · €${bean.price}`}
              </button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}