import Link from "next/link";
import React, { ReactNode } from "react";

type ContactItemProps = {
  icon: ReactNode;
  href: string;
  text: string;
  additionaText?: string;
};
export const ContactItem = ({
  href,
  text,
  additionaText,
  icon,
}: ContactItemProps) => {
  return (
    <div className="flex gap-2 items-start text-left">
      {icon}
      <Link href={href} className="space-y-1">
        <p>{text}</p>
        {additionaText && <p className="text-primary">{additionaText}</p>}
      </Link>
    </div>
  );
};
