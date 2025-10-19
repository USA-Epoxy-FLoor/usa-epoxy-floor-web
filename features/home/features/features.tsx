import ParticleBackground from "@/components/ui/particle-background";
import { cn } from "@/lib/utils";
import { FEATURES_CONTENT } from "./features-content";
import { FeatureCard } from "./feature-card";
import { ContainerLayout } from "@/components/ui/container-layout";

export function Features() {
  return (
    <section id="about" className={cn("w-full relative py-8")}>
      <ParticleBackground />
      <ContainerLayout
        tag=" Why Choose Us"
        title="Premium Epoxy Flooring Solutions"
        intro=" Our epoxy flooring solutions offer unmatched quality, durability,
              and aesthetic appeal for both residential and commercial spaces."
      >
        <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {FEATURES_CONTENT?.map((eachFeature, i) => (
            <FeatureCard key={i} {...eachFeature} />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
}
