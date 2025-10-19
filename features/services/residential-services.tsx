import {
  LucideCar,
  LucideFootprints,
  LucideLayers,
  LucidePaperclip,
  LucideSparkle,
  LucideWrench,
} from "lucide-react";
import { ServiceCardProps } from "./service-card";
export const RESIDENTIAL_SERVICES: ServiceCardProps[] = [
  {
    title: "Garage Floor Coatings",
    description:
      "Transform your garage with durable, stain-resistant epoxy coatings that enhance the appearance and longevity of your floor.",
    icon: <LucideCar className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Basement Floors",
    description:
      "Create a moisture-resistant, attractive floor for your basement with our specialized epoxy systems designed for below-grade applications.",
    icon: <LucideLayers className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Patio & Walkways",
    description:
      "Enhance your outdoor living spaces with decorative concrete overlays and coatings that are slip-resistant and weather-durable.",
    icon: <LucideFootprints className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "REFLECTOR™ Enhancer Flooring",
    description:
      "Premium reflective flooring system that creates stunning, seamless floors with unlimited design possibilities.",
    icon: <LucidePaperclip className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Flake & Quartz Systems",
    description:
      "Decorative flake and quartz epoxy systems that provide beautiful, durable, and slip-resistant surfaces for any room.",
    icon: <LucideSparkle className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Concrete Repair",
    description:
      "Fix cracks, spalling, and other concrete damage before applying new coatings to ensure a perfect, long-lasting finish.",
    icon: <LucideWrench className="h-6 w-6 text-orange-500" />,
  },
];
