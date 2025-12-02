import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { AllTagsCard } from "@/components/AllTagsCard";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="bg-whit">
      <Hero />

      {/* Blog Posts Section with TagsCard on desktop: center Latest Stories, tags on right */}
      <section className="container mx-auto px-5 py-20 grid md:grid-cols-4 gap-6 relative">
        <div className="hidden md:block md:sticky md:top-20 md:self-start">
          <AllTagsCard />
        </div>
        <div className=" md:grid-cols-[1fr_minmax(0,720px)_260px] gap-8 items-start max-w-7xl mx-auto col-span-2">
          <div className="hidden md:block" />
          <div className="w-full mx-auto relative">
            <h2 className="text-2xl font-bold text-neutral-900 mb-10 border-b border-neutral-200 pb-4">
              Latest Stories
            </h2>
            <div className="grid gap-10">
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
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    {excerpt}
                  </p>

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
        </div>
        <div>
        </div>
      </section>
    </div>
  );
}
