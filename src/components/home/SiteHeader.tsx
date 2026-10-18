import { contacts } from "@/lib/contacts";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-line bg-paper px-7 py-4">
      <a
        href="#top"
        className="font-display text-sm font-medium uppercase tracking-[0.08em]"
      >
        Сабина
      </a>

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
  );
}