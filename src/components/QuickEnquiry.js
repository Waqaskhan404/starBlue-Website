"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const QuickEnquiry = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    const phoneRegex = /^\+?[0-9\s-]{10,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.tel.trim() || !phoneRegex.test(formData.tel))
      newErrors.tel = "Valid phone number required";
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        "service_gia0txo",
        "template_9owe37c",
        formData,
        "t2iyT2HLBV1aSL9NR"
      )
      .then((response) => {
        console.log("SUCCESS!", response);
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", tel: "", email: "", subject: "", message: "" });
        setTimeout(() => setSuccessMessage(""), 5000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Check console for details.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="bg-green-900 text-white py-16 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 pl-4 sm:pl-6 md:pl-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">
            Quick Enquiry
          </h2>
          <p className="mt-2 text-yellow-300">
            We will respond to your request within 24 hours
          </p>
          <p className="mt-4 text-gray-300">
            Our plant-loving team is always ready to help. For the quickest
            reply, fill in your information in the form, so we’ll have what’s
            needed to help you as soon as possible!
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
          <p className="mt-8 text-yellow-400 font-semibold pl-4 sm:pl-6 md:pl-8">
            Engage with us for latest updates:
          </p>
          <div className="flex flex-wrap gap-4 mt-3 pl-4 sm:pl-6 md:pl-8">
            <a
              href="https://web.facebook.com/starbloomlandscaping/?_rdc=1&_rdr#"
              target="_blank"
              className="text-yellow-400 hover:text-yellow-300 transition duration-300 flex items-center gap-2 text-sm sm:text-lg"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-base sm:text-xl"
              />{" "}
              Facebook
            </a>
            <a
           href="https://www.instagram.com/starbloomlandscaping"
           target="_blank"
              className="text-yellow-400 hover:text-yellow-300 transition duration-300 flex items-center gap-2 text-sm sm:text-lg"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-base sm:text-xl"
              />{" "}
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/star-bloom-landscaping-agricultural-services/about/?viewAsMember=true"
              target="_blank"
              className="text-yellow-400 hover:text-yellow-300 transition duration-300 flex items-center gap-2 text-sm sm:text-lg"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
              target="_blank"

                className="text-base sm:text-xl"
              />{" "}
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg mt-8 lg:mt-0">
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded text-gray-900 outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <input
              type="text"
              name="tel"
              placeholder="Tel No. eg: +971 XX XXX XXXX"
              required
              value={formData.tel}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded text-gray-900 outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.tel && <p className="text-red-500 text-sm">{errors.tel}</p>}

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded text-gray-900 outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded text-gray-900 outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}

            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded text-gray-900 outline-none focus:ring-2 focus:ring-green-500 h-24"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition duration-300 flex justify-center items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                </>
              ) : (
                "Send Enquiry"
              )}
            </button>

            {successMessage && (
              <p className="text-green-700 text-center mt-4">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuickEnquiry;
