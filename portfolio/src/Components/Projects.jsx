import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import pic1 from "../Images/pic1.jpg";
import pic2 from "../Images/pic2.png";
import pic3 from "../Images/pic3.jpg";
import pic4 from "../Images/pic4.jpg";
import pic5 from "../Images/pic5.jpg";

const Projects = () => {
  const projectData = [
    {
      title: "Student Progression Outcome Predictor",
      image: pic1,
      github: "https://github.com/Chenuka608/SD1-CW", // Added GitHub link
      description:
        "A Python project to calculate students' progression outcomes based on their results and save them to a file.",
    },
    {
      title: "Sports Website",
      image: pic2,
      github: "https://github.com/aashif-m/Athletica", // Added GitHub link
      description:
        "A group project where I developed the Sitemap page with SVG and a thumbnail image navigation system.",
    },
    {
      title: "Restaurant Queue Management System",
      image: pic3,
      github: "https://github.com/Chenuka608/Java-1st-Year", // Added GitHub link
      description:
        "A Java and JavaFX app for queue management, burger stock tracking, and income analysis for each queue.",
    },
    {
      title: "Internship Preparation Web Application",
      image: pic4,
      github: "https://github.com/Chenuka608/sdgpprojectv2", // Added GitHub link
      description:
        "A ReactJS and Tailwind CSS web app offering interview demos and coding questionnaires for internship prep.",
    },
    {
      title: "Online Shopping System",
      image: pic5,
      github: "https://github.com/Chenuka608/New-OOP-Coursework", // Added GitHub link
      description:
        "A Java Swing-based system with product categories, a shopping cart, and data persistence.",
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div id="projects" className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Projects</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Explore some of the projects I have worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="relative group bg-white dark:bg-gray-800 shadow-lg rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-3xl"
            />

            {/* Project Title */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4">
              <p className="text-white text-sm mb-4">
                {project.description}
              </p>
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-300 transition-all duration-300"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-gray-300 transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
