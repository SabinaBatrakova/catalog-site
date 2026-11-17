import { tennisContent } from "./content";

export function TennisPage() {
  const c = tennisContent;

  return (
    <div className="min-h-screen bg-white font-inter text-tn-green">
      {/* Hero: header + title + court + scoreboard + score nav */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-shoulders text-2xl font-black">
          {c.logo}
          <span className="text-tn-clay">.</span>
        </p>
        <h1 className="mt-6 font-shoulders text-7xl font-black uppercase leading-[0.86]">
          {c.hero.titleLines.join(" ")}{" "}
          <span className="text-tn-clay">{c.hero.titleAccent}</span>
        </h1>
      </section>

      <section id="programs" className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-shoulders text-5xl font-black text-tn-clay">{c.programs.score}</p>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-shoulders text-5xl font-black text-tn-clay">{c.pricing.score}</p>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-shoulders text-5xl font-black text-tn-clay">{c.about.score}</p>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-10">
        <p className="font-shoulders text-5xl font-black text-tn-clay">{c.faq.score}</p>
      </section>

      <section id="book" className="bg-tn-clay px-6 py-10 text-white">
        <p className="mx-auto max-w-6xl font-shoulders text-5xl font-black text-tn-lime">
          {c.booking.score}
        </p>
      </section>
    </div>
  );
}