import Loader from "@/components/Loader";
import FeaturedProjects from "@/components/projects/FeaturesProjects";
import React from "react";
import { Suspense } from "react";
const page = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <FeaturedProjects />
      </Suspense>
    </div>
  );
};

export default page;
