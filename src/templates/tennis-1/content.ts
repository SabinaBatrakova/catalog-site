// ---------- Types ----------

export type ScoreRow = {
  label: string;
  value: string;
  highlight?: boolean;
};

export type NavItem = {
  score: string;
  label: string;
  href: string;
  isCta?: boolean;
};

export type Program = {
  id: string;
  no: string;
  tag: string;
  title: string;
  text: string;
  meta: string[];
  priceFrom: number;
};

export type Step = {
  id: string;
  title: string;
  text: string;
};

export type PriceRow = {
  id: string;
  name: string;
  note: string;
  minutes: string;
  price: number;
  highlight?: boolean;
  badge?: string;
};

export type Fact = {
  label: string;
  value: string;
};

export type Review = {
  id: string;
  score: string[];
  text: string;
  name: string;
  role: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export type BookingDay = {
  id: string;
  weekday: string;
  date: string;
};

export type Section = {
  score: string;
  label: string;
  title: string;
};

export type TennisContent = {
  logo: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    titleAccent: string;
    text: string;
  };
  scoreboard: {
    court: string;
    role: string;
    rows: ScoreRow[];
    cta: string;
  };
  nav: NavItem[];
  programs: Section & { items: Program[]; steps: Step[] };
  pricing: Section & { rows: PriceRow[]; note: string };
  about: Section & {
    quoteStart: string;
    quoteAccent: string;
    quoteEnd: string;
    bio: string;
    facts: Fact[];
    reviews: Review[];
  };
  faq: Section & { intro: string; items: Faq[] };
  booking: Section & {
    days: BookingDay[];
    times: string[];
    busy: string[];
    namePlaceholder: string;
    phonePlaceholder: string;
    button: string;
    successTitle: string;
  };
  footer: {
    contact: string[];
    courts: string[];
    follow: string[];
  };
};

// ---------- Content ----------

