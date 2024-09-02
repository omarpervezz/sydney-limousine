"use client";

import React, { useState } from "react";
import Image from "next/image";
import Title from "@/components/title";
import blogImageOne from "../../../public/limousine.jpg";
import blogImageTwo from "../../../public/test.jpg";

interface Product {
  category: string[];
  imgSrc: string;
  title: string;
  description: string;
  pax: string;
}

const products: Product[] = [
  {
    category: ["Executive"],
    imgSrc: blogImageOne.src,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    pax: "4 Pax",
  },
  {
    category: ["SUV"],
    imgSrc: blogImageTwo.src,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    pax: "3 Pax",
  },
  {
    category: ["People Mover"],
    imgSrc: blogImageOne.src,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    pax: "8 Pax",
  },
  {
    category: ["Stretch Limousine"],
    imgSrc: blogImageTwo.src,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    pax: "10 Pax",
  },
  {
    category: ["Stretch Limousine"],
    imgSrc: blogImageOne.src,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    pax: "6 Pax",
  },
  {
    category: ["Stretch Limousine"],
    imgSrc: blogImageTwo.src,
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    pax: "4 Pax",
  },
];

const ProductArea: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProducts = products.filter((product) =>
    activeFilter === "All" ? true : product.category.includes(activeFilter)
  );

  return (
    <section className="bg-gray-100 pt-32 pb-20">
      <div className="container mx-auto px-4">
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
              onClick={() => setActiveFilter("Executive")}
            >
              Executive
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
        <div className="flex flex-wrap justify-center">
          {filteredProducts.map((product, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-10">
              <div className="border rounded-md shadow-md bg-white overflow-hidden">
                <div className="overflow-hidden">
                  <Image
                    src={product.imgSrc}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transform transition-transform duration-300 ease-in-out hover:scale-100 scale-110"
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
                          {product.category.join(", ")}
                        </a>
                      </li>
                      <li className="text-gray-800 font-semibold text-sm">
                        {product.pax}
                      </li>
                    </ul>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    <a href="#" className="hover:text-teal-600">
                      {product.title}
                    </a>
                  </h4>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductArea;
