export type RentalContent = {
  brand: string;
  wordmark: string;
  nav: {
    stays: string;
    tours: string;
    about: string;
    book: string;
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
};