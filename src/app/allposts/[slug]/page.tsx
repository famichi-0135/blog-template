import { AllArticle } from "@/components/AllArticle";
import { getArticleCount } from "@/lib/posts";

export const metadata = {
  title: "Articles",
  description: "List of articles",
};
const page_nation = getArticleCount();
export async function generateStaticParams() {
  const ar = [];
  for (let i = 1; i <= page_nation / 10 + 1; i++) {
    ar.push({ slug: i.toString() });
  }
  return ar.map((path) => path);
}

export default async function PostsPage({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-20 sm:mt-24">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 dark:text-neutral-100 text-center">
        Articles
      </h1>
      <div className="space-y-4">
        <AllArticle page_nation={slug} all_nation={page_nation} />
      </div>
    </div>
  );
}
