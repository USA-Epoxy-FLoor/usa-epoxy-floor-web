import { BACKGROUND_EVEN } from "@/constants/styles";
import { cn } from "@/lib/utils";
import { SERVICE_AREA_CONTENT } from "./service-area-content";
import { ServiceAreaItem } from "./service-area-item";

export function ServiceArea() {
  return (
    <section
      id="service-area"
      className={cn("w-full py-12 md:py-24", BACKGROUND_EVEN)}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-500 px-3 py-1 text-sm text-white">
              Service Area
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Where We Serve
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-white/70">
              USA Epoxy Floors proudly serves customers throughout the Northeast
              region.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREA_CONTENT.map((eachLocation, i) => (
              <ServiceAreaItem {...eachLocation} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
