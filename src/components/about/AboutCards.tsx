import React from "react";
import Image from "next/image";
type TeamMemberCardProps = {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
  linkedInUrl: string;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  bio,
  imageUrl,
}) => {
  return (
    <>
      <div className="text-white overflow-hidden relative pl-5">
        <div className="relative h-[500px] group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-95">
            <Image
              src={imageUrl}
              alt={`${name}'s profile image`}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-95"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
          </div>
          <div className="absolute bottom-2 left-2 right-0 p-4 flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="lg:text-[18px] md:text-[15px] text-[14px] font-semibold ml-3">
                {name}
              </h3>
              <p className="lg:text-[16px] md:text-[15px] text-[12px] ml-3">
                {position}
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-transparent">
          {" "}
          <p className="lg:text-[16px] md:text-[12px] text-[11px] text-gray-600 mt-2 text-justify">
            {bio}
          </p>
        </div>
      </div>
    </>
  );
};

const AboutCards = () => {
  const teamMembers = [
    {
      name: "Muhammad Bilal",
      position: "Owner & Architect",
      bio: "Vytautas is a highly accomplished professional with over two decades of experience in the construction industry. As the former owner of the Bekshta Construction Group, he leveraged his expertise in finance and planning to drive innovation and success.",
      imageUrl: "/bilal-architect.png",
      linkedInUrl: "#",
    },
    // {
    //   name: "Valerijus Starkovskis",
    //   position: "Partner",
    //   bio: "Valerijus is a Lithuania-based architect with 30 years of experience undertaking projects in Germany, Spain, France, Monaco, UAE, Kazakhstan, Vietnam, Maldives, Ukraine, and Latvia.",
    //   imageUrl:
    //     "https://cdn.prod.website-files.com/63c9df6b055c091e80c5d708/6441640aa3a4bbd626809b6a_vs.jpg",
    //   linkedInUrl: "#",
    // },
    // {
    //   name: "Valerijus Starkovskis",
    //   position: "Partner",
    //   bio: "Valerijus is a Lithuania-based architect with 30 years of experience undertaking projects in Germany, Spain, France, Monaco, UAE, Kazakhstan, Vietnam, Maldives, Ukraine, and Latvia.",
    //   imageUrl:
    //     "https://cdn.prod.website-files.com/63c9df6b055c091e80c5d708/6441640aa3a4bbd626809b6a_vs.jpg",
    //   linkedInUrl: "#",
    // },
  ];

  return (
    <>
      <h2 className="text-5xl mt-28 pl-5 mb-10">Meet the team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pr-5">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            position={member.position}
            bio={member.bio}
            imageUrl={member.imageUrl}
            linkedInUrl={member.linkedInUrl}
          />
        ))}
      </div>
    </>
  );
};

export default AboutCards;
