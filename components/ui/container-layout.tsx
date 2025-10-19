import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

type ContainerLayoutProps = {
  className?: string;
  tag: string;
  title: string;
  intro: string;
};
export const ContainerLayout = ({
  children,
  className,
  tag,
  title,
  intro,
}: PropsWithChildren<ContainerLayoutProps>) => {
  return (
    <section
      className={cn(
        "container px-4 md:px-6 mx-auto text-center flex flex-col items-center space-y-2",
        className
      )}
    >
      <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-white">
        {tag}
      </div>
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
        {title}
      </h2>
      <p className="text-gray-500 dark:text-white/70 md:text-xl/relaxed max-w-prose">
        {intro}
      </p>
      <div className="w-full">{children}</div>
    </section>
  );
};
