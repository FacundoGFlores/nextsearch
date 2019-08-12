import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";
import SearchUserProvider from "../../utils/SearchUsersProvider";

const renderHome = () =>
  render(
    <SearchUserProvider>
      <Home />
    </SearchUserProvider>
  );

describe("Containers - Home", () => {
  it("should show users not found as default", () => {
    const { getByTestId } = renderHome();
    expect(getByTestId("userslist-notfound").textContent).toBe(
      "No users found."
    );
  });
});
