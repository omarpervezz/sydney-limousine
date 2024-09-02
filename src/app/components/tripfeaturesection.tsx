import React from "react";
import { FaShieldAlt, FaDollarSign, FaCarSide } from "react-icons/fa";
import Title from "@/components/title";
const TripFeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto text-center">
        <Title text="Make Your Trip Your Way With Us" className="mb-12" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <FaShieldAlt size={48} className="text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Safety First
            </h3>
            <p className="text-gray-600 mt-2">
              Both you and your shipments will travel with professional drivers.
              Always with the highest quality standards.
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <FaDollarSign size={48} className="text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Prices With No Surprises
            </h3>
            <p className="text-gray-600 mt-2">
              Both you and your shipments will travel with professional drivers.
              Always with the highest quality standards.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaCarSide size={48} className="text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Private Travel Solutions
            </h3>
            <p className="text-gray-600 mt-2">
              Both you and your shipments will travel with professional drivers.
              Always with the highest quality standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripFeaturesSection;
