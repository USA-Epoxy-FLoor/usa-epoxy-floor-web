import { Button } from "@/components/ui/button";
import { ourWorkPath } from "@/constants/paths";
import { ReelProps, Reels } from "@/features/our-work/reels";

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

const projectData: ReelProps["projects"] = [
  {
    id: 1,
    reelId: "CdlYiANLWp6",
    title: "Metallic Epoxy Basement Floor",
    category: "Residential",
    location: "New York",
  },
  {
    id: 2,
    reelId: "Cbij8roJQwa",
    title: "Commercial Restaurants Flooring",
    category: "Commercial",
    location: "Ocean City",
  },
  {
    id: 3,
    reelId: "CpWb98ArnSY",
    title: "Basement Epoxy Coating",
    category: "Residential",
    location: "Hopewell Junction NY",
  },
  {
    id: 4,
    reelId: "CpVyDQsAxIc",
    title: "Flake Garage Floor",
    category: "Commercial",
    location: "Fishkill NY",
  },
  {
    id: 5,
    reelId: "CpD63zTg2O1",
    title: "Residential Flake Floor",
    category: "Residential",
    location: "Carmel NY",
  },
  {
    id: 6,
    reelId: "CpD41w6gFnW",
    title: "Office Space Flooring",
    category: "Commercial",
    location: "Wappingers Falls NY",
  },
  {
    id: 7,
    reelId: "CpAmNYUAwpR",
    title: "Decorative Concrete Overlay",
    category: "Decorative",
    location: "Newburgh NY",
  },
  {
    id: 8,
    reelId: "CpAipIwg3vP",
    title: "Reflector Basement Floor",
    category: "Residential",
    location: "Poughkeepsie NY",
  },
  {
    id: 9,
    reelId: "Co0IILdgba9",
    title: "Flake Garage Floor ",
    category: "Commercial",
    location: "Hudson NY",
  },
  {
    id: 10,
    reelId: "Co0GRF6gTnV",
    title: "Warehouse Quartz Floor",
    category: "Industrial",
    location: "Newburgh NY",
  },
  {
    id: 11,
    reelId: "CcoHqeHp76y",
    title: "Quartz System Installation - Bathroom",
    category: "Commercial",
    location: "Millerton NY",
  },
  {
    id: 12,
    reelId: "CbvNNI5pjMr",
    title: "Reflector for Residential Basement",
    category: "Residential",
    location: "Mohegan Lake NY",
  },

  // {
  //   id: 14,
  //   reelId: "CuKynejAqXi",
  //   title: "Distribution Center Flooring",
  //   category: "Industrial",
  //   location: "Pennsylvania",
  // },
  // {
  //   id: 15,
  //   reelId: "CuKlBStADtD",
  //   title: "Metallic Epoxy Showroom",
  //   category: "Decorative",
  //   location: "Massachusetts",
  // },
  {
    id: 16,
    reelId: "DMnxRUvAitS",
    title: "Metallic Epoxy Office",
    category: "Residential",
    location: "Wappingers Falls NY",
  },
  {
    id: 17,
    reelId: "DMocp6IgCbv",
    title: "Decorative Epoxy for Swimming Pools",
    category: "Decorative",
    location: "Newburg NY",
  },
  {
    id: 18,
    reelId: "DMnyf33ASwL",
    title: "Red Lava - Metalic Epoxy",
    category: "Residential",
    location: "Poughkeepsie NY",
  },
  {
    id: 19,
    reelId: "DMnzccOAemi",
    title: "Flake Epoxy for 3000Sqft Garage Floor",
    category: "Commercial",
    location: "Lake George NY",
  },
  {
    id: 20,
    reelId: "CbJTceltel3",
    title: "60 ft Countertop with Metalic Epoxy",
    category: "Decorative",
    location: "Millertown NY",
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
  const { selectedCategory = "all" } = await params;

  const filteredProjects =
    selectedCategory !== "all"
      ? projectData.filter(
          (project) =>
            project.category.toLocaleLowerCase() === selectedCategory,
        )
      : projectData;

  return (
    <div className="container space-y-8 px-4 md:px-6 mx-auto max-w-6xl">
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            asChild
          >
            <a href={ourWorkPath(category.toLowerCase())}>{category}</a>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Reels projects={filteredProjects} />
      </div>
    </div>
  );
}
