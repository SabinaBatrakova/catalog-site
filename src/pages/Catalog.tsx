import { SiteHeader } from "@/components/home/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { RunningText } from "@/components/home/RunningText";
import { About } from "@/components/home/About";
import { WorksCarousel } from "@/components/home/WorksCarousel";
import { SiteFooter } from "@/components/home/SiteFooter";

export function Catalog() {
  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <RunningText />
        <About />
        <WorksCarousel />
      </main>
      <SiteFooter />
    </div>
  );
}