export const tennisContent: TennisContent = {
  logo: "MP",

  hero: {
    eyebrow: "Marko Petrović · Tennis coach · Montenegro",
    titleLines: ["Game.", "Set."],
    titleAccent: "Yours.",
    text: "Private and group lessons on clay for kids and adults. From your first rally to your first tournament.",
  },

  scoreboard: {
    court: "Court 1",
    role: "Coach",
    rows: [
      { label: "Player", value: "MARKO PETROVIĆ" },
      { label: "Experience · Students", value: "15 YRS 300+" },
      { label: "Next free slot", value: "TUE 10:00", highlight: true },
    ],
    cta: "Book this slot",
  },

  nav: [
    { score: "15", label: "Programs", href: "#programs" },
    { score: "30", label: "Pricing", href: "#pricing" },
    { score: "40", label: "About", href: "#about" },
    { score: "Game", label: "Book a trial →", href: "#book", isCta: true },
  ],

  programs: {
    score: "15",
    label: "Programs",
    title: "Three ways onto the court",
    items: [
      {
        id: "juniors",
        no: "01",
        tag: "Ages 5–12",
        title: "Juniors",
        text: "Footwork, coordination and fun. Kids learn real strokes through games.",
        meta: ["2× a week · groups of 4", "Clay court · balls included"],
        priceFrom: 18,
      },
      {
        id: "adults",
        no: "02",
        tag: "Adults",
        title: "From zero",
        text: "Never held a racket? In 8 weeks you will rally and play your first set.",
        meta: ["1–2× a week · private or split", "Morning and evening slots"],
        priceFrom: 30,
      },
      {
        id: "competitive",
        no: "03",
        tag: "Ages 12+",
        title: "Competitive",
        text: "Tournament prep, match tactics and mental game for ranked players.",
        meta: ["3–5× a week · private", "Video analysis · tournament travel"],
        priceFrom: 45,
      },
    ],
    steps: [
      { id: "s1", title: "1st serve", text: "Free 30-min assessment on court" },
      { id: "s2", title: "2nd serve", text: "Your personal plan and goals" },
      { id: "s3", title: "Rally", text: "Weekly training, progress video" },
      {
        id: "s4",
        title: "Match",
        text: "Your first set, league or tournament",
      },
    ],
  },

  pricing: {
    score: "30",
    label: "Pricing",
    title: "Straight on the scoreboard",
    rows: [
      {
        id: "private",
        name: "Private",
        note: "1 player, full focus",
        minutes: "60",
        price: 45,
      },
      {
        id: "split",
        name: "Split",
        note: "2 players, shared court",
        minutes: "60",
        price: 30,
      },
      {
        id: "group",
        name: "Group",
        note: "3–4 players, same level",
        minutes: "60",
        price: 18,
      },
      {
        id: "pack",
        name: "10-pack",
        note: "10 private lessons, 3 months",
        minutes: "10×60",
        price: 400,
        highlight: true,
        badge: "Save €50",
      },
    ],
    note: "Court rental and balls included. Racket on request. Demo prices.",
  },

  about: {
    score: "40",
    label: "About",
    title: "Meet your coach",
    quoteStart: "“I teach ",
    quoteAccent: "players",
    quoteEnd: ", not just strokes.”",
    bio: "Marko has spent 15 years on clay: first as a junior player, then as a coach for kids, adults and ranked juniors. His lessons mix solid technique with match thinking, so you learn not only how to hit, but how to win points.",
    facts: [
      { label: "Certification", value: "ITF Level 2 · PTR" },
      { label: "Experience", value: "15 years" },
      { label: "Students trained", value: "300+" },
      { label: "Surface", value: "Clay · Hard" },
      { label: "Languages", value: "EN · SR · RU · IT" },
    ],
    reviews: [
      {
        id: "ana",
        score: ["6–4", "6–3"],
        text: "Zero to club league in eight months. He makes hard things simple.",
        name: "Ana, 34",
        role: "Adult beginner",
      },
      {
        id: "milica",
        score: ["7–5", "6–2"],
        text: "My son finally loves training. Won his first junior event in spring.",
        name: "Milica",
        role: "Parent, junior player",
      },
      {
        id: "luka",
        score: ["6–1", "6–4"],
        text: "Tactics changed my game. I stopped losing the long rallies.",
        name: "Luka, 16",
        role: "Competitive",
      },
    ],
  },

  faq: {
    score: "Let",
    label: "FAQ",
    title: "Ask again, no penalty",
    intro:
      "In tennis, a “let” means the serve is replayed. Same here: any question is welcome.",
    items: [
      {
        id: "racket",
        question: "Do I need my own racket?",
        answer:
          "No. For the first lessons Marko brings rackets for all ages. Later he will help you choose your own.",
      },
      {
        id: "age",
        question: "From what age can kids start?",
        answer:
          "From 5 years. Younger kids train with softer, slower balls on a smaller court.",
      },
      {
        id: "rain",
        question: "What if it rains?",
        answer:
          "The lesson moves to another day at no cost, or to an indoor court when available.",
      },
      {
        id: "cancel",
        question: "How do I cancel a lesson?",
        answer:
          "Free cancellation up to 24 hours before the lesson. Later cancellations are charged in full.",
      },
    ],
  },

  booking: {
    score: "Game",
    label: "Book a trial",
    title: "Pick your slot",
    days: [
      { id: "mon", weekday: "Mon", date: "17" },
      { id: "tue", weekday: "Tue", date: "18" },
      { id: "wed", weekday: "Wed", date: "19" },
      { id: "thu", weekday: "Thu", date: "20" },
      { id: "fri", weekday: "Fri", date: "21" },
      { id: "sat", weekday: "Sat", date: "22" },
    ],
    times: ["08:00", "10:00", "12:00", "16:00", "18:00", "19:30"],
    busy: [
      "mon-10:00",
      "mon-16:00",
      "tue-08:00",
      "tue-18:00",
      "wed-12:00",
      "thu-10:00",
      "fri-08:00",
      "sat-16:00",
    ],
    namePlaceholder: "Your name",
    phonePlaceholder: "WhatsApp or phone",
    button: "Book this slot",
    successTitle: "Game, set, yours.",
  },

  footer: {
    contact: ["WhatsApp +382 00 000 000", "hello@marko.tennis"],
    courts: ["Clay courts, Montenegro", "Mon–Sat · 8:00–20:00"],
    follow: ["Instagram", "YouTube"],
  },
};
