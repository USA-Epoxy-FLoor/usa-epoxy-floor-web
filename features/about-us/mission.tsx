import { ContainerLayout } from "@/components/ui/container-layout";
import { IconTile, IconTitleProps } from "@/components/ui/icon-tile";
import { cn } from "@/lib/utils";
import { CircleCheck, Lock, Microscope } from "lucide-react";
import React from "react";

const tiles: IconTitleProps[] = [
  {
    content: "Premium materials and expert craftsmanship",
    title: "Quality",
    icon: <CircleCheck className="text-primary h-8 w-8" />,
  },
  {
    content: "Over 25 years of industry experience",
    title: "Trust",
    icon: <Lock className="text-primary h-8 w-8" />,
  },
  {
    content: "Using the latest epoxy flooring techniques",
    title: "Innovation",
    icon: <Microscope className="text-primary h-8 w-8" />,
  },
];

export const Mission = () => {
  return (
    <section className={cn("w-full py-8 min-h-[80vh]")}>
      <ContainerLayout
        className=""
        tag="Our Mission"
        title="Customer Service Excellence"
        intro=" We're committed to exceeding your expectations on every project"
      >
        <div className="space-y-6 text-center mt-8 max-w-prose mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Customer service is a top priority for us. We are committed to
            providing our clients with the highest level of service and support
            throughout their project. Our goal is to make the renovation process
            as seamless as possible and to exceed our client&apos;s expectations
            every time.
          </p>
          <div className="h-px w-20 bg-orange-500 mx-auto"></div>
          <p className="text-xl font-medium">
            Choose USA Epoxy Floors for your next renovation project and
            experience the difference that quality work and excellent customer
            service can make.
          </p>
          <div className="flex justify-center gap-6 mt-8 flex-wrap md:flex-nowrap">
            {tiles.map((eachTile, i) => (
              <IconTile key={i} {...eachTile} />
            ))}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};
