"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./NavbarComponent.css";
import {
  FaInstagram,
  FaBehance,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink, SocialLink } from "@/types/navbarTypes";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (isDropdownOpen && isFirstOpen) {
      setIsFirstOpen(false);
    }
  }, [isDropdownOpen, isFirstOpen]);

  const navLinks: NavLink[] = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "SERVICES", path: "/services" },
    { name: "BLOGS", path: "/blogs" },
    { name: "CONTACT", path: "/contact" },
  ];

  const socialLinks: SocialLink[] = [
    {
      href: "https://www.instagram.com/mbhstudioo",
      icon: <FaInstagram />,
      color: "group-hover:text-purple-500",
      shadow: "group-hover:shadow-purple-500",
    },
    {
      href: "https://www.behance.net/mbhstudioo",
      icon: <FaBehance />,
      color: "group-hover:text-blue-600",
      shadow: "group-hover:shadow-blue-600",
    },
    {
      href: "https://x.com/mbhstudioo",
      icon: <FaXTwitter />,
      color: "group-hover:text-black",
      shadow: "group-hover:shadow-blue-400",
    },
    {
      href: "https://www.facebook.com/mbhstudioo/",
      icon: <FaFacebook />,
      color: "group-hover:text-blue-800",
      shadow: "group-hover:shadow-blue-800",
    },
    {
      href: "https://www.youtube.com/@mbhstudioo",
      icon: <FaYoutube />,
      color: "group-hover:text-red-600",
      shadow: "group-hover:shadow-red-600",
    },
    {
      href: "https://www.linkedin.com/in/mbhstudioo/",
      icon: <FaLinkedin />,
      color: "group-hover:text-blue-600",
      shadow: "group-hover:shadow-blue-400",
    },
  ];

  return (
    <>
      <header className="gradient-nav fixed top-0 left-0 w-full z-50">
        <nav className="flex items-center md-lg:h-[95px] py-[15px] lg:h-[95px] h-[93px] px-[2.5%] relative">
          <div className="text-white hidden md:flex md:flex-1 md:justify-start">
            <Link href="/projects">
              <span className="relative inline-block cursor-pointer group">
                <div className="relative z-10 tracking-wider leading-tight text-sm pb-1">
                  PROJECTS
                </div>
                <div className="absolute right-0 bottom-0 h-[1px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left"></div>
              </span>
            </Link>

            <Link href="/contact">
              <span className="ml-8 relative inline-block cursor-pointer group">
                <div className="relative z-10 tracking-wider leading-tight text-sm pb-1">
                  CONTACT
                </div>
                <div className="absolute right-0 bottom-0 h-[1px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right group-hover:origin-left"></div>
              </span>
            </Link>
          </div>

          <div className="hidden md-lg:flex-1 md-lg:flex md-lg:justify-start">
            <Link
              href="/"
              className="text-white text-5xl font-extrabold tracking-widest"
            >
              <h1 className="text-5xl font-extrabold text-white tracking-widest">
                MBH
              </h1>
            </Link>
          </div>

          <div className="md-lg:hidden flex-1 flex justify-start">
            <Link
              href="/"
              className="text-white text-4xl font-semibold tracking-widest"
            >
              <h1 className="text-4xl font-semibold text-white pb-6 pl-4 tracking-widest">
                MBH
              </h1>
            </Link>
          </div>

          <div
            id="nav-icon1"
            className={`cursor-pointer ${isDropdownOpen ? "open" : ""}`}
            onClick={toggleDropdown}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      {/* Mobile Dropdown Overlay */}
      <div
        className={`z-50 fixed inset-0 bg-[#b5aba1] text-white flex flex-col transition-transform duration-[1200ms] ease-in-out ${
          isFirstOpen
            ? "translate-y-full"
            : isDropdownOpen
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
      >
        <div className="menu-content h-screen flex flex-col mt-40 items-start px-8">
          <div className="w-full h-full pb-10 flex flex-col md:justify-between">
            <div className="space-y-[11px] flex flex-col ">
              {/* {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-container relative"
                >
                  <div className="absolute w-full h-full flex text text-white lg:text-4xl md-lg:text-4xl text-[28px] select-none">
                    {link.name}
                  </div>
                  <div className="absolute w-full h-full flex text lg:text-4xl md-lg:text-4xl text-white text-[28px] text-back select-none">
                    {link.name}
                  </div>
                </Link>
              ))} */}

              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-container relative  "
                >
                  <div className="absolute w-full h-full flex text text-white lg:text-4xl md-lg:text-4xl text-[28px] select-none">
                    {link.name}
                  </div>
                  <div className="absolute w-full h-full flex text lg:text-4xl md-lg:text-4xl text-white text-[28px] text-back select-none">
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-between w-full items-center">
              <div className="mt-12 hidden md:block">
                <div className="text-white text-[13px] font-semibold mb-4">
                  Contact details
                </div>
                <p className="text-white text-[13px]">
                  Email address —{" "}
                  <span className="text-white">contact@mbhstudioo.com</span>
                </p>
              </div>
              <div className="flex ms-auto mt-16">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 flex items-center justify-center rounded-full bg-[#b5aba1] text-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-white hover:shadow-lg"
                  >
                    <div
                      className={`text-3xl transition-all duration-300 ${link.color} ${link.shadow}`}
                    >
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
