import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
// import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import * as cheerio from "cheerio";
import GithubSlugger from "github-slugger";

const postsDirectory = path.join(process.cwd(), "posts");

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  contentHtml?: string;
  toc?: TOCItem[];
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      ...(matterResult.data as {
        title: string;
        date: string;
        excerpt: string;
        coverImage?: string;
      }),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string with syntax highlighting
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Use cheerio to process HTML for TOC
  const $ = cheerio.load(contentHtml);
  const slugger = new GithubSlugger();
  const toc: TOCItem[] = [];

  $("h2, h3").each((_, element) => {
    const text = $(element).text();
    const id = slugger.slug(text);
    $(element).attr("id", id);

    // Determine level based on tag name
    const tagName = $(element).prop("tagName")?.toLowerCase() || "";
    const level = tagName === "h2" ? 2 : 3;

    toc.push({ id, text, level });
  });

  const processedContentHtml = $("body").html() || contentHtml;

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml: processedContentHtml,
    toc,
    ...(matterResult.data as {
      title: string;
      date: string;
      excerpt: string;
      coverImage?: string;
    }),
  };
}
