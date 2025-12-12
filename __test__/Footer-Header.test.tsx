import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

test("FooterとHeaderセクションが正常に動作するか", () => {
  describe("FooterとHeaderコンポーネントの文字要素が正しく表示されるか", () => {
    render(<Header />);
    const homeElement = screen.getByText(/Home/!);
    expect(homeElement).toBeInTheDocument();

    render(<Footer />);
    const rightsElement = screen.getByText(/All rights reserved./!);
    expect(rightsElement).toBeInTheDocument();
  });
});
