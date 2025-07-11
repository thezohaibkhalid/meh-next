"use client";

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import ProjectsList from "./ProjectsList";
import Loader from "../Loader";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function FeaturedProjects({
  limit = undefined,
}: {
  limit?: number;
}) {
  const [loading, setLoading] = useState(true);
  const [minHeight, setMinHeight] = useState("calc(100vh - 300px)");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setMinHeight("auto");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const props = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 80, friction: 25 },
  });

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Victorian Architectural",
    "Modern Architectural",
    "Exterior Design",
    "Interior Design",
  ];
  const selectedCategory = searchParams.get("category") || "All";
  const filteredCategories = categories.filter(
    (category) => category !== selectedCategory
  );

  return (
    <div
      className="items-center mt-[100px] px-[2.5%]"
      style={{ minHeight: minHeight }}
    >
      <animated.h1
        style={props}
        className="text-black text-[35px] sm:[42px] md:[42px] md-lg:text-[50px] lg:text-[72px]"
      >
        {pathname === "/projects" ? "Projects" : "Featured Projects"}
      </animated.h1>
      <div className="flex justify-between my-5 border-b-2 py-10">
        <div className="flex align-center flex-wrap gap-4">
          {filteredCategories.map((category) => (
            <Link
              key={category}
              href={`/projects?category=${encodeURIComponent(category)}`}
              className="text-black border cursor-pointer border-[#c3bab1] rounded-full px-3 py-[6px] font-thin font-nunito text-[14px] leading-tight no-underline transition-all flex-shrink-0
                                    hover:bg-[#b5aba1] hover:text-white duration-300 ease-in lg:text-[20px] md:text-[16px]"
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <h3 className="text-sm">
            Request more information
            <br />
            contact@mbhstudios.com
          </h3>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader />
        </div>
      ) : pathname === "/projects" ? (
        <div className="mt-[50px]">
          <ProjectsList
            selectedCategory={selectedCategory}
            limit={limit ?? 0}
            isFeatured={false}
          />
        </div>
      ) : (
        <div className="mt-[50px]">
          <ProjectsList
            isFeatured={true}
            selectedCategory={selectedCategory}
            limit={limit ?? 0}
          />
        </div>
      )}
    </div>
  );
}
