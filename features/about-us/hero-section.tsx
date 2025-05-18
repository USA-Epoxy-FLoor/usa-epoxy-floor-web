import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/AboutUs.jpeg"
              alt="USA Epoxy Floors Owner"
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter text-orange-500 sm:text-5xl">
                About Us
              </h1>
              <h2 className="text-2xl font-semibold mt-2">USA Epoxy Floors</h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-50">
              <p>
                At USA Epoxy Floors, we have been providing expert renovation
                and installation services for over 25 years. We specialize in
                residential projects such as garage, sidewalk, patio and
                basement renovations.
              </p>
              <p>
                Our team of experienced professionals takes pride in delivering
                personalized quality work and the utmost customer service. We
                understand that every project is unique and we work closely with
                our clients to ensure that their specific needs are met.
              </p>
              <p>
                In addition to residential work, we also offer commercial
                services for businesses such as restaurants, hotels,
                municipalities and shopping areas. We understand the importance
                of creating functional and visually appealing spaces for our
                commercial clients, and we strive to achieve the best results.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                <Link href="/#contact">
                  Contact Us
                  <Phone className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/#gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
