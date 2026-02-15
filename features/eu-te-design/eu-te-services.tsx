import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ContainerLayout } from "@/components/ui/container-layout";
import { servicesPath } from "@/constants/paths";
import { LucideFrame, LucideSofa, LucideUtensils } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

const serviceData = [
  {
    title: "Flooring Solutions",
    icon: <LucideFrame className="text-primary" />,
    description:
      "Premium flooring solutions for discerning spaces — blending form and function with high-end tile, timeless hardwood, and seamless polished concrete.",
  },
  {
    title: "Custom Furniture & Tables",

    icon: <LucideSofa className="text-primary" />,
    description:
      "Statement-making custom epoxy tables designed for commercial and residential settings — combining durability with stunning visual appeal tailored to your brand.",
  },
  {
    title: "Custom Countertops",

    icon: <LucideUtensils className="text-primary" />,
    description:
      "Premium countertops for bars, kitchens, and reception areas using high-quality materials using epoxy and wood.",
  },
];

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => (
  <Card className="text-left min-w-xs flex-1 max-w-sm">
    <CardContent className="pt-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl mb-2">{title}</CardTitle>
      <p className="text-gray-500 mb-4">{description}</p>
      <Button variant="outline" className="w-full" asChild>
        <Link href={servicesPath()}>Learn More</Link>
      </Button>
    </CardContent>
  </Card>
);

export const EuTeServices = () => {
  return (
    <section className="w-full py-8">
      <ContainerLayout
        className="max-w-6xl"
        tag="Our Services"
        title="Comprehensive Design & Build Solutions"
        intro="We offer a wide range of custom design and build services to create unique, functional spaces for commercial clients."
      >
        <div className="mx-auto max-w-6xl gap-6 py-12 flex flex-wrap justify-center">
          {serviceData.map((eachCard, i) => (
            <ServiceCard key={i} {...eachCard} />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};
