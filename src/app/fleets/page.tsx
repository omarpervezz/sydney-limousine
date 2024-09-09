import Image from "next/image";
import Banner from "@/components/banner";
import Title from "@/components/title";
import { FaCar } from "react-icons/fa";
import Link from "next/link";

// Define FleetCar interface
interface FleetCar {
  slug: string;
  name: string;
  category: string;
  luggage: string;
  features: string[];
  image: string;
  actions: {
    viewDetails: string;
    quoteBook: string;
  };
}

// Async server component that fetches fleet data
export default async function FleetPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/fleet`, {
    cache: "no-store",
  });
  const fleet: FleetCar[] = await res.json();

  return (
    <>
      <Banner isSubpage={true} />
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div>
            <Title text="Our Fleet" className="mb-8 text-center" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {fleet.map((car, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md p-4 rounded-lg overflow-hidden"
                >
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={400}
                    height={250}
                    className="w-[360px] h-[268px] object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {car.name}
                    </h2>
                    <p className="text-gray-500">{car.category}</p>

                    <ul className="my-4 space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <FaCar className="mr-2 text-lg" /> {car.luggage}
                      </li>
                      {car.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <FaCar className="mr-2 text-lg text-green-600" />{" "}
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col md:flex-col lg:flex-row gap-4 mt-4">
                      <Link
                        href={`/fleets/${car.slug}`}
                        className="w-full bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-all"
                      >
                        {car.actions.viewDetails}
                      </Link>
                      <Link
                        href={`/fleets/${car.slug}`}
                        className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all"
                      >
                        {car.actions.quoteBook}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
