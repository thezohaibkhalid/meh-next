"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Blog = {
  _id: string;
  title: string;
  createdAt: string;
  coverImg: string;
};

export default function BlogScroller({ blogs }: { blogs: Blog[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateArrowVisibility = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1); // -1 to avoid precision issues
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      updateArrowVisibility();
      container.addEventListener("scroll", updateArrowVisibility);
      return () =>
        container.removeEventListener("scroll", updateArrowVisibility);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Scroll Arrows */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 cursor-pointer top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-300 rounded-full w-18 h-18 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll left"
        >
          <FaChevronLeft size={32} />
        </button>
      )}

      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 cursor-pointer top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-300 rounded-full w-18 h-18 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll right"
        >
          <FaChevronRight size={32} />
        </button>
      )}

      {/* Blog List */}
      <div
        ref={scrollRef}
        className="h-[60vh] flex overflow-x-auto space-x-4 snap-x snap-mandatory no-scrollbar mt-8 px-12 scroll-smooth"
      >
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            href={`/blogs/${blog._id}`}
            className="shrink-0 min-w-[250px] w-[90vw] sm:w-[65vw] md:w-[55vw] lg:w-[40vw] xl:w-[30vw] relative group aspect-[4/5]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-95 group-hover:translate-y-[-10px]"
              style={{ backgroundImage: `url(${blog.coverImg})` }}
            ></div>

            <div className="relative z-10 h-full p-6 rounded-lg flex flex-col justify-end text-left transition-transform duration-700 group-hover:translate-y-[-10px]">
              <h3 className="font-normal text-2xl mt-4 text-white mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-300 mb-2">
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
