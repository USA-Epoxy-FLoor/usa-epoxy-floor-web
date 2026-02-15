import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "@/components/ui/comparison";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type BeforeAfterComparisonProps = {
  before: string;
  after: string;
  className?: string;
};

export const BeforeAfterComparison = ({
  after,
  before,
  className = "",
}: BeforeAfterComparisonProps) => {
  return (
    <div
      className={cn(
        "w-full inset-0 flex items-center justify-center",
        className,
      )}
    >
      <Comparison className="aspect-square rounded-xl overflow-hidden border-2 border-primary container space-y-8 px-4 md:px-6 mx-auto max-w-6xl">
        <ComparisonItem position="left">
          <Image
            src={before}
            alt="Before"
            className="size-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            fill
            fetchPriority="high"
          />
        </ComparisonItem>
        <ComparisonItem position="right">
          <Image
            src={after}
            alt="After"
            className="size-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            fill
            fetchPriority="high"
          />
        </ComparisonItem>
        <ComparisonHandle />
      </Comparison>
    </div>
  );
};
