import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchProvider, { SearchConsumer } from "../Search";

describe("Providers - Search", () => {
  it("consumer shows default userList value", () => {
    const { getByTestId } = render(
      <SearchProvider>
        <SearchConsumer>
          {({ userList }) => (
            <div data-testid="list">
              {userList.length === 0 ? "empty" : "not empty"}
            </div>
          )}
        </SearchConsumer>
      </SearchProvider>
    );

    expect(getByTestId("list").textContent).toBe("empty");
  });

  it("consumer shows default query value", () => {
    const { getByTestId } = render(
      <SearchProvider>
        <SearchConsumer>
          {({ query }) => <div data-testid="query">{`query: ${query}`}</div>}
        </SearchConsumer>
      </SearchProvider>
    );

    expect(getByTestId("query").textContent).toBe("query: ");
  });

  it("consumer shows default searching value", () => {
    const { getByTestId } = render(
      <SearchProvider>
        <SearchConsumer>
          {({ searching }) => (
            <div data-testid="searching">{!searching && "false"}</div>
          )}
        </SearchConsumer>
      </SearchProvider>
    );

    expect(getByTestId("searching").textContent).toBe("false");
  });

  it("consumer can change query through setQuery", () => {
    const { getByTestId } = render(
      <SearchProvider>
        <SearchConsumer>
          {({ query, setQuery }) => (
            <React.Fragment>
              <div data-testid="query">{query}</div>
              <button onClick={() => setQuery("foo")} data-testid="button" />
            </React.Fragment>
          )}
        </SearchConsumer>
      </SearchProvider>
    );
    expect(getByTestId("query").textContent).toBe("");
    const button = getByTestId("button");
    fireEvent.click(button);
    expect(getByTestId("query").textContent).toBe("foo");
  });

  it("consumer can change searching state through setSearching", () => {
    const { getByTestId } = render(
      <SearchProvider>
        <SearchConsumer>
          {({ searching, setSearching }) => (
            <React.Fragment>
              <div data-testid="searching">{searching ? "true" : "false"}</div>
              <button onClick={() => setSearching(true)} data-testid="button" />
            </React.Fragment>
          )}
        </SearchConsumer>
      </SearchProvider>
    );
    expect(getByTestId("searching").textContent).toBe("false");
    const button = getByTestId("button");
    fireEvent.click(button);
    expect(getByTestId("searching").textContent).toBe("true");
  });
});
