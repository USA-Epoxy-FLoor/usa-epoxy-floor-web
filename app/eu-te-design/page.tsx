import { EuTeHero } from "@/features/eu-te-design/eu-te-hero";
import ParticleBackground from "@/components/ui/particle-background";
import { AboutEuTe } from "@/features/eu-te-design/about-eu-te";
import { EuTeServices } from "@/features/eu-te-design/eu-te-services";
import { Contact } from "@/features/about-us/contact";
import { EuTeReels } from "@/features/eu-te-design/eu-te-reels";

export default function EuTeDesignPage() {
  return (
    <main className="flex flex-col space-y-12 relative bg-gradient-to-b from-orange-50 to-white dark:from-gray-950 dark:to-gray-950/90">
      <ParticleBackground />
      <EuTeHero />
      <AboutEuTe />
      <EuTeServices />
      <EuTeReels />

      <Contact
        title="Ready to Transform Your Space?"
        primaryAction="Request a Consultation"
        secondaryAction="View More Projects"
        tag="Contact"
        content="Contact us today to discuss your custom design and build project for your restaurant, bar, kitchen, bathroom, or catering hall."
      />
    </main>
  );
}
