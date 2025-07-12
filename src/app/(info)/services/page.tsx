import PrimaryHero from "@/components/common/PrimraryHero";
import ScheduleCallSection from "@/components/ScheduleCallSection";
import React from "react";
import Link from "next/link";
const page = () => {
  const services = [
    {
      number: "01",
      title: "Specification",
      description:
        "Our specification service ensures detailed documentation for construction projects. We provide precise technical specifications that align with design and industry standards.",
      imageUrl: "https://cdn.example.com/service-specification.jpg",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We create aesthetically pleasing and functional designs, ensuring that each project meets modern architectural standards with innovative solutions.",
      imageUrl: "https://cdn.example.com/service-design.jpg",
    },
    {
      number: "03",
      title: "Consulting",
      description:
        "Our expert consultants provide strategic insights and guidance throughout the project lifecycle, helping clients achieve efficient and cost-effective solutions.",
      imageUrl: "https://cdn.example.com/service-consulting.jpg",
    },
    {
      number: "04",
      title: "Project Management",
      description:
        "We manage construction projects from planning to completion, ensuring timelines, budgets, and quality standards are met effectively.",
      imageUrl: "https://cdn.example.com/service-project-management.jpg",
    },
    {
      number: "05",
      title: "Sustainability",
      description:
        "We integrate sustainable building practices to minimize environmental impact while maximizing efficiency and resource conservation.",
      imageUrl: "https://cdn.example.com/service-sustainability.jpg",
    },
    {
      number: "06",
      title: "Engineering",
      description:
        "Our engineering services provide innovative and reliable solutions, ensuring structural integrity and optimal performance in every project.",
      imageUrl: "https://cdn.example.com/service-engineering.jpg",
    },
    {
      number: "07",
      title: "Construction",
      description:
        "From foundation to finishing, our construction services guarantee quality, efficiency, and adherence to safety regulations.",
      imageUrl: "https://cdn.example.com/service-construction.jpg",
    },
    {
      number: "08",
      title: "Town Planning",
      description:
        "We develop urban and town planning strategies that enhance community living, ensuring sustainable infrastructure and smart growth.",
      imageUrl: "https://cdn.example.com/service-town-planning.jpg",
    },
    {
      number: "09",
      title: "Interior Design",
      description:
        "Our interior design services transform spaces with creativity and functionality, tailored to our clients’ tastes and needs.",
      imageUrl: "https://cdn.example.com/service-interior-design.jpg",
    },
    {
      number: "10",
      title: "Urban Planning",
      description:
        "We specialize in urban planning that balances social, economic, and environmental factors to create thriving communities.",
      imageUrl: "https://cdn.example.com/service-urban-planning.jpg",
    },
    {
      number: "11",
      title: "Industrial Work",
      description:
        "Our industrial services cater to manufacturing and infrastructure projects, ensuring efficiency, safety, and compliance with industry regulations.",
      imageUrl: "https://cdn.example.com/service-industrial-work.jpg",
    },
  ];

  return (
    <div>
      <PrimaryHero
        title="SERVICES"
        subtitle="EXPERTISE"
        imageUrl="/contact.jpeg"
      />
      <div className="px-[2.6%] py-1">
        <h1 className="mt-[100px] mb-6 text-black text-[35px] sm:text-[42px] md:text-[42px] md-lg:text-[50px] lg:text-[72px]">
          Core Services
        </h1>

        {services.map((service, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-6 md-lg:grid-cols-6 grid-cols-1 gap-10 lg:gap-16 p-6 bg-white border-t border-gray-300 border-opacity-50 pt-8 items-start"
          >
            {/* Number Section */}
            <div className="lg:col-span-1 md-lg:col-span-1 text-left lg:text-[21px] font-thin text-black">
              {service.number}
            </div>

            {/* Content Section */}
            <div className="lg:col-span-3 md-lg:col-span-3 max-w-[580px] lg:mr-48 md-lg:mr-24">
              <div className="mb-4">
                <h2 className="lg:text-[16px] font-semibold text-gray-800">
                  {service.title}
                </h2>
              </div>
              <div className="mb-6">
                <p className="text-gray-500 font-thin text-[13px] lg:text-[16px]">
                  {service.description}
                </p>
              </div>
              <span className="relative inline-block cursor-pointer group text-xs tracking-[4px] mt-6">
                <Link
                  href={"/contact"}
                  className="relative z-8 tracking-[3px] leading-tight text-[14px] text-gray-600 border-gray-300 uppercase"
                >
                  Request Details
                </Link>
                <div className="absolute right-[2px] top-[22px] bottom-0 h-[1px] w-full bg-gray-300 transform scale-x-100"></div>
                <div className="absolute right-[2px] top-[22px] bottom-0 h-[1px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right group-hover:origin-left"></div>
              </span>
            </div>

            {/* Image Section */}
            {/* <div className="lg:col-span-2 md-lg:col-span-2">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full lg:max-w-[562px] lg:h-[240px] object-cover shadow-lg hover:scale-95 duration-300 ease-linear"
            />
          </div> */}
          </div>
        ))}
      </div>

      <ScheduleCallSection />
    </div>
  );
};

export default page;
