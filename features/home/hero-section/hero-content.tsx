import { Button } from "@/components/ui/button";
import { LucideCheckCircle, LucidePhone } from "lucide-react";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

const CheckCircle = ({ children }: PropsWithChildren) => (
  <div className="flex items-center">
    <LucideCheckCircle className="mr-1 h-4 w-4 text-orange-500" />
    <span className="text-white/90">{children}</span>
  </div>
);
export const HeroContent = () => {
  return (
    <div className="container px-4 md:px-6 mx-auto relative z-10 rounded-2xl py-12 h-full">
      <div className="">
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl/none font-bold text-white space-x-2 flex flex-wrap justify-center md:justify-start">
              <span className="bg-clip-text text-transparent bg-[url('/us-flag.png')] bg-contain drop-shadow-red-600 tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] shadow-2xl">
                USA
              </span>
              <span>EPOXY FLOORS</span>
            </h1>
            <p className="max-w-[600px] text-white/90 md:text-xl text-center">
              Choose us for your new or existing floor project, pre or post
              construction, and experience the difference that quality work and
              excellent customer service can make.
            </p>
          </div>
          <div className="flex gap-2 justify-center md:justify-start">
            <Button asChild size="lg" className="">
              <Link href="tel:+18454642539">
                <LucidePhone className="ml-2 h-4 w-4" />
                Call Us Today!
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="dark:bg-primary-foreground dark:text-secondary"
            >
              <Link href="#about">About Us</Link>
            </Button>
          </div>
          <div className="flex gap-2 justify-center md:justify-start">
            <CheckCircle>Free Estimates</CheckCircle>
            <CheckCircle>Licensed & Insured</CheckCircle>
          </div>
        </div>
      </div>
    </div>
  );
};
