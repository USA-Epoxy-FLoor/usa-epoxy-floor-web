import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="flex flex-col flex-1 text-left gap-2">
      <CardHeader className="space-y-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <p className="text-gray-500 dark:text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
};
