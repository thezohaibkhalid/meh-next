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

  const changeBackground = (portion: number | null) => {
    const section = sections.find((s) => s.id === portion);
    setBackgroundImage(section?.image || "/interactive/logosbackground.jpg");
  };

  const handleInteraction = (portionId: number) => {
    const idToSet = portionId ?? sections[0].id;
    changeBackground(idToSet);
    setActivePortion(idToSet);
  };

  const resetInteraction = () => {
    changeBackground(null);
    setActivePortion(null);
  };

  const handleLearnMore = (e: React.MouseEvent, sectionId: number) => {
    e.stopPropagation();
    router.push("/services");
  };

  const handleGetQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push("/contact");
  };

  return (
    <>
      <section
        id="interactive-section-desktop"
        className="w-full h-screen bg-cover bg-center relative hidden md:block lg:block"
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
                  className={`text-sx mt-4 ml-10 text-left ${styles.textanimation}`}
                >
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="interactive-section-mobile"
        className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative lg:hidden md:hidden"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of architectural and design
              services crafted with precision and creativity
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-700 transform cursor-pointer ${
                  activePortion === section.id
                    ? "shadow-2xl scale-105 ring-2 ring-blue-500 ring-opacity-50"
                    : "shadow-lg hover:shadow-2xl hover:scale-102"
                }`}
                onClick={() =>
                  activePortion === section.id
                    ? resetInteraction()
                    : handleInteraction(section.id)
                }
              >
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                    activePortion === section.id
                      ? "scale-110 blur-sm"
                      : "scale-100 blur-md"
                  }`}
                  style={{ backgroundImage: `url(${section.image})` }}
                />
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    activePortion === section.id
                      ? "bg-gradient-to-r from-black/30 via-black/20 to-transparent"
                      : "bg-gradient-to-r from-black/60 via-black/40 to-black/30"
                  }`}
                />
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1 pr-6">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                        <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                          Service {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        {section.title}
                      </h3>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-full border-2 border-white/30 backdrop-blur-md bg-white/10 flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                        activePortion === section.id
                          ? "rotate-45 border-white/60 bg-white/20 scale-110"
                          : "hover:border-white/50 hover:bg-white/15"
                      }`}
                    >
                      <span className="text-white text-xl font-light">
                        {activePortion === section.id ? "×" : "+"}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  {activePortion !== section.id && (
                    <p className="text-white/90 text-base md:text-lg leading-relaxed font-light">
                      {section.description.length > 90
                        ? section.description.slice(0, 90) + "..."
                        : section.description}
                    </p>
                  )}

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-out ${
                      activePortion === section.id
                        ? "max-h-96 opacity-100 mt-0"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <p className="text-white/95 text-lg md:text-xl leading-relaxed mb-8 font-light">
                      {section.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={(e) => handleLearnMore(e, section.id)}
                        className="group/btn bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 text-base font-medium flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={handleGetQuote}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full" />
                </div>
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 ${
                    activePortion === section.id ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Let's bring your vision to life with our expert team
              </p>
              <button
                onClick={() => router.push("/services")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InteractiveSection;
