import { Button } from "@/components/ui/button";
import { contactPath, ourWorkPath } from "@/constants/paths";
import { ReelProps, Reels } from "@/features/our-work/reels";
import { Instagram } from "lucide-react";
import Link from "next/link";

// Instagram reel IDs provided
// const reelIds = [
//   "CdlYiANLWp6",
//   "Cbij8roJQwa",
//   "CpWb98ArnSY",
//   "CpVyDQsAxIc",
//   "CpD63zTg2O1",
//   "CpD41w6gFnW",
//   "CpAmNYUAwpR",
//   "CpAipIwg3vP",
//   "Co0IILdgba9",
//   "Co0GRF6gTnV",
//   "CcoHqeHp76y",
//   "CbvNNI5pjMr",
//   "CbqltQ6g6dL",
//   "CuKynejAqXi",
//   "CuKlBStADtD",
// ]

// Sample project data
const projectData: ReelProps["projects"] = [
  {
    id: 1,
    reelId: "CdlYiANLWp6",
    title: "Metallic Epoxy Garage Floor",
    category: "Residential",
    location: "New York",
  },
  {
    id: 2,
    reelId: "Cbij8roJQwa",
    title: "Commercial Kitchen Flooring",
    category: "Commercial",
    location: "New Jersey",
  },
  {
    id: 3,
    reelId: "CpWb98ArnSY",
    title: "Warehouse Epoxy Coating",
    category: "Industrial",
    location: "Connecticut",
  },
  {
    id: 4,
    reelId: "CpVyDQsAxIc",
    title: "REFLECTOR™ Enhancer Floor",
    category: "Decorative",
    location: "Pennsylvania",
  },
  {
    id: 5,
    reelId: "CpD63zTg2O1",
    title: "Residential Basement Floor",
    category: "Residential",
    location: "Massachusetts",
  },
  {
    id: 6,
    reelId: "CpD41w6gFnW",
    title: "Office Space Flooring",
    category: "Commercial",
    location: "New York",
  },
  {
    id: 7,
    reelId: "CpAmNYUAwpR",
    title: "Decorative Concrete Overlay",
    category: "Decorative",
    location: "Connecticut",
  },
  {
    id: 8,
    reelId: "CpAipIwg3vP",
    title: "Garage Floor with Flakes",
    category: "Residential",
    location: "New Jersey",
  },
  {
    id: 9,
    reelId: "Co0IILdgba9",
    title: "Manufacturing Facility Floor",
    category: "Industrial",
    location: "Pennsylvania",
  },
  {
    id: 10,
    reelId: "Co0GRF6gTnV",
    title: "Retail Store Epoxy Floor",
    category: "Commercial",
    location: "Massachusetts",
  },
  {
    id: 11,
    reelId: "CcoHqeHp76y",
    title: "Quartz System Installation",
    category: "Decorative",
    location: "New York",
  },
  {
    id: 12,
    reelId: "CbvNNI5pjMr",
    title: "Residential Patio Coating",
    category: "Residential",
    location: "New Jersey",
  },

  {
    id: 14,
    reelId: "CuKynejAqXi",
    title: "Distribution Center Flooring",
    category: "Industrial",
    location: "Pennsylvania",
  },
  {
    id: 15,
    reelId: "CuKlBStADtD",
    title: "Metallic Epoxy Showroom",
    category: "Decorative",
    location: "Massachusetts",
  },
];
// Project categories for filtering
const categories = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Decorative",
];

export default async function OurWorkPage({
  params,
}: {
  params: Promise<{ selectedCategory: string }>;
}) {
  const { selectedCategory = "All" } = await params;

  const filteredProjects =
    selectedCategory !== "All"
      ? projectData.filter((project) => project.category === selectedCategory)
      : projectData;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white dark:from-gray-950 dark:to-gray-950/90">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter text-orange-500 sm:text-5xl md:text-6xl">
              Our Work
            </h1>
            <h2 className="text-2xl font-semibold">
              Portfolio of Epoxy Flooring Projects
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
              See the quality and diversity of our epoxy flooring installations
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button variant="outline" size="sm" asChild className="gap-2">
                <a
                  href="https://www.instagram.com/usaepoxyfloors/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Follow Us on Instagram</span>
                </a>
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600"
                size="sm"
                asChild
              >
                <Link href={contactPath()}>Contact us</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={
                  selectedCategory === category
                    ? "bg-orange-500 hover:bg-orange-600"
                    : ""
                }
                asChild
              >
                <a href={ourWorkPath(category)}>{category}</a>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Reels projects={filteredProjects} />
        </div>
      </div>
    </section>
  );
}
