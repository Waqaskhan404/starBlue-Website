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
    { href: "/blog", label: "Blog" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/branches", label: "Our Branches" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto text-center">
        {/* Stay Updated Section */}
        <h2 className="text-3xl font-bold text-yellow-600">STAY UPDATED</h2>
        <p className="mt-2 text-gray-300">
          Get exclusive updates about Wahat Al Sahraa
        </p>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="p-3 w-80 rounded-l-md text-gray-900"
          />
          <button className="bg-yellow-600 text-white px-5 rounded-r-md">
            Subscribe!
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="#"
            className="text-yellow-500 hover:text-yellow-300 text-2xl"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="text-yellow-500 hover:text-yellow-300 text-2xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="#"
            className="text-yellow-500 hover:text-yellow-300 text-2xl"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 flex flex-wrap justify-center space-x-6 text-gray-300">
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

        {/* Contact Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
          <div>
            <h3 className="text-yellow-500 font-bold">ADDRESS</h3>
            <p>
              Wahat Al Sahraa Nurseries, Al Amardi St., Al Khawaneej, <br />
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

        {/* Copyright */}
        <div className="mt-8 text-gray-400 text-sm border-t border-gray-600 pt-4">
          <p>
            © 2025 Wahat Al Sahraa Nurseries, All rights reserved | Designed by
            Desert Group IT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
