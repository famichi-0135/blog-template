import { AllArticle } from "@/components/AllArticle";
import { FirstFiveArticle } from "@/components/firstFiveArticle";
import Link from "next/link";

export const metadata = {
  title: "Articles",
  description: "List of articles",
};

export default function PostsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-20 sm:mt-24">
      <h1 className="text-3xl font-bold mb-4 dark:text-neutral-100">
        何にするか考え中
      </h1>
      <div className="space-y-4">
      </div>
    </div>
  );
}
