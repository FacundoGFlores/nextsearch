import { render, cleanup } from "@testing-library/react";
import Home from "../Home";
import { Users } from "../../fixtures/users";
import SearchUserProvider from "../../utils/SearchUsersProvider";

afterEach(cleanup);

const renderHome = props =>
  render(
    <SearchUserProvider>
      <Home {...props} />
    </SearchUserProvider>
  );

describe("Components - Home", () => {
  it("should render UserList when there is query and it is not searching", () => {
    const props = {
      userList: Users,
      searching: false
    };
    const { queryAllByTestId } = renderHome(props);

    expect(queryAllByTestId("user-link")).toHaveLength(3);
  });

  it("should render loader if user is searching", () => {
    const props = {
      userList: [],
      searching: true
    };

    const { getByTestId } = renderHome(props);

    expect(getByTestId("userslist-loader").textContent).toBe("Loading...");
  });
});
