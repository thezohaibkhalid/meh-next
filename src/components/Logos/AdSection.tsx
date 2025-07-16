"use client";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";

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

const LogoScroller = ({
  logos,
  direction = "left",
  duration = 40000,
}: {
  logos: typeof brands;
  direction?: "left" | "right";
  duration?: number;
}) => {
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";

  const scrollAnimation = useSpring({
    from: { transform: `translateX(${from})` },
    to: { transform: `translateX(${to})` },
    config: { duration, easing: (t) => t },
    loop: true,
  });

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <animated.div className="flex gap-8 w-max" style={scrollAnimation}>
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 w-40 h-40 bg-white flex items-center justify-center rounded-2xl shadow-md border border-gray-200"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={120}
              height={120}
              className="object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default function AdSection() {
  const half = Math.ceil(brands.length / 2);
  const topRowBrands = brands.slice(0, half);
  const bottomRowBrands = brands.slice(half);

  return (
    <section
      className="w-full bg-[#F4F2F1] mt-16 py-20 sm:py-24 overflow-hidden"
      aria-label="MBH Studioo Client Brands"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 font-serif">
            Collaborative Excellence
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-sans">
            Partnering with industry pioneers to create transformative spaces
            that inspire and endure.
          </p>
        </div>
      </div>

      <div className="relative mt-12 py-4 transform -rotate-2 scale-110">
        <div className="space-y-8">
          <LogoScroller logos={topRowBrands} direction="left" />
          <LogoScroller logos={bottomRowBrands} direction="right" />
        </div>
      </div>
    </section>
  );
}
