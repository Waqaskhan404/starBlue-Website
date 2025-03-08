import React from "react";

const categories = [
  { id: 1, name: "Palms", image: "/plams.jpg" },
  { id: 2, name: "Trees", image: "/trees.jpg" },
  { id: 3, name: "Fruit Trees", image: "/fruits.jpg" },
  { id: 4, name: "Shrubs", image: "/shrubs.jpg" },
  { id: 5, name: "Vines", image: "/vines.jpg" },
  { id: 6, name: "Succulents", image: "/succulents.jpg" },
  { id: 7, name: "Groundcovers", image: "/groundcovers.jpg" },
  { id: 8, name: "Seasonals", image: "/seasonals.jpg" },
  { id: 9, name: "Native Plants", image: "/native-plants.jpg" },
  { id: 10, name: "Herbs", image: "/herbs.jpg" },
  { id: 11, name: "Vegetables", image: "/vegetables.jpg" },
  { id: 12, name: "Water Plants", image: "/water-plants.jpg" },
];

const PlantCategories = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-green-900 text-center mb-8">
        Plant Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image Container */}
            <div className="overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="w-full h-32 sm:h-40 md:h-48 object-cover transition-all duration-300 hover:scale-110 hover:brightness-90"
              />
            </div>
            {/* Text Container */}
            <div className="p-3 sm:p-4 text-center">
              <h3 className="text-base sm:text-lg font-bold text-green-900 transition-all duration-300 hover:text-yellow-500">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantCategories;
