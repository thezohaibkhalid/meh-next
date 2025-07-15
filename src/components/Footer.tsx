"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaBehance,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const DB_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${DB_URL}/email/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setMessage(data.message);
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Failed to submit email");
    }
  };

  return (
    <footer className="text-black py-8 px-[2.5%]">
      <div className="border-t border-gray-300 opacity-50 mt-8" />

      <div className="flex flex-col lg:flex-row gap-24 lg:gap-0 justify-between pt-8 lg:pb-32">
        <div className="flex flex-row space-x-16">
          <div className="space-y-3">
            <h3 className="text-[21px] font-thin">Faisalabad</h3>
            <p className="text-sm text-gray-500">
              Office No.291, Makkah Commercial Market
              <br />
              Chak 208 Rd, near Allied Bank
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[21px] font-thin">Contact</h3>
            <p className="text-sm text-gray-500">contact@mbhstudioo.com</p>
            <p className="text-sm text-gray-500">+92 303 7074418</p>
            <p className="text-sm text-gray-500">+92 315 8860962</p>
          </div>
        </div>

        <div className="flex flex-col max-w-[400px] space-y-4 w-full lg:ml-[40%]">
          <h3 className="text-lg font-thin">Subscribe Now</h3>
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 w-full"
          >
            <input
              className="w-full p-2 border-b text-gray-400 border-gray-400 placeholder-gray-300 focus:outline-none"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-4 py-1 border border-gray-400 text-sm text-gray-400 rounded-full hover:bg-black hover:text-white transition-all"
            >
              Submit
            </button>
          </form>
          {message && (
            <span
              className={`text-sm ${
                message.toLowerCase().includes("success")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </span>
          )}

          <p className="text-xs leading-relaxed text-gray-400 mt-4">
            MBH Studios is an architecture and interior design firm based in
            Faisalabad. Our services include Architecture, Interior Design,
            Construction, Administration, and Specification.
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-8">
        {[
          {
            href: "https://www.instagram.com/mbhstudioo",
            icon: FaInstagram,
          },
          {
            href: "https://www.behance.net/mbhstudioo",
            icon: FaBehance,
          },
          {
            href: "https://x.com/mbhstudioo",
            icon: FaTwitter,
          },
          {
            href: "https://www.facebook.com/mbhstudioo/",
            icon: FaFacebook,
          },
          {
            href: "https://www.youtube.com/@mbhstudioo",
            icon: FaYoutube,
          },
          {
            href: "https://www.linkedin.com/in/mbhstudioo/",
            icon: FaLinkedin,
          },
        ].map(({ href, icon: Icon }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-600 hover:text-black hover:scale-105 transition-all duration-300"
          >
            <Icon className="text-2xl" />
          </a>
        ))}
      </div>

      <div className="border-t border-gray-300 opacity-50 mt-8"></div>

      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start mt-8 text-sm text-gray-500 space-y-4 lg:space-y-0 sm:flex-start">
        <span className="relative hover:text-gray-700 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-gray-700 after:transition-all hover:after:w-full">
          &copy; 2025 MBH Studioo
        </span>

        <a
          href="https://bitbuilders.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block py-2 group text-gray-400 hover:text-gray-800 transition-colors duration-300"
        >
          <span className="relative z-10">
            Website by BitBuilders Tech
            <span className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
          </span>

          {/* Small Preview Above the Link (Hidden on Mobile) */}
          <div className="hidden sm:block absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible top-[-250px] left-1/2 -translate-x-1/2 w-[90vw] max-w-[400px] aspect-video transform scale-95 overflow-hidden rounded-xl shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-100 group-hover:delay-300">
            <div className="absolute inset-0 flex flex-col bg-gray-900 backdrop-blur-lg">
              {/* Fake browser top bar */}
              <div className="flex items-center gap-2 p-2 bg-gray-800/90">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </div>

              {/* Website Preview + Overlay */}
              <div className="relative flex-1 bg-gradient-to-br from-gray-900 via-blue-900/40 to-purple-900/30">
                <iframe
                  src="https://bitbuilders.tech/"
                  className="absolute inset-0 w-full h-full opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent flex items-center justify-center">
                  <span className="text-xl font-bold text-white tracking-wide animate-pulse-slow bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    VISIT
                    <span className="ml-2 inline-block animate-bounce-right text-lg">
                      ↗
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>

        <Link
          href="/privacy-policy"
          className="relative hover:text-gray-700 text-gray-400 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-gray-700 after:transition-all hover:after:w-full"
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms-and-conditions"
          className="relative hover:text-gray-700 text-gray-400 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-gray-700 after:transition-all hover:after:w-full"
        >
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
}
