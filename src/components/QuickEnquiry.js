"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const QuickEnquiry = () => {
  return (
    <section className="bg-green-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-start md:items-center">
        {/* Left Side Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-400">Quick Enquiry</h2>
          <p className="mt-2 text-yellow-300">We will respond to your request within 24 hours</p>
          <p className="mt-4 text-gray-300">
            Our plant-loving team is always ready to help. For the quickest reply, fill in your information in the
            form, so we’ll have what’s needed to help you as soon as possible!
          </p>

          {/* List of Services */}
          <ul className="mt-6 space-y-2 text-yellow-300">
            <li>✔ Outdoor Plants</li>
            <li>✔ Native & Adaptive Plants</li>
            <li>✔ Indoor Plants</li>
            <li>✔ Plant Containers & Accessories</li>
            <li>✔ Growing Medium</li>
            <li>✔ Contract Growing</li>
          </ul>

          {/* Social Media Links with Icons */}
          <p className="mt-8 text-yellow-400 font-semibold">Engage with us for latest updates:</p>
          <div className="flex space-x-6 mt-3">
            <a href="#" className="text-yellow-400 hover:text-yellow-300 text-xl transition duration-300">
              <FontAwesomeIcon icon={faFacebookF} /> <span className="ml-2">Facebook</span>
            </a>
            <span className="text-yellow-400">|</span>
            <a href="#" className="text-yellow-400 hover:text-yellow-300 text-xl transition duration-300">
              <FontAwesomeIcon icon={faInstagram} /> <span className="ml-2">Instagram</span>
            </a>
            <span className="text-yellow-400">|</span>
            <a href="#" className="text-yellow-400 hover:text-yellow-300 text-xl transition duration-300">
              <FontAwesomeIcon icon={faLinkedinIn} /> <span className="ml-2">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:ml-16 bg-yellow-500 p-8 rounded-lg shadow-lg">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded text-gray-900 outline-none" />
            <input type="text" placeholder="Tel No. eg: +971 XX XXX XXXX" className="w-full p-3 rounded text-gray-900 outline-none" />
            <input type="email" placeholder="Your email" className="w-full p-3 rounded text-gray-900 outline-none" />
            <input type="text" placeholder="Subject" className="w-full p-3 rounded text-gray-900 outline-none" />
            <textarea placeholder="Message" className="w-full p-3 rounded text-gray-900 outline-none h-24"></textarea>
            <button className="w-full bg-yellow-600 text-white py-3 rounded-md hover:bg-yellow-700 transition duration-300">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuickEnquiry;
