import Image from "next/image";
import React from "react";
import { FaEye } from "react-icons/fa";

const projects = [
  { title: "Countdown Timer", link: "https://30days-of-30projects-topaz.vercel.app/", image: "/count.png" },
  { title: "Simple Calculator", link: "https://projects-for-beginners-calculator.vercel.app/", image: "/images2.jpg" },
  { title: "Amazon Copy", link: "https://projects-for-beginners.vercel.app/", image: "/download.png" },
  { title: "Portfolio Designs", link: "https://assignment-7th-october-2024alisprotfolio.vercel.app/", image: "/download.jpg" },
  { title: "Login Form", link: "https://projects-for-beginners-loginform.vercel.app/", image: "/images3.jpg" },
  { title: "Student ID Card", link: "https://assignment-30-sep-2024.vercel.app/", image: "/images.jpg" },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="bg-[#323846] min-h-screen p-10">
      <h2 className="text-2xl font-extrabold text-center mt-10 mb-14 md:mb-32">My <span className="text-[#00EEFF] text-4xl font-extrabold">Projects</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={200}
              className="w-full h-40 object-cover opacity-75 hover:opacity-50 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <a
                href={project.link}
                className="flex items-center space-x-1 text-sm text-blue-400 hover:underline"
              >
                <FaEye />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
