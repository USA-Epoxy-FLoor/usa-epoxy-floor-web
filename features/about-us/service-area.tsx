import { Button } from "@/components/ui/button";
import { contactPath } from "@/constants/paths";
import { CheckCircle, MoveRight } from "lucide-react";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export const ServiceArea = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 light:bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-white">
              SERVICE AREA
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Where We Serve
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-300">
              We provide epoxy flooring services throughout the Northeast region
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            <div className="space-y-4">
              <Location>New York</Location>
              <Location>Connecticut</Location>
              <Location>New Jersey</Location>
            </div>
            <div className="space-y-4">
              <Location>Massachusetts</Location>
              <Location>Pennsylvania</Location>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-500 mb-6 dark:text-gray-300">
              Not in our service area? Contact us anyway and we&apos;ll see if
              we can accommodate your project.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href={contactPath()}>
                Contact Us Today
                <MoveRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

function Location({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center gap-3 justify-center">
      <CheckCircle className="h-5 w-5 text-orange-500" />
      <span className="text-lg font-medium">{children}</span>
    </div>
  );
}
