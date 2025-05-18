import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { contactPath } from "@/constants/paths";
import Link from "next/link";
import React, { ReactNode } from "react";

export type ServiceCardProps = {
  title: string;
  icon: ReactNode;
  content: string;
};
export const ServiceCard = ({ icon, title, content }: ServiceCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <p className="text-gray-500 dark:text-white/70 mb-4">{content}</p>
        <Button variant="outline" className="w-full dark:text-white/90" asChild>
          <Link href={contactPath()}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
