"use client";

import { useEffect } from "react";

interface InstagramReelProps {
  reelId: string;
}

export default function InstagramReel({ reelId }: InstagramReelProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "//www.instagram.com/embed.js");
    script.setAttribute("async", "");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="my-6">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/reel/${reelId}/?utm_source=ig_embed&amp;utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px auto",
          maxWidth: 540,
          minWidth: 320,
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      ></blockquote>
    </div>
  );
}
