import {
  LucideCoffee,
  LucideFactory,
  LucideGraduationCap,
  LucideHospital,
  LucideLampDesk,
  LucideStore,
} from "lucide-react";
import { ServiceCardProps } from "./service-card";
export const COMMERCIAL_SERVICES: ServiceCardProps[] = [
  {
    title: "Retail Flooring",
    description:
      "Create attractive, durable floors for retail spaces that enhance your brand image and withstand high foot traffic.",
    icon: <LucideStore className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Restaurant Floors",
    description:
      "Specialized flooring solutions for food service areas that are slip-resistant, easy to clean, and meet health code requirements.",
    icon: <LucideCoffee className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Industrial Flooring",
    description:
      "Heavy-duty epoxy systems for manufacturing facilities, warehouses, and other industrial environments requiring chemical resistance.",
    icon: <LucideFactory className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Office Spaces",
    description:
      "Professional, attractive flooring solutions that create a positive impression for clients and a comfortable environment for employees.",
    icon: <LucideLampDesk className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Healthcare Facilities",
    description:
      "Antimicrobial, seamless flooring systems that meet the strict hygiene and durability requirements of medical environments.",
    icon: <LucideHospital className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "Educational Institutions",
    description:
      "Durable, low-maintenance flooring solutions for schools and universities that can withstand heavy traffic and frequent cleaning.",
    icon: <LucideGraduationCap className="h-6 w-6 text-orange-500" />,
  },
];
