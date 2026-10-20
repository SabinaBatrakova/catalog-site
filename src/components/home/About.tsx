import { Reveal } from "@/components/home/Reveal";
import { WordsReveal } from "@/components/home/WordsReveal";

const photo = {
  src: "/public/sabina-catalog-site.webp",
  alt: "Сабина, веб-разработчик",
  caption: "",
};

export function About() {
  return (
    <section id="about" className="scroll-mt-16 px-7 py-24 md:py-32">
      <Reveal>
        <p className="font-display text-xs font-medium uppercase tracking-[0.08em]">
          Обо мне
        </p>
      </Reveal>

      <div className="mt-8 md:mt-6 md:flex">
        <div className="mb-12 md:mb-0 md:w-[36%] md:shrink-0">
          <Reveal>
            <div className="relative ml-4 w-[170px] -rotate-3 border border-dashed border-steel bg-paper p-2 pb-10 transition-transform duration-500 ease-out motion-safe:hover:-translate-y-2 motion-safe:hover:rotate-[2deg] md:w-[240px]">
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex aspect-square w-full items-center justify-center bg-line font-display text-[11px] font-medium uppercase tracking-[0.08em] text-muted"
                >
                  Фото
                </div>
              )}

              {photo.caption && (
                <p className="absolute inset-x-2 bottom-1.5 text-center font-hand text-[22px] font-medium leading-none">
                  {photo.caption}
                </p>
              )}
            </div>
          </Reveal>
        </div>

        <div className="max-w-[520px]">
          <Reveal>
            <h2 className="font-serif text-[30px] leading-[1.08] tracking-tight md:text-[38px]">
              Создаю сайты, в которых идея встречается с системой
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-8">
            <p className="font-hand text-[44px] font-medium leading-none">
              Привет!
            </p>
          </Reveal>

          <div className="mt-4 space-y-4 font-serif text-[15px] leading-[1.65]">
            <Reveal delay={200}>
              <p>
                Я занимаюсь созданием сайтов, сочетая инженерный подход,
                визуальное мышление и современные инструменты разработки.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p>
                Для меня сайт — это не просто красивая страница, а способ
                рассказать о вашем деле, донести его ценность и привлечь
                внимание нужной аудитории.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <p>
                Я помогаю превращать идеи в цифровые решения, уделяя внимание
                структуре, эстетике и функциональности. В работе использую
                современные AI-инструменты, чтобы эффективнее проходить путь от
                идеи до реализации.
              </p>
            </Reveal>
            <Reveal delay={380}>
              <p>Каждый проект начинается с вашей идеи.</p>
            </Reveal>
          </div>

          <div className="mt-8">
            <WordsReveal
              text="Моя задача — найти для неё подходящую форму."
              className="font-hand text-[34px] font-medium leading-[1.05] md:text-[38px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
