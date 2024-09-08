import React from "react";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/title";
import sydney from "@/public/sydney.jpg";
import limoServices from "@/data/cityServiceList";

const ServiceList: React.FC = () => {
  return (
    <div className="container px-8 md:px-8 lg:px-12 xl:px-16 mx-auto py-10">
      <Title text="Service Area" className="mb-8 text-center" />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
        {limoServices.map((service, index) => (
          <div
            className="bg-[#eaeaea] w-full h-[250px] p-5 flex gap-3 flex-row items-center justify-center rounded-lg shadow-md overflow-hidden"
            key={index}
          >
            <div className="flex items-center">
              <Image
                src={sydney}
                alt="Sdyney"
                width={400}
                height={100}
                className="w-full object-contain"
              />
            </div>
            <div className="">
              <h2 className="text-2xl font-semibold mb-2">{service.city}</h2>
              <p className="text-gray-700 mb-4">
                {service.description.split(". ").slice(0, 1).join(". ") + "."}
              </p>
              <Link
                href={`/service-area/${service.path}`}
                passHref
                className="text-white bg-black hover:bg-gray-800 font-medium py-3 px-5 rounded-lg transition-colors"
              >
                View more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
