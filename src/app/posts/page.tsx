import Link from "next/link";
import { getSortedPostsData, PostData } from "../../lib/posts";

export const metadata = {
  title: "Articles",
  description: "List of articles",
};

export default function PostsPage() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-20 sm:mt-24">
      <h1 className="text-3xl font-bold mb-4">Articles</h1>
      <div className="space-y-4">
        {allPostsData.map(({ slug, date, title, excerpt, tags }) => (
          <div
            key={slug}
            className="group relative p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-50 hover:shadow-lg border border-transparent hover:border-neutral-100"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                <Link
                  href={`/posts/${slug}`}
                  className="before:absolute before:inset-0"
                >
                  {title}
                </Link>
              </h3>
              <small className="text-neutral-400 font-medium mt-1 md:mt-0">
                {date}
              </small>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-4">{excerpt}</p>

            {/* タグ表示 */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                  >
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
  );
}
