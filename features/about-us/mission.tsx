import { CircleCheck, Lock, Microscope } from "lucide-react";
import React from "react";

export const Mission = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-white">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Customer Service Excellence
            </h2>
            <p className="max-w-[900px] light:text-gray-500 dark:text-gray-300 md:text-xl/relaxed">
              We&apos;re committed to exceeding your expectations on every
              project
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <div className="space-y-6 text-center">
            <p className="text-lg light:text-gray-600 dark:text-gray-300">
              Customer service is a top priority for us. We are committed to
              providing our clients with the highest level of service and
              support throughout their project. Our goal is to make the
              renovation process as seamless as possible and to exceed our
              client&apos;s expectations every time.
            </p>
            <div className="h-px w-20 bg-orange-500 mx-auto"></div>
            <p className="text-xl font-medium">
              Choose USA Epoxy Floors for your next renovation project and
              experience the difference that quality work and excellent customer
              service can make.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex flex-col items-center max-w-[180px]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-3">
                  <CircleCheck className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">Quality</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-300">
                  Premium materials and expert craftsmanship
                </p>
              </div>
              <div className="flex flex-col items-center max-w-[180px]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-3">
                  <Lock className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">Trust</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-300">
                  Over 25 years of industry experience
                </p>
              </div>
              <div className="flex flex-col items-center max-w-[180px]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-3">
                  <Microscope className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">Innovation</h3>
                <p className="text-sm text-gray-500 text-center dark:text-gray-300">
                  Using the latest epoxy flooring techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
