import Link from "next/link";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
      <section className="pt-20 mb-10 mt-10 w-full">
        <div className=" w-full px-6 mx-auto flex flex-col lg:flex-row xl:flex-row gap-6 justify-between items-center">
          {/* Text content */}
          <div className="py-10 lg:w-1/2">
            <h2 className="text-5xl mb-10 lg:mb-0 xl:mb-0 text-left">About</h2>
            <p className="text-[#0F0F0FA6] lg:text-[16px] md:text-[16px] text-[13px] mt-10 mb-4 text-justify">
              MBH is vastly experienced at working across sectors – Residential,
              Hospitality, and Commercial, and across disciplines – Architecture
              and Interior Design. We offer a multifaceted, entirely bespoke
              design service, focused around achieving the best possible end
              result. Energy efficiency and sustainability issues are given
              serious consideration at the outset of the design process, in
              particular on new-build projects.
            </p>
            <Link
                href="/projects"
                className="relative inline-block cursor-pointer group text-xs tracking-[4px] mt-8"
            >
              <div className="relative z-10 tracking-[7px] leading-tight text-[11px] border-gray-300">
                READ MORE
              </div>
              <div className="absolute right-[2px] top-[21px] bottom-0 h-[1px] w-full bg-gray-300 transform scale-x-100"></div>
              <div className="absolute right-[2px] top-[21px] bottom-0 h-[1px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right group-hover:origin-left"></div>
            </Link>
          </div>

          {/* Image content */}
          <div className="lg:w-1/2">
            <Image
                src="/about_1_mobile.jpg"
                alt="About MBH Studioo Mobile"
                className="block md:hidden w-full h-auto object-cover transition-transform duration-1000 hover:scale-95"
            />
            <Image
                src="/about_1_lg.png"
                alt="About MBH Studioo PC"
                className="hidden md:block lg:hidden w-full h-auto md:h-[400px] object-cover transition-transform duration-1000 hover:scale-95"
            />
            <Image
                src="/about_1_lg.png"
                alt="About MBH Studioo PC"
                className="hidden lg:block w-full h-auto md:h-[400px] object-cover transition-transform duration-1000 hover:scale-95"
            />
          </div>
        </div>
      </section>
  );
};

export default AboutSection;