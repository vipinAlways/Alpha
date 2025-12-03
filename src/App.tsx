import { Activity, useState } from "react";
import CarouselCar from "./components/CarouselCar";
import Button from "./components/ui/button";
import ViewPage from "./components/ViewPage";
import CarListingCard from "./components/CarListingCard";
import Info from "./components/Info";

const App = () => {
  const [show, setShow] = useState(true);
  const [activeImage, setActiveImage] = useState(
    "https://mda.spinny.com/sp-file-system/public/2024-10-27/41a8a8b2a63b414d81c687c80d30ede2/raw/file.JPG?q=85"
  );

  console.log({ activeImage });
  return (
    <div className="mt-7 flex max-md:flex-col items-start gap-20 relative">
      <div className="md:w-[65%] w-full space-y-7 overflow-hidden ">
        <div className="relative">
          <img
            src={activeImage}
            alt="imagePreview"
            className="object-cover h-[26rem] w-full rounded-lg"
            loading="lazy"
          />

          <Button
            className="bg-[#14141475]  hover:bg-[#14141475] absolute bottom-3.5 left-1/2 -translate-x-1/2"
            onClick={() => setShow(!show)}
          >
            Click to view{" "}
            <img
              src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/ProductDetail/components/TopProductDetail/assets/three_sixty_view.gif?format=gif&q=85&w=128&dpr=1.3"
              alt="360 view"
              aria-hidden="true"
              className="size-14"
            />
          </Button>
        </div>

        <CarouselCar setImage={(img) => setActiveImage(img)} />

        <Info />

        <Activity mode={show ? "hidden" : "visible"}>
          <ViewPage
            className="fixed w-full top-0 left-0 z-50 viewReveal"
            setChange={() => setShow(true)}
          />
        </Activity>
      </div>

      <div className="md:w-[35%] w-full sticky top-16 self-start">
        <CarListingCard />
      </div>
    </div>
  );
};

export default App;
