import { SiteHeader } from "@/components/home/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { RunningText } from "@/components/home/RunningText";
import { About } from "@/components/home/About";

import { Process } from "@/components/home/Process";
import { SiteFooter } from "@/components/home/SiteFooter";
import { Works } from "@/components/home/Works";
import { PhoneRow } from "@/components/pop/PhoneRow";

export function Catalog() {
  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <PhoneRow />
        <RunningText />
        <About />
        <Works />
        <Process />
      </main>
      <SiteFooter />
    </div>
  );
}
