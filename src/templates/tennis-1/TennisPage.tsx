import { tennisContent } from "./content";
import { TennisHeader } from "./components/TennisHeader";
import { HeroTitle } from "./components/HeroTitle";

export function TennisPage() {
  const c = tennisContent;

  return (
    <div className="min-h-screen bg-white font-inter text-tn-green">
      {/* Hero: header + title + court + scoreboard + score nav */}
      <section id="top" className="mx-auto max-w-6xl px-6 py-6">
        <TennisHeader logo={c.logo} />
        <HeroTitle
          eyebrow={c.hero.eyebrow}
          titleLines={c.hero.titleLines}
          titleAccent={c.hero.titleAccent}
          text={c.hero.text}
        />
      </section>

      <section id="programs" className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-shoulders text-5xl font-black text-tn-clay">
          {c.programs.score}
        </p>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-shoulders text-5xl font-black text-tn-clay">
          {c.pricing.score}
        </p>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-shoulders text-5xl font-black text-tn-clay">
          {c.about.score}
        </p>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-shoulders text-5xl font-black text-tn-clay">
          {c.faq.score}
        </p>
      </section>

      <section id="book" className="bg-tn-clay px-6 py-10 text-white">
        <p className="mx-auto max-w-6xl font-shoulders text-5xl font-black text-tn-lime">
          {c.booking.score}
        </p>
      </section>
    </div>
  );
}
