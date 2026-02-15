"use client";

import { PropsWithChildren } from "react";
import {
  FollowInstagramButton,
  OurWorkHero,
} from "@/features/our-work/our-work-hero";
import { Contact } from "@/features/about-us/contact";
import { BeforeAfterConatainer } from "@/features/our-work/before-after/before-after-container";

export default function OurWorkPage({ children }: PropsWithChildren) {
  return (
    <main className="flex flex-col space-y-12 relative bg-gradient-to-b from-orange-50 to-white dark:from-gray-950 dark:to-gray-950/90 pt-8">
      <OurWorkHero />
      {children}
      <BeforeAfterConatainer />

      <Contact
        title="Ready to Transform Your Floor?"
        tag="Contact"
        content="Contact us today to discuss your epoxy flooring project and join our growing list of satisfied customers."
      >
        <FollowInstagramButton />
      </Contact>
    </main>
  );
}
