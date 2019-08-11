import React from "react";
import { render, cleanup } from "@testing-library/react";
import UserCard from "../UserCard";

const user = {
  name: "facundogflores",
  bio: "software engineer",
  avatarUrl: "https://avatars0.githubusercontent.com/u/5167196?v=4",
  url: "https://github.com/FacundoGFlores",
  followersCount: 9,
  starredCount: 6
};

afterEach(cleanup);

describe("Components - UserCard", () => {
  it("should display default name", () => {
    const withoutName = {
      ...user,
      name: null
    };
    const { getByTestId } = render(<UserCard {...withoutName} />);
    expect(getByTestId("user-link").textContent).toBe("No name");
  });
  it("should display name", () => {
    const { getByTestId } = render(<UserCard {...user} />);
    expect(getByTestId("user-link").textContent).toBe("facundogflores");
  });
  it("should display bio", () => {
    const { getByTestId } = render(<UserCard {...user} />);
    expect(getByTestId("user-bio").textContent).toBe("software engineer");
  });
  it("should display number of starred repos", () => {
    const { getByTestId } = render(<UserCard {...user} />);
    expect(getByTestId("user-starred").textContent).toBe("Starred Repos: 6");
  });
  it("should display number of followers", () => {
    const { getByTestId } = render(<UserCard {...user} />);
    expect(getByTestId("user-followers").textContent).toBe("Followers: 9");
  });
  it("card title should contain a link referring to the user url", () => {
    const { getByTestId } = render(<UserCard {...user} />);
    expect(getByTestId("user-link").getAttribute("href")).toBe(
      "https://github.com/FacundoGFlores"
    );
  });
});
