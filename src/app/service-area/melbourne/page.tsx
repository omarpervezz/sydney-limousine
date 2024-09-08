import React from "react";
import Banner from "@/components/banner";
import Image from "next/image";
import melbourne from "@/public/melbourne.jpg";
import Title from "@/components/title";

type ServiceDetails = {
  serviceName: string;
  description: string;
};

const melbourneServices: ServiceDetails[] = [
  {
    serviceName: "Melbourne Airport Transfer",
    description: `Melbourne Airport Transfer is a comfortable Sedan and SUV limousine pick up where the chauffeur meets you in the arrival hall or language carousel area of Terminal with your name sign, assists you with your luggage, and gets you to your destination safely. Keep an eye on the baggage claims area (for Domestic Flights arrival) for our chauffeur, who will be waiting for you and holding your name sign on iPad or printed paper. Our professional chauffeur will take care of all about your stress-free transfer. You will get SMS during touch base with you when your flight lands. So book our airport transfer services to get an elegant service using our luxury car avoiding standing for hassle of public transport or taxi services.`,
  },
  {
    serviceName: "Melbourne Limo Service",
    description: `Melbourne Limo is a part of Corporate Car Services. This is a great service to reach you for your expected destination whether it could be a dinner party, night on the town, or anniversary. Planning to go to the Big Game with all your buddies or attending an upcoming Concert, Corporate Gaming Events, and New Year Eve. Our chauffeur will be responsible to get you home safely when you have had an extra drink. We only provide service sedans and SUVs. We will pick you up, get you to your event - right to the front entrance, and bring you home again, ensuring a hassle and bustle free journey. Our chauffeur is here to provide an experienced service that makes you feel like it is a special day to remember & enjoy in style and luxury with our vehicles.`,
  },
  {
    serviceName: "Melbourne Corporate Transfer",
    description: `Melbourne Corporate Car Service provides car services at very competitive prices for corporate travelers in the corporate community. Our chauffeur works diligently to provide you with the very best chauffeured limousine service. We provide transportation for all corporate occasions, business meetings, seminars, business launches, and corporate gaming functions. Our reservation agents are happy to provide you with detailed information on the features and spaciousness of our limousines. You are guaranteed that your booked car will be on time according to your booking, ensuring a stress-free arrival at your scheduled appointment. Our first priority is zero tolerance for delays for your pick up.`,
  },
  {
    serviceName: "Melbourne Tour Services",
    description: `We do have services to look around National Park and the countryside where you can hire our limousine for a day or hourly basis with the driver for your hassle-free journey. Our ultimate tour offers a complete, spectacular adventure using our professional chauffeurs and luxury cars. Our drivers are always timely and organized people who respect our valued clients. We never keep our clients waiting for cars to arrive. Our goal is to provide our clients with the utmost luxury and relaxation. Melbourne Tours offers a number of private, personal guided tours for people who would like to visit popular places in Victoria. All tours are limited to a maximum of four to six passengers.`,
  },
];

export default function Melbourne() {
  return (
    <>
      <Banner isSubpage={true} />
      <div className="container px-8 md:px-8 lg:px-12 xl:px-16 mx-auto py-10">
        <div className="flex flex-col items-start justify-center">
          <Image src={melbourne} width={700} alt="sydney" className="mb-5" />
          <div>
            <Title text="Melbourne Tours & Travels" className="mb-4" />
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Melbourne Transfer Services offers affordable car and limo service
              you can rely on. As the number one premier limousine service for
              Corporate Transfer, Airport Transfer, and Sightseeing Tours, our
              Melbourne airport car service fulfills all your transportation
              needs in the corporate community and personal service neighborhood
              area. We are your number one choice for exclusive ground
              transportation service in Melbourne.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              We deliver complete choices of airport transportation, hourly
              charters, point-to-point, and corporate travel in the limo service
              industry. With over a decade of experience, our reputation for
              excellence speaks for itself. We provide wide transportation
              services in the Melbourne Metropolitan area.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Our passengers’ safety is our highest priority. We demand
              excellence from each driver and insist on superior accrediting and
              certification. Current licensing is maintained at all times, and
              drivers must continually satisfy safe-driving requirements. Our
              vehicles are always kept roadworthy by an inspection team, and the
              fleet undergoes necessary inspections that satisfy all local,
              state, and federal regulations. From pickup to drop-off, Melbourne
              Limo keeps you comfortable and safe.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Melbourne Airport Transfer
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Melbourne Airport Transfer offers comfortable Sedan and SUV
              limousine pickups where the chauffeur greets you at any Terminal
              with your name sign, assists you with your luggage, and ensures
              you reach your destination safely. Our chauffeurs will be waiting
              at the baggage claims area (for Domestic Flights arrival) with
              your name sign on an iPad or printed paper. With Express Pick-up
              (Curbside Pickup), our professional chauffeurs will wait in the
              designated Limo parking area by the airport and touch base with
              you when your flight lands.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Booking early for our services ensures an elegant experience using
              our luxury cars, avoiding the hassle of taxis or shuttle services.
              We offer a range of vehicle options for couples or family pick-ups
              from the airport, hotel, or private addresses. No other company in
              the city can provide the luxurious services that Melbourne
              Limousine Service offers.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Safety and Comfort
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Our limousine service provides reliable and cost-efficient luxury
              airport transportation with a focus on safety. Our cars are highly
              roadworthy, and our professional chauffeurs are well-versed in
              airport regulations governing passenger pickups and drop-offs.
              Whether you&apos;re transferring a group from a local airport to a
              meeting site or planning a vacation to your favorite holiday
              destination, we can provide accommodations ranging from the
              Australian Holden Caprice (Top of the Range) to European Luxury
              vehicles.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Our Extra Services
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We monitor all flights for you and our staff to ensure that the
              chauffeur is there to meet you on time. Our extra services to
              cater to you are as follows:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
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
      <div className="container mx-auto py-10 px-5 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {melbourneServices.map((service, index) => (
          <div
            key={index}
            className="bg-[#eaeaea] rounded-lg overflow-hidden flex flex-col"
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
