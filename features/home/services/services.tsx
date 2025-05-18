import ParticleBackground from "@/components/ui/particle-background";
import { BACKGROUND_ODD } from "@/constants/styles";
import { cn } from "@/lib/utils";

import { SERVICES_CONTENT } from "./content";
import { ServiceCard } from "./service-card";

export function Services() {
  return (
    <section
      id="services"
      className={cn("w-full py-12 md:py-24 relative", BACKGROUND_ODD)}
    >
      <ParticleBackground />
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-white">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Comprehensive Epoxy Flooring Solutions
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-white/70 md:text-xl/relaxed">
              We offer a wide range of epoxy flooring services for both
              residential and commercial properties.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_CONTENT.map((eachService, i) => (
            <ServiceCard {...eachService} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
