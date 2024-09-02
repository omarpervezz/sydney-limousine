import React from "react";
import Image from "next/image";
import googlePlayImage from "../../../public/google-play.webp";
import appleStoreImage from "../../../public/apple-store.webp";
import appImage from "../../../public/app.webp";

const AppSection: React.FC = () => {
  return (
    <div className="relative bg-[#f9f8f7] py-10 z-30">
      <div className="container mx-auto px-4">
        <div className="bg-[#f7f7f7] p-10 rounded-xl relative z-10 overflow-hidden">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
              <span className="text-sm text-teal-600 inline-block mb-2 font-bold">
                Our App
              </span>
              <h1 className="text-4xl font-bold text-black mb-4">
                Download Sydney Limousine App For Free!
              </h1>
              <p className="text-gray-600 mb-6">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <div className="flex flex-wrap">
                <a
                  href="#"
                  className="flex items-center bg-[#015f86] text-white rounded-lg shadow-lg px-8 py-3 mr-4 mb-4 hover:bg-teal-700 transition"
                >
                  <Image
                    src={googlePlayImage}
                    alt="Get it on Google Play"
                    width={30}
                    height={30}
                    className="mr-4"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs">GET IT ON</span>
                    <span className="text-lg font-semibold">Google Play</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center bg-[#015f86] text-white rounded-lg shadow-lg px-8 py-3 mb-4 hover:bg-teal-700 transition"
                >
                  <Image
                    src={appleStoreImage}
                    alt="Download on the App Store"
                    width={30}
                    height={30}
                    className="mr-4"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs">GET IT ON</span>
                    <span className="text-lg font-semibold">Apple Play</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <Image
                src={appImage}
                alt="Sydney Limousine App on Phone"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-0"></div>
    </div>
  );
};

export default AppSection;
