import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="bg-whit">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-thin tracking-widest text-neutral-800 mb-4 font-serif">
            Thoughts & <br className="md:hidden" />
            <span className="italic">Perspectives</span>
          </h1>
          <p className="text-neutral-500 text-sm md:text-base tracking-widest uppercase mt-4">
            Exploring the unseen corners of the digital world
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-5 py-20 max-w-4xl">
        <h2 className="text-2xl font-bold text-neutral-900 mb-10 border-b border-neutral-200 pb-4">
          Latest Stories
        </h2>
        <div className="grid gap-10">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
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
              <span className="text-blue-600 text-sm font-medium group-hover:underline">
                Read more &rarr;
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
