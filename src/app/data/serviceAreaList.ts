import sydney from "@/public/sydney.jpg";

type ServiceDetails = {
  title: string;
  description: string;
  features: string[];
};

type ServiceAreaList = {
  id: string;
  slug: string;
  city: string;
  servicesName: string;
  title: string;
  description: string;
  services: {
    airportTransfer: ServiceDetails;
    corporateTransfer?: ServiceDetails;
    limoService?: ServiceDetails;
    tourServices?: ServiceDetails;
  };
  image: string;
};

const serviceAreaList: ServiceAreaList[] = [
  {
    id: "1",
    slug: "melbourne-tours-travels",
    city: "Melbourne",
    servicesName: "Sydney Limo Hire Services",
    title: "Melbourne Tours & Travels",
    description:
      "Melbourne Transfer Services affordable car and limo service ...",
    services: {
      airportTransfer: {
        title: "Melbourne Airport Transfer",
        description:
          "Melbourne Airport Transfer is a comfortable Sedan and SUV limousine ...",
        features: [
          "Express Pick-up",
          "SMS receive on landing",
          "Meet & Greet",
          "24 Hours / 365 Days Service",
          "VIP Service",
          "Flight tracking service",
          "We are fully licensed and insured",
          "Experienced chauffeur",
          "Immaculate luxury chauffeured cars",
          "Government accredited chauffeur",
          "Availability for child and booster seats",
          "Feeling luxury",
          "Light refreshment when you board",
        ],
      },
      corporateTransfer: {
        title: "Melbourne Corporate Transfer",
        description:
          "Melbourne Corporate Car Service provides car services at very competitive prices ...",
        features: [
          "Transportation for all corporate occasions",
          "Reservation agents available",
          "Detailed information of features",
          "Zero percentage tolerance about booking time",
        ],
      },
      limoService: {
        title: "Melbourne Limo Service",
        description: "Melbourne Limo is a part of Corporate Car Services ...",
        features: [
          "Available for special days and events",
          "Experienced service",
          "Provides only Sedan and SUV",
          "Pick-up and drop service",
        ],
      },
      tourServices: {
        title: "Melbourne Tour Services",
        description:
          "We do have services also to look around National Park and country side ...",
        features: [
          "Private and personal guided tours",
          "Tours limited to a maximum of four and six passengers",
        ],
      },
    },
    image: sydney.src,
  },
];

export default serviceAreaList;
