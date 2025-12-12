import { render, screen } from "@testing-library/react";
import { AllTagsCard } from "@/components/AllTagsCard";
import { expect, test, describe } from "vitest";
import { AllArticle } from "@/components/AllArticle";

describe("記事が取得できるかどうか", () => {
  test("一つ以上記事が取得できているか", () => {
    render(<AllArticle />);
    const articleElements = screen.getAllByRole("link");
    expect(articleElements.length).toBeGreaterThan(1);
  });

  test("記事のリンクが正しいか", () => {
    render(<AllArticle />);
    const articleElements = screen.getAllByRole("link");
    articleElements.forEach((articleElement) => {
      expect(articleElement.getAttribute("href")).toMatch(/\/posts\/.+/);
    });
  });
});
