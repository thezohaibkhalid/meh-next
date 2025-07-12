"use client";

import React from "react";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";
import { FiArrowUp, FiDownload } from "react-icons/fi";
import PrimaryHero from "@/components/common/PrimraryHero";

const Page = () => {
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="min-h-screen bg-white">
      <PrimaryHero
        title="Terms and Conditions"
        subtitle="YOUR AGREEMENT"
        imageUrl="https://images.unsplash.com/photo-1581090700227-1d54cdbb5c4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
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
                  Terms and Conditions of Use
                </animated.h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  These terms and conditions outline the rules and regulations
                  for the use of our services. By accessing this website, you
                  agree to these terms.
                </p>

                <section id="use-of-site" className="mb-12">
                  <h3 className="text-xl font-semibold text-[#b5aba1] mb-6 border-b-2 border-[#b5aba1]/30 pb-2">
                    Use of the Site
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">
                      You agree not to use the site in any way that causes, or
                      may cause, damage to the website or impairment of the
                      availability or accessibility of the website.
                    </p>
                    <p className="text-gray-600">
                      You may not use this website for any purposes related to
                      marketing without our express written consent.
                    </p>
                  </div>
                </section>

                <section id="intellectual-property" className="mb-12">
                  <h3 className="text-xl font-semibold text-[#b5aba1] mb-6 border-b-2 border-[#b5aba1]/30 pb-2">
                    Intellectual Property
                  </h3>
                  <p className="text-gray-600">
                    All content on this website is the intellectual property of
                    the company. Reproduction or redistribution without
                    permission is prohibited.
                  </p>
                </section>

                <section id="limitation-of-liability" className="mb-12">
                  <h3 className="text-xl font-semibold text-[#b5aba1] mb-6 border-b-2 border-[#b5aba1]/30 pb-2">
                    Limitation of Liability
                  </h3>
                  <p className="text-gray-600">
                    We shall not be held responsible for any loss or damage that
                    may arise from the use of our services or this website.
                  </p>
                </section>

                <section id="modifications" className="mb-12">
                  <h3 className="text-xl font-semibold text-[#b5aba1] mb-6 border-b-2 border-[#b5aba1]/30 pb-2">
                    Modifications
                  </h3>
                  <p className="text-gray-600">
                    We reserve the right to revise these terms at any time. By
                    continuing to use the website, you agree to be bound by the
                    updated terms.
                  </p>
                </section>

                <section id="contact-info" className="mb-12">
                  <div className="bg-[#b5aba1] text-white p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-serif mb-4">Need Help?</h3>
                    <p className="mb-4">Email: legal@example.com</p>
                    <p className="text-sm">
                      123 Legal Lane
                      <br />
                      Law City, State 45678
                    </p>
                  </div>
                </section>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-8 border-2 border-[#b5aba1]/10">
            <h3 className="text-lg font-medium text-[#b5aba1] mb-6 border-b-2 border-[#b5aba1]/20 pb-3">
              Navigate
            </h3>
            <nav className="space-y-4">
              {[
                "use-of-site",
                "intellectual-property",
                "limitation-of-liability",
                "modifications",
                "contact-info",
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
                Document Options
              </h4>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#F4F2F1] hover:bg-[#b5aba1]/10 transition-colors text-gray-600">
                <FiDownload className="text-[#b5aba1]" /> Download PDF
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-[#b5aba1] hover:text-[#b5aba1]/80 font-medium bg-white px-6 py-3 rounded-full shadow-sm border-2 border-[#b5aba1]/20"
          >
            <FiArrowUp className="mr-2 transform -rotate-90" /> Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
