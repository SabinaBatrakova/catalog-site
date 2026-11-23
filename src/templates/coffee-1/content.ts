export type MenuItem = {
  name: string;
  note: string;
  price: string;
};

export type Bean = {
  id: string;
  name: string;
  notes: string;
  price: number;
};

export type Stat = {
  value: string;
  label: string;
};

export type InfoRow = {
  label: string;
  value: string;
};

export type TrustIcon = "roast" | "delivery" | "payment" | "classes";

export type TrustItem = {
  icon: TrustIcon;
  title: string;
  text: string;
};

export type SectionHead = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
};

export type CoffeeContent = {
  brand: {
    name: string;
    tagline: string;
    wordmark: string;
  };
  nav: { label: string; href: string }[];
  scene: {
    desktopFrames: number;
    mobileFrames: number;
    desktopPath: string;
    mobilePath: string;
    stages: string[];
  };
  hero: SectionHead & {
    text: string;
    ctaLabel: string;
    ctaHref: string;
  };
  menu: SectionHead & {
    items: MenuItem[];
  };
  beans: SectionHead & {
    buyLabel: string;
    addedLabel: string;
    items: Bean[];
  };
  story: SectionHead & {
    text: string;
    stats: Stat[];
  };
  classes: SectionHead & {
    items: MenuItem[];
    ctaLabel: string;
    ctaHref: string;
  };
  visit: SectionHead & {
    rows: InfoRow[];
    ctaLabel: string;
    ctaHref: string;
  };
  final: SectionHead & {
    text: string;
    ctaLabel: string;
    ctaHref: string;
  };
  trust: TrustItem[];
  cart: {
    title: string;
    empty: string;
    total: string;
    checkout: string;
    demoNote: string;
    close: string;
  };
  footer: {
    left: string;
    credit: string;
  };
};

export const coffeeContent: CoffeeContent = {
  brand: {
    name: "Vela",
    tagline: "Coffee roasters · Kotor",
    wordmark: "VELA",
  },
  nav: [
    { label: "Menu", href: "#menu" },
    { label: "Our beans", href: "#beans" },
    { label: "Story", href: "#story" },
    { label: "Classes", href: "#classes" },
    { label: "Visit", href: "#visit" },
  ],
  scene: {
    desktopFrames: 121,
    mobileFrames: 61,
    desktopPath: "/coffee/desktop/",
    mobilePath: "/coffee/mobile/",
    stages: ["Beans", "Grind", "Espresso", "Your cup"],
  },
  hero: {
    id: "top",
    eyebrow: "Specialty coffee · Old Town Kotor",
    title: "From bean",
    accent: "to your cup",
    text: "Small-batch coffee roasted every week inside the old walls of Kotor. Scroll down and watch your espresso being made.",
    ctaLabel: "See the menu",
    ctaHref: "#menu",
  },
  menu: {
    id: "menu",
    eyebrow: "01 · Menu",
    title: "Espresso",
    accent: "bar",
    items: [
      { name: "Espresso", note: "Our house blend, 30 ml", price: "€1.80" },
      { name: "Flat white", note: "Double shot, silky milk", price: "€2.80" },
      { name: "Cappuccino", note: "Classic Italian style", price: "€2.60" },
      { name: "V60 filter", note: "Single origin of the week", price: "€3.50" },
      { name: "Cold brew", note: "Steeped for 18 hours", price: "€3.80" },
    ],
  },
  beans: {
    id: "beans",
    eyebrow: "02 · Our beans",
    title: "Roasted",
    accent: "this week",
    buyLabel: "Buy 250 g",
    addedLabel: "Added ✓",
    items: [
      {
        id: "ethiopia",
        name: "Ethiopia Yirgacheffe",
        notes: "Jasmine, berries · light roast",
        price: 14,
      },
      {
        id: "colombia",
        name: "Colombia Huila",
        notes: "Caramel, cocoa · medium roast",
        price: 12,
      },
      {
        id: "brazil",
        name: "Brazil Cerrado",
        notes: "Hazelnut, soft · medium-dark",
        price: 11,
      },
    ],
  },
  story: {
    id: "story",
    eyebrow: "03 · Our story",
    title: "Named after",
    accent: "the sails",
    text: "Vela means “sail” in Montenegrin. For centuries coffee came to Kotor by sea, under sail. We started roasting in 2019 in a tiny stone workshop near the Sea Gate.",
    stats: [
      { value: "12", label: "origins a year" },
      { value: "48h", label: "roast to cup" },
      { value: "2019", label: "since" },
    ],
  },
  classes: {
    id: "classes",
    eyebrow: "04 · Barista classes",
    title: "Learn to pour",
    accent: "like us",
    items: [
      { name: "Espresso basics", note: "2 hours · Saturdays", price: "€45" },
      { name: "Latte art", note: "3 hours · Sundays", price: "€60" },
    ],
    ctaLabel: "Book a seat",
    ctaHref: "#visit",
  },
  visit: {
    id: "visit",
    eyebrow: "05 · Visit us",
    title: "Old Town,",
    accent: "Kotor",
    rows: [
      { label: "Address", value: "Trg od oružja, Kotor" },
      { label: "Every day", value: "8:00 – 20:00" },
      { label: "Instagram", value: "@vela.coffee" },
    ],
    ctaLabel: "Get directions",
    ctaHref: "https://maps.google.com/?q=Trg+od+oruzja+Kotor",
  },
  final: {
    id: "final",
    eyebrow: "Your cup is ready",
    title: "See you",
    accent: "in Kotor",
    text: "Freshly pulled, golden crema on top. Come and taste it by the old city walls.",
    ctaLabel: "Back to top",
    ctaHref: "#top",
  },
  trust: [
    {
      icon: "roast",
      title: "Fresh roast",
      text: "Roasted every Tuesday in Kotor",
    },
    {
      icon: "delivery",
      title: "Delivery",
      text: "Across Montenegro in 1–2 days",
    },
    {
      icon: "payment",
      title: "Secure payment",
      text: "Cards, Apple Pay, Google Pay",
    },
    {
      icon: "classes",
      title: "Barista classes",
      text: "Every weekend, small groups",
    },
  ],
  cart: {
    title: "Your cart",
    empty: "Your cart is empty. Try our beans roasted this week.",
    total: "Total",
    checkout: "Checkout",
    demoNote: "This is a demo template — no real payment is made.",
    close: "Close cart",
  },
  footer: {
    left: "Vela Coffee Roasters · Kotor, Montenegro",
    credit: "Video and images created with AI (Kling AI)",
  },
};