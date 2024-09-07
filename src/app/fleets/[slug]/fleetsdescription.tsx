import React from "react";
import { notFound } from "next/navigation";
import Handlethumbnail from "./handlethumbnail";
import Image from "next/image";
import Link from "next/link";
import { MdLocalAirport } from "react-icons/md";

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
  whyChoose: string[];
  overview: string[];
  amenities: string[];
  servicesOffered: string[];
}

export default async function FleetDescription({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch("http://localhost:4000/api/fleet", {
    cache: "no-store",
  });
  const fleets: FleetCar[] = await res.json();
  const otherLimo = fleets.filter((fleet) => fleet.slug !== params.slug);

  const fleetData = fleets.find((fleet) => fleet.slug === params.slug);

  if (!fleetData) {
    notFound();
  }

  return (
    <section className="py-12">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="flex flex-col space-y-4">
            <Handlethumbnail data={fleetData} />
            {/* Additional Information */}
            <div className="space-y-4">
              {fleetData.whyChoose && (
                <h2 className="text-xl font-bold text-gray-800">
                  Why Choose {fleetData.name && fleetData.name.split(" ")[0]}
                </h2>
              )}
              {fleetData.whyChoose?.map((fleetInformation, index) => (
                <div key={index}>
                  <p className="text-gray-600">{fleetInformation}</p>
                </div>
              ))}

              {fleetData.overview && (
                <h2 className="text-xl font-bold text-gray-800">
                  Car Overview
                </h2>
              )}
              {fleetData.overview?.map((des, index) => (
                <div key={index}>
                  <p className="text-gray-600">{des}</p>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div>
              {fleetData.amenities && (
                <h2 className="text-xl font-bold text-gray-800 mt-6">
                  Amenities
                </h2>
              )}
              <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
                {fleetData.amenities?.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>

            {/* Services Offered */}
            <div>
              {fleetData.servicesOffered && (
                <h2 className="text-xl font-bold text-gray-800 mt-6">
                  Services Offered
                </h2>
              )}
              <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-600">
                {fleetData.servicesOffered?.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            {/* Car Image */}
            <div className="relative w-full h-80">
              <Image
                src={fleetData.image}
                alt={fleetData.name}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              {fleetData.name}
            </h2>

            {/* Rate Information */}
            {fleetData.rateInfo.map((rateInformation, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {rateInformation.label}
                  </h2>

                  <div className="flex items-center my-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2m6-6a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="ml-2">
                      <p className="text-lg text-gray-700">
                        <span className="text-green-500 font-bold">
                          {rateInformation.price}
                        </span>
                      </p>
                      <p className="text-sm text-gray-500">
                        {rateInformation.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Airport Transfer
                </h2>

                <div className="flex items-center my-4">
                  <MdLocalAirport className="text-3xl rotate-45" />
                  <div className="ml-2">
                    <p className="text-lg text-gray-700">
                      <span className="text-blue-500 font-bold">
                        <Link href="#">Quote & Book Now</Link>
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">
                      *price may vary per city
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-200 mt-5 mb-5 bg-blue-600 text-center p-3 border">
                Checkout our other Limos
              </h2>

              {otherLimo.map((otherLimo, index) => (
                <Link
                  href={otherLimo.slug}
                  key={index}
                  className="flex flex-row justify-between text-blue-400 font-medium text-1xl"
                >
                  <span className="mb-4">{otherLimo.name}</span>
                  <span>{otherLimo.price}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
