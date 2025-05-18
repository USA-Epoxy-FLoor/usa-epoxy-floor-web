import { CircleDollarSign, Clock, Droplet, Shield } from "lucide-react";
import { FeatureCardProps } from "./feature-card";

export const FEATURES_CONTENT: FeatureCardProps[] = [
  {
    logo: <Droplet className="h-6 w-6 text-orange-500" />,
    title: "Designs",
    text: "Virtually unlimited designs, patterns and color options, limited only by your imagination.",
    highlightText: "unlimited",
  },
  {
    logo: <CircleDollarSign className="h-6 w-6 text-orange-500" />,

    title: "Affordability",
    text: "Affordable and cost effective, and low maintenance when compared to other flooring products.",
    highlightText: "cost effective",
  },
  {
    logo: <Shield className="h-6 w-6 text-orange-500" />,
    title: "Durability",
    text: "Extreme durability for high traffic areas and can handle vehicular traffic.",
    highlightText: "Extreme",
  },
  {
    logo: <Clock className="h-6 w-6 text-orange-500" />,
    title: "Installation",
    text: "Quick installation in time-days not weeks like other flooring products.",
    highlightText: "Quick",
  },
];
