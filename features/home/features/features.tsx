import ParticleBackground from "@/components/ui/particle-background";
import { BACKGROUND_EVEN } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { FEATURES_CONTENT } from "./features-content";
import { FeatureCard } from "./feature-card";

export function Features() {
  return (
    <section
      id="about"
      className={cn(
        "w-full py-12 md:py-24 lg:py-32  relative",
        BACKGROUND_EVEN
      )}
    >
      <ParticleBackground />
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Premium Epoxy Flooring Solutions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-50">
              Our epoxy flooring solutions offer unmatched quality, durability,
              and aesthetic appeal for both residential and commercial spaces.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES_CONTENT?.map((eachFeature, i) => (
            <FeatureCard key={i} {...eachFeature} />
          ))}
        </div>
      </div>
    </section>
  );
}
