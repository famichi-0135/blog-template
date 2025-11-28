import { getAllTags, getTagCounts } from "@/lib/posts";
import Link from "next/link";

export default function TagsPage() {
  const tags = getAllTags();
  const tagCounts = getTagCounts();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-20 sm:mt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4">
          全てのタグ
        </h1>
        <p className="text-sm text-neutral-500 mb-6">
          タグで記事を分類しています。気になるタグを選んでください。
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className="group block bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-neutral-200/50 p-4 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h2 className="text-sm sm:text-base font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {tag}
                  </h2>
                </div>
                <span className="text-xs text-neutral-500">
                  {tagCounts?.[tag] ?? 0} 記事
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
