import { render, screen } from "@testing-library/react";
import { AllTagsCard } from "@/components/AllTagsCard";
import { expect, test } from "vitest";

test("renders AllTagsCard component", () => {
  render(<AllTagsCard />);
  const heading = screen.getAllByRole("heading", { name: "全てのタグ" });
  expect(heading).toBeDefined();
});

test("AllTagsCard displays tags", () => {
  render(<AllTagsCard />);
  const tagElements = screen.getAllByRole("link");
  expect(tagElements.length).toBeGreaterThan(0);
});

test("AllTagsCard links have correct hrefs", () => {
  render(<AllTagsCard />);
  const tagElements = screen.getAllByRole("link");
  tagElements.forEach((tagElement) => {
    expect(tagElement.getAttribute("href")).toMatch(/\/tags\/.+/);
  });
});
