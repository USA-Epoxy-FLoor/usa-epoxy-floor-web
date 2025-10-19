import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";

export const HeroSection = () => {
  return (
    <section className="w-full py-12 text-center sm:text-left md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-accent to-gray-300 dark:to-gray-50 relative">
      <HeroBackground />
      <HeroContent />
    </section>
  );
};
