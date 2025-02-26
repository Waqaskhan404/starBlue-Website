import Link from "next/link";

const projects = [
  {
    title: "CORPORATE",
    image: "/commerical.jpg",
  },
  {
    title: "COMMERCIAL",
    image: "/commerical.jpg",
  },
  {
    title: "RESIDENTIAL",
    image: "/commerical.jpg",
  },
  {
    title: "HOSPITALITY",
    image: "/commerical.jpg",
  },
];

const ProjectSection = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6 sm:gap-12">
          {/* Title */}
          <div className="text-center sm:text-left">
            <h2
              className="text-4xl sm:text-5xl lg:text-[50px] font-extrabold uppercase text-white mb-2 sm:mb-0"
              style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow: "0px 0px 3px rgb(0 0 0 / 96%)",
              }}
            >
              OUR
            </h2>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#BE854C]">
              PROJECTS
            </h2>
          </div>

          {/* View All Link */}
          <Link
            href="/projects"
            className="inline-block text-lg font-semibold text-yellow-700 hover:underline"
          >
            View All Projects →
          </Link>
        </div>

        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white py-3 text-center">
                <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                <p className="text-xs sm:text-sm">PROJECTS</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
