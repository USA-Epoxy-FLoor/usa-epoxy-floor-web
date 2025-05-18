"use client";

import { useState } from "react";
import NextImage from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageType {
  src: string;
  alt: string;
  caption: string;
}

interface ImageCarouselProps {
  images: ImageType[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  const openModal = (index: number) => {
    setModalImage(index);
    setModalOpen(true);
  };

  const nextModal = () => setModalImage((modalImage + 1) % images.length);
  const prevModal = () =>
    setModalImage((modalImage - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div className="relative aspect-[16/9] w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === current
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <NextImage
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover cursor-pointer"
                onClick={() => openModal(index)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === current ? "bg-primary" : "bg-muted"}`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <div className="relative bg-background rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="relative aspect-[16/9] w-full">
              <NextImage
                src={images[modalImage].src || "/placeholder.svg"}
                alt={images[modalImage].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            <div className="p-4 bg-background">
              <p className="font-medium text-lg">
                {images[modalImage].caption}
              </p>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={prevModal}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={nextModal}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
