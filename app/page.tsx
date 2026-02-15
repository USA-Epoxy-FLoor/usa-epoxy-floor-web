import { Contact } from "@/features/contact/contact";
import { HeroSection } from "@/features/home/hero-section/hero-section";
import { Services } from "@/features/home/services";
import { Testimonials } from "@/features/home/testimonials";
import { LocalBusinessJsonLd } from "@/features/structured-data";
import { StockImages } from "@/features/stock-images";
import { Features } from "@/features/home/features";
import { ServiceArea } from "@/features/home/service-areas";
import { StockImage } from "@/features/stock-images/stock-images";

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
] satisfies StockImage[];

export default function Home() {
  return (
    <main className="flex flex-col space-y-12 bg-gradient-to-b from-orange-50 to-white dark:from-gray-950 dark:to-gray-950/90">
      <LocalBusinessJsonLd />
      <HeroSection />
      <Features />
      <StockImages
        images={images}
        tag={"Inspiration"}
        title={"Innovative Epoxy Flooring Designs"}
        intro={"Tailored epoxy flooring for residential and commercial spaces"}
        className="w-full"
      />
      <Services />
      <ServiceArea />
      <Testimonials />
      <Contact />
    </main>
  );
}
