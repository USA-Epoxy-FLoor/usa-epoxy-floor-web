import { Button } from "@/components/ui/button";
import { contactPath } from "@/constants/paths";
import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

export const FollowInstagramButton = () => (
  <Button variant="outline" size="sm" asChild className="gap-2 flex-1">
    <a
      href="https://www.instagram.com/usaepoxyfloors/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram className="h-4 w-4" />
      <span>Follow Us on Instagram</span>
    </a>
  </Button>
);
const ActionButtons = () => (
  <div className="flex flex-wrap justify-center gap-4 mt-6">
    <FollowInstagramButton />
    <Button size="sm" asChild className="flex-1">
      <Link href={contactPath()}>Contact us</Link>
    </Button>
  </div>
);
export const OurWorkHero = () => {
  return (
    <section className="w-full max-w-prose mx-auto text-center space-y-2 flex flex-col justify-center relative px-4">
      <h1 className="text-4xl font-bold tracking-tighter text-orange-500 sm:text-5xl md:text-6xl">
        Our Work
      </h1>
      <h2 className="text-2xl font-semibold">
        Portfolio of Epoxy Flooring Projects
      </h2>
      <p className="md:text-xl/relaxed">
        See the quality and diversity of our epoxy flooring installations
      </p>
      <ActionButtons />
    </section>
  );
};
