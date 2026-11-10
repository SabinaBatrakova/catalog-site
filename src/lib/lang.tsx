import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// Языки сайта. Порядок = порядок кнопок в переключателе.
export const LANGS = ["ru", "en", "sr"] as const;
export type Lang = (typeof LANGS)[number];

// Type guard вместо `as`: проверяем, что строка это один из наших языков.
export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && LANGS.some((l) => l === value);
}

const STORAGE_KEY = "lang";

// Читаем выбранный язык из localStorage (в try/catch: может быть недоступен).
function readInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // игнорируем: останется русский по умолчанию
  }
  return "ru";
}

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue>({
  lang: "ru",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readInitialLang);

  // Сохраняем выбор и обновляем <html lang="...">: важно для доступности и SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // игнорируем
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
