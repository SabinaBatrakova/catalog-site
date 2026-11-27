// ---------- Типы ----------

export type ServiceStatus = "available" | "soon";

export type Service = {
  id: string;
  title: string; // название услуги (для карточки)
  headline: string; // большой заголовок (для блока, когда услуга доступна)
  description: string;
  priceFrom: number; // в евро
  monthly?: number; // абонплата в месяц, если есть
  features: string[];
  status: ServiceStatus;
  demoWorkId?: string; // какой шаблон показать в телефоне (id из works.ts)
};

// ---------- Данные ----------

export const services: Service[] = [
  {
    id: "shop",
    title: "Витрина и интернет-магазин",
    headline: "Пусть клиенты покупают прямо с сайта",
    description:
      "Каталог товаров с корзиной: заказ сразу приходит вам в мессенджер. Подходит для кофеен, мастерских и локальных брендов.",
    priceFrom: 400,
    features: [
      "До 30 товаров",
      "Корзина",
      "Заказ в мессенджер или на почту",
      "Онлайн-оплата — по согласованию, от 800 €",
    ],
    status: "available",
    demoWorkId: "coffee-1",
  },
  {
    id: "assistant",
    title: "Сайт, который отвечает клиентам 24/7",
    headline: "Сайт, который отвечает клиентам ночью",
    description:
      "ИИ-ассистент отвечает на вопросы о ценах, услугах и свободных датах, а готовую заявку присылает вам в Telegram. Вы не теряете клиентов, которые пишут ночью.",
    priceFrom: 350,
    monthly: 20,
    features: [
      "Ответы на 15–20 частых вопросов",
      "Заявка в Telegram или на почту",
      "Ассистент к готовому сайту — от 200 €",
    ],
    status: "soon",
  },
  {
    id: "dashboard",
    title: "Дашборд для владельца бизнеса",
    headline: "Все цифры бизнеса на одном экране",
    description:
      "Продажи, заявки, загрузка — на одном экране. Данные берутся из ваших таблиц, ручные отчёты больше не нужны.",
    priceFrom: 300,
    features: [
      "Из Google Sheets или Excel",
      "Продажи, заявки, загрузка",
      "С автообновлением из CRM — от 600 €",
    ],
    status: "soon",
  },
];

// Готовые списки для блоков
export const availableServices = services.filter(
  (service) => service.status === "available",
);
export const soonServices = services.filter(
  (service) => service.status === "soon",
);