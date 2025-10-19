import { ContainerLayout } from "@/components/ui/container-layout";
import React from "react";
import { ServiceCard } from "./service-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LucideArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RESIDENTIAL_SERVICES } from "./residential-services";
import { COMMERCIAL_SERVICES } from "./commercial-services";

export const Services = () => {
  return (
    <section className="w-full py-8">
      <ContainerLayout
        tag="SERVICES"
        title="Our Epoxy Flooring Solutions"
        intro="Comprehensive flooring services for residential and commercial properties"
      >
        <Tabs defaultValue="residential" className="mx-auto max-w-5xl pt-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="residential" className="hover:cursor-pointer">
              Residential Services
            </TabsTrigger>
            <TabsTrigger value="commercial" className="hover:cursor-pointer">
              Commercial Services
            </TabsTrigger>
          </TabsList>
          <TabsContent value="residential" className="mt-6 space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {RESIDENTIAL_SERVICES.map((eachService, i) => (
                <ServiceCard key={i} {...eachService} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                <Link href="/#contact">
                  Request a Residential Quote
                  <LucideArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="commercial" className="mt-6 space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {COMMERCIAL_SERVICES.map((eachService, i) => (
                <ServiceCard key={i} {...eachService} />
              ))}{" "}
            </div>
            <div className="flex justify-center mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                <Link href="/#contact">
                  Request a Commercial Quote
                  <LucideArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </ContainerLayout>
    </section>
  );
};
