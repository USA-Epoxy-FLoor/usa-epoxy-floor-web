"use client";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface InstagramReelProps {
  reelId: string;
}

const Listener = (node: HTMLElement, callback: VoidFunction) => {
  const observer = new MutationObserver(() => {
    const iFrame = node.querySelector("iframe");
    if (iFrame) {
      iFrame.addEventListener("load", callback, { once: true });
      observer.disconnect();
    }
  });
  return observer;
};

function Spinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Loader className="h-6 w-6 animate-spin" />
    </div>
  );
}

export default function InstagramReel({ reelId }: InstagramReelProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const containerNode = containerRef.current;
    if (!containerNode) return;

    const instagramIframe = containerNode.querySelector("iframe");
    const onLoad = () => setLoaded(true);
    let observer: MutationObserver | null = null;
    if (instagramIframe) onLoad();
    else {
      observer = Listener(containerNode, onLoad);
      observer.observe(containerNode, { childList: true, subtree: true });
    }
    return () => observer?.disconnect();
  }, [reelId]);

  return (
    <div
      className={cn("flex mx-auto my-px w-full px-px aspect-video relative", {
        "min-h-[520px]": !loaded,
      })}
      ref={containerRef}
    >
      {!loaded && (
        <div
          className="absolute inset-0"
          aria-label="Loading Instagram reel"
          role="status"
        >
          <Spinner />
        </div>
      )}
      <blockquote
        className="instagram-media w-full mb-0"
        data-instgrm-permalink={`https://www.instagram.com/reel/${reelId}/?utm_source=ig_embed&amp;utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "transparent",
          borderColor: "transparent",
          // borderRadius: 3,
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          // margin: "1px auto",
          // // maxWidth: 540,
          // // minWidth: 320,
          // padding: 0,
          // width: "calc(100% - 2px)",
        }}
      ></blockquote>
    </div>
  );
}
