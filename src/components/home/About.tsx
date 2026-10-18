import { Reveal } from "@/components/home/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 px-7 py-24 md:py-32">
      <Reveal>
        <p className="font-display text-xs font-medium uppercase tracking-[0.08em]">
          Обо мне
        </p>
      </Reveal>

      <div className="mt-6 font-hand text-[32px] font-medium leading-[1.05] md:ml-[42%] md:text-[38px]">
        <Reveal>
          <p>
            Привет, я Сабина. Делаю сайты и лендинги для малого бизнеса:
            салонов, школ, туристических и арендных проектов.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-3">
          <p>Беру проверенный шаблон и подгоняю под ваше дело.</p>
        </Reveal>
        <Reveal delay={240} className="mt-3">
          <p>Готовый сайт вы получаете за 1–3 дня.</p>
        </Reveal>
      </div>
    </section>
  );
}