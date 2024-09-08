import React from "react";

const ImpressiveNumbersSection: React.FC = () => {
  return (
    <section className="bg-teal-700 py-16 text-white">
      <div className="container px-8 md:px-8 lg:px-12 xl:px-16 mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Showcase some impressive numbers.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end space-x-8 md:space-x-16">
          <div>
            <span className="text-4xl md:text-5xl font-bold">285 +</span>
            <p className="text-lg mt-2">Vehicles</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold">97</span>
            <p className="text-lg mt-2">Awards</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-bold">13 k</span>
            <p className="text-lg mt-2">Happy Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpressiveNumbersSection;
