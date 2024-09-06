"use client";
import { useState, useCallback } from "react";
import Image from "next/image";

interface FleetCar {
  slug: string;
  name: string;
  price: string;
  category: string;
  pax: string;
  luggage: string;
  features: string[];
  image: string;
  rateInfo: {
    label: string;
    price: string;
    description: string;
  }[];
  viewImage: string[];
}

// Update the function to accept `data` as a prop and destructure it
function Handlethumbnail({ data }: { data: FleetCar }) {
  // Default to the first image in the viewImage array
  const [selectedImage, setSelectedImage] = useState<string>(
    data.viewImage[data.viewImage.length - 1]
  );

  // UseCallback to memoize the function and prevent unnecessary re-renders
  const handleThumbnailClick = useCallback((url: string) => {
    setSelectedImage(url);
  }, []);

  return (
    <div className="space-y-8">
      {/* Main Image */}
      <Image
        src={selectedImage}
        alt={data.name}
        width={600}
        height={400}
        className="w-full rounded"
        priority
      />

      {/* Thumbnail Images */}
      <div className="flex gap-4 cursor-pointer">
        {data.viewImage.map((url: string, index: number) => (
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
  );
}

export default Handlethumbnail;
