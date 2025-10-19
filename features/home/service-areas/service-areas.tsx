import { cn } from "@/lib/utils";
import { SERVICE_AREA_CONTENT } from "./service-area-content";
import { ContainerLayout } from "@/components/ui/container-layout";
import { IconTile } from "@/components/ui/icon-tile";

export function ServiceArea() {
  return (
    <section id="service-area" className={cn("w-full py-8")}>
      <ContainerLayout
        className="flex relative z-10 flex-col items-center space-y-2"
        tag={"Service Area"}
        title={"Where We Serve"}
        intro={
          "USA Epoxy Floors proudly serves customers throughout the Northeast region."
        }
      >
        <div className="flex mt-8 flex-wrap justify-between max-w-5xl mx-auto gap-6">
          {SERVICE_AREA_CONTENT.map((eachLocation, i) => (
            <IconTile {...eachLocation} key={i} />
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
}
