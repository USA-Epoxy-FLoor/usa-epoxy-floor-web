import { ContainerLayout } from "@/components/ui/container-layout";
import { IconTile, IconTitleProps } from "@/components/ui/icon-tile";
import React, { PropsWithChildren } from "react";

const NumberIcon = ({ children }: PropsWithChildren) => (
  <p className="text-2xl font-bold text-orange-500 h-16 w-16 rounded-full bg-orange-100 text-center inline-flex aspect-square justify-center items-center">
    {children}
  </p>
);

const steps: IconTitleProps[] = [
  {
    title: "Consultation",
    content:
      "We discuss your needs, preferences, and budget to understand your vision for your new floor.",
  },
  {
    title: "Design & Planning",
    content:
      "We create a detailed plan including color selection, pattern design, and project timeline.",
  },
  {
    title: "Installation",
    content:
      "Our expert team prepares the surface and installs your new flooring system with precision.",
  },
  {
    title: "Final Inspection",
    content:
      "We conduct a thorough inspection and walkthrough to ensure your complete satisfaction.",
  },
];

export const Process = () => {
  return (
    <section className="w-full py-8">
      <ContainerLayout
        tag="Our Process"
        title="How We Work"
        intro="Our streamlined approach ensures a smooth experience from start to finish"
      >
        <div className="flex justify-center flex-wrap mt-6">
          {steps.map((eachStep, i) => (
            <IconTile
              {...eachStep}
              key={i}
              icon={<NumberIcon>{i}</NumberIcon>}
            />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};
