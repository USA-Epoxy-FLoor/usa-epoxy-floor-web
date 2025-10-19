import { Card, CardContent } from "@/components/ui/card";
import { ContainerLayout } from "@/components/ui/container-layout";
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
    <section id="testimonials" className="w-full relative py-16">
      <ParticleBackground />
      <ContainerLayout
        className="relative"
        tag="Testimonials"
        title="What Our Customers Say"
        intro="Don't just take our word for it. Here's what our
              satisfied customers have to say about our epoxy flooring services."
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {testimonials.map((eachTestimonial) => {
            return (
              <Card
                key={eachTestimonial.id}
                className="flex flex-col justify-between text-left"
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
      </ContainerLayout>
    </section>
  );
}
