import { contacts } from "@/lib/contacts";

const services = ["Сайты", "Лендинги", "Визитки", "Каталоги"];

export function Hero() {
  return (
    <section className="px-7 pb-16 pt-6 md:pt-10">
      <div className="relative">
        <h1 className="font-display text-[56px] font-semibold uppercase leading-[0.92] tracking-tight md:text-[88px]">
          <span className="block">Сайты</span>
          <span className="block">по вашим</span>
          <span className="block">меркам</span>
        </h1>

        <a
          href={contacts[0].href}
          target="_blank"
          rel="noreferrer"
          className="absolute right-4 top-24 -rotate-12 rounded-[50%] bg-accent px-5 py-2 font-display text-xs font-medium uppercase tracking-[0.08em] text-white md:right-12 md:top-20"
        >
          Написать ↗
        </a>
      </div>

      <ul className="font-narrow mt-12 font-serif text-[32px] leading-[0.98] tracking-tight md:text-[40px]">
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </section>
  );
}