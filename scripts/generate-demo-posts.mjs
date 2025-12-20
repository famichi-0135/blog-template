import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "posts");

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir);
}

const tagsList = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Design",
  "Life",
  "Coding",
];

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

console.log("Generating 30 demo posts...");

for (let i = 1; i <= 30; i++) {
  const date = randomDate(new Date(2025, 0, 1), new Date(2025, 11, 31));
  const dateStr = formatDate(date);
  const slug = `demo-post-${i}`;
  const title = `Demo Post ${i} - Testing Pagination`;
  const tag = tagsList[Math.floor(Math.random() * tagsList.length)];
  const tag2 = tagsList[Math.floor(Math.random() * tagsList.length)];

  const content = `---
title: "${title}"
date: "${dateStr}"
excerpt: "This is a demo post ${i} generated for testing purposes. It contains some dummy content to fill up the space."
tags: ["${tag}", "${tag2}"]
---

# ${title}

This is the content of demo post number ${i}.

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Code Example

Here is some code to test the copy button:

\`\`\`typescript
const greeting = "Hello, World ${i}!";
console.log(greeting);
\`\`\`

## Conclusion

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`;

  // Adding random time to filename to avoid collisions if dates are same,
  // but actually using 'demo-post-i.md' is safer for uniqueness.
  // The system uses filename as slug.
  const filePath = path.join(postsDir, `${slug}.md`);

  fs.writeFileSync(filePath, content);
}

console.log("Successfully generated 30 demo posts.");
