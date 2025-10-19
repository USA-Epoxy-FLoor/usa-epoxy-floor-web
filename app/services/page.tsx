import { Contact } from "@/features/about-us/contact";

import { ServicesHero } from "@/features/services/services-hero";
import ParticleBackground from "@/components/ui/particle-background";
import { Commitment } from "@/features/services/commitment";
import { Services } from "@/features/services/services";
import { Process } from "@/features/services/process";

export default function ServicesPage() {
  return (
    <main className="flex flex-col space-y-12 relative bg-gradient-to-b from-orange-50 to-white dark:from-gray-950 dark:to-gray-950/90">
      <ParticleBackground />
      <ServicesHero />
      <Commitment />
      <Services />
      <Process />
      <Contact
        title="Ready to Transform Your Space?"
        content="Contact us today for a free consultation and quote for your epoxy flooring project."
        secondaryAction="View Our Gallery"
      />
    </main>
  );
}
