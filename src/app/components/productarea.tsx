"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Title from "@/components/title";

type FleetCar = {
  image: string;
  category: string[];
  name: string;
  description: string;
  luggage: string;
};

const ProductArea: React.FC = () => {
  const [fleet, setFleet] = useState<FleetCar[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data from API
  useEffect(() => {
    const fetchFleetData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/fleet`,
          {
            cache: "no-store",
          }
        ); // Adjust API URL accordingly
        const data = await response.json();
        setFleet(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching fleet data:", error);
        setLoading(false);
      }
    };
    fetchFleetData();
  }, []);

  const filteredProducts = fleet.filter((product) =>
    activeFilter === "All" ? true : product.category.includes(activeFilter)
  );

  return (
    <section className="bg-gray-100 pt-32 pb-20">
      <div className="container px-8 md:px-10 lg:px-14 xl:px-16 mx-auto">
        <div className="flex justify-center mb-16">
          <div className="text-center">
            <span className="text-sm text-teal-600 font-bold uppercase">
              Let&apos;s Check Out
            </span>
            <Title text="Newest Vehicle Models" className="mb-2" />
            <p className="mt-4 px-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto quis placeat assumenda vel id quo optio blanditiis
              molestiae, maiores suscipit commodi quos corporis tempora,
              officiis veritatis facere. Hic, deleniti ea?
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white shadow-md rounded-md flex flex-wrap justify-center p-6">
            <button
              className={`px-6 py-2 mx-2 mb-2 rounded ${
                activeFilter === "All"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveFilter("All")}
            >
              All
            </button>
            <button
              className={`px-6 py-2 mx-2 mb-2 rounded ${
                activeFilter === "Executive"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveFilter("Executive Car")}
            >
              Executive Car
            </button>
            <button
              className={`px-6 py-2 mx-2 mb-2 rounded ${
                activeFilter === "SUV"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveFilter("SUV")}
            >
              SUV
            </button>

            <button
              className={`px-6 py-2 mx-2 mb-2 rounded ${
                activeFilter === "People Mover"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveFilter("Sedan")}
            >
              Sedan
            </button>
            <button
              className={`px-6 py-2 mx-2 mb-2 rounded ${
                activeFilter === "People Mover"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveFilter("People Mover")}
            >
              People Mover
            </button>
            <button
              className={`px-6 py-2 mx-2 mb-2 rounded ${
                activeFilter === "Stretch Limousine"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveFilter("Stretch Limousine")}
            >
              Stretch Limousine
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div
              className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-primary rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {filteredProducts.map((product, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-10">
                <div className="border rounded-md shadow-md bg-white overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-55 object-cover "
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <ul className="flex flex-row justify-between w-full space-x-2">
                        <li>
                          <a
                            href="#"
                            className="text-purple-600 text-sm font-bold"
                          >
                            {product.category}
                          </a>
                        </li>
                        <li className="text-gray-800 font-semibold text-sm">
                          {product.luggage}
                        </li>
                      </ul>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">
                      <a href="#" className="hover:text-teal-600">
                        {product.name}
                      </a>
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductArea;
