"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CategoryFilter({
  categories,
}: {
  categories: string[];
}) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";
  const filteredCategories = categories.filter(
    (category) => category !== selectedCategory
  );

  return (
    <div className="flex align-center flex-wrap gap-4">
      {filteredCategories.map((category) => (
        <Link
          key={category}
          href={`/projects?category=${encodeURIComponent(category)}`}
          className="text-black border cursor-pointer border-[#c3bab1] rounded-full px-3 py-[6px] font-thin font-nunito text-[14px] leading-tight no-underline transition-all flex-shrink-0
                       hover:bg-[#b5aba1] hover:text-white duration-300 ease-in lg:text-[20px] md:text-[16px]"
        >
          {category}
        </Link>
      ))}
    </div>
  );
}