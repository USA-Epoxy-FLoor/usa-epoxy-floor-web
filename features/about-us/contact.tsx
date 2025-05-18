import { Button } from "@/components/ui/button";
import { contactPath, ourWorkPath } from "@/constants/paths";
import Link from "next/link";
import React from "react";

type ContactProps = {
  title: string;
  content: string;
  primaryAction: string;
  secondaryAction: string;
};
export const Contact = ({
  title,
  content,
  primaryAction,
  secondaryAction,
}: ContactProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {title}
            </h2>
            <p className="max-w-[600px] md:text-xl/relaxed">{content}</p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row mx-auto">
            <Button size="lg" asChild>
              <Link href={contactPath()}>{primaryAction}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={ourWorkPath()}>{secondaryAction}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
