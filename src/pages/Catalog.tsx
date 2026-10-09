import { Link } from "react-router-dom";
import { useState } from "react";

const niches = [
  {
    templateId: "beauty-1",
    label: "Услуги и красота",
    desc: "Салоны, мастера, студии",
    live: true,
  },
  {
    templateId: "school-1",
    label: "Обучение и семинары",
    desc: "Школы, семинары, курсы",
    live: true,
  },
  {
    templateId: "rental-1",
    label: "Туризм и аренда",
    desc: "Туры, аренда, отели",
    live: true,
  },
];

export function Catalog() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <aside
        className={`shrink-0 overflow-hidden transition-all duration-300 ${
          isOpen ? "w-80 border-r" : "w-0"
        }`}
      >
        <div className="h-full w-80 overflow-y-auto p-8">
          <h1 className="text-2xl">Сабина Батракова</h1>
          <p className="mt-4 text-sm">
            Делаю сайты для малого бизнеса. Выбери шаблон справа.
          </p>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-6 rounded-full border px-4 py-2 text-sm"
        >
          {isOpen ? "Скрыть описание" : "Показать описание"}
        </button>

        <ul className="max-w-md divide-y">
          {niches.map((n) => (
            <li
              key={n.templateId}
              className="flex items-center justify-between py-4"
            >
              <span>{n.label}</span>
              <Link
                to={`/templates/${n.templateId}`}
                className="text-blue-500 underline"
              >
                Смотреть демо
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
