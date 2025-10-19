import ParticleBackground from "@/components/ui/particle-background";
import { cn } from "@/lib/utils";

import { SERVICES_CONTENT } from "./content";
import { ServiceCard } from "./service-card";
import { ContainerLayout } from "@/components/ui/container-layout";

export function Services() {
  return (
    <section id="services" className={cn("w-full relative py-8")}>
      <ParticleBackground />
      <ContainerLayout
        className="flex relative z-10 flex-col items-center space-y-2"
        tag={"Our Services"}
        title={"Comprehensive Epoxy Flooring Solutions"}
        intro={
          "We offer a wide range of epoxy flooring services for both residential and commercial properties."
        }
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {SERVICES_CONTENT.map((eachService, i) => (
            <ServiceCard {...eachService} key={i} />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
}
