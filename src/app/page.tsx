import { Hero } from "@/components/Hero";
import { AllTagsCard } from "@/components/AllTagsCard";
import { AllArticle } from "@/components/AllArticle";
import Image from "next/image";
import { Introduce } from "@/components/Introduce";

export default function Home() {
  return (
    <div className="">
      <Hero />

      {/* Blog Posts Section with TagsCard on desktop: center Latest Stories, tags on right */}
      <section className="container mx-auto px-5 py-15 grid md:grid-cols-4 gap-6 relative">
        <div className="hidden md:block md:sticky md:top-20 md:self-start">
          <AllTagsCard />
        </div>
        <div className=" md:grid-cols-[1fr_minmax(0,720px)_260px] gap-8 items-start max-w-7xl mx-auto col-span-2">
          <div className="hidden md:block" />
          <div className="w-full mx-auto relative">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-10 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Latest Stories
            </h2>
            <div className="grid gap-10">
              <AllArticle />
            </div>
          </div>
        </div>
        <div className="hidden md:block md:sticky md:top-20 md:self-start">
          {/* <div className="p-4 m-4 border rounded-3xl border-gray-200">
            <div className="flex space-x-2 items-center space-between">
              <div className="w-20 h-20 flex-shrink-0 mr-4">
                <Image
                  src="/humberger.png"
                  width={70}
                  height={70}
                  alt="ロゴ画像"
                  className="w-full h-full object-cover rounded-full shadow-xl"
                />
              </div>

              <div className="space-y-2  ">
                <h3 className="font-bold text-xl">famichi</h3>
                <p>時代に取り残されないよう日々、必死に生きてます。</p>
              </div>
            </div>
          </div> */}
          <Introduce />
        </div>
      </section>
    </div>
  );
}
