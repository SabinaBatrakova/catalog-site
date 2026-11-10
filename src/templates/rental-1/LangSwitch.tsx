import { LANGS, useLang } from "@/lib/lang";

// Переключатель языка RU / EN / SR. Активный язык подчёркнут оранжевым.
export function LangSwitch() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-3 font-trip-mono text-xs uppercase tracking-[0.08em]">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={l === lang}
          className={`border-b-2 pb-0.5 transition-colors ${
            l === lang
              ? "border-trip-accent text-trip-ink"
              : "border-transparent text-trip-muted hover:text-trip-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
