import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { ReactNode } from "react";

export type FeatureCardProps = {
  logo: ReactNode;
  title: string;
  text: string;
  highlightText: string;
};

export const FeatureCard = ({
  logo,
  title,
  text,
  highlightText,
}: FeatureCardProps) => {
  const content = text
    ?.split(highlightText)
    ?.flatMap((item, i) => [
      item,
      <span key={i} className="text-orange-500 font-medium">
        {highlightText}{" "}
      </span>,
    ])
    .slice(0, -1);

  return (
    <Card className="flex flex-col h-full items-center justify-start space-y-4 text-center dark:text-gray-50">
      <CardContent className="pt-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mx-auto mb-4">
          {logo}
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <p className="text-sm text-gray-500 dark:text-gray-50">{content}</p>
      </CardContent>
    </Card>
  );
};
