import { render, cleanup } from "@testing-library/react";
import Home from "../Home";

afterEach(cleanup);

describe("Components - Home", () => {
  it("should render secondary button with text SECONDARY", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("secondary-button").textContent).toBe("SECONDARY");
  });

  it("should render primary button with text PRIMARY", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("primary-button").textContent).toBe("PRIMARY");
  });
});
