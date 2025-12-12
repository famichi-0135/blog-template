import { Hero } from "@/components/Hero";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

test("Heroセクションが正常に動作するか", () => {
  describe("Heroコンポーネントの文字要素が正しく表示されるか", () => {
    render(<Hero />);
    const P1Element = screen.getByText(
      /Exploring the unseen corners of the digital world/!
    );
    expect(P1Element).toBeInTheDocument();

    const P2Element = screen.getByText(/Perspectives/!);
    expect(P2Element).toBeInTheDocument();

    const headingElement = screen.getByText(/Thoughts &/!);
    expect(headingElement).toBeInTheDocument();
  });
});
