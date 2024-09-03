import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/title";
import servicesAreaList from "@/data/serviceAreaList";

const ServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-3 py-10">
      <Title text="Service Area" className="mb-8 text-center" />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
        {servicesAreaList.map((servicesArea) => (
          <div
            key={servicesArea.id}
            className="bg-[#eaeaea] w-full h-[250px] p-5 flex gap-3 flex-row items-center justify-center rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex items-center">
              <Image
                src={servicesArea.image}
                alt={servicesArea.title}
                width={500}
                height={100}
                className="w-full object-contain"
              />
            </div>
            <div className="">
              <h2 className="text-2xl font-semibold mb-2">
                {servicesArea.city}
              </h2>
              <p className="text-gray-700 mb-4">
                {servicesArea.description.split(". ").slice(0, 1).join(". ") +
                  "."}
              </p>
              <Link
                href={`/service-area/${servicesArea.slug}`}
                passHref
                className="text-white bg-black hover:bg-gray-800 font-medium py-3 px-5 rounded-lg transition-colors"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
