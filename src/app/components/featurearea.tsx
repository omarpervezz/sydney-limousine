import chauffeur from "@/public/chauffeur.png";
import car from "@/public/people.png";
import dollar from "@/public/dollar.png";
import Image from "next/image";
export default function FeaturesArea() {
  return (
    <div className="container px-8 md:px-10 lg:px-14 xl:px-16 mx-auto py-12">
      <div className="flex flex-wrap -mx-4">
        <div
          className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="flex items-center py-5 px-4">
            <Image
              src={chauffeur}
              alt="chauffeur"
              width={70}
              height={70}
            ></Image>
            <div className="pl-4">
              <h5 className="mb-3 text-xl font-semibold">
                Professional Chauffeurs
              </h5>
              <p className="text-gray-500">
                Sydney Limousine service provides professional Chauffeurs for
                you 24/7.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="flex items-center bg-gray-100 rounded-lg shadow-md py-5 px-4">
            <Image src={car} alt="car" width={70} height={70}></Image>
            <div className="pl-4">
              <h5 className="mb-3 text-xl font-semibold">Latest car models</h5>
              <p className="text-gray-500">
                Sydney Limousine service provides always reliable and
                comfortable cars for you.
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="flex items-center py-5 px-4">
            <Image src={dollar} alt="dollar" width={70} height={70}></Image>
            <div className="pl-4">
              <h5 className="mb-3 text-xl font-semibold">Reasonable price</h5>
              <p className="text-gray-500">
                Sydney Limousine service offers a variety of services with a
                reasonable range of prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
