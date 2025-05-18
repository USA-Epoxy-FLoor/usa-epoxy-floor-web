import { Header } from "@/features/header/header";
import { Footer } from "@/features/home/footer";
import { HeroSection } from "@/features/about-us/hero-section";
import { Mission } from "@/features/about-us/mission";
import { ServiceArea } from "@/features/about-us/service-area";
import { Contact } from "@/features/about-us/contact";

export default function AboutUsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <Mission />
        <ServiceArea />
        <Contact
          title="Ready to Get Started?"
          content="Contact us today for a free consultation and quote for your epoxy
              flooring project."
          primaryAction="Request a Quote"
          secondaryAction="View Our Gallery"
        />
      </main>

      <Footer />
    </div>
  );
}
