import React from "react";
import projectimg from "../../assets/projectimages/Project Image 35.webp"; // Ensure this path is correct
import projectimg1 from "../../assets/projectimages/Project Image 43.webp"; // Ensure this path is correct
import projectimg2 from "../../assets/projectimages/Project Image 4.webp"; // Ensure this path is correct
import projectimg3 from "../../assets/projectimages/Project Image 5.webp"; // Ensure this path is correct
import projectimg4 from "../../assets/projectimages/Project Image 11.webp"; // Ensure this path is correct
import projectimg5 from"../../assets/projectimages/Project Image 18.webp";// Ensure this path is correct
import projectimg6 from "../../assets/projectimages/Project Image 19.webp"; // Ensure this path is correct
import projectimg7 from "../../assets/projectimages/Project Image 41.webp"; // Ensure this path is correct
import projectimg8 from "../../assets/projectimages/Project Image 21.webp"; // Ensure this path is correct
import projectimg9 from "../../assets/projectimages/Project Image 22.webp"; // Ensure this path is correct
import projectimg10 from "../../assets/projectimages/Project Image 23.webp"; // Ensure this path is correct
import projectimg11 from "../../assets/projectimages/Project Image 30.webp"; // Ensure this path is correct
import projectimg12 from "../../assets/projectimages/Project Image 3.webp"; // Ensure this path is correct
import projectimg13 from "../../assets/projectimages/Project image 20.webp"; // Ensure this path is correct
import projectimg14 from "../../assets/projectimages/Project Image 40.webp"; // Ensure this path is correct
// Ensure this path is correct
import projectimg15 from "../../assets/projectimages/Project image 27 (1).webp"; // Ensure this path is correct


const ProjectsSection = () => {
  // Sample project data (replace with your actual data)
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: projectimg, // Use the imported image directly
      
    },
    {
      id: 2,
      title: "Project 2",
      image: projectimg1, // Use the imported image directly
      
    },
    {
      id: 3,
      title: "Project 3",
      image: projectimg2, // Use the imported image directly
      
    },
    {
      id: 4,
      title: "Project 4",
      image: projectimg3, // Use the imported image directly
    
    },
    {
      id: 4,
      title: "Project 4",
      image: projectimg4, // Use the imported image directly
    
    },
    {
      id: 4,
      title: "Project 4",
      image: projectimg5, // Use the imported image directly
    
    },
    {
      id: 4,
      title: "Project 4",
      image: projectimg6, // Use the imported image directly
    
    },
        {
        id: 4,
        title: "Project 4",
        image: projectimg7, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: projectimg8, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: projectimg9, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: projectimg10, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: projectimg11, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: projectimg12, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: projectimg13, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: projectimg14, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: projectimg15, // Use the imported image directly
        
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
                src={project.image} // Use project.image directly
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