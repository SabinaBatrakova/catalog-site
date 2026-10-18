import { SiteHeader } from "@/components/home/SiteHeader";

export function Catalog() {
  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <section className="px-7 py-24">
          <p>Здесь будет заголовок</p>
        </section>
      </main>
    </div>
  );
}