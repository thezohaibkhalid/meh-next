import React from "react";
import CarouselComponent from "@/components/home/CarouselComponent";
import FeaturedProjects from "@/components/projects/FeaturesProjects";
export default function page() {
  return (
    <div>
      <CarouselComponent />
      <FeaturedProjects limit={6} />
    </div>
  );
}
