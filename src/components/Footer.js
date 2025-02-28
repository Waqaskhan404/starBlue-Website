"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/our-services", label: "Our Services" },
    { href: "/our-gallery", label: "Our Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-green-900 text-white py-10 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto text-center">
        {/* Stay Updated Section */}
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-600">
          STAY UPDATED
        </h2>
        <p className="mt-2 text-gray-300 text-sm sm:text-base">
          Get exclusive updates about STAR BLOOM LANDSCAPING & AGRICULTURAL SERVICES, SP LLC,
        </p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="p-3 w-full sm:w-80 rounded-md sm:rounded-l-md text-gray-900 mb-3 sm:mb-0"
          />
          <button className="bg-yellow-600 text-white px-5 py-3 rounded-md sm:rounded-r-md w-full sm:w-auto">
            Subscribe!
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-4 sm:space-x-6">
          <a
            href="#"
            className="text-yellow-500 hover:text-yellow-300 text-xl sm:text-2xl"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="text-yellow-500 hover:text-yellow-300 text-xl sm:text-2xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#"
            className="text-yellow-500 hover:text-yellow-300 text-xl sm:text-2xl"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        {/* Navigation Links (Centered) */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-300 text-sm sm:text-base">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative transition duration-200 pb-1 ${
                pathName === href
                  ? "text-yellow-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-400"
                  : "hover:text-yellow-400 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-400 after:opacity-0 hover:after:opacity-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact Information (Centered) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-300 text-center">
          <div>
            <h3 className="text-yellow-500 font-bold">ADDRESS</h3>
            <p>
              SB LANDSCAPING & AGRICULTURAL SERVICES, <br />
              P.O. Box 37579, Dubai, United Arab Emirates.
            </p>
          </div>
          <div>
            <h3 className="text-yellow-500 font-bold">GPS COORDINATES</h3>
            <p>25.130272, 55.212613</p>
          </div>
          <div>
            <h3 className="text-yellow-500 font-bold">CUSTOMER ENQUIRY</h3>
            <p>+971 55 503 9230</p>
          </div>
          <div>
            <h3 className="text-yellow-500 font-bold">CORPORATE OFFICE</h3>
            <p>800 337378, +971 4 289 1063</p>
          </div>
          <div>
            <h3 className="text-yellow-500 font-bold">FAX</h3>
            <p>+971 4 340 4441</p>
          </div>
          <div>
            <h3 className="text-yellow-500 font-bold">EMAIL</h3>
            <p>nursery.enquiry@desertgroup.ae</p>
          </div>
        </div>

        {/* Copyright (Centered) */}
        <div className="mt-8 text-gray-400 text-xs sm:text-sm border-t border-gray-600 pt-4">
          <p>
            © 2025 STAR BLOOM LANDSCAPE AND AGRICULTURAL SERVICES - L.L.C -
            S.P.CSERVICES, All rights reserved | Designed by Waqas Khan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
