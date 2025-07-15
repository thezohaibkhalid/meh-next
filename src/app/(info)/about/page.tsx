import PrimaryHero from "@/components/common/PrimraryHero";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import AboutCards from "@/components/about/AboutCards";
import Logo from "@/components/Logos/AdSection";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div>
      <PrimaryHero
        title="About MBH Studios"
        subtitle="Insights & Vision"
        imageUrl="https://live.staticflickr.com/65535/54649151003_1eed26325c_c.jpg"
      />
      <section className="lg:pt-20 xl:pt-20 md:pt-2 sm:pt-2 mb-10 mt-10">
        <div className="w-full px-6 grid grid-cols-1 lg:grid-cols-[2fr_2.5fr] xl:grid-cols-[2fr_2.5fr] gap-16">
          <div className="h-full py-10">
            <h2 className="text-5xl mb-10 lg:mb-0 xl:mb-0 2xl:mb-0 text-left">
              About
            </h2>
            <p className="text-[#0F0F0FA6] lg:text-[16px] md:text-[16px] text-[13px] mt-10  mb-4 text-justify lg:pr-10 md:pr-8 pr-0">
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

          <div className="flex justify-end">
            <Image
              width={500}
              height={400}
              src="/about_1_mobile.jpg"
              alt="About MBH Studioo Mobile"
              className="block lg:hidden w-full h-auto md:h-[400px] object-cover transition-transform duration-1000 hover:scale-95"
            />
            <Image
              width={500}
              height={400}
              src="/about_1_PC.jpg"
              alt="About MBH Studioo PC"
              className="hidden lg:block w-full h-auto md:h-[400px] object-cover transition-transform duration-1000 hover:scale-95"
            />
          </div>
        </div>
      </section>
      <Navbar />
      <AboutCards />
      <Logo />
    </div>
  );
}
