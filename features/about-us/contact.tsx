import { Button } from "@/components/ui/button";
import { ContainerLayout } from "@/components/ui/container-layout";
import { contactPath, ourWorkPath } from "@/constants/paths";
import { BACKGROUND_EVEN } from "@/constants/styles";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

type ContactProps = {
  title: string;
  content: string;
  tag?: string;
  primaryAction?: string;
  secondaryAction?: string;
  secondaryLink?: string;
};
export const Contact = ({
  title,
  content,
  primaryAction = "Request a Quote",
  secondaryAction,
  secondaryLink = ourWorkPath(),
  tag = "FREE QUOTE",
  children,
}: PropsWithChildren<ContactProps>) => {
  return (
    <section
      className={cn(
        "w-full light:bg-orange-50 min-h-[50vh] flex items-center",
        BACKGROUND_EVEN
      )}
    >
      <ContainerLayout tag={tag} title={title} intro={content}>
        <div className="flex justify-center gap-3 mt-4">
          <Button size="lg" asChild>
            <Link href={contactPath()}>{primaryAction}</Link>
          </Button>
          {children || (
            <Button size="lg" variant="outline" asChild>
              <Link href={secondaryLink}>{secondaryAction}</Link>
            </Button>
          )}
        </div>
      </ContainerLayout>
    </section>
  );
};
