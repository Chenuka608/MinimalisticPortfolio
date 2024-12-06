import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 py-8">
      <div className="container mx-auto text-center">
        {/* Footer Text */}
        <p className="text-sm mb-4">
          All rights reserved! © 2024 | Chenuka Sarathchandra
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/Chenuka608"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          {/* LinkedIn */}
          <a
            href='https://www.linkedin.com/in/chenuka-sarathchandra-353334266'
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/chenuka47?utm_source=qr&igsh=M3dsdmhsanZ2cW9w"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          {/* Email */}
          <a
            href="mailto:your-chenuka478@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
