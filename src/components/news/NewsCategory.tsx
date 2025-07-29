// app/components/NewsCategory.tsx
import ShowNews from "./ShowNews";
import React from "react";

interface Blog {
  _id: string;
  title: string;
  createdAt: string;
  author: string;
  coverImg: string;
}

interface NewsCategoryProps {
  limit?: number | null;
}

const DB_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function NewsCategory({
  limit = null,
}: NewsCategoryProps) {
  let blogs: Blog[] = [];

  try {
    const res = await fetch(`${DB_URL}/blogs`, {
      next: { revalidate: 60 }, // optional caching if needed
    });

    const data = await res.json();

    if (data.success && Array.isArray(data.data)) {
      blogs = data.data;
    } else {
      throw new Error("Invalid blog data");
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return (
      <div className="text-center text-red-600 mt-10">
        Failed to load blog data.
      </div>
    );
  }

  return (
    <div className="items-center px-[2.5%]">
      <h1 className="lg:mt-[100px] md:mt-[50px] mt-[25px]   text-black text-[35px] sm:text-[42px] md:text-[42px] md-lg:text-[50px] lg:text-[60px]">
        Latest Blogs
      </h1>

      <div className="pt-6">
        <ShowNews blogs={limit ? blogs.slice(0, limit) : blogs} />
      </div>
    </div>
  );
}
