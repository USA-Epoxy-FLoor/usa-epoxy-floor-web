import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import InstagramReel from "./instagram-reel";

type Project = {
  id: number;
  reelId: string;
  title: string;
  category: string;
  location: string;
};
export type ReelProps = {
  projects: Project[];
};
export const Reels = ({ projects }: ReelProps) => {
  return (
    <>
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="instagram-content">
              <InstagramReel reelId={project.reelId} key={project.id} />
            </div>
            <div className="p-4">
              <h3 className="font-bold">{project.title}</h3>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{project.category}</span>
                <span>{project.location}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
