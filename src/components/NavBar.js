"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md  font-[Poppins] text-[14px] font-semibold relative">
      <div className="container flex  items-center justify-between">
        {/* Left Side - Logos */}
        <div className="flex items-center gap-4 ml-3">
          <img
            src="/SB-Logo.png"
            alt="logo-sb"
            className="h-16 md:h-20 lg:h-24 xl:h-28"
            loading="lazy"
          />
        </div>

        {/* Hamburger Menu Button (Small & Tablet Screens) */}
        <button
          className="lg:hidden text-green-700 text-2xl z-50 p-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Links (Laptop View) */}
        <ul className="hidden lg:flex items-center gap-8 text-black">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Projects", path: "/projects" },
            { name: "Our Services", path: "/our-services" },
            { name: "Our Gallery", path: "/our-gallery" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`${
                  pathName === item.path
                    ? "text-green-700 border-b-2 border-green-700"
                    : "hover:text-green-700 hover:border-b-2 hover:border-green-700"
                } pb-1`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Menu (Small & Tablet Screens) */}
      <div
        className={`fixed top-0 right-0 w-3/4 md:w-1/2 h-full bg-green-700 text-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <ul className="flex flex-col items-center mt-6 gap-1">
          {" "}
          {/* Tighter spacing */}
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Projects", path: "/projects" },
            { name: "Our Services", path: "/our-services" },
            { name: "Our Gallery", path: "/our-gallery" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <li
              key={item.path}
              className={`w-full text-center py-1 ${
                // Less padding
                pathName === item.path
                  ? "bg-green-800 text-white"
                  : "hover:bg-green-600"
              }`}
              onClick={() => setIsMenuOpen(false)} // Close on click
            >
              <Link href={item.path} className="block w-full px-2 py-1">
                {" "}
                {/* Reduced padding */}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
