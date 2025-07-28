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

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mbhstudioo",
    icon: FaInstagram,
  },
  {
    name: "Behance",
    href: "https://www.behance.net/mbhstudioo",
    icon: FaBehance,
  },
  { name: "Twitter", href: "https://x.com/mbhstudioo", icon: FaTwitter },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mbhstudioo/",
    icon: FaFacebook,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@mbhstudioo",
    icon: FaYoutube,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mbhstudioo/",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    try {
      const res = await fetch(`${DB_URL}/email/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setMessage(data.message);
      if (res.ok) {
        setEmail("");
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to subscribe. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className=" text-slate-700 ">
      <div className="container mx-auto px-6 pt-16 pb-10 lg:px-8 ">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-semibold text-slate-900 ">
                MBH STUDIOO
              </h1>
            </Link>
            <p className="text-sm leading-relaxed text-[#6b7280] max-w-xs">
              MBH Studioo is an architecture and interior design firm based in
              Faisalabad, offering a full range of services.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6b7280] transition hover:text-slate-900 hover:scale-110"
                  aria-label={name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-sm">
            <h3 className="text-xl  font-thin  ">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div>
                <address className="mt-1 text-[#6b7280]  not-italic">
                  Office No.291, Makkah Commercial Market
                  <br />
                  Chak 208 Rd, near Allied Bank, Faisalabad
                </address>
              </div>
              <div>
                <div className="mt-1 space-y-1 text-[#6b7280]">
                  <p>contact@mbhstudioo.com</p>
                  <p>+92 303 7074418</p>
                  <p>+92 315 8860962</p>
                  <p>+92 41 5210923</p>

                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-thin">Subscribe Now</h3>
            <p className="text-sm text-[#6b7280]">
              Get the latest news, articles, and resources, sent to your inbox
              weekly.
            </p>{" "}
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
                disabled={isLoading}
              />
              <button
                disabled={isLoading}
                type="submit"
                className="px-6 cursor-pointer py-2 border border-gray-400 text-sm text-gray-500 rounded-full hover:bg-black hover:text-white transition-all shrink-0"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {message && (
              <span
                className={`text-sm ${
                  message.includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </span>
            )}
          </div>
        </div>

        {/* <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
            <span className="text-center sm:text-left">
              © {new Date().getFullYear()} MBH Studioo. All rights reserved.
            </span>
            <div className="flex gap-x-6">
              <Link
                href="/privacy-policy"
                className="transition hover:text-slate-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="transition hover:text-slate-900"
              >
                Terms
              </Link>
            </div>
          </div>
        </div> */}

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-[#6b7280]">
          <span>© {new Date().getFullYear()} MBH Studioo. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
