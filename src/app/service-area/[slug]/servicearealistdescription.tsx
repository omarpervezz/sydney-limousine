import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import serviceAreaList from "@/data/serviceAreaList";
import Title from "@/components/title";

const ServiceAreaList = ({ params }: { params: { slug: string } }) => {
  const servicesArea = serviceAreaList.find(
    (servicesArea) => servicesArea.slug === params.slug
  );

  if (!servicesArea) {
    notFound();
  }

  return (
    <div className="container mx-auto px-3 py-10">
      <Title text={servicesArea.title} className="mb-6" />
      <div className="flex flex-col space-y-10 md:flex-row md:space-x-10">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src={servicesArea.image}
            alt={servicesArea.title}
            width={800}
            height={600}
            className="w-auto h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
            {servicesArea.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaList;
