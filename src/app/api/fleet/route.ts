import { NextResponse } from "next/server";

export async function GET() {
  const fleetData = [
    {
      slug: "genesis-g90",
      name: "Genesis G90",
      price: "$132.0/hr",
      category: "Executive Car",
      pax: "4 Pax",
      luggage: "2 Lugg/3 Pax 3 Lugg",
      features: [
        "Light Refreshment",
        "Leather Interior",
        "Comfortable Leg Space",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/genesis/genesis.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
      rateInfo: [
        {
          label: "Per Hour Rate",
          price: "$132.0/Hour",
          description:
            "*All inclusive of GST, Tolls & Service Fee - 2 hours minimum booking",
        },
        {
          label: "Per Day Rate",
          price: "$1056.0/DAY",
          description:
            "*All inclusive of GST, Tolls & Service Fee - 8 hours of service",
        },
      ],
      viewImage: [
        "https://sydneylimousineservice.com/img/fleets/genesis/left.png",
        "https://sydneylimousineservice.com/img/fleets/genesis/interior.png",
        "https://sydneylimousineservice.com/img/fleets/genesis/front.png",
        "https://sydneylimousineservice.com/img/fleets/genesis/front-right.png",
        "https://sydneylimousineservice.com/img/fleets/genesis/front-left.png",
        "https://sydneylimousineservice.com/img/fleets/genesis/back.png",
      ],
      whyChoose: [
        `The Luxury Sedan Genesis is one of the popular spacious car for four people travelling comfortably for your airport transfers, corporate transfers or any other point to point transfer services.`,
        `It can be hired for your wedding car service for lifetime special day. You should deserve to feel like royalty on your special day forever, and make your weeding memorable when you book luxury Genesis. Our elegant Genesis is also suitable for your special day hiring for greatest expectation, so whether you can choose Genesis from our luxury fleet, and we will arrive at your venue in elegant and comfort.`,
        `We offer Genesis luxury sedan limo hire at very competitive prices for corporate travellers in the corporate community. Our Genesis chauffeur will provide you with the very best limousine service. It is also suitable transportation for all corporate occasions, business meeting, seminars, business launch and corporate gaming functions.`,
        `It can be toured to the Blue Mountain and Hunter Valley with a scenic smooth drive that will reduce your stress-free travel which you will get to ride in comfort and style. Our chauffeurs are well experienced for sightseeing tour in Blue Mountain and Hunter Valley with clean and comfortable with air-conditioned Genesis limo.`,
      ],

      overview: [
        `The Genesis is a large luxury sedan that is the latest-generation Genesis platform, but it’s been enlarged to provide a sedan limousine. Under the hood is a 3.8-liter V6 generating include eight-speed automatic transmission with manual shift mode and a five-star safety rating. Power is sent to the rear wheels through an eight-speed automatic transmission.`,
        `Inside the Genesis, the highly adjustable front seats are a pleasure to settle into no matter what the weather, as the built-in ventilation system circulates heated or cooled air through the perforated leather upholstery. Rear seat passengers will enjoy the vast amount of legroom, especially since the outboard seats recline. These, too, are heated and (in Ultimate trim) cooled, and the central armrest folds down to reveal a bevy of controls for seat lumbar, rear power shade and rear seat entertainment displays.`,
        `On the highway, the Genesis sedan limo drives like a large luxury sedan should. It’s exceptionally quiet at speed, and the ride is soft and comfortable. The Genesis interior is intuitively designed to create a harmonious experience.`,
      ],
      amenities: [
        "Top of the ultimate Luxury",
        "Exceptionally quiet at speed with soft ride and comfort",
        "The Genesis interior is intuitively designed to create a harmonious experience.",
        "Wood grain touch and aluminum combination in the dash and door",
        "From button placement, to tactile response, and overall interior layout is excellent.",
        "Optimised for exceptional comfort and convenience.",
        "It offers anti-theft system for your safety.",
      ],
      servicesOffered: [
        "Corporate Transportation",
        "Chauffeur Service",
        "City Tours",
        "Weddings Car Services",
        "Airport Pick Up and Drop Off",
        "Sydney Airport Transfers",
        "Mercedes Class SUV Limousine Hire",
        "Blue Mountain Tour",
        "Hunter Valley Tour",
        "Cruise Ship Transfers",
        "Luxury Sedan Limo",
        "Door to Door Services",
      ],
    },

    {
      slug: "chrysler-300C",
      name: "Chrysler 300C",
      price: "$132.0/hr",
      category: "Executive Car",
      pax: "4 Pax",
      luggage: "2 Lugg/3 Pax 3 Lugg",
      features: [
        "Light Refreshment",
        "Leather Interior",
        "Comfortable Leg Space",
        "Tinted Window",
      ],
      image: "https://sydneylimousineservice.com/img/fleets/chrysler/front.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
      rateInfo: [
        {
          label: "Per Hour Rate",
          price: "$132.0/HOUR",

          description:
            "*All inclusive of GST, Tolls & Service Fee - 2 hours minimum booking",
        },
        {
          label: "Per Day Rate",
          price: "$1056.0/DAY",
          unit: "/DAY",
          description:
            "*All inclusive of GST, Tolls & Service Fee - 8 hours of service",
        },
      ],
      viewImage: [
        "https://sydneylimousineservice.com/img/fleets/chrysler/left.png",
        "https://sydneylimousineservice.com/img/fleets/chrysler/interior.png",
        "https://sydneylimousineservice.com/img/fleets/chrysler/front.png",
        "https://sydneylimousineservice.com/img/fleets/chrysler/front-right.png",
        "https://sydneylimousineservice.com/img/fleets/chrysler/front-left.png",
        "https://sydneylimousineservice.com/img/fleets/chrysler/back.png",
      ],

      whyChoose: [
        `The Luxury Sedan Chrysler 300C is one of the popular spacious car for four people travelling comfortably for your airport transfers, corporate transfers or any other point to point transfer services.`,
        `It can be hired for your wedding car service for lifetime special day. You should deserve to feel like royalty on your special day forever, and make your weeding memorable when you book luxury sedan Chrysler 300C. Our elegant Chrysler 300C is also suitable for your special day hiring for greatest expectation, so whether you can choose Chrysler from our luxury fleet, and we will arrive at your venue in elegant and comfort.`,
        `We offer Chrysler luxury sedan limo hire at very competitive prices for corporate travellers in the corporate community. Our Chrysler's chauffeur will provide you with the very best limousine service. It is also suitable transportation for all corporate occasions, business meeting, seminars, business launch and corporate gaming functions.`,
        `It can be toured to the Blue Mountain and Hunter Valley with a scenic smooth drive that will reduce your stress-free travel which you will get to ride in comfort and style. Our chauffeurs are well experienced for sightseeing tour in Blue Mountain and Hunter Valley with clean and comfortable with air-conditioned Chrysler sedan limo.`,
      ],
      overview: [
        `The Chrysler 300C is a sedan of ultimate luxury with a V6 petrol engine, with the previous diesel and 5.7-litre Hemi V8 options no longer offered. Performance enthusiasts are specifically catered for with the unique-for-Australia 300 SRT. Even in base trim, the 300C is loaded with a generous level of standard equipment, including 18-inch alloys, full  leather interior, dual-zone climate control, cruise control, heated front and rear seats and an 8.4-inch colour touchscreen multimedia system with sat nav, digital radio, a reverse camera and a 9-speaker Alpine audio set-up.`,
        `The Luxury model builds on that a bit more bling – both inside and out – including chrome exterior highlights, 20-inch alloys, ventilation for the front seats, quilted leather trim and a host of active safety features such as adaptive cruise control with lane departure and forward collision warnings.`,
        `The 300C packs a lot of quantity into its cabin, particularly in this Luxury specification. The quilted leather seats and contrasting colours of the cockpit – with cream and black leather mixed with raw wood grain and aluminium highlights in the dash and door surrounds – give the cockpit a genuine sense of luxury, while the blue-lit ambient lighting and large touch screen add an element of modernity to the overall appearance. This is a great car for Corporate Airport Transfer.`,
      ],
      amenities: [
        "Luxurious leather-trimmed seats",
        "Onboard DVD players",
        "Raw wood grain and aluminium highlights in the dash and door surrounds",
        "USB/Phone charger and cup holders available",
        "Bluetooth's connectivity, laptop and mobile phone charger facility",
        "Heated front and rear seats",
        "Perceived as style icon in luxury car segment",
      ],
      servicesOffered: [
        "Airport Pick Up and Drop Off",
        "Sydney Airport Transfers",
        "Chrysler Sedan Limousine Service",
        "Wedding Limousine",
        "Blue Mountain Tour",
        "Hunter Valley Tour",
        "Cruise Ship Transfers",
        "Luxury Limo Hire",
        "Door to Door Services",
        "Chrysler Limousine Hire",
        "Group Tour Services",
        "Corporate Car Hire",
      ],
    },
    {
      slug: "tesla-model-s",
      name: "Tesla Model S",
      category: "Executive Car",
      pax: "4 Pax",
      luggage: "2 Lugg/3 Pax 3 Lugg",
      features: [
        "Light Refreshment",
        "Leather Interior",
        "Comfortable Leg Space",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/tesla-model-s/tesla-model-s.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "lexus-es-300h",
      name: "Lexus ES 300h",
      category: "Executive Car",
      pax: "4 Pax",
      luggage: "2 Lugg/3 Pax 3 Lugg",
      features: [
        "Light Refreshment",
        "Leather Interior",
        "Comfortable Leg Space",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/lexus-es-300h/lexus-es-300h.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "mercedes-s-class",
      name: "Mercedes S Class",
      category: "European Luxury Sedan",
      pax: "4 Pax",
      luggage: "2 Lugg/3 Pax 3 Lugg",
      features: [
        "Light Refreshment",
        "Rear-seat Console Controls",
        "Large Leg Space",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/mercedes-s-class/mercedes-s-class.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "audi-a8",
      name: "Audi A8",
      category: "European Luxury Sedan",
      pax: "4 Pax",
      luggage: "2 Lugg/3 Pax 3 Lugg",
      features: [
        "Light Refreshment",
        "Rear-seat Console Controls",
        "Large Leg Space",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/audi-a8/audi-a8.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "bmw-7-series",
      name: "BMW 7 Series",
      category: "European Luxury Sedan",
      pax: "4 Pax",
      luggage: "2 Lugg/3 Pax 3 Lugg",
      features: [
        "Light Refreshment",
        "Rear-seat Console Controls",
        "Large Leg Space",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/bmw-7-series/bmw-7-series.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "audi-q7",
      name: "Audi Q7 (SUV)",
      category: "Luxury SUV",
      pax: "6 Pax",
      luggage: "4 Lugg/4 Sml",
      features: [
        "Light Refreshment",
        "Leather Interior",
        "Best Family Travel for 4",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/audi-q7/audi-q7.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "bmw-x7",
      name: "BMW X7 (SUV)",
      category: "Luxury SUV",
      pax: "6 Pax",
      luggage: "4 Lugg/4 Sml",
      features: [
        "Light Refreshment",
        "Leather Interior",
        "Best Family Travel for 4",
        "Tinted Window",
      ],
      image: "https://sydneylimousineservice.com/img/fleets/bmw-x7/bmw-x7.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "mercedes-benz-gle",
      name: "Mercedes-Benz GLE",
      category: "Luxury SUV",
      pax: "6 Pax",
      luggage: "4 Lugg/4 Sml",
      features: [
        "Light Refreshment",
        "Leather Interior",
        "Best Family Travel for 4",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/mercedes-benz-gle/mercedes-benz-gle.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "lexus-rx-400hl",
      name: "Lexus RX 400hl",
      category: "Luxury SUV",
      pax: "6 Pax",
      luggage: "4 Lugg/4 Sml",
      features: [
        "Light Refreshment",
        "Leather Interior",
        "Best Family Travel for 4",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/lexus-rx-400hl/lexus-rx-400hl.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "mercedes-benz-v-class",
      name: "Mercedes-Benz V Class",
      category: "People Mover Small",
      pax: "7 Pax",
      luggage: "5 Lugg",
      features: [
        "Light Refreshment",
        "Leather Interior",
        "Specious Leg Space",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/mercedes-benz-v-class/mercedes-benz-v-class.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "mercedes-sprinter",
      name: "Mercedes Sprinter",
      category: "People Mover Big",
      pax: "11 Pax",
      luggage: "8 Lugg",
      features: [
        "Light Refreshment",
        "Leather Interior",
        "Specious Leg Space",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/sprinter/sprinter.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "stretch-chrysler-300c",
      name: "Stretch Chrysler 300C",
      category: "Chrysler Stretch Limousine",
      pax: "11 Pax",
      luggage: "4 Lugg",
      features: [
        "Complementary Wine Served",
        "Leather Interior",
        "Comfortable Seating",
        "Tinted Window",
      ],
      image:
        "https://sydneylimousineservice.com/img/fleets/chrysler-stretch/chrysler-stretch.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
    {
      slug: "stretch-hummer-h2",
      name: "Stretch Hummer H2",
      category: "Hummer Stretch Limousine",
      pax: "14 Pax",
      luggage: "4 Lugg",
      features: [
        "Complementary Wine Served",
        "Leather Interior",
        "Comfortable Seating",
        "Tinted Window",
      ],
      image: "https://sydneylimousineservice.com/img/fleets/hummer/hummer.png",
      actions: {
        viewDetails: "View Details",
        quoteBook: "Quote & Book Now",
      },
    },
  ];

  return NextResponse.json(fleetData);
}
