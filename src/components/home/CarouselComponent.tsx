"use client";

import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBehance,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./CarouselComponentCss.css";
import { slidesData } from "@/types/SlidesData";
const CarouselComponent = () => {
 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isUnfilling, setIsUnfilling] = useState(false);
  const filledTime = 2000;
  const unfillTime = 500;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: ReturnType<typeof setTimeout>;

    if (!isUnfilling) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 100 / (filledTime / 100);
        });
      }, 100);
    }

    if (progress >= 100) {
      setIsUnfilling(true);
      timeout = setTimeout(() => {
        setProgress(0);
        setIsUnfilling(false);
        setCurrentSlide((prev) => (prev + 1) % slidesData.length);
      }, unfillTime);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [progress, isUnfilling]);

  interface HandleBarClick {
    (index: number): void;
  }

  const handleBarClick: HandleBarClick = (index) => {
    setCurrentSlide(index);
    setProgress(0);
    setIsUnfilling(false);
  };

  const getVisibleSlides = () => {
    const startIndex =
      currentSlide >= slidesData.length - 1
        ? slidesData.length - 2
        : currentSlide;
    return slidesData.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="relative h-[90vh] 2xl:h-[100vh] overflow-hidden bg-black/30">
      <div className="carousel-container h-full w-full relative">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 min-h-screen bg-cover bg-center bg-no-repeat hero-slide fade ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: index === currentSlide ? (isUnfilling ? 0 : 1) : 0,
              transition: "opacity 1s ease-in-out, background-size 0.1s linear",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/40 via-transparent to-transparent" />
            </div>
            <div className="flex justify-between items-center h-full px-10 text-white max-w-[1440px] mx-auto relative z-10">
              <div className="w-full md:w-[70%] h-auto flex flex-col justify-between space-y-4 items-center">
                <h1 className="text-[36px] sm:text-[56px] md:text-[48px] lg:text-[56px]">
                  {slide.heading}
                  <span className="text-[#FFFFFFA6] ml-3">
                    {slide.subheading}
                  </span>
                </h1>
              </div>

              <div className="hidden md:flex flex-col space-y-2 right-[-150px] bottom-132 z-30">
                {[
                  {
                    label: "Instagram",
                    icon: <FaInstagram className="text-xl" />,
                    href: "https://www.instagram.com/mbhstudioo",
                    color:
                      "hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500",
                  },
                  {
                    label: "Facebook",
                    icon: <FaFacebookF className="text-xl" />,
                    href: "https://www.facebook.com/mbhstudioo",
                    color: "hover:bg-blue-600",
                  },
                  {
                    label: "YouTube",
                    icon: <FaYoutube className="text-xl" />,
                    href: "https://www.youtube.com/@mbhstudioo",
                    color: "hover:bg-red-600",
                  },
                  {
                    label: "Behance",
                    icon: <FaBehance className="text-xl" />,
                    href: "https://www.behance.net/mbhstudioo",
                    color: "hover:bg-blue-800",
                  },
                  {
                    label: "Twitter",
                    icon: <FaXTwitter className="text-xl" />,
                    href: "https://x.com/mbhstudioo",
                    color: "hover:bg-black",
                  },
                  {
                    label: "Linkedin",
                    icon: <FaLinkedin className="text-xl" />,
                    href: "https://www.linkedin.com/in/mbhstudioo/",
                    color: "hover:bg-[#0a66c2]",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2 border border-white/20 rounded-full
                      transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                      hover:border-transparent hover:scale-110
                      backdrop-blur-sm bg-white/5
                      group relative
                      ${item.color}
                      hover:shadow-lg
                    `}
                  >
                    <span
                      className="
                        absolute right-full top-1/2 -translate-y-1/2
                        mr-3 px-3 py-1 text-xs font-medium
                        bg-black/80 text-white rounded-full
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-200
                        whitespace-nowrap
                      "
                    >
                      {item.label}
                    </span>
                    <div className="relative">
                      <span className="block group-hover:scale-90 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="z-10 absolute bottom-5 w-full flex flex-row justify-around items-center">
          <div className="flex sm:hidden w-full justify-around px-4">
            {getVisibleSlides().map((slide, index) => {
              const actualIndex = slidesData.indexOf(slide);
              return (
                <div
                  key={actualIndex}
                  className="loading-bar flex-1 mx-2"
                  onClick={() => handleBarClick(actualIndex)}
                >
                  <div
                    className="progress"
                    style={{
                      width:
                        actualIndex === currentSlide ? `${progress}%` : "0%",
                      transition: isUnfilling
                        ? `width ${unfillTime}ms linear`
                        : "width 0.5s linear",
                    }}
                  />
                  <div className="label text-white text-sm font-medium -translate-y-8 text-center">
                    {slide.barheading}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden sm:flex lg:hidden w-full justify-around">
            {slidesData.slice(0, 3).map((_, index) => (
              <div
                key={index}
                className="loading-bar"
                onClick={() => handleBarClick(index)}
              >
                <div
                  className="progress"
                  style={{
                    width: index === currentSlide ? `${progress}%` : "0%",
                    transition: isUnfilling
                      ? `width ${unfillTime}ms linear`
                      : "width 0.5s linear",
                  }}
                />
                <div className="label text-white md:text-xs lg:text-sm -translate-y-8">
                  {slidesData[index].barheading}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex w-full justify-around">
            {slidesData.map((_, index) => (
              <div
                key={index}
                className="loading-bar"
                onClick={() => handleBarClick(index)}
              >
                <div
                  className="progress"
                  style={{
                    width: index === currentSlide ? `${progress}%` : "0%",
                    transition: isUnfilling
                      ? `width ${unfillTime}ms linear`
                      : "width 0.5s linear",
                  }}
                />
                <div className="label text-white lg:text-sm xl:text-base 2xl:text-xl -translate-y-8">
                  {slidesData[index].barheading}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
