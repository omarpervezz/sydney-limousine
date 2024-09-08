import React from "react";
import Banner from "@/components/banner";
import Image from "next/image";
import hobartImg from "@/public/canberra.jpg";
import Title from "@/components/title";

type ServiceDetails = {
  serviceName: string;
  description: string;
};

const hobartServices: ServiceDetails[] = [
  {
    serviceName: "Hobart Airport Transfer",
    description: `Hobart Airport Transfer is a comfortable Sedan and SUV limousine pick up where the driver Meet and Greet in the arrival hall with a name sign to reach your desired destination. Booking early for our services ensures you get an elegant service using our luxury car, avoiding standing for the hassle of taxis or shuttle services. We have a range of vehicles for couple or family pick-up from the airport, hotel, or private address. If you are looking for comfortable and luxurious services in Hobart, no other company in the city can match our limousine service. Our late-model luxury cars at Hobart Airport Pickup will provide reliable transportation services.`,
  },
  {
    serviceName: "Hobart Limousine",
    description: `Corporate Car Services also provide Hobart Limousine Service in Hobart, where this is a great service to reach you for your expected destination. You can book us for your dinner party, night on town, or anniversary. Planning to go to the Big Game with your buddies or attend an upcoming Concert, Corporate Gaming Events, and New Year Eve? Our chauffeur will be responsible for getting you home safely when you have had extra drinks. We only provide service sedans and SUVs. We will pick you up, get you to your event, and bring you home again, ensuring a hassle and bustle-free journey. Our chauffeur provides experienced service that makes it feel like a special day to remember & enjoy in style and luxury.`,
  },
  {
    serviceName: "Hobart Corporate Limos",
    description: `Hobart Corporate Service provides car services at very competitive prices for corporate travelers in the corporate community. Our chauffeurs work diligently to provide the best chauffeured limousine service. We provide transportation for corporate occasions, business meetings, seminars, business launches, and corporate gaming functions. Our reservation agents are happy to provide detailed information about the features and spaciousness of our limousines. You are guaranteed that your booked car will be on time according to your booking time, ensuring you reach your appointment stress-free. Our priority is zero tolerance for delays regarding your pick-up.`,
  },
  {
    serviceName: "Hobart Tour Services",
    description: `We offer Hobart Tour Services to explore National Park and countryside areas. You can hire our limousine for a day or hourly basis with a driver for a hassle-free journey. Our ultimate tour provides a complete spectacular adventure using our professional chauffeurs and luxury cars. Our drivers are timely and organized, respectful of our valued clients. We never keep clients waiting, and our goal is to provide clients with luxury and relaxation. Hobart Tours also offers private, personal guided tours for those who want to visit popular places in Northern Territory. All tours are limited to a maximum of four to six passengers.`,
  },
];

export default function Hobart() {
  return (
    <>
      <Banner isSubpage={true} />
      <div className="container px-8 md:px-8 lg:px-12 xl:px-16 mx-auto py-10">
        <div className="flex flex-col items-start justify-center">
          <Image src={hobartImg} width={700} alt="sydney" className="mb-5" />
          <div>
            <Title text="Hobart Tours & Travels" className="mb-4" />
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Operating a limo service in Hobart, we have Luxury Sedans and
              SUVs. From the beginning, we have always been in touch with our
              client’s and passenger’s needs, and today we are committed to
              providing excellent service on the Island. Hobart Limousine prides
              itself on being the best-priced Hobart limo service, and we are
              able to provide quality services at a low rate due to our high
              volume of clients. Our prime services are Corporate Transfer,
              Airport Transfer, Sightseeing Tours, and Weddings. Our experienced
              team members provide professional, courteous, first-class
              limousine services to get you to your destination.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              We provide limousine transportation services in greater Hobart and
              all other areas. Whether your event is a wedding, concert,
              sporting event, or any other special occasion, call us first.
              Traveling for business and want to drive in style to and from the
              airport? Our Elegant Limousine transportation is perfect for you.
              Our transportation service offers reliable travel, privacy, and
              complimentary water. You can work on the go, so don’t worry about
              getting where you’re going – we’ll take you to your destination,
              so you can focus on business. Hobart Limousine is always in
              service for you.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Hobart Airport Transfer
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Hobart Airport Transfer offers a comfortable Sedan and SUV
              limousine pick-up where the chauffeur meets and greets you at any
              Terminal with your name sign, assists you with your luggage, and
              ensures you reach your destination safely. Keep an eye on the
              baggage claims area (for Domestic Flights arrival) for our
              chauffeur, who will be waiting for you, holding your name sign on
              an iPad or printed paper. With Express Pick-up (Curbside Pickup),
              our professional chauffeur will wait for you in the designated
              Limo parking area by the airport and touch base with you when your
              flight lands.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Booking early for our services ensures an elegant experience with
              our luxury cars, avoiding the hassle of taxis or shuttle services.
              We offer a range of vehicles for couple or family pick-ups from
              the airport, hotel, or private address. If you’re looking for
              comfortable and luxurious services in Hobart, no other company in
              the city can provide the same level of service as Hobart
              Limousine. When customers click on airport, they will meet our
              drivers ready to provide the comfort and safety of late-model
              luxury cars. Hobart Airport Transfer offers reliable
              transportation services you can truly rely on and enjoy.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Our Limousine service provides reliable and cost-efficient luxury
              airport transportation, prioritizing safety for our clients. We
              ensure that our cars are highly roadworthy, and our professional
              chauffeurs are knowledgeable about the airports and regulations
              governing passenger pickups and drop-offs. Whether you need to
              transfer a group from a local airport to a meeting site or are
              planning a vacation to your favorite destination, we offer a wide
              range of accommodations, from the Australian Holden Caprice (Top
              of the Range) to European Luxury vehicles.
            </p>
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
        {hobartServices.map((service, index) => (
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
