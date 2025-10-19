import Image from "next/image";
import React from "react";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/epoxy/hero.png"
        alt="Professional epoxy flooring installation by USA Epoxy Floor"
        fill
        className="object-cover brightness-[0.7] z-0"
      />
      <div className="absolute inset-0 bg-black/5 z-10" />
    </div>
  );
};
