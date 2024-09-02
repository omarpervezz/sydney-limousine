"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import logoSrc from "@/public/logo-small.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > 50);
  }, []);

  const handleResize = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  const menuLinks = [
    { href: "/", label: "Home", styles: "bg-white text-teal-700" },
    { href: "/about", label: "About Us", styles: "text-white" },
    { href: "/service", label: "Service", styles: "text-white" },
  ];

  return (
    <header
      className={`fixed w-full z-[200] transition-all duration-300 ${
        isSticky ? "bg-white shadow-lg top-0" : "bg-transparent"
      }`}
    >
      <div>
        <div className="container px-5 mx-auto flex justify-between items-center py-2">
          <div className="flex items-center">
            <Link href="/">
              <Image
                className={`h-auto w-[60%] bg-white pl-[15px] pt-2 pb-2 mt-1 transition-all duration-300 ${
                  isSticky ? "scale-90" : ""
                }`}
                src={logoSrc}
                alt="Logo"
                priority={true}
              />
            </Link>
          </div>
          <nav
            className={`hidden lg:flex items-center p-0 h-[45px] ${
              isSticky ? "bg-inherit" : "bg-teal-700"
            }`}
          >
            {menuLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={clsx(
                  "font-semibold py-3 px-4 uppercase text-[14px] transition-colors duration-300",
                  isSticky ? "bg-inherit" : "",
                  {
                    "bg-white text-teal-700": pathname === link.href,
                  }
                )}
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu
              title="Services Area"
              links={[
                { href: "/service-area/sydney", label: "Sydney" },
                { href: "/service-area/melbourne", label: "Melbourne" },
                { href: "/service-area/brisbane", label: "Brisbane" },
                { href: "/service-area/all", label: "See All" },
              ]}
              isSticky={isSticky}
            />
            <DropdownMenu
              title="Fleets"
              links={[
                { href: "/fleets/executive-car", label: "Executive Car" },
                {
                  href: "/fleets/european-luxury-sedan",
                  label: "European Luxury Sedan",
                },
                { href: "/fleets/suv", label: "SUV" },
                { href: "/fleets/all", label: "See All" },
              ]}
              isSticky={isSticky}
            />
            {["Rates", "Gallery", "Contact"].map((item, idx) => (
              <Link
                key={idx}
                href={`/${item.replace(" ", "-").toLowerCase()}`}
                className={`py-3 px-4 uppercase text-[14px] font-semibold transition-colors duration-300 ${
                  isSticky ? "text-black" : "text-white"
                }`}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/instant-quote"
              className={`font-semibold py-3 px-4 uppercase text-[14px] transition-colors duration-300 ${
                isSticky ? "bg-inherit text-black" : "bg-white text-teal-700"
              }`}
            >
              Instant Quote
            </Link>
          </nav>

          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className={`${isSticky ? "text-black" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <MobileMenu
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
        />
      )}
    </header>
  );
};

const DropdownMenu: React.FC<{
  title: string;
  links: { href: string; label: string }[];
  isSticky: boolean;
}> = ({ title, links, isSticky }) => (
  <div className="relative group p-2">
    <Link
      href="#"
      className={`flex items-center py-3 px-4 uppercase text-[14px] font-semibold transition-colors duration-300 ${
        isSticky ? "text-black" : "text-white"
      }`}
    >
      {title}
      <FaChevronDown className="ml-1 group-hover:rotate-180 transition-[rotate]" />
    </Link>
    <div className="absolute left-0 w-60 px-2 py-5 origin-top-left bg-white divide-y divide-gray-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-10">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.href}
          className="block px-4 py-2 hover:bg-gray-100 uppercase text-[14px] font-semibold"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </div>
);

const MobileMenu: React.FC<{
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}> = ({ isDropdownOpen, toggleDropdown }) => (
  <div className="container mx-auto lg:hidden bg-white shadow-md">
    <nav className="py-4">
      <Link
        href="/"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        Home
      </Link>
      <Link
        href="/about-us"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        About Us
      </Link>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
        >
          Services
        </button>
        {isDropdownOpen && (
          <div className="pl-4">
            {[
              { href: "/service-area/sydney", label: "Sydney" },
              { href: "/service-area/melbourne", label: "Melbourne" },
              { href: "/service-area/brisbane", label: "Brisbane" },
              { href: "/service-area/all", label: "See All" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  </div>
);

export default Header;
