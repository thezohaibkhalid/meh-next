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
      const res = await fetch(
        `${DB_URL}/email/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

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

      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 text-sm text-gray-500 space-y-4 lg:space-y-0">
        <span className="relative hover:text-gray-700 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-gray-700 after:transition-all hover:after:w-full">
          &copy; 2025 MBH Studioo
        </span>

        <a
          href="https://bitbuilders.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block py-2 px-3 group text-gray-400 hover:text-gray-800 transition-colors duration-300"
        >
          <span className="relative z-10">
            Website by BitBuilders Tech
            <span className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
          </span>
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
