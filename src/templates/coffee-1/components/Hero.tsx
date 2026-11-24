import type { CoffeeContent } from "../content";
import { Title } from "./Title";

type HeroProps = {
  data: CoffeeContent["hero"];
};

export function Hero({ data }: HeroProps) {
  return (
    <section
      id={data.id}
      className="flex min-h-svh items-end px-5 pb-10 pt-24 min-[820px]:px-12 min-[820px]:pb-12"
    >
      <div className="w-full rounded-3xl border border-white/60 bg-coffee-foam/75 p-5 shadow-[0_8px_30px_rgba(74,44,29,0.08)] backdrop-blur-xl min-[820px]:w-[min(480px,36vw)] min-[820px]:p-8">
        <p className="text-[11px] uppercase tracking-[0.24em] text-coffee-crema min-[820px]:text-xs">
          {data.eyebrow}
        </p>
        <Title
          as="h1"
          title={data.title}
          accent={data.accent}
          className="mt-3 text-[32px] min-[820px]:mt-4 min-[820px]:text-[clamp(30px,3vw,46px)]"
        />
        <p className="mt-4 leading-relaxed text-coffee-muted">{data.text}</p>
        <a
          href={data.ctaHref}
          className="mt-6 inline-block rounded-full bg-coffee-espresso px-6 py-3 text-[15px] text-white transition-colors hover:bg-coffee-ink"
        >
          {data.ctaLabel}
        </a>
      </div>
    </section>
  );
}