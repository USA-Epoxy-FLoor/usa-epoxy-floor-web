import { Input } from "@/components/ui/input";
import React from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ActionState } from "@/components/form/utils/to-action-state";
import { FieldError } from "@/components/form/field-error";

export const ContactFormInput = ({
  name,
  label,
  actionState,
  ...restProps
}: React.ComponentProps<"input"> & {
  name: string;
  label: string;
  className?: string;
  error?: string;
  actionState: ActionState;
}) => {
  return (
    <div className="space-y-2">
      <Label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor={restProps?.id ?? name}
      >
        {label}
      </Label>
      <Input name={name} id={restProps?.id ?? name} {...restProps} />

      <FieldError actionState={actionState} name={name} />
    </div>
  );
};
export const ContactFormTextarea = ({
  name,
  label,
  className,
  actionState,
  ...restProps
}: React.ComponentProps<"textarea"> & {
  name: string;
  label: string;
  className?: string;
  actionState: ActionState;
}) => {
  return (
    <div className="space-y-2">
      <Label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor={restProps?.id ?? name}
      >
        {label}
      </Label>
      <Textarea
        className={cn("min-h-[100px]", className)}
        id={restProps?.id ?? name}
        name={name}
        {...restProps}
      />
      <FieldError actionState={actionState} name={name} />
    </div>
  );
};
