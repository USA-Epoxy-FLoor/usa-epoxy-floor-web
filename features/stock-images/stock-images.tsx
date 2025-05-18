import Image from "next/image";
import React from "react";

const images = [
  {
    id: 1,
    src: "/epoxy/epoxy-1.jpg",
    alt: "Epoxy flooring in Garage",
    caption: "Epoxy flooring in Garage",
  },
  {
    id: 2,
    src: "/epoxy/epoxy-2.jpg",
    alt: "Epoxy flooring in Warehouse",
    caption: "Epoxy flooring in Warehouse",
  },
  {
    id: 3,
    src: "/epoxy/epoxy-3.jpg",
    alt: "Epoxy flooring in Bar",
    caption: "Epoxy flooring in Bar",
  },
  {
    id: 4,
    src: "/epoxy/epoxy-4.jpg",
    alt: "Epoxy flooring in Restaurant",
    caption: "Epoxy flooring in Restaurant",
  },
  {
    id: 5,
    src: "/epoxy/epoxy-5.jpg",
    alt: "Epoxy flooring in Garage 2",
    caption: "Epoxy flooring in Garage",
  },
  {
    id: 6,
    src: "/epoxy/epoxy-6.jpg",
    alt: "Epoxy flooring in Lounge",
    caption: "Epoxy flooring in Lounge",
  },
  {
    id: 7,
    src: "/epoxy/epoxy-8.jpg",
    alt: "Epoxy flooring in Office space",
    caption: "Epoxy flooring in Office space",
  },
  {
    id: 8,
    src: "/epoxy/epoxy-9.jpg",
    alt: "Epoxy flooring in Basement",
    caption: "Epoxy flooring in Basement",
  },
  {
    id: 9,
    src: "/epoxy/epoxy-7.png",
    alt: "Epoxy flooring in Store",
    caption: "Epoxy flooring in Store",
  },
];

export const StockImages = () => {
  return (
    <div className="w-full py-12 px-4 md:py-24 lg:py-32">
      <div className="container py-12 md:py-16 mx-auto space-y-4">
        <div className="flex items-center">
          <p className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white mx-auto">
            Insipiration
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <figure
              key={image.id}
              className="group overflow-hidden rounded-lg relative"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};
