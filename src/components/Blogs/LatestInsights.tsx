import Link from "next/link";
import BlogScroller from "./BlogScroller";
import "./LatestInsights.css";
type Blog = {
  _id: string;
  title: string;
  createdAt: string;
  coverImg: string;
};

const DB_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${DB_URL}/blogs`);

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  return data.success ? data.data : [];
}

export default async function LatestInsights() {
  const blogs = await getBlogs();

  return (
    <section className="pt-20 pb-10 mb-20 px-[2.5%]">
      <div className="2xl:mx-auto mx-6 pb-10">
        <h2 className="text-5xl font-normal mb-12 mt-4">Latest Blogs</h2>
        <BlogScroller blogs={blogs} />
        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="relative inline-block cursor-pointer group text-xs tracking-[4px]"
          >
            <span className="relative text-[13px] border-gray-300">
              VIEW BLOGS
            </span>
            <div className="absolute right-[2px] top-[23px] h-[1px] w-full bg-gray-300" />
            <div className="absolute right-[2px] top-[23px] h-[1px] w-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right group-hover:origin-left" />
          </Link>
        </div>
      </div>
    </section>
  );
}
