import React from "react";
import { render } from "@testing-library/react";

import Welcome from "../Welcome";

describe("Components - Welcome", () => {
  it("should render right title", () => {
    const { getByTestId } = render(<Welcome />);

    expect(getByTestId("home-title").textContent).toBe("Github User Search");
  });

  it("should render right description", () => {
    const { getByTestId } = render(<Welcome />);

    expect(getByTestId("home-description").textContent).toBe(
      "Using graphql github api to perform users search."
    );
  });

  it("should render a link to github api", () => {
    const { getByTestId } = render(<Welcome />);

    expect(getByTestId("github-link").getAttribute("href")).toBe(
      "https://developer.github.com/v4/"
    );
  });
});
