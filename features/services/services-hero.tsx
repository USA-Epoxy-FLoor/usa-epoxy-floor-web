import React from "react";
import { HeroButtons } from "../about-us/hero-section";

export const ServicesHero = () => {
  return (
    <section className="w-full py-8 min-h-[70vh] max-w-prose mx-auto text-center space-y-6 flex flex-col justify-center relative">
      <h1 className="text-4xl font-bold tracking-tighter text-orange-500 sm:text-5xl md:text-6xl">
        Services
      </h1>
      <h2 className="text-2xl font-semibold">USA Epoxy Floors</h2>

      <p>
        At USA Epoxy Floors, we specialize in high-quality epoxy flooring
        solutions. Our team of experts has years of experience in the industry
        and is passionate about creating durable, functional, and visually
        stunning epoxy floors for both residential and commercial properties.
      </p>
      <p>
        From design to installation, we handle every aspect of your epoxy
        flooring project. Whether you want to transform your garage, basement,
        patio, or create a strong and attractive flooring solution for your
        business, we have the skills and expertise to deliver exceptional
        results.
      </p>
      <p>
        We use only premium products and state-of-the-art equipment to ensure
        your project is completed with lasting quality. From decorative epoxy
        coatings to metallic finishes and more, we offer a wide range of options
        to meet your style, performance needs, and budget.
      </p>
      <HeroButtons />
    </section>
  );
};
