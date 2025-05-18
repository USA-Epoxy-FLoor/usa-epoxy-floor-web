import { Header } from "@/features/header/header";
import { Contact } from "@/features/contact/contact";
import { Footer } from "@/features/home/footer";
import { HeroSection } from "@/features/home/hero-section";
import { Services } from "@/features/home/services";
import { Testimonials } from "@/features/home/testimonials";
import { LocalBusinessJsonLd } from "@/features/structured-data";
import { StockImages } from "@/features/stock-images";
import { Features } from "@/features/home/features";
import { ServiceArea } from "@/features/home/service-areas";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LocalBusinessJsonLd />

      <Header />
      <main>
        <HeroSection />
        <Features />
        <StockImages />

        <Services />
        <ServiceArea />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
