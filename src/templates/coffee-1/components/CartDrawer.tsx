import { useEffect, useState } from "react";
import type { Bean, CoffeeContent } from "../content";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
  labels: CoffeeContent["cart"];
  beans: Bean[];
  cart: Record<string, number>;
  onChange: (id: string, delta: number) => void;
};

export function CartDrawer({ open, onClose, labels, beans, cart, onChange }: CartDrawerProps) {
  const [showNote, setShowNote] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const lines = beans.filter((bean) => (cart[bean.id] ?? 0) > 0);
  const total = lines.reduce((sum, bean) => sum + bean.price * (cart[bean.id] ?? 0), 0);

  return (
    <div className={`fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`}>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`absolute inset-0 bg-coffee-ink/30 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={labels.title}
        className={`absolute inset-y-0 right-0 flex w-full max-w-[400px] flex-col bg-white shadow-xl transition-[transform,visibility] duration-300 ${
          open ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-coffee-line px-6 py-5">
          <h2 className="font-coffee-serif text-xl uppercase">{labels.title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={labels.close}
            className="text-2xl leading-none text-coffee-muted hover:text-coffee-ink"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <p className="py-8 text-center text-coffee-muted">{labels.empty}</p>
          ) : (
            <ul>
              {lines.map((bean) => {
                const qty = cart[bean.id] ?? 0;
                return (
                  <li
                    key={bean.id}
                    className="flex items-center justify-between gap-3 border-b border-coffee-line py-4"
                  >
                    <div>
                      <p className="font-medium">{bean.name}</p>
                      <p className="mt-0.5 text-[13px] text-coffee-muted">
                        250 g · €{bean.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onChange(bean.id, -1)}
                        aria-label={`Remove one ${bean.name}`}
                        className="size-8 rounded-full border border-coffee-line hover:border-coffee-ink"
                      >
                        −
                      </button>
                      <span className="w-4 text-center">{qty}</span>
                      <button
                        type="button"
                        onClick={() => onChange(bean.id, 1)}
                        aria-label={`Add one ${bean.name}`}
                        className="size-8 rounded-full border border-coffee-line hover:border-coffee-ink"
                      >
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-coffee-line px-6 py-5">
          <div className="flex items-baseline justify-between">
            <span className="text-coffee-muted">{labels.total}</span>
            <span className="font-coffee-serif text-2xl">€{total}</span>
          </div>
          <button
            type="button"
            disabled={lines.length === 0}
            onClick={() => setShowNote(true)}
            className="mt-4 w-full rounded-full bg-coffee-espresso py-3.5 text-white transition-colors hover:bg-coffee-ink disabled:opacity-40"
          >
            {labels.checkout}
          </button>
          {showNote && (
            <p className="mt-3 text-center text-[13px] text-coffee-muted">{labels.demoNote}</p>
          )}
        </div>
      </aside>
    </div>
  );
}