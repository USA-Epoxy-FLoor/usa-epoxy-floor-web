import { Button } from "@/components/ui/button";
import { CheckCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-accent to-gray-300 dark:to-gray-50 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/epoxy/hero.png"
          alt="Professional epoxy flooring installation by USA Epoxy Floor"
          fill
          className="object-cover brightness-[0.7]"
        />
      </div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                <span className="bg-clip-text text-transparent bg-[url('/us-flag.png')] bg-contain drop-shadow-red-600 tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                  USA
                </span>{" "}
                EPOXY FLOORS <span className="text-orange-500">made easy</span>
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                Choose us for your new or existing floor project, pre or post
                construction, and experience the difference that quality work
                and excellent customer service can make.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600"
              >
                <Link href="tel:+18454642539">
                  Call Us Today!
                  <Phone className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="dark:border-orange-500 border-orange-500 text-orange-400 dark:text-orange-400 dark:hover:text-orange-500 bg-transparent"
              >
                <Link href="#about">About Us</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="mr-1 h-4 w-4 text-orange-500" />
                <span className="text-white/90">Free Estimates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-1 h-4 w-4 text-orange-500" />
                <span className="text-white/90">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
