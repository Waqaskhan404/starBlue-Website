"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const QuickEnquiry = () => {
  return (
    <section className="bg-green-900 text-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 pl-4 sm:pl-6 md:pl-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">Quick Enquiry</h2>
          <p className="mt-2 text-yellow-300">We will respond to your request within 24 hours</p>
          <p className="mt-4 text-gray-300">
            Our plant-loving team is always ready to help. For the quickest reply, fill in your information in the form,
            so we’ll have what’s needed to help you as soon as possible!
          </p>

          {/* List of Services */}
          <ul className="mt-6 space-y-2 text-yellow-300 text-left pl-4 sm:pl-6 md:pl-8">
            <li>✔ Outdoor Plants</li>
            <li>✔ Native & Adaptive Plants</li>
            <li>✔ Indoor Plants</li>
            <li>✔ Plant Containers & Accessories</li>
            <li>✔ Growing Medium</li>
            <li>✔ Contract Growing</li>
          </ul>

          {/* Social Media Links */}
          <p className="mt-8 text-yellow-400 font-semibold pl-4 sm:pl-6 md:pl-8">Engage with us for latest updates:</p>
          <div className="flex flex-wrap gap-4 mt-3 pl-4 sm:pl-6 md:pl-8">
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition duration-300 flex items-center gap-2 text-sm sm:text-lg">
              <FontAwesomeIcon icon={faFacebookF} className="text-base sm:text-xl" /> Facebook
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition duration-300 flex items-center gap-2 text-sm sm:text-lg">
              <FontAwesomeIcon icon={faInstagram} className="text-base sm:text-xl" /> Instagram
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition duration-300 flex items-center gap-2 text-sm sm:text-lg">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-base sm:text-xl" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg mt-8 lg:mt-0">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded text-gray-900 outline-none focus:ring-2 focus:ring-green-500" />
            <input type="text" placeholder="Tel No. eg: +971 XX XXX XXXX" className="w-full p-3 border border-gray-300 rounded text-gray-900 outline-none focus:ring-2 focus:ring-green-500" />
            <input type="email" placeholder="Your email" className="w-full p-3 border border-gray-300 rounded text-gray-900 outline-none focus:ring-2 focus:ring-green-500" />
            <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded text-gray-900 outline-none focus:ring-2 focus:ring-green-500" />
            <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded text-gray-900 outline-none focus:ring-2 focus:ring-green-500 h-24"></textarea>
            <button className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition duration-300">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuickEnquiry;
