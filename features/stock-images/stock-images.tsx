import {
  ContainerLayout,
  ContainerLayoutProps,
} from "@/components/ui/container-layout";
import Image from "next/image";

export type StockImage = {
  id: number;
  src: string;
  alt: string;
  caption: string;
};

type StockImagesProps = { images: StockImage[] } & ContainerLayoutProps;

export const StockImages = ({
  images,
  tag,
  title,
  intro,
  className,
}: StockImagesProps) => {
  return (
    <div className="w-full py-8 max-w-7xl mx-auto">
      <ContainerLayout
        tag={tag}
        title={title}
        intro={intro}
        className={className}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto mt-6 justify-items-center-safe content-center">
          {images.map((image) => (
            <figure
              key={image.id}
              className="group overflow-hidden rounded-lg relative aspect-square w-full max-w-sm"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </figure>
          ))}
        </div>
      </ContainerLayout>
    </div>
  );
};
