"use client";
import Image from "next/image";

const PlantCard = ({ title, description, image }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden mt-10 mb-10 ms-10">
      {/* Image Section */}
      <div className="relative w-full h-56">
        <Image
          src={image} // Dynamic Image
          alt={title}
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-green-800 font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>

        {/* Read More Link */}
        <a href="#" className="text-green-700 font-bold mt-4 inline-block">
          READ MORE »
        </a>
      </div>
    </div>
  );
};

export default PlantCard;
