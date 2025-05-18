import { Card, CardContent } from "@/components/ui/card";
import ParticleBackground from "@/components/ui/particle-background";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Brian & Debbie Zengen",
    place: "Poughkeepsie, NY",
    content:
      "USA Epoxy floors and George(the owner) were wonderfull! Very professional and friendly. Outstanding quality work! Highly recommend!",
  },
  {
    id: 2,
    name: "Diana & Carlos",
    place: "Poughkeepsie, NY",
    content:
      "Our floors in the basement were in sad shape. USA Epoxy floors made them beautiful again. George(the owner) is a pleasure to deal with.",
  },
  {
    id: 3,
    name: "Carlos Herrera",
    place: "Poughkeepsie, NY",
    content:
      "George refinished(epoxy) my three car garage floor, transforming a solid existing epoxy coat to something I am proud to show my family and friends. George is punctual and professional. I would recommend him to anyone.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 light:bg-gray-50 relative"
    >
      <ParticleBackground />
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-white">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              What Our Customers Say
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-white/70 md:text-xl/relaxed">
              Don&apos;t just take our word for it. Here&apos;s what our
              satisfied customers have to say about our epoxy flooring services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((eachTestimonial) => {
            return (
              <Card
                key={eachTestimonial.id}
                className="flex flex-col justify-between"
              >
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-500 dark:text-white/70">
                      {eachTestimonial.content}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <div>
                      <p className="text-sm font-medium">
                        {eachTestimonial.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-white/70">
                        {eachTestimonial.place}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
