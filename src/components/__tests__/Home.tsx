import { render, cleanup, queryByTestId } from "@testing-library/react";
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
      searching: false,
      totalCount: Users.length
    };
    const { queryAllByTestId } = renderHome(props);

    expect(queryAllByTestId("user-link")).toHaveLength(3);
  });

  it("should render loader if user is searching", () => {
    const props = {
      userList: [],
      searching: true,
      totalCount: 0
    };

    const { getByTestId } = renderHome(props);

    expect(getByTestId("userslist-loader").textContent).toBe("Loading...");
  });

  it("should render the total count of users", () => {
    const props = {
      userList: Users,
      searching: false,
      totalCount: Users.length
    };
    const { getByTestId } = renderHome(props);

    expect(getByTestId("total-count").textContent).toBe("Users found: 3");
  });

  it("should  not render total count if totalCount is 0", () => {
    const props = {
      userList: [],
      searching: true,
      totalCount: 0
    };

    const { queryByTestId } = renderHome(props);

    expect(queryByTestId("total-count")).toBeNull();
  });
});
