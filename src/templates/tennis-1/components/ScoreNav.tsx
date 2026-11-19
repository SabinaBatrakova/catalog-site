import { useEffect, useState } from "react";
import type { NavItem } from "../content";

type Props = {
  items: NavItem[];
  startDelay: number; // ms
};

const STEP_MS = 850;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ScoreNav({ items, startDelay }: Props) {
  // -1 = nothing lit, items.length = everything lit (pause before reset)
  const [active, setActive] = useState(() => (prefersReducedMotion() ? items.length : -1));

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setActive((prev) => (prev >= items.length ? -1 : prev + 1));
      }, STEP_MS);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [items.length, startDelay]);

  return (
    <nav
      aria-label="Sections"
      className="mt-6 grid grid-cols-2 border-t-[3px] border-tn-green sm:grid-cols-4"
    >
      {items.map((item, i) => {
        const isLit = i <= active;

        return (
          <a
            key={item.href}
            href={item.href}
            className={`pr-3 pt-2.5 transition-opacity duration-300 hover:opacity-100 ${
              isLit ? "opacity-100" : "opacity-25"
            }`}
          >
            <span
              className={`block font-shoulders text-4xl font-black uppercase leading-none md:text-5xl ${
                item.isCta ? "text-tn-clay" : ""
              }`}
            >
              {item.score}
            </span>
            <span
              className={
                item.isCta
                  ? "mt-1.5 inline-block whitespace-nowrap rounded-full bg-tn-green px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-tn-lime"
                  : "mt-1 block text-[11px] font-semibold uppercase tracking-wider"
              }
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}