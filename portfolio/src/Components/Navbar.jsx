import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoLight from "../Images/logo3.png";
import logoDark from "../Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleNavigation = (id) => {
    if (location.pathname === "/contact") {
      navigate("/"); // Navigate to the main page first
      setTimeout(() => scrollToSection(id), 100); // Wait for the main page to load
    } else {
      scrollToSection(id);
    }
    setIsOpen(false); // Close the menu
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = document.querySelector("nav").offsetHeight; // Get navbar height
      const topPosition = section.offsetTop - offset; // Adjust for navbar
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  const navigateToContact = () => {
    navigate("/contact");
    setIsOpen(false); // Close the mobile menu if open
  };

  return (
    <nav className="sticky top-0 z-20 bg-white dark:bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-md transition-all duration-300">
      <div className="flex justify-between items-center py-6 px-8">
        {/* Logo */}
        <div>
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {[{ name: "Home", id: "hero" }, { name: "About", id: "about" }, { name: "Projects", id: "projects" }].map(
            (item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className="relative group text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-gray-800 dark:bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              </li>
            )
          )}
          <li>
            <button
              onClick={navigateToContact}
              className="ml-4 bg-black dark:bg-white text-white dark:text-black py-2 px-6 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
            >
              Contact Me
            </button>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="mr-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center space-y-4 md:hidden bg-white dark:bg-gray-800 py-4 px-8 border-t border-gray-200 dark:border-gray-700">
          {[{ name: "Home", id: "hero" }, { name: "About", id: "about" }, { name: "Projects", id: "projects" }].map(
            (item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className="block text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {item.name}
                </button>
              </li>
            )
          )}
          <li>
            <button
              onClick={navigateToContact}
              className="block bg-black dark:bg-white text-white dark:text-black py-2 px-6 rounded-full text-center hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
            >
              Contact Me
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
