"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaBehance,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const DB_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const socialLinks = [
  { href: "https://www.instagram.com/mbhstudioo", icon: FaInstagram },
  { href: "https://www.behance.net/mbhstudioo", icon: FaBehance },
  { href: "https://x.com/mbhstudioo", icon: FaTwitter },
  { href: "https://www.facebook.com/mbhstudioo/", icon: FaFacebook },
  { href: "https://www.youtube.com/@mbhstudioo", icon: FaYoutube },
  { href: "https://www.linkedin.com/in/mbhstudioo/", icon: FaLinkedin },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${DB_URL}/email/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message);
      if (res.ok) setEmail("");
    } catch (err) {
      console.error(err);
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <footer className="bg-white text-black py-8 px-6 md:px-12 lg:px-16">
      <div className="border-t border-gray-300 opacity-50" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-12">
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-semibold text-black tracking-tighter ">
              MBH
            </h1>
          </Link>
          <p className="text-xs leading-relaxed text-gray-500 max-w-xs">
            MBH Studios is an architecture and interior design firm based in
            Faisalabad, offering a full range of services.
          </p>
          <div className="flex space-x-3 pt-2">
            {socialLinks.map(({ href, icon: Icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black hover:scale-110 transition-all"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-12 sm:gap-16 lg:gap-8">
          <div className="space-y-3">
            <h3 className="text-xl font-thin">Faisalabad</h3>
            <address className="text-sm text-gray-500 not-italic">
              Office No.291, Makkah Commercial Market
              <br />
              Chak 208 Rd, near Allied Bank
            </address>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-thin">Contact</h3>
            <div className="text-sm text-gray-500 space-y-1">
              <p>contact@mbhstudioo.com</p>
              <p>+92 303 7074418</p>
              <p>+92 315 8860962</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-thin">Subscribe Now</h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md"
          >
            <input
              className="w-full p-2 bg-transparent border-b text-gray-500 border-gray-400 placeholder-gray-400 focus:outline-none focus:border-black"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="px-6 py-2 border border-gray-400 text-sm text-gray-500 rounded-full hover:bg-black hover:text-white transition-all shrink-0"
            >
              Submit
            </button>
          </form>
          {message && (
            <span
              className={`text-sm ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </span>
          )}
        </div>
      </div>

      <div className="border-t border-gray-300 opacity-50" />

      <div className="flex flex-col items-center text-center space-y-4 md:flex-row md:justify-between md:text-left md:space-y-0 mt-8 text-sm text-gray-500">
        <span className="cursor-default">© 2025 MBH Studioo</span>
        <a
          href="https://bitbuilders.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-gray-400 transition hover:text-gray-800"
        >
          <span>Website by BitBuilders Tech</span>
          <span className="absolute left-0 bottom-0 block h-px w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
        </a>
        <Link
          href="/privacy-policy"
          className="group relative text-gray-400 transition hover:text-gray-700"
        >
          <span>Privacy Policy</span>
          <span className="absolute left-0 bottom-0 block h-px w-0 bg-gray-700 transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link
          href="/terms-and-conditions"
          className="group relative text-gray-400 transition hover:text-gray-700"
        >
          <span>Terms and Conditions</span>
          <span className="absolute left-0 bottom-0 block h-px w-0 bg-gray-700 transition-all duration-300 group-hover:w-full" />
        </Link>
      </div>
    </footer>
  );
}
