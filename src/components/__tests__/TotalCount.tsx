import React from "react";
import { render } from "@testing-library/react";
import TotalCount from "../TotalCount";

describe("components - TotalCount", () => {
  it("should render the total count of users", () => {
    const { getByTestId } = render(<TotalCount count={5} />);
    expect(getByTestId("total-count").textContent).toBe("Users found: 5");
  });
});
