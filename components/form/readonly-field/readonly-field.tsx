import { Label } from "@/components/ui/label";
import React, { ReactNode } from "react";

export const EM_DASH_CODE = <>&mdash</>;
export const ReadonlyField = ({
  label,
  value,
}: {
  label: string;
  value: string | ReactNode;
}) => {
  return (
    <div className="space-y-2">
      <Label className="font-bold">{label}</Label>
      <p className="font-normal text-sm">{value}</p>
    </div>
  );
};
