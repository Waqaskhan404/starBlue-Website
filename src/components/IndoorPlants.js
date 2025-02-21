import React from "react";

const IndoorPlants = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20">
        {/* Image Section (Single Large Image) */}
        <div className="md:w-1/2">
          <img
            src="/indoor-plants.jpg"
            alt="Indoor Plants"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 md:ml-12 mt-8 md:mt-0">
          <h2 className="text-4xl font-bold text-green-900">Indoor Plants</h2>
          <p className="mt-2 text-yellow-600">
            Beautiful indoor plants from our nursery to your home.
          </p>
          <p className="mt-4 text-gray-600">
            Plants have the power to transform your space, and we believe they belong everywhere.
            Our collection of houseplants varies from trusty favorites to rarities—alongside floor
            plants, air plants, and even a few oddities. You can find a simple, beautiful way to add
            that much-needed pop of greenery to your home.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-3 border border-green-900 text-green-900 font-semibold rounded-lg hover:bg-green-900 hover:text-white transition duration-300">
            View Plants
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndoorPlants;
