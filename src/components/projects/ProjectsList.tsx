"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  location: string;
  coverImg: string;
}

interface ShowProjectProps {
  limit?: number;
  selectedCategory?: string;
  isFeatured?: boolean;
}

const getCacheKey = (category: string | undefined, isFeatured?: boolean) =>
  `projects_${category}_${isFeatured}`;
// const CACHE_DURATION = 5 * 60 * 60 * 1000;

const ProjectsList: React.FC<ShowProjectProps> = ({
  limit,
  selectedCategory = "All",
  isFeatured = false,
}) => {
  const DB_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [projects, setProjects] = useState<Project[]>([]);
  const [visible, setVisible] = useState<boolean[]>([]);
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const cacheKey = getCacheKey(selectedCategory, isFeatured);
        // const cachedData = localStorage.getItem(cacheKey);
        const now = new Date().getTime();

        // Skip if valid cache exists
        // if (cachedData) {
        //   const { data, timestamp } = JSON.parse(cachedData);
        //   if (now - timestamp < CACHE_DURATION) {
        //     setProjects(data);
        //     setVisible(Array(data.length).fill(false));
        //     return;
        //   }
        // }

        const url = new URL(`${DB_URL}/projects`);
        if (selectedCategory && selectedCategory !== "All") {
          url.searchParams.set("category", selectedCategory);
        }
        url.searchParams.set("isFeatured", isFeatured ? "true" : "false");

        const res = await fetch(url.toString());
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          setProjects(data.data);
          setVisible(Array(data.data.length).fill(false));

          const cacheData = {
            data: data.data,
            timestamp: now,
          };
          localStorage.setItem(cacheKey, JSON.stringify(cacheData));
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        const cacheKey = getCacheKey(selectedCategory, isFeatured);
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
          const { data } = JSON.parse(cachedData);
          setProjects(data);
          setVisible(Array(data.length).fill(false));
        }
      }
    };

    fetchProjects();
  }, [selectedCategory, isFeatured, DB_URL]);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.getAttribute("data-index") || "0");
        setVisible((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }
    });
  };

  const handleClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });

    const currentRefs = refs.current;

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projects]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 md-lg:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 cursor-pointer">
        {projects.slice(0, limit).map((project, index) => (
          <a
            key={index}
            onClick={() => handleClick(project._id)}
            ref={(el) => {
              refs.current[index] = el;
            }}
            data-index={index}
            rel="noopener noreferrer"
            className={`block group relative rounded-lg transition-all duration-500 ease-in-out ${
              visible[index] ? "animate-fadeInScale" : "opacity-0 scale-70"
            }`}
          >
            <div className="relative w-full h-0 pb-[109.09%] sm:pb-[94.8%] md:pb-[50%] md-lg:pb-[64.26%] lg:pb-[64.26%]">
              <div className="absolute inset-0 overflow-hidden transition-transform duration-500 ease-in-out group-hover:scale-95">
                <div className="h-full w-full">
                  <Image
                    width={500}
                    height={400}
                    src={project.coverImg}
                    alt={project.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/2 to-transparent">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-row md-lg:flex-row lg:flex-row absolute bottom-7 left-6 text-gray-200 w-[90%] sm:items-center md:items-center md-lg:items-center lg:items-center justify-between z-10">
                <div className="ml-0 sm:ml-3 md:ml-3 md-lg:ml-3 lg:ml-3 text-lg font-semibold">
                  {project.title}
                </div>
                <div className="flex">
                  <div className="px-3 py-1 rounded-full text-center text-sm inline-block border border-1 mt-4 sm:mt-0 md:mt-0 md-lg:mt-0 lg:mt-0">
                    {project.location}
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="h-24 w-full flex justify-center items-center pt-10">
        {pathname === "/projects" ? (
          <Link
            href="/"
            className="relative inline-block cursor-pointer group text-xs tracking-[4px] mt-12"
          >
            <div className="relative z-8 tracking-[7px] leading-tight text-[14px] border-gray-300">
              HOMEPAGE
            </div>
            <div className="absolute right-[2px] top-[23px] bottom-0 h-[1px] w-full bg-gray-300 transform scale-x-100"></div>
            <div className="absolute right-[2px] top-[23px] bottom-0 h-[1px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right group-hover:origin-left"></div>
          </Link>
        ) : (
          <Link
            href="/projects"
            className="relative inline-block cursor-pointer group text-xs tracking-[4px] mt-12"
          >
            <div className="relative z-8 tracking-[7px] leading-tight text-[13px] border-gray-300">
              VIEW PROJECT
            </div>
            <div className="absolute right-[2px] top-[23px] bottom-0 h-[1px] w-full bg-gray-300 transform scale-x-100"></div>
            <div className="absolute right-[2px] top-[23px] bottom-0 h-[1px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right group-hover:origin-left"></div>
          </Link>
        )}
      </div>
    </>
  );
};

export default ProjectsList;
