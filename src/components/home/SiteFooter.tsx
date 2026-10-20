import { Reveal } from "@/components/home/Reveal";
import { contacts } from "@/lib/contacts";

const label = "font-display text-xs font-medium uppercase tracking-[0.08em]";

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="flex min-h-svh flex-col justify-end border-t border-line px-7 pt-40"
    >
      <Reveal>
        <p className={label}>Связь</p>
        <div className="mt-1 flex flex-wrap items-center gap-6">
          <a
            href={contacts[0].href}
            target="_blank"
            rel="noreferrer"
            className="font-narrow font-serif text-[34px] leading-none md:text-[40px]"
          >
            Написать в Telegram
          </a>
          <a
            href={contacts[0].href}
            target="_blank"
            rel="noreferrer"
            className="rotate-12 rounded-[50%] border-[1.5px] border-ink bg-steel px-5 py-2 font-display text-xs font-medium uppercase tracking-[0.08em]"
          >
            Открыть ↗
          </a>
        </div>
      </Reveal>

      <Reveal className="mt-8 flex gap-8">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className={label}
          >
            {c.label}
          </a>
        ))}
      </Reveal>

      <div className="flex items-center justify-between py-14">
        <span className={label}>© 2026 Сабина</span>
        <a
          href="#top"
          aria-label="Наверх"
          className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-ink"
        >
          ↑
        </a>
      </div>
    </footer>
  );
}