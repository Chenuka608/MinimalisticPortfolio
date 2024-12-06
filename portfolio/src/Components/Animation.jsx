import React, { useEffect, useState } from "react";

const ScrollAnimationComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );
    const target = document.querySelector("#scroll-element");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="h-screen bg-gray-200 flex justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      </section>

      <section className="h-screen bg-gray-300 flex justify-center items-center">
        <div
          id="scroll-element"
          className={`transition-opacity duration-500 ${
            isVisible ? "opacity-100 animate-slideUp" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl">About Me</h2>
          <p className="mt-2">Some introduction text here...</p>
        </div>
      </section>

      <section className="h-screen bg-gray-400 flex justify-center items-center">
        <div
          id="scroll-element2"
          className={`transition-opacity duration-500 ${
            isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl">My Projects</h2>
          <p className="mt-2">Details about projects...</p>
        </div>
      </section>
    </div>
  );
};

export default ScrollAnimationComponent;
