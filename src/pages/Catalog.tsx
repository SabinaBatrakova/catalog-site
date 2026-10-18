import { SiteHeader } from "@/components/home/SiteHeader";
import { Hero } from "@/components/home/Hero";

export function Catalog() {
  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <Hero />
      </main>
    </div>
  );
}
