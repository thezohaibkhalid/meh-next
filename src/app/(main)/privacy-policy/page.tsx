"use client";

import React from "react";
import { FiLock, FiArrowUp, FiDownload } from "react-icons/fi";
import Link from "next/link";
import PrimaryHero from "@/components/common/PrimraryHero";
import { useSpring, animated } from "@react-spring/web";

const Page = () => {
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="min-h-screen bg-white">
      <PrimaryHero
        title="Privacy Policy"
        subtitle="DATA PROTECTION"
        imageUrl="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 -mt-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 border-2 border-[#b5aba1]/10">
            <div className="prose max-w-none">
              <section className="mb-16">
                <animated.h2
                  style={fadeInUp}
                  className="text-3xl font-serif text-[#b5aba1] mb-8 border-l-4 border-[#b5aba1] pl-6"
                >
                  Privacy Policy for Individuals Interacting with Luxury
                  Presence Clients
                </animated.h2>

                <article className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#F4F2F1] rounded-lg">
                      <FiLock className="w-6 h-6 text-[#b5aba1]" />
                    </div>
                    <h3 className="text-2xl font-medium text-gray-800">
                      Last Updated: December 23, 2024
                    </h3>
                  </div>
                </article>

                {/* Sections */}
                <section id="introduction" className="mb-12">
                  <h3 className="text-xl font-semibold text-[#b5aba1] mb-4">
                    Introduction
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Luxury Presence Inc. (“Luxury Presence”, “we”, “us”, or
                    “our”) provides technologies, products, and services...
                  </p>
                  <div className="bg-[#F4F2F1] p-6 rounded-xl border-l-4 border-[#b5aba1]">
                    <p className="text-gray-600">
                      If you are a visitor to our Client’s website (the “Site”),
                      this Privacy Policy applies to you...
                    </p>
                  </div>
                </section>

                <section id="personal-info" className="mb-12">
                  <h3 className="text-xl font-semibold text-[#b5aba1] mb-6 border-b-2 border-[#b5aba1]/30 pb-2">
                    Personal Information We Collect
                  </h3>
                  <div className="space-y-8">
                    {[
                      {
                        title: "Information you provide to us",
                        text: "Contact information such as name, email, and phone number...",
                      },
                      {
                        title: "Information we obtain from third parties",
                        text: "Social media info from platforms where our Client has a presence...",
                      },
                      {
                        title: "Automatic data collection",
                        text: "Cookies, local storage, web beacons, etc. to collect device data...",
                      },
                    ].map(({ title, text }, i) => (
                      <article
                        key={i}
                        className="bg-[#F4F2F1]/20 p-6 rounded-xl"
                      >
                        <h4 className="font-medium text-lg text-gray-800 mb-3">
                          {title}
                        </h4>
                        <p className="text-gray-600">{text}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section id="data-usage" className="mb-12">
                  <h3 className="text-xl font-semibold text-[#b5aba1] mb-6 border-b-2 border-[#b5aba1]/30 pb-2">
                    How We Use Your Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-xl shadow-sm border-2 border-[#b5aba1]/10">
                      <h4 className="font-medium text-gray-800 mb-2">
                        Service Operations
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Provide, operate, and improve our Services...
                      </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border-2 border-[#b5aba1]/10">
                      <h4 className="font-medium text-gray-800 mb-2">
                        Legal Compliance
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Comply with applicable laws and legal processes...
                      </p>
                    </div>
                  </div>
                </section>

                <section id="data-sharing" className="mb-12">
                  <h3 className="text-xl font-semibold text-[#b5aba1] mb-6 border-b-2 border-[#b5aba1]/30 pb-2">
                    How We Share Your Information
                  </h3>
                  <div className="bg-[#F4F2F1] p-6 rounded-xl">
                    <ul className="list-disc pl-6 space-y-4 text-gray-600">
                      <li>Service providers helping operate our business</li>
                      <li>Professional advisors (lawyers, auditors)</li>
                      <li>Business transfers during mergers or acquisitions</li>
                    </ul>
                  </div>
                </section>

                <section id="privacy-choices" className="mb-12">
                  <h3 className="text-xl font-semibold text-[#b5aba1] mb-6 border-b-2 border-[#b5aba1]/30 pb-2">
                    Privacy Choices
                  </h3>
                  <div className="space-y-6">
                    <article className="p-6 bg-white rounded-xl shadow-sm border-2 border-[#b5aba1]/10">
                      <h4 className="font-medium text-gray-800 mb-3">
                        Tracking Opt-Out
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Use browser settings to block cookies or advertising
                        IDs...
                      </p>
                    </article>
                    <article className="p-6 bg-white rounded-xl shadow-sm border-2 border-[#b5aba1]/10">
                      <h4 className="font-medium text-gray-800 mb-3">
                        Your Rights
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Access, correct, or delete your personal information...
                      </p>
                    </article>
                  </div>
                </section>

                <section id="contact" className="mb-12">
                  <div className="bg-[#b5aba1] text-white p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-serif mb-4">
                      How to Contact Us
                    </h3>
                    <p className="mb-4">Email: support@luxurypresence.com</p>
                    <p className="text-sm">
                      8605 Santa Monica Blvd
                      <br />
                      PMB 54452
                      <br />
                      West Hollywood, California 90069-4109
                    </p>
                  </div>
                </section>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-8 border-2 border-[#b5aba1]/10">
            <h3 className="text-lg font-medium text-[#b5aba1] mb-6 border-b-2 border-[#b5aba1]/20 pb-3">
              Policy Navigation
            </h3>
            <nav className="space-y-4">
              {[
                "introduction",
                "personal-info",
                "data-usage",
                "data-sharing",
                "privacy-choices",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block p-3 rounded-lg bg-[#F4F2F1]/30 hover:bg-[#b5aba1]/10 transition-colors text-gray-600"
                >
                  {item.replace(/-/g, " ").toUpperCase()}
                </a>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t-2 border-[#b5aba1]/20">
              <h4 className="text-sm font-medium text-[#b5aba1] mb-4">
                Document Actions
              </h4>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#F4F2F1] hover:bg-[#b5aba1]/10 transition-colors text-gray-600">
                <FiDownload className="text-[#b5aba1]" />
                Download PDF Version
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-[#b5aba1] hover:text-[#b5aba1]/80 font-medium bg-white px-6 py-3 rounded-full shadow-sm border-2 border-[#b5aba1]/20"
          >
            <FiArrowUp className="mr-2 transform -rotate-90" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
