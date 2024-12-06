import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import ContactPage from "./Components/ContactPage";
import New from "./Components/NewAboutPage";
import Footer from "./Components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        } min-h-screen`}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero darkMode={darkMode} />
                <New />
                <Projects darkMode={darkMode} />
              </>
            }
          />
          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
