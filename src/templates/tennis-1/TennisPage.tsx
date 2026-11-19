import { tennisContent } from "./content";
import { TennisHeader } from "./components/TennisHeader";
import { HeroTitle } from "./components/HeroTitle";
import { Scoreboard } from "./components/Scoreboard";
import { Court3D } from "./components/Court3D";
import { ScoreNav } from "./components/ScoreNav";
import { Programs } from "./components/Programs";
import { Pricing } from "./components/Pricing";
import { About } from "./components/About";
import { Faq } from "./components/Faq";
import { Booking } from "./components/Booking";
import { TennisFooter } from "./components/TennisFooter";
import { useEffect } from "react";

export function TennisPage() {
  const c = tennisContent;
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = "en";
    return () => {
      document.documentElement.lang = previous;
    };
  }, []);

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
        <div className="relative mt-6">
          <Court3D />
          <div
            className="mt-4 animate-tn-fade md:absolute md:right-4 md:top-4 md:mt-0 motion-reduce:animate-none"
            style={{ animationDelay: "2.4s" }}
          >
            <Scoreboard
              court={c.scoreboard.court}
              role={c.scoreboard.role}
              rows={c.scoreboard.rows}
              cta={c.scoreboard.cta}
              startDelay={2500}
            />
          </div>
        </div>
        <ScoreNav items={c.nav} startDelay={3200} />
      </section>

      <Programs data={c.programs} />
      <Pricing data={c.pricing} />
      <About data={c.about} />
      <Faq data={c.faq} />
      <Booking data={c.booking} />
      <TennisFooter
        data={c.footer}
        titleLines={c.hero.titleLines}
        titleAccent={c.hero.titleAccent}
      />
    </div>
  );
}
