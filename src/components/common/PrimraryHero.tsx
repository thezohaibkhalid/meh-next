"use client";

import React from "react";

interface PrimaryHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const PrimaryHero: React.FC<PrimaryHeroProps> = ({
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <div>
      <div
        className="relative   flex h-[400px] items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl || "/contact.jpg"})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex h-full flex-col justify-center pl-6">
          <div className="mb-6 flex items-center justify-start gap-6">
            <hr className="w-14 border-t border-white" />
            <h2 className="text-xs uppercase tracking-[0.4em] text-white">
              {subtitle || "Default Subtitle"}
            </h2>
          </div>
          <h1 className="mb-6 text-3xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PrimaryHero;
