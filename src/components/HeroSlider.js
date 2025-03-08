"use client";
import { useState, useEffect } from "react";

const images = [
  { src: "/image1.jpg", text: "SB LANDSCAPING & AGRICULTURAL SERVICES, Nursery", smallText: "Dubai" },
  { src: "/image2.jpg", text: "Beautiful Landscapes", smallText: "UAE" },
  { src: "/image3.jpg", text: "Green Living Spaces", smallText: "Middle East" },
  { src: "/image4.jpg", text: "Fields Are Settled Now", smallText: "Sharjah" },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    startZoomEffect();
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const startZoomEffect = () => {
    setIsZooming(false);
    setTimeout(() => setIsZooming(true), 100);
  };

  const nextSlide = () => {
    setIsZooming(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      startZoomEffect();
    }, 300);
  };

  const prevSlide = () => {
    setIsZooming(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      startZoomEffect();
    }, 300);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Container */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out" key={currentIndex}>
        <img
          src={images[currentIndex].src}
          alt="Slider Image"
          className={`w-full h-full object-cover transition-transform duration-[5s] ${isZooming ? "scale-110" : "scale-100"}`}
          loading="lazy"
        />

        {/* Overlay Text - Responsive Sizing */}
        <div className="absolute bottom-10 md:bottom-16 lg:bottom-20 w-full flex flex-col items-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            {images[currentIndex].text}
          </h1>
          <h6 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold">
            {images[currentIndex].smallText}
          </h6>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
        onClick={nextSlide}
      >
        ▶
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-[#BE854C] scale-110" : "bg-gray-400 hover:bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
