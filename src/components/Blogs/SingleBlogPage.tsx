import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import PrimaryHero from "@/components/common/PrimraryHero";

interface BlogSection {
  type: "heading" | "paragraph";
  text: string;
}

interface Blog {
  _id: string;
  title: string;
  author: string;
  createdAt: string;
  coverImg: string;
  content: BlogSection[];
}

const DB_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function SingleBlogPage({
  params,
}: {
  params: { id: string };
}) {
  let blog: Blog | null = null;

  try {
    const res = await fetch(`${DB_URL}/blogs/${params.id}`, {});

    if (!res.ok) return notFound();

    const data = await res.json();

    if (!data.success || !data.data) return notFound();

    blog = data.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return notFound();
  }

  if (!blog) {
    return notFound();
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(blog.createdAt));

  return (
    <div className="min-h-screen bg-gray-50">
      <PrimaryHero
        title={blog.title}
        subtitle={formattedDate}
        imageUrl={blog.coverImg}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose lg:prose-xl mx-auto">
          <a
            href="/blogs"
            className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="mr-2 h-5 w-5" />
            Back to All Articles
          </a>
          {/* 
          <div className="flex items-center mb-12 border-t pt-8">
            <div className="flex-1">
              <p className="text-lg font-medium text-gray-900">{blog.author}</p>
              <p className="text-gray-500">{formattedDate}</p>
            </div>
          </div> */}

          <div className="space-y-8">
            {blog.content.map((section, index) => (
              <div
                key={`${blog._id}-${index}`}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {section.type === "heading" ? (
                  <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6 mt-8">
                    {section.text}
                  </h2>
                ) : (
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                    {section.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
