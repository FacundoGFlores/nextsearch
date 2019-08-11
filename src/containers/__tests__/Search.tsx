import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "../Search";
import SearchProvider, { SearchConsumer } from "../../providers/Search";

describe("Containers - Search", () => {
  it("should call setSearching with true when onEnter is called", () => {
    const { getByTestId, getByPlaceholderText } = render(
      <SearchProvider>
        <Search />
        <SearchConsumer>
          {({ searching }) => (
            <div data-testid="searching">{searching ? "true" : "false"}</div>
          )}
        </SearchConsumer>
      </SearchProvider>
    );
    expect(getByTestId("searching").textContent).toBe("false");
    const inputComponent = getByPlaceholderText("Search...");
    fireEvent.blur(inputComponent);
    expect(getByTestId("searching").textContent).toBe("true");
  });

  it("should call setQuery with query value", () => {
    const { getByTestId, getByPlaceholderText } = render(
      <SearchProvider>
        <Search />
        <SearchConsumer>
          {({ query }) => <div data-testid="query">{query}</div>}
        </SearchConsumer>
      </SearchProvider>
    );
    expect(getByTestId("query").textContent).toBe("");
    const inputComponent = getByPlaceholderText("Search...");
    fireEvent.change(inputComponent, { target: { value: "foo" } });
    expect(getByTestId("query").textContent).toBe("foo");
  });
});
