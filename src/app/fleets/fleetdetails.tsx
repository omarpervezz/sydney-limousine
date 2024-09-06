"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import Handlethumbnail from "./[slug]/handlethumbnail";

const images: string[] = [
  "https://sydneylimousineservice.com/img/fleets/genesis/left.png",
  "https://sydneylimousineservice.com/img/fleets/genesis/interior.png",
  "https://sydneylimousineservice.com/img/fleets/genesis/front.png",
  "https://sydneylimousineservice.com/img/fleets/genesis/front-right.png",
  "https://sydneylimousineservice.com/img/fleets/genesis/front-left.png",
  "https://sydneylimousineservice.com/img/fleets/genesis/back.png",
];

export default function GenesisG90() {
  const [selectedImage, setSelectedImage] = useState<string>(
    images[0] // default image
  );

  // UseCallback to memoize the function and prevent unnecessary re-renders
  const handleThumbnailClick = useCallback((url: string) => {
    setSelectedImage(url);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="space-y-8">
          {/* Main Image */}
          <Handlethumbnail data={fleet} />

          {/* Thumbnail Images */}
          <div className="flex gap-4 cursor-pointer">
            {images.map((url: string, index: number) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(url)}
                role="button"
                tabIndex={0}
                className={`border-2 ${
                  selectedImage === url ? "border-blue-500" : "border-gray-300"
                } rounded p-1 focus:outline-none focus:ring focus:ring-blue-200`}
              >
                <Image
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Genesis G90</h1>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">Per Hour Rate</span>
              <span className="text-green-500 text-lg">$132.0 / HOUR</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">Per Day Rate</span>
              <span className="text-green-500 text-lg">$1056.0 / DAY</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">Airport Transfer</span>
              <span className="text-gray-500 text-sm">Quote & Book Now</span>
            </div>
          </div>

          {/* List of other cars */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Checkout our other Limos</h2>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>Mercedes S Class</span> <span>$166.5/hr</span>
              </li>
              <li className="flex justify-between">
                <span>Audi A8</span> <span>$166.5/hr</span>
              </li>
              <li className="flex justify-between">
                <span>BMW 7 Series</span> <span>$166.5/hr</span>
              </li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-bold">Why Choose Genesis</h2>
        <p>
          The Luxury Sedan Genesis is one of the popular spacious cars for four
          people traveling comfortably...
        </p>
        {/* Add more description as needed */}
      </div>

      {/* Amenities and Service Offered */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold">AMENITIES</h3>
          <ul className="list-disc ml-5">
            <li>Top of the ultimate Luxury.</li>
            <li>Exceptionally quiet at speed with soft ride and comfort.</li>
            {/* Add more amenities */}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            SERVICE OFFERED IN THIS VEHICLE
          </h3>
          <ul className="list-disc ml-5">
            <li>Corporate Transportation</li>
            <li>Chauffeur Service</li>
            {/* Add more services */}
          </ul>
        </div>
      </div>
    </div>
  );
}
