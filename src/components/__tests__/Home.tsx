import { render, cleanup } from "@testing-library/react";
import Home from "../Home";
import SearchProvider from "../../providers/Search";

afterEach(cleanup);

const renderHome = props =>
  render(
    <SearchProvider>
      <Home {...props} />
    </SearchProvider>
  );

describe("Components - Home", () => {
  it("should render UserList when there is query and it is searching", () => {
    const props = {
      query: "foo",
      searching: true
    };
    const { getByTestId } = renderHome(props);

    expect(getByTestId("users-list").textContent).toBe("Searching for: foo");
  });

  it("should render Welcome when searching is false ", () => {
    const props = {
      query: "",
      searching: false
    };

    const { getByTestId } = renderHome(props);

    expect(getByTestId("home-title").textContent).toContain(
      "Github User Search"
    );
  });
});
