import { FaCertificate } from "react-icons/fa6";
import { FaUsersCog } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
export default function FeaturesArea() {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-wrap -mx-4">
        <div
          className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="flex items-center py-5 px-4">
            <FaCertificate className="fa fa-certificate text-6xl text-purple-600 flex-shrink-0" />
            <div className="pl-4">
              <h5 className="mb-3 text-xl font-semibold">
                BEST QUALITY PRODUCTS
              </h5>
              <p className="text-gray-500">
                Diam dolor diam ipsum sit amet diam et eos erat ipsum
              </p>
              <a
                className="text-gray-600 border-b border-gray-600 hover:text-gray-800"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="flex items-center bg-gray-100 rounded-lg shadow-md py-5 px-4">
            <FaUsersCog className="fa fa-users-cog text-6xl text-purple-600 flex-shrink-0" />
            <div className="pl-4">
              <h5 className="mb-3 text-xl font-semibold">
                SPECIFICALLY FARMING
              </h5>
              <p className="text-gray-500">
                Diam dolor diam ipsum sit amet diam et eos erat ipsum
              </p>
              <a
                className="text-gray-600 border-b border-gray-600 hover:text-gray-800"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="flex items-center py-5 px-4">
            <FaTools className="fa fa-tools text-6xl text-purple-600 flex-shrink-0" />
            <div className="pl-4">
              <h5 className="mb-3 text-xl font-semibold">
                ORGANIC FARM IMPORTANT?
              </h5>
              <p className="text-gray-500">
                Diam dolor diam ipsum sit amet diam et eos erat ipsum
              </p>
              <a
                className="text-gray-600 border-b border-gray-600 hover:text-gray-800"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
