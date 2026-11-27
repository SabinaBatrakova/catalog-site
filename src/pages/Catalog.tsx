import { SiteHeader } from "@/components/home/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { RunningText } from "@/components/home/RunningText";
import { About } from "@/components/home/About";
import { Process } from "@/components/home/Process";
import { SiteFooter } from "@/components/home/SiteFooter";

import { WorksShowcase } from "@/components/pop/WorksShowcase";
import { WorksGrid } from "@/components/pop/WorksGrid";
import { ServiceShowcase } from "@/components/pop/ServiceShowcase";
import { availableServices } from "@/lib/services";

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
        {availableServices.map((service) => (
          <ServiceShowcase
            key={service.id}
            service={service}
            button="Хочу витрину"
          />
        ))}
        <Process />
      </main>
      <SiteFooter />
    </div>
  );
}
