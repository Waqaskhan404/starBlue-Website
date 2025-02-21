import React from 'react';

const categories = [
  { id: 1, name: 'Palms', image: '/plams.jpg' },
  { id: 2, name: 'Trees', image: '/trees.jpg' },
  { id: 3, name: 'Fruit Trees', image: '/fruits.jpg' },
  { id: 4, name: 'Shrubs', image: '/shrubs.jpg' },
  { id: 5, name: 'Vines', image: '/vines.jpg' },
  { id: 6, name: 'Succulents', image: '/succulents.jpg' },
  { id: 7, name: 'Groundcovers', image: '/groundcovers.jpg' },
  { id: 8, name: 'Seasonals', image: '/seasonals.jpg' },
  { id: 9, name: 'Native Plants', image: '/native-plants.jpg' },
  { id: 10, name: 'Herbs', image: '/herbs.jpg' },
  { id: 11, name: 'Vegetables', image: '/vegetables.jpg' },
  { id: 12, name: 'Water Plants', image: '/water-plants.jpg' },
];

const PlantCategories = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover transition-all duration-500 hover:scale-110 hover:brightness-75"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-green-900 transition-all duration-500 hover:text-yellow-500">
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
