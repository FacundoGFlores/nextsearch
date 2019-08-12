import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "../Search";
import { SearchConsumer } from "../../providers/Search";
import SearchUserProvider from "../../utils/SearchUsersProvider";

describe("Containers - Search", () => {
  it("should call setQuery with query value", () => {
    const { getByTestId, getByPlaceholderText } = render(
      <SearchUserProvider>
        <Search />
        <SearchConsumer>
          {({ query }) => <div data-testid="query">{query}</div>}
        </SearchConsumer>
      </SearchUserProvider>
    );
    expect(getByTestId("query").textContent).toBe("");
    const inputComponent = getByPlaceholderText("Search...");
    fireEvent.change(inputComponent, { target: { value: "foo" } });
    expect(getByTestId("query").textContent).toBe("foo");
  });
});
