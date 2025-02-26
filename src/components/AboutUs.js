"use client";
import { useState } from "react";
import CountUp from "react-countup";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [activeTab2, setActiveTab2] = useState("customer-centric-approach");

  return (
    <>
    <section className="container mx-auto p-6 flex flex-col lg:flex-row gap-8 items-center">
      {/* Text Content (Always First) */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700 text-center lg:text-left">
          All About Us
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base text-center lg:text-left">
          Welcome to THAI FLORA, your trusted partner in the export of premium
          quality trees and other plants from Thailand to various parts of the
          world. With a focus on Dubai, Qatar, Saudi Arabia, Kuwait, Oman, and
          Bahrain, we have established ourselves as a leading provider of a
          diverse range of horticultural products, ensuring exceptional quality
          and service.
        </p>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start border-b border-gray-300 mb-4">
          {[
            { id: "mission", label: "OUR MISSION" },
            { id: "expertise", label: "OUR EXPERTISE" },
            { id: "quality", label: "QUALITY ASSURANCE" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs md:text-sm font-bold ${
                activeTab === tab.id
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 border border-gray-200 rounded-md text-sm md:text-base">
          {activeTab === "mission" && (
            <p className="text-gray-700">
              Welcome to THAI FLORA, your trusted partner in the export of
              premium quality trees and plants from Thailand to various parts of
              the world...
            </p>
          )}
          {activeTab === "expertise" && (
            <p className="text-gray-700">
              With years of experience in the horticultural industry, we
              specialize in exporting a wide variety of plants, including trees,
              palms, shrubs, and succulents...
            </p>
          )}
          {activeTab === "quality" && (
            <p className="text-gray-700">
              Quality is at the heart of everything we do. We adhere to
              stringent biosecurity protocols to ensure pest-free, disease-free
              plants...
            </p>
          )}
        </div>
      </div>

      {/* Image Section */}
     {/* Image Section */}
<div className="lg:w-1/2 flex justify-center relative">
  <img
    src="/happy-clients.jpg"
    alt="Heart Shaped Plant"
    className="rounded-md w-3/4 sm:w-2/3 md:w-3/4 mx-auto"
  />
  <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-green-700 text-white p-4 rounded-bl-2xl rounded-br-2xl shadow-lg text-center w-48">
    <p className="text-2xl font-bold">
      <CountUp start={0} end={8500} duration={5} separator="," />+
    </p>
    <p className="font-semibold">Happy Clients</p>
  </div>
</div>

    </section>
    <div className="container mx-auto p-6 flex flex-col  gap-8 items-center">
       <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start border-b border-gray-300 mb-4">
       {[
         {
           id: "customer-centric-approach",
           label: "Customer-Centric Approach",
         },
         { id: "sustainable-practices", label: "Sustainable Practices" },
         { id: "global-reach", label: "Global Reach" },
       ].map((tab) => (
         <button
           key={tab.id}
           onClick={() => setActiveTab2(tab.id)}
           className={`px-4 py-2 text-xs md:text-sm font-bold ${
             activeTab2 === tab.id
               ? "text-green-700 border-b-2 border-green-700"
               : "text-gray-700"
           }`}
         >
           {tab.label}
         </button>
       ))}
     </div>

     {/* Tab Content */}
     <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto p-4 border border-gray-200 rounded-md text-sm md:text-base text-center">
  {activeTab2 === "customer-centric-approach" && (
    <p className="text-gray-700">
      We pride ourselves on our customer-centric approach, working closely
      with landscape designers, architects, and developers to meet their
      unique requirements. Whether you need plants for residential,
      commercial, or public projects, we provide tailored solutions that
      align with your vision and specifications.
    </p>
  )}
  {activeTab2 === "sustainable-practices" && (
    <p className="text-gray-700">
      Sustainability is a core value at THAI FLORA. We employ
      environmentally friendly practices in our nurseries and are
      committed to contributing to green initiatives. Our goal is to
      support the creation of greener, more sustainable urban spaces.
    </p>
  )}
  {activeTab2 === "global-reach" && (
    <p className="text-gray-700">
      While we have a strong focus on the Middle East, our reach extends
      globally. Our efficient logistics and distribution networks ensure
      timely and reliable delivery of our plants to various destinations,
      maintaining the highest standards of service and quality.
    </p>
  )}
</div>

     </div>
     </>
  );
};

export default AboutUs;
