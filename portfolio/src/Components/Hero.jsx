import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import me from "../Images/me.png";
import CV from "../Assets/cv.pdf";
import lightBg from "../Images/dark.png";
import darkBg from "../Images/light.png";

const Hero = ({ darkMode }) => {
  const navigate = useNavigate();

  // Handle theme toggle or set in dark mode
  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between px-8 py-10 md:py-32 bg-white dark:bg-gray-900 text-black dark:text-white space-y-10 md:space-y-0 md:space-x-8 relative"
      style={{
        backgroundImage: `url(${darkMode ? darkBg : lightBg})`, // Conditionally set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Side Image Container */}
      <div className="flex flex-col items-center md:w-1/3 lg:w-1/4 relative z-10">
        <div className="h-72 md:h-96 lg:h-[36rem] w-full max-w-xs md:max-w-full rounded-3xl border-2 border-gray-300 dark:border-gray-700 overflow-hidden">
          <img
            src={me}
            alt="Chenuka Sarathchandra"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.instagram.com/chenuka47?utm_source=qr&igsh=M3dsdmhsanZ2cW9w"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition transform hover:scale-110"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/chenuka-sarathchandra-353334266"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Chenuka608"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:your-chenuka478@gmail.com"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition transform hover:scale-110"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Right Side Text */}
      <div className="md:w-2/3 text-center md:text-left relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Hi, I’m{" "}
          <span className="text-gray-700 dark:text-gray-300">
            Chenuka Sarathchandra
          </span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400">
          A passionate Software Engineer | Full Stack Developer
        </p>
        <p className="mt-8 text-lg sm:text-xl md:text-xl text-gray-500 dark:text-gray-400 max-w-md mx-auto md:mx-0">
          I specialize in building responsive, scalable web applications with
          modern web technologies. Welcome to my portfolio.
        </p>

        {/* Button Container */}
        <div className="flex flex-col md:flex-row md:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-10 w-full">
          {/* Contact Me Button */}
          <button
            onClick={handleNavigateToContact}
            className="inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black py-2 px-6 md:py-3 md:px-8 rounded-full text-sm md:text-lg hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-black transition duration-300"
          >
            <FaPaperPlane className="mr-2 text-base md:text-xl" />
            Contact Me
          </button>

          {/* Download CV Button */}
          <a
            href={CV}
            download
            className="inline-flex items-center justify-center border-2 border-black dark:border-white py-2 px-6 md:py-3 md:px-8 rounded-full text-sm md:text-lg hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-black transition duration-300"
          >
            <FaDownload className="mr-2 text-base md:text-xl" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
