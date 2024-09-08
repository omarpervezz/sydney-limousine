"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import logoSrc from "@/public/logo-small.png";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/service-area", label: "Service Area" },
  { href: "/fleets", label: "Fleets" },
  { href: "/rates", label: "Rates" },
  { href: "/contact", label: "Contact" },
  { href: "/gallery", label: "Gallery" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false); // Close menu when route changes
  }, [pathname]);

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > 50);
  }, []);

  const handleResize = useCallback(() => {
    setMenuOpen(false); // Close menu on resize
  }, []);

  // Check initial scroll position when the component mounts
  useEffect(() => {
    // Set sticky state based on current scroll position
    if (window.scrollY > 50) {
      setIsSticky(true);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <header
      className={`fixed w-full z-[200] transition-all duration-300 ${
        isSticky ? "bg-white shadow-lg top-0" : "bg-transparent"
      }`}
    >
      <div>
        <div className="container px-8 md:px-8 lg:px-12 xl:px-16 mx-auto flex justify-between items-center py-2">
          <div className="flex items-center">
            <Link href="/">
              <Image
                width={150}
                className={`bg-white pl-[15px] pt-2 pb-2 mt-1 transition-all duration-300 ${
                  isSticky ? "scale-90" : ""
                }`}
                src={logoSrc}
                alt="Logo"
                priority={true}
              />
            </Link>
          </div>
          <nav
            className={`hidden rounded-l-md rounded-r-md lg:flex items-center p-0 h-[45px] ${
              isSticky ? "bg-inherit" : "bg-teal-700"
            }`}
          >
            {menuLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={clsx(
                  "font-semibold py-3 px-4 uppercase text-[14px] transition-colors duration-300",
                  isSticky ? "text-black" : "text-white",
                  idx === 0 && "rounded-l-md",
                  idx === menuLinks.length - 1 && "rounded-r-md"
                )}
                style={
                  pathname === link.href
                    ? { backgroundColor: "black", color: "white" }
                    : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
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

      {/* Mobile Menu */}
      {menuOpen && <MobileMenu />}
    </header>
  );
};

const MobileMenu: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="container mx-auto lg:hidden bg-white shadow-md">
      <nav className="py-4">
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={clsx(
              "block px-4 py-2 hover:bg-gray-100 font-medium uppercase text-[14px]",
              pathname === link.href ? "bg-gray-300" : ""
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
