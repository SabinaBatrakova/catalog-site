import { Reveal } from "@/components/home/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 px-7 py-24 md:py-32">
      <Reveal>
        <p className="font-display text-xs font-medium uppercase tracking-[0.08em]">
          Обо мне
        </p>
      </Reveal>

      <div className="mt-6 max-w-[520px] md:ml-[36%]">
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

        <div className="mt-4 space-y-4 font-serif text-[17px] leading-[1.65]">
          <Reveal delay={200}>
            <p>
              Я занимаюсь созданием сайтов, сочетая инженерный подход,
              визуальное мышление и современные инструменты разработки.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p>
              Для меня сайт — это не просто красивая страница, а способ
              рассказать о вашем деле, донести его ценность и привлечь внимание
              нужной аудитории.
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

        <Reveal delay={440} className="mt-6">
          <p className="font-hand text-[34px] font-medium leading-[1.05] md:text-[38px]">
            Моя задача — найти для неё подходящую форму.
          </p>
        </Reveal>
      </div>
    </section>
  );
}