import { getPostData, getAllPostSlugs } from "@/lib/posts";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { Introduce } from "@/components/Introduce";
import { SortedArticle } from "@/components/SortedArticle";

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => path.params);
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12 mt-16 sm:mt-20 md:mt-24 ">
      <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-12">
        {/* Article Container */}
        <article className="sm:bg-white/80 dark:sm:bg-neutral-800/80 sm:backdrop-blur-sm sm:rounded-2xl sm:shadow-lg dark:sm:shadow-black/50 sm:border sm:border-neutral-200/50 dark:sm:border-neutral-700/50 p-0 sm:p-6 md:p-8 lg:p-12 sm:hover:shadow-xl dark:sm:hover:shadow-black/70 sm:transition-shadow sm:duration-300 relative">
          {/* Article Header */}
          <header className="mb-6 pb-6 sm:mb-8 sm:pb-8 border-b border-neutral-200 dark:border-neutral-700">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4 leading-tight">
              {postData.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <time dateTime={postData.date}>{postData.date}</time>
            </div>

            {/* タグ表示 */}
            {postData.tags && postData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {postData.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${encodeURIComponent(tag)}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200"
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
          </header>

          {/* Article Content */}
          <div
            className="prose prose-neutral lg:prose-lg max-w-none prose-headings:scroll-mt-24"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
          />
        </article>

        {/* Table of Contents Sidebar */}

        <aside className="hidden lg:block space-y-4">
          <div className="">
            <Introduce />
          </div>
          <div className="rounded-2xl  bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-md dark:shadow-black/50 p-6 hover:shadow-lg dark:hover:shadow-black/70 transition-shadow duration-300 sticky top-24">
            {postData.toc && <TableOfContents toc={postData.toc} />}
          </div>
        </aside>
      </div>
      <div className="rounded-2xl bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-md dark:shadow-black/50 p-6 hover:shadow-lg dark:hover:shadow-black/70 transition-shadow duration-300 sticky top-24 mt-4 md:mt-12">
        <h2 className="text-2xl font-bold dark:text-neutral-100">関連記事</h2>
        {/* Related posts could be listed here based on tags or categories */}
        <SortedArticle tags={postData.tags || []} slug={postData.slug} />
      </div>
    </div>
  );
}
