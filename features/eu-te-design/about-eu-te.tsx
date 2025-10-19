import { ContainerLayout } from "@/components/ui/container-layout";

export const AboutEuTe = () => {
  return (
    <section className="w-full py-8">
      <ContainerLayout
        className="max-w-5xl"
        tag="Our Story"
        title="About Us"
        intro="Eu-Te Design LLC was established to handle specialized contracts requiring comprehensive design and build solutions beyond flooring."
      >
        <div className="mx-auto pt-4 space-y-4 text-muted-foreground">
          <p className="">
            Born from the expertise of USA Epoxy Floors, Eu-Te Design LLC was
            created to meet the growing demand for complete design and build
            solutions. We recognized that many of our clients needed more than
            just flooring—they needed a partner who could handle all aspects of
            their space&apos;s design and construction.
          </p>
          <p className="">
            Our team of skilled designers, craftsmen, and installers work
            together to create cohesive, functional, and beautiful spaces for
            restaurants, bars, kitchens, bathrooms, and catering halls.
          </p>
          <p className="">
            We pride ourselves on our attention to detail, commitment to
            quality, and ability to bring our clients&apos; visions to life.
            From concept to completion, we handle every aspect of the project to
            ensure a seamless experience and outstanding results.
          </p>
        </div>
      </ContainerLayout>
    </section>
  );
};
