"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  createdAt: string;
  author: string;
  coverImg: string;
}

interface ShowNewsProps {
  blogs?: Blog[];
  limit?: number | null;
}

export default function ShowNews({ blogs = [], limit = null }: ShowNewsProps) {
  const [visible, setVisible] = useState<boolean[]>([]);
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(Array(blogs.length).fill(false));
  }, [blogs]);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(
          entry.target.getAttribute("data-index") || "0",
          10
        );
        setVisible((prev) => [...prev].map((v, i) => (i === index ? true : v)));
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });
    const currentRefs = refs.current;
    currentRefs.forEach((ref) => ref && observer.observe(ref));
    return () => currentRefs.forEach((ref) => ref && observer.unobserve(ref));
  }, [blogs]);
  useEffect(() => {
    setVisible(Array(blogs.length).fill(false));
  }, [blogs]);
  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {displayedBlogs.map((blog, index) => (
          <Link
            href={`/blogs/${blog._id}`}
            key={blog._id}
            className={`block group relative  overflow-hidden transition-all duration-500 ease-in-out ${
              visible[index] ? "opacity-100 scale-100" : "opacity-0 scale-70"
            }`}
            ref={(el) => {
              refs.current[index] = el;
            }}
            data-index={index}
          >
            <div className="relative w-full h-0 pb-[96.76%] ">
              <Image
                width={500}
                height={400}
                src={blog.coverImg}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-95 absolute inset-0"
              />
              {/* Remove the gradient background from behind the image */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent  transition-transform duration-500 ease-in-out group-hover:scale-95"></div>

              <div className="absolute bottom-6 left-6 right-4 text-white z-10">
                <h2 className="text-lg font-semibold leading-tight">
                  {blog.title}
                </h2>
                <div className="mt-2 flex items-center gap-2 text-sm opacity-90">
                  <span>
                    {new Intl.DateTimeFormat("en-GB", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }).format(new Date(blog.createdAt))}
                  </span>{" "}
                  <span>•</span>
                  <span>By {blog.author}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="h-24 w-full flex justify-center items-center">
        {/* <Link
          href="/blogs"
          className="relative inline-block cursor-pointer group text-xs tracking-[4px] mt-12"
        >
          <div className="relative z-8 tracking-[7px] leading-tight text-[14px] border-gray-300 uppercase">
            VIEW ALL BLOGS
          </div>
          <div className="absolute right-[2px] top-[23px] bottom-0 h-[1px] w-full bg-gray-300 transform scale-x-100"></div>
          <div className="absolute right-[2px] top-[23px] bottom-0 h-[1px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right group-hover:origin-left"></div>
        </Link> */}
      </div>
    </>
  );
}
