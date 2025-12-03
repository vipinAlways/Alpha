import React, { useState, useRef, useEffect } from "react";
import { RotateCw, MousePointer2, Hand, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./ui/button";
import { images } from "@/lib/const";

export default function ViewPage({
  className,
  setChange,
}: {
  className: string;
  setChange: () => void;
}) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);
  const autoRotateRef = useRef<number | null>(null);

  const totalFrames = images.length - 2;

  const getImageUrl = (frame: number) => {
    return images[frame];
  };

  useEffect(() => {
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getImageUrl(i);
    }
  }, [totalFrames]);

  useEffect(() => {
    if (isAutoRotating) {
      autoRotateRef.current = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % totalFrames);
      }, 50);
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    }
    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [totalFrames, isAutoRotating]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX =
      "touches" in e
        ? e.touches?.[0]?.clientX
        : (e as React.MouseEvent).clientX;
    setStartX(clientX ?? 0);
    setIsAutoRotating(false);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const currentX =
      ("touches" in e
        ? e.touches?.[0]?.clientX
        : (e as React.MouseEvent).clientX) ?? startX;
    const diff = currentX - startX;
    const sensitivity = 5;

    if (Math.abs(diff) > sensitivity) {
      const direction = diff > 0 ? 1 : -1;
      setCurrentFrame((prev) => {
        let newFrame = prev + direction;
        if (newFrame < 0) newFrame = totalFrames - 1;
        if (newFrame >= totalFrames) newFrame = 0;
        return newFrame;
      });
      setStartX(currentX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.6));
  };

  const resetView = () => {
    setCurrentFrame(0);
    setZoom(1);
    setIsAutoRotating(false);
  };

  return (
    <div className={cn(" min-h-screen", className)}>
      <div className={cn("h-screen bg-white overflow-auto py-10 px-5")}>
        <div>
          <Button onClick={setChange}>Back</Button>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl max-md:text-xl font-bold text-zinc-900 mb-2 flex items-center justify-center gap-3">
              <RotateCw className="w-10 h-10 text-indigo-400" />
              360° Car View
            </h1>
            <p className="text-gray-400 max-md:text-sm">
              Drag to rotate • Scroll to zoom
            </p>
          </div>

          <div className=" rounded-2xl shadow-2xl overflow-hidden  h-full w-full">
            <div
              ref={containerRef}
              className="relative overflow-hidden cursor-grab p-8 max-sm:max-h-96  flex flex-col gap-4 max-md:p-2 active:cursor-grabbing w-full h-full"
              style={{ height: "600px" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={getImageUrl(currentFrame)}
                  alt={`Car view frame ${currentFrame + 1}`}
                  className="min-w-full min-h-full object-contain transition-transform duration-200 select-none pointer-events-none"
                  style={{ transform: `scale(${zoom})` }}
                  draggable="false"
                />
              </div>

              {!isDragging && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="bg-black bg-opacity-60 rounded-full p-4 animate-pulse">
                    <Hand className="w-8 h-8 text-white" />
                  </div>
                </div>
              )}

              {/* Frame Counter */}
              <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Frame: {currentFrame + 1} / {totalFrames}
              </div>

              {/* Rotation Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full">
                <MousePointer2 className="w-4 h-4" />
                <span className="text-sm">
                  {isDragging ? "Rotating..." : "Drag to rotate"}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleZoomOut}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <div className="bg-gray-700 px-4 py-2 rounded-lg text-white font-semibold min-w-[80px] text-center">
                    {Math.round(zoom * 100)}%
                  </div>
                  <button
                    onClick={handleZoomIn}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsAutoRotating(!isAutoRotating)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                      isAutoRotating
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-indigo-600 hover:bg-indigo-700 text-white"
                    }`}
                  >
                    <RotateCw
                      className={`w-5 h-5 ${
                        isAutoRotating ? "animate-spin" : ""
                      }`}
                    />
                    {isAutoRotating ? "Stop Rotation" : "Auto Rotate"}
                  </button>

                  <button
                    onClick={resetView}
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    Reset View
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Rotation Progress</span>
                  <span>{Math.round((currentFrame / totalFrames) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all duration-200 rounded-full"
                    style={{ width: `${(currentFrame / totalFrames) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">How to Use</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-600 rounded-full p-2 mt-1">
                  <Hand className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Drag to Rotate
                  </h4>
                  <p className="text-sm">
                    Click and drag left or right to rotate the car view
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-600 rounded-full p-2 mt-1">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Zoom Controls
                  </h4>
                  <p className="text-sm">
                    Use zoom buttons to get a closer look at details
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-pink-600 rounded-full p-2 mt-1">
                  <RotateCw className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Auto Rotate</h4>
                  <p className="text-sm">
                    Enable automatic rotation for a continuous view
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Setup Instructions */}
        </div>
      </div>
    </div>
  );
}
