import type { Lang } from "@/lib/lang";
import {
  rentalContent,
  type Note,
  type RentalContent,
} from "@/templates/rental-1/content";

// Переводятся только тексты. Фото, позиции, цены и наклоны берутся из content.ts (русский файл).
type RentalTexts = {
  brand: string;
  wordmark: string;
  nav: RentalContent["nav"];
  note: Note;
  band: RentalContent["band"];
  sections: RentalContent["sections"];
  // Ключ = id открытки/жилья/тура из content.ts
  postcards: Record<string, { place: string; city: string; stampUnit?: string }>;
  stays: Record<string, { title: string; meta: string; unit: string }>;
  tours: Record<string, { title: string; meta: string }>;
};

const en: RentalTexts = {
  brand: "Montenegro Stay",
  wordmark: "Montenegro",
  nav: { stays: "Stays", tours: "Tours", about: "About", book: "Book now" },
  note: {
    greeting: "Greetings from Montenegro!",
    text: "Stays, boat trips and coastal tours. Book direct, no middlemen.",
    button: "Book now",
  },
  band: {
    title: "Your place by the sea. Far from the bustle.",
    text: "Wake up to the sound of waves, enjoy breakfasts overlooking the Adriatic and watch sunsets in an atmosphere of calm and privacy. Book directly with owners, with no middlemen and no extra fees.",
    button: "Choose a stay",
  },
  sections: {
    stays: { title: "Stays by the sea", link: "All options" },
    tours: { title: "Tours and trips", cta: "Choose" },
  },
  postcards: {
    boka: { place: "Bay of Kotor", city: "Kotor" },
    "old-town": { place: "Old town", city: "Perast" },
    boat: { place: "Boat trip", city: "Skadar Lake", stampUnit: "boat" },
    beach: { place: "Sea day", city: "Kamenovo", stampUnit: "night" },
    mountains: {
      place: "Mountain trails",
      city: "Morača River Canyon",
      stampUnit: "tour",
    },
  },
  stays: {
    seaside: {
      title: "Seaside apartment",
      meta: "2 guests · 1 bedroom · Budva",
      unit: "night",
    },
    "old-town-house": {
      title: "House in the old town",
      meta: "4 guests · 2 bedrooms · Kotor",
      unit: "night",
    },
    villa: {
      title: "Villa with a garden",
      meta: "6 guests · 3 bedrooms · Ulcinj",
      unit: "night",
    },
  },
  tours: {
    boat: {
      title: "Sea cruise",
      meta: "3 hours · whole boat up to 8 guests · sunset",
    },
    coast: {
      title: "Coastal tour",
      meta: "Full day · price per guest · Budva, Kotor, Perast",
    },
  },
};

const sr: RentalTexts = {
  brand: "Crna Gora Stay",
  wordmark: "Crna Gora",
  nav: { stays: "Smještaj", tours: "Ture", about: "O nama", book: "Rezerviši" },
  note: {
    greeting: "Pozdrav iz Crne Gore!",
    text: "Smještaj, vožnje brodom i ture po primorju. Rezervacija direktno, bez posrednika.",
    button: "Rezerviši",
  },
  band: {
    title: "Vaše mjesto uz more. Daleko od gužve.",
    text: "Budite se uz šum talasa, uživajte u doručku s pogledom na Jadran i dočekujte zalaske sunca u miru i privatnosti. Direktna rezervacija kod vlasnika, bez posrednika i skrivenih troškova.",
    button: "Izaberi smještaj",
  },
  sections: {
    stays: { title: "Smještaj uz more", link: "Sve opcije" },
    tours: { title: "Ture i izleti", cta: "Izaberi" },
  },
  postcards: {
    boka: { place: "Boka Kotorska", city: "Kotor" },
    "old-town": { place: "Stari grad", city: "Perast" },
    boat: { place: "Vožnja brodom", city: "Skadarsko jezero", stampUnit: "brod" },
    beach: { place: "Dan na moru", city: "Kamenovo", stampUnit: "noć" },
    mountains: {
      place: "Planinske staze",
      city: "Kanjon Morače",
      stampUnit: "tura",
    },
  },
  stays: {
    seaside: {
      title: "Apartman uz more",
      meta: "2 gosta · 1 spavaća soba · Budva",
      unit: "noć",
    },
    "old-town-house": {
      title: "Kuća u starom gradu",
      meta: "4 gosta · 2 spavaće sobe · Kotor",
      unit: "noć",
    },
    villa: {
      title: "Vila s vrtom",
      meta: "6 gostiju · 3 spavaće sobe · Ulcinj",
      unit: "noć",
    },
  },
  tours: {
    boat: {
      title: "Krstarenje morem",
      meta: "3 sata · cio brod do 8 gostiju · zalazak sunca",
    },
    coast: {
      title: "Tura po primorju",
      meta: "Cio dan · cijena po gostu · Budva, Kotor, Perast",
    },
  },
};

// Собираем контент для выбранного языка: русский берём как есть,
// для en/sr накладываем тексты поверх (всё, чего нет в переводе, остаётся русским).
function applyTexts(base: RentalContent, t: RentalTexts): RentalContent {
  return {
    ...base,
    brand: t.brand,
    wordmark: t.wordmark,
    nav: t.nav,
    note: t.note,
    band: t.band,
    sections: t.sections,
    postcards: base.postcards.map((card) => {
      const tr = t.postcards[card.id];
      if (!tr) return card;
      return {
        ...card,
        place: tr.place,
        city: tr.city,
        stamp:
          card.stamp && tr.stampUnit
            ? { ...card.stamp, unit: tr.stampUnit }
            : card.stamp,
      };
    }),
    stays: base.stays.map((stay) => {
      const tr = t.stays[stay.id];
      return tr ? { ...stay, ...tr } : stay;
    }),
    tours: base.tours.map((tour) => {
      const tr = t.tours[tour.id];
      return tr ? { ...tour, ...tr } : tour;
    }),
  };
}

const byLang: Record<Lang, RentalContent> = {
  ru: rentalContent,
  en: applyTexts(rentalContent, en),
  sr: applyTexts(rentalContent, sr),
};

export function getRentalContent(lang: Lang): RentalContent {
  return byLang[lang];
}
