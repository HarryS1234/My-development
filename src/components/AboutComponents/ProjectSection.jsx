const ProjectsSection = () => {
  // Sample project data (replace with your actual data)
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: "/assets/projectimages/project image 35.webp", // Updated path
    },
    {
      id: 2,
      title: "Project 2",
      image: "/assets/projectimages/Project Image 43.webp", // Updated path
    },
    {
      id: 3,
      title: "Project 3",
      image: "/assets/projectimages/Project Image 4.webp", // Updated path
    },
    {
      id: 4,
      title: "Project 4",
      image: "/assets/projectimages/Project Image 5.webp", // Updated path
    },
    {
      id: 5,
      title: "Project 5",
      image: "/assets/projectimages/Project Image 11.webp", // Updated path
    },
    {
      id: 6,
      title: "Project 6",
      image: "/assets/projectimages/Project Image 18.webp", // Updated path
    },
    {
      id: 7,
      title: "Project 7",
      image: "/assets/projectimages/Project Image 19.webp", // Updated path
    },
    {
      id: 8,
      title: "Project 8",
      image: "/assets/projectimages/Project Image 41.webp", // Updated path
    },
    {
      id: 9,
      title: "Project 9",
      image: "/assets/projectimages/Project Image 21.webp", // Updated path
    },
    {
      id: 10,
      title: "Project 10",
      image: "/assets/projectimages/Project Image 22.webp", // Updated path
    },
    {
      id: 11,
      title: "Project 11",
      image: "/assets/projectimages/Project Image 23.webp", // Updated path
    },
    {
      id: 12,
      title: "Project 12",
      image: "/assets/projectimages/Project image 30.webp", // Updated path
    },
    {
      id: 13,
      title: "Project 13",
      image: "/assets/projectimages/Project Image 3.webp", // Updated path
    },
    {
      id: 14,
      title: "Project 14",
      image: "/assets/projectimages/Project Image 20.webp", // Updated path
    },
    {
      id: 15,
      title: "Project 15",
      image: "/assets/projectimages/Project Image 40.webp", // Updated path
    },
    {
      id: 16,
      title: "Project 16",
      image: "/assets/projectimages/Project image 27 (1).webp", // Updated path
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#1dbbec] mb-12">
          Our Projects
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg border-4 border-[#1dbbec] group"
            >
              {/* Image with Zoom Effect */}
              <img
                src={project.image} // Updated path
                alt={project.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
