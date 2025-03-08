import React from "react";

const images = [
  "/our-gallery1.jpg",
  "/our-gallery2.jpg",
  "/our-gallery3.jpg",
  "/our-gallery4.jpg",
  "/our-gallery5.jpg",
  "/our-gallery6.jpg",
  "/loading1.jpg",
  "/loading2.jpg",
  "/loading3.jpg",



];

export const metadata = {
  title: "Our Gallery - StarBloom Plantation",
  description: "Learn more about StarBloom Plantation.",
};

const Gallery = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Our Gallery</h2>
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
        Upon request, we also deal in plants from foreign countries like
        Thailand, China, and Pakistan.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
