import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full py-12 md:py-24 lg:py-32 dark:bg-gradient-to-b dark:to-background dark:from-gray-900"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-white">
              Our Work
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              See Our Recent Projects
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
              Browse through our portfolio of completed epoxy flooring projects
              for residential and commercial clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={`/placeholder.svg?height=300&width=400&text=Project+${item}`}
                width={400}
                height={300}
                alt={`Project ${item}`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/20"
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="bg-orange-500 hover:bg-orange-600" asChild>
            <Link href="#contact">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
