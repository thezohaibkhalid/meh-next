"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./InteractiveSection.module.css";

const InteractiveSection = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "/interactive/logosbackground.jpg"
  );
  const [activePortion, setActivePortion] = useState<number | null>(null);
  const router = useRouter();

  const sections = [
    {
      id: 1,
      title: "Modern Interior Design",
      description:
        "Enhance indoor spaces with elegant designs, functional layouts, and aesthetic appeal.",
      image: "/interactive/Modern-Interior.jpeg",
    },
    {
      id: 2,
      title: "Victorian Architecture Design",
      description:
        "Classic Victorian architecture with intricate detailing and timeless structural beauty.",
      image: "/interactive/Victorina-architecture.jpeg",
    },
    {
      id: 3,
      title: "Town Planning",
      description:
        "Efficiently designed urban spaces for sustainable growth and community well-being.",
      image: "/interactive/Town-Planing.jpeg",
    },
    {
      id: 4,
      title: "Landscaping",
      description:
        "Transform outdoor spaces with lush greenery, functional hardscapes, and stunning designs.",
      image: "/interactive/Landscaping.jpeg",
    },
  ];

  const handleInteraction = (id: number) => {
    const section = sections.find((s) => s.id === id);
    setBackgroundImage(section?.image || "/interactive/logosbackground.jpg");
    setActivePortion(id);
  };

  const resetInteraction = () => {
    setBackgroundImage("/interactive/logosbackground.jpg");
    setActivePortion(null);
  };

  const handleLearnMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/services");
  };

  const handleGetQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/contact");
  };

  return (
    <>
      {/* ✅ Desktop View */}
      <section
        id="interactive-section-desktop"
        className="w-full h-screen bg-cover bg-center relative hidden md:block"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="mx-auto grid grid-cols-4 h-full relative">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`relative flex items-end justify-end text-white transition-colors duration-300 cursor-pointer pb-32 ${
                index < 3 ? "border-r-2 border-zinc-900" : ""
              } ${activePortion === section.id ? styles.hovered : ""}`}
              onMouseOver={() => handleInteraction(section.id)}
              onMouseOut={resetInteraction}
            >
              <div className="text-center">
                <h1
                  className={`text-2xl font-normal ${styles.headinganimation}`}
                >
                  {section.title}
                </h1>
                <p
                  className={`text-sm mt-4 ml-10 text-left ${styles.textanimation}`}
                >
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Mobile View with Blurred Backgrounds */}
      <section className="w-full min-h-screen flex flex-col md:hidden">
        {sections.map((section) => {
          const isActive = activePortion === section.id;

          return (
            <div
              key={section.id}
              className="flex-1 relative cursor-pointer transition-all duration-500 ease-in-out"
              onClick={() => setActivePortion(isActive ? null : section.id)}
              style={{
                minHeight: isActive ? "55vh" : "25vh",
                backgroundImage: `url(${section.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div
                className={`absolute inset-0 z-0 transition-all duration-500 ${
                  isActive ? "bg-black/70" : "backdrop-blur-md bg-black/30"
                }`}
              />

              {/* Content */}
              <div className="relative z-10 h-full w-full p-6 flex flex-col justify-center">
                <h2 className="text-xl font-semibold text-white">
                  {section.title}
                </h2>

                {isActive && (
                  <div className="mt-4 text-white">
                    <p className="mb-4 text-sm">{section.description}</p>
                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={handleLearnMore}
                        className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black text-sm"
                      >
                        Learn More
                      </button>
                      <button
                        onClick={handleGetQuote}
                        className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 text-sm"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default InteractiveSection;
