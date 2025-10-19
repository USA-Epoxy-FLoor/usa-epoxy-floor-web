import { Button } from "@/components/ui/button";
import { contactPath, ourWorkPath } from "@/constants/paths";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => (
  <div className="flex flex-col gap-2 min-[400px]:flex-row">
    <Button asChild size="lg">
      <Link href={contactPath()}>
        Request a Consultation
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
    <Button variant="outline" size="lg" asChild>
      <Link href={ourWorkPath()}>View Our Projects</Link>
    </Button>
  </div>
);

const HeroContent = () => (
  <div className="space-y-2">
    <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
      Eu-Te Design LLC
    </h1>
    <h2 className="text-2xl font-semibold">Custom Design & Build Solutions</h2>
    <p className="max-w-prose">
      Specializing in complete design and build solutions for restaurants,
      kitchens, bathrooms, bars, garage and catering halls. We go beyond epoxy
      flooring to create stunning, functional spaces with custom lighting,
      furniture, countertops, hardwood, tiles, and woodwork.
    </p>
  </div>
);

const Badges = () => {
  const badges = [
    "Custom Design",
    "Expert Craftsmanship",
    "Full-Service Solutions",
  ];
  return (
    <div className="flex items-center space-x-4 text-sm">
      {badges.map((eachBadge, i) => (
        <div key={i} className="flex items-center">
          <CheckCircle className="mr-1 h-4 w-4 text-primary" />
          <span>{eachBadge}</span>
        </div>
      ))}
    </div>
  );
};

export const EuTeHero = () => (
  <section className="container py-6 md:py-12 lg:py-16 px-4 md:px-6 mx-auto">
    <div className="grid gap-1 lg:grid-cols-[1fr_500px] lg:gap-6 xl:grid-cols-[1fr_550px] bg-transparent relative">
      <div className="flex flex-col justify-center space-y-4 lg:py-16 md:py-12 py-6">
        <HeroContent />
        <ActionButtons />
        <Badges />
      </div>

      <div className="relative aspect-video overflow-hidden h-full max-w-xl">
        <video
          preload="none"
          className="absolute h-full object-cover w-full aspect-auto rounded-md"
          autoPlay
          muted
          src="/eu-te/eu-te-design-intro.mp4"
          loop
        />
      </div>
    </div>
  </section>
);
