import SingleBlogPage from "@/components/Blogs/SingleBlogPage";
import Navbar from "@/components/navbar/Navbar";
import { NextPage } from "next";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

const page: NextPage<PageProps> = async ({ params }) => {
  const { id } = await params; 

  return (
    <div>
      <Navbar />
      <SingleBlogPage params={{ id }} />
    </div>
  );
};

export default page;