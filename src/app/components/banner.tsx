export default function Banner({ isSubpage = false }) {
  const subPageBtn = isSubpage
    ? "w-full md:w-[156px] h-12 border text-xs"
    : "w-full md:w-48 border-2 text-base";

  return (
    <section
      className={`relative bg-cover bg-center ${
        isSubpage ? "pt-36 pb-20" : "pt-72 pb-36"
      } banner`}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container px-8 md:px-10 lg:px-14 xl:px-16 mx-auto relative z-10">
        <div className="text-center md:text-left">
          <h1
            className={`text-white ${
              isSubpage ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"
            } font-extrabold mb-4 leading-tight drop-shadow-md`}
          >
            Sydney Limousine Services
          </h1>
          <p
            className={`text-white ${
              isSubpage ? "text-sm md:text-base" : "text-base md:text-lg"
            } mb-2 leading-tight`}
          >
            Experience Luxurious Chauffeur Driven Cars in Australia.
          </p>
          <p
            className={`text-white ${
              isSubpage ? "text-sm md:text-base" : "text-base md:text-lg"
            } mb-8 leading-tight`}
          >
            Sydney | Melbourne | Canberra | Perth | Hobart | Brisbane | Gold
            Coast | Adelaide | Darwin
          </p>
          <div
            className={`flex flex-col md:flex-row md:justify-start ${
              isSubpage ? "gap-2" : "gap-4"
            }`}
          >
            <button
              className={`${subPageBtn} h-12 bg-teal-700 text-white font-semibold rounded-md border-teal-700 hover:translate-y-[-3px] transition-transform`}
            >
              <a href="test.php">INSTANT QUOTATION</a>
            </button>
            <button
              className={`${subPageBtn} h-12 bg-transparent text-white font-semibold rounded-md border-blanchedalmond hover:translate-y-[-3px] transition-transform`}
            >
              <a href="#">BOOK NOW</a>
            </button>
            <button
              className={`${subPageBtn} h-12 bg-transparent text-white font-semibold rounded-md border-blanchedalmond hover:translate-y-[-3px] transition-transform`}
            >
              <a href="#">MANAGE BOOKING</a>
            </button>
            <button
              className={`${subPageBtn} h-12 bg-transparent text-white font-semibold rounded-md border-blanchedalmond hover:translate-y-[-3px] transition-transform`}
            >
              <a href="#">CREATE ACCOUNT</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
