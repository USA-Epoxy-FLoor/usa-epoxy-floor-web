"use server";

import {
  ActionState,
  formErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { resend } from "@/features/resend";

import { z } from "zod";
import { ContactUsEmail } from "./contact-email-template";

const schema = z.object({
  name: z.string().trim().min(1, "Full name is required."),
  email: z.string().email().trim().min(1, "Email is required."),
  message: z.string().trim().min(2, "Message is required."),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Must be a valid mobile number." })
    .max(14, { message: "Must be a valid mobile number." }),
  userId: z.string().nullable(),
});

const sendContactUsEmail = ({
  name,
  phone,
  message,
  email,
  subject,
}: {
  name: string;
  phone: string;
  message: string;
  email: string;
  subject: string;
}) =>
  resend.emails.send({
    from: process.env.RESEND_CONTACT_EMAIL_FROM ?? "",
    to: process.env.RESEND_CONTACT_EMAIL_TO ?? "",

    subject,
    react: ContactUsEmail({
      name,
      phone,
      message,
      email,
    }),
  });

export async function sendContactUsEmailAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const fields = schema.parse({
      email: formData.get("email"),
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      userId: formData.get("userId"),
    });

    const { data, error } = await sendContactUsEmail({
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      message: fields.message,
      subject: `CONTACT: ${
        fields.userId ? `User#: ${fields.userId}` : `User: ${fields.name}`
      } `,
    });

    if (error) return formErrorToActionState(error, formData);

    return toActionState(`Email sent succesfully. Ref#: ${data?.id}`);
  } catch (error) {
    return formErrorToActionState(error, formData);
  }
}
