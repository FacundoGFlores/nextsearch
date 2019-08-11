import { render, cleanup, queryAllByTestId } from "@testing-library/react";
import UsersList from "../UsersList";
import { Users } from "../../fixtures/users";

afterEach(cleanup);

describe("Components - UsersList", () => {
  it("should render UserList with passed query", () => {
    const { queryAllByTestId } = render(
      <UsersList userList={Users} searching={false} />
    );

    expect(queryAllByTestId("user-link")).toHaveLength(3);
  });

  it("should render loader if searching is true", () => {
    const { getByTestId } = render(
      <UsersList userList={Users} searching={true} />
    );

    expect(getByTestId("userslist-loader").textContent).toBe("Loading...");
  });

  it("should render not found when user list is empty and user is not searching", () => {
    const { getByTestId } = render(
      <UsersList userList={[]} searching={false} />
    );

    expect(getByTestId("userslist-notfound").textContent).toBe(
      "No users found."
    );
  });
});
