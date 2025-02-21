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
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <div className="flex justify-between items-center">
          <div>
            <div>
            <h2
  className="text-[50px] font-extrabold uppercase text-white text-left"
  style={{
    fontFamily: "'Poppins', sans-serif",
    textShadow: "0px 0px 3px rgb(0 0 0 / 96%)", // Increase blur radius for visibility
    marginBottom:"-11px"
 
 }}
>
  OUR
</h2>



        </div>
        <div>
        <h2 className="text-5xl font-bold text-[#BE854C]">
          PROJECTS
        </h2>
        </div>
        </div>
        <Link
          href="/projects"
          className="inline-block text-lg font-semibold text-yellow-700 hover:underline"
        >
          View All Projects →
        </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm">PROJECTS</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
