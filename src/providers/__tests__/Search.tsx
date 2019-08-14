import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { SearchConsumer } from "../Search";
import SearchUserProvider from "../../utils/SearchUsersProvider";
import { UsersError } from "../../utils/__fixtures__/usersResponse";
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

  it("consumer perform a search when a query was set", async () => {
    const { getByTestId, getAllByTestId } = render(
      <SearchUserProvider>
        <SearchConsumer>
          {({ searching, setQuery, search, userList }) => (
            <React.Fragment>
              <div data-testid="searching">{searching ? "true" : "false"}</div>
              <button
                onClick={() => setQuery("facundo")}
                data-testid="button-query"
              />
              <button onClick={search} data-testid="button-search" />
              {userList.map((u, i) => (
                <div data-testid="user" key={i}>
                  {u.name}
                </div>
              ))}
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
    await wait(1);

    process.nextTick(() => {
      expect(getAllByTestId("user")).toMatchInlineSnapshot(`
                                        Array [
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Olano
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Batista
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Farias
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Domínguez
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Cabrera
                                          </div>,
                                        ]
                              `);
    });
  });

  it("user should be able to navigate forward", async () => {
    const { getByTestId, getAllByTestId } = render(
      <SearchUserProvider>
        <SearchConsumer>
          {({ onForward, setQuery, search, userList }) => (
            <React.Fragment>
              <button
                onClick={() => setQuery("facundo")}
                data-testid="button-query"
              />
              <button onClick={search} data-testid="button-search" />
              <button onClick={onForward} data-testid="button-forward" />
              {userList.map((u, i) => (
                <div data-testid="user" key={i}>
                  {u.name}
                </div>
              ))}
            </React.Fragment>
          )}
        </SearchConsumer>
      </SearchUserProvider>
    );
    const buttonQuery = getByTestId("button-query");
    fireEvent.click(buttonQuery);
    const buttonSearch = getByTestId("button-search");
    fireEvent.click(buttonSearch);
    await wait(1);

    process.nextTick(() => {
      expect(getAllByTestId("user")).toMatchInlineSnapshot(`
                                        Array [
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Olano
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Batista
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Farias
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Domínguez
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Cabrera
                                          </div>,
                                        ]
                              `);
    });
    const buttonNext = getByTestId("button-forward");
    fireEvent.click(buttonNext);
    await wait(1);
    process.nextTick(() => {
      expect(getAllByTestId("user")).toMatchInlineSnapshot(`
                                Array [
                                  <div
                                    data-testid="user"
                                  />,
                                  <div
                                    data-testid="user"
                                  >
                                    Facundo Victor
                                  </div>,
                                  <div
                                    data-testid="user"
                                  >
                                    Facundo Quiroga
                                  </div>,
                                  <div
                                    data-testid="user"
                                  >
                                    Facundo
                                  </div>,
                                  <div
                                    data-testid="user"
                                  >
                                    Facundo Viale
                                  </div>,
                                ]
                        `);
    });
  });

  it("user should be able to navigate backwards", async () => {
    const { getByTestId, getAllByTestId } = render(
      <SearchUserProvider>
        <SearchConsumer>
          {({ onBack, onForward, setQuery, search, userList }) => (
            <React.Fragment>
              <button
                onClick={() => setQuery("facundo")}
                data-testid="button-query"
              />
              <button onClick={search} data-testid="button-search" />
              <button onClick={onForward} data-testid="button-forward" />
              <button onClick={onBack} data-testid="button-backward" />
              {userList.map((u, i) => (
                <div data-testid="user" key={i}>
                  {u.name}
                </div>
              ))}
            </React.Fragment>
          )}
        </SearchConsumer>
      </SearchUserProvider>
    );
    const buttonQuery = getByTestId("button-query");
    fireEvent.click(buttonQuery);
    const buttonSearch = getByTestId("button-search");
    fireEvent.click(buttonSearch);
    await wait(10);

    process.nextTick(() => {
      expect(getAllByTestId("user")).toMatchInlineSnapshot(`
                                        Array [
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Olano
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Batista
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Farias
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Domínguez
                                          </div>,
                                          <div
                                            data-testid="user"
                                          >
                                            Facundo Cabrera
                                          </div>,
                                        ]
                              `);
    });

    const buttonNext = getByTestId("button-forward");
    fireEvent.click(buttonNext);
    await wait(0);

    fireEvent.click(buttonNext);
    await wait(0);
    process.nextTick(() => {
      expect(getAllByTestId("user")).toMatchInlineSnapshot(`
        Array [
          <div
            data-testid="user"
          >
            Facundo Mainere
          </div>,
          <div
            data-testid="user"
          >
            Facundo Flores
          </div>,
          <div
            data-testid="user"
          >
            Facundo Montero
          </div>,
          <div
            data-testid="user"
          >
            Facundo Muñoz
          </div>,
          <div
            data-testid="user"
          >
            Facundo Chamut
          </div>,
        ]
      `);
    });

    await wait(1);

    const buttonBack = getByTestId("button-backward");
    fireEvent.click(buttonBack);
    await wait(1);
    process.nextTick(() => {
      expect(getAllByTestId("user")).toMatchInlineSnapshot(`
                Array [
                  <div
                    data-testid="user"
                  />,
                  <div
                    data-testid="user"
                  >
                    Facundo Victor
                  </div>,
                  <div
                    data-testid="user"
                  >
                    Facundo Quiroga
                  </div>,
                  <div
                    data-testid="user"
                  >
                    Facundo
                  </div>,
                  <div
                    data-testid="user"
                  >
                    Facundo Viale
                  </div>,
                ]
            `);
    });
  });
});
