"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import logoSrc from "@/public/logo-small.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > 50);
  }, []);

  const handleResize = useCallback(() => {
    setMenuOpen(false);
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
    { href: "/service-area", label: "Service Area", styles: "text-white" },
    { href: "/fleets", label: "Fleets", styles: "text-white" },
    { href: "/rates", label: "Rates", styles: "text-white" },
    { href: "/contact", label: "Contact", styles: "text-white" },
    { href: "/login", label: "Login", styles: "text-white" },
    { href: "/gallery", label: "Gallery", styles: "text-white" },
    { href: "/instant-quote", label: "Instant Quote", styles: "text-white" },
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
                  isSticky ? "bg-inherit" : "text-white",
                  {
                    "bg-white text-teal-700": pathname === link.href,
                  }
                )}
              >
                {link.label}
              </Link>
            ))}
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
      {menuOpen && <MobileMenu />}
    </header>
  );
};

const MobileMenu: React.FC = () => (
  <div className="container mx-auto lg:hidden bg-white shadow-md">
    <nav className="py-4">
      <Link
        href="/"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        About Us
      </Link>
      <Link
        href="/service"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        Service
      </Link>
      <Link
        href="/service-area"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        Service Area
      </Link>
      <Link
        href="/fleets"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        Fleets
      </Link>
      <Link
        href="/rates"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        Rates
      </Link>
      <Link
        href="/contact"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        Contact
      </Link>
      <Link
        href="/login"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        Login
      </Link>
      <Link
        href="/gallery"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        Gallery
      </Link>
      <Link
        href="/instant-quote"
        className="block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]"
      >
        Instant Quote
      </Link>
    </nav>
  </div>
);

export default Header;
