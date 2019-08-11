import { render, cleanup } from "@testing-library/react";
import UsersList from "../UsersList";

afterEach(cleanup);

describe("Components - UsersList", () => {
  it("should render UserList with passed query", () => {
    const { getByTestId } = render(<UsersList query="foo" />);

    expect(getByTestId("users-list").textContent).toBe("Searching for: foo");
  });
});
