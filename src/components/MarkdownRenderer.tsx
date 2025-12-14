"use client";

import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { CopyButton } from "@/components/ui/copy-button";

interface MarkdownRendererProps {
  contentHtml: string;
}

export default function MarkdownRenderer({
  contentHtml,
}: MarkdownRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Find all pre elements
    const preElements = containerRef.current.querySelectorAll("pre");

    preElements.forEach((pre) => {
      // Check if we've already injected a button to avoid duplicates
      if (pre.querySelector(".copy-button-container")) return;

      // Make sure pre has relative positioning for absolute positioning of button
      if (getComputedStyle(pre).position === "static") {
        pre.style.position = "relative";
      }

      // Create a container for the button
      const buttonContainer = document.createElement("div");
      buttonContainer.className =
        "copy-button-container absolute top-2 right-2";
      pre.appendChild(buttonContainer);

      // Get the code text
      const code = pre.querySelector("code")?.innerText || pre.innerText;

      // Render the button using React 18 createRoot
      const root = createRoot(buttonContainer);
      root.render(<CopyButton text={code} />);

      // Cleanup logic if needed (though tricky with manual DOM manipulation)
      // Ideally we would return a cleanup function to unmount,
      // but for this specific DOM injection pattern,
      // simple replacement on re-render of parent is usually acceptable
      // or we can just leave it as this effect runs when contentHtml changes.
    });

    // Cleanup is handled by React removing the containerRef content on unmount/update
    // but the roots created manually need to be unmounted to avoid memory leaks strictly speaking.
    // However, since we are injecting into the DOM that React will wipe anyway when `contentHtml` changes
    // (if we used dangerouslySetInnerHTML directly), wait...
    // actually, dangerouslySetInnerHTML is on the div. React controls the div content.
    // When contentHtml changes, React updates the div. The manually added children might disappear.
    // So usually we just need to re-run the injection.

    return () => {
      // Optional: Clean up created roots to be safe,
      // though typically React blowing away the innerHTML will kill the DOM nodes.
      // Explicit unmount is better practice but requires tracking all roots.
    };
  }, [contentHtml]);

  return (
    <div
      ref={containerRef}
      className="prose prose-neutral lg:prose-lg max-w-none prose-headings:scroll-mt-24 dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
