import { SiteHeader } from "@/components/home/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { RunningText } from "@/components/home/RunningText";
import { About } from "@/components/home/About";
import { Process } from "@/components/home/Process";
import { SiteFooter } from "@/components/home/SiteFooter";

import { WorksShowcase } from "@/components/pop/WorksShowcase";
import { WorksGrid } from "@/components/pop/WorksGrid";

export function Catalog() {
  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <WorksShowcase />
        <RunningText />
        <About />
        <WorksGrid />
        <Process />
      </main>
      <SiteFooter />
    </div>
  );
}
