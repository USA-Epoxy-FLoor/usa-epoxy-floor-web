"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/features/header/header";
import { Footer } from "@/features/home/footer";

// Instagram reel IDs provided
// const reelIds = [
//   "CdlYiANLWp6",
//   "Cbij8roJQwa",
//   "CpWb98ArnSY",
//   "CpVyDQsAxIc",
//   "CpD63zTg2O1",
//   "CpD41w6gFnW",
//   "CpAmNYUAwpR",
//   "CpAipIwg3vP",
//   "Co0IILdgba9",
//   "Co0GRF6gTnV",
//   "CcoHqeHp76y",
//   "CbvNNI5pjMr",
//   "CbqltQ6g6dL",
//   "CuKynejAqXi",
//   "CuKlBStADtD",
// ]

// Sample project data

export default function OurWorkPage({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="flex-1">
        {children}

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100 dark:bg-background/60">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your Space?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Contact us today to discuss your epoxy flooring project and
                  join our growing list of satisfied customers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600"
                  asChild
                >
                  <Link href="/#contact">Request a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://www.instagram.com/usaepoxyfloors/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Follow Our Instagram</span>
                  </a>
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
