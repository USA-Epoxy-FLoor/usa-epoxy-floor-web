import { EuTeHero } from "@/features/eu-te-design/eu-te-hero";
import ParticleBackground from "@/components/ui/particle-background";
import { AboutEuTe } from "@/features/eu-te-design/about-eu-te";
import { EuTeServices } from "@/features/eu-te-design/eu-te-services";
import { Contact } from "@/features/about-us/contact";
import { StockImages } from "@/features/stock-images";
import { euTeImages } from "./eu-te-images";

export default function EuTeDesignPage() {
  return (
    <main className="flex flex-col space-y-12 relative bg-gradient-to-b from-orange-50 to-white dark:from-gray-950 dark:to-gray-950/90">
      <ParticleBackground />
      <EuTeHero />
      <AboutEuTe />
      <EuTeServices />
      <StockImages
        tag={"Our work"}
        title={"Custom designs"}
        intro={
          "From floor to ceiling, we bring your vision to life with handcrafted, custom woodwork. We specialize in creating one-of-a-kind spaces through premium custom flooring, intricate wood art, and statement ceilings. Whether you’re looking for a signature furniture piece or durable, artisan countertops, our craftsmanship blends beauty and function to make your home truly yours."
        }
        className="w-full"
        images={euTeImages}
      />

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
