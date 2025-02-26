"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactUsBanner = () => {
  return (
    <section
      className="relative bg-cover bg-center py-32 sm:py-40 text-white text-center"
      style={{ backgroundImage: "url('/contact-us-banner.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Heading */}
      <div className="relative z-10 pb-10 sm:pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
      </div>

      {/* Contact Cards */}
      <div className="absolute bottom-[-50px] sm:bottom-[-80px] left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-white p-6 sm:p-10 rounded-lg shadow-lg text-center text-gray-800">
    {/* Phone */}
    <div className="flex flex-col items-center">
      <FontAwesomeIcon icon={faPhoneAlt} className="text-green-700 text-3xl sm:text-4xl mb-2 sm:mb-3" />
      <h3 className="text-lg sm:text-xl font-semibold">Phone</h3>
      <p className="text-gray-600 text-sm sm:text-base">+66 93 329 1520</p>
    </div>

    {/* Email */}
    <div className="flex flex-col items-center">
      <FontAwesomeIcon icon={faEnvelope} className="text-green-700 text-3xl sm:text-4xl mb-2 sm:mb-3" />
      <h3 className="text-lg sm:text-xl font-semibold">Email Us</h3>
      <p className="text-gray-600 text-sm sm:text-base">info@thaifloraexports.com</p>
    </div>

    {/* Address */}
    <div className="flex flex-col items-center">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-700 text-3xl sm:text-4xl mb-2 sm:mb-3" />
      <h3 className="text-lg sm:text-xl font-semibold">Address</h3>
      <p className="text-gray-600 text-sm sm:text-base">
        35/4, Village No. 4, Bueng Kho Hai Subdistrict, Lum Luk Ka District, Pathum Thani, Thailand 12150.
      </p>
    </div>
  </div>
</div>

    </section>
  );
};

export default ContactUsBanner;
