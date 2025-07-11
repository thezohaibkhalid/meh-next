"use client";

import React, { useEffect, useRef } from "react";

const targets = [15, 5, 5000, 40];
const descriptions = [
  "Years of experience",
  "Countries covered",
  "Projects delivered",
  "Projects per year",
];

const NumbersSection = () => {
  const numberRefs = useRef<Array<HTMLHeadingElement | null>>([]);

  useEffect(() => {
    function animateNumbers() {
      const duration = 1000;

      targets.forEach((target, index) => {
        const element = numberRefs.current[index];
        if (!element) return;

        element.style.visibility = "visible";
        let start = 0;
        const increment = target / (duration / 10);

        const counter = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(counter);
            element.textContent = Math.floor(start) + "+";
          } else {
            element.textContent = Math.floor(start).toString();
          }
        }, 10);
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.disconnect(); // stop observing after triggered
        }
      });
    });

    const section = document.getElementById("numbers-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="numbers-section" className="w-full py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {targets.map((_, index) => (
          <div
            key={index}
            className="p-2 ml-5 md:ml-0 border-l-0 md:border-l-2 border-[#0F0F0FA3]"
          >
            <h1
              ref={(el) => { numberRefs.current[index] = el; }}
              className="text-[48px] sm:text-[60px] md:text-[6ß0px] lg:text-[80px] font-semibold mb-2 transition-all duration-300"
              style={{ visibility: "hidden" }}
            >
              0
            </h1>
            <p className="text-base sm:text-lg md:text-md text-gray-700">
              {descriptions[index]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumbersSection;
