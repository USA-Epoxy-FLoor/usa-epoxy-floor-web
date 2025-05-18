import type React from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Sparkle,
  Paperclip,
  Wrench,
  Layers,
  Car,
  Footprints,
  Store,
  Coffee,
  Factory,
  LampDesk,
  Hospital,
  GraduationCap,
  CircleCheck,
  Heart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/features/header/header";
import { Footer } from "@/features/home/footer";
import { ourWorkPath } from "@/constants/paths";

export default function ServicesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-accent to-white dark:from-accent  dark:to-gray-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter text-orange-500 sm:text-5xl md:text-6xl">
                  Services
                </h1>
                <h2 className="text-2xl font-semibold">USA Epoxy Floors</h2>
              </div>
              <div className="mx-auto max-w-3xl space-y-4 light:text-gray-600">
                <p>
                  At USA Epoxy Floors, we specialize in all types of concrete
                  floors. Our team of experts has years of experience in the
                  industry and is passionate about creating beautiful and
                  functional flooring for both residential and commercial
                  properties.
                </p>
                <p>
                  From design to installation, we handle every aspect of your
                  concrete flooring project. Whether you&apos;re looking to
                  update your garage, patio, or basement, or create a durable
                  and attractive flooring solution for your business, we have
                  the skills and expertise to deliver the results you&apos;re
                  looking for.
                </p>
                <p>
                  We use only the highest quality products and equipment to
                  ensure the successful completion of your project. From epoxy
                  coatings to polished concrete, we offer a wide range of
                  options to meet your specific needs and budget.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button
                  className="bg-orange-500 hover:bg-orange-600"
                  asChild
                  size="lg"
                >
                  <Link href="/#contact">
                    Request a Quote
                    <Phone className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <a href={ourWorkPath()}>View Our Work</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 light:bg-gray-50 dark:bg-gray-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-white">
                  Our Commitment
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Quality You Can Trust
                </h2>
                <p className="max-w-[900px] light:text-gray-500 md:text-xl/relaxed">
                  We&apos;re dedicated to exceeding your expectations on every
                  project
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="p-6 rounded-lg light:bg-white border shadow-sm">
                    <CircleCheck className="h-10 w-10 text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Our Promise</h3>
                    <p className="light:text-gray-600">
                      Our goal is to exceed your expectations and deliver a
                      finished product that you will be proud to show off. We
                      take pride in our work and are committed to providing our
                      clients with the best possible service and support
                      throughout the entire process.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-lg light:bg-white border shadow-sm">
                    <Heart className="h-10 w-10 text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Expert Care</h3>
                    <p className="light:text-gray-600">
                      If you&apos;re looking for a reliable and experienced
                      concrete flooring specialist, look no further than USA
                      Epoxy Floors. Contact us today to learn more about our
                      services and how we can help you create the perfect
                      concrete floor for your home or business.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                  <Link href="/#contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-white">
                  SERVICES
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Our Epoxy Flooring Solutions
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-white/70 md:text-xl/relaxed">
                  Comprehensive flooring services for residential and commercial
                  properties
                </p>
              </div>
            </div>

            <Tabs
              defaultValue="residential"
              className="mx-auto max-w-5xl pt-12"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="residential"
                  className="hover:cursor-pointer"
                >
                  Residential Services
                </TabsTrigger>
                <TabsTrigger
                  value="commercial"
                  className="hover:cursor-pointer"
                >
                  Commercial Services
                </TabsTrigger>
              </TabsList>
              <TabsContent value="residential" className="mt-6 space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    title="Garage Floor Coatings"
                    description="Transform your garage with durable, stain-resistant epoxy coatings that enhance the appearance and longevity of your floor."
                    icon={<Car className="h-6 w-6 text-orange-500" />}
                  />
                  <ServiceCard
                    title="Basement Floors"
                    description="Create a moisture-resistant, attractive floor for your basement with our specialized epoxy systems designed for below-grade applications."
                    icon={<Layers className="h-6 w-6 text-orange-500" />}
                  />
                  <ServiceCard
                    title="Patio & Walkways"
                    description="Enhance your outdoor living spaces with decorative concrete overlays and coatings that are slip-resistant and weather-durable."
                    icon={<Footprints className="h-6 w-6 text-orange-500" />}
                  />
                  <ServiceCard
                    title="REFLECTOR™ Enhancer Flooring"
                    description="Premium reflective flooring system that creates stunning, seamless floors with unlimited design possibilities."
                    icon={<Paperclip className="h-6 w-6 text-orange-500" />}
                  />
                  <ServiceCard
                    title="Flake & Quartz Systems"
                    description="Decorative flake and quartz epoxy systems that provide beautiful, durable, and slip-resistant surfaces for any room."
                    icon={<Sparkle className="h-6 w-6 text-orange-500" />}
                  />
                  <ServiceCard
                    title="Concrete Repair"
                    description="Fix cracks, spalling, and other concrete damage before applying new coatings to ensure a perfect, long-lasting finish."
                    icon={<Wrench className="h-6 w-6 text-orange-500" />}
                  />
                </div>
                <div className="flex justify-center mt-8">
                  <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                    <Link href="/#contact">
                      Request a Residential Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="commercial" className="mt-6 space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    title="Retail Flooring"
                    description="Create attractive, durable floors for retail spaces that enhance your brand image and withstand high foot traffic."
                    icon={<Store className="h-6 w-6 text-orange-500" />}
                  />
                  <ServiceCard
                    title="Restaurant Floors"
                    description="Specialized flooring solutions for food service areas that are slip-resistant, easy to clean, and meet health code requirements."
                    icon={<Coffee className="h-6 w-6 text-orange-500" />}
                  />
                  <ServiceCard
                    title="Industrial Flooring"
                    description="Heavy-duty epoxy systems for manufacturing facilities, warehouses, and other industrial environments requiring chemical resistance."
                    icon={<Factory className="h-6 w-6 text-orange-500" />}
                  />
                  <ServiceCard
                    title="Office Spaces"
                    description="Professional, attractive flooring solutions that create a positive impression for clients and a comfortable environment for employees."
                    icon={<LampDesk className="h-6 w-6 text-orange-500" />}
                  />
                  <ServiceCard
                    title="Healthcare Facilities"
                    description="Antimicrobial, seamless flooring systems that meet the strict hygiene and durability requirements of medical environments."
                    icon={<Hospital className="h-6 w-6 text-orange-500" />}
                  />
                  <ServiceCard
                    title="Educational Institutions"
                    description="Durable, low-maintenance flooring solutions for schools and universities that can withstand heavy traffic and frequent cleaning."
                    icon={<GraduationCap className="h-6 w-6 text-orange-500" />}
                  />
                </div>
                <div className="flex justify-center mt-8">
                  <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                    <Link href="/#contact">
                      Request a Commercial Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 light:bg-gray-50 dark:bg-gray-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-white">
                  Our Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  How We Work
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Our streamlined approach ensures a smooth experience from
                  start to finish
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-4">
                    <span className="text-2xl font-bold text-orange-500">
                      1
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Consultation</h3>
                  <p className="text-gray-500">
                    We discuss your needs, preferences, and budget to understand
                    your vision for your new floor.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-4">
                    <span className="text-2xl font-bold text-orange-500">
                      2
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Design & Planning</h3>
                  <p className="text-gray-500">
                    We create a detailed plan including color selection, pattern
                    design, and project timeline.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-4">
                    <span className="text-2xl font-bold text-orange-500">
                      3
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Installation</h3>
                  <p className="text-gray-500">
                    Our expert team prepares the surface and installs your new
                    flooring system with precision.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center pb-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-4">
                    <span className="text-2xl font-bold text-orange-500">
                      4
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Final Inspection</h3>
                  <p className="text-gray-500">
                    We conduct a thorough inspection and walkthrough to ensure
                    your complete satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100 dark:bg-background/60">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight light:text-gray-800">
                  Ready to Transform Your Floor?
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-white/60 md:text-xl/relaxed">
                  Contact us today for a free consultation and quote for your
                  epoxy flooring project.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 dark:text-gray-50"
                  asChild
                >
                  <Link href="/#contact">Request a Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="dark:border-orange-500 border-orange-500 text-orange-400 dark:text-orange-400 dark:hover:text-orange-500 bg-gray-50"
                  asChild
                >
                  <a href={ourWorkPath()}>View Our Gallery</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-2">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-500 dark:text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
}
