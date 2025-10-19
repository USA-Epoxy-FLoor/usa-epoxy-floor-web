import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ContainerLayout } from "@/components/ui/container-layout";
import { LucideArrowRight, LucideCircleCheck, LucideHeart } from "lucide-react";
import Link from "next/link";
import React from "react";

const CommitmentCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="text-left max-w-md space-y-1 gap-1">
      <CardHeader className="space-y-1">
        {icon}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <p className="text-gray-500 dark:text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
};

export const Commitment = () => {
  return (
    <section className="w-full py-8">
      <ContainerLayout
        tag={"Our Commitment"}
        title={"Quality You Can Trust"}
        intro={
          " We're dedicated to exceeding your expectations on every project"
        }
      >
        <div className="flex justify-center gap-6 py-10 max-w-5xl mx-auto">
          <CommitmentCard
            title="Our Promise"
            description="Our goal is to exceed your expectations and deliver a finished product that you will be proud to show off. We take pride in our work and are committed to providing our clients with the best possible service and support throughout the entire process."
            icon={<LucideCircleCheck className="h-10 w-10 text-orange-500" />}
          />
          <CommitmentCard
            title="Expert Care"
            description="If you're looking for a reliable and experienced concrete flooring specialist, look no further than USA Epoxy Floors. Contact us today to learn more about our services and how we can help you create the perfect concrete floor for your home or business."
            icon={<LucideHeart className="h-10 w-10 text-orange-500" />}
          />
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600" asChild>
          <Link href="/#contact">
            Contact Us Today
            <LucideArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </ContainerLayout>
    </section>
  );
};
