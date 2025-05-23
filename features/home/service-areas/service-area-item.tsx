import { MapPin } from "lucide-react";
import React, { PropsWithChildren, ReactNode } from "react";

export type ServiceAreaItemProps = {
  title: string;
  icon?: ReactNode;
  content: string;
};

const DEFAULT_ICON = <MapPin className="h-6 w-6 text-orange-500" />;
export const ServiceAreaItem = ({
  children,
  icon = DEFAULT_ICON,
  title,
  content,
}: PropsWithChildren<ServiceAreaItemProps>) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-white/70">{content}</p>
      {children}
    </div>
  );
};
