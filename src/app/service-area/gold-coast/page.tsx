import React from "react";
import Banner from "@/components/banner";
import Image from "next/image";
import goldCoastImg from "@/public/gold-coast.jpg";
import Title from "@/components/title";

type ServiceDetails = {
  serviceName: string;
  description: string;
};

const goldCoastServices: ServiceDetails[] = [
  {
    serviceName: "Gold Coast Airport Service",
    description: `Gold Coast Airport Transfer is a comfortable Sedan and SUV limousine pick up where the driver meets and greets you in the arrival hall with a name sign and takes you to your desired destination. Booking early for our services ensures you get an elegant service using our luxury car, avoiding the hassle of taxis or shuttle services. We offer a range of vehicles for couple or family pick-ups from the airport, hotel, or private address. If you are looking in Gold Coast for comfortable and luxurious services, no other company in the city can match our limousine service. When customers click on the airport option, our drivers will provide the comfort and safety of late-model luxury cars, ensuring a reliable transportation experience.`,
  },
  {
    serviceName: "Gold Coast Limo Services",
    description: `Gold Coast Limo is a part of Corporate Car Services. This is a great service to reach your destination, whether it’s a dinner party, night on the town, or an anniversary. Planning to go to the Big Game with your buddies or attend an upcoming Concert, Corporate Gaming Events, or New Year Eve? Our chauffeur will be responsible for getting you home safely when you’ve had extra drinks. We only provide service sedans and SUVs. We will pick you up, get you to your event, and bring you home again, ensuring a hassle-free journey. Our Chauffeur provides an experienced service that makes it feel like a special day to remember, enjoyable in style and luxury.`,
  },
  {
    serviceName: "Gold Coast Corporate Chauffeur",
    description: `Gold Coast Corporate Service provides car services at very competitive prices for corporate travelers in the corporate community. Our chauffeurs work diligently to provide the very best chauffeured limousine service. We provide transportation for corporate occasions, business meetings, seminars, business launches, and corporate gaming functions. Our reservation agents provide detailed information about the features and spaciousness of our limousines. You are guaranteed that your booked car will be on time according to your booking, ensuring a stress-free experience to reach your scheduled appointment. Our first priority is zero tolerance for delays.`,
  },
  {
    serviceName: "Gold Coast Tour Service",
    description: `We offer services for sightseeing tours and the countryside, where you can hire our limousine for a day or on an hourly basis with a driver for a hassle-free journey. Our ultimate tour provides a spectacular adventure using our professional chauffeurs and luxury cars. Our drivers are always timely and organized, respectful of our valued clients. We never keep our clients waiting, and our goal is to provide a luxury and relaxing experience. Gold Coast Tours offers private, personal guided tours for those who want to visit popular places in the countryside. Tours are limited to a maximum of four to six passengers, traveling in luxury 4WD, SUV, or Sedan.`,
  },
];

export default function GoldCoast() {
  return (
    <>
      <Banner isSubpage={true} />
      <div className="container mx-auto py-10 px-10">
        <div className="flex flex-col items-start justify-center">
          <Image src={goldCoastImg} width={700} alt="sydney" className="mb-5" />
          <div>
            <Title text="Gold Coast Tours & Travels" className="mb-4" />
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              We are confident that we provide the lowest rates in Gold Coast as
              well as the outer Gold Coast area. If you ever find a deal better
              than ours, please let us know when you make your reservation, and
              we will give you a lower rate or match it. Our selective fleet,
              consisting of over Holden Caprice, Chrysler 300 Sedans, and
              Genesis European SUV, offers a wide variety of choices. Our
              friendly, knowledgeable staff is ready to help you 24 hours a day,
              and our professional, courteous drivers are ready to meet all your
              ground transportation needs. For over 20 years, our priority has
              been to provide a professional ride that is convenient, reliable,
              safe, affordable, and clean, while exceeding your highest
              expectations.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              The instant quotation is an easy and practical way to estimate
              your rate to your destination. Simply choose your location/city
              from the first column and check the rate under your airport
              abbreviation stated. You may also type your location in the search
              box to find the rate to your destination.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Gold Coast Limousine Services
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Gold Coast Limousine Services is one of the private exclusive
              airport transfers, limousine & chauffeur service companies. We
              offer a reasonable price for luxury airport transfer solutions.
              The company offers several service types for customers. Gold Coast
              Limousine Services provides interstate city transfers in Australia
              with luxury private exclusive transfers and transportation fleet
              of vehicles, offering the best and most competitive fares. We
              operate our services with licensed and accredited operators and
              drivers by the Queensland Transport Department, and all our cars
              are registered as public passenger vehicles that are suitably
              insured. All our drivers are professionally experienced and highly
              trained.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Gold Coast Airport Transfer
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Gold Coast Airport Transfer provides comfortable Sedan and SUV
              limousine pickups where the chauffeur meets & greets you at any
              terminal with your name sign, assists you with your luggage, and
              ensures you reach your destination safely. Our chauffeurs will
              wait at the baggage claims area (for Domestic Flights arrival),
              holding your name sign on an iPad or printed paper. With Express
              Pick-up (Curbside Pickup), our professional chauffeurs wait for
              you in the designated limo parking area by the airport and touch
              base with you when your flight lands.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Booking early ensures an elegant experience using our luxury cars,
              avoiding the hassle of taxis or shuttle services. We offer a range
              of vehicles for couple or family pickups from the airport, hotel,
              or private address. If you are looking for comfortable and
              luxurious services in Gold Coast, no other company can provide
              services like our limousine service. Our late-model luxury cars of
              Gold Coast Airport Transfer will provide transportation services
              you can rely on and enjoy.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Our limousine provides reliable and cost-efficient luxury airport
              transportation while prioritizing safety. We ensure that our cars
              are highly roadworthy, and our professional chauffeurs are
              knowledgeable about airport regulations for passenger pickups and
              drop-offs. Whether you need to transfer a group from a local
              airport to a meeting site or are planning a vacation to your
              favorite destination, we offer a wide range of accommodations from
              Australian Holden Caprice (Top of the Range) to European Luxury
              vehicles.
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
        {goldCoastServices.map((service, index) => (
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
