import {
  Factory,
  House,
  Paperclip,
  Settings,
  Sparkle,
  Store,
} from "lucide-react";
import { ServiceCardProps } from "./service-card";

export const SERVICES_CONTENT: ServiceCardProps[] = [
  {
    icon: <Paperclip className="h-6 w-6 text-orange-500" />,
    title: "Refractor Enhancer Flooring",
    content:
      "Premium reflective flooring that enhances the appearance of your space with a stunning, glossy finish.",
  },
  {
    icon: <Sparkle className="h-6 w-6 text-orange-500" />,
    title: "Flake and Quartz Flooring",
    content:
      " Decorative flake and quartz systems that provide a beautiful, durable, and slip-resistant surface.",
  },
  {
    icon: <Settings className="h-6 w-6 text-orange-500" />,
    title: "Decorative Concrete Overlays",
    content:
      "Transform existing concrete with decorative overlays that add texture, color, and pattern to your floors.",
  },
  {
    icon: <Store className="h-6 w-6 text-orange-500" />,
    title: "Commercial Floors",
    content:
      "High-performance epoxy flooring solutions for retail spaces, restaurants, offices, and other commercial properties.",
  },
  {
    icon: <House className="h-6 w-6 text-orange-500" />,
    title: "Residential Floors",
    content:
      "Beautiful and durable epoxy flooring for garages, basements, kitchens, and other residential spaces.",
  },
  {
    icon: <Factory className="h-6 w-6 text-orange-500" />,
    title: "Industrial Floors",
    content:
      "Heavy-duty epoxy flooring systems for manufacturing facilities, warehouses, and other industrial environments.",
  },
];
