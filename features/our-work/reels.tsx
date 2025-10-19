"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useEffect } from "react";
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
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "");
    document.body.appendChild(script);

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).instgrm?.Embeds?.process?.();
    } catch {}

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      {projects.map((project) => (
        <Card
          key={project.id}
          className="px-0 rounded-sm overflow-hidden pb-0 max-w-sm"
        >
          <CardHeader className="px-4">
            <h3 className="font-bold">{project.title}</h3>
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>{project.category}</span>
              <span>{project.location}</span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="instagram-content">
              <InstagramReel reelId={project.reelId} key={project.id} />
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
