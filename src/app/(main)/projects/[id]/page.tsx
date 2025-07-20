"use client";

import { useState, useEffect, useRef, useCallback } from "react"; // Added useCallback
import { useRouter, useParams } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdError, MdSearch } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";
import Gallery from "@/components/Gallery";
import Loader from "@/components/Loader";
import Link from "next/link";

type Project = {
  _id: string;
  title: string;
  location: string;
  size: string;
  createdAt: string;
  coverImg: string;
  galleryImages?: string[];
};

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string | undefined;

  const [projects, setProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Project | null>(null);
  const [projectIndex, setProjectIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const imgRef = useRef<HTMLDivElement>(null);

  const zoomProps = useSpring({
    from: { transform: "scale(1.2)" },
    to: { transform: "scale(1)" },
    config: { duration: 800 },
    reset: true,
  });

  const headingProps = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 80, friction: 25 },
  });

  const DB_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";

  useEffect(() => {
    if (!id || !DB_URL) {
      setError("Invalid project ID or backend URL.");
      setLoading(false);
      return;
    }

    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${DB_URL}/projects/${id}`);
        if (!res.ok) throw new Error("Failed to fetch project");
        const data = await res.json();
        let allProjects = data?.data || data;

        if (!Array.isArray(allProjects)) allProjects = [allProjects];

        const validProjects: Project[] = allProjects.filter(
          (p: Project) => p.title
        );
        setProjects(validProjects);

        const index = validProjects.findIndex((p) => p._id === id);
        if (index !== -1) {
          setProject(validProjects[index]);
          setProjectIndex(index);
        } else {
          setError("Project not found.");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching project details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [id, DB_URL]);

  useEffect(() => {
    const currentRef = imgRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Fix 1: Use useCallback for handleNavigation and change nextIndex to const
  const handleNavigation = useCallback(
    (direction: "next" | "prev") => {
      if (projectIndex === null || projects.length === 0) return;

      const nextIndex =
        direction === "next"
          ? (projectIndex + 1) % projects.length
          : (projectIndex - 1 + projects.length) % projects.length;

      const targetProject = projects[nextIndex];
      if (targetProject) {
        router.push(`/projects/${targetProject._id}`);
      }
    },
    [projectIndex, projects, router]
  );

  if (loading) return <Loader />;

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-yellow-600 max-w-lg w-full">
          <div className="flex items-center mb-4">
            <MdError className="text-4xl mr-3" />
            <h2 className="text-xl font-semibold">Something went wrong</h2>
          </div>
          <p className="text-sm mb-6">{error}</p>
          <Link href="/projects">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300">
              Go to Projects
            </button>
          </Link>
        </div>
      </div>
    );

  if (!project)
    return (
      <div className="flex items-center justify-center min-h-screen bg-yellow-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center text-yellow-600 max-w-lg w-full">
          <div className="mb-6">
            <MdSearch className="text-6xl text-yellow-300 mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
          {/* Fix 2 & 3: Escape single quotes in JSX */}
          <p className="text-sm text-gray-600 mb-6">
            We couldn&apos;t find the project you&apos;re looking for. It may
            have been moved or deleted.
          </p>
          <Link href="/projects">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300">
              Go to Projects
            </button>
          </Link>
        </div>
      </div>
    );

  const previousProject =
    projects.length > 0 && projectIndex !== null
      ? projects[(projectIndex - 1 + projects.length) % projects.length]
      : null;
  const nextProject =
    projects.length > 0 && projectIndex !== null
      ? projects[(projectIndex + 1) % projects.length]
      : null;
  const words = project.title.split(" ");

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <animated.div
          ref={imgRef}
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.coverImg})`,
            ...zoomProps,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/40 to-transparent">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black/40 via-transparent to-transparent" />
          </div>
        </animated.div>

        <div className="flex w-full">
          <div className="absolute inset-0 flex flex-col p-[2.5%] text-white lg:w-[70%] md-lg:w-[80%]">
            <div className="my-auto justify-start">
              <div className="mb-6 flex items-center justify-start gap-6">
                <hr className="w-14" />
                <h2 className="text-[12px] uppercase tracking-[0.4em]">
                  Overview
                </h2>
              </div>

              <animated.h1
                style={headingProps}
                className={`mb-6 text-[42px] leading-tight md:text-[56px] md-lg:text-[63px] lg:text-[84px]`}
              >
                {words.length > 2 ? (
                  <>
                    {words.slice(0, 2).join(" ")} <br />
                    {words.slice(2).join(" ")}
                  </>
                ) : (
                  project.title
                )}
              </animated.h1>
            </div>

            <div className="container mx-auto flex justify-between items-center space-y-5 flex-wrap">
              <div>
                <p className="uppercase text-[11px] text-gray-500 font-semibold tracking-widest">
                  Location
                </p>
                <p className="font-semibold text-[22px] lg:text-[32px]">
                  {project.location}
                </p>
              </div>
              {/* <div>
                <p className="uppercase text-[11px] text-gray-500 font-semibold tracking-widest">
                  Project Size
                </p>
                <p className="font-semibold text-[22px] lg:text-[32px]">
                  {project.size}
                </p>
              </div> */}
              {/* <div>
                <p className="uppercase text-[11px] text-gray-500 font-semibold tracking-widest">
                  Project Date
                </p>
                <p className="font-semibold text-[22px] lg:text-[32px]">
                  {new Date(project.createdAt).toLocaleDateString()}
                </p>
              </div> */}
            </div>
          </div>

          {projects.length > 1 && (
            <div className="absolute bottom-20 right-24 lg:flex hidden flex-col items-center space-y-6">
              <div
                className="absolute top-[140px] w-0.5 bg-white/50"
                style={{ height: "17px" }}
              ></div>

              {nextProject && (
                <button
                  onClick={() => handleNavigation("next")}
                  className="relative flex flex-col items-center justify-center z-0"
                >
                  <div className="w-28 h-28 border border-white/50 rounded-full flex items-center justify-center z-0 animate-pulse hover:bg-gray-50 hover:scale-95 ease-in-out duration-300">
                    <span className="absolute top-0 text-xs text-white font-semibold -translate-y-5">
                      NEXT
                    </span>
                    <IoIosArrowForward className="w-10 h-8 text-gray-400" />
                  </div>
                </button>
              )}

              <div
                className="absolute bottom-[-100px] w-0.5 bg-white/50"
                style={{ height: "80px" }}
              ></div>

              {previousProject && (
                <button
                  onClick={() => handleNavigation("prev")}
                  className="relative flex flex-col items-center justify-center z-0"
                >
                  <div className="w-28 h-28 border border-white/50 rounded-full flex items-center justify-center z-0 animate-pulse hover:scale-95 hover:bg-gray-300 ease-in-out duration-300">
                    <span className="absolute bottom-0 text-xs text-white font-semibold translate-y-5">
                      PREV
                    </span>
                    <IoIosArrowBack className="w-10 h-8 text-gray-400" />
                  </div>
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <div className="border-t border-gray-300 opacity-50 mt-8"></div>

      {(project.galleryImages?.length ?? 0) > 0 && (
        <div className="items-center px-[2.5%]">
          <animated.h1
            style={headingProps}
            className="mt-[100px] text-black text-[35px] md:text-[42px] lg:text-[72px] mb-10"
          >
            Project Gallery
          </animated.h1>
          <Gallery images={project.galleryImages} />
        </div>
      )}
    </>
  );
};

export default Page;
