import { Link } from 'react-router-dom'

const niches = [
  { templateId: 'beauty-1', label: 'Услуги и красота', live: true },
  { templateId: 'school-1', label: 'Обучение и семинары', live: false },
  { templateId: 'rental-1', label: 'Туризм и аренда', live: false },
]

export function Catalog() {
  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl">Каталог сайтов</h1>
      <ul className="mt-8 max-w-md divide-y">
        {niches.map((n) => (
          <li key={n.templateId} className="flex items-center justify-between py-4">
            <span>{n.label}</span>
            {n.live ? (
              <Link to={`/templates/${n.templateId}`} className="text-blue-500 underline">
                Смотреть демо
              </Link>
            ) : (
              <span className="text-sm opacity-50">Скоро</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}