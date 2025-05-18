import { ActionState } from "./utils/to-action-state";

type FieldErrorProps = {
  name: string;
  actionState: ActionState;
};
export const FieldError = ({ name, actionState }: FieldErrorProps) => {
  const message = actionState?.fieldErrors?.[name]?.[0];
  if (!message) return null;
  return <p className="text-sm text-destructive font-medium">{message}</p>;
};
