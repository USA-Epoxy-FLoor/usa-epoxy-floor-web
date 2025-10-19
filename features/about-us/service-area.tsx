import { Button } from "@/components/ui/button";
import { ContainerLayout } from "@/components/ui/container-layout";
import { contactPath } from "@/constants/paths";
import { CheckCircle, MoveRight } from "lucide-react";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export const ServiceArea = () => {
  return (
    <section className="w-full py-8 min-h-[50vh]">
      <ContainerLayout
        tag={"SERVICE AREA"}
        title={"Where We Serve"}
        intro={
          "We provide epoxy flooring services throughout the Northeastregion"
        }
      >
        <div className="mx-auto max-w-prose py-12">
          <div className="flex flex-wrap mx-auto space-y-4">
            <Location>New York</Location>
            <Location>Connecticut</Location>
            <Location>New Jersey</Location>
            <Location>Massachusetts</Location>
            <Location>Pennsylvania</Location>
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
      </ContainerLayout>
    </section>
  );
};

function Location({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center space-x-2 w-xs pl-12">
      <CheckCircle className="h-5 w-5 text-orange-500" />
      <span className="text-lg font-medium">{children}</span>
    </div>
  );
}
