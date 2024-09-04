import React from "react";
import Banner from "@/components/banner";
import Image from "next/image";
import adelaideImg from "@/public/adelaide.jpg";
import Title from "@/components/title";

type ServiceDetails = {
  serviceName: string;
  description: string;
};

const adelaideServices: ServiceDetails[] = [
  {
    serviceName: "Adelaide Airport Transfer",
    description: `Adelaide Airport Transfer is a comfortable Sedan and SUV limousine pick up where the driver Meet and Greet in the arrival hall with name sign and reach your desired destination. Booking early for our services to get an elegant service using our luxury car avoiding standing for hassle of taxis or shuttle services. We have a range of vehicles for couple or family pick-up from the airport, hotel, or private address. If you are looking in Adelaide for comfortable and luxurious services, no other company in the city can provide like our limousine Service. When customers click on airport this will come out drivers, to ride have the comfort and safety of a late-model, luxury cars of Adelaide Airport Transfer will provide services you can rely on and enjoy.`,
  },
  {
    serviceName: "Adelaide Limo Services",
    description: `Adelaide Limo is a part of Corporate Car Services. This is a great service to reach you for your expected destination whether it could be a dinner party, night on the town, or anniversary. Limousine Service. Planning to go to the Big Game with your buddies or attending an upcoming Concert, Corporate Gaming Events, and New Year Eve? Our chauffeur will be responsible for getting you home safely when you have had extra drinks. We only provide service sedans and SUVs. We will pick you up, get you to your event, and bring you home again, ensuring a hassle-free journey. Our chauffeur provides an experienced service that makes it feel like a special day to remember, enjoyable in style and luxury.`,
  },
  {
    serviceName: "Adelaide Chauffeur Service",
    description: `Adelaide corporate Service provides car services at very competitive prices for corporate travelers in the corporate community. Our chauffeur works diligently to provide the very best chauffeured limousine service. We provide transportation for corporate occasions, business meetings, seminars, business launches, and corporate gaming functions. Our reservation agents are happy to provide detailed information on the features and spaciousness of our limousines. You are guaranteed that your booked car will be on time according to your booking time, ensuring a stress-free experience to reach your scheduled appointment. Our first priority is zero percentage tolerance about the booking time for your pick-up.`,
  },
  {
    serviceName: "Adelaide Tour Pickup",
    description: `We offer services to look around National Park and the countryside where you can hire our limousine for a day or hourly basis with the driver for your hassle-free journey. Our ultimate tour provides a spectacular adventure using our professional chauffeurs and luxury cars. Our drivers are always timely and organized people who are respectful of our valued clients. We never keep our clients waiting for the car to arrive, and our goal is to provide luxury and relaxation. Adelaide Tours offers private, personal guided tours for those who want to visit popular places in Northern Territory. All tours are limited to a maximum of four and six passengers, with luxury 4WD, SUV, and Sedan.`,
  },
];

export default function Adelaide() {
  return (
    <>
      <Banner isSubpage={true} />
      <div className="container mx-auto py-10 px-10">
        <div className="flex flex-col items-start justify-center">
          <Image src={adelaideImg} width={700} alt="sydney" className="mb-5" />
          <div>
            <Title text="Adelaide Tours & Travels" className="mb-4" />
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Adelaide Limousine Services proposes you high-quality limo
              service. Wherever you are and whenever you need a limo, we are
              ready to provide you the best Adelaide limo services; it’s our
              main mission. Nowadays, Adelaide limo is a service in demand, and
              while there are other limo companies around, you need to find only
              one to trust. It will be a great reward for us if you choose
              Adelaide limo services.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Understanding all needs of people in transportation issues, we
              work with a combination of the most modern technologies,
              responsibility, and customer orientation. When you need to get to
              the airport quickly, Adelaide airport limo is exactly what you
              need. Best cars, experienced chauffeurs, and luxury transportation
              are guaranteed. Don’t worry about the possibility of being late;
              we’ll do everything to get you to your destination on time. A ride
              with our limo service will seem pleasant and smooth. You won’t be
              mistaken by ordering Adelaide airport limo.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              If you need any other kind of transportation, we are always at
              your service. Parties, weddings, shopping tours, business meetings
              – you choose the limo, and we make your event unforgettable. In
              case you don’t find a necessary service or still have questions,
              feel free to contact us. Adelaide Limousine is looking forward to
              becoming your number one limo service.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Adelaide Airport Transfer
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Adelaide Airport Transfer provides comfortable Sedan and SUV
              limousine pickups where the chauffeur meets & greets you at any
              terminal with your name sign, assists with your luggage, and
              ensures you reach your destination safely. Our chauffeurs will be
              waiting in the baggage claims area (for domestic flights), holding
              your name sign on an iPad or printed paper. With Express Pick-up
              (Curbside Pickup), our professional chauffeurs will wait for you
              in the designated limo parking area by the airport and touch base
              with you when your flight lands.
            </p>

            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Booking early ensures an elegant experience using our luxury cars
              and avoids the hassle of taxis or shuttle services. We offer a
              wide range of vehicles for couple or family pickups from the
              airport, hotel, or private address. If you are looking for
              comfortable and luxurious services in Adelaide, no other company
              can match what we offer. Our late-model luxury cars at Adelaide
              Airport Transfer will provide reliable transportation services you
              can truly rely on and enjoy.
            </p>

            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Our limousine provides reliable and cost-efficient luxury airport
              transportation while prioritizing safety. We ensure that our cars
              are highly roadworthy, and our professional chauffeurs are
              knowledgeable about airport regulations governing passenger
              pickups and drop-offs. Whether you need to transfer a group from a
              local airport to a meeting site or are planning a vacation, we
              offer a wide range of accommodations from Australian Holden
              Caprice (Top of the Range) to European Luxury vehicles.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Our Extra Services
            </h2>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              We monitor all flights for you and our staff to ensure that the
              chauffeur is there to meet you on time. Our extra services to
              cater to you are as follows:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              <li>Express Pick-up</li>
              <li>SMS receive on landing</li>
              <li>Meet & Greet</li>
              <li>24 Hours / 365 Days Service</li>
              <li>VIP Service</li>
              <li>Flight tracking service</li>
              <li>We are fully licensed and insured</li>
              <li>Experienced chauffeur</li>
              <li>Immaculate luxury chauffeured cars</li>
              <li>Government accredited chauffeur</li>
              <li>Availability for child and booster seats</li>
              <li>Feeling luxury</li>
              <li>Light refreshment when you board</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10 px-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {adelaideServices.map((service, index) => (
          <div
            key={index}
            className="bg-[#eaeaea] shadow-lg overflow-hidden flex flex-col"
          >
            <div className="p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {service.serviceName}
              </h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
