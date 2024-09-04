import React from "react";

const PickupFromAirport = () => {
  return (
    <div className="pickup-section py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Pickup from the Airport
        </h2>
        <p className="mb-4 text-lg">
          There is no extra waiting time charged up to 25 minutes from the
          domestic terminal and 55 minutes from the international terminal since
          the flight lands. However, charges apply for extra time consumed to
          clear customs and baggage delays. Additional payable airport tolls for
          designated category limos are according to the hourly rate. We do not
          charge for any flight delays as the flight landing time is monitored
          by our team unless you change the flight without notification.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              Sydney International Airport - Terminal One (T1):
            </h3>
            <p className="mb-2 text-lg">
              Our Chauffeur will hold your designated name sign board in the
              arrival hall and send you an SMS during the flight landing. Please
              provide an international or local mobile phone number on your
              reservation. There are two exits (A & B) in the Sydney
              International Arrival Hall where the chauffeur waits after 20
              minutes of the flight landing with the sign according to your
              flight number. If there is any problem finding the driver, please
              call{" "}
              <a href="tel:+61439853700" className="text-blue-500">
                +61439853700
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Sydney Domestic Airport - Terminal Two (T2):
            </h3>
            <p className="mb-2 text-lg">
              There are designated Limousine pick-up spots for T2, where the
              chauffeur waits with the name board after 15 minutes of the flight
              landing outside of carousel four or five for Virgin Australia, Jet
              Star, Rex, and Pelican Airways. You will receive an SMS with the
              car registration number from the driver during the landing. If
              there is any problem finding the driver, please call{" "}
              <a href="tel:+61439853700" className="text-blue-500">
                +61439853700
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Sydney Domestic Airport - Terminal Three (T3):
            </h3>
            <p className="mb-2 text-lg">
              Limousine pick-up spots for T3 are where the chauffeur waits with
              the name board after 15 minutes of the flight landing outside of
              carousel two or one for Qantas Airways domestic flights. You will
              receive an SMS with the car registration number. If there is any
              problem finding the driver, please call{" "}
              <a href="tel:+61439853700" className="text-blue-500">
                +61439853700
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              International Terminal - Interstate City:
            </h3>
            <p className="mb-2 text-lg">
              The chauffeur waits with the name sign according to your flight
              number in the Arrival Hall after 20 minutes of the flight landing.
              You will receive an SMS from the driver during the flight landing.
              If there is any problem finding the driver, please call{" "}
              <a href="tel:+61439853700" className="text-blue-500">
                +61439853700
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Domestic Airport - Interstate City:
            </h3>
            <p className="mb-2 text-lg">
              The chauffeur waits with the name board after 15 minutes of the
              flight landing at the designated carousel area for the domestic
              flight. If there is any problem finding the driver, please call{" "}
              <a href="tel:+61439853700" className="text-blue-500">
                +61439853700
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupFromAirport;
