import { ContainerLayout } from "@/components/ui/container-layout";
import React from "react";
import { ReelProps, Reels } from "../our-work/reels";

const projectData: ReelProps["projects"] = [
  {
    id: 1,
    reelId: "DMocp6IgCbv",
    title: "Epoxy That Looks Like Stone",
    category: "Residential",
    location: "New York",
  },
  {
    id: 2,
    reelId: "DMnzccOAemi",
    title: "3,000 Sq Ft Garage",
    category: "Commercial",
    location: "Lake George, NY",
  },
  {
    id: 3,
    reelId: "DMny16PAAlX",
    title: "Monochrome Marble Magic",
    category: "Residential",
    location: "New York",
  },
  {
    id: 4,
    reelId: "DMnyf33ASwL",
    title: "Crimson Chrome",
    category: "Residential",
    location: "New York",
  },
  {
    id: 5,
    reelId: "DMnxRUvAitS",
    title: "Walk on Waves",
    category: "Residential",
    location: "New York",
  },
  {
    id: 6,
    reelId: "CvNBGHrgUy-",
    title: "Ocean Vibes",
    category: "Residential",
    location: "New York",
  },
  //   {
  //     id: 7,
  //     reelId: "CuPOPPnAGBB",
  //     title: "Impactful Spaces",
  //     category: "Commercial",
  //     location: "New York",
  //   },
];
export const EuTeReels = () => {
  return (
    <section className="w-full py-8">
      <ContainerLayout
        className="max-w-6xl"
        tag="Projects"
        title="Social Showcase"
        intro="Explore our other custom design and build projects for commercial and residential spaces."
      >
        <div className="mx-auto max-w-6xl gap-6 py-12 flex flex-wrap justify-center text-left">
          <Reels projects={projectData} />
        </div>
      </ContainerLayout>
    </section>
  );
};
