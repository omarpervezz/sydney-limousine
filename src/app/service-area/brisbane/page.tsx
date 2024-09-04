import React from "react";
import Banner from "@/components/banner";
import Image from "next/image";
import brisbaneImg from "@/public/brisbane.jpg";
import Title from "@/components/title";

type ServiceDetails = {
  serviceName: string;
  description: string;
};

const brisbaneServices: ServiceDetails[] = [
  {
    serviceName: "Brisbane Airport Limousine",
    description: `Brisbane Airport Transfer is a comfortable Sedan and SUV limousine pick up where the driver Meet and Greet in the arrival hall with name sign and reach your desired destination. Booking early for our services to get an elegant service using our luxury car avoiding standing for hassle of taxis or shuttle services. We do have range of selection of vehicle for couple or family pick up from the airport or hotel or private address. If you are on the looking in Brisbane for comfortable and luxurious services as no other company in the city can provide like our limousine Service. When customer click on airport this will come out drivers, to ride have in the comfort and safety of a late-model, luxury cars of Brisbane Airport Transfer will provide you with transportation services you can truly rely on and enjoy.`,
  },
  {
    serviceName: "Point to Point Transfer",
    description: `Brisbane Limo is a part of Corporate Car Services. This is a great service to reach you for your expected destination where it could be a dinner party, night on town or anniversary. Limousine Service. Planning to go to the Big Game with all your buddies or attending an upcoming Concert, Corporate Gaming Events and New Year Eve. Our chauffeur will be responsible to reach your home safely when you are have extra drink. We do have only provide service sedan and SUV .We will pick you up, get you to your event - right to the front entrance and bring you home again, so your journey will be hustle and bustle free. Our Chauffeur are here to provide with experienced service that makes feel like it is a special day to remember & enjoyable in style & luxurious by our vehicles.`,
  },
  {
    serviceName: "Brisbane Corporate Transfer",
    description: `Brisbane corporate Service provides car services at very competitive prices for corporate travelers in the corporate community. Our chauffeur work diligently to provide you with the very best chauffeured limousine service. We provide transportation for all corporate occasions, business meeting, seminars, business launch and corporate gaming functions. Our reservation agents are happy to provide you with detailed information of the features and spaciousness of our limousines. You are guaranteed as your booked car will be on time according to you booking time which you feel stress fee to reach your schedule appointment as our first priority is zero percentage tolerance about the booking time for your pick up.`,
  },
  {
    serviceName: "Brisbane Tour Services",
    description: `We do have services also to look around Tropical Queensland country side where you can hire our limousine for a day or hourly basis with the driver for your hassle and bustle free. Our ultimate tour has complete spectacular adventure unfolds experience using our professional chauffeur and luxury cars. . Our drivers are always timely and organized people who are respectful of our valued clients. We never keep our clients waiting for car to arrive and our goal is to provide our clients with the luxury and relaxation atmosphere. Brisbane Tours as we offer a number of private, personal guided tours for people who would like to visit popular places in Queensland. All tours are limited to a maximum of four and six passengers.`,
  },
];

export default function Brisbane() {
  return (
    <>
      <Banner isSubpage={true} />
      <div className="container mx-auto py-10 px-10">
        <div className="flex flex-col items-start justify-center">
          <Image src={brisbaneImg} width={700} alt="sydney" className="mb-5" />
          <div>
            <Title text="Brisbane Tours & Travels" className="mb-4" />
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Whether you are visiting Brisbane or leaving, and need a fully
              insured, dependable, professional car service to pick you up or
              drop you off at Brisbane Airport or Gold Coast Airport, we can
              help. We monitor your flight every 30 minutes so you know we will
              be there waiting for you when you arrive. With more than 20 years
              of experience driving in the greater Brisbane and Gold Coast
              areas, you can be confident that Brisbane Limousine Services will
              take excellent care of you.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Corporate Services
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Business travelers heading to Brisbane can count on Brisbane
              Limousine Services for reliable chauffeured transportation for
              transfers, business meetings, events, conferences, and roadshows.
              Our 24/7 Reservation and Dispatch phone line, combined with web
              access to your account, instant confirmation emails, and timely
              reservation receipts, ensures a hassle-free experience every time.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Group Travel
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Whether for Business or Pleasure, individually or in a group,
              Brisbane Limousine Services offers a variety of vehicles,
              including luxury Sedans, European SUVs, and Mercedes Vans (Viano
              or V Class) that can accommodate up to 8 people. Our services are
              ideal for Airport Transfers, Corporate Events, Conferences,
              Private City Tours, Concerts, and Sporting Events.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Brisbane Airport Transfer
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Brisbane Airport Transfer provides comfortable Sedan and SUV
              limousine pickups where our chauffeur will meet & greet you at any
              terminal with your name sign, assist with your luggage, and ensure
              a safe journey to your destination. Our chauffeurs will be waiting
              in the baggage claims area (for domestic flights) and will hold
              your name sign on an iPad or printed paper. With Express Pickup
              (Curbside Pickup), our professional chauffeur will wait for you in
              the designated limo parking area by the airport and touch base
              with you when your flight lands.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Booking early ensures an elegant experience using our luxury cars
              and avoids the hassle of taxis or shuttle services. We offer a
              wide range of vehicles for couples or family pickups from the
              airport, hotel, or private addresses. If you are looking for
              comfortable and luxurious services in Brisbane, no other company
              in the city can match our Limousine Service.
            </p>

            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Our limousine provides reliable and cost-efficient luxury airport
              transportation while prioritizing safety. We ensure that our cars
              are highly roadworthy and our professional chauffeurs are
              knowledgeable about airport regulations governing passenger
              pickups and drop-offs. Whether you need to transfer a group from a
              local airport to a meeting site or are planning a vacation, we can
              accommodate your needs with a range of vehicles from Australian
              Holden Caprice (Top of the Range) to European Luxury vehicles.
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
        {brisbaneServices.map((service, index) => (
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
