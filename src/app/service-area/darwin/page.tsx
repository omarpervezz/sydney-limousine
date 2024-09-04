import React from "react";
import Banner from "@/components/banner";
import Image from "next/image";
import darwinImg from "@/public/darwin.jpg";
import Title from "@/components/title";

type ServiceDetails = {
  serviceName: string;
  description: string;
};

const darwinServices: ServiceDetails[] = [
  {
    serviceName: "Darwin Airport Transfer",
    description: `Darwin Airport Transfer is a comfortable Sedan and SUV limousine pick up where the driver meets and greets you in the arrival hall with a name sign and takes you to your desired destination. Booking early for our services ensures you get an elegant service using our luxury car, avoiding the hassle of taxis or shuttle services. We offer a range of vehicles for couple or family pick-ups from the airport, hotel, or private address. If you are looking in Darwin for comfortable and luxurious services, no other company in the city can match our limousine service. Our late-model luxury cars of Darwin Airport Transfer will provide you with transportation services you can rely on and enjoy.`,
  },
  {
    serviceName: "Darwin Limo Transfer",
    description: `Darwin Limo is a part of Corporate Car Services. This is a great service to reach you for your expected destination, whether it’s a dinner party, night on the town, or an anniversary. Planning to go to the Big Game with your buddies or attend an upcoming Concert, Corporate Gaming Events, or New Year Eve? Our chauffeur will be responsible for getting you home safely when you’ve had extra drinks. We only provide service sedans and SUVs. We will pick you up, get you to your event, and bring you home again, ensuring a hassle-free journey. Our Chauffeur provides an experienced service that makes it feel like a special day to remember, enjoyable in style and luxury.`,
  },
  {
    serviceName: "Darwin Corporate Transfer",
    description: `Darwin Corporate Transfer provides limo service through luxury Sedan and SUV. Darwin Corporate Service provides car services at very competitive prices for corporate travelers in the corporate community. Our chauffeur works diligently to provide you with the very best chauffeured limousine service. We provide transportation for corporate occasions, business meetings, seminars, business launches, and corporate gaming functions. Our reservation agents provide detailed information about the features and spaciousness of our limousines. You are guaranteed that your booked car will be on time according to your booking time, ensuring a stress-free experience to reach your scheduled appointment. Our priority is zero tolerance for delays regarding your pick-up.`,
  },
  {
    serviceName: "Darwin Tour Service",
    description: `We offer services for sightseeing tours around National Park, Florence Falls, and Bulley Rockhole, where you can hire our limousine for a day or on an hourly basis with a driver for a hassle-free journey. Our ultimate tour provides a spectacular adventure using our professional chauffeurs and luxury cars. Our drivers are always timely and organized, respectful of our valued clients. We never keep clients waiting, and our goal is to provide luxury and relaxation. Darwin Tours offers private, personal guided tours for those who want to visit popular places in Northern Territory. All tours are limited to a maximum of four to six passengers.`,
  },
];

export default function Darwin() {
  return (
    <>
      <Banner isSubpage={true} />
      <div className="container mx-auto py-10 px-10">
        <div className="flex flex-col items-start justify-center">
          <Image src={darwinImg} width={700} alt="sydney" className="mb-5" />
          <div>
            <Title text="Darwin Tours & Travels" className="mb-4" />
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Darwin Limousine Service is one of the interstate services of
              Sydney Limousine Service, and we provide similar services in
              Darwin. What you save from hiring an affordable limo service
              generally depends on why you’re hiring one, and it is the solution
              to use our services. For many events, it’s not unheard of to pay
              in excess of expensive car parking costs. With a certified
              limousine service, you only have to worry about getting in and out
              of the door. Everything else is taken care of. The limo driver
              handles all of that, leaving you to enjoy your event, flight, or
              any other reason you may choose to use our affordable limo
              service.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Our passengers’ safety is our highest priority. We demand
              excellence from each driver and insist on superior accrediting and
              certification. Current licensing is maintained at all times, and
              drivers must continually satisfy safe-driving requirements. Our
              vehicles also go through stringent testing. The fleet is run
              through necessary inspections that satisfy all local, state, and
              federal regulations. From pick-up to drop-off, Darwin Limo keeps
              you comfortable and safe.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Darwin Airport Transfer
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Darwin Airport Transfer offers comfortable Sedan and SUV limousine
              pickups, where the chauffeur meets & greets you at any terminal
              with your name sign, assists with your luggage, and ensures you
              reach your destination safely. Our chauffeurs will be waiting at
              the baggage claims area (for domestic flights), holding your name
              sign on an iPad or printed paper. With Express Pick-up (Curbside
              Pickup), our professional chauffeur will wait for you in the
              designated limo parking area by the airport and touch base with
              you when your flight lands.
            </p>

            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Booking early ensures an elegant experience using our luxury cars
              and avoids the hassle of taxis or shuttle services. We offer a
              range of vehicles for couples or family pickups from the airport,
              hotel, or private addresses. If you are looking for comfortable
              and luxurious services in Darwin, no other company in the city can
              match our limousine service. Our late-model luxury cars of Darwin
              Airport Transfer will provide reliable transportation services you
              can rely on and enjoy.
            </p>

            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Our limousine provides reliable and cost-efficient luxury airport
              transportation while prioritizing safety. We ensure that our cars
              are highly roadworthy, and our professional chauffeurs are
              knowledgeable about airport regulations for passenger pickups and
              drop-offs. Whether you need to transfer a group from a local
              airport to a meeting site or are planning a vacation, we offer a
              wide range of accommodations from Australian Holden Caprice (Top
              of the Range) to European Luxury vehicles.
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
        {darwinServices.map((service, index) => (
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
