import React from "react";
import Banner from "@/components/banner";
import Image from "next/image";
import perthImage from "@/public/perth.jpg";
import Title from "@/components/title";

type ServiceDetails = {
  serviceName: string;
  description: string;
};

const perthServices: ServiceDetails[] = [
  {
    serviceName: "Perth Airport Transfer",
    description: `Perth Transfer is a comfortable Sedan and SUV limousine pick up where the driver Meet and Greet in the arrival hall with name sign and reach your desired destination. Booking early for our services ensures you get an elegant service using our luxury car, avoiding standing for hassle of taxis or shuttle services. We have a range of vehicle selections for couple or family pick up from the airport, hotel, or private address. If you are looking for comfortable and luxurious services in Perth, no other company in the city can match our limousine Service. When customers click on 'airport,' our drivers will provide you the comfort and safety of late-model luxury cars. Perth Airport Transfer provides excellent transportation services when you hire a limo.`,
  },
  {
    serviceName: "Point to Point",
    description: `Perth Limo is a part of Corporate Car Services. This is a great service to reach you for your expected destination, whether it could be a dinner party, night on the town, or an anniversary. Planning to go to the Big Game with your buddies or attend an upcoming Concert, Corporate Gaming Events, and New Year Eve? Our chauffeur will be responsible to ensure you get home safely when you have had extra drinks. We provide only service sedans and SUVs. We will pick you up, get you to your event, right to the front entrance, and bring you back home, making your journey hassle and bustle free. Our Chauffeur is here to provide you with an experienced service that feels like a special day to remember & enjoyable in style & luxury.`,
  },
  {
    serviceName: "Perth Corporate Transfer",
    description: `Perth Corporate Service provides car services at very competitive prices for corporate travelers in the corporate community. Our chauffeurs work diligently to provide the best chauffeured limousine service. We provide transportation for all corporate occasions, business meetings, seminars, business launches, and corporate gaming functions. Our reservation agents are happy to provide you with detailed information on the features and spaciousness of our limousines. You are guaranteed that your booked car will be on time according to your booking, ensuring a stress-free experience to reach your scheduled appointment. Our first priority is zero tolerance for delays when it comes to your pick-up.`,
  },
  {
    serviceName: "Tour Services",
    description: `You can book Perth Tour Services to explore National Park, Winery, and countryside, where you can hire our limousine for a day or on an hourly basis with a driver for your hassle-free journey. Our ultimate tour has a complete spectacular adventure experience using our professional chauffeurs and luxury cars. Our drivers are always timely and organized, respectful of our valued clients. We never keep our clients waiting for a car, and our goal is to provide clients with luxury and relaxation. Perth Tours offers a number of private, personal guided tours for people who want to visit popular places in South Australia. Luxury vehicles, including four and six-seater options like sedans, 4WD Mercedes GL & R Class, and Audi Q7, are available.`,
  },
];

export default function Perth() {
  return (
    <>
      <Banner isSubpage={true} />
      <div className="container mx-auto py-10 px-10">
        <div className="flex flex-col items-start justify-center">
          <Image src={perthImage} width={700} alt="sydney" className="mb-5" />
          <div>
            <Title text="Perth Tours & Travels" className="mb-4" />
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              When you come to visit Perth, we are here to cater to your
              service. Whether you need an airport transfer, a business trip, a
              corporate car or limo, or a simple point-to-point ride, our
              professional chauffeurs are standing by.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Perth Limo Services offers a wide range of luxury Sedans and SUVs
              to match your business and personal needs. Our company is well
              known in the area for being the most responsive, convenient, and
              professional. When you need comfortable and reliable
              transportation, and other services seem too expensive, give us a
              call. Our chauffeurs will get you wherever you need to go at an
              affordable price without sacrificing quality or comfort. Our
              number one priority is to exceed your expectations—we make sure to
              fully understand your requests and preferences. Our Limo Service
              team works hard to earn your trust. We are always punctual and go
              the extra kilometer to ensure you enjoy your travel experience
              with us. You will never have to wait outside for a car, as our
              professional driver will be at your location at the right time.
              Our team is fully prepared to handle any situation and ensures the
              best outcomes for your transportation needs. With more than 20
              years of experience driving in the greater Perth area, you can be
              sure you&apos;ll be well taken care of by Perth Limousine
              Services.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Perth Airport Transfer
            </h3>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Perth Airport Transfer provides comfortable Sedan and SUV
              limousine pickups where the chauffeur meets & greets you at any
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
              We offer a range of vehicles for couple or family pickups from the
              airport, hotel, or private address. If you&apos;re looking for
              comfortable and luxurious services in Perth, no other company in
              the city can provide the level of service we offer. When customers
              click on airport, they will meet our drivers, ready to provide the
              comfort and safety of late-model luxury cars. Perth Airport
              Transfer offers transportation services you can truly rely on and
              enjoy.
            </p>
            <p className="text-gray-600 text-base md:text-base lg:text-lg leading-relaxed mb-6">
              Our Limousine provides reliable and cost-efficient luxury airport
              transportation, prioritizing safety for our clients. We ensure
              that our cars are highly roadworthy. Our professional chauffeurs
              are knowledgeable about airport regulations for passenger pickups
              and drop-offs. Whether you need to transfer a group from a local
              airport to a meeting site or are planning a vacation to your
              favorite destination, we offer a wide range of accommodations,
              from the Australian Holden Caprice (Top of the Range) to European
              Luxury vehicles.
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
        {perthServices.map((service, index) => (
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
