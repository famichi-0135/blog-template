import { Hero } from "@/components/Hero";
import { AllTagsCard } from "@/components/AllTagsCard";
import { AllArticle } from "@/components/AllArticle";

export default function Home() {
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
              <AllArticle />
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}
