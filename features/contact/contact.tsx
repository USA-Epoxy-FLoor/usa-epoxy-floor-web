"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useActionState } from "react";
import { sendContactUsEmailAction } from "./contact-action";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { useActionFeedback } from "@/components/form/hooks/use-action-feedback";
import { toast } from "sonner";
import { ContactFormInput, ContactFormTextarea } from "./contact-form-item";
import { Phone, MapPin, FacebookIcon, InstagramIcon } from "lucide-react";
import { SubmitButton } from "@/components/form/submit-button";
import { cn } from "@/lib/utils";
import { BACKGROUND_EVEN } from "@/constants/styles";
import Link from "next/link";

export function Contact() {
  const [actionState, action] = useActionState(
    sendContactUsEmailAction,
    EMPTY_ACTION_STATE
  );

  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      toast.success(actionState.message, {
        duration: 3000,
      });
    },
    onError: ({ actionState }) => {
      if (actionState.message) toast.error(actionState.message);
    },
  });

  return (
    <section
      id="contact"
      className={cn(
        "w-full py-12 md:py-24 lg:py-32 light:bg-orange-50",
        BACKGROUND_EVEN
      )}
    >
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-white">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Transform Your Floors?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-300">
                Get in touch with our team for a free consultation and quote.
                We&apos;ll help you choose the perfect epoxy flooring solution
                for your needs.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <Link href="tel:+18454642539">
                  <span>(845) 464-2539</span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <Link href="https://maps.app.goo.gl/ekcRwxYhTyReX98X9">
                  <span>1070 US-9 Suite 102, Fishkill, NY 12524</span>
                </Link>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Link
                  href="https://www.facebook.com/usaepoxyfloor"
                  target="_blank"
                >
                  <FacebookIcon className="text-primary" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link
                  href="https://www.instagram.com/usaepoxyfloors/"
                  target="_blank"
                >
                  <InstagramIcon className="text-primary" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Get a Free Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" id="contact-us-form" action={action}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <ContactFormInput
                    label="Full Name"
                    required
                    placeholder="John Doe"
                    name="name"
                    defaultValue={
                      (actionState?.payload?.get("name") as string) ?? ""
                    }
                    actionState={actionState}
                  />

                  <ContactFormInput
                    label="Email"
                    required
                    placeholder="john@example.com"
                    type="email"
                    name="email"
                    defaultValue={
                      (actionState?.payload?.get("email") as string) ?? ""
                    }
                    actionState={actionState}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <ContactFormInput
                    label="Phone"
                    required
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    defaultValue={
                      (actionState?.payload?.get("phone") as string) ?? ""
                    }
                    actionState={actionState}
                  />
                </div>

                <ContactFormTextarea
                  label="Project Details"
                  required
                  placeholder="Tell us about your project (size, location, timeline, etc.)"
                  name="message"
                  defaultValue={
                    (actionState?.payload?.get("message") as string) ?? ""
                  }
                  rows={5}
                  actionState={actionState}
                />
                <SubmitButton className="w-full bg-orange-500 hover:bg-orange-600">
                  Submit Request
                </SubmitButton>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
