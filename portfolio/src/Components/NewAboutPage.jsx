import React, { useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBirthdayCake,
  FaMedal,
  FaSmile,
  FaGamepad,
  FaLaptop,
  FaPaintBrush,
  FaMicrophoneAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const sections = [
    {
      id: "personal",
      label: "Personal Info",
      icon: <FaUser className="inline-block mr-2 text-base" />,
      content: (
        <ul className="space-y-4">
          <li className="flex items-center">
            <FaPhoneAlt className="mr-3" />
            +94 723856210
          </li>
          <li className="flex items-center">
            <FaMapMarkerAlt className="mr-3" />
            Colombo, Sri Lanka
          </li>
          <li className="flex items-center">
            <FaGraduationCap className="mr-3" />
            BEng(Hons) Software Engineering 
          </li>
          <li className="flex items-center">
            <FaBirthdayCake className="mr-3" />
            19 / Nov / 2004
          </li>
        </ul>
      ),
    },
    {
      id: "qualifications",
      label: "Qualifications",
      icon: <FaGraduationCap className="inline-block mr-2 text-base " />,
      content: (
        <ul className="space-y-4">
          <li>
            <strong>2018 - 2020:</strong> Cambridge GCE O/Ls | Lyceum International School Nugegoda
          </li>
          <li>
            <strong>2020 - 2022:</strong> Cambridge GCE A/Ls | Lyceum International School Nugegoda
          </li>
          <li>
            <strong>Wendy Whatmore Academy:</strong> Spoken English, Speech, and Drama
            <br />
            <span className="text-sm">(Respective Teacher: Suranjika Bartholomeusz)</span>
          </li>
        </ul>
      ),
    },
    {
      id: "extra",
      label: "Extra-curricular Activities",
      icon: <FaMedal className="inline-block mr-2 text-base" />,
      content: (
        <ul className="space-y-4">
          <li>
            <strong>Member of the</strong>{" "}
            <span className="font-medium">Soul Sounds Academy Choir</span> directed by{" "}
            <strong>Soundarie David Rodrigo</strong>.
          </li>
          <li>
            <strong>IIT Badminton and Swimming Member</strong>
          </li>
          <li>
            <strong>IIT Toastmasters Club Member</strong>
          </li>
        </ul>
      ),
    },
    {
      id: "hobbies",
      label: "Hobbies",
      icon: <FaSmile className="inline-block mr-2 text-base" />,
      content: (
        <ul className="space-y-4">
          <li className="flex items-start">
            <FaGamepad className="mr-3" />
            I enjoy playing FPS games,
          </li>
          <li className="flex items-start">
            <FaLaptop className="mr-3 text-2xl" />
            I like to host, maintain, and deploy full-stack web applications.
          </li>
          <li className="flex items-start">
            <FaPaintBrush className="mr-3" />
            I enjoy drawing and shading creative pictures of vehicles.
          </li>
          <li className="flex items-start">
            <FaMicrophoneAlt className="mr-3" />
            I like to sing.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div id="about" className="px-4 py-8 md:py-12 transition-all dark:bg-gray-900 dark:text-white bg-white text-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* About Page Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h1>
        <p className="text-center text-lg mb-12">
          Hi, I'm Chenuka! I'm a software engineer passionate about building amazing applications and learning new technologies.
          Here's a little bit about me.
        </p>

        {/* Container with rounded corners */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          {/* Navigation Tabs */}
          <nav className="border-b mb-6 mt-10">
            <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveTab(section.id)}
                    className={`flex items-center text-sm md:text-base font-medium py-3 px-5 md:px-6 rounded-lg w-full md:w-auto transition-all duration-300 ${
                      activeTab === section.id
                        ? "bg-indigo-900 text-white scale-105"
                        : "hover:bg-indigo-400 hover:text-white"
                    }`}
                  >
                    {section.icon}
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Section Content */}
          <div className="p-8">
            {sections.map(
              (section) =>
                activeTab === section.id && (
                  <div key={section.id}>
                    <h2 className="text-2xl font-bold mb-4">{section.label}</h2>
                    {section.content}
                  </div>
                )
            )}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[ 
              { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl mx-auto" /> },
              { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl mx-auto" /> },
              { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-4xl mx-auto" /> },
              { name: "React", icon: <FaReact className="text-blue-400 text-4xl mx-auto" /> },
              { name: "Python", icon: <FaPython className="text-blue-400 text-4xl mx-auto" /> },
              { name: "Java", icon: <FaJava className="text-red-500 text-4xl mx-auto" /> },
              { name: "Docker", icon: <FaDocker className="text-blue-400 text-4xl mx-auto" /> },
              { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl mx-auto" /> },
              { name: "Figma", icon: <FaFigma className="text-pink-500 text-4xl mx-auto" /> },
              { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl mx-auto" /> },
              { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl mx-auto" /> },
              { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl mx-auto" /> },
              { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-600 text-4xl mx-auto" /> },
              { name: "Premiere Pro", icon: <SiAdobepremierepro className="text-purple-600 text-4xl mx-auto" /> },
            ].map((skill, idx) => (
              <div key={idx}>
                {skill.icon}
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
