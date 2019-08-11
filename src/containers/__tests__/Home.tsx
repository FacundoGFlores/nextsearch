import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";

const renderHome = () => render(<Home />);

describe("Containers - Home", () => {
  it("should show welcome as default", () => {
    const { getByTestId } = renderHome();
    expect(getByTestId("home-title").textContent).toBe("Github User Search");
  });
});
