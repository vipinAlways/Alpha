import { MapPin, Info } from "lucide-react";
import Button from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Emical from "./Emical";
import { toast } from "sonner";

export default function CarListingCard() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full bg-zinc-100 rounded-lg overflow-hidden p-2">
        <div className="p-6 pb-4">
          <h1 className="text-xl font-bold text-purple-900 mb-2">
            2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD
          </h1>
          <div className="flex items-center gap-0.5 text-gray-700 text-sm mb-3">
            <span>13K km</span>
            <span>·</span>
            <span>Diesel</span>
            <span>·</span>
            <span>Manual</span>
          </div>
          <div className="flex items-start gap-2 text-gray-600 text-sm mb-4">
            <MapPin className="w-4 h-4 mt-0.5" />
            <span>Alpha Car Hub, Trillium Avenue, Gurgaon</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2">
            <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">A+</span>
            </div>
            <span className="text-sm text-gray-700">
              Latest cars, 3 year warranty
            </span>
            <Info className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        <div className="px-6 space-x-1.5">
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Fixed on road price</p>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-purple-900">
                ₹13.26 Lakh
              </span>
              <span className="text-sm text-gray-600">+ 1% TCS</span>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Includes RC transfer, insurance & more
            </p>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600">
                or{" "}
                <span className="text-xl font-bold text-purple-900">
                  ₹24,136/m
                </span>
              </p>
              <p className="text-xs text-gray-500">Starting EMI</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className=" text-white max-md:text-sm px-6 py-2.5 rounded-lg font-semibold  transition-colors">
                  Calculate your EMI
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl h-4/5 ">
                <DialogHeader>
                  <DialogTitle>EMI Calculate</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="overflow-y-auto h-full">
                  <Emical />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" className=" text-zinc-50 ">
                      Cancel
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="bg-purple-100 rounded-lg p-3 text-center mb-4">
            <p className="text-sm text-purple-900">
              Special rate starting @ <span className="font-bold">10.99%</span>{" "}
              for Assured+ cars
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 text-center mb-4 text-sm">
            <p className="text-gray-700">
              This inventory is no longer available with us. View similar cars.
            </p>
          </div>

          <Button
            onClick={() =>
              toast(
                "Sorry for the inconvenience  Functionality will continue soon"
              )
            }
            className="w-full  text-white py-4 rounded-lg font-bold text-md  transition-colors"
          >
            VIEW SIMILAR CARS
          </Button>
        </div>
      </div>
    </div>
  );
}
