import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoSrc from "../../../public/logo-small.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="py-12">
        <div className="container px-8 md:px-10 lg:px-14 xl:px-16 mx-auto">
          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    className="h-auto w-[60%] bg-white pl-[15px] pt-2 pb-2 mt-1 rounded"
                    src={logoSrc}
                    alt="Logo"
                    priority={true}
                  />
                </Link>
              </div>
              <h5 className="mb-3 mt-3 text-[18px] font-bold">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="#">&#10140; Home</Link>
                </li>
                <li>
                  <Link href="#">&#10140; About Us</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Services</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Fleets</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Service Area</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Rates</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Sydney Suburbs</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Contact</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Sitemap</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Booking Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Disclaimer</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Copyright</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Login</Link>
                </li>
                <li>
                  <Link href="#">&#10140; COVID-19 Safe</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Reservation</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Gallery</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <h5 className="mb-3 text-[18px] font-bold">Services</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/service/airport-transfer">
                    &#10140; Airport Transfer Limos
                  </Link>
                </li>
                <li>
                  <Link href="/service/corporate-transfers">
                    &#10140; Corporate Transfer Limos
                  </Link>
                </li>
                <li>
                  <Link href="#">&#10140; Special Occasions Limos</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Clubbing Limos</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Wedding Limos</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Prom Night Limos</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Birthday Services Limos</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Anniversary Limos</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Graduation Party Limos</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Sightseeing Limos</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Night Out on Town Limos</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Bachelor Party Limos</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Sydney Tours</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Blue Mountain Limo Tours</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Hunter Valley Limo Tours</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Northern Beaches Limo</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Child Seat Limousine</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Eastern Suburbs Limo</Link>
                </li>
                <li>
                  <Link href="#">&#10140; North Shore Limo</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Hills District Limo</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4">
              <h5 className="mb-3 text-[18px] font-bold">Fleets Standby</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="#">&#10140; Mercedes S Class</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Audi A8</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Hummer</Link>
                </li>
                <li>
                  <Link href="#">&#10140; BMW 7 Series</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Holden Caprice</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Chrysler</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Genesis</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Mercedes R Class</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Audi Q7</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Mercedes Viano</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Chrysler 300C</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Mercedes Sprinter</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4">
              <h5 className="mb-3 text-[18px] font-bold">Interstate Cities</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="#">&#10140; Sydney Limo Hire</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Melbourne Limo Hire</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Canberra Limo Hire</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Perth Limo Hire</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Hobart Limo Hire</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Brisbane Limo Hire</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Gold-Coast Limo Hire</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Adelaide Limo Hire</Link>
                </li>
                <li>
                  <Link href="#">&#10140; Darwin Limo Hire</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teal-700 py-5">
        <div className="container px-8 md:px-10 lg:px-14 xl:px-16 mx-auto">
          <div className="flex flex-row justify-between">
            <div>
              <p className="mb-0">
                &copy; Sydney Limousine Services. All rights Reserved 2011-2024
              </p>
            </div>
            <div>
              <p className="mb-0">
                <Link href="#" className="hover:text-teal-400">
                  Terms of Service
                </Link>{" "}
                |{" "}
                <Link href="#" className="hover:text-teal-400">
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link href="#" className="hover:text-teal-400">
                  Cookies
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
