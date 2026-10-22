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
  postmark: {
    ring: string;
    date: string;
  };
  band: {
    label: string;
    button: string;
  };
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
      frame: "md:left-[2%] md:top-[150px] md:w-[176px] md:-rotate-6",
    },
    {
      id: "old-town",
      place: "Старый город",
      city: "Будва",
      tone: "bg-trip-accent text-white/80",
      frame: "md:left-[19%] md:top-[110px] md:w-[206px] md:rotate-[4deg] md:z-[6]",
    },
    {
      id: "boat",
      place: "Прогулка на лодке",
      city: "Свети-Стефан",
      tone: "bg-trip-ink text-white/80",
      frame: "md:left-[41%] md:top-[160px] md:w-[192px] md:-rotate-3 md:z-[7]",
      stamp: { price: "60€", unit: "лодка", tilt: "-rotate-[8deg]" },
    },
    {
      id: "pool",
      place: "Бассейн и сад",
      city: "Улцинь",
      tone: "bg-trip-sage text-trip-ink/70",
      frame: "md:right-[2%] md:top-[120px] md:w-[150px] md:rotate-[7deg]",
    },
    {
      id: "beach",
      place: "Пляж на закате",
      city: "Херцег-Нови",
      tone: "bg-trip-sand text-trip-ink/70",
      frame: "md:left-[8%] md:top-[330px] md:w-[226px] md:rotate-3 md:z-[8]",
      stamp: { price: "40€", unit: "ночь", tilt: "rotate-6" },
    },
    {
      id: "mountains",
      place: "Горные тропы",
      city: "Дурмитор",
      tone: "bg-trip-cobalt text-white/80",
      frame: "md:left-[40%] md:top-[350px] md:w-[212px] md:-rotate-[5deg] md:z-[9]",
      stamp: { price: "25€", unit: "тур", tilt: "-rotate-6" },
    },
  ],
  postmark: {
    ring: "BUDVA · JUNE · 2026 · BUDVA ·",
    date: "12.06",
  },
  band: {
    label: "Выбери открытку",
    button: "Открыть место →",
  },
};