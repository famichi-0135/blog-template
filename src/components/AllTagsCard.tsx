import { getAllTags } from "@/lib/posts";
import Link from "next/link";

export const AllTagsCard = () => {
  const allTags = getAllTags();

  return (
    <div className="p-6 m-4 border rounded-3xl border-gray-200 ">
      <h2 className="text-lg font-semibold text-neutral-900 col-span-2 mb-4">
        全てのタグ
      </h2>

      {allTags && allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              {tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
