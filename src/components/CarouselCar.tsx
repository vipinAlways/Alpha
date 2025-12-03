import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { carImages } from "@/lib/const";

const CarouselCar = ({ setImage }: { setImage: (img: string) => void }) => {
  return (
    <div className="flex justify-center items-center">
      <Carousel
        opts={{
          align: "end",
        }}
        className="w-4/5  "
      >
        <CarouselContent className="">
          {carImages.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 basis-1/2">
              <div>
                <Card className="p-1" onClick={() => setImage(img)}>
                  <CardContent className="p-1 px-1 py-1 flex aspect-auto items-center justify-center w-full ">
                    <img
                      src={img}
                      alt="imagePreview"
                      className="object-cover h-full w-full rounded-lg "
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselCar;
