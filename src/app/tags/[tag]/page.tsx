import { Button } from "@/components/ui/button";
import { getAllTags, getPostsByTag } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }));
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const allPostsData = getPostsByTag(decodedTag);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-20 sm:mt-24">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-12">
          <Link
            href="/tags"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            全てのタグ
          </Link>

          <div className="flex items-center gap-3">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-neutral-100">
              {decodedTag}
            </h1>
          </div>
          <p className="text-neutral-500 mt-2 dark:text-neutral-200">
            {allPostsData.length} 件の記事
          </p>
        </div>
        <div className="grid gap-10">
          {allPostsData.map(({ slug, date, title, excerpt, tags }) => (
            <div
              key={slug}
              className="group relative p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-lg dark:hover:shadow-black/50 border border-transparent hover:border-neutral-100 dark:hover:border-neutral-700"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <Link
                    href={`/posts/${slug}`}
                    className="before:absolute before:inset-0"
                  >
                    {title}
                  </Link>
                </h3>
                <small className="text-neutral-400 dark:text-neutral-500 font-medium mt-1 md:mt-0">
                  {date}
                </small>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                {excerpt}
              </p>

              {/* タグ表示 */}
              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200"
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
                    </span>
                  ))}
                </div>
              )}

              <span className="text-blue-600 text-sm font-medium group-hover:underline">
                Read more &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
