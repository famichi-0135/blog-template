import { getPostData, getAllPostSlugs } from "@/lib/posts";
import TableOfContents from "@/components/TableOfContents";

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
    <div className="container mx-auto px-5 py-10 mt-24">
      <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-10 items-start relative">
        <article className="prose prose-neutral lg:prose-lg max-w-none prose-headings:scroll-mt-24">
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl mb-4">
            {postData.title}
          </h1>
          <div className="text-neutral-500 mb-8">{postData.date}</div>
          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
          />
        </article>

        <aside className="hidden lg:block sticky top-24 m-4 border border-neutral-200 rounded-lg p-4">
          {postData.toc && <TableOfContents toc={postData.toc} />}
        </aside>
      </div>
    </div>
  );
}
