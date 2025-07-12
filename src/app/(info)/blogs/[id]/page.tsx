import SingleBlogPage from "@/components/Blogs/SingleBlogPage";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Navbar />
      <SingleBlogPage params={params} />
    </div>
  );
};

export default Page;
