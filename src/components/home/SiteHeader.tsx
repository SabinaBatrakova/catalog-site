import { useEffect, useRef } from "react";
import { contacts } from "@/lib/contacts";

const MIN_SIZE = 14;
const MAX_SIZE_DESKTOP = 150;
const MAX_SIZE_MOBILE = 84;
const FOOTER_OFFSET = 0.5;
const EASE = 2;

export function SiteHeader() {
  const nameRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const update = () => {
      const name = nameRef.current;
      const footer = document.getElementById("footer");
      if (!name || !footer) return;

      const footerTop = footer.getBoundingClientRect().top + window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const end = Math.min(
        footerTop - window.innerHeight * FOOTER_OFFSET,
        maxScroll,
      );
      const progress = Math.min(
        Math.max(window.scrollY / Math.max(end, 1), 0),
        1,
      );
      const eased = Math.pow(progress, EASE);
      const maxSize =
        window.innerWidth < 768 ? MAX_SIZE_MOBILE : MAX_SIZE_DESKTOP;

      name.style.fontSize = `${MIN_SIZE + eased * (maxSize - MIN_SIZE)}px`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="h-12" />
      <header className="fixed inset-x-0 top-0 z-50 flex min-h-12 items-center justify-between border-b border-line bg-paper px-7 py-3">
        <div className="flex items-baseline gap-4">
          <a
            ref={nameRef}
            href="#top"
            style={{ fontSize: MIN_SIZE }}
            className="font-display font-semibold uppercase leading-none"
          >
            Сабина
          </a>
          <span className="hidden font-display text-[11px] font-medium uppercase tracking-[0.08em] text-muted sm:inline">
            Веб-разработчик
          </span>
        </div>

        <div className="flex items-center gap-6 font-display text-xs font-medium uppercase tracking-[0.08em]">
          <span>RU · EN · SR</span>
          <a
            href={contacts[0].href}
            target="_blank"
            rel="noreferrer"
            className="text-accent"
          >
            Написать →→
          </a>
        </div>
      </header>
    </>
  );
} 