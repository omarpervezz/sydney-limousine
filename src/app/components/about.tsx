import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Title from "@/components/title";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto text-left">
        <Title
          text="We reimagine the way the world moves for the better"
          className="mb-6"
        />
        <p className="text-lg text-gray-700 mb-6">
          We offer luxury chauffeur driven airport transfers and pickups to
          London. Exceptional Safe, Meet and Greet. One hour of complimentary
          wait time and flight tracking. Professional Drivers & Vehicles. Fixed
          prices on airport transfers. VIP service, get your quote today!
        </p>
        <p className="text-lg text-gray-700 mb-12">
          Et, morbi at sagittis vehicula rutrum. Lacus tortor, quam arcu mi et,
          at lectus leo nunc. Mattis cras auctor vel pharetra tempor. Rhoncus
          pellentesque habitant ac tempor. At aliquam euismod est in praesent
          ornare etiam id. Faucibus libero sit vehicula sed condimentum. Vitae
          in nam porttitor rutrum sed aliquam donec sed. Sapien facilisi lectus.
        </p>
        <ul className="space-y-4 text-left">
          <li className="flex items-start">
            <AiOutlineCheckCircle className="mr-3 text-teal-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">
              100% Luxurious Fleet
            </span>
          </li>
          <li className="flex items-start">
            <AiOutlineCheckCircle className="mr-3 text-teal-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">
              All Our Fleet Are Fully Valeted & Serviced
            </span>
          </li>
          <li className="flex items-start">
            <AiOutlineCheckCircle className="mr-3 text-teal-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">
              A Safe & Secure Journey
            </span>
          </li>
          <li className="flex items-start">
            <AiOutlineCheckCircle className="mr-3 text-teal-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">
              Comfortable And Enjoyable
            </span>
          </li>
          <li className="flex items-start">
            <AiOutlineCheckCircle className="mr-3 text-teal-600" size={24} />
            <span className="text-lg font-semibold text-gray-900">
              Clean, Polite & Knowledgeable
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
