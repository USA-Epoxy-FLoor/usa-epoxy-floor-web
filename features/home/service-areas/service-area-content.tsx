import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { contactPath } from "@/constants/paths";
import { IconTitleProps } from "@/components/ui/icon-tile";

export const SERVICE_AREA_CONTENT: PropsWithChildren<IconTitleProps>[] = [
  {
    title: "New York",
    content:
      "Serving all major cities and surrounding areas throughout New York State.",
  },
  {
    title: "Connecticut",
    content:
      "Providing epoxy flooring solutions throughout the state of Connecticut.",
  },
  {
    title: "New Jersey",
    content: "Serving residential and commercial clients across New Jersey.",
  },
  {
    title: "Massachusetts",
    content:
      "Offering premium epoxy flooring services to customers in Massachusetts.",
  },
  {
    title: "Pennsylvania",
    content:
      "Extending our quality epoxy flooring services to Pennsylvania residents and businesses.",
  },
  {
    title: "Contact Us",
    content:
      "Not in our service area? Contact us to discuss your project and we may be able to accommodate.",
    children: (
      <Button className="mt-4" asChild>
        <Link href={contactPath()}>Get in Touch</Link>
      </Button>
    ),
  },
];
