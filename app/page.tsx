import { Contact } from "@/features/contact/contact";
import { HeroSection } from "@/features/home/hero-section/hero-section";
import { Services } from "@/features/home/services";
import { Testimonials } from "@/features/home/testimonials";
import { LocalBusinessJsonLd } from "@/features/structured-data";
import { StockImages } from "@/features/stock-images";
import { Features } from "@/features/home/features";
import { ServiceArea } from "@/features/home/service-areas";

export default function Home() {
  return (
    <main className="flex flex-col space-y-12 bg-gradient-to-b from-orange-50 to-white dark:from-gray-950 dark:to-gray-950/90">
      <LocalBusinessJsonLd />
      <HeroSection />
      <Features />
      <StockImages />

      <Services />
      <ServiceArea />
      <Testimonials />
      <Contact />
    </main>
  );
}
