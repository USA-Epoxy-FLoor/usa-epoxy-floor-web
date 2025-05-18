"use client";

import { useFormStatus } from "react-dom";
import { PropsWithChildren } from "react";
import { LoaderCircle } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";

export const SubmitButton = (
  props: PropsWithChildren<Partial<ButtonProps>>
) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} type="submit" disabled={props.disabled || pending}>
      {pending && <LoaderCircle className="mr-2 animate-spin h-4 w-4" />}
      {props.children}
    </Button>
  );
};
