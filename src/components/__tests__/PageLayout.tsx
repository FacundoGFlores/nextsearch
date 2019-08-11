import React from "react";
import { render } from "@testing-library/react";
import PageLayout from "../PageLayout";
import SearchProvider from "../../providers/Search";

const renderPageLayout = () =>
  render(
    <SearchProvider>
      <PageLayout>{"foo"}</PageLayout>
    </SearchProvider>
  );

describe("Components - PageLayout", () => {
  it("should render right title", () => {
    const { getByTestId } = renderPageLayout();

    expect(getByTestId("layout-title").textContent).toBe("Next Search");
  });

  it("should render children", () => {
    const { getByTestId } = renderPageLayout();

    expect(getByTestId("layout-container").textContent).toBe("foo");
  });

  it("should render search", () => {
    const { getByPlaceholderText } = renderPageLayout();

    expect(getByPlaceholderText("Search...").getAttribute("type")).toBe("text");
  });
});
