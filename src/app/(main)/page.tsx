import React, { Suspense } from "react";
import CarouselComponent from "@/components/home/CarouselComponent";
import FeaturedProjects from "@/components/projects/FeaturesProjects";
import AdSection from "@/components/Logos/AdSection";
import NumbersSection from "@/components/NumbersSection";
import InteractiveSection from "@/InteractiveSection/InteractiveSection";
import LatestInsights from "@/components/Blogs/LatestInsights";
import ScheduleCallSection from "@/components/ScheduleCallSection";
import Loader from "@/components/Loader";
export default function page() {
  return (
    <div>
      <CarouselComponent />
      <Suspense fallback={<Loader />}>
        <FeaturedProjects />
      </Suspense>

      <AdSection />
      <NumbersSection />
      <InteractiveSection />
      <LatestInsights />
      <ScheduleCallSection />
    </div>
  );
}
