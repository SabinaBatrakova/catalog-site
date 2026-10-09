import { Link } from "react-router-dom";

const niches = [
  { templateId: "beauty-1", label: "Услуги и красота", live: true },
  { templateId: "school-1", label: "Обучение и семинары", live: true },
  { templateId: "rental-1", label: "Туризм и аренда", live: true },
];

export function Catalog() {
  return (
    <div className="flex h-screen">
      <aside className="w-80 shrink-0 overflow-y-auto border-r p-8">
        <h1 className="text-2xl">Имя Фамилия</h1>
        <p className="mt-4 text-sm">
          Делаю сайты для малого бизнеса в Черногории. Выбери шаблон справа.
        </p>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
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
