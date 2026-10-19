import { useEffect, useRef, useState } from "react";
import { contacts } from "@/lib/contacts";

const MIN_SIZE = 14;
const MAX_SIZE_DESKTOP = 110;
const MAX_SIZE_MOBILE = 64;
const EASE = 1.5;

const menuItems = [
  { label: "Работы", href: "#works" },
  { label: "Обо мне", href: "#about" },
];

export function SiteHeader() {
  const nameRef = useRef<HTMLAnchorElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const update = () => {
      const name = nameRef.current;
      if (!name) return;

      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

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

        <div className="hidden items-center gap-6 font-display text-xs font-medium uppercase tracking-[0.08em] md:flex">
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

        <button
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="p-2 md:hidden"
        >
          <span className="block h-0.5 w-5 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-5 bg-ink" />
        </button>

        {menuOpen && (
          <div className="fixed inset-0 flex flex-col bg-paper px-7 py-3 md:hidden">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-semibold uppercase">
                Сабина
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={contacts[0].href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="font-display text-xs font-medium uppercase tracking-[0.08em] text-accent"
                >
                  Написать →→
                </a>
                <button
                  type="button"
                  aria-label="Закрыть меню"
                  onClick={closeMenu}
                  className="p-2 text-xl leading-none"
                >
                  ✕
                </button>
              </div>
            </div>

            <nav className="mt-10 flex flex-col items-end font-display text-[44px] font-semibold uppercase leading-[0.98]">
              {menuItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
              <a
                href={contacts[0].href}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Написать
              </a>
            </nav>

            <div className="mt-10 flex justify-end gap-4 font-display text-xs font-medium uppercase tracking-[0.08em]">
              <span>RU</span>
              <span className="text-muted">EN</span>
              <span className="text-muted">SR</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}