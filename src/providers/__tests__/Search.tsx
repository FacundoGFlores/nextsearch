import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SearchConsumer } from "../Search";
import SearchUserProvider, { mockError } from "../../utils/SearchUsersProvider";
import { wait } from "@apollo/react-testing";

describe("Providers - Search", () => {
  it("consumer shows default userList value", () => {
    const { getByTestId } = render(
      <SearchUserProvider>
        <SearchConsumer>
          {({ userList }) => (
            <div data-testid="list">
              {userList.length === 0 ? "empty" : "not empty"}
            </div>
          )}
        </SearchConsumer>
      </SearchUserProvider>
    );

    expect(getByTestId("list").textContent).toBe("empty");
  });

  it("consumer shows default query value", () => {
    const { getByTestId } = render(
      <SearchUserProvider>
        <SearchConsumer>
          {({ query }) => <div data-testid="query">{`query: ${query}`}</div>}
        </SearchConsumer>
      </SearchUserProvider>
    );

    expect(getByTestId("query").textContent).toBe("query: ");
  });

  it("consumer shows default searching value", () => {
    const { getByTestId } = render(
      <SearchUserProvider>
        <SearchConsumer>
          {({ searching }) => (
            <div data-testid="searching">{!searching && "false"}</div>
          )}
        </SearchConsumer>
      </SearchUserProvider>
    );

    expect(getByTestId("searching").textContent).toBe("false");
  });

  it("consumer can change query through setQuery", () => {
    const { getByTestId } = render(
      <SearchUserProvider>
        <SearchConsumer>
          {({ query, setQuery }) => (
            <React.Fragment>
              <div data-testid="query">{query}</div>
              <button onClick={() => setQuery("foo")} data-testid="button" />
            </React.Fragment>
          )}
        </SearchConsumer>
      </SearchUserProvider>
    );
    expect(getByTestId("query").textContent).toBe("");
    const button = getByTestId("button");
    fireEvent.click(button);
    expect(getByTestId("query").textContent).toBe("foo");
  });

  it("consumer perform a search when a query was set", () => {
    const { getByTestId } = render(
      <SearchUserProvider>
        <SearchConsumer>
          {({ searching, setQuery, search }) => (
            <React.Fragment>
              <div data-testid="searching">{searching ? "true" : "false"}</div>
              <button
                onClick={() => setQuery("foo")}
                data-testid="button-query"
              />
              <button onClick={search} data-testid="button-search" />
            </React.Fragment>
          )}
        </SearchConsumer>
      </SearchUserProvider>
    );
    expect(getByTestId("searching").textContent).toBe("false");
    const buttonQuery = getByTestId("button-query");
    fireEvent.click(buttonQuery);
    const buttonSearch = getByTestId("button-search");
    fireEvent.click(buttonSearch);
    expect(getByTestId("searching").textContent).toBe("true");
  });

  it("consumer performs an error for graphql", async () => {
    const { getByTestId } = render(
      <SearchUserProvider mocks={mockError}>
        <SearchConsumer>
          {({ setQuery, search, error }) => (
            <React.Fragment>
              <div data-testid="error">{error ? "true" : "false"}</div>
              <button
                onClick={() => setQuery("foo")}
                data-testid="button-query"
              />
              <button onClick={search} data-testid="button-search" />
            </React.Fragment>
          )}
        </SearchConsumer>
      </SearchUserProvider>
    );
    expect(getByTestId("error").textContent).toBe("false");
    const buttonQuery = getByTestId("button-query");
    fireEvent.click(buttonQuery);
    const buttonSearch = getByTestId("button-search");
    try {
      await fireEvent.click(buttonSearch);
    } catch (e) {
      expect(getByTestId("searching").textContent).toBe("true");
    }
  });
});
