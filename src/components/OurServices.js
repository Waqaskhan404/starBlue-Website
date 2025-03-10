"use-client"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Plant Production",
    description: "We specialize in high-quality plant production, ensuring healthy growth and sustainability. Our nursery provides a wide variety of plants suitable for all landscapes.",
    images: ["/plants-production-1.jpg","/plants-production-2.jpg","/plants-production-3.jpg","/plants-production-4.jpg","/plants-production-5.jpg","/plants-production-6.jpg","/plants-production-7.jpg","/plants-production-8.jpg","/plants-production-9.jpg",],
  },
  {
    title: "Landscape Designing",
    description: "Transform your outdoor spaces with our expert landscape designing services. We bring creative and functional designs that enhance the beauty of your property.",
    images: ["/landscape-designing-1.jpg", "/landscape-designing-2.jpg", "/landscape-designing-3.jpg"],
  },
  {
    title: "Landscape Maintenance",
    description: "Keep your landscapes lush and vibrant with our professional maintenance services. We provide regular care to ensure the longevity and health of your greenery.",
    images: ["/landscape-maintenance-1.jpg", "/landscape-maintenance-2.jpg", "/landscape-maintenance-3.jpg","/landscape-maintenance-4.jpg"],
  },
];

export const metadata = {
  title: "Our Services - StarBloom Plantation",
  description: "Learn more about StarBloom Plantation.",
};


export default function OurServices() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      {services.map((service, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FontAwesomeIcon icon={faStar} size="lg" className="text-yellow-500 mr-2" />
          {service.title}
          </h2>
          <p className="mb-4 text-gray-600">{service.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {service.images.map((img, i) => (
             <img
             key={i} 
             src={img} 
             alt={service.title} 
             width={300} 
             height={200} 
             loading="lazy"
             className="rounded-lg shadow-lg object-cover h-[200px] w-full"
           />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}