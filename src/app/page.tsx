import React from "react";
import CarouselComponent from "@/components/home/CarouselComponent";
import FeaturedProjects from "@/components/projects/FeaturesProjects";
import AdSection from "@/components/Logos/AdSection";
import NumbersSection from "@/components/NumbersSection";
import InteractiveSection from "@/InteractiveSection/InteractiveSection";
import LatestInsights from "@/components/LatestInsights/LatestInsights";
import ScheduleCallSection from "@/components/ScheduleCallSection";
export default function page() {
  return (
    <div>
      <CarouselComponent />
      <FeaturedProjects limit={6} />
      <AdSection />
      <NumbersSection />
      <InteractiveSection />
      <LatestInsights />
      <ScheduleCallSection />
    </div>
  );
}
