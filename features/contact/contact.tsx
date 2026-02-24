"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useActionState } from "react";
import { sendContactUsEmailAction } from "./contact-action";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { useActionFeedback } from "@/components/form/hooks/use-action-feedback";
import { toast } from "sonner";
import { ContactFormInput, ContactFormTextarea } from "./contact-form-item";
import { MapPin, FacebookIcon, InstagramIcon, LucidePhone } from "lucide-react";
import { SubmitButton } from "@/components/form/submit-button";
import { cn } from "@/lib/utils";
import { BACKGROUND_EVEN } from "@/constants/styles";
import Link from "next/link";
import { ContainerLayout } from "@/components/ui/container-layout";
import { ContactItem } from "./contact-item";

export function Contact() {
  const [actionState, action] = useActionState(
    sendContactUsEmailAction,
    EMPTY_ACTION_STATE,
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
        "w-full min-h-[100vh] flex items-center scroll-mt-16",
        BACKGROUND_EVEN,
      )}
    >
      <ContainerLayout
        tag="Contact Us"
        className="px-4 lg:px-6 relative z-10 max-w-5xl"
        title="Ready to Transform Your Floors?"
        intro="Get in touch with our team for a free consultation and quote.
                We'll help you choose the perfect epoxy flooring solution
                for your needs."
      >
        <div className="flex gap-12 flex-wrap justify-center mt-6">
          <Card className="border flex-2/5 justify-center">
            <CardHeader>
              <CardTitle className="text-left text-xl">
                Get a Free Quote
              </CardTitle>
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
          <div className="flex flex-3/5 lg:flex-2/5 flex-col space-y-4 py-6">
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden max-w-full">
                <video
                  preload="none"
                  className="absolute h-full object-cover w-full aspect-auto rounded-md"
                  autoPlay
                  muted
                  src="/eu-te/usa_epoxy_office.mov"
                  loop
                />
              </div>
              <ContactItem
                icon={<LucidePhone className="h-5 w-5 text-orange-500 pt-1" />}
                href="tel:+18454642539"
                text="(845) 464-2539"
              />
              <ContactItem
                icon={<MapPin className="h-5 w-5 text-orange-500 pt-1" />}
                href="https://maps.app.goo.gl/ekcRwxYhTyReX98X9"
                text="1070 US-9 Suite 102, Fishkill, NY 12524"
                additionaText="Showroom Visits by Appointment Only"
              />
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
        </div>
      </ContainerLayout>
    </section>
  );
}
