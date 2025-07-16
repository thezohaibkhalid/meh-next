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
    setShowLeft(scrollLeft > 5);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container && blogs.length > 0) {
      updateArrowVisibility();
      window.addEventListener("resize", updateArrowVisibility);
      container.addEventListener("scroll", updateArrowVisibility);

      // Cleanup function to remove event listeners
      return () => {
        window.removeEventListener("resize", updateArrowVisibility);
        container.removeEventListener("scroll", updateArrowVisibility);
      };
    }
  }, [blogs.length]); // Dependency is now blogs.length

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const container = scrollRef.current;
      const firstCard = container.children[0] as HTMLElement;
      const scrollAmount = firstCard.offsetWidth;
      const gap = 16; // from space-x-4

      container.scrollBy({
        left: direction === "left" ? -(scrollAmount + gap) : scrollAmount + gap,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-12 h-12 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll left"
        >
          <FaChevronLeft size={24} />
        </button>
      )}

      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-12 h-12 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll right"
        >
          <FaChevronRight size={24} />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 snap-x snap-mandatory no-scrollbar py-8 px-4 sm:px-12 scroll-smooth"
      >
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            href={`/blogs/${blog._id}`}
            className="shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[28vw] relative group aspect-[16/10] md:aspect-[4/5] rounded-lg overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
              style={{ backgroundImage: `url(${blog.coverImg})` }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="relative z-10 h-full p-4 sm:p-6 flex flex-col justify-end text-left">
              <h3 className="font-semibold text-xl sm:text-2xl text-white mb-2 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-200">
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
