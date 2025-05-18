import { ZodError } from "zod";

export type ActionState = {
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  status?: "SUCCESS" | "ERROR";
  timeStamp: number;
};
export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
  timeStamp: Date.now(),
};
export const formErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  if (error instanceof ZodError)
    return {
      status: "ERROR",
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
      timeStamp: Date.now(),
    };
  if (error instanceof Error)
    return {
      status: "ERROR",
      message: error.message,
      payload: formData,
      fieldErrors: {},
      timeStamp: Date.now(),
    };
  return {
    status: "ERROR",
    message: "An unknown error occured. Please try again.",
    payload: formData,
    fieldErrors: {},
    timeStamp: Date.now(),
  };
};
export const toActionState = (
  message = "",
  status: ActionState["status"] = "SUCCESS"
): ActionState => ({
  status,
  message,
  fieldErrors: {},
  timeStamp: Date.now(),
});
