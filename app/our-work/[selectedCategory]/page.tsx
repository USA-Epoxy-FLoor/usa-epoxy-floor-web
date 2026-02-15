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
    location: "New York",
  },
  {
    id: 17,
    reelId: "DMocp6IgCbv",
    title: "Stone Epoxy",
    category: "Residential",
    location: "Newburg NY",
  },
  {
    id: 18,
    reelId: "DMnyf33ASwL",
    title: "Red Lava Epoxy",
    category: "Residential",
    location: "Poughkeepsie NY",
  },
  {
    id: 19,
    reelId: "DMnzccOAemi",
    title: "3000Sq Garage",
    category: "Commercial",
    location: "Lake George NY",
  },
  {
    id: 20,
    reelId: "CbJTceltel3",
    title: "3000Sq Garage",
    category: "Commercial",
    location: "Lake George NY",
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
