export type Stamp = {
  price: string;
  unit: string;
  tilt: string;
};

export type Postcard = {
  id: string;
  place: string;
  city: string;
  image?: string;
  tone: string;
  frame: string;
  stamp?: Stamp;
};

export type Note = {
  greeting: string;
  text: string;
  button: string;
};

export type Stay = {
  id: string;
  title: string;
  meta: string;
  price: string;
  unit: string;
  image?: string;
  tone: string;
  tilt: string;
  offset: string;
};

export type Tour = {
  id: string;
  title: string;
  meta: string;
  price: string;
};

export type RentalContent = {
  brand: string;
  wordmark: string;
  nav: {
    stays: string;
    tours: string;
    about: string;
    book: string;
  };
  postcards: Postcard[];
  note: Note;
  postmark: {
    ring: string;
    date: string;
  };
  band: {
    title: string;
    text: string;
    button: string;
  };
  sections: {
    stays: { title: string; link: string };
    tours: { title: string; cta: string };
  };
  stays: Stay[];
  tours: Tour[];
};

export const rentalContent: RentalContent = {
  brand: "Montenegro Stay",
  wordmark: "Montenegro",
  nav: {
    stays: "Жильё",
    tours: "Туры",
    about: "О нас",
    book: "Забронировать",
  },
  postcards: [
    {
      id: "boka",
      place: "Бока-Которская",
      city: "Котор",
      tone: "bg-trip-cobalt text-white/80",
      frame:
        "md:left-[3%] md:top-[4vw] md:w-[clamp(150px,15vw,300px)] md:-rotate-[8deg] md:z-[6]",
    },
    {
      id: "old-town",
      place: "Старый город",
      city: "Будва",
      tone: "bg-trip-accent text-white/80",
      frame:
        "md:left-[23%] md:top-[1vw] md:w-[clamp(150px,15vw,300px)] md:rotate-[5deg] md:z-[9]",
    },
    {
      id: "boat",
      place: "Прогулка на лодке",
      city: "Свети-Стефан",
      tone: "bg-trip-ink text-white/80",
      frame:
        "md:left-[43%] md:top-[3.5vw] md:w-[clamp(150px,15vw,300px)] md:-rotate-[4deg] md:z-[8]",
      stamp: { price: "60€", unit: "лодка", tilt: "-rotate-[8deg]" },
    },
    {
      id: "beach",
      place: "Пляж на закате",
      city: "Херцег-Нови",
      tone: "bg-trip-sand text-trip-ink/70",
      frame:
        "md:left-[12.5%] md:top-[15vw] md:w-[clamp(160px,16vw,320px)] md:rotate-[4deg] md:z-[11]",
      stamp: { price: "40€", unit: "ночь", tilt: "rotate-6" },
    },
    {
      id: "mountains",
      place: "Горные тропы",
      city: "Дурмитор",
      tone: "bg-trip-cobalt text-white/80",
      frame:
        "md:left-[32.5%] md:top-[16vw] md:w-[clamp(160px,16vw,320px)] md:-rotate-[6deg] md:z-[12]",
      stamp: { price: "25€", unit: "тур", tilt: "-rotate-6" },
    },
  ],
  note: {
    greeting: "Привет из Черногории!",
    text: "Жильё, прогулки на лодке и туры по побережью. Бронирование напрямую, без посредников.",
    button: "Забронировать",
  },
  postmark: {
    ring: "BUDVA · JUNE · 2026 · BUDVA ·",
    date: "12.06",
  },
  band: {
    title: "Ваше место у моря. Вдали от суеты.",
    text: "Просыпайтесь под шум волн, наслаждайтесь завтраками с видом на Адриатику и встречайте закаты в атмосфере спокойствия и уединения. Прямое бронирование у владельцев — без посредников и лишних переплат.",
    button: "Выбрать жильё",
  },
  sections: {
    stays: { title: "Жильё у моря", link: "Все варианты" },
    tours: { title: "Туры и прогулки", cta: "Выбрать" },
  },
  stays: [
    {
      id: "seaside",
      title: "Апартаменты у моря",
      meta: "2 гостя · 1 спальня · Будва",
      price: "40€",
      unit: "ночь",
      tone: "bg-trip-cobalt text-white/80",
      tilt: "-rotate-2",
      offset: "",
    },
    {
      id: "old-town-house",
      title: "Дом в старом городе",
      meta: "4 гостя · 2 спальни · Котор",
      price: "65",
      unit: "ночь",
      tone: "bg-trip-accent text-white/80",
      tilt: "rotate-[1.5deg]",
      offset: "lg:mt-6",
    },
    {
      id: "villa",
      title: "Вилла с садом",
      meta: "6 гостей · 3 спальни · Улцинь",
      price: "120€",
      unit: "ночь",
      tone: "bg-trip-sage text-trip-ink/70",
      tilt: "-rotate-1",
      offset: "",
    },
  ],
  tours: [
    {
      id: "boat",
      title: "Морская прогулка",
      meta: "3 часа · до 8 гостей · закат",
      price: "60€",
    },
    {
      id: "coast",
      title: "Тур по побережью",
      meta: "Весь день · до 6 гостей · Будва, Котор, Пераст",
      price: "25€",
    },
  ],
};
