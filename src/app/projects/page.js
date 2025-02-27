"use client";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Dubai Hills – Sidra 3",
    description: "Palms, Trees, Shrubs, Grasses, Succulents, Groundcovers and Seasonals",
    images: ["/project-card1.jpg", "/project-card1-2.jpg", "/project-card1-1.jpg", "/project-card1-2.jpg"],
  },
  {
    title: "Al Dahid Safari Park",
    description: "Palms, Trees, Native trees, Native grasses and Native shrubs",
    images: ["/project-card2.jpg", "/project-card2-1.jpg", "/project-card2.jpg", "/project-card2-1.jpg"],
  },
  {
    title: "Dubai Hills – Maple 3",
    description: "Palms, Trees, Shrubs, Grasses, Succulents, Groundcovers and Seasonals",
    images: ["/project-card3.jpg", "/project-card3-1.jpg", "/project-card3-2.jpg", "/project-card3-1.jpg"],
  },
];

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={project.images[currentImage]} alt={project.title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-green-800">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
        <div className="flex gap-2 mt-2">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`w-12 h-12 object-cover cursor-pointer rounded ${
                index === currentImage ? "border-2 border-green-600" : ""
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
