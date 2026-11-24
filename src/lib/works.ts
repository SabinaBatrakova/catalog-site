export type WorkKind = "template" | "client";

export type Package = {
  name: string;
  note: string;
  price: number;
};

export type Screenshot = {
  src: string;
  device: "desktop" | "mobile";
  label: string;
};

export type Lighthouse = {
  performance: number;
  seo: number;
  accessibility: number;
};

export type Work = {
  id: string;
  kind: WorkKind;
  title: string;
  label: string;
  category: string;
  description: string;
  stack: string[];
  features: string[];
  ai: string | null;
  languages: string;
  time: string;
  href: string;
  external: boolean;
  previewSrc?: string;
  image?: string;
  priceFrom?: number;
  packages?: Package[];
  screenshots?: Screenshot[];
  lighthouse?: Lighthouse;
};

export const works: Work[] = [
  {
    id: "coffee-1",
    kind: "template",
    title: "Кофейня",
    label: "Шаблон",
    category: "Кафе и рестораны",
    description:
      "Лендинг кофейни с обжаркой: кофемашина «готовит» эспрессо по мере прокрутки. Меню, продажа зёрен с корзиной, мастер-классы, контакты.",
    stack: ["React", "TypeScript", "Vite", "Tailwind v4"],
    features: ["Анимация по скроллу (canvas)", "Корзина", "Адаптив"],
    ai: "Видео и изображения — Kling AI",
    languages: "EN",
    time: "7–10 дней",
    href: "/templates/coffee-1",
    external: false,
    previewSrc: "/templates/coffee-1",
    priceFrom: 500, // TODO: твоя цена
    packages: [
      { name: "Шаблон", note: "ваши тексты и фото", price: 500 },
      { name: "+ ИИ-видео", note: "ролик вашего продукта", price: 650 },
      { name: "Под ключ", note: "дизайн с нуля", price: 900 },
    ],
  },
  {
    id: "tennis-1",
    kind: "template",
    title: "Тренер по теннису",
    label: "Шаблон",
    category: "Спорт и тренеры",
    description:
      "Личный сайт тренера: 3D-корт на CSS, структура по теннисному счёту, тарифы и запись на тренировку.",
    stack: ["React", "TypeScript", "Vite", "Tailwind v4"],
    features: ["3D-корт на CSS", "Одностраничник", "Адаптив"],
    ai: null, // TODO: был ли ИИ?
    languages: "EN",
    time: "5–7 дней",
    href: "/templates/tennis-1",
    external: false,
    previewSrc: "/templates/tennis-1",
    priceFrom: 350, // TODO
    packages: [
      { name: "Шаблон", note: "ваши тексты и фото", price: 350 },
      { name: "+ ИИ-видео", note: "живой первый экран", price: 500 },
      { name: "Под ключ", note: "дизайн с нуля", price: 800 },
    ],
  },
  {
    id: "rental-1",
    kind: "template",
    title: "Туризм и аренда",
    label: "Шаблон",
    category: "Туризм и недвижимость",
    description:
      "Апартаменты и экскурсии в Черногории: дизайн «почтовые открытки», три языка.",
    stack: ["React", "TypeScript", "Vite", "Tailwind v4"],
    features: ["Каталог объектов и туров", "Переключатель языков", "Адаптив"],
    ai: null, // TODO
    languages: "RU · EN · SR",
    time: "7–10 дней",
    href: "/templates/rental-1",
    external: false,
    previewSrc: "/templates/rental-1",
    priceFrom: 450, // TODO
    packages: [
      { name: "Шаблон", note: "ваши тексты и фото", price: 450 },
      { name: "+ ИИ-видео", note: "видео объектов из фото", price: 600 },
      { name: "Под ключ", note: "дизайн с нуля", price: 900 },
    ],
  },
  {
    id: "ipodo-expert-lab",
    kind: "client",
    title: "iPODO Expert Lab",
    label: "Проект",
    category: "Обучение",
    description: "Сайт образовательных семинаров по подологии.",
    stack: ["TODO"],
    features: ["Семинары", "Запись"],
    ai: null,
    languages: "TODO",
    time: "TODO",
    href: "https://ipodoexpertlab.com",
    external: true,
    image: "/works/ipodoexpertlab.webp",
  },
  {
    id: "ipodo",
    kind: "client",
    title: "iPODO",
    label: "В работе",
    category: "Студия подологии",
    description: "Сайт студии подологии, в разработке.",
    stack: ["React"],
    features: ["TODO"],
    ai: null,
    languages: "TODO",
    time: "в процессе",
    href: "https://ipodo.me",
    external: true,
    image: "/works/work-ipodo.webp",
  },
];

export function getWork(id: string) {
  return works.find((work) => work.id === id);
}