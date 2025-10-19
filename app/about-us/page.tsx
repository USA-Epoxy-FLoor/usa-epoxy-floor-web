import { HeroSection } from "@/features/about-us/hero-section";
import { Mission } from "@/features/about-us/mission";
import { ServiceArea } from "@/features/about-us/service-area";
import { Contact } from "@/features/about-us/contact";

export default function AboutUsPage() {
  return (
    <main className="flex flex-col space-y-12 bg-gradient-to-b from-orange-50 to-white dark:from-gray-950 dark:to-gray-950/90">
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
  );
}
