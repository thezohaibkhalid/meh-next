"use client";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

const brands = [
  { src: "/brand/ABExports.png", name: "AB Exports" },
  { src: "/brand/ArshadGroup.png", name: "Arshad Group" },
  { src: "/brand/Blue-World-Logistics.png", name: "Blue World Logistics" },
  { src: "/brand/Jilani-Textile-Mills.png", name: "Jilani Textile Mills" },
  { src: "/brand/KamalTextile.png", name: "Kamal Textile" },
  { src: "/brand/Masala-House.png", name: "Masala House" },
  { src: "/brand/RoyalPalmMarquee.png", name: "Royal Palm Marquee" },
  {
    src: "/brand/ShahnazFarooqIndustries.png",
    name: "Shahnaz Farooq Industries",
  },
  { src: "/brand/TheBoulevardMall.png", name: "The Boulevard Mall" },
];

const ads = [
  "Transforming Spaces with Timeless Elegance - MBH Studioo",
  "Innovative Designs for Modern Living - MBH Studioo",
  "Crafting Architectural Masterpieces - MBH Studioo",
  "Where Vision Meets Precision - MBH Studioo",
  "Designing the Future, Today - MBH Studioo",
];

const AdSection = () => {
  const infiniteScroll = useSpring({
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(-50%)" },
    config: { duration: 25000, easing: (t) => t },
    loop: true,
  });

  const marqueeScroll = useSpring({
    from: { transform: "translateX(-50%)" },
    to: { transform: "translateX(0%)" },
    config: { duration: 20000, easing: (t) => t },
    loop: true,
  });
  return (
    <section
      className="w-full bg-[#F4F2F1] mt-12 pt-10 pb-20 px-4 sm:px-6 md:px-8 lg:px-12"
      aria-label="MBH Studioo Client Brands and Advertisements"
    >
       <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 font-serif">
          Collaborative Excellence
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-sans">
          Partnering with industry pioneers to create transformative spaces that
          inspire and endure.
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <animated.div className="flex gap-8 w-max" style={infiniteScroll}>
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-44 h-44 bg-white flex items-center justify-center rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                width={140}
                height={140}
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </animated.div>
      </div>

      {/* Marquee Text */}
      <div className="mt-12 overflow-hidden w-full">
        <animated.div
          className="flex whitespace-nowrap w-max"
          style={marqueeScroll}
        >
          {[...ads, ...ads].map((ad, i) => (
            <span
              key={i}
              className="inline-block mx-6 text-lg sm:text-xl lg:text-2xl font-serif text-gray-800"
            >
              {ad}
            </span>
          ))}
        </animated.div>
      </div>
    </section>
  );
};

export default AdSection;
