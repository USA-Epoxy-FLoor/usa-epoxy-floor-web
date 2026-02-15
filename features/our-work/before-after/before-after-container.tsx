import { ContainerLayout } from "@/components/ui/container-layout";
import React from "react";
import { BeforeAfterComparison } from "./before-after-comparision";

export const BeforeAfterConatainer = () => {
  return (
    <section className="w-full py-8">
      <ContainerLayout
        tag="Tranformations"
        title="Before & After"
        intro="Experience magic of tranformation.."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto mt-6 justify-items-center-safe content-center">
          <BeforeAfterComparison
            after="/projects/wf-garage-01-before.jpg"
            before="/projects/wf-garage-01-after.jpg"
          />
          <BeforeAfterComparison
            after="/projects/monticello-basement-01-before.jpg"
            before="/projects/monticello-basement-01-after.jpg"
          />
          <BeforeAfterComparison
            after="/projects/carmel-garage-01-before.jpg"
            before="/projects/carmel-garage-01-after.jpg"
          />
          <BeforeAfterComparison
            after="/projects/lagrangeville-basement-01-before.jpg"
            before="/projects/lagrangeville-basement-01-after.jpg"
          />
          <BeforeAfterComparison
            after="/projects/mombaccus-garage-01-before.jpg"
            before="/projects/mombaccus-garage-01-after.jpg"
          />
          <BeforeAfterComparison
            after="/projects/wf-garage-02-before.jpg"
            before="/projects/wf-garage-02-after.jpg"
          />
        </div>
      </ContainerLayout>
    </section>
  );
};
