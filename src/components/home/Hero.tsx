import { contacts } from "@/lib/contacts";

const services = ["Лендинги", "Визитки", "Каталоги"];

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

      <div className="mt-12 flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <ul className="font-narrow font-serif text-[32px] leading-[0.98] tracking-tight md:text-[40px]">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>

        <div className="relative ml-14 w-[230px] md:ml-0 md:mr-10">
          <a
            href="#works"
            aria-label="К работам"
            className="absolute -left-14 top-0 z-10 h-[92px] w-[92px]"
          >
            <svg
              viewBox="0 0 92 92"
              aria-hidden="true"
              className="h-full w-full animate-[spin_14s_linear_infinite]"
            >
              <defs>
                <path
                  id="works-circle"
                  d="M46,46 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"
                />
              </defs>
              <text
                className="fill-ink font-display"
                fontSize="11"
                letterSpacing="2.6"
              >
                <textPath href="#works-circle">
                  РАБОТЫ · РАБОТЫ · РАБОТЫ ·
                </textPath>
              </text>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg">
              ↓
            </span>
          </a>

          <div className="mt-6 rotate-3 border-[1.5px] border-ink bg-paper p-2 pb-7">
            <div className="relative h-[132px] w-full overflow-hidden">
              <iframe
                src="/templates/beauty-1"
                title="Превью работы"
                scrolling="no"
                className="pointer-events-none absolute left-0 top-0 h-[800px] w-[1280px] origin-top-left scale-[0.165]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
