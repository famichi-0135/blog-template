import { getPostsByTag } from "@/lib/posts";
import Link from "next/link";

export const SortedArticle = (params: { tags: string[]; slug: string }) => {
  const allPostsData = [];
  for (const tag of params.tags) {
    const posts = getPostsByTag(tag);
    allPostsData.push(...posts);
  }

  const uniquePosts = allPostsData.filter(
    (post, index, self) =>
      index === self.findIndex((p) => p.tags === post.tags) &&
      post.slug !== params.slug
  );

  if (uniquePosts.length === 0) {
    return <div className="my-2 text-gray-600">関連記事はありません</div>;
  } else {
    return (
      <div className="space-y-4 mt-4">
        {uniquePosts.map(({ slug, date, title, excerpt, tags }) => (
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
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-linear-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
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
    );
  }
};
